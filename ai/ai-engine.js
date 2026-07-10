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

        responseParts.push(
            "Oh, that belongs close to the " +
            route.label +
            " world. 😄"
        );

        if (experienceLine) {
            responseParts.push(experienceLine);
        }

        if (insightSummary && insightSummary.found) {
            responseParts.push(insightSummary.message);
        }

        if (proofLine) {
            responseParts.push(proofLine);
        }

        if (boundaryNote) {
            responseParts.push(
                "Small honest note: " + boundaryNote
            );
        }

        responseParts.push(
            sales?.salesPhilosophy ||
            "BuildFrame opens proof doors and helps business owners imagine what their own journey could become."
        );

        responseParts.push(imaginationPrompt || followUp);

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