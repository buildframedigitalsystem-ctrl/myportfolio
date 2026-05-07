/* =========================
   MOBILE MENU
========================= */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("show");
    });

    mainNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("show");
        });
    });
}

/* =========================
   SAFE HTML CLEANER
========================= */
function escapeHtml_(text) {
    return String(text || "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

/* =========================
   SYSTEM EXPERIENCE DATA
========================= */
const systemData = {
    platform: {
        title: "Platform Building",
        text: `
        <strong>What it is:</strong><br>
        A platform connects your website, forms, data, users, and workflows into one system.<br><br>

        <strong>How it helps:</strong><br>
        It organizes your entire business into one place so everything becomes easier to manage.<br><br>

        <strong>Without this:</strong><br>
        Your business depends on scattered tools, chats, and manual tracking.
        `
    },

    software: {
        title: "Software",
        text: `
        <strong>What it is:</strong><br>
        A custom-built system designed specifically for your business process.<br><br>

        <strong>How it helps:</strong><br>
        It allows you to operate based on your own workflow instead of adjusting to generic tools.<br><br>

        <strong>Without this:</strong><br>
        You are forced to use tools that do not fully fit your operations.
        `
    },

    crm: {
        title: "CRM",
        text: `
        <strong>What it is:</strong><br>
        A system that manages customers, leads, messages, and follow-ups.<br><br>

        <strong>How it helps:</strong><br>
        Ensures every inquiry is tracked and every customer is handled properly.<br><br>

        <strong>Without this:</strong><br>
        You miss follow-ups and lose potential clients.
        `
    },

    automation: {
        title: "Automation",
        text: `
        <strong>What it is:</strong><br>
        A system that automatically sends messages, reminders, and follow-ups.<br><br>

        <strong>How it helps:</strong><br>
        Saves time and keeps your business running even when you are busy.<br><br>

        <strong>Without this:</strong><br>
        You repeat tasks manually and slow down your operations.
        `
    },

    booking: {
        title: "Booking System",
        text: `
        <strong>What it is:</strong><br>
        A system where customers can choose schedules and submit bookings.<br><br>

        <strong>How it helps:</strong><br>
        Removes back-and-forth messages and organizes appointments clearly.<br><br>

        <strong>Without this:</strong><br>
        Scheduling becomes messy and confusing.
        `
    },

    leads: {
        title: "Leads System",
        text: `
        <strong>What it is:</strong><br>
        Captures customer inquiries from forms, ads, and messages.<br><br>

        <strong>How it helps:</strong><br>
        Keeps all interested customers organized and ready for follow-up.<br><br>

        <strong>Without this:</strong><br>
        You lose potential customers without realizing it.
        `
    },

    tracking: {
        title: "Tracking",
        text: `
        <strong>What it is:</strong><br>
        A system that monitors orders, bookings, payments, and performance.<br><br>

        <strong>How it helps:</strong><br>
        Gives you visibility to make better business decisions.<br><br>

        <strong>Without this:</strong><br>
        You operate blindly without real data.
        `
    },

    inventory: {
        title: "Inventory System",
        text: `
        <strong>What it is:</strong><br>
        Tracks your products, stock levels, and availability.<br><br>

        <strong>How it helps:</strong><br>
        Prevents shortages, over-selling, and confusion.<br><br>

        <strong>Without this:</strong><br>
        Stock issues and errors happen frequently.
        `
    },

    payments: {
        title: "Payments",
        text: `
        <strong>What it is:</strong><br>
        Manages transactions, payment methods, and records.<br><br>

        <strong>How it helps:</strong><br>
        Ensures all payments are tracked properly.<br><br>

        <strong>Without this:</strong><br>
        You risk missing or misrecording payments.
        `
    },

    content: {
        title: "Content System",
        text: `
        <strong>What it is:</strong><br>
        Organizes posts, updates, and campaigns.<br><br>

        <strong>How it helps:</strong><br>
        Keeps your communication consistent and planned.<br><br>

        <strong>Without this:</strong><br>
        Your content becomes random and ineffective.
        `
    },

    funnels: {
        title: "Funnels",
        text: `
        <strong>What it is:</strong><br>
        A guided flow that leads visitors into action.<br><br>

        <strong>How it helps:</strong><br>
        Converts visitors into inquiries, bookings, or buyers.<br><br>

        <strong>Without this:</strong><br>
        Visitors leave without taking action.
        `
    },

    website: {
        title: "Website",
        text: `
        <strong>What it is:</strong><br>
        Your online presence where customers learn about your business.<br><br>

        <strong>How it helps:</strong><br>
        Builds trust and credibility.<br><br>

        <strong>Without this:</strong><br>
        Customers may not take your business seriously.
        `
    },

    marketing: {
        title: "Marketing System",
        text: `
        <strong>What it is:</strong><br>
        A system that helps promote your business consistently.<br><br>

        <strong>How it helps:</strong><br>
        Attracts more customers and increases visibility.<br><br>

        <strong>Without this:</strong><br>
        Your business stays unnoticed.
        `
    }
};

/* =========================
   SYSTEM TAB INTERACTION
========================= */
const systemTabs = document.querySelectorAll(".system-tab");
const systemContent = document.getElementById("systemContent");

if (systemTabs.length && systemContent) {
    systemTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            systemTabs.forEach(btn => btn.classList.remove("active"));
            tab.classList.add("active");

            const key = tab.dataset.system;
            const data = systemData[key];

            if (!data) return;

            systemContent.innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.text}</p>
            `;
        });
    });
}

/* =========================
   DEMO POPUP SYSTEM
========================= */
const demoData = {
    mn: {
        title: "M&N Consumer Goods Platform",
        description: "Ongoing system for retail and wholesale operations.",
        features: [
            "Product catalog",
            "Order system",
            "Customer records",
            "Inventory tracking",
            "Sales dashboard",
            "Admin backend"
        ],
        link: "#"
    },

    businessos: {
        title: "BuildFrame Business OS",
        description: "A modular business operating system for stores, services, bookings, CRM, inventory, sales, and backend management.",
        features: [
            "Website structure",
            "Funnel flow",
            "Client dashboard",
            "Admin workspace",
            "Orders and bookings",
            "CRM and follow-ups",
            "Inventory and reports"
        ],
        link: "#"
    }
};

document.addEventListener("click", function (e) {
    const btn = e.target.closest(".demo-btn");
    if (!btn) return;

    const key = btn.dataset.demo;
    const data = demoData[key];

    if (!data) return;

    const modal = document.getElementById("demoModal");
    const label = document.getElementById("demoLabel");
    const title = document.getElementById("demoTitle");
    const description = document.getElementById("demoDescription");
    const features = document.getElementById("demoFeatures");
    const liveLink = document.getElementById("demoLiveLink");

    if (!modal || !title || !description || !features) {
        alert(
            data.title + "\n\n" +
            data.description + "\n\nFeatures:\n- " +
            data.features.join("\n- ")
        );
        return;
    }

    if (label) label.textContent = "System Preview";
    title.textContent = data.title;
    description.textContent = data.description;

    features.innerHTML = data.features
        .map(feature => `<li>${escapeHtml_(feature)}</li>`)
        .join("");

    if (liveLink) {
        liveLink.href = data.link || "#";
        liveLink.style.display = data.link && data.link !== "#" ? "inline-flex" : "none";
    }

    modal.classList.add("show");
});

/* =========================
   CLOSE DEMO MODAL
========================= */
const demoModal = document.getElementById("demoModal");
const demoClose = document.getElementById("demoClose");

if (demoClose && demoModal) {
    demoClose.addEventListener("click", () => {
        demoModal.classList.remove("show");
    });
}

window.addEventListener("click", (e) => {
    if (e.target === demoModal) {
        demoModal.classList.remove("show");
    }
});

/* =========================
   BUSINESS ASSESSMENT LOGIC
========================= */
const analyzeBtn = document.getElementById("analyzeBtn");

const assessmentRecommendations = {
    leads: {
        title: "Funnel + CRM Support",
        reason: "Because your inquiries need to be captured, organized, and followed up properly so potential customers are not missed."
    },
    booking: {
        title: "Booking System",
        reason: "Because manual booking through chat can become confusing. A booking system helps organize schedules, customer details, and confirmations."
    },
    inventory: {
        title: "Inventory / Order Tracking System",
        reason: "Because product and order tracking becomes easier when stock, customer orders, and sales activity are organized in one place."
    },
    website: {
        title: "Professional Website",
        reason: "Because your business needs a clear online presence that builds trust and explains what you offer."
    },
    clarity: {
        title: "Service Funnel / Clear Offer Page",
        reason: "Because customers need to understand your services quickly before they decide to inquire, book, or buy."
    },
    tracking: {
        title: "Business Dashboard",
        reason: "Because a dashboard helps you see leads, bookings, orders, payments, and performance instead of guessing what is happening."
    },
    automation: {
        title: "Automation System",
        reason: "Because repeated manual tasks can be handled through reminders, confirmations, follow-ups, and status updates."
    },
    tools: {
        title: "Full Business Platform",
        reason: "Because using too many separate tools can make your process scattered. A platform connects your important workflows into one place."
    }
};

if (analyzeBtn) {
    analyzeBtn.addEventListener("click", () => {
        const checked = document.querySelectorAll(".assessment-options input:checked");
        const resultBox = document.getElementById("assessmentResult");

        if (!resultBox) return;

        if (checked.length === 0) {
            resultBox.innerHTML = `
                <h3>Let’s start with your current business setup.</h3>
                <p>Please select at least one option so we can understand what your business needs.</p>
            `;
            return;
        }

        let resultsMap = {};

        checked.forEach(item => {
            const data = assessmentRecommendations[item.value];

            if (data && !resultsMap[data.title]) {
                resultsMap[data.title] = data;
            }
        });

        const results = Object.values(resultsMap);

        resultBox.innerHTML = `
            <h3>Suggested Direction for Your Business</h3>

            <p>
                Based on your answers, here are the systems that can help improve how your business operates,
                reduce manual work, and make everything easier to manage.
            </p>

            <div class="recommendation-list">
                ${results.map(item => `
                    <div class="recommendation-card">
                        <strong>${escapeHtml_(item.title)}</strong>
                        <span>${escapeHtml_(item.reason)}</span>
                    </div>
                `).join("")}
            </div>

            <p class="recommendation-note">
                These suggestions are based on the challenges you selected.
                They are not fixed packages — just a clear direction on what can help your business grow.
            </p>

            <div class="assessment-next">
                <h4>What you can do next</h4>

                <p>
                    If you want help turning this into a working system for your business,
                    I can guide you step by step — no pressure, just clarity.
                </p>

                <div class="assessment-actions">
                    <a href="https://www.facebook.com/profile.php?id=61573627290922" target="_blank" rel="noopener noreferrer" class="btn primary">
                        Message on Facebook
                    </a>

                    <a href="mailto:buildframe.digitalsystem@gmail.com" class="btn outline">
                        Send Email
                    </a>

                    <a href="https://wa.me/639760110243" target="_blank" rel="noopener noreferrer" class="btn outline">
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        `;
    });
}
