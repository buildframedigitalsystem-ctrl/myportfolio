/* =====================================================
   BUILDFRAME AI CENTER
   File: ai/ai-router.js

   Purpose:
   Routes visitor messages to the most relevant
   BuildFrame knowledge world for Partner Prof.

   Partner Prof should never feel like a random chatbot.
   This router helps him understand whether the visitor
   is asking about surveys, food business, construction,
   education, operations, AI assistants, portals,
   custom systems, pet projects, or BuildFrame itself.
===================================================== */

window.BuildFrameAIRouter = {
    id: "buildframe-ai-router",
    name: "BuildFrame AI Router",
    version: "1.0.0",

    defaultRoute: {
        id: "buildframe-general",
        label: "BuildFrame General",
        knowledgeKey: "platformWorlds",
        globalName: "BuildFramePlatformWorlds"
    },

    routes: [
        {
            id: "surveys-platform",
            label: "Surveys & Insights",
            knowledgeKey: "surveysPlatform",
            globalName: "BuildFrameSurveysPlatform",
            keywords: [
                "survey",
                "surveys",
                "questionnaire",
                "questionnaires",
                "respondent",
                "respondents",
                "response",
                "responses",
                "feedback",
                "evaluation",
                "form",
                "forms",
                "rating",
                "signature",
                "analytics",
                "charts",
                "reports",
                "excel",
                "pdf",
                "book mode"
            ]
        },
        {
            id: "food-business",
            label: "Food Business OS",
            knowledgeKey: "foodBusiness",
            globalName: "BuildFrameFoodBusiness",
            keywords: [
                "food",
                "restaurant",
                "cafe",
                "café",
                "bakery",
                "menu",
                "meal",
                "catering",
                "storefront",
                "checkout",
                "cart",
                "order",
                "orders",
                "delivery",
                "pickup",
                "food store",
                "online food",
                "products",
                "pricing"
            ]
        },
        {
            id: "professionals-services",
            label: "Professionals & Services",
            knowledgeKey: "professionalsServices",
            globalName: "BuildFrameProfessionalsServices",
            keywords: [
                "service",
                "services",
                "booking",
                "bookings",
                "appointment",
                "appointments",
                "calendar",
                "salon",
                "spa",
                "coach",
                "consultant",
                "tutor",
                "photographer",
                "laundry",
                "cleaning",
                "repair",
                "wellness",
                "freelancer",
                "clinic",
                "client intake"
            ]
        },
        {
            id: "construction-contractors",
            label: "Construction & Contractors",
            knowledgeKey: "constructionContractors",
            globalName: "BuildFrameConstructionContractors",
            keywords: [
                "construction",
                "contractor",
                "contractors",
                "builder",
                "renovation",
                "remodeling",
                "glass",
                "aluminum",
                "woodworks",
                "carpentry",
                "metal",
                "welding",
                "plumbing",
                "electrical",
                "hvac",
                "aircon",
                "roofing",
                "waterproofing",
                "tiling",
                "flooring",
                "landscaping",
                "solar",
                "hardware",
                "materials",
                "site visit",
                "estimate",
                "quotation",
                "proposal",
                "milestone",
                "project"
            ]
        },
        {
            id: "education-academy",
            label: "Education & Academy",
            knowledgeKey: "educationAcademy",
            globalName: "BuildFrameEducationAcademy",
            keywords: [
                "education",
                "academy",
                "school",
                "student",
                "students",
                "learner",
                "learners",
                "teacher",
                "instructor",
                "course",
                "courses",
                "class",
                "classes",
                "tutorial",
                "tutorials",
                "online class",
                "video class",
                "conference",
                "webinar",
                "speaker",
                "certificate",
                "certificates",
                "quiz",
                "assignment",
                "attendance",
                "grades",
                "kindergarten",
                "college",
                "university"
            ]
        },
        {
            id: "business-operations",
            label: "Business Operations",
            knowledgeKey: "businessOperations",
            globalName: "BuildFrameBusinessOperations",
            keywords: [
                "operations",
                "inventory",
                "stock",
                "supplier",
                "suppliers",
                "purchase order",
                "purchase orders",
                "receiving",
                "invoice",
                "invoices",
                "payment",
                "payments",
                "delivery",
                "deliveries",
                "return",
                "returns",
                "agents",
                "reseller",
                "wholesale",
                "dashboard",
                "reports",
                "admin"
            ]
        },
        {
            id: "ai-assistants",
            label: "AI Assistants & AI VAs",
            knowledgeKey: "aiAssistants",
            globalName: "BuildFrameAIAssistants",
            keywords: [
                "ai",
                "assistant",
                "assistants",
                "partner prof",
                "chatbot",
                "bot",
                "ai va",
                "virtual assistant",
                "support bot",
                "sales helper",
                "onboarding assistant",
                "report explainer",
                "insights assistant",
                "automation",
                "auto reply"
            ]
        },
        {
            id: "client-portals",
            label: "Client Portals",
            knowledgeKey: "clientPortals",
            globalName: "BuildFrameClientPortals",
            keywords: [
                "portal",
                "portals",
                "client portal",
                "customer portal",
                "login",
                "account",
                "customer account",
                "documents",
                "approval",
                "approvals",
                "status",
                "tracking",
                "history",
                "communication history",
                "secure area"
            ]
        },
        {
            id: "custom-systems",
            label: "Custom Systems",
            knowledgeKey: "customSystems",
            globalName: "BuildFrameCustomSystems",
            keywords: [
                "custom",
                "system",
                "systems",
                "workflow",
                "workflows",
                "database",
                "records",
                "forms",
                "dashboard",
                "automation",
                "membership",
                "directory",
                "gallery",
                "notifications",
                "internal tool",
                "admin tool",
                "unique business"
            ]
        },
        {
            id: "pet-projects",
            label: "BuildFrame Pet Projects",
            knowledgeKey: "petProjects",
            globalName: "BuildFramePetProjects",
            keywords: [
                "pet project",
                "pet projects",
                "proof",
                "proof door",
                "portfolio",
                "project",
                "projects",
                "evidence",
                "built",
                "featured",
                "case study"
            ]
        },
        {
            id: "one-leyte",
            label: "One Leyte",
            knowledgeKey: "oneLeyte",
            globalName: "BuildFrameOneLeyte",
            keywords: [
                "one leyte",
                "leyte",
                "sara",
                "memberid",
                "member id",
                "member identity",
                "id card",
                "qr code",
                "qr",
                "mini social",
                "community member"
            ]
        },
        {
            id: "tides-of-hope",
            label: "Tides of Hope",
            knowledgeKey: "tidesOfHope",
            globalName: "BuildFrameTidesOfHope",
            keywords: [
                "tides",
                "tides of hope",
                "nonprofit",
                "foundation",
                "member directory",
                "president corner",
                "president’s corner",
                "announcements",
                "gallery",
                "gratitude",
                "family corner",
                "office portal"
            ]
        },
        {
            id: "mn-consumer-goods",
            label: "M&N Consumer Goods",
            knowledgeKey: "mnConsumerGoods",
            globalName: "BuildFrameMNConsumerGoods",
            keywords: [
                "m&n",
                "mn consumer",
                "consumer goods",
                "m&n store",
                "m&n app",
                "mn store",
                "mn app",
                "admin os",
                "store app",
                "signature pad",
                "purchase order",
                "inventory movement",
                "agent transaction"
            ]
        },
        {
            id: "tinyteam-genealogy",
            label: "TinyTeam Genealogy",
            knowledgeKey: "tinyTeamGenealogy",
            globalName: "BuildFrameTinyTeamGenealogy",
            keywords: [
                "tinyteam",
                "genealogy",
                "family tree",
                "family history",
                "heirloom",
                "lineage",
                "ancestor",
                "descendant",
                "generation",
                "8th generation",
                "printable family tree"
            ]
        }
    ],

    normalizeText: function (text) {
        return String(text || "")
            .toLowerCase()
            .replace(/[^\w\s&’'-]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    },

    scoreRoute: function (message, route) {
        const normalizedMessage = this.normalizeText(message);
        let score = 0;

        route.keywords.forEach((keyword) => {
            const normalizedKeyword = this.normalizeText(keyword);

            if (!normalizedKeyword) {
                return;
            }

            if (normalizedMessage.includes(normalizedKeyword)) {
                score += normalizedKeyword.includes(" ") ? 3 : 1;
            }
        });

        return score;
    },

    routeMessage: function (message) {
        let bestRoute = this.defaultRoute;
        let bestScore = 0;

        this.routes.forEach((route) => {
            const score = this.scoreRoute(message, route);

            if (score > bestScore) {
                bestRoute = route;
                bestScore = score;
            }
        });

        return {
            route: bestRoute,
            score: bestScore,
            isDefault: bestScore === 0
        };
    },

    getKnowledgeForRoute: function (routeResult) {
        if (!routeResult || !routeResult.route) {
            return window[this.defaultRoute.globalName] || null;
        }

        return window[routeResult.route.globalName] || null;
    },

    routeAndGetKnowledge: function (message) {
        const routeResult = this.routeMessage(message);
        const knowledge = this.getKnowledgeForRoute(routeResult);

        return {
            routeResult: routeResult,
            knowledge: knowledge
        };
    },

    getSuggestedFollowUp: function (routeId) {
        const followUps = {
            "surveys-platform":
                "Would you like to imagine this as a customer feedback system, school evaluation tool, NGO survey app, or internal reporting workflow?",

            "food-business":
                "Would you like to imagine this as a café, bakery, catering business, restaurant, or home-based food brand?",

            "professionals-services":
                "Would you like to imagine this for bookings, client intake, status updates, payments, or follow-ups?",

            "construction-contractors":
                "Would you like to imagine this for project inquiries, estimates, site visits, proposals, or client progress tracking?",

            "education-academy":
                "Would you like to imagine this for a school, tutorial center, academy, speaker program, webinar, or full learning community?",

            "business-operations":
                "Would you like to imagine this around orders, inventory, suppliers, payments, deliveries, returns, or reports?",

            "ai-assistants":
                "Would you like to imagine one AI guide, or a set of specialized AI VAs for different parts of the business?",

            "client-portals":
                "Would you like to imagine this as a customer portal, member portal, learner portal, or project portal?",

            "custom-systems":
                "What part of the business feels too specific for a normal template?",

            "pet-projects":
                "Which proof door do you want to explore — Surveys, Food Business, M&N, Tides of Hope, One Leyte, TinyTeam Genealogy, or Construction?",

            "one-leyte":
                "Would you like to imagine this around member registration, IDs, QR codes, dashboards, or community engagement?",

            "tides-of-hope":
                "Would you like to imagine this as a nonprofit office portal, member directory, content system, or community space?",

            "mn-consumer-goods":
                "Would you like to explore the Admin OS, M&N Store, or M&N Store App experience?",

            "tinyteam-genealogy":
                "Would you like to imagine this as a printable family tree, heirloom archive, or updatable family-history system?"
        };

        return followUps[routeId] || "What kind of business journey would you like to imagine first?";
    }
};