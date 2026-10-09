/* =====================================================
   BUILDFRAME AI CENTER
   File: ai/ai-engine.js
   Purpose: Main Partner Prof brain/orchestration engine
===================================================== */

window.BuildFrameAIEngine = {
    id: "buildframe-ai-engine",
    name: "Partner Prof AI Engine",
    version: "1.0.0",

    getConfig: function () {
        return window.BuildFrameAIConfig || {};
    },

    getContext: function () {
        return window.BuildFrameAIContext || {};
    },

    getRouter: function () {
        return window.BuildFrameAIRouter || null;
    },

    getMemory: function () {
        return window.BuildFrameAIMemory || null;
    },

    getPrompts: function () {
        return window.BuildFrameAIPrompts || {};
    },

    getSales: function () {
        return window.BuildFrameAISales || {};
    },

    getSupport: function () {
        return window.BuildFrameAISupport || {};
    },

    getInsights: function () {
        return window.BuildFrameAIInsights || null;
    },

    getVA: function () {
        return window.BuildFrameAIVA || {};
    },

    normalizeMessage: function (message) {
        return String(message || "").trim();
    },

    routeMessage: function (message) {
        const router = this.getRouter();

        if (!router || typeof router.routeAndGetKnowledge !== "function") {
            return {
                routeResult: {
                    route: {
                        id: "buildframe-general",
                        label: "BuildFrame General"
                    },
                    score: 0,
                    isDefault: true
                },
                knowledge: window.BuildFramePlatformWorlds || null
            };
        }

        return router.routeAndGetKnowledge(message);
    },

    rememberMessage: function (message, routeResult) {
        const memory = this.getMemory();

        if (!memory || typeof memory.observeMessage !== "function") {
            return null;
        }

        return memory.observeMessage(message, routeResult);
    },

    getInsightSummary: function (message) {
        const insights = this.getInsights();

        if (!insights || typeof insights.getInsightSummary !== "function") {
            return null;
        }

        return insights.getInsightSummary(message);
    },

    getImaginationPrompt: function (message) {
        const insights = this.getInsights();

        if (!insights || typeof insights.buildImaginationPrompt !== "function") {
            return "What kind of business journey should we imagine first?";
        }

        return insights.buildImaginationPrompt(message);
    },

    getSuggestedFollowUp: function (routeId) {
        const router = this.getRouter();

        if (!router || typeof router.getSuggestedFollowUp !== "function") {
            return "What part of the journey would you like to explore first?";
        }

        return router.getSuggestedFollowUp(routeId);
    },

    pickRelevantEvidence: function (knowledge) {
        if (!knowledge) {
            return [];
        }

        if (Array.isArray(knowledge.proofPoints)) {
            return knowledge.proofPoints.slice(0, 8);
        }

        if (Array.isArray(knowledge.evidence)) {
            return knowledge.evidence.slice(0, 8);
        }

        if (Array.isArray(knowledge.possibleCapabilities)) {
            return knowledge.possibleCapabilities.slice(0, 8);
        }

        if (Array.isArray(knowledge.detailedFeatures)) {
            return knowledge.detailedFeatures.slice(0, 8);
        }

        return [];
    },

    buildProofLine: function (knowledge) {
        const evidence = this.pickRelevantEvidence(knowledge);

        if (!evidence.length) {
            return "";
        }

        return "A few proof details behind this: " + evidence.join(", ") + ".";
    },

    buildExperienceLine: function (knowledge) {
        if (!knowledge) {
            return "";
        }

        return (
            knowledge.experienceStory ||
            knowledge.experienceDoor ||
            knowledge.teaser ||
            ""
        );
    },

    buildBoundaryNote: function (knowledge) {
        if (!knowledge || !Array.isArray(knowledge.boundaries)) {
            return "";
        }

        const futureBoundary = knowledge.boundaries.find((item) =>
            String(item).toLowerCase().includes("future") ||
            String(item).toLowerCase().includes("complete") ||
            String(item).toLowerCase().includes("overclaim")
        );

        return futureBoundary || "";
    },

    composeResponse: function (message) {
        const cleanMessage = this.normalizeMessage(message);
        const config = this.getConfig();
        const prompts = this.getPrompts();
        const sales = this.getSales();

        if (!cleanMessage) {
            return (
                config?.behavior?.defaultGreeting ||
                "Hi, I’m Partner Prof — Chin’s AI Building Partner. What kind of business journey should we imagine first?"
            );
        }

        const routed = this.routeMessage(cleanMessage);
        const routeResult = routed.routeResult;
        const route = routeResult.route;
        const knowledge = routed.knowledge;

        this.rememberMessage(cleanMessage, routeResult);

        const insightSummary = this.getInsightSummary(cleanMessage);
        const experienceLine = this.buildExperienceLine(knowledge);
        const proofLine = this.buildProofLine(knowledge);
        const boundaryNote = this.buildBoundaryNote(knowledge);
        const followUp = this.getSuggestedFollowUp(route.id);
        const imaginationPrompt = this.getImaginationPrompt(cleanMessage);

        const responseParts = [];

        /* =====================================================
   AI ASSISTANCE WITH EXISTING SOFTWARE
===================================================== */

        const lowerMessage = cleanMessage.toLowerCase();

        const asksForAI =
            lowerMessage.includes("ai assistant") ||
            lowerMessage.includes("ai chatbot") ||
            lowerMessage.includes("install ai") ||
            lowerMessage.includes("tailor ai");

        const mentionsExistingSoftware =
            lowerMessage.includes("existing software") ||
            lowerMessage.includes("existing system") ||
            lowerMessage.includes("already use") ||
            lowerMessage.includes("replace");

        if (asksForAI && mentionsExistingSoftware) {
            responseParts.push(
                "Yes. BuildFrame can install and tailor an AI assistant around your business without automatically replacing software that already works well."
            );

            responseParts.push(
                "We would first understand your current software, workflow, business knowledge, users, and the tasks where AI could provide useful assistance."
            );

            responseParts.push(
                "Depending on the technical requirements, the AI assistant may work alongside your existing system through approved knowledge, integrations, structured data, permissions, and backend processes."
            );

            responseParts.push(
                "BuildFrame follows a Human + AI Assist approach, so important decisions, approvals, exceptions, and sensitive actions can remain under appropriate human control."
            );

            responseParts.push(
                "What software are you currently using, and what would you like the AI assistant to help with first?"
            );

            return responseParts.join("\n\n");
        }

        /* =====================================================
           BACKEND STRENGTHENING & EXISTING SOFTWARE
        ===================================================== */

        if (route.id === "backend-strengthening") {
            const lowerMessage = cleanMessage.toLowerCase();

            if (
                lowerMessage.includes("already use") ||
                lowerMessage.includes("existing software") ||
                lowerMessage.includes("existing system") ||
                lowerMessage.includes("replace")
            ) {
                responseParts.push(
                    "Not necessarily. BuildFrame follows a Keep What Works approach."
                );

                responseParts.push(
                    "If your current business software is already serving you well, we would first understand what it does well before recommending any replacement."
                );

                responseParts.push(
                    "We can then look at what is still manual, repetitive, disconnected, difficult to track, or missing — and explore whether AI assistance, workflow automation, integrations, or backend strengthening could improve the system around what you already use."
                );

                responseParts.push(
                    "The goal is not to replace software just for the sake of replacing it. The goal is to strengthen the way your business actually works."
                );

                responseParts.push(
                    "What software are you currently using, and what part of the workflow would you most like to improve?"
                );

                return responseParts.join("\n\n");
            }
        }

        /* =====================================================
           AI INSTALLATION & TAILORING
        ===================================================== */

        if (route.id === "ai-assistants") {
            responseParts.push(
                "Yes. AI Installation & Tailoring is one of BuildFrame's current services."
            );

            responseParts.push(
                "We can explore an AI assistant tailored around how your business actually works — including your services, common questions, workflows, business knowledge, users, and the tasks where AI could provide useful assistance."
            );

            responseParts.push(
                "Depending on your needs, this might include a website chatbot, customer-support assistant, internal knowledge assistant, onboarding assistant, or AI-assisted workflow."
            );

            responseParts.push(
                "BuildFrame follows a Human + AI Assist approach, so important approvals, decisions, exceptions, and sensitive actions can remain under human control where appropriate."
            );

            responseParts.push(
                "What kind of business do you have, and what would you like the AI assistant to help with first?"
            );

            return responseParts.join("\n\n");
        }

        /* =====================================================
   CUSTOM BUSINESS SOFTWARE & BUSINESS OPERATING SYSTEMS
===================================================== */

        if (route.id === "custom-systems") {
            responseParts.push(
                "Yes. BuildFrame creates Custom Business Software and Business Operating Systems built and tailored around how a company actually works."
            );

            responseParts.push(
                "We start by understanding your existing workflow — how customers, staff, information, approvals, records, and daily operations move through the business."
            );

            responseParts.push(
                "From there, we can determine which parts should become software, which existing tools should remain, where integrations or automation may help, and where Human + AI Assist could support the workflow."
            );

            responseParts.push(
                "You do not necessarily need to build everything at once. A business can begin with the modules it needs most and expand the system as it grows."
            );

            responseParts.push(
                "What part of your company's current workflow would you most like to improve first?"
            );

            return responseParts.join("\n\n");
        }



        /* =====================================================
    GENERAL BUSINESS DISCOVERY RESPONSE
 ===================================================== */

        if (insightSummary && insightSummary.found) {
            responseParts.push(
                "Yes — this sounds like a workflow BuildFrame can help you examine and improve."
            );

            responseParts.push(
                insightSummary.message
            );

            if (route.id !== "buildframe-general") {
                responseParts.push(
                    "Because this relates to " +
                    route.label +
                    ", we can look at how that workflow currently moves through your business — from the first request or task through records, follow-ups, approvals, updates, and completion."
                );
            }

            responseParts.push(
                "From there, we can identify what should stay as it is, what could be better organized, and where workflow automation, AI assistance, integrations, backend strengthening, or tailored business software may be useful."
            );

            responseParts.push(
                imaginationPrompt || followUp
            );

            return responseParts
                .filter(Boolean)
                .join("\n\n");
        }

        /* =====================================================
           GENERAL RESPONSE WHEN NO STRONG PAIN SIGNAL IS FOUND
        ===================================================== */

        responseParts.push(
            "BuildFrame starts by understanding how your business currently works before recommending technology."
        );

        if (route.id !== "buildframe-general") {
            responseParts.push(
                "Your question relates to " + route.label + ", so we can explore that part of the business in more detail."
            );
        }

        if (experienceLine) {
            responseParts.push(experienceLine);
        }

        responseParts.push(
            "We can then determine whether AI assistance, workflow automation, integrations, backend strengthening, or custom business software would actually be useful — without replacing tools or processes that are already working well."
        );

        responseParts.push(
            followUp || imaginationPrompt
        );

        return responseParts
            .filter(Boolean)
            .join("\n\n");
    },

    answer: function (message) {
        try {
            return this.composeResponse(message);
        } catch (error) {
            console.error("Partner Prof engine error:", error);

            return (
                window.BuildFrameAIPrompts?.fallbackResponse ||
                "That sounds like a journey we can explore. What kind of business should we imagine first?"
            );
        }
    },

    getDebugState: function () {
        const memory = this.getMemory();

        return {
            configLoaded: !!window.BuildFrameAIConfig,
            contextLoaded: !!window.BuildFrameAIContext,
            routerLoaded: !!window.BuildFrameAIRouter,
            memoryLoaded: !!window.BuildFrameAIMemory,
            promptsLoaded: !!window.BuildFrameAIPrompts,
            salesLoaded: !!window.BuildFrameAISales,
            supportLoaded: !!window.BuildFrameAISupport,
            insightsLoaded: !!window.BuildFrameAIInsights,
            vaLoaded: !!window.BuildFrameAIVA,
            missingKnowledge:
                window.BuildFrameAIContext &&
                    typeof window.BuildFrameAIContext.getMissingKnowledge === "function"
                    ? window.BuildFrameAIContext.getMissingKnowledge()
                    : [],
            memory:
                memory && typeof memory.getConversationSummary === "function"
                    ? memory.getConversationSummary()
                    : null
        };
    }
};