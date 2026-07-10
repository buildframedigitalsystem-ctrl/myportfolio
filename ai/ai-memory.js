/* =====================================================
   BUILDFRAME AI CENTER
   File: ai/ai-memory.js

   Purpose:
   Lightweight visitor-session memory for Partner Prof.
   This is not permanent private memory.

   It helps Partner Prof remember during one portfolio visit:
   - visitor's business type
   - selected platform world
   - current interest
   - proof door explored
   - last route used
   - conversation highlights
===================================================== */

window.BuildFrameAIMemory = {
    id: "buildframe-ai-memory",
    name: "Partner Prof Session Memory",
    version: "1.0.0",

    storageKey: "buildframe_partner_prof_session",

    defaultState: {
        visitorName: "",
        businessType: "",
        currentInterest: "",
        selectedWorld: "",
        selectedProofDoor: "",
        lastRouteId: "",
        lastRouteLabel: "",
        conversationHighlights: [],
        updatedAt: ""
    },

    getTimestamp: function () {
        return new Date().toISOString();
    },

    cloneDefaultState: function () {
        return JSON.parse(JSON.stringify(this.defaultState));
    },

    load: function () {
        try {
            const saved = localStorage.getItem(this.storageKey);

            if (!saved) {
                return this.cloneDefaultState();
            }

            const parsed = JSON.parse(saved);

            return {
                ...this.cloneDefaultState(),
                ...parsed
            };
        } catch (error) {
            console.warn("Partner Prof memory load failed:", error);
            return this.cloneDefaultState();
        }
    },

    save: function (state) {
        try {
            const nextState = {
                ...this.cloneDefaultState(),
                ...(state || {}),
                updatedAt: this.getTimestamp()
            };

            localStorage.setItem(this.storageKey, JSON.stringify(nextState));

            return nextState;
        } catch (error) {
            console.warn("Partner Prof memory save failed:", error);
            return state || this.cloneDefaultState();
        }
    },

    clear: function () {
        try {
            localStorage.removeItem(this.storageKey);
        } catch (error) {
            console.warn("Partner Prof memory clear failed:", error);
        }

        return this.cloneDefaultState();
    },

    update: function (updates) {
        const current = this.load();

        return this.save({
            ...current,
            ...(updates || {})
        });
    },

    rememberRoute: function (routeResult) {
        if (!routeResult || !routeResult.route) {
            return this.load();
        }

        return this.update({
            selectedWorld: routeResult.route.id || "",
            lastRouteId: routeResult.route.id || "",
            lastRouteLabel: routeResult.route.label || ""
        });
    },

    rememberBusinessType: function (businessType) {
        return this.update({
            businessType: businessType || ""
        });
    },

    rememberInterest: function (interest) {
        return this.update({
            currentInterest: interest || ""
        });
    },

    rememberProofDoor: function (proofDoor) {
        return this.update({
            selectedProofDoor: proofDoor || ""
        });
    },

    addHighlight: function (highlight) {
        if (!highlight) {
            return this.load();
        }

        const current = this.load();
        const highlights = Array.isArray(current.conversationHighlights)
            ? current.conversationHighlights.slice()
            : [];

        highlights.push({
            text: String(highlight),
            time: this.getTimestamp()
        });

        const trimmedHighlights = highlights.slice(-8);

        return this.save({
            ...current,
            conversationHighlights: trimmedHighlights
        });
    },

    detectBusinessHints: function (message) {
        const text = String(message || "").toLowerCase();

        const hints = [
            { keyword: "restaurant", businessType: "Restaurant or food business" },
            { keyword: "cafe", businessType: "Café or food business" },
            { keyword: "bakery", businessType: "Bakery or food business" },
            { keyword: "food", businessType: "Food business" },
            { keyword: "laundry", businessType: "Laundry or service business" },
            { keyword: "salon", businessType: "Salon or service business" },
            { keyword: "spa", businessType: "Spa or wellness business" },
            { keyword: "contractor", businessType: "Contractor or construction business" },
            { keyword: "construction", businessType: "Construction business" },
            { keyword: "school", businessType: "School or education provider" },
            { keyword: "academy", businessType: "Academy or learning business" },
            { keyword: "tutorial", businessType: "Tutorial or education provider" },
            { keyword: "training", businessType: "Training provider" },
            { keyword: "nonprofit", businessType: "Nonprofit or community organization" },
            { keyword: "foundation", businessType: "Foundation or organization" },
            { keyword: "store", businessType: "Store or retail business" },
            { keyword: "wholesale", businessType: "Wholesale or distribution business" },
            { keyword: "inventory", businessType: "Inventory-heavy business" },
            { keyword: "genealogy", businessType: "Family history or genealogy project" }
        ];

        return hints.find((item) => text.includes(item.keyword)) || null;
    },

    observeMessage: function (message, routeResult) {
        const updates = {};

        if (routeResult && routeResult.route) {
            updates.selectedWorld = routeResult.route.id || "";
            updates.lastRouteId = routeResult.route.id || "";
            updates.lastRouteLabel = routeResult.route.label || "";
        }

        const businessHint = this.detectBusinessHints(message);

        if (businessHint) {
            updates.businessType = businessHint.businessType;
        }

        const updated = this.update(updates);

        this.addHighlight(message);

        return updated;
    },

    getConversationSummary: function () {
        const state = this.load();

        return {
            visitorName: state.visitorName,
            businessType: state.businessType,
            currentInterest: state.currentInterest,
            selectedWorld: state.selectedWorld,
            selectedProofDoor: state.selectedProofDoor,
            lastRouteId: state.lastRouteId,
            lastRouteLabel: state.lastRouteLabel,
            highlights: state.conversationHighlights || []
        };
    }
};