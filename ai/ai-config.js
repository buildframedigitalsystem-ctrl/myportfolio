/* =====================================================
   BUILDFRAME AI CENTER
   File: ai/ai-config.js

   Purpose:
   Central settings for Partner Prof AI Center.
===================================================== */

window.BuildFrameAIConfig = {
    id: "buildframe-ai-config",
    name: "Partner Prof AI Center Config",
    version: "1.0.0",

    identity: {
        publicName: "Partner Prof",
        title: "Chin's AI Building Partner",
        signatureLine: "The Software Builder. The AI Building Partner.",
        ownerName: "Chin",
        ownerRole: "The Software Builder"
    },

    ui: {
        floatingAIEnabled: true,
        floatingAILabel: "Ask Partner Prof",
        floatingAITitle: "Partner Prof",
        floatingAISubtitle: "Chin's AI Building Partner",
        floatingAIIntro:
            "Tell me what kind of business you’re imagining, and I’ll help you explore what its journey could become.",

        messengerBotMustStayFixed: true,
        partnerProfFloatsSeparately: true,

        openButtonText: "Ask Partner Prof",
        closeButtonText: "Close",
        inputPlaceholder: "Ask what your business could become...",
        sendButtonText: "Send",

        emptyStateMessage:
            "Try asking about surveys, food business, construction, education, operations, client portals, AI assistants, or custom systems."
    },

    behavior: {
        defaultGreeting:
            "Hi, I’m Partner Prof — Chin’s AI Building Partner. What kind of business journey should we imagine first?",

        fallbackMessage:
            "That sounds like a journey we can explore. BuildFrame usually starts by understanding what the customer, owner, team, or community member needs to experience first.",

        maxHighlightsInMemory: 8,
        useSessionMemory: true,
        useRouter: true,
        useProofDoors: true,
        askFollowUpQuestions: true
    },

    knowledgeFiles: [
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
    ],

    coreFiles: [
        "ai-context.js",
        "ai-router.js",
        "ai-memory.js",
        "ai-prompts.js",
        "ai-va.js",
        "ai-sales.js",
        "ai-support.js",
        "ai-insights.js"
    ],

    protectedRules: [
        "Do not remove or replace the existing fixed Messenger bot.",
        "Partner Prof should float separately like the Survey feature.",
        "Keep Chin at the center as The Software Builder.",
        "Present Partner Prof as the AI Building Partner.",
        "Do not overclaim future features.",
        "Do not expose private customer, member, family, or workspace data.",
        "Do not reduce rich systems into simple websites.",
        "Avoid aggressive sales language.",
        "Turn features into imagined experiences."
    ],

    suggestedTopics: [
        "What could my business become?",
        "Show me proof doors",
        "What can BuildFrame do for a food business?",
        "Can this work for contractors?",
        "Can this become an academy platform?",
        "Can I have a client portal?",
        "Can AI help my business?",
        "What systems has Chin already built?"
    ]
};