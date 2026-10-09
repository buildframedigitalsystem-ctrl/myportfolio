/* =========================================================
   BUILDFRAME AI KNOWLEDGE
   File: ai/knowledge/ai-assistants.js

   Purpose:
   BuildFrame knowledge for AI Installation & Tailoring,
   AI Assistants, Chatbots, AI Features, AI-Assisted
   Workflows, specialized AI VAs, and Human + AI Assist.

   IMPORTANT:
   AI Installation & Tailoring is a current BuildFrame
   service direction.

   Individual AI capabilities must still be described
   honestly as built, configurable, experimental, planned,
   or conceptual depending on their actual status.
========================================================= */

window.BuildFrameAIAssistants = {

    id: "ai-assistants",

    name: "AI Installation & Tailoring",

    status: "Current BuildFrame Service",

    serviceSummary:
        "BuildFrame helps businesses install and tailor AI assistants, chatbots, AI features, and AI-assisted workflows around their actual business processes, information, users, permissions, and human approval requirements.",

    teaser:
        "AI should not feel like a random chatbot pasted onto a website. It should understand the business it represents, who it is helping, what journey the person is on, what information it is allowed to use, and when a human should take over.",

    experienceStory:
        "Imagine an AI assistant that understands your services, common customer questions, business processes, available information, and the next steps in a customer or staff journey. Instead of forcing your business into a generic AI tool, BuildFrame can help shape the AI around the way your business actually works.",

    coreVision:
        "BuildFrame AI Installation & Tailoring focuses on fitting useful AI capabilities into real business workflows. The goal is not to add AI everywhere. The goal is to identify where AI can provide practical assistance while preserving appropriate human judgment, approvals, permissions, and safeguards.",


    /* =====================================================
       WHAT AI INSTALLATION & TAILORING CAN INCLUDE
    ===================================================== */

    serviceCapabilities: [

        {
            type: "Business AI Assistant",
            description:
                "An AI assistant tailored around the business, its services, information, common questions, workflows, and approved knowledge."
        },

        {
            type: "Website Chatbot",
            description:
                "A website-based AI assistant that can guide visitors, answer supported questions, explain services, collect useful information, and direct people toward appropriate next steps."
        },

        {
            type: "Customer Support Assistant",
            description:
                "AI assistance for common customer questions, service guidance, onboarding information, process explanations, and supported customer journeys, with human escalation when needed."
        },

        {
            type: "Internal Knowledge Assistant",
            description:
                "An AI assistant designed to help staff find and understand approved business information, procedures, services, workflows, or internal guidance."
        },

        {
            type: "AI-Assisted Workflow",
            description:
                "AI can assist at selected points inside a workflow such as organizing information, preparing drafts, summarizing records, suggesting next steps, or helping classify incoming requests."
        },

        {
            type: "Onboarding Assistant",
            description:
                "AI can guide customers, staff, learners, or business users through structured onboarding one step at a time."
        },

        {
            type: "Report & Information Explainer",
            description:
                "AI can help explain supported reports, structured information, survey results, operational records, or business data in easier language."
        },

        {
            type: "Specialized AI VA",
            description:
                "Where appropriate, an AI assistant can be tailored around a specific responsibility or journey instead of trying to make one AI perform every business function."
        }

    ],


    /* =====================================================
       BUILDFRAME INSTALLATION APPROACH
    ===================================================== */

    installationApproach: {

        principle:
            "Understand the business before installing the AI.",

        steps: [

            {
                step: 1,
                name: "Understand the Business",
                description:
                    "Learn what the business does, who it serves, what systems it currently uses, and what the owner or team wants to improve."
            },

            {
                step: 2,
                name: "Map the Workflow",
                description:
                    "Understand the current journey before deciding where AI belongs."
            },

            {
                step: 3,
                name: "Identify AI Opportunities",
                description:
                    "Find repetitive questions, information-heavy tasks, guidance needs, workflow bottlenecks, or other areas where AI assistance may be useful."
            },

            {
                step: 4,
                name: "Define Knowledge & Boundaries",
                description:
                    "Determine what information the AI may use, what it should not access, what it may suggest, and what must remain under human control."
            },

            {
                step: 5,
                name: "Install or Integrate",
                description:
                    "Connect the AI experience to the appropriate website, portal, workflow, application, or business system where technically suitable."
            },

            {
                step: 6,
                name: "Tailor the Experience",
                description:
                    "Adjust the AI's business knowledge, guidance, response style, workflow awareness, permissions, and supported journeys."
            },

            {
                step: 7,
                name: "Test & Validate",
                description:
                    "Test supported questions, workflow behavior, boundaries, fallbacks, human handoffs, and relevant integrations before relying on the experience."
            },

            {
                step: 8,
                name: "Improve Over Time",
                description:
                    "AI assistance can be refined as the business changes, new information becomes available, and useful new workflows are identified."
            }

        ]
    },


    /* =====================================================
       EXISTING SYSTEMS
    ===================================================== */

    existingSystemIntegration: {

        principle:
            "AI Installation & Tailoring does not automatically require replacing the business's existing system.",

        explanation:
            "BuildFrame can first assess the website, CRM, platform, software, workflow, or other digital tools the business already uses. Where technically appropriate, useful AI capabilities may be added, integrated, or connected while keeping systems that already work.",

        questions: [
            "What systems are you already using?",
            "What is working well today?",
            "What tasks remain repetitive or manual?",
            "Where do customers or staff repeatedly need help?",
            "What information should the AI be allowed to use?",
            "Which actions require human approval?",
            "Where would AI assistance save useful time without removing necessary human judgment?"
        ]
    },


    /* =====================================================
       HUMAN + AI ASSIST
    ===================================================== */

    humanAndAI: {

        principle:
            "Human + AI Assist",

        explanation:
            "BuildFrame treats AI as an assistant to people rather than an automatic replacement for human judgment. AI may help organize, explain, suggest, draft, guide, summarize, or support repetitive processes while people remain responsible for decisions that require judgment, accountability, relationships, safety, professional expertise, or approval.",

        humanControlExamples: [
            "Important approvals",
            "Pricing or contractual commitments",
            "Financial decisions",
            "Sensitive customer situations",
            "Professional judgment",
            "Safety-related decisions",
            "Exceptions",
            "Permission changes",
            "High-impact business actions"
        ]
    },


    /* =====================================================
       AI ASSISTANT TYPES
    ===================================================== */

    aiAssistantTypes: [

        {
            type: "Platform Guide",
            experience:
                "An AI guide can help users understand where they are, what supported parts of the platform can do, and what their next step may be."
        },

        {
            type: "Customer Support Assistant",
            experience:
                "Customers can receive assistance with supported questions about services, bookings, processes, orders, project journeys, learning journeys, or account guidance."
        },

        {
            type: "Onboarding Assistant",
            experience:
                "A new user can be guided through an approved setup or onboarding journey one step at a time."
        },

        {
            type: "Sales Support Assistant",
            experience:
                "AI can help understand what a visitor is trying to accomplish, collect useful information, explain relevant services, and prepare the journey for appropriate human follow-up."
        },

        {
            type: "Report Explainer",
            experience:
                "AI can help explain supported charts, survey results, operational information, or structured reports without pretending that every automated interpretation is certain."
        },

        {
            type: "Internal Staff Guide",
            experience:
                "An AI assistant can help staff navigate approved business information, processes, procedures, and internal knowledge."
        },

        {
            type: "Specialized AI VA",
            experience:
                "An AI assistant can be shaped around a specific supported responsibility such as inquiries, onboarding, follow-up guidance, customer support, or internal assistance."
        },

        {
            type: "Workspace-Aware Assistant",
            experience:
                "Where the system supports it, AI can use appropriate context such as the correct workspace, business, user role, page, journey, and permitted information."
        }

    ],


    /* =====================================================
       BUSINESS EXAMPLES
    ===================================================== */

    businessExamples: [

        {
            business: "Coaches & Consultants",
            possibilities: [
                "Program information assistant",
                "Lead inquiry guidance",
                "Client onboarding assistant",
                "Learning or resource guide",
                "Frequently asked questions",
                "Human follow-up preparation"
            ]
        },

        {
            business: "Content Creators",
            possibilities: [
                "Audience information assistant",
                "Content workflow assistance",
                "Tutorial or resource guide",
                "Knowledge-based chatbot",
                "Content organization support"
            ]
        },

        {
            business: "Professional Services",
            possibilities: [
                "Service inquiry assistant",
                "Client intake guidance",
                "Appointment or booking guidance",
                "Frequently asked questions",
                "Client onboarding support"
            ]
        },

        {
            business: "Construction & Contractors",
            possibilities: [
                "Project inquiry guidance",
                "Customer intake assistance",
                "Service explanation",
                "Project-process guidance",
                "Document or information checklist guidance",
                "Customer support and human escalation"
            ]
        },

        {
            business: "Education & Academy",
            possibilities: [
                "Learner guide",
                "Course navigation assistance",
                "Tutorial support",
                "Frequently asked questions",
                "Student onboarding guidance"
            ]
        },

        {
            business: "Retail & Operations",
            possibilities: [
                "Product information assistance",
                "Customer support",
                "Order-process guidance",
                "Internal knowledge assistance",
                "Operational information support"
            ]
        }

    ],


    /* =====================================================
       PARTNER PROF / PROFESSOR OWL
    ===================================================== */

    partnerProfIdentity: {

        name: "Professor Owl",

        friendlyName: "Partner Prof",

        title: "BuildFrame AI Guide",

        status:
            "Working BuildFrame portfolio AI experience and demonstration of BuildFrame's approach to guided, business-aware AI assistance.",

        story:
            "Professor Owl helps visitors explore BuildFrame, understand services and projects, ask questions, and discover how AI-assisted business experiences can be structured around useful knowledge and guided journeys.",

        relationship:
            "The portfolio remains centered on Chin Veloso and BuildFrame. Professor Owl demonstrates the Human + AI Assist approach by helping visitors while still providing pathways to human assistance."
    },


    /* =====================================================
       CONTEXT AWARENESS
    ===================================================== */

    contextAwareness: {

        principle:
            "An AI assistant should use only the context it needs and is permitted to use.",

        possibleContext: [
            "Current business",
            "Current platform",
            "Current workspace",
            "Current page",
            "Current journey",
            "User role",
            "Approved business knowledge",
            "Available products or services",
            "Supported project information",
            "Supported booking information",
            "Supported order information",
            "Supported reports",
            "Permission boundaries"
        ]
    },


    /* =====================================================
       PROOF CONNECTIONS
    ===================================================== */

    proofConnections: [

        {
            project: "Professor Owl",
            connection:
                "Provides a working BuildFrame example of a guided portfolio AI experience with business knowledge, free-text interaction, guided conversation, and human-assistance pathways."
        },

        {
            project: "BuildFrame Business Software",
            connection:
                "Provides the broader modular business-system direction where AI assistance can be integrated into workflows and business processes."
        },

        {
            project: "BuildFrame Surveys Platform",
            connection:
                "Provides structured questionnaire, response, analytics, chart, and reporting journeys that can support future AI-assisted explanation and insights."
        },

        {
            project: "Build My Online Food Business",
            connection:
                "Provides guided setup, products, pricing, ordering, customer, and owner-workspace journeys where tailored AI guidance may support future workflows."
        },

        {
            project: "M&N Consumer Goods",
            connection:
                "Provides operational workflow examples involving products, inventory, suppliers, purchase orders, receiving, orders, invoices, payments, deliveries, returns, and reporting."
        }

    ],


    /* =====================================================
       BOUNDARIES
    ===================================================== */

    boundaries: [

        "Do not claim that every AI assistant, AI VA, integration, or automation described here has already been built.",

        "AI Installation & Tailoring is a BuildFrame service, but the exact implementation depends on the client's workflow, existing systems, requirements, technical environment, permissions, and scope.",

        "Distinguish clearly between working examples, configurable capabilities, experiments, concepts, and future directions.",

        "Do not promise perfect AI responses.",

        "Do not promise perfect security or zero risk.",

        "Do not claim that AI can replace professional judgment where human expertise is required.",

        "Do not expose private business, customer, workspace, or project information.",

        "Do not describe AI as magic.",

        "Do not make guaranteed ROI, productivity, revenue, or performance claims.",

        "Keep appropriate human approvals and escalation pathways where needed.",

        "Keep Chin Veloso and BuildFrame at the center of the professional story."
    ],


    buildFramePrinciple:
        "Journey Before Features. Understand who the AI is helping, what they are trying to accomplish, what information the AI is permitted to use, where AI assistance is genuinely useful, and when a human should remain in control.",

    proofBeforeHype:
        "BuildFrame can offer AI Installation & Tailoring without pretending that every imaginable AI capability is already a completed product. Working examples should be used as proof, while new client implementations should be described according to their actual scope.",

    partnerProfVoice:
        "AI does not have to take over your business to be useful. Sometimes the best place to begin is one repetitive question, one confusing workflow, or one part of the journey where people keep getting stuck. We can start there.",

    callToImagine:
        "If your business had one AI assistant tailored around the way you actually work, where would you want it to help first?"

};