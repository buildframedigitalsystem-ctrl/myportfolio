/* =====================================================
   BUILDFRAME AI CENTER
   File: ai/ai-insights.js

   Purpose:
   Partner Prof insight and imagination layer.

   Helps Partner Prof:
   - understand business pain points
   - connect needs to BuildFrame journeys
   - suggest relevant platform worlds
   - open relevant proof doors
   - turn scattered problems into clearer possibilities
   - avoid overclaiming or generic AI hype
===================================================== */

window.BuildFrameAIInsights = {
    id: "buildframe-ai-insights",
    name: "BuildFrame AI Insights Layer",
    version: "1.0.0",

    insightPhilosophy:
        "A useful insight should help a business owner see something more clearly — where friction lives, which journey needs attention, what proof already exists, and what could become possible next.",

    coreGoal:
        "Turn visitor questions, frustrations, ideas, and business descriptions into useful journey insights without pretending to know more than the visitor has shared.",

    insightTypes: [
        {
            id: "customer-friction",
            name: "Customer Journey Friction",
            signals: [
                "customers keep asking the same questions",
                "customers do not know what to do next",
                "customers abandon orders",
                "customers cannot find information",
                "customers wait too long for replies",
                "customers get confused"
            ],
            insight:
                "The business may need a clearer guided customer journey, better information flow, self-service support, or an AI helper placed at the right point."
        },
        {
            id: "manual-work",
            name: "Manual Work Friction",
            signals: [
                "we do this manually",
                "we use notebooks",
                "we use spreadsheets for everything",
                "we keep copying data",
                "we send the same message repeatedly",
                "we update records one by one"
            ],
            insight:
                "Repeated manual work may be a sign that records, forms, statuses, notifications, or workflows should become part of one connected system."
        },
        {
            id: "scattered-records",
            name: "Scattered Records",
            signals: [
                "records are everywhere",
                "different spreadsheets",
                "messages in messenger",
                "orders in chat",
                "cannot find customer history",
                "lost records"
            ],
            insight:
                "The business may benefit from a central workspace, database, dashboard, client portal, or operating system where records belong to a clear journey."
        },
        {
            id: "visibility-gap",
            name: "Owner Visibility Gap",
            signals: [
                "I do not know what is happening",
                "I need reports",
                "I need analytics",
                "I want charts",
                "I need a dashboard",
                "I cannot track performance"
            ],
            insight:
                "The owner may need a control-room experience where important records become summaries, charts, reports, statuses, and actionable views."
        },
        {
            id: "growth-friction",
            name: "Growth Friction",
            signals: [
                "too many customers",
                "business is growing",
                "hard to manage",
                "we need staff",
                "we need automation",
                "we cannot keep up"
            ],
            insight:
                "Growth often exposes workflows that were manageable when the business was smaller. The next step may be better structure, role-based tools, automation, portals, or AI-assisted support."
        },
        {
            id: "identity-membership",
            name: "Identity and Membership Opportunity",
            signals: [
                "members",
                "membership",
                "member id",
                "id card",
                "qr code",
                "community",
                "directory",
                "profiles"
            ],
            insight:
                "The journey may grow beyond registration into identity, MemberIDs, profiles, QR-supported recognition, directories, dashboards, and community spaces."
        },
        {
            id: "learning-opportunity",
            name: "Learning Experience Opportunity",
            signals: [
                "students",
                "learners",
                "tutorials",
                "courses",
                "classes",
                "training",
                "webinar",
                "speaker",
                "certificates"
            ],
            insight:
                "The experience may become more than uploaded lessons — it could include guided learning, live sessions, tutorials, progress, certificates, learner dashboards, and AI learning support."
        },
        {
            id: "project-journey",
            name: "Project Journey Opportunity",
            signals: [
                "estimate",
                "quotation",
                "site visit",
                "proposal",
                "construction project",
                "project updates",
                "milestone",
                "approval"
            ],
            insight:
                "The project journey may benefit from structured inquiry, uploads, estimates, site visits, proposals, approvals, milestones, progress updates, and a client portal."
        },
        {
            id: "app-opportunity",
            name: "App Experience Opportunity",
            signals: [
                "app",
                "installable",
                "mobile app",
                "pwa",
                "home screen",
                "mobile users"
            ],
            insight:
                "An app-style experience becomes valuable when users have a reason to return for orders, surveys, records, lessons, updates, reports, membership, or ongoing business activity."
        },
        {
            id: "ai-opportunity",
            name: "AI Assistance Opportunity",
            signals: [
                "ai",
                "chatbot",
                "auto reply",
                "virtual assistant",
                "ai va",
                "assistant",
                "automated support"
            ],
            insight:
                "AI becomes more useful when it has a clear role in the journey — answering common questions, guiding onboarding, explaining reports, helping with intake, or supporting customers before human follow-up."
        }
    ],

    proofDoorMap: {
        "customer-friction": [
            "BuildFrame Surveys Platform App",
            "Build My Online Food Business / Food Business OS",
            "Partner Prof AI Layer"
        ],

        "manual-work": [
            "M&N Consumer Goods",
            "Tides of Hope Website and Office System",
            "Build My Online Food Business / Food Business OS"
        ],

        "scattered-records": [
            "M&N Consumer Goods",
            "Tides of Hope Website and Office System",
            "One Leyte for Sara Duterte"
        ],

        "visibility-gap": [
            "BuildFrame Surveys Platform App",
            "M&N Consumer Goods"
        ],

        "growth-friction": [
            "M&N Consumer Goods",
            "Build My Online Food Business / Food Business OS",
            "Partner Prof AI Layer"
        ],

        "identity-membership": [
            "One Leyte for Sara Duterte",
            "Tides of Hope Website and Office System"
        ],

        "learning-opportunity": [
            "BuildFrame Surveys Platform App",
            "Education & Academy"
        ],

        "project-journey": [
            "Construction and Contractor Trade Experiences"
        ],

        "app-opportunity": [
            "BuildFrame Surveys Platform App",
            "M&N Store App",
            "Build My Online Food Business / Food Business OS"
        ],

        "ai-opportunity": [
            "Partner Prof AI Layer",
            "BuildFrame AI Assistants & AI VAs"
        ]
    },

    normalizeText: function (text) {
        return String(text || "")
            .toLowerCase()
            .replace(/[^\w\s&’'-]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    },

    analyzeMessage: function (message) {
        const normalizedMessage = this.normalizeText(message);
        const matches = [];

        this.insightTypes.forEach((type) => {
            let score = 0;
            const matchedSignals = [];

            type.signals.forEach((signal) => {
                const normalizedSignal = this.normalizeText(signal);

                if (
                    normalizedSignal &&
                    normalizedMessage.includes(normalizedSignal)
                ) {
                    score += normalizedSignal.includes(" ") ? 3 : 1;
                    matchedSignals.push(signal);
                }
            });

            if (score > 0) {
                matches.push({
                    id: type.id,
                    name: type.name,
                    score: score,
                    matchedSignals: matchedSignals,
                    insight: type.insight,
                    proofDoors: this.proofDoorMap[type.id] || []
                });
            }
        });

        matches.sort((a, b) => b.score - a.score);

        return matches;
    },

    getPrimaryInsight: function (message) {
        const matches = this.analyzeMessage(message);

        if (!matches.length) {
            return null;
        }

        return matches[0];
    },

    getInsightSummary: function (message) {
        const matches = this.analyzeMessage(message);

        if (!matches.length) {
            return {
                found: false,
                primaryInsight: null,
                supportingInsights: [],
                proofDoors: [],
                message:
                    "No strong business-friction signal was detected yet. Ask the visitor what feels manual, confusing, repetitive, scattered, or difficult to track."
            };
        }

        const primaryInsight = matches[0];
        const supportingInsights = matches.slice(1, 4);

        const proofDoors = [
            ...new Set(
                matches.flatMap((match) => match.proofDoors || [])
            )
        ];

        return {
            found: true,
            primaryInsight: primaryInsight,
            supportingInsights: supportingInsights,
            proofDoors: proofDoors,
            message: primaryInsight.insight
        };
    },

    buildImaginationPrompt: function (message) {
        const summary = this.getInsightSummary(message);

        if (!summary.found) {
            return "What part of the business still feels too manual, repetitive, confusing, scattered, or difficult to track?";
        }

        const questions = {
            "customer-friction":
                "What if customers could understand the next step without waiting for someone to explain it every time?",

            "manual-work":
                "What repeated task would you be happiest never having to do manually again?",

            "scattered-records":
                "What would change if the records you need were finally connected to one clear journey?",

            "visibility-gap":
                "If you had one business control room, what would you want to see the moment you opened it?",

            "growth-friction":
                "Which part of the business worked when things were smaller but is becoming difficult as you grow?",

            "identity-membership":
                "What if every member had a real identity, record, profile, and place inside the community?",

            "learning-opportunity":
                "What if learners could move from lessons to live sessions, progress, certificates, and support in one experience?",

            "project-journey":
                "What if clients could move from inquiry to estimate, approval, and progress updates without chasing messages?",

            "app-opportunity":
                "What would make your customers, members, staff, or learners want to return to your app regularly?",

            "ai-opportunity":
                "If your business had one AI helper with one clear responsibility, where would you put it first?"
        };

        return (
            questions[summary.primaryInsight.id] ||
            "Which part of this journey should become easier first?"
        );
    },

    getRecommendedWorlds: function (message) {
        const summary = this.getInsightSummary(message);

        if (!summary.found) {
            return [];
        }

        const worldMap = {
            "customer-friction": [
                "Professionals & Services",
                "Food Business OS",
                "Client Portals",
                "AI Assistants & AI VAs"
            ],

            "manual-work": [
                "Business Operations",
                "Custom Systems",
                "AI Assistants & AI VAs"
            ],

            "scattered-records": [
                "Business Operations",
                "Client Portals",
                "Custom Systems"
            ],

            "visibility-gap": [
                "Surveys & Insights",
                "Business Operations",
                "Custom Systems"
            ],

            "growth-friction": [
                "Business Operations",
                "Client Portals",
                "AI Assistants & AI VAs",
                "Custom Systems"
            ],

            "identity-membership": [
                "Client Portals",
                "Custom Systems",
                "BuildFrame Pet Projects"
            ],

            "learning-opportunity": [
                "Education & Academy",
                "AI Assistants & AI VAs",
                "Client Portals"
            ],

            "project-journey": [
                "Construction & Contractors",
                "Client Portals",
                "Custom Systems"
            ],

            "app-opportunity": [
                "Surveys & Insights",
                "Food Business OS",
                "Business Operations",
                "Custom Systems"
            ],

            "ai-opportunity": [
                "AI Assistants & AI VAs",
                "Custom Systems"
            ]
        };

        const recommendations = [];

        [
            summary.primaryInsight,
            ...summary.supportingInsights
        ].forEach((insight) => {
            const worlds = worldMap[insight.id] || [];

            worlds.forEach((world) => {
                if (!recommendations.includes(world)) {
                    recommendations.push(world);
                }
            });
        });

        return recommendations;
    },

    boundaries: [
        "Do not diagnose a business from one sentence.",
        "Do not pretend to know facts the visitor has not shared.",
        "Do not promise guaranteed business results.",
        "Do not turn every problem into an AI problem.",
        "Do not recommend every BuildFrame world at once.",
        "Use the strongest relevant proof doors only.",
        "Distinguish working evidence from future direction.",
        "Never expose private records.",
        "Keep Chin at the center as The Software Builder.",
        "Let Partner Prof guide imagination as the AI Building Partner."
    ],

    partnerProfVoice:
        "Sometimes the most useful insight is simply noticing that the problem is not the missing feature. It is the broken journey around it.",

    callToImagine:
        "What part of your business would feel completely different if the journey around it finally worked the way you wished it would?"
};