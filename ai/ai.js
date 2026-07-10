/* =====================================================
   BUILDFRAME AI CENTER
   File: ai/ai.js

   Purpose:
   Professor Owl floating guided AI controller.

   Features:
   - One visible Professor Owl chatbot
   - Guided clickable conversation choices
   - Visitor choices appear as visitor messages
   - Immediate useful Professor Owl responses
   - Next logical choices appear automatically
   - Free typing remains available
   - AI Center remains accessible
   - Facebook Messenger human support remains available
   - Pointer Events for mouse, touch, and stylus
   - Movable across desktop, tablet, Android, iPhone, iPad
   - Keeps the widget inside the visible viewport
   - Prevents dragging from triggering accidental clicks
   - Supports resizing and device rotation
   - Removes playful emoji from client-facing AI answers

   Guided principle:
   Do not make visitors figure out what to ask.
   Guide them with choices, answer immediately,
   and offer the next logical choice.
===================================================== */

(function () {
    "use strict";

    const config = window.BuildFrameAIConfig || {};
    const engine = window.BuildFrameAIEngine || null;
    const supportBrain = window.BuildFrameAISupport || null;

    const ui = config.ui || {};
    const behavior = config.behavior || {};

    const SELECTORS = {
        root: "[data-partner-prof-root]",
        launcher: "[data-partner-prof-launcher]",
        panel: "[data-partner-prof-panel]",
        close: "[data-partner-prof-close]",
        messages: "[data-partner-prof-messages]",
        form: "[data-partner-prof-form]",
        input: "[data-partner-prof-input]",
        suggestions: "[data-partner-prof-suggestions]",
        dragHandle: "[data-partner-prof-drag-handle]",
        aiCenterLink: ".partner-prof-center-link",
        messengerLink: ".partner-prof-messenger-link"
    };

    const VIEWPORT_GAP = 8;
    const DRAG_THRESHOLD = 6;

    const dragState = {
        active: false,
        didMove: false,
        suppressNextClick: false,
        pointerId: null,
        startX: 0,
        startY: 0,
        initialLeft: 0,
        initialTop: 0
    };

    const guidedState = {
        initialized: false,
        currentStepId: "support-start"
    };

    function getElement(selector) {
        return document.querySelector(selector);
    }

    function getRoot() {
        return getElement(SELECTORS.root);
    }

    function getPanel() {
        return getElement(SELECTORS.panel);
    }

    function getLauncher() {
        return getElement(SELECTORS.launcher);
    }

    /* =====================================================
       PROFESSIONAL TEXT CLEANING
    ===================================================== */

    function cleanProfessionalText(text) {
        return String(text || "")
            .replace(
                /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu,
                ""
            )
            .replace(/\s{2,}/g, " ")
            .replace(/\s+([,.!?;:])/g, "$1")
            .trim();
    }

    /* =====================================================
       CHAT MESSAGES
    ===================================================== */

    function createMessage(role, text) {
        const message = document.createElement("div");

        message.className =
            role === "user"
                ? "partner-prof-message user"
                : "partner-prof-message prof";

        message.textContent = cleanProfessionalText(text);

        return message;
    }

    function scrollMessagesToBottom() {
        const messagesEl = getElement(
            SELECTORS.messages
        );

        if (!messagesEl) {
            return;
        }

        requestAnimationFrame(function () {
            messagesEl.scrollTop =
                messagesEl.scrollHeight;
        });
    }

    function addMessage(role, text) {
        const messagesEl = getElement(
            SELECTORS.messages
        );

        const cleanedText =
            cleanProfessionalText(text);

        if (!messagesEl || !cleanedText) {
            return;
        }

        messagesEl.appendChild(
            createMessage(role, cleanedText)
        );

        scrollMessagesToBottom();
    }

    /* =====================================================
       PANEL OPEN / CLOSE
    ===================================================== */

    function isPanelOpen() {
        const panel = getPanel();

        return !!(
            panel &&
            panel.classList.contains("is-open")
        );
    }

    function openPanel() {
        const panel = getPanel();
        const launcher = getLauncher();

        if (panel) {
            panel.classList.add("is-open");
            panel.setAttribute(
                "aria-hidden",
                "false"
            );
        }

        if (launcher) {
            launcher.setAttribute(
                "aria-expanded",
                "true"
            );
        }

        if (!guidedState.initialized) {
            seedGuidedConversation();
        }

        keepWidgetInsideViewport();

        window.setTimeout(function () {
            scrollMessagesToBottom();
        }, 120);
    }

    function closePanel() {
        const panel = getPanel();
        const launcher = getLauncher();

        if (panel) {
            panel.classList.remove("is-open");
            panel.setAttribute(
                "aria-hidden",
                "true"
            );
        }

        if (launcher) {
            launcher.setAttribute(
                "aria-expanded",
                "false"
            );
        }

        keepWidgetInsideViewport();
    }

    function togglePanel() {
        if (dragState.suppressNextClick) {
            dragState.suppressNextClick = false;
            return;
        }

        if (isPanelOpen()) {
            closePanel();
        } else {
            openPanel();
        }
    }

    /* =====================================================
       FREE-TEXT AI ANSWERS
    ===================================================== */

    function getAnswer(message) {
        if (
            engine &&
            typeof engine.answer === "function"
        ) {
            return cleanProfessionalText(
                engine.answer(message)
            );
        }

        return cleanProfessionalText(
            behavior.fallbackMessage ||
            "That is a useful journey to explore. Which part of the business should we examine first?"
        );
    }

    function handleSubmit(event) {
        event.preventDefault();

        const input = getElement(SELECTORS.input);

        if (!input) {
            return;
        }

        const value = input.value.trim();

        if (!value) {
            return;
        }

        addMessage("user", value);

        input.value = "";

        const answer = getAnswer(value);

        addMessage("prof", answer);

        if (!getCurrentChoices().length) {
            renderFallbackChoices();
        }
    }

    /* =====================================================
       GUIDED CONVERSATION ENGINE
    ===================================================== */

    function getEntryStep() {
        if (
            supportBrain &&
            typeof supportBrain.getEntryStep ===
            "function"
        ) {
            return supportBrain.getEntryStep();
        }

        return {
            id: "support-start",

            message:
                "What kind of business journey are we exploring today?",

            choices: [
                {
                    id: "fallback-construction",
                    label:
                        "Construction & Contractors",
                    nextStep:
                        "construction-business"
                },
                {
                    id: "fallback-food",
                    label: "Food Business",
                    nextStep: "food-business"
                },
                {
                    id: "fallback-services",
                    label:
                        "Professionals & Services",
                    nextStep:
                        "professional-service"
                },
                {
                    id: "fallback-surveys",
                    label: "Surveys & Insights",
                    nextStep: "survey-insights"
                },
                {
                    id: "fallback-retail",
                    label:
                        "Retail & Operations",
                    nextStep:
                        "retail-operations"
                }
            ]
        };
    }

    function getCurrentChoices() {
        const suggestionsEl = getElement(
            SELECTORS.suggestions
        );

        if (!suggestionsEl) {
            return [];
        }

        return Array.from(
            suggestionsEl.querySelectorAll(
                "[data-partner-prof-guided-choice]"
            )
        );
    }

    function clearChoices() {
        const suggestionsEl = getElement(
            SELECTORS.suggestions
        );

        if (!suggestionsEl) {
            return;
        }

        suggestionsEl.innerHTML = "";
    }

    function renderChoices(step) {
        const suggestionsEl = getElement(
            SELECTORS.suggestions
        );

        if (!suggestionsEl) {
            return;
        }

        suggestionsEl.innerHTML = "";

        if (
            !step ||
            !Array.isArray(step.choices) ||
            !step.choices.length
        ) {
            return;
        }

        step.choices.forEach(function (choice) {
            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "partner-prof-suggestion partner-prof-guided-choice";

            button.setAttribute(
                "data-partner-prof-guided-choice",
                choice.id
            );

            button.textContent =
                cleanProfessionalText(choice.label);

            suggestionsEl.appendChild(button);
        });
    }

    function showGuidedStep(step) {
        if (!step) {
            showGuidedFallback();
            return;
        }

        guidedState.currentStepId =
            step.id || "support-start";

        if (step.message) {
            addMessage("prof", step.message);
        }

        if (step.description) {
            addMessage("prof", step.description);
        }

        renderChoices(step);
    }

    function showGuidedFallback() {
        if (
            supportBrain &&
            typeof supportBrain.getFallbackStep ===
            "function"
        ) {
            showGuidedStep(
                supportBrain.getFallbackStep()
            );

            return;
        }

        addMessage(
            "prof",
            "Let us make this easier. Choose the closest starting point."
        );

        renderFallbackChoices();
    }

    function renderFallbackChoices() {
        renderChoices({
            id: "support-fallback",

            choices: [
                {
                    id: "fallback-system",
                    label:
                        "Help Me Choose a System",
                    nextStep: "choose-system"
                },
                {
                    id: "fallback-business",
                    label: "Discuss My Business",
                    nextStep: "discuss-business"
                },
                {
                    id: "fallback-projects",
                    label:
                        "Explore Featured Projects",
                    nextStep: "featured-projects"
                },
                {
                    id: "fallback-ai-center",
                    label: "Open AI Center",
                    action: "open-ai-center"
                },
                {
                    id: "fallback-human",
                    label:
                        "Chat With a Real Person",
                    action: "open-messenger"
                }
            ]
        });
    }

    function seedGuidedConversation() {
        if (guidedState.initialized) {
            return;
        }

        guidedState.initialized = true;

        const messagesEl = getElement(
            SELECTORS.messages
        );

        if (messagesEl) {
            messagesEl.innerHTML = "";
        }

        showGuidedStep(getEntryStep());
    }

    function getAiCenterUrl() {
        const link = getElement(
            SELECTORS.aiCenterLink
        );

        return link
            ? link.href
            : "ai/ai.html";
    }

    function getMessengerUrl() {
        const link = getElement(
            SELECTORS.messengerLink
        );

        if (link && link.href) {
            return link.href;
        }

        if (
            supportBrain &&
            supportBrain.facebookPageUrl
        ) {
            return supportBrain.facebookPageUrl;
        }

        return "https://www.facebook.com/profile.php?id=61573627290922";
    }

    function openExternalUrl(url) {
        if (!url) {
            return;
        }

        const newWindow = window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

        if (newWindow) {
            newWindow.opener = null;
        }
    }

    function performGuidedAction(result) {
        if (!result || !result.action) {
            showGuidedFallback();
            return;
        }

        if (result.action === "open-ai-center") {
            addMessage(
                "prof",
                "The BuildFrame AI Center is ready for deeper exploration of platforms, proof projects, business journeys, and AI possibilities."
            );

            window.location.href =
                getAiCenterUrl();

            return;
        }

        if (result.action === "open-messenger") {
            addMessage(
                "prof",
                "You can continue with a real person through Facebook Messenger. Please do not share passwords or sensitive private records."
            );

            openExternalUrl(
                getMessengerUrl()
            );

            renderFallbackChoices();

            return;
        }

        if (result.action === "open-url") {
            addMessage(
                "prof",
                "The live BuildFrame experience will open in a new tab."
            );

            openExternalUrl(result.url);

            renderFallbackChoices();

            return;
        }

        showGuidedFallback();
    }

    function handleGuidedChoiceClick(event) {
        const button = event.target.closest(
            "[data-partner-prof-guided-choice]"
        );

        if (!button) {
            return;
        }

        const choiceId = button.getAttribute(
            "data-partner-prof-guided-choice"
        );

        if (!choiceId) {
            return;
        }

        if (
            !supportBrain ||
            typeof supportBrain.resolveChoice !==
            "function"
        ) {
            showGuidedFallback();
            return;
        }

        const currentStepId =
            guidedState.currentStepId ||
            "support-start";

        const result =
            supportBrain.resolveChoice(
                currentStepId,
                choiceId
            );

        clearChoices();

        if (result && result.visitorMessage) {
            addMessage(
                "user",
                result.visitorMessage
            );
        }

        if (!result) {
            showGuidedFallback();
            return;
        }

        if (
            result.type === "step" &&
            result.step
        ) {
            window.setTimeout(function () {
                showGuidedStep(result.step);
            }, 160);

            return;
        }

        if (result.type === "action") {
            window.setTimeout(function () {
                performGuidedAction(result);
            }, 160);

            return;
        }

        if (
            result.type === "fallback" &&
            result.step
        ) {
            window.setTimeout(function () {
                showGuidedStep(result.step);
            }, 160);

            return;
        }

        showGuidedFallback();
    }

    /* =====================================================
       LEGACY SUGGESTED TOPICS FALLBACK
    ===================================================== */

    function injectLegacySuggestedTopics() {
        if (supportBrain) {
            return;
        }

        const suggestionsEl = getElement(
            SELECTORS.suggestions
        );

        if (!suggestionsEl) {
            return;
        }

        const topics = Array.isArray(
            config.suggestedTopics
        )
            ? config.suggestedTopics
            : [];

        if (!topics.length) {
            return;
        }

        suggestionsEl.innerHTML = "";

        topics.slice(0, 4).forEach(function (topic) {
            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "partner-prof-suggestion";

            button.setAttribute(
                "data-partner-prof-free-suggestion",
                topic
            );

            button.textContent =
                cleanProfessionalText(topic);

            suggestionsEl.appendChild(button);
        });
    }

    function handleLegacySuggestionClick(event) {
        const button = event.target.closest(
            "[data-partner-prof-free-suggestion]"
        );

        if (!button) {
            return;
        }

        const message = button.getAttribute(
            "data-partner-prof-free-suggestion"
        );

        if (!message) {
            return;
        }

        addMessage("user", message);
        addMessage("prof", getAnswer(message));

        openPanel();
    }

    /* =====================================================
       VIEWPORT SAFETY
    ===================================================== */

    function getViewportSize() {
        const visualViewport =
            window.visualViewport;

        return {
            width:
                visualViewport &&
                    visualViewport.width
                    ? visualViewport.width
                    : window.innerWidth,

            height:
                visualViewport &&
                    visualViewport.height
                    ? visualViewport.height
                    : window.innerHeight
        };
    }

    function convertRootToFixedCoordinates() {
        const root = getRoot();

        if (!root) {
            return;
        }

        const rect =
            root.getBoundingClientRect();

        root.style.left = rect.left + "px";
        root.style.top = rect.top + "px";
        root.style.right = "auto";
        root.style.bottom = "auto";
    }

    function keepWidgetInsideViewport() {
        const root = getRoot();

        if (!root) {
            return;
        }

        const viewport = getViewportSize();
        const rect =
            root.getBoundingClientRect();

        const width = Math.min(
            rect.width,
            Math.max(
                0,
                viewport.width -
                VIEWPORT_GAP * 2
            )
        );

        const height = Math.min(
            rect.height,
            Math.max(
                0,
                viewport.height -
                VIEWPORT_GAP * 2
            )
        );

        const currentLeft =
            Number.parseFloat(
                root.style.left
            );

        const currentTop =
            Number.parseFloat(
                root.style.top
            );

        if (
            Number.isNaN(currentLeft) ||
            Number.isNaN(currentTop)
        ) {
            return;
        }

        const maxLeft = Math.max(
            VIEWPORT_GAP,
            viewport.width -
            width -
            VIEWPORT_GAP
        );

        const maxTop = Math.max(
            VIEWPORT_GAP,
            viewport.height -
            height -
            VIEWPORT_GAP
        );

        root.style.left =
            Math.max(
                VIEWPORT_GAP,
                Math.min(
                    currentLeft,
                    maxLeft
                )
            ) + "px";

        root.style.top =
            Math.max(
                VIEWPORT_GAP,
                Math.min(
                    currentTop,
                    maxTop
                )
            ) + "px";
    }

    /* =====================================================
       POINTER-BASED DRAGGING
    ===================================================== */

    function shouldIgnoreDragTarget(target) {
        if (!(target instanceof Element)) {
            return true;
        }

        return !!target.closest(
            "a, input, textarea, select, option, button:not([data-partner-prof-launcher]), [contenteditable='true']"
        );
    }

    function startDrag(event) {
        const root = getRoot();

        if (!root) {
            return;
        }

        if (
            event.pointerType === "mouse" &&
            event.button !== 0
        ) {
            return;
        }

        if (shouldIgnoreDragTarget(event.target)) {
            return;
        }

        const launcher = getLauncher();

        const dragHandle = getElement(
            SELECTORS.dragHandle
        );

        const startedOnLauncher =
            launcher &&
            (
                event.target === launcher ||
                launcher.contains(event.target)
            );

        const startedOnHandle =
            dragHandle &&
            (
                event.target === dragHandle ||
                dragHandle.contains(event.target)
            );

        if (
            !startedOnLauncher &&
            !startedOnHandle
        ) {
            return;
        }

        convertRootToFixedCoordinates();

        const rect =
            root.getBoundingClientRect();

        dragState.active = true;
        dragState.didMove = false;
        dragState.pointerId =
            event.pointerId;

        dragState.startX = event.clientX;
        dragState.startY = event.clientY;

        dragState.initialLeft = rect.left;
        dragState.initialTop = rect.top;

        root.classList.add("is-dragging");

        document.body.classList.add(
            "partner-prof-is-dragging"
        );

        if (
            event.currentTarget &&
            typeof event.currentTarget
                .setPointerCapture ===
            "function"
        ) {
            try {
                event.currentTarget
                    .setPointerCapture(
                        event.pointerId
                    );
            } catch (error) {
                console.warn(
                    "Professor Owl pointer capture unavailable:",
                    error
                );
            }
        }

        event.preventDefault();
    }

    function moveDrag(event) {
        if (
            !dragState.active ||
            event.pointerId !==
            dragState.pointerId
        ) {
            return;
        }

        const root = getRoot();

        if (!root) {
            return;
        }

        const deltaX =
            event.clientX -
            dragState.startX;

        const deltaY =
            event.clientY -
            dragState.startY;

        if (
            Math.abs(deltaX) >=
            DRAG_THRESHOLD ||
            Math.abs(deltaY) >=
            DRAG_THRESHOLD
        ) {
            dragState.didMove = true;
        }

        const viewport = getViewportSize();

        const rect =
            root.getBoundingClientRect();

        const maxLeft = Math.max(
            VIEWPORT_GAP,
            viewport.width -
            rect.width -
            VIEWPORT_GAP
        );

        const maxTop = Math.max(
            VIEWPORT_GAP,
            viewport.height -
            rect.height -
            VIEWPORT_GAP
        );

        const nextLeft = Math.max(
            VIEWPORT_GAP,
            Math.min(
                dragState.initialLeft +
                deltaX,
                maxLeft
            )
        );

        const nextTop = Math.max(
            VIEWPORT_GAP,
            Math.min(
                dragState.initialTop +
                deltaY,
                maxTop
            )
        );

        root.style.left =
            nextLeft + "px";

        root.style.top =
            nextTop + "px";

        event.preventDefault();
    }

    function endDrag(event) {
        if (!dragState.active) {
            return;
        }

        if (
            event.pointerId !== undefined &&
            event.pointerId !==
            dragState.pointerId
        ) {
            return;
        }

        const root = getRoot();

        dragState.active = false;

        if (dragState.didMove) {
            dragState.suppressNextClick = true;
        }

        dragState.pointerId = null;

        if (root) {
            root.classList.remove(
                "is-dragging"
            );
        }

        document.body.classList.remove(
            "partner-prof-is-dragging"
        );

        keepWidgetInsideViewport();

        window.setTimeout(function () {
            dragState.didMove = false;
        }, 0);
    }

    function bindDragging() {
        const launcher = getLauncher();

        const dragHandle = getElement(
            SELECTORS.dragHandle
        );

        [launcher, dragHandle]
            .filter(Boolean)
            .forEach(function (element) {
                element.addEventListener(
                    "pointerdown",
                    startDrag
                );
            });

        document.addEventListener(
            "pointermove",
            moveDrag,
            { passive: false }
        );

        document.addEventListener(
            "pointerup",
            endDrag
        );

        document.addEventListener(
            "pointercancel",
            endDrag
        );
    }

    /* =====================================================
       RESPONSIVE ADJUSTMENTS
    ===================================================== */

    function handleViewportChange() {
        keepWidgetInsideViewport();
        scrollMessagesToBottom();
    }

    function bindViewportEvents() {
        window.addEventListener(
            "resize",
            handleViewportChange
        );

        window.addEventListener(
            "orientationchange",
            function () {
                window.setTimeout(
                    handleViewportChange,
                    180
                );
            }
        );

        if (window.visualViewport) {
            window.visualViewport
                .addEventListener(
                    "resize",
                    handleViewportChange
                );

            window.visualViewport
                .addEventListener(
                    "scroll",
                    handleViewportChange
                );
        }
    }

    /* =====================================================
       EVENTS
    ===================================================== */

    function bindEvents() {
        const launcher = getLauncher();

        const close = getElement(
            SELECTORS.close
        );

        const form = getElement(
            SELECTORS.form
        );

        const suggestions = getElement(
            SELECTORS.suggestions
        );

        if (launcher) {
            launcher.addEventListener(
                "click",
                togglePanel
            );
        }

        if (close) {
            close.addEventListener(
                "click",
                closePanel
            );
        }

        if (form) {
            form.addEventListener(
                "submit",
                handleSubmit
            );
        }

        if (suggestions) {
            suggestions.addEventListener(
                "click",
                handleGuidedChoiceClick
            );

            suggestions.addEventListener(
                "click",
                handleLegacySuggestionClick
            );
        }

        document.addEventListener(
            "keydown",
            function (event) {
                if (event.key === "Escape") {
                    closePanel();
                }
            }
        );
    }

    /* =====================================================
       INITIALIZE
    ===================================================== */

    function init() {
        if (ui.floatingAIEnabled === false) {
            return;
        }

        bindEvents();
        bindDragging();
        bindViewportEvents();

        if (supportBrain) {
            seedGuidedConversation();
        } else {
            injectLegacySuggestedTopics();

            addMessage(
                "prof",
                behavior.defaultGreeting ||
                "Welcome. What kind of business journey should we explore first?"
            );
        }

        keepWidgetInsideViewport();

        console.info(
            "Professor Owl guided AI ready:",
            {
                engineLoaded: !!engine,

                supportBrainLoaded:
                    !!supportBrain,

                configLoaded:
                    !!window.BuildFrameAIConfig,

                guidedConversation:
                    !!supportBrain,

                freeTypingAvailable: true,

                aiCenterAccessible:
                    !!getElement(
                        SELECTORS.aiCenterLink
                    ),

                messengerAvailable:
                    !!getElement(
                        SELECTORS.messengerLink
                    ),

                pointerEvents:
                    "PointerEvent" in window,

                responsive: true
            }
        );
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            init,
            { once: true }
        );
    } else {
        init();
    }
})();