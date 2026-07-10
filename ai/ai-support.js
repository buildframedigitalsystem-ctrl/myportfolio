/* =====================================================
   BUILDFRAME AI CENTER
   File: ai/ai-support.js

   Purpose:
   BuildFrame visitor support behavior layer.

   This file supports the separate guided support
   experience without replacing Professor Owl,
   the portfolio exploration chatbot, or the AI Center.

   Support journey:
   Visitor Need → Guided Choice → Useful Answer
   → Next Choice → Messenger or AI Center

   IMPORTANT:
   - Professor Owl remains accessible.
   - The AI Center remains accessible.
   - Facebook Messenger remains the human support path.
   - Support must never overpromise unfinished systems.
===================================================== */

window.BuildFrameAISupport = {
    id: "buildframe-ai-support",
    name: "BuildFrame Guided Support Layer",
    version: "2.0.0",

    facebookPageUrl:
        "https://www.facebook.com/profile.php?id=61573627290922",

    aiCenterPath:
        "ai.html",

    supportPhilosophy:
        "Support should make visitors feel guided, not handled. Give an immediate useful answer, offer the next logical choice, and make human assistance or deeper AI exploration easy to reach.",

    supportStyle: [
        "Explain simply.",
        "Stay warm and professional.",
        "Give a useful answer before asking another question.",
        "Ask only one useful follow-up at a time.",
        "Use guided clickable choices as the primary experience.",
        "Keep free typing available as a secondary option.",
        "Do not overwhelm the visitor.",
        "Do not sound robotic.",
        "Do not invent prices.",
        "Do not pretend unfinished platforms or features are complete.",
        "Clearly separate completed work, active development, early foundations, and future directions."
    ],

    supportEntry: {
        id: "support-start",

        message:
            "Hello! How can BuildFrame help you today?",

        description:
            "Choose the closest option. You can still type your own question anytime.",

        choices: [
            {
                id: "choose-system",
                label: "Help Me Choose a System",
                nextStep: "choose-system"
            },
            {
                id: "discuss-business",
                label: "Discuss My Business",
                nextStep: "discuss-business"
            },
            {
                id: "pricing",
                label: "Ask About Pricing",
                nextStep: "pricing"
            },
            {
                id: "featured-projects",
                label: "Explore Featured Projects",
                nextStep: "featured-projects"
            },
            {
                id: "technical-support",
                label: "Technical Support",
                nextStep: "technical-support"
            },
            {
                id: "ai-center",
                label: "Open AI Center",
                action: "open-ai-center"
            },
            {
                id: "human-support",
                label: "Chat With a Real Person",
                action: "open-messenger"
            }
        ]
    },

    guidedConversations: {
        "choose-system": {
            id: "choose-system",

            message:
                "Let’s narrow it down. What kind of journey do you need help building?",

            choices: [
                {
                    id: "customer-journey",
                    label: "Customer Journey",
                    nextStep: "customer-journey"
                },
                {
                    id: "owner-workspace",
                    label: "Owner Workspace",
                    nextStep: "owner-workspace"
                },
                {
                    id: "admin-system",
                    label: "Admin System",
                    nextStep: "admin-system"
                },
                {
                    id: "client-portal",
                    label: "Client or Member Portal",
                    nextStep: "client-portal"
                },
                {
                    id: "business-operations",
                    label: "Business Operations",
                    nextStep: "business-operations"
                },
                {
                    id: "ai-assistant",
                    label: "AI Assistant",
                    nextStep: "ai-assistant"
                },
                {
                    id: "complete-system",
                    label: "Complete Business System",
                    nextStep: "complete-system"
                }
            ]
        },

        "discuss-business": {
            id: "discuss-business",

            message:
                "Great. What kind of business, organization, or project are you building?",

            choices: [
                {
                    id: "construction-business",
                    label: "Construction & Contractors",
                    nextStep: "construction-business"
                },
                {
                    id: "food-business",
                    label: "Food Business",
                    nextStep: "food-business"
                },
                {
                    id: "professional-service",
                    label: "Professionals & Services",
                    nextStep: "professional-service"
                },
                {
                    id: "retail-operations",
                    label: "Retail & Operations",
                    nextStep: "retail-operations"
                },
                {
                    id: "survey-insights",
                    label: "Surveys & Insights",
                    nextStep: "survey-insights"
                },
                {
                    id: "education-academy",
                    label: "Education & Academy",
                    nextStep: "education-academy"
                },
                {
                    id: "community-organization",
                    label: "Community or Organization",
                    nextStep: "community-organization"
                },
                {
                    id: "custom-business",
                    label: "Something More Custom",
                    nextStep: "custom-business"
                }
            ]
        },

        "pricing": {
            id: "pricing",

            message:
                "BuildFrame pricing depends on the journey, scope, modules, integrations, data structure, and growth path. We do not use one invented price for every business because a simple starting system and a complete operating platform are very different projects.",

            choices: [
                {
                    id: "simple-start",
                    label: "I Want to Start Simple",
                    nextStep: "simple-start"
                },
                {
                    id: "specific-modules",
                    label: "I Need Specific Modules",
                    nextStep: "specific-modules"
                },
                {
                    id: "complete-platform-pricing",
                    label: "I Need a Complete Platform",
                    nextStep: "complete-platform-pricing"
                },
                {
                    id: "human-pricing",
                    label: "Discuss Pricing With a Person",
                    action: "open-messenger"
                }
            ]
        },

        "featured-projects": {
            id: "featured-projects",

            message:
                "BuildFrame uses real projects as proof doors. Which experience would you like to explore?",

            choices: [
                {
                    id: "project-surveys",
                    label: "Survey Platform",
                    nextStep: "project-surveys"
                },
                {
                    id: "project-food",
                    label: "Food Business OS",
                    nextStep: "project-food"
                },
                {
                    id: "project-mn",
                    label: "M&N Consumer Goods",
                    nextStep: "project-mn"
                },
                {
                    id: "project-tides",
                    label: "Tides of Hope",
                    nextStep: "project-tides"
                },
                {
                    id: "project-one-leyte",
                    label: "One Leyte",
                    nextStep: "project-one-leyte"
                },
                {
                    id: "project-genealogy",
                    label: "TinyTeam Genealogy",
                    nextStep: "project-genealogy"
                },
                {
                    id: "project-ai-center",
                    label: "Explore Everything in AI Center",
                    action: "open-ai-center"
                }
            ]
        },

        "technical-support": {
            id: "technical-support",

            message:
                "Technical support depends on which BuildFrame experience you are using. Choose the closest concern so we can direct you properly.",

            choices: [
                {
                    id: "login-access",
                    label: "Login or Account Access",
                    nextStep: "login-access"
                },
                {
                    id: "page-not-working",
                    label: "A Page Is Not Working",
                    nextStep: "page-not-working"
                },
                {
                    id: "data-records",
                    label: "Data or Records Concern",
                    nextStep: "data-records"
                },
                {
                    id: "mobile-device",
                    label: "Mobile or Tablet Issue",
                    nextStep: "mobile-device"
                },
                {
                    id: "installation",
                    label: "App Installation Concern",
                    nextStep: "installation"
                },
                {
                    id: "human-technical-support",
                    label: "Talk to Human Support",
                    action: "open-messenger"
                }
            ]
        },

        "customer-journey": {
            id: "customer-journey",

            message:
                "A customer journey can guide people from discovery to inquiry, booking, ordering, payment, updates, completion, and follow-up. The right structure depends on what your customers need to do first.",

            choices: [
                {
                    id: "lead-capture",
                    label: "Lead Capture",
                    nextStep: "lead-capture"
                },
                {
                    id: "booking-flow",
                    label: "Booking Journey",
                    nextStep: "booking-flow"
                },
                {
                    id: "ordering-flow",
                    label: "Ordering Journey",
                    nextStep: "ordering-flow"
                },
                {
                    id: "quotation-flow",
                    label: "Quotation Journey",
                    nextStep: "quotation-flow"
                },
                {
                    id: "customer-portal",
                    label: "Customer Portal",
                    nextStep: "client-portal"
                },
                {
                    id: "complete-customer-system",
                    label: "Build the Complete Journey",
                    nextStep: "complete-system"
                }
            ]
        },

        "owner-workspace": {
            id: "owner-workspace",

            message:
                "An owner workspace can become the business control room for products, services, pricing, orders, bookings, records, reports, content, settings, and daily decisions.",

            choices: [
                {
                    id: "manage-products",
                    label: "Products or Services",
                    nextStep: "manage-products"
                },
                {
                    id: "manage-orders",
                    label: "Orders or Bookings",
                    nextStep: "manage-orders"
                },
                {
                    id: "manage-content",
                    label: "Website or Store Content",
                    nextStep: "manage-content"
                },
                {
                    id: "reports-analytics",
                    label: "Reports & Analytics",
                    nextStep: "reports-analytics"
                },
                {
                    id: "complete-owner-workspace",
                    label: "Complete Owner Workspace",
                    nextStep: "complete-system"
                }
            ]
        },

        "admin-system": {
            id: "admin-system",

            message:
                "An admin system can organize records, users, approvals, activities, payments, reports, files, and operational controls in one structured workspace.",

            choices: [
                {
                    id: "records-database",
                    label: "Records & Database",
                    nextStep: "records-database"
                },
                {
                    id: "users-permissions",
                    label: "Users & Permissions",
                    nextStep: "users-permissions"
                },
                {
                    id: "approvals-workflows",
                    label: "Approvals & Workflows",
                    nextStep: "approvals-workflows"
                },
                {
                    id: "admin-reports",
                    label: "Admin Reports",
                    nextStep: "reports-analytics"
                },
                {
                    id: "complete-admin-system",
                    label: "Complete Admin System",
                    nextStep: "complete-system"
                }
            ]
        },

        "client-portal": {
            id: "client-portal",

            message:
                "A portal can give customers, clients, members, learners, or project owners a secure place to view records, updates, documents, approvals, payments, history, and next actions.",

            choices: [
                {
                    id: "project-updates",
                    label: "Project Updates",
                    nextStep: "project-updates"
                },
                {
                    id: "documents-approvals",
                    label: "Documents & Approvals",
                    nextStep: "documents-approvals"
                },
                {
                    id: "payments-history",
                    label: "Payments & History",
                    nextStep: "payments-history"
                },
                {
                    id: "member-portal",
                    label: "Member Portal",
                    nextStep: "member-portal"
                },
                {
                    id: "complete-portal",
                    label: "Build the Complete Portal",
                    nextStep: "complete-system"
                }
            ]
        },

        "business-operations": {
            id: "business-operations",

            message:
                "Business operations can connect inventory, suppliers, orders, payments, deliveries, returns, staff, reports, and administrative workflows instead of keeping them in scattered files.",

            choices: [
                {
                    id: "inventory",
                    label: "Inventory",
                    nextStep: "inventory"
                },
                {
                    id: "suppliers",
                    label: "Suppliers & Purchase Orders",
                    nextStep: "suppliers"
                },
                {
                    id: "payments",
                    label: "Payments & Invoices",
                    nextStep: "payments"
                },
                {
                    id: "deliveries",
                    label: "Deliveries & Returns",
                    nextStep: "deliveries"
                },
                {
                    id: "operations-reports",
                    label: "Operations Reports",
                    nextStep: "reports-analytics"
                },
                {
                    id: "complete-operations",
                    label: "Complete Operations System",
                    nextStep: "complete-system"
                }
            ]
        },

        "ai-assistant": {
            id: "ai-assistant",

            message:
                "A BuildFrame AI assistant should understand the platform and the visitor’s journey. It can guide onboarding, answer support questions, explain reports, assist sales conversations, organize next steps, or help users complete tasks.",

            choices: [
                {
                    id: "ai-support-helper",
                    label: "Customer Support AI",
                    nextStep: "ai-support-helper"
                },
                {
                    id: "ai-sales-helper",
                    label: "Sales Conversation AI",
                    nextStep: "ai-sales-helper"
                },
                {
                    id: "ai-onboarding",
                    label: "Onboarding Guide",
                    nextStep: "ai-onboarding"
                },
                {
                    id: "ai-report-helper",
                    label: "Report & Insights AI",
                    nextStep: "ai-report-helper"
                },
                {
                    id: "specialized-ai-vas",
                    label: "Specialized AI VAs",
                    nextStep: "specialized-ai-vas"
                },
                {
                    id: "open-ai-center",
                    label: "Explore AI Center",
                    action: "open-ai-center"
                }
            ]
        },

        "complete-system": {
            id: "complete-system",

            message:
                "A complete BuildFrame system can connect the public customer journey, owner workspace, admin controls, database, reports, portals, payments, and future AI assistance. The final structure should be shaped around how your business actually operates.",

            choices: [
                {
                    id: "start-with-business",
                    label: "Describe My Business",
                    nextStep: "discuss-business"
                },
                {
                    id: "start-simple-complete",
                    label: "Start With a Smaller Phase",
                    nextStep: "simple-start"
                },
                {
                    id: "explore-ai-center-complete",
                    label: "Explore the AI Center",
                    action: "open-ai-center"
                },
                {
                    id: "discuss-complete-system",
                    label: "Discuss With a Real Person",
                    action: "open-messenger"
                }
            ]
        },

        "construction-business": {
            id: "construction-business",

            message:
                "A construction or contractor system can connect project inquiries, photo uploads, site inspections, estimates, quotations, proposals, approvals, deposits, milestones, progress billing, client updates, completion documents, and warranties.",

            choices: [
                {
                    id: "construction-leads",
                    label: "Get More Leads",
                    nextStep: "lead-capture"
                },
                {
                    id: "construction-estimates",
                    label: "Estimate Requests",
                    nextStep: "quotation-flow"
                },
                {
                    id: "construction-site-visits",
                    label: "Site Visit Booking",
                    nextStep: "booking-flow"
                },
                {
                    id: "construction-proposals",
                    label: "Quotations & Proposals",
                    nextStep: "documents-approvals"
                },
                {
                    id: "construction-tracking",
                    label: "Project Tracking",
                    nextStep: "project-updates"
                },
                {
                    id: "construction-portal",
                    label: "Client Portal",
                    nextStep: "client-portal"
                },
                {
                    id: "construction-complete",
                    label: "Build the Complete System",
                    nextStep: "complete-system"
                }
            ]
        },

        "food-business": {
            id: "food-business",

            message:
                "A food business system can guide customers from menu discovery to cart, checkout, payment, pickup or delivery, order confirmation, and repeat ordering. Owners can manage products, pricing, content, orders, and business settings through their own workspace.",

            choices: [
                {
                    id: "food-storefront",
                    label: "Online Storefront",
                    nextStep: "ordering-flow"
                },
                {
                    id: "food-orders",
                    label: "Orders & Checkout",
                    nextStep: "manage-orders"
                },
                {
                    id: "food-products",
                    label: "Menu & Products",
                    nextStep: "manage-products"
                },
                {
                    id: "food-owner",
                    label: "Owner Workspace",
                    nextStep: "owner-workspace"
                },
                {
                    id: "food-complete",
                    label: "Complete Food Business OS",
                    nextStep: "complete-system"
                }
            ]
        },

        "professional-service": {
            id: "professional-service",

            message:
                "A professional service system can handle inquiries, client intake, appointments, quotations, service records, payments, follow-ups, and a client portal. The journey can be designed for consultants, coaches, tutors, salons, clinics, repair services, photographers, and other service providers.",

            choices: [
                {
                    id: "service-booking",
                    label: "Appointments & Booking",
                    nextStep: "booking-flow"
                },
                {
                    id: "service-intake",
                    label: "Client Intake",
                    nextStep: "lead-capture"
                },
                {
                    id: "service-payments",
                    label: "Payments",
                    nextStep: "payments"
                },
                {
                    id: "service-portal",
                    label: "Client Portal",
                    nextStep: "client-portal"
                },
                {
                    id: "service-complete",
                    label: "Complete Service System",
                    nextStep: "complete-system"
                }
            ]
        },

        "retail-operations": {
            id: "retail-operations",

            message:
                "A retail and operations system can connect products, inventory, wholesale or retail orders, customers, suppliers, purchase orders, receiving, invoices, payments, deliveries, returns, agents, and reporting.",

            choices: [
                {
                    id: "retail-products",
                    label: "Products & Inventory",
                    nextStep: "inventory"
                },
                {
                    id: "retail-orders",
                    label: "Ordering System",
                    nextStep: "ordering-flow"
                },
                {
                    id: "retail-suppliers",
                    label: "Suppliers & Purchasing",
                    nextStep: "suppliers"
                },
                {
                    id: "retail-reports",
                    label: "Reports & Analytics",
                    nextStep: "reports-analytics"
                },
                {
                    id: "retail-complete",
                    label: "Complete Retail OS",
                    nextStep: "complete-system"
                }
            ]
        },

        "survey-insights": {
            id: "survey-insights",

            message:
                "A surveys and insights system can create questionnaires, collect respondent information, organize responses, generate charts and analytics, prepare reports, and support printable or downloadable outputs.",

            choices: [
                {
                    id: "survey-builder",
                    label: "Questionnaire Builder",
                    nextStep: "project-surveys"
                },
                {
                    id: "survey-responses",
                    label: "Responses & Respondents",
                    nextStep: "records-database"
                },
                {
                    id: "survey-analytics",
                    label: "Charts & Analytics",
                    nextStep: "reports-analytics"
                },
                {
                    id: "survey-reports",
                    label: "Reports & Exports",
                    nextStep: "reports-analytics"
                },
                {
                    id: "survey-complete",
                    label: "Complete Survey Platform",
                    nextStep: "complete-system"
                }
            ]
        },

        "education-academy": {
            id: "education-academy",

            message:
                "An education or academy system can guide learners through registration, courses, lessons, tutorials, assignments, quizzes, attendance, certificates, progress records, and learner support.",

            choices: [
                {
                    id: "academy-courses",
                    label: "Courses & Lessons",
                    nextStep: "manage-content"
                },
                {
                    id: "academy-learners",
                    label: "Learner Portal",
                    nextStep: "member-portal"
                },
                {
                    id: "academy-records",
                    label: "Attendance & Progress",
                    nextStep: "records-database"
                },
                {
                    id: "academy-certificates",
                    label: "Certificates & Reports",
                    nextStep: "reports-analytics"
                },
                {
                    id: "academy-complete",
                    label: "Complete Academy System",
                    nextStep: "complete-system"
                }
            ]
        },

        "community-organization": {
            id: "community-organization",

            message:
                "A community or organization system can support registrations, member profiles, directories, announcements, leadership content, galleries, events, IDs, QR codes, records, and private member spaces.",

            choices: [
                {
                    id: "community-members",
                    label: "Member Registration",
                    nextStep: "member-portal"
                },
                {
                    id: "community-directory",
                    label: "Member Directory",
                    nextStep: "records-database"
                },
                {
                    id: "community-content",
                    label: "Announcements & Content",
                    nextStep: "manage-content"
                },
                {
                    id: "community-ids",
                    label: "IDs & QR Codes",
                    nextStep: "records-database"
                },
                {
                    id: "community-complete",
                    label: "Complete Community System",
                    nextStep: "complete-system"
                }
            ]
        },

        "custom-business": {
            id: "custom-business",

            message:
                "Some businesses do not fit ordinary templates. BuildFrame can begin with the actual workflow: who enters information, what records must be saved, what approvals happen, what customers see, what staff manage, and what reports are needed.",

            choices: [
                {
                    id: "custom-workflow",
                    label: "Explain My Workflow",
                    nextStep: "human-handoff"
                },
                {
                    id: "custom-records",
                    label: "Organize My Records",
                    nextStep: "records-database"
                },
                {
                    id: "custom-portal",
                    label: "Build a Private Portal",
                    nextStep: "client-portal"
                },
                {
                    id: "custom-ai",
                    label: "Add an AI Helper",
                    nextStep: "ai-assistant"
                },
                {
                    id: "custom-human",
                    label: "Discuss the Custom Project",
                    action: "open-messenger"
                }
            ]
        },

        "simple-start": {
            id: "simple-start",

            message:
                "Starting simple can mean launching one useful journey first, such as inquiries, bookings, ordering, customer records, a portal, or an owner dashboard. The foundation can still be designed with room to grow.",

            choices: [
                {
                    id: "simple-leads",
                    label: "Start With Inquiries",
                    nextStep: "lead-capture"
                },
                {
                    id: "simple-booking",
                    label: "Start With Booking",
                    nextStep: "booking-flow"
                },
                {
                    id: "simple-orders",
                    label: "Start With Orders",
                    nextStep: "ordering-flow"
                },
                {
                    id: "simple-dashboard",
                    label: "Start With a Dashboard",
                    nextStep: "owner-workspace"
                },
                {
                    id: "simple-discuss",
                    label: "Discuss the Best First Phase",
                    action: "open-messenger"
                }
            ]
        },

        "specific-modules": {
            id: "specific-modules",

            message:
                "Specific modules may include customer records, products, bookings, quotations, inventory, payments, reports, portals, content management, or AI assistance. Pricing depends on how those modules connect and how much workflow automation is required.",

            choices: [
                {
                    id: "module-customer",
                    label: "Customer Management",
                    nextStep: "records-database"
                },
                {
                    id: "module-orders",
                    label: "Orders or Bookings",
                    nextStep: "manage-orders"
                },
                {
                    id: "module-payments",
                    label: "Payments",
                    nextStep: "payments"
                },
                {
                    id: "module-reports",
                    label: "Reports",
                    nextStep: "reports-analytics"
                },
                {
                    id: "module-portal",
                    label: "Portal",
                    nextStep: "client-portal"
                },
                {
                    id: "module-discuss",
                    label: "Discuss My Modules",
                    action: "open-messenger"
                }
            ]
        },

        "complete-platform-pricing": {
            id: "complete-platform-pricing",

            message:
                "A complete platform normally involves several connected journeys: public experience, customer actions, owner workspace, admin controls, database, reports, integrations, and future growth. It needs a proper scope before accurate pricing can be prepared.",

            choices: [
                {
                    id: "platform-business",
                    label: "Describe My Business First",
                    nextStep: "discuss-business"
                },
                {
                    id: "platform-ai-center",
                    label: "Explore Platform Possibilities",
                    action: "open-ai-center"
                },
                {
                    id: "platform-human",
                    label: "Request a Scope Discussion",
                    action: "open-messenger"
                }
            ]
        },

        "lead-capture": {
            id: "lead-capture",

            message:
                "A lead capture journey can collect the right information before a conversation begins. It may include customer details, service interest, location, preferred schedule, photos, files, budget range, and the next recommended action.",

            choices: [
                {
                    id: "lead-booking",
                    label: "Add Booking",
                    nextStep: "booking-flow"
                },
                {
                    id: "lead-quotation",
                    label: "Add Quotation Requests",
                    nextStep: "quotation-flow"
                },
                {
                    id: "lead-dashboard",
                    label: "Manage Leads in a Dashboard",
                    nextStep: "owner-workspace"
                },
                {
                    id: "lead-complete",
                    label: "Build the Complete Journey",
                    nextStep: "complete-system"
                }
            ]
        },

        "booking-flow": {
            id: "booking-flow",

            message:
                "A booking journey can show available services or schedules, collect customer information, confirm appointments, support rescheduling or cancellation, and connect each booking to the owner workspace.",

            choices: [
                {
                    id: "booking-payments",
                    label: "Add Deposits or Payments",
                    nextStep: "payments"
                },
                {
                    id: "booking-records",
                    label: "Save Customer Records",
                    nextStep: "records-database"
                },
                {
                    id: "booking-dashboard",
                    label: "Manage Bookings",
                    nextStep: "owner-workspace"
                },
                {
                    id: "booking-complete",
                    label: "Build the Complete Journey",
                    nextStep: "complete-system"
                }
            ]
        },

        "ordering-flow": {
            id: "ordering-flow",

            message:
                "An ordering journey can include products or services, pricing, cart, checkout, customer details, payment method, pickup or delivery, confirmation, order history, and owner-side order management.",

            choices: [
                {
                    id: "ordering-products",
                    label: "Products & Pricing",
                    nextStep: "manage-products"
                },
                {
                    id: "ordering-payments",
                    label: "Payments",
                    nextStep: "payments"
                },
                {
                    id: "ordering-delivery",
                    label: "Pickup or Delivery",
                    nextStep: "deliveries"
                },
                {
                    id: "ordering-management",
                    label: "Order Management",
                    nextStep: "manage-orders"
                },
                {
                    id: "ordering-complete",
                    label: "Build the Complete Journey",
                    nextStep: "complete-system"
                }
            ]
        },

        "quotation-flow": {
            id: "quotation-flow",

            message:
                "A quotation journey can collect project details, measurements, photos, files, preferred schedule, and scope information. The business can then prepare estimates, proposals, approvals, deposits, and next project steps.",

            choices: [
                {
                    id: "quotation-uploads",
                    label: "Photo & File Uploads",
                    nextStep: "records-database"
                },
                {
                    id: "quotation-approval",
                    label: "Digital Approval",
                    nextStep: "documents-approvals"
                },
                {
                    id: "quotation-deposit",
                    label: "Deposit Collection",
                    nextStep: "payments"
                },
                {
                    id: "quotation-tracking",
                    label: "Project Tracking",
                    nextStep: "project-updates"
                },
                {
                    id: "quotation-complete",
                    label: "Complete Quotation System",
                    nextStep: "complete-system"
                }
            ]
        },

        "manage-products": {
            id: "manage-products",

            message:
                "A product or service manager can allow owners to add, edit, remove, price, categorize, discount, publish, hide, and update offerings without hardcoding every change.",

            choices: [
                {
                    id: "product-inventory",
                    label: "Connect Inventory",
                    nextStep: "inventory"
                },
                {
                    id: "product-orders",
                    label: "Connect Ordering",
                    nextStep: "ordering-flow"
                },
                {
                    id: "product-content",
                    label: "Manage Store Content",
                    nextStep: "manage-content"
                },
                {
                    id: "product-complete",
                    label: "Complete Owner System",
                    nextStep: "complete-system"
                }
            ]
        },

        "manage-orders": {
            id: "manage-orders",

            message:
                "Order or booking management can organize customer details, items or services, status, payment, delivery or schedule, notes, history, and the next operational action.",

            choices: [
                {
                    id: "orders-payments",
                    label: "Payments & Invoices",
                    nextStep: "payments"
                },
                {
                    id: "orders-delivery",
                    label: "Delivery or Completion",
                    nextStep: "deliveries"
                },
                {
                    id: "orders-reports",
                    label: "Order Reports",
                    nextStep: "reports-analytics"
                },
                {
                    id: "orders-complete",
                    label: "Complete Operations System",
                    nextStep: "complete-system"
                }
            ]
        },

        "manage-content": {
            id: "manage-content",

            message:
                "Content management lets the owner update public-facing information such as business details, photos, homepage sections, services, products, announcements, policies, and featured content through the system.",

            choices: [
                {
                    id: "content-owner",
                    label: "Owner Editing Workspace",
                    nextStep: "owner-workspace"
                },
                {
                    id: "content-public",
                    label: "Public Website Experience",
                    nextStep: "customer-journey"
                },
                {
                    id: "content-complete",
                    label: "Connect the Full System",
                    nextStep: "complete-system"
                }
            ]
        },

        "records-database": {
            id: "records-database",

            message:
                "A structured database can organize customers, members, products, projects, responses, payments, documents, and activity history. The goal is not only storing data, but making each record useful inside the business journey.",

            choices: [
                {
                    id: "records-dashboard",
                    label: "View Records in a Dashboard",
                    nextStep: "admin-system"
                },
                {
                    id: "records-reports",
                    label: "Create Reports",
                    nextStep: "reports-analytics"
                },
                {
                    id: "records-portal",
                    label: "Show Records in a Portal",
                    nextStep: "client-portal"
                },
                {
                    id: "records-complete",
                    label: "Build the Complete System",
                    nextStep: "complete-system"
                }
            ]
        },

        "reports-analytics": {
            id: "reports-analytics",

            message:
                "Reports and analytics can turn operational records into summaries, charts, trends, printable documents, downloadable files, and clearer decisions. The useful reports depend on what the business needs to monitor.",

            choices: [
                {
                    id: "reports-dashboard",
                    label: "Dashboard Summary",
                    nextStep: "owner-workspace"
                },
                {
                    id: "reports-export",
                    label: "Printable or Downloadable Reports",
                    nextStep: "human-handoff"
                },
                {
                    id: "reports-ai",
                    label: "AI Report Explanation",
                    nextStep: "ai-report-helper"
                },
                {
                    id: "reports-complete",
                    label: "Connect Reports to the System",
                    nextStep: "complete-system"
                }
            ]
        },

        "payments": {
            id: "payments",

            message:
                "Payment support can include deposits, full payments, partial payments, invoices, receipts, payment status, transaction history, and configurable payment methods. Final integrations depend on the country, provider, and project scope.",

            choices: [
                {
                    id: "payment-invoices",
                    label: "Invoices & Receipts",
                    nextStep: "payments-history"
                },
                {
                    id: "payment-orders",
                    label: "Connect to Orders",
                    nextStep: "manage-orders"
                },
                {
                    id: "payment-portal",
                    label: "Show in Customer Portal",
                    nextStep: "client-portal"
                },
                {
                    id: "payment-discuss",
                    label: "Discuss Payment Requirements",
                    action: "open-messenger"
                }
            ]
        },

        "inventory": {
            id: "inventory",

            message:
                "Inventory can track products, stock levels, receiving, movements, deductions, low-stock conditions, supplier sources, and order-related changes.",

            choices: [
                {
                    id: "inventory-suppliers",
                    label: "Suppliers & Purchase Orders",
                    nextStep: "suppliers"
                },
                {
                    id: "inventory-orders",
                    label: "Connect Orders",
                    nextStep: "manage-orders"
                },
                {
                    id: "inventory-reports",
                    label: "Inventory Reports",
                    nextStep: "reports-analytics"
                },
                {
                    id: "inventory-complete",
                    label: "Complete Operations System",
                    nextStep: "complete-system"
                }
            ]
        },

        "suppliers": {
            id: "suppliers",

            message:
                "Supplier management can organize supplier records, supplier products, purchase orders, receiving, payment status, returns, and inventory movements.",

            choices: [
                {
                    id: "supplier-inventory",
                    label: "Connect Inventory",
                    nextStep: "inventory"
                },
                {
                    id: "supplier-payments",
                    label: "Supplier Payments",
                    nextStep: "payments"
                },
                {
                    id: "supplier-reports",
                    label: "Purchasing Reports",
                    nextStep: "reports-analytics"
                },
                {
                    id: "supplier-complete",
                    label: "Complete Operations System",
                    nextStep: "complete-system"
                }
            ]
        },

        "deliveries": {
            id: "deliveries",

            message:
                "Delivery and return workflows can track preparation, pickup, dispatch, delivery status, failed delivery, completion, returned items, customer communication, and related records.",

            choices: [
                {
                    id: "delivery-orders",
                    label: "Connect to Orders",
                    nextStep: "manage-orders"
                },
                {
                    id: "delivery-portal",
                    label: "Customer Status Tracking",
                    nextStep: "client-portal"
                },
                {
                    id: "delivery-reports",
                    label: "Delivery Reports",
                    nextStep: "reports-analytics"
                },
                {
                    id: "delivery-complete",
                    label: "Complete Operations System",
                    nextStep: "complete-system"
                }
            ]
        },

        "project-updates": {
            id: "project-updates",

            message:
                "Project tracking can show stages, milestones, schedules, notes, progress photos, billing status, completion documents, and the next required action for both the business and the client.",

            choices: [
                {
                    id: "project-portal-choice",
                    label: "Client Progress Portal",
                    nextStep: "client-portal"
                },
                {
                    id: "project-documents-choice",
                    label: "Documents & Approvals",
                    nextStep: "documents-approvals"
                },
                {
                    id: "project-payment-choice",
                    label: "Progress Billing",
                    nextStep: "payments"
                },
                {
                    id: "project-complete-choice",
                    label: "Complete Project System",
                    nextStep: "complete-system"
                }
            ]
        },

        "documents-approvals": {
            id: "documents-approvals",

            message:
                "Document and approval workflows can organize quotations, proposals, contracts, uploaded files, signatures, approval status, revisions, and completion documents. Legal documents should still be reviewed by qualified professionals.",

            choices: [
                {
                    id: "documents-portal-choice",
                    label: "Show Documents in a Portal",
                    nextStep: "client-portal"
                },
                {
                    id: "documents-payment-choice",
                    label: "Connect Deposits or Billing",
                    nextStep: "payments"
                },
                {
                    id: "documents-human-choice",
                    label: "Discuss the Required Workflow",
                    action: "open-messenger"
                }
            ]
        },

        "payments-history": {
            id: "payments-history",

            message:
                "A payment history area can show invoices, amounts due, payments received, balances, receipts, status, dates, and related order or project information.",

            choices: [
                {
                    id: "payment-history-portal",
                    label: "Place It in a Client Portal",
                    nextStep: "client-portal"
                },
                {
                    id: "payment-history-reports",
                    label: "Create Financial Reports",
                    nextStep: "reports-analytics"
                },
                {
                    id: "payment-history-human",
                    label: "Discuss Payment Setup",
                    action: "open-messenger"
                }
            ]
        },

        "member-portal": {
            id: "member-portal",

            message:
                "A member portal can provide login access, profiles, directories, announcements, records, activities, documents, IDs, QR codes, and organization-specific private areas.",

            choices: [
                {
                    id: "member-records",
                    label: "Member Records",
                    nextStep: "records-database"
                },
                {
                    id: "member-content-choice",
                    label: "Announcements & Content",
                    nextStep: "manage-content"
                },
                {
                    id: "member-complete-choice",
                    label: "Complete Member System",
                    nextStep: "complete-system"
                }
            ]
        },

        "users-permissions": {
            id: "users-permissions",

            message:
                "User and permission controls can separate owners, admins, staff, partners, customers, members, or learners so each person sees only the tools and records appropriate to their role.",

            choices: [
                {
                    id: "users-admin",
                    label: "Admin Roles",
                    nextStep: "admin-system"
                },
                {
                    id: "users-portal",
                    label: "Customer or Member Access",
                    nextStep: "client-portal"
                },
                {
                    id: "users-discuss",
                    label: "Discuss Required Roles",
                    action: "open-messenger"
                }
            ]
        },

        "approvals-workflows": {
            id: "approvals-workflows",

            message:
                "Approval workflows can move records through clear stages, assign responsibility, store decisions, preserve history, and trigger the next action instead of relying on scattered messages.",

            choices: [
                {
                    id: "approval-documents",
                    label: "Document Approval",
                    nextStep: "documents-approvals"
                },
                {
                    id: "approval-payments",
                    label: "Payment Approval",
                    nextStep: "payments"
                },
                {
                    id: "approval-complete",
                    label: "Complete Admin Workflow",
                    nextStep: "complete-system"
                }
            ]
        },

        "ai-support-helper": {
            id: "ai-support-helper",

            message:
                "A support AI can answer common questions, guide users through the platform, explain where to go next, and hand sensitive or complex concerns to a real person.",

            choices: [
                {
                    id: "support-ai-center",
                    label: "Explore AI Center",
                    action: "open-ai-center"
                },
                {
                    id: "support-ai-human",
                    label: "Discuss an AI Support Setup",
                    action: "open-messenger"
                }
            ]
        },

        "ai-sales-helper": {
            id: "ai-sales-helper",

            message:
                "A sales conversation AI can help visitors identify their business type, clarify needs, explore relevant possibilities, understand proof projects, and move toward a human scope discussion without becoming aggressively salesy.",

            choices: [
                {
                    id: "sales-ai-center",
                    label: "Explore AI Center",
                    action: "open-ai-center"
                },
                {
                    id: "sales-ai-human",
                    label: "Discuss a Sales AI",
                    action: "open-messenger"
                }
            ]
        },

        "ai-onboarding": {
            id: "ai-onboarding",

            message:
                "An onboarding AI can guide owners, customers, members, staff, or learners step by step while they set up profiles, business information, products, services, settings, or workspace records.",

            choices: [
                {
                    id: "onboarding-ai-center",
                    label: "Explore AI Center",
                    action: "open-ai-center"
                },
                {
                    id: "onboarding-ai-human",
                    label: "Discuss an Onboarding AI",
                    action: "open-messenger"
                }
            ]
        },

        "ai-report-helper": {
            id: "ai-report-helper",

            message:
                "A report and insights AI can explain summaries, highlight patterns, guide users through charts, and suggest useful follow-up questions. It should support judgment, not pretend to replace professional decisions.",

            choices: [
                {
                    id: "report-ai-center",
                    label: "Explore AI Center",
                    action: "open-ai-center"
                },
                {
                    id: "report-ai-human",
                    label: "Discuss an Insights AI",
                    action: "open-messenger"
                }
            ]
        },

        "specialized-ai-vas": {
            id: "specialized-ai-vas",

            message:
                "Specialized AI VAs can be designed for different responsibilities such as customer support, onboarding, sales guidance, report explanation, records assistance, or platform-specific help. Each AI should understand its role and boundaries.",

            choices: [
                {
                    id: "va-ai-center",
                    label: "Explore AI Center",
                    action: "open-ai-center"
                },
                {
                    id: "va-human",
                    label: "Discuss Specialized AI VAs",
                    action: "open-messenger"
                }
            ]
        },

        "project-surveys": {
            id: "project-surveys",

            message:
                "The Survey Platform is a live BuildFrame proof door for questionnaire building, respondent collection, Book Mode answering, analytics, charts, reports, and downloadable or printable output.",

            choices: [
                {
                    id: "open-surveys-live",
                    label: "Open Live Survey Platform",
                    action: "open-url",
                    url: "https://survey-platform-2db.pages.dev/"
                },
                {
                    id: "survey-ai-center",
                    label: "Explore More in AI Center",
                    action: "open-ai-center"
                },
                {
                    id: "survey-human",
                    label: "Discuss a Survey System",
                    action: "open-messenger"
                }
            ]
        },

        "project-food": {
            id: "project-food",

            message:
                "Build My Online Food Business is a live proof door showing a journey from food-business discovery and storefront exploration toward owner workspace, products, cart, checkout, orders, and business setup.",

            choices: [
                {
                    id: "open-food-live",
                    label: "Open Live Food Business",
                    action: "open-url",
                    url: "https://build-my-online-food-business.pages.dev/"
                },
                {
                    id: "food-ai-center-project",
                    label: "Explore More in AI Center",
                    action: "open-ai-center"
                },
                {
                    id: "food-human-project",
                    label: "Discuss a Food Business System",
                    action: "open-messenger"
                }
            ]
        },

        "project-mn": {
            id: "project-mn",

            message:
                "M&N Consumer Goods demonstrates a connected Admin OS and Store App direction with products, wholesale ordering, inventory, suppliers, purchase orders, receiving, invoices, payments, deliveries, returns, agents, and reports.",

            choices: [
                {
                    id: "open-mn-live",
                    label: "Open Live M&N Experience",
                    action: "open-url",
                    url: "https://mn-consumer-goods.buildframe-digitalsystem.workers.dev/"
                },
                {
                    id: "mn-ai-center",
                    label: "Explore More in AI Center",
                    action: "open-ai-center"
                },
                {
                    id: "mn-human",
                    label: "Discuss an Operations System",
                    action: "open-messenger"
                }
            ]
        },

        "project-tides": {
            id: "project-tides",

            message:
                "Tides of Hope demonstrates a nonprofit website and office-system direction with member access, profiles, directories, announcements, leadership publishing, galleries, gratitude content, and community spaces.",

            choices: [
                {
                    id: "open-tides-live",
                    label: "Open Live Tides of Hope",
                    action: "open-url",
                    url: "https://tides-of-hope-foundation.tinyteamstudio.workers.dev/"
                },
                {
                    id: "tides-ai-center",
                    label: "Explore More in AI Center",
                    action: "open-ai-center"
                },
                {
                    id: "tides-human",
                    label: "Discuss an Organization System",
                    action: "open-messenger"
                }
            ]
        },

        "project-one-leyte": {
            id: "project-one-leyte",

            message:
                "One Leyte demonstrates a public community experience with registration, MemberID direction, identification cards, QR-code possibilities, dashboards, and future community-engagement foundations.",

            choices: [
                {
                    id: "open-one-leyte-live",
                    label: "Open Live One Leyte",
                    action: "open-url",
                    url: "https://one-leyte-for-sara-duterte-region-viii.daniellemargarettedelacruz.workers.dev/"
                },
                {
                    id: "one-leyte-ai-center",
                    label: "Explore More in AI Center",
                    action: "open-ai-center"
                },
                {
                    id: "one-leyte-human",
                    label: "Discuss a Community System",
                    action: "open-messenger"
                }
            ]
        },

        "project-genealogy": {
            id: "project-genealogy",

            message:
                "TinyTeam Genealogy is an upcoming family-heirloom system direction for per-person genealogy mapping, expandable generations, printable and downloadable family-tree records, multiple layouts, and cloud or local-storage support. Private family data is never exposed.",

            choices: [
                {
                    id: "genealogy-ai-center",
                    label: "Explore the Concept in AI Center",
                    action: "open-ai-center"
                },
                {
                    id: "genealogy-human",
                    label: "Discuss a Genealogy Project",
                    action: "open-messenger"
                }
            ]
        },

        "login-access": {
            id: "login-access",

            message:
                "For login or account concerns, avoid sharing passwords or sensitive information in the chatbot. Confirm which BuildFrame platform you are using, then continue through human support.",

            choices: [
                {
                    id: "login-human",
                    label: "Open Human Support",
                    action: "open-messenger"
                },
                {
                    id: "login-back",
                    label: "Choose Another Concern",
                    nextStep: "technical-support"
                }
            ]
        },

        "page-not-working": {
            id: "page-not-working",

            message:
                "For a page issue, note the platform name, page name, device, browser, and what happened before the problem appeared. A screenshot is also helpful when continuing through human support.",

            choices: [
                {
                    id: "page-human",
                    label: "Send the Issue to Human Support",
                    action: "open-messenger"
                },
                {
                    id: "page-mobile",
                    label: "This Is a Mobile Issue",
                    nextStep: "mobile-device"
                }
            ]
        },

        "data-records": {
            id: "data-records",

            message:
                "Do not place private customer, member, payment, medical, legal, or family records inside this public support chatbot. Continue through human support and describe the issue without exposing sensitive data.",

            choices: [
                {
                    id: "data-human",
                    label: "Continue With Human Support",
                    action: "open-messenger"
                },
                {
                    id: "data-back",
                    label: "Choose Another Concern",
                    nextStep: "technical-support"
                }
            ]
        },

        "mobile-device": {
            id: "mobile-device",

            message:
                "For a mobile or tablet issue, note the device type, browser, screen orientation, page name, and whether the concern involves tapping, scrolling, layout, keyboard, or installation.",

            choices: [
                {
                    id: "mobile-human",
                    label: "Report the Device Issue",
                    action: "open-messenger"
                },
                {
                    id: "mobile-installation",
                    label: "It Is an Installation Issue",
                    nextStep: "installation"
                }
            ]
        },

        "installation": {
            id: "installation",

            message:
                "Installation behavior can vary by browser and device. Note whether you are using Android, iPhone, iPad, Windows, Chrome, Safari, or another browser before continuing through human support.",

            choices: [
                {
                    id: "installation-human",
                    label: "Get Human Installation Help",
                    action: "open-messenger"
                },
                {
                    id: "installation-back",
                    label: "Choose Another Concern",
                    nextStep: "technical-support"
                }
            ]
        },

        "human-handoff": {
            id: "human-handoff",

            message:
                "This needs a more specific conversation. You can continue with a real person on Facebook Messenger, or explore the AI Center first to see more BuildFrame possibilities.",

            choices: [
                {
                    id: "handoff-messenger",
                    label: "Chat With a Real Person",
                    action: "open-messenger"
                },
                {
                    id: "handoff-ai-center",
                    label: "Explore AI Center",
                    action: "open-ai-center"
                },
                {
                    id: "handoff-start",
                    label: "Start Again",
                    nextStep: "support-start"
                }
            ]
        }
    },

    commonSupportScenarios: [
        {
            scenario: "Visitor does not know what BuildFrame is",

            response:
                "BuildFrame is Chin’s journey-first software-building direction. Instead of starting with a generic template, it looks at how customers, owners, staff, members, learners, or administrators should move through an experience, then shapes the system around that journey."
        },
        {
            scenario: "Visitor only asks for a website",

            response:
                "A website can be the starting point, but BuildFrame also asks what it should grow into: a booking journey, ordering flow, client portal, dashboard, report center, member area, app-style workspace, or business operating system."
        },
        {
            scenario: "Visitor asks if a feature is already built",

            response:
                "Answer honestly. Clearly state whether the feature is completed, actively developed, an early foundation, upcoming, a future direction, or dependent on the specific project scope."
        },
        {
            scenario: "Visitor asks about AI",

            response:
                "Explain that BuildFrame AI is designed as journey-aware assistance rather than random chatbot decoration. It should understand the platform, user role, business, and current step before helping."
        },
        {
            scenario: "Visitor asks for proof",

            response:
                "Use the closest real proof door: Survey Platform, Food Business OS, M&N Consumer Goods, Tides of Hope, One Leyte, TinyTeam Genealogy, construction foundations, or the Professor Owl AI layer."
        },
        {
            scenario: "Visitor asks for pricing",

            response:
                "Do not invent prices. Explain that pricing depends on the journey, scope, modules, integrations, data structure, and future growth path."
        },
        {
            scenario: "Visitor is overwhelmed",

            response:
                "Slow down and offer one starting point: customer journey, owner workspace, admin system, client portal, business operations, or AI helper."
        }
    ],

    humanFollowUpTriggers: [
        "Pricing discussion",
        "Final project scope",
        "Sensitive data",
        "Passwords or login credentials",
        "Legal or compliance-heavy requirements",
        "Medical or regulated business workflows",
        "Financial decisions",
        "Custom integrations",
        "Private family genealogy data",
        "Client-specific records",
        "Contract or proposal approval",
        "Production technical support"
    ],

    safeClarifications: [
        "Which business journey should we explore first?",
        "Are you thinking about the customer side, owner side, admin side, or AI helper?",
        "Is this for a business, organization, community, academy, or private family project?",
        "Do you want to start simple or design it with room to grow?",
        "Which BuildFrame proof door feels closest to what you are imagining?"
    ],

    boundaries: [
        "Do not expose private project records.",
        "Do not request passwords or sensitive account information.",
        "Do not promise guaranteed business results.",
        "Do not claim future modules are already complete.",
        "Do not invent pricing.",
        "Do not provide legal, financial, or medical advice.",
        "Do not pretend AI replaces professional judgment.",
        "Keep Chin at the center of the BuildFrame story.",
        "Professor Owl represents the BuildFrame partnership but is not the founder.",
        "Keep the AI Center accessible as an optional deeper exploration destination.",
        "Keep Facebook Messenger available as the human assistance destination."
    ],

    getEntryStep: function () {
        return this.supportEntry;
    },

    getStep: function (stepId) {
        if (!stepId || stepId === "support-start") {
            return this.supportEntry;
        }

        return this.guidedConversations[stepId] || null;
    },

    getChoice: function (stepId, choiceId) {
        const step = this.getStep(stepId);

        if (!step || !Array.isArray(step.choices)) {
            return null;
        }

        return (
            step.choices.find(function (choice) {
                return choice.id === choiceId;
            }) || null
        );
    },

    resolveChoice: function (stepId, choiceId) {
        const choice = this.getChoice(stepId, choiceId);

        if (!choice) {
            return {
                type: "fallback",
                step: this.getFallbackStep()
            };
        }

        if (choice.nextStep) {
            return {
                type: "step",
                visitorMessage: choice.label,
                step: this.getStep(choice.nextStep)
            };
        }

        if (choice.action) {
            return {
                type: "action",
                visitorMessage: choice.label,
                action: choice.action,
                url: choice.url || null
            };
        }

        return {
            type: "fallback",
            visitorMessage: choice.label,
            step: this.getFallbackStep()
        };
    },

    getFallbackStep: function () {
        return {
            id: "support-fallback",

            message:
                "Let’s make this easier. Choose the closest starting point, or continue with a real person.",

            choices: [
                {
                    id: "fallback-system",
                    label: "Help Me Choose a System",
                    nextStep: "choose-system"
                },
                {
                    id: "fallback-business",
                    label: "Discuss My Business",
                    nextStep: "discuss-business"
                },
                {
                    id: "fallback-ai-center",
                    label: "Open AI Center",
                    action: "open-ai-center"
                },
                {
                    id: "fallback-human",
                    label: "Chat With a Real Person",
                    action: "open-messenger"
                }
            ]
        };
    },

    getActionUrl: function (action, basePath) {
        if (action === "open-messenger") {
            return this.facebookPageUrl;
        }

        if (action === "open-ai-center") {
            return String(basePath || "") + this.aiCenterPath;
        }

        return null;
    },

    partnerProfVoice:
        "Good support does not rush people. It helps them see the next clear step, gives them something useful immediately, and keeps deeper AI exploration or human assistance within reach.",

    fallbackSupportResponse:
        "Let’s make this easier. We can begin with your business type, customer journey, owner workspace, admin system, client portal, or AI helper.",

    callToImagine:
        "Where does your business need more clarity first: customers, operations, records, reports, or the journey itself?"
};