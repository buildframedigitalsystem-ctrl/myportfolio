/* =====================================================
   BUILDFRAME AI KNOWLEDGE
   File: ai/knowledge/mn-consumer-goods.js
   Purpose: Partner Prof knowledge for M&N Consumer Goods
===================================================== */

window.BuildFrameMNConsumerGoods = {
    id: "mn-consumer-goods",
    name: "M&N Consumer Goods Admin OS and Store App",
    status: "Built Business Operations Pet Project",

    teaser:
        "A consumer-goods operating system where wholesale ordering, products, inventory, suppliers, purchase orders, receiving, signatures, invoices, payments, deliveries, returns, agents, and reports begin working as one connected business journey.",

    publicDescription:
        "M&N Consumer Goods is a connected business ecosystem built around three distinct experiences: the M&N Admin OS for business control and operations, the M&N Store for customer-facing product discovery and ordering, and the M&N Store App for wholesale partners, stores, and resellers. Together, they show how products, inventory, suppliers, purchase orders, customer orders, signatures, invoices, payments, deliveries, returns, agents, and reports can move through one structured business journey.",

    experienceDoor:
        "A wholesale, retail, or distribution business can imagine customers placing orders through a store app, admins receiving those orders, inventory moving, invoices printing, payments updating, deliveries tracking, returns recording, agents reporting, and the owner seeing the business more clearly.",

    bestUsedAsEvidenceFor: [
        "M&N Admin OS",
        "M&N Store",
        "M&N Store App",
        "Connected business ecosystem",
        "Customer-facing shopping experience",
        "Wholesale partner ordering experience",
        "Business operations",
        "Customer-facing shopping experience",
        "Wholesale partner ordering experience",
        "Business operations",
        "Business operations",
        "Wholesale ordering",
        "Store app direction",
        "Admin operating system",
        "Product records",
        "Inventory tracking",
        "Supplier management",
        "Purchase orders",
        "Product receiving",
        "Order management",
        "Digital signatures",
        "Printable invoices",
        "Payments",
        "Deliveries",
        "Returns",
        "Agents and reseller tracking",
        "Reports and system health"
    ],

    possibleCapabilities: [
        "M&N Admin OS",
        "M&N Store",
        "M&N Store App",
        "Separate admin, customer, and wholesale experiences",
        "PWA and installable app direction",
        "Admin dashboard",
        "Customer-facing public store",
        "Wholesale partner store app",
        "Admin OS",
        "Separate Store App",
        "PWA direction",
        "Admin dashboard",
        "Public store direction",
        "Wholesale store direction",
        "Store setup direction",
        "Product control",
        "Product entry",
        "Product records",
        "Product categories",
        "Product category cards",
        "Product image direction",
        "Category image cards",
        "Dropdown product filters",
        "Wholesale-only pricing direction",
        "Pieces per box",
        "Box price",
        "Out of stock label",
        "Cart flow",
        "Cart local storage",
        "Quantity controls",
        "Subtotal calculation",
        "Total calculation",
        "Store order form",
        "Customer details",
        "Digital signature pad",
        "Submit store order",
        "OrderID generation",
        "InvoiceID generation",
        "Order records",
        "Order item records",
        "Admin orders table",
        "Payment status dropdown",
        "Delivery status dropdown",
        "Order status update direction",
        "Next step workflow direction",
        "View invoice modal",
        "Printable invoice",
        "Signature image on invoice",
        "Customer contact details on invoice",
        "Inventory records",
        "Inventory movements",
        "Stock deduction after order direction",
        "Supplier records",
        "Supplier products",
        "Purchase orders",
        "Printable purchase order",
        "Product receiving",
        "Stock-in movement",
        "Payments",
        "Payables",
        "Customer records",
        "Customer accounts direction",
        "Deliveries",
        "Returns",
        "Customer returns",
        "Supplier returns",
        "Agents",
        "Agent records",
        "Agent transactions",
        "Agent transaction type",
        "Store name per agent transaction",
        "Product quantity per transaction",
        "Unit price per transaction",
        "Total amount per transaction",
        "Reports log",
        "Migration log",
        "System health page",
        "Admin online status",
        "Store separated status",
        "Installable app direction",
        "Mobile and tablet direction"
    ],

    journeyPossibilities: [
        {
            step: "Display",
            description:
                "Products can be organized with categories, pricing, availability labels, and store-facing presentation."
        },
        {
            step: "Order",
            description:
                "A store or reseller can add items to cart, adjust quantities, review totals, complete an order form, and sign digitally."
        },
        {
            step: "Record",
            description:
                "Orders and order items are saved as structured records instead of disappearing into chat threads."
        },
        {
            step: "Invoice",
            description:
                "The admin can view and print invoices with customer details, totals, invoice IDs, and signature proof."
        },
        {
            step: "Update",
            description:
                "Payment and delivery statuses can be updated so the admin can follow what is unpaid, partial, paid, pending, preparing, delivered, returned, or cancelled."
        },
        {
            step: "Move Stock",
            description:
                "Inventory can be adjusted through receiving, stock-in movement, and order-related stock deductions."
        },
        {
            step: "Manage Suppliers",
            description:
                "The business can manage suppliers, supplier products, purchase orders, receiving, and payables."
        },
        {
            step: "Track Agents",
            description:
                "Agent and reseller activity can be recorded through transactions, product quantities, prices, stores, and totals."
        },
        {
            step: "Review",
            description:
                "Reports, logs, and system health views help the owner understand whether the admin and store sides are working properly."
        }
    ],

    tinyFeaturesThatMatter: [
        "Cart quantity controls make ordering feel easier for the customer.",
        "Subtotal and total calculations reduce manual pricing mistakes.",
        "A digital signature pad turns an order into a stronger confirmation record.",
        "Order IDs and invoice IDs make business records easier to trace.",
        "Printable invoices help the digital system support real-world delivery and payment processes.",
        "Payment status dropdowns help admins know who still needs follow-up.",
        "Delivery status dropdowns help the business track fulfillment.",
        "Out of stock labels prevent customers from expecting unavailable products.",
        "Inventory movements show not only what stock exists, but how it changed.",
        "Purchase orders and receiving connect supplier activity to actual stock.",
        "Agent transactions help the owner understand field or reseller activity.",
        "System health gives confidence that the separated admin and store structure is working."
    ],

    proofConnection:
        "M&N Consumer Goods is one of BuildFrame’s strongest proofs that Chin can build beyond a website — into real operating-system structure with store flows, admin tools, inventory logic, order records, invoices, signatures, supplier workflows, agents, and reports.",

    buildFrameLesson:
        "A business operation becomes easier to control when products, orders, stock, suppliers, invoices, payments, deliveries, returns, agents, and reports stop living in separate places.",

    boundaries: [
        "Do not claim every advanced ERP feature is complete.",
        "Use M&N Consumer Goods as strong evidence of business operations and admin/store separation.",
        "Do not expose private client data.",
        "Do not overclaim future modules such as full agent login, advanced notifications, or complete analytics if they are not yet finalized.",
        "Describe completed pieces as proof and unfinished directions as growth paths.",
        "Translate operations features into owner, admin, customer, supplier, and agent journeys whenever possible."
    ],

    partnerProfVoice:
        "M&N Consumer Goods proves that operations can become a system. Products, orders, signatures, invoices, inventory, suppliers, returns, agents, and reports are not just admin tasks — together, they become the control room of the business.",

    callToImagine:
        "What would change if your products, orders, stock, suppliers, invoices, payments, deliveries, returns, and reports finally worked from one organized business control room?"
};