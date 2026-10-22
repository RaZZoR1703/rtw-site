import type { Messages } from "@/i18n/messages";

export const en: Messages = {
  meta: {
    title: "RTW — wholesale starch and syrup in Tashkent",
    template: "%s — RTW",
    description:
      "Wholesale starch, molasses, syrups and technical chemicals from a warehouse in Tashkent. Raw materials from plants in Kazakhstan, Russia and Poland. Free delivery across the city.",
    siteName: "RTW — Right to Win",
    ogAlt: "RTW — wholesale starch and syrup from a Tashkent warehouse",
    ogLines: ["Starch and syrup", "wholesale"],
    ogSub: "Tashkent warehouse · free delivery across the city",
  },
  common: {
    currency: "UZS",
    perKg: "UZS/kg",
    perKgSpaced: "UZS / kg",
    kg: "kg",
    inStock: "In stock",
    inStockLong: "In stock at the warehouse",
    freeConsultation: "free consultation",
    leaveRequest: "Send a request",
    callMe: "Call me back",
    home: "Home",
    breadcrumbs: "Breadcrumbs",
    skipToContent: "Skip to content",
    menu: "Menu",
    openMenu: "Open menu",
    mainMenu: "Main menu",
    language: "Language",
    cart: "Cart",
    cartWithCount: (n) => `Cart, ${n} ${n === 1 ? "item" : "items"}`,
    callTo: (phone) => `Call ${phone}`,
    illustration: "Illustration",
    origin: "Made in",
    minBatch: "Min. order",
    toCart: "Add to cart",
    goToCart: "Go to cart",
    clarify: "Ask us",
    addToCart: (name) => `Add “${name}” to cart`,
    addedToCart: (name, kg) => `${name}: ${kg} kg added to cart`,
    goods: (n) => `${n} ${n === 1 ? "product" : "products"}`,
    toHomeAria: "RTW — home",
  },
  nav: {
    "/": "Home",
    "/catalog": "Catalog",
    "/delivery": "Payment & delivery",
    "/gallery": "Gallery",
    "/news": "News",
    "/contacts": "Contacts",
  },
  header: {
    topLeft: "Tashkent warehouse · free city delivery from 200 kg",
    topRight: "RIGHT TO WIN LLC · wholesale across Uzbekistan",
    logoLine1: "Right to Win",
    logoLine2: "wholesale starch and syrup",
  },
  footer: {
    about:
      "Wholesale starch and molasses — raw materials for the food, confectionery, pharmaceutical and paper industries.",
    sections: "Sections",
    products: "Products",
    contacts: "Contacts",
    copyright: (company) => `© ${company}, since 2015`,
    warehouse: "Warehouse in Keles, Tashkent region",
  },
  form: {
    name: "Name",
    phone: "Phone",
    need: "What do you need",
    needPlaceholder: "For example: corn starch, 2 tonnes a month",
    submit: "Get the price list",
    sending: "Sending…",
    consent:
      "By pressing the button you agree to the processing of your contact details.",
    errorPhone: "Enter the full number, for example 99 392 23 05",
    errorSend: (phone) => `Could not send. Please call us: ${phone}`,
    success:
      "Request received. A manager will call you back during business hours.",
    dialogTitle: "We’ll call you back",
    dialogProduct: (name) =>
      `About “${name}”: we’ll confirm the price, batch and timing.`,
    dialogGeneric:
      "We’ll match products to your needs and send current prices.",
  },
  hero: {
    words: ["Starch", "and syrup", "wholesale"],
    lead: "Raw materials from plants in Kazakhstan, Russia and Poland for confectioners, meat processors, textile and paper mills. We ship from stock and deliver free across Tashkent.",
    cta: "Catalog & prices",
    stats: ["in business since", "regular clients", "producer countries"],
  },
  home: {
    priceBand: "Wholesale warehouse prices, UZS per 1 kg",
    directionsTitle: "Three product lines, one supplier",
    directionsLead:
      "Starch, molasses and technical chemicals in one warehouse: we assemble mixed batches and deliver them in one truck.",
    industriesTitle: ["Raw materials for ", "six", " industries"],
    industriesLead:
      "Our regular clients include more than 300 companies across Uzbekistan. We know what each industry buys and keep it in stock.",
    stockTitle: "Everything in stock right now",
    stockLead:
      "Wholesale prices per kilogram. Individual terms for large batches and regular clients.",
    allCatalog: "Full catalog",
    aboutTitle:
      "Supplying Uzbekistan’s producers with raw materials since 2015",
    aboutLead:
      "RIGHT TO WIN LLC specialises in supplying local producers and consumers with top-grade starch and molasses products.",
    makers: "Producer plants",
    faqTitle: "Terms in brief",
    faqLead: "Didn’t find an answer? Call us and we’ll answer right away:",
    leadTitle: "We’ll price your batch with delivery",
    leadLead:
      "Leave your phone number and a manager will call back, match products to your needs and send current prices.",
  },
  catalog: {
    metaTitle: "Product catalog",
    metaDescription:
      "Starch, molasses and syrups, technical chemicals — wholesale prices per kilogram, in stock at our Tashkent warehouse.",
    title: "Product catalog",
    lead: "Starch, molasses and syrups, technical chemicals — wholesale prices per kilogram, in stock at our Tashkent warehouse.",
    allGoods: "All products",
    categories: "Categories",
    pricesPerKg: "prices per 1 kg",
    leadTitle: "Can’t find the product or volume you need?",
    leadLead:
      "Tell us what your production needs — we’ll pick a product from stock or bring in a batch to order.",
    leadSubmit: "Call me back",
  },
  product: {
    article: "SKU",
    packaging: "Packaging",
    wholesale: (min) => `Wholesale price · minimum order: ${min}`,
    factStock: "In stock at our Tashkent warehouse",
    factStockText: "We ship without waiting for supply",
    factDeliveryDefault: "Free delivery in Tashkent",
    factDeliveryText: "Delivery at a time that suits you",
    factPay: "Payment",
    factPayText: "Bank transfer, UzCard terminal, cash",
    specs: "Specifications",
    description: "Description",
    moreInNews: "More on applications — in the news",
    others: "Other products",
    leadTitle: "Need a batch for your production?",
    leadLead: (name) =>
      `Tell us the volume and we’ll price “${name}” with delivery and payment terms.`,
    leadSubmit: "Price my batch",
    metaDescription: (lead, price) =>
      `${lead} Wholesale price ${price} UZS/kg, Tashkent warehouse.`,
    batchVolume: "Batch volume, kg",
    batchLess: (step) => `${step} kg less`,
    batchMore: (step) => `${step} kg more`,
    batchMin: (min) => `Minimum batch is ${min} kg; you can’t order less.`,
    batchSum: "Total",
    batchAsk:
      "A manager will confirm the minimum batch and packaging for this product and price it with delivery.",
    batchAskButton: "Price my batch",
    getPrice: "Get the price list",
  },
  cart: {
    title: "Cart",
    loading: "Loading cart…",
    empty:
      "Your cart is empty. Pick products in the catalog and we’ll price the batch and delivery in one request.",
    toCatalog: "Go to catalog",
    lineMeta: (price, min) => `${price} UZS/kg · min. ${min} kg`,
    volume: "Volume, kg",
    remove: (name) => `Remove “${name}”`,
    removeShort: "Remove",
    clear: "Clear cart",
    total: "Total at wholesale prices",
    totalNote:
      "A manager will confirm stock and send an invoice. Delivery in Tashkent is free from 200 kg.",
    submit: "Send request",
  },
  delivery: {
    metaTitle: "Payment & delivery",
    metaDescription:
      "Bank transfer, UzCard or cash. Free delivery in Tashkent from 200 kg, shipments to the regions, pickup in Keles.",
    title: "Payment & delivery",
    lead: "We work with companies and entrepreneurs across Uzbekistan. Goods are in stock at our Tashkent warehouse.",
    payTitle: "Payment methods",
    payLead:
      "Choose what suits you — companies get an invoice for bank transfer.",
    deliveryTitle: "We bring raw materials where they’re needed",
    forkliftAlt: "Forklift between pallet racks in a warehouse",
    stepsTitle: "Four steps to delivery",
    leadTitle: "We’ll price delivery for your batch",
    leadLead:
      "Tell us the volume and address — we’ll say when we’ll deliver and what it will cost.",
    leadSubmit: "Get a quote",
  },
  gallery: {
    metaTitle: "Photo gallery",
    metaDescription:
      "What the starch, molasses, syrups and borax we supply look like.",
    title: "Photo gallery",
    lead: "The products we supply: what starch, molasses, syrups and borax look like. Illustrations of the product type, not photos of a specific batch.",
    prev: "Previous photo",
    next: "Next photo",
    leadTitle: "Need these products?",
    leadLead: "We’ll quote your volume and price the delivery.",
    leadSubmit: "Get a price",
  },
  news: {
    metaTitle: "News",
    metaDescription: "New arrivals, product applications and supply terms.",
    title: "News",
    lead: "New arrivals, product applications and supply terms.",
    read: "Read",
    all: "All news",
    productFrom: "Product from the article",
    leadTitle: "Need this product for your production?",
    leadLead:
      "We’ll call back, confirm availability and send the wholesale price.",
    leadSubmit: "Call me back",
  },
  contacts: {
    metaTitle: "Contacts",
    metaDescription: (address) =>
      `RTW phones, e-mail and warehouse address: ${address}.`,
    title: "Contacts",
    lead: "Call or send a request — we’ll match products, price the batch and delivery.",
    phones: "Phones",
    email: "E-mail",
    address: "Warehouse and office",
    mapTitle: "RTW warehouse on the map",
    formTitle: "Send a request",
    formLead: "Send your contacts and get current prices.",
    formSubmit: "Send request",
  },
  notFound: {
    title: "This page doesn’t exist — but the goods are in stock",
    lead: "The link may be outdated. Check the catalog or call us:",
    catalog: "Catalog & prices",
    home: "Home page",
  },
  company: {
    name: "RIGHT TO WIN LLC",
    address: "68 Okibat St, Keles, Zangiota district, Tashkent region",
  },
  data: {
    categories: {
      starch: {
        name: "Starch",
        description:
          "Top-grade potato and corn starch for food and technical production.",
        industries: "Confectionery, meat, textile and paper industries",
      },
      syrup: {
        name: "Molasses & syrups",
        description:
          "Caramel and acid molasses, glucose-fructose syrup for confectioners and beverages.",
        industries: "Confectionery and bakery production, beverages",
      },
      chem: {
        name: "Chemicals",
        description:
          "Borax and caustic soda for the glass, detergent and chemical industries.",
        industries: "Glass, detergent and chemical industries",
      },
    },
    products: {
      corn: {
        name: "Corn starch (top grade)",
        shortName: "Corn starch",
        grade: "top grade",
        origin: "Kazakhstan",
        minLabel: "from 100 kg",
        freeDelivery: "Free delivery in Tashkent for orders from 200 kg",
        lead: "A free-flowing white powder that swells well in cold water and stays chemically stable.",
        blocks: [
          {
            paragraphs: [
              "Corn starch is a free-flowing white powder. It swells readily in cold water and shows no chemical changes.",
              "It is made from cleaned corn kernels by wet milling into a uniform milky-white powder.",
              "It is used in canning and paper production, textile and other industries, and in pharmaceuticals.",
            ],
          },
        ],
      },
      potato: {
        name: "Potato starch (top grade)",
        shortName: "Potato starch",
        grade: "top grade",
        origin: "Poland (PEPEES)",
        minLabel: "from 1,000 kg",
        packaging: "Strong 25 kg kraft paper sacks",
        freeDelivery: "Free delivery in Tashkent for orders from 200 kg",
        lead: "Potato starch from the Polish brand PEPEES, compliant with GOST requirements.",
        blocks: [
          {
            paragraphs: [
              "A white powder made from fresh potatoes. The starch is obtained by mechanically separating starch granules, then washing, cleaning, drying and sieving them.",
            ],
          },
          {
            title: "Industrial applications",
            list: [
              "Food: thickener for meat products, sauces, soups, puddings, kissel and ketchup; improves bread structure; additive for confectionery.",
              "Textile: yarn sizing, starching, dyeing, satinising, printing, finishing.",
              "Paper: pulp sizing, satinising, bookbinding.",
              "Chemical: production of adhesives and dextrins.",
              "Cosmetic and pharmaceutical: powders, talcs, tablet production.",
            ],
          },
          {
            paragraphs: [
              "The producer is the Polish brand Pepees, known for potato products, glucose syrups, groats and flakes.",
            ],
          },
        ],
      },
      hfcs: {
        name: "Glucose-fructose syrup",
        shortName: "Glucose-fructose syrup",
        grade: "GFS-20, GFS-30, GFS-40",
        origin: "Kazakhstan",
        minLabel: "ask a manager",
        packaging: "280 kg drums",
        freeDelivery: "Free delivery in Tashkent from 1 drum",
        lead: "Top grade GFS-20, GFS-30 and GFS-40. HALAL certified.",
        blocks: [
          {
            paragraphs: [
              "The syrup is made by isomerising part of the starch D-glucose into D-fructose. It consists mainly of fructose and glucose, so it matches sucrose in sweetness and nutritional value.",
              "GFS is made from corn: the starch fraction undergoes enzymatic saccharification to a composition close to honey — 58–66% glucose and 42–44% fructose.",
            ],
          },
          {
            title: "Where it’s used",
            list: [
              "Beverages, juices, syrups, jams and canned goods: improves bacterial stability, preserves colour and aroma.",
              "Bakery: darkens when heated and gives a golden crust.",
              "Dairy desserts, yoghurts, ice cream.",
              "Confectionery: replaces invert sugar without changing sweetness, aroma or texture; 20–50% of sucrose in cakes, up to 20% in white glaze, fully in jelly fillings.",
              "Sauces and ketchups: fully or partly replaces sugar.",
              "Paired 50/50 with high-maltose molasses it prevents sugar crystallisation.",
            ],
          },
        ],
      },
      caramel: {
        name: "Enzymatic caramel molasses (corn)",
        shortName: "Caramel molasses",
        grade: "enzymatic, corn",
        origin: "ask a manager",
        minLabel: "from 280 kg",
        lead: "Corn caramel molasses for confectionery and bakery production.",
      },
      acid: {
        name: "Acid starch molasses (corn)",
        shortName: "Acid molasses",
        grade: "starch, corn",
        origin: "ask a manager",
        minLabel: "ask a manager",
        lead: "Corn starch molasses made by acid hydrolysis.",
      },
      caustic: {
        name: "Granulated caustic soda",
        shortName: "Caustic soda",
        grade: "granulated, 99%",
        origin: "Russia (Volgograd)",
        minLabel: "from 1 kg",
        packaging: "Waterproof 25 kg polypropylene sacks",
        freeDelivery: "Free delivery in Tashkent from 500 kg",
        lead: "Granulated sodium hydroxide 99%: the most widely used alkali, it neutralises fats and organic contamination.",
        blocks: [
          {
            paragraphs: [
              "Caustic soda, sodium hydroxide and lye are names for the same alkali. It is a white solid with no distinct odour that dissolves easily in water and absorbs moisture from the air, releasing heat.",
              "One of the strongest alkalis: high concentrations cause burns and corrode organic substances. Handle with care.",
            ],
          },
          {
            title: "Properties",
            list: [
              "Dissolves in water and alcohol solutions, not in ethers or acetone.",
              "Non-flammable, with a very high boiling point (1390 °C).",
              "Reacts actively with aluminium, lead, zinc and tin.",
              "Molten, it destroys glass.",
            ],
          },
        ],
      },
      borax: {
        name: "Borax decahydrate, 25 kg sack",
        shortName: "Borax decahydrate",
        grade: "25 kg sack",
        origin: "Turkey",
        minLabel: "from 1 kg",
        packaging: "25 kg sacks",
        freeDelivery: "Free delivery in Tashkent for orders from 200 kg",
        lead: "Sodium tetraborate decahydrate for ceramics, detergents, borosilicate glass and fibreglass.",
        specs: [
          ["B2O3 mass fraction, % min.", "36.47–38.50"],
          ["Na2O content, %", "16.24–17.14"],
          ["SO4 content, max.", "0.0135"],
          ["Cl content, max.", "0.0070"],
          ["Fe content, max.", "0.0010"],
          ["Na2B4O7·10H2O equivalent", "99.90–105.45"],
        ],
        blocks: [
          {
            title: "Used in the production of",
            list: [
              "ceramics",
              "detergents",
              "borosilicate glass",
              "fibreglass and insulating glass fabric",
            ],
          },
          {
            paragraphs: [
              "Borax helps the batch melt, lowers melt viscosity and prevents devitrification. This makes the end product stronger and more resistant to mechanical, chemical and thermal stress, strengthens fibreglass and improves its thermal and acoustic insulation.",
            ],
          },
        ],
      },
    },
    industries: [
      {
        name: "Confectionery",
        text: "Molasses and glucose-fructose syrup for caramel, marmalade and baking.",
      },
      {
        name: "Meat",
        text: "Starch that holds moisture and keeps the texture of sausages and semi-finished products.",
      },
      {
        name: "Food",
        text: "Starch as a thickener for sauces, kissel and dry mixes.",
      },
      { name: "Textile", text: "Starch for yarn sizing and fabric finishing." },
      { name: "Paper", text: "Starch for sizing paper and corrugated board." },
      {
        name: "Pharmaceutical",
        text: "Starch as a filler and binder for tablets.",
      },
    ],
    countries: ["Kazakhstan", "Russia", "Poland"],
    advantages: [
      "Consistently high product quality — a competitive edge for your end product",
      "Constant availability and real stock at our Tashkent warehouse",
      "Flexible pricing and discounts for regular clients",
      "Free delivery across Tashkent at a time that suits you",
      "Batch shipments to other regions of the Republic",
    ],
    faq: [
      {
        q: "What is the minimum order?",
        a: "It depends on the product. Borax and caustic soda from 1 kg, corn starch from 100 kg, caramel molasses from 280 kg, potato starch from 1,000 kg. The minimum is shown on each product card.",
      },
      {
        q: "How much does delivery cost?",
        a: "In Tashkent it’s free for orders from 200 kg, at a time that suits you. We also ship batches to other regions of Uzbekistan; a manager will price the timing and cost for your volume and address.",
      },
      {
        q: "How can I pay?",
        a: "By bank transfer, by card via a UzCard terminal, or in cash — at the warehouse or on delivery.",
      },
      {
        q: "Do you work with companies? What documents do you provide?",
        a: "Yes, our regular clients are more than 300 companies. A manager will agree the contract and shipping documents when you place the order.",
      },
      {
        q: "Is the product really in stock?",
        a: "We keep stock at our warehouse in Tashkent region (Keles) and ship without waiting for supply. A manager will confirm the balance of a specific product when you call.",
      },
    ],
    payments: [
      {
        name: "Bank transfer",
        text: "Cashless transfer to our account. Companies get an invoice.",
      },
      {
        name: "UzCard terminal",
        text: "Cashless payment via UzCard POS terminals.",
      },
      { name: "Cash", text: "At the point of sale or on delivery." },
    ],
    deliveryOptions: [
      {
        name: "Free across Tashkent",
        text: "For orders from 200 kg we deliver to your plant or warehouse at no extra cost.",
      },
      {
        name: "At a convenient time",
        text: "We agree the delivery day and time in advance and fit your receiving schedule.",
      },
      {
        name: "Shipments to the regions",
        text: "We ship batches to other regions of the Republic and price it on request.",
      },
      {
        name: "Warehouse pickup",
        text: "You can collect from our warehouse in Keles — we’ll have the order ready.",
      },
    ],
    orderSteps: [
      {
        name: "Request",
        text: "Send a request on the site, call us or add products to the cart.",
      },
      {
        name: "Quote",
        text: "A manager confirms stock, the batch price and delivery cost.",
      },
      {
        name: "Payment",
        text: "As you prefer: bank transfer, UzCard or cash.",
      },
      {
        name: "Delivery",
        text: "We deliver at the agreed time or prepare the order for pickup.",
      },
    ],
    galleryCaptions: [
      "Metal drums — the typical container for molasses and syrups",
      "What starch molasses looks like",
      "Corn starch — a fine white powder",
      "Potato starch — a loose white powder",
      "What borax looks like: white crystals",
      "What a thick clear syrup looks like",
      "Potatoes — the raw material for potato starch (Unsplash photo)",
      "Corn — the raw material for corn starch and molasses",
    ],
    articles: {
      "bura-desyativodnaya-meshok-25kg": {
        title: "Borax decahydrate, 25 kg sack",
        excerpt:
          "How borax works in the production of special glass, fibreglass and glass fabric — and where else it is used.",
        blocks: [
          {
            title: "Description",
            paragraphs: [
              "In the production of special-purpose glass, fibreglass and glass fabric, borax (sodium tetraborate decahydrate) helps the batch melt, lowers melt viscosity and prevents devitrification. This makes the end product stronger and more resistant to mechanical, chemical and thermal stress, strengthens fibreglass and improves its chemical resistance and thermal and acoustic insulation.",
            ],
          },
          {
            title: "Applications",
            list: [
              "Gold mining: ore processing mainly uses anhydrous borax, which raises gold yield and improves bullion quality.",
              "Antifreeze, lubricants and brake fluids: forms a corrosion-protective layer on the metal surface.",
              "Construction: corrosion inhibitor for steel structures.",
              "Eco-wool, adhesives, chipboard: fire retardant and antiseptic.",
              "Detergents, cleaners and bleaches, sodium perborate production, polishes.",
              "Enamels and glazes: a source of boron oxide and an inorganic binder.",
            ],
          },
          {
            paragraphs: [
              "Made in Turkey. In stock at our Tashkent warehouse. Free delivery in Tashkent for orders from 200 kg.",
            ],
          },
        ],
      },
      "soda-kausticheskaya-98": {
        title: "Caustic soda 98%",
        excerpt:
          "Properties, synonyms and applications of sodium hydroxide — from the chemical industry to pulp and paper.",
        blocks: [
          {
            title: "Properties",
            list: [
              "Appearance: granules or flakes",
              "NaOH content, min.: 98%",
              "Na2CO3 content, max.: 0.5%",
              "NaCl content, max.: 0.03%",
              "Fe2O3 content, max.: 0.005%",
            ],
          },
          {
            title: "Synonyms",
            paragraphs: [
              "Sodium hydroxide, lye, caustic. Available granulated or flaked.",
            ],
          },
          {
            title: "Uses in the chemical industry",
            list: [
              "organic dyes",
              "synthetic phenol",
              "glycerine",
              "insecticides",
              "chemicals and intermediates",
              "medicines",
              "plastics",
              "refining oil, petroleum products and mineral oils",
            ],
          },
          {
            title: "Metallurgy and paper",
            paragraphs: [
              "In ferrous metallurgy — to remove sulphur from steel. In pulp and paper — to treat cellulose and paper pulp.",
            ],
          },
        ],
      },
    },
  },
};
