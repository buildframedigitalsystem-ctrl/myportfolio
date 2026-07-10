/* =========================================================
   BUILDFRAME AI KNOWLEDGE
   File: ai/knowledge/featured-projects.js

   Purpose:
   Evidence library for Partner Prof.

   Rule:
   Partner Prof must use these as proof of what Chin and
   BuildFrame have already built, shaped, tested, or started.

   Important:
   Do not present future concepts as completed projects.
========================================================= */

window.BuildFrameFeaturedProjects = {
    identity: {
        title: "BuildFrame Featured Projects",
        aiName: "Partner Prof",
        owner: "Chin",
        positioning: "Meet Partner Prof — Chin's AI Building Partner",
        rule: "Use featured projects as evidence, not hype."
    },

    projects: [
        {
            id: "surveys-platform",
            status: "live-featured-project",
            name: "BuildFrame Surveys Platform",
            type: "Survey, Analytics, Reports, and Learning Platform",
            proofLevel: "Working platform",
            summary:
                "A BuildFrame platform for creating questionnaires, collecting responses, reviewing respondents, analyzing answers, generating reports, exporting data, and guiding users through learning materials.",
            evidence:
                "Includes questionnaire building, multiple question types, response collection, respondents, analytics, charts, reports, Excel export, PDF-ready reports, mobile-friendly use, and a learning center with video, audio, written, and visual guides.",
            teaser:
                "Imagine asking better questions, collecting cleaner answers, and turning responses into something your team can actually use.",
            link: "../index.html",
            keywords: [
                "survey",
                "questionnaire",
                "analytics",
                "reports",
                "excel",
                "pdf",
                "respondents",
                "research",
                "feedback",
                "forms"
            ]
        },

        {
            id: "food-business-os",
            status: "built-system-private-preview",
            name: "Build My Online Food Business / Food Business OS",
            type: "Food Business Setup, Storefront, Orders, and Owner Workspace",
            proofLevel: "Built and actively developed",
            summary:
                "A guided food business experience where owners can shape their business identity, storefront, products, prices, customer ordering flow, checkout, orders, and workspace.",
            evidence:
                "Includes editable store experiences, guided setup, products, pricing, cart, checkout, live store flow, customer orders, order records, owner workspace, and business journey structure.",
            teaser:
                "Imagine seeing your future food business before fully launching it — from storefront to checkout to order management.",
            link: "#",
            keywords: [
                "food",
                "restaurant",
                "cafe",
                "bakery",
                "store",
                "cart",
                "checkout",
                "orders",
                "menu",
                "products"
            ]
        },

        {
            id: "mn-consumer-goods",
            status: "built-operations-system",
            name: "M&N Consumer Goods Admin OS and Store App",
            type: "Inventory, Orders, Store App, Payments, Deliveries, and Operations",
            proofLevel: "Built operating system",
            summary:
                "A business operating system with separated Admin OS and Store App structure for managing wholesale ordering, products, inventory, customers, suppliers, orders, payments, deliveries, returns, agents, and reports.",
            evidence:
                "Includes product control, wholesale store app, cart, order form, signature capture, invoices, inventory movements, suppliers, purchase orders, product receiving, payments, delivery status, returns, agents, and admin reporting structure.",
            teaser:
                "Imagine products, orders, inventory, suppliers, deliveries, payments, and reports finally behaving like one connected business system.",
            link: "#",
            keywords: [
                "inventory",
                "orders",
                "suppliers",
                "purchase orders",
                "payments",
                "deliveries",
                "returns",
                "agents",
                "wholesale",
                "store app"
            ]
        },

        {
            id: "tides-of-hope",
            status: "built-community-office-system",
            name: "Tides of Hope Website and Office System",
            type: "Nonprofit Website, Office Portal, Members, Gallery, Announcements, and Community Tools",
            proofLevel: "Built website and portal",
            summary:
                "A nonprofit website and office portal for managing members, internal access, president messages, announcements, gallery uploads, gratitude content, family/community features, and organization communication.",
            evidence:
                "Includes public website sections, office portal, member login, profile updates, directory, President’s Corner, gallery upload, announcements, gratitude wall, family corner, role-based access, and internal content management tools.",
            teaser:
                "Imagine a community organization where stories, members, announcements, galleries, leadership messages, and internal records finally live in one organized place.",
            link: "#",
            keywords: [
                "nonprofit",
                "ngo",
                "foundation",
                "members",
                "directory",
                "gallery",
                "announcements",
                "community",
                "office portal",
                "family corner"
            ]
        },

        {
            id: "construction-fields",
            status: "early-foundation-for-future-platform",
            name: "Construction and Contractor Trade Experiences",
            type: "Construction Websites, Trade Concepts, and Future Construction Platform Foundation",
            proofLevel: "Early project library and future platform base",
            summary:
                "One of Chin and Partner Prof's earliest BuildFrame directions: individual construction trade experiences that are now becoming the foundation for a future configurable Construction & Contractors Platform.",
            evidence:
                "Explored fields include general contractors, renovation, glass and aluminum, woodworks, metal fabrication, plumbing, electrical, roofing, HVAC, solar, landscaping, tiling and flooring, handyman, hardware, construction materials, bolts and nuts, spare parts, fire protection, garage and workshop concepts, and car wash or café hybrids.",
            teaser:
                "Imagine a contractor client describing the project, uploading photos, requesting an estimate, booking a site visit, receiving a proposal, approving changes, and following milestones from one guided journey.",
            link: "#",
            keywords: [
                "construction",
                "contractor",
                "renovation",
                "plumbing",
                "electrical",
                "roofing",
                "hvac",
                "solar",
                "landscaping",
                "glass",
                "aluminum",
                "woodworks",
                "metal fabrication",
                "hardware",
                "materials"
            ]
        },

        {
            id: "partner-prof-ai",
            status: "being-framed",
            name: "Partner Prof AI Layer",
            type: "BuildFrame AI Assistant and Future AI VA System",
            proofLevel: "Currently being built",
            summary:
                "The BuildFrame AI identity and assistant layer designed to guide visitors, explain platform worlds, understand featured projects, tease possibilities, support users, and eventually power specialized AI VAs.",
            evidence:
                "Partner Prof is being built as Chin's AI Building Partner, with knowledge of BuildFrame strategy, completed projects, platform worlds, construction fields, services, education, business operations, and future AI assistants.",
            teaser:
                "Imagine an AI assistant that does not just answer generic questions — it understands the platform, the business journey, and which proof door to open next.",
            link: "ai.html",
            keywords: [
                "ai",
                "assistant",
                "partner prof",
                "chatbot",
                "va",
                "support",
                "automation",
                "insights",
                "onboarding"
            ]
        }
    ],

    getAllProjects: function () {
        return this.projects;
    },

    findProjectsByKeyword: function (message) {
        const text = String(message || "").toLowerCase();

        return this.projects.filter(function (project) {
            return project.keywords.some(function (keyword) {
                return text.includes(keyword.toLowerCase());
            });
        });
    },

    getProjectById: function (projectId) {
        return this.projects.find(function (project) {
            return project.id === projectId;
        });
    },

    getProofSummary: function () {
        return this.projects
            .map(function (project) {
                return project.name + " — " + project.proofLevel;
            })
            .join("\n");
    }
};