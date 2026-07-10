/* =====================================================
   BUILDFRAME AI CENTER
   File: ai/ai-va.js

   Purpose:
   Partner Prof AI VA direction and specialized
   AI assistant role library.
===================================================== */

window.BuildFrameAIVA = {
    id: "buildframe-ai-va",
    name: "BuildFrame AI VA System",
    version: "1.0.0",

    teaser:
        "BuildFrame AI VAs are not random bots. They are imagined as specialized helpers shaped around real business journeys — customer inquiries, bookings, orders, reports, onboarding, learning, projects, and operations.",

    principle:
        "AI should support the right journey, not pretend to replace every human decision.",

    vaTypes: [
        {
            id: "customer-inquiry-va",
            name: "Customer Inquiry AI VA",
            purpose:
                "Helps visitors understand services, products, programs, or available journeys before they contact the business.",
            bestFor: [
                "Service businesses",
                "Food businesses",
                "Contractors",
                "Schools",
                "Nonprofits",
                "Custom systems"
            ]
        },
        {
            id: "booking-va",
            name: "Booking AI VA",
            purpose:
                "Guides customers through appointment, consultation, pickup, delivery, class, event, or site-visit inquiries.",
            bestFor: [
                "Salons",
                "Laundry shops",
                "Consultants",
                "Tutors",
                "Contractors",
                "Training centers",
                "Clinics where appropriate"
            ]
        },
        {
            id: "order-support-va",
            name: "Order Support AI VA",
            purpose:
                "Helps customers understand order status, checkout steps, delivery direction, payment reminders, and common order questions.",
            bestFor: [
                "Food Business OS",
                "M&N Store",
                "M&N Store App",
                "Wholesale businesses",
                "Retail stores"
            ]
        },
        {
            id: "onboarding-va",
            name: "Onboarding AI VA",
            purpose:
                "Guides owners, staff, members, learners, or customers through setup one step at a time.",
            bestFor: [
                "Food Business OS",
                "Survey Platform App",
                "Education & Academy",
                "Client portals",
                "Custom systems"
            ]
        },
        {
            id: "report-explainer-va",
            name: "Report Explainer AI VA",
            purpose:
                "Helps owners understand charts, analytics, survey results, sales reports, inventory movement, or operational summaries.",
            bestFor: [
                "Survey Platform App",
                "Business Operations",
                "M&N Consumer Goods",
                "Food Business OS",
                "Custom dashboards"
            ]
        },
        {
            id: "learning-guide-va",
            name: "Learning Guide AI VA",
            purpose:
                "Supports learners, trainees, members, or users as they move through lessons, tutorials, certificates, and learning dashboards.",
            bestFor: [
                "Education & Academy",
                "BuildFrame Academy",
                "Survey learning center",
                "Corporate training",
                "Tutorial centers"
            ]
        },
        {
            id: "construction-inquiry-va",
            name: "Construction Inquiry AI VA",
            purpose:
                "Helps clients describe projects, upload context, understand estimate steps, request site visits, and follow proposal direction.",
            bestFor: [
                "Contractors",
                "Renovation businesses",
                "Glass and aluminum",
                "Woodworks",
                "Metal fabrication",
                "Plumbing",
                "Electrical",
                "Roofing",
                "Construction suppliers"
            ]
        },
        {
            id: "community-member-va",
            name: "Community Member AI VA",
            purpose:
                "Helps members understand registration, profiles, IDs, announcements, events, directories, and community spaces.",
            bestFor: [
                "Tides of Hope",
                "One Leyte",
                "Membership groups",
                "Nonprofits",
                "Community organizations"
            ]
        },
        {
            id: "genealogy-guide-va",
            name: "Genealogy Guide AI VA",
            purpose:
                "Guides users through family records, generation mapping, printable layouts, and heirloom-style family-history organization.",
            bestFor: [
                "TinyTeam Genealogy",
                "Family history projects",
                "Heirloom archives"
            ]
        }
    ],

    humanHandoffRules: [
        "Use AI for guidance, explanation, intake, organization, and support.",
        "Use humans for final approvals, sensitive issues, complex judgment, financial decisions, professional advice, and relationship-heavy situations.",
        "Never pretend AI can replace expertise where expertise is required.",
        "Never promise fully automated decisions when human review is appropriate."
    ],

    partnerProfVoice:
        "A good AI VA should feel like a helpful teammate with a clear role. Not a loud robot. Not a magic button. A teammate that knows where it belongs in the journey.",

    callToImagine:
        "If your business had one AI helper with a clear job, where would you want it to help first?"
};