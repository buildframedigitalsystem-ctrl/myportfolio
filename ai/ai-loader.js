/* =====================================================
   BUILDFRAME AI CENTER
   File: ai/ai-loader.js

   Purpose:
   Loads the BuildFrame AI experience across portfolio pages.

   Includes:
   - Professor Owl floating portfolio AI
   - Guided conversation support inside Professor Owl
   - Free-text chat as a secondary option
   - Full AI Center access
   - Facebook Messenger human assistance handoff
   - Responsive desktop, tablet, and mobile support

   IMPORTANT:
   There is only ONE visible AI chatbot experience:
   Professor Owl.

   Professor Owl:
   - Movable portfolio AI
   - Guided conversation assistant
   - Free-text capable
   - Keeps AI Center accessible
   - Can hand visitors to human assistance on Messenger
===================================================== */

(function () {
    "use strict";

    const CURRENT_SCRIPT =
        document.currentScript ||
        document.querySelector('script[src$="ai-loader.js"]');

    const BASE_PATH = CURRENT_SCRIPT
        ? CURRENT_SCRIPT.src.replace(/ai-loader\.js(\?.*)?$/, "")
        : "ai/";

    const AI_CENTER_URL = BASE_PATH + "ai.html";

    const FACEBOOK_PAGE_URL =
        "https://www.facebook.com/profile.php?id=61573627290922";

    const CSS_FILES = [
        "ai.css"
    ];

    const KNOWLEDGE_FILES = [
        "knowledge/buildframe-strategy.js",
        "knowledge/featured-projects.js",
        "knowledge/platform-worlds.js",
        "knowledge/surveys-platform.js",
        "knowledge/food-business.js",
        "knowledge/professionals-services.js",
        "knowledge/construction-contractors.js",
        "knowledge/education-academy.js",
        "knowledge/business-operations.js",
        "knowledge/ai-assistants.js",
        "knowledge/client-portals.js",
        "knowledge/custom-systems.js",
        "knowledge/pet-projects.js",
        "knowledge/one-leyte.js",
        "knowledge/tides-of-hope.js",
        "knowledge/mn-consumer-goods.js",
        "knowledge/tinyteam-genealogy.js"
    ];

    const CORE_FILES = [
        "ai-config.js",
        "ai-context.js",
        "ai-router.js",
        "ai-prompts.js",
        "ai-memory.js",
        "ai-va.js",
        "ai-sales.js",
        "ai-support.js",
        "ai-insights.js",
        "ai-engine.js"
    ];

    function loadCSS(path) {
        return new Promise(function (resolve) {
            const href = BASE_PATH + path;

            const existing = Array.from(
                document.querySelectorAll('link[rel="stylesheet"]')
            ).find(function (link) {
                return link.href === href;
            });

            if (existing) {
                resolve();
                return;
            }

            const link = document.createElement("link");

            link.rel = "stylesheet";
            link.href = href;

            link.onload = resolve;

            link.onerror = function () {
                console.warn(
                    "BuildFrame AI CSS failed to load:",
                    path
                );

                resolve();
            };

            document.head.appendChild(link);
        });
    }

    function loadScript(path) {
        return new Promise(function (resolve) {
            const src = BASE_PATH + path;

            const existing = Array.from(
                document.querySelectorAll("script[src]")
            ).find(function (script) {
                return script.src === src;
            });

            if (existing) {
                if (
                    existing.dataset.professorOwlLoaded === "true"
                ) {
                    resolve();
                    return;
                }

                existing.addEventListener(
                    "load",
                    resolve,
                    { once: true }
                );

                existing.addEventListener(
                    "error",
                    resolve,
                    { once: true }
                );

                return;
            }

            const script = document.createElement("script");

            script.src = src;
            script.async = false;
            script.defer = false;

            script.onload = function () {
                script.dataset.professorOwlLoaded = "true";
                resolve();
            };

            script.onerror = function () {
                console.warn(
                    "BuildFrame AI file failed to load:",
                    path
                );

                resolve();
            };

            document.body.appendChild(script);
        });
    }

    async function loadSequential(files) {
        for (const file of files) {
            await loadScript(file);
        }
    }

    /* =====================================================
   PROFESSOR OWL
   ONE VISIBLE GUIDED AI CHAT EXPERIENCE
===================================================== */

    function createProfessorOwlMarkup() {
        if (
            document.querySelector(
                "[data-partner-prof-root]"
            )
        ) {
            return;
        }

        const wrapper = document.createElement("div");

        wrapper.className = "partner-prof-ai";

        wrapper.setAttribute(
            "data-partner-prof-root",
            ""
        );

        wrapper.innerHTML = `
        <button
            class="partner-prof-launcher"
            type="button"
            data-partner-prof-launcher
            aria-expanded="false"
            aria-label="Ask Professor Owl AI"
        >
            <span
                class="partner-prof-avatar"
                aria-hidden="true"
            >
                <img
                    src="${BASE_PATH}../assets/images/professor-owl.png"
                    alt=""
                >
            </span>

            <span class="partner-prof-launcher-copy">
                <span class="partner-prof-launcher-title">
                    Ask Professor Owl AI
                </span>

                <span class="partner-prof-launcher-subtitle">
                    BuildFrame AI Workshop Guide
                </span>
            </span>
        </button>

        <section
            class="partner-prof-panel"
            data-partner-prof-panel
            aria-hidden="true"
            aria-label="Professor Owl AI chat"
        >
            <header
                class="partner-prof-header"
                data-partner-prof-drag-handle
            >
                <div class="partner-prof-identity">
                    <span
                        class="partner-prof-header-avatar"
                        aria-hidden="true"
                    >
                        <img
                            src="${BASE_PATH}../assets/images/professor-owl.png"
                            alt=""
                        >
                    </span>

                    <div class="partner-prof-header-copy">
                        <h2 class="partner-prof-header-title">
                            Professor Owl
                        </h2>

                        <p class="partner-prof-header-subtitle">
                            BuildFrame AI Workshop Guide
                        </p>
                    </div>
                </div>

                <div class="partner-prof-header-actions">
                    <a
                        class="partner-prof-center-link"
                        href="${AI_CENTER_URL}"
                        aria-label="Open the full Professor Owl AI Center"
                    >
                        AI Center
                    </a>

                    <button
                        class="partner-prof-close"
                        type="button"
                        data-partner-prof-close
                        aria-label="Close Professor Owl AI"
                    >
                        ×
                    </button>
                </div>
            </header>

            <div
                class="partner-prof-messages"
                data-partner-prof-messages
                aria-live="polite"
            ></div>

            <div
                class="partner-prof-suggestions"
                data-partner-prof-suggestions
                aria-label="Guided conversation choices"
            ></div>

            <div class="partner-prof-human-support">
                <a
                    class="partner-prof-messenger-link"
                    href="${FACEBOOK_PAGE_URL}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Prefer a real person? Chat with us on Facebook Messenger.
                </a>
            </div>

            <form
                class="partner-prof-form"
                data-partner-prof-form
            >
                <input
                    class="partner-prof-input"
                    data-partner-prof-input
                    type="text"
                    placeholder="Or type your own question..."
                    autocomplete="off"
                    aria-label="Message Professor Owl"
                />

                <button
                    class="partner-prof-send"
                    type="submit"
                    aria-label="Send message to Professor Owl"
                >
                    ➜
                </button>
            </form>
        </section>
    `;

        document.body.appendChild(wrapper);
    }

    /* =====================================================
       INITIALIZE BUILDFRAME AI
    ===================================================== */

    async function initBuildFrameAI() {
        await Promise.all(
            CSS_FILES.map(loadCSS)
        );

        await loadSequential(
            KNOWLEDGE_FILES
        );

        await loadSequential(
            CORE_FILES
        );

        createProfessorOwlMarkup();

        await loadScript("ai.js");

        if (window.BuildFrameAIEngine) {
            console.info(
                "BuildFrame AI experience loaded.",
                {
                    professorOwlLoaded:
                        !!document.querySelector(
                            "[data-partner-prof-root]"
                        ),

                    guidedConversationReady:
                        !!window.BuildFrameAISupport,

                    aiCenterAccessible: true,

                    messengerAvailable: true,

                    responsive: true
                }
            );
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initBuildFrameAI,
            { once: true }
        );
    } else {
        initBuildFrameAI();
    }
})();