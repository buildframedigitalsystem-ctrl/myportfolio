/* =====================================================
   BUILDFRAME AI KNOWLEDGE
   File: ai/knowledge/client-portals.js
   Purpose: Partner Prof knowledge for Client Portals
===================================================== */

window.BuildFrameClientPortals = {
    id: "client-portals",
    name: "Client Portals",
    status: "Platform World / Configurable Direction",

    teaser:
        "A secure customer space where clients can stop chasing updates through scattered messages and instead follow the journey that matters to them.",

    experienceStory:
        "Imagine a customer logging in and seeing their bookings, orders, project updates, documents, approvals, payments, service status, learning progress, or communication history in one calm, organized place.",

    bestFor: [
        "Service businesses",
        "Contractors",
        "Food businesses",
        "Education providers",
        "Membership organizations",
        "Consultants",
        "Agencies",
        "Repair services",
        "Laundry and pickup businesses",
        "Nonprofits",
        "Operations-heavy businesses"
    ],

    possibleCapabilities: [
        "Customer login",
        "Client dashboard",
        "Booking history",
        "Order history",
        "Project updates",
        "Service-status tracking",
        "Payment records",
        "Invoices",
        "Documents",
        "Approvals",
        "Digital signatures",
        "Messages",
        "Notifications",
        "Learning progress",
        "Certificates",
        "Membership status",
        "Support requests",
        "Customer profile",
        "Secure access rules"
    ],

    journeyPossibilities: [
        {
            business: "Contractor",
            experience:
                "A client could view proposal status, approve changes, see milestone updates, check progress photos, and track payment schedules."
        },
        {
            business: "Laundry or Cleaning Service",
            experience:
                "A customer could track pickup, cleaning, delivery, payment, and repeat booking history."
        },
        {
            business: "Education or Academy",
            experience:
                "A learner could access lessons, live sessions, assignments, certificates, announcements, and learning progress."
        },
        {
            business: "Food Business",
            experience:
                "A customer could view orders, reorder favorites, check payment or delivery status, and receive updates."
        },
        {
            business: "Community or Nonprofit",
            experience:
                "Members could manage profiles, view announcements, join activities, and access role-based community spaces."
        }
    ],

    proofConnections: [
        "Survey Platform login and respondent/owner journeys",
        "Food Business OS owner workspace and customer order journey",
        "M&N Consumer Goods store app and admin operations",
        "Tides of Hope member login, profiles, directory, and office portal"
    ],

    buildFramePrinciple:
        "Experience First. A portal should not just be a login page. It should answer the client’s quiet question: Where am I in this journey, and what happens next?",

    partnerProfVoice:
        "A good portal makes people feel less lost. It tells them what happened, what is happening now, and what they may need to do next.",

    boundaries: [
        "Do not claim every portal type is already built for every platform.",
        "Use existing projects as proof of login, workspace, profile, order, and member-portal foundations.",
        "Do not expose private client or member data.",
        "Describe portals as configurable depending on the business journey."
    ],

    callToImagine:
        "What do your customers keep asking you for updates about — and what if they could simply open their own portal and see the answer?"
};