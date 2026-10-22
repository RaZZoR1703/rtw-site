import type { Messages } from "@/i18n/messages";

export const uz: Messages = {
  meta: {
    title: "RTW — Toshkentda kraxmal va patoka ulgurji",
    template: "%s — RTW",
    description:
      "Toshkentdagi ombordan kraxmal, patoka, siroplar va texnik kimyo ulgurji savdosi. Qozogʻiston, Rossiya va Polsha zavodlari xomashyosi. Shahar boʻylab bepul yetkazib berish.",
    siteName: "RTW — Right to Win",
    ogAlt: "RTW — Toshkent omboridan kraxmal va patoka ulgurji",
    ogLines: ["Kraxmal va patoka", "ulgurji"],
    ogSub: "Toshkentdagi ombor · shahar boʻylab bepul yetkazib berish",
  },
  common: {
    currency: "soʻm",
    perKg: "soʻm/kg",
    perKgSpaced: "soʻm / kg",
    kg: "kg",
    inStock: "Mavjud",
    inStockLong: "Omborda mavjud",
    freeConsultation: "bepul maslahat",
    leaveRequest: "Ariza qoldirish",
    callMe: "Menga qoʻngʻiroq qiling",
    home: "Bosh sahifa",
    breadcrumbs: "Navigatsiya zanjiri",
    skipToContent: "Asosiy mazmunga oʻtish",
    menu: "Menyu",
    openMenu: "Menyuni ochish",
    mainMenu: "Asosiy menyu",
    language: "Til",
    cart: "Savat",
    cartWithCount: (n) => `Savat, ${n} ta mahsulot`,
    callTo: (phone) => `${phone} raqamiga qoʻngʻiroq qilish`,
    illustration: "Illyustratsiya",
    origin: "Ishlab chiqarilgan",
    minBatch: "Min. partiya",
    toCart: "Savatga",
    goToCart: "Savatga oʻtish",
    clarify: "Aniqlash",
    addToCart: (name) => `«${name}»ni savatga qoʻshish`,
    addedToCart: (name, kg) => `${name}: ${kg} kg savatda`,
    goods: (n) => `${n} ta mahsulot`,
    toHomeAria: "RTW — bosh sahifaga",
  },
  nav: {
    "/": "Bosh sahifa",
    "/catalog": "Katalog",
    "/delivery": "Toʻlov va yetkazib berish",
    "/gallery": "Galereya",
    "/news": "Yangiliklar",
    "/contacts": "Aloqa",
  },
  header: {
    topLeft:
      "Toshkentdagi ombor · 200 kg dan shahar boʻylab bepul yetkazib berish",
    topRight: "«RIGHT TO WIN» MChJ · Oʻzbekiston boʻylab ulgurji",
    logoLine1: "Right to Win",
    logoLine2: "kraxmal va patoka ulgurji",
  },
  footer: {
    about:
      "Kraxmal va patoka ulgurji savdosi — oziq-ovqat, qandolat, farmatsevtika va qogʻoz sanoati uchun xomashyo.",
    sections: "Boʻlimlar",
    products: "Mahsulotlar",
    contacts: "Aloqa",
    copyright: (company) => `© ${company}, 2015-yildan`,
    warehouse: "Ombor Keles, Toshkent viloyatida",
  },
  form: {
    name: "Ism",
    phone: "Telefon",
    need: "Nima kerak",
    needPlaceholder: "Masalan: makkajoʻxori kraxmali, oyiga 2 tonna",
    submit: "Narxlar roʻyxatini olish",
    sending: "Yuborilmoqda…",
    consent:
      "Tugmani bosib, aloqa maʼlumotlaringizni qayta ishlashga rozilik bildirasiz.",
    errorPhone: "Raqamni toʻliq kiriting, masalan 99 392 23 05",
    errorSend: (phone) => `Yuborib boʻlmadi. Bizga qoʻngʻiroq qiling: ${phone}`,
    success: "Ariza qabul qilindi. Menejer ish vaqtida qoʻngʻiroq qiladi.",
    dialogTitle: "Qoʻngʻiroq qilamiz",
    dialogProduct: (name) =>
      `«${name}» boʻyicha: narx, partiya va muddatlarni aniqlaymiz.`,
    dialogGeneric:
      "Vazifangizga mos mahsulot tanlab, joriy narxlarni yuboramiz.",
  },
  hero: {
    words: ["Kraxmal", "va patoka", "ulgurji"],
    lead: "Qozogʻiston, Rossiya va Polsha zavodlari xomashyosi qandolatchilar, goʻsht kombinatlari, toʻqimachilik va qogʻoz fabrikalari uchun. Mavjud tovardan joʻnatamiz, Toshkent boʻylab bepul yetkazamiz.",
    cta: "Katalog va narxlar",
    stats: [
      "yildan beri ishlaymiz",
      "doimiy mijoz",
      "ishlab chiqaruvchi davlat",
    ],
  },
  home: {
    priceBand: "Ombordagi ulgurji narxlar, 1 kg uchun soʻm",
    directionsTitle: "Uch yoʻnalish — bitta yetkazib beruvchi",
    directionsLead:
      "Kraxmal, patoka va texnik kimyo bitta omborda: aralash partiyalarni yigʻib, bitta mashinada yetkazamiz.",
    industriesTitle: ["", "Olti", " soha uchun xomashyo"],
    industriesLead:
      "Doimiy mijozlarimiz orasida Oʻzbekiston boʻylab 300 dan ortiq korxona bor. Har bir soha nima olishini bilamiz va uni omborda saqlaymiz.",
    stockTitle: "Hozir omborda bor mahsulotlar",
    stockLead:
      "Kilogramm uchun ulgurji narxlar. Yirik partiyalar va doimiy mijozlar uchun alohida shartlar.",
    allCatalog: "Butun katalog",
    aboutTitle:
      "2015-yildan beri Oʻzbekiston korxonalariga xomashyo yetkazamiz",
    aboutLead:
      "«RIGHT TO WIN» MChJ mahalliy ishlab chiqaruvchilar va isteʼmolchilarni oliy navli kraxmal-patoka mahsulotlari bilan taʼminlashga ixtisoslashgan.",
    makers: "Ishlab chiqaruvchi zavodlar",
    faqTitle: "Shartlar haqida qisqacha",
    faqLead: "Javob topmadingizmi — qoʻngʻiroq qiling, darhol javob beramiz:",
    leadTitle: "Partiyani yetkazib berish bilan hisoblaymiz",
    leadLead:
      "Telefon raqamingizni qoldiring — menejer qoʻngʻiroq qilib, vazifangizga mos mahsulot tanlaydi va joriy narxlarni yuboradi.",
  },
  catalog: {
    metaTitle: "Mahsulotlar katalogi",
    metaDescription:
      "Kraxmal, patoka va siroplar, texnik kimyo — kilogramm uchun ulgurji narxlar, Toshkentdagi omborda mavjud.",
    title: "Mahsulotlar katalogi",
    lead: "Kraxmal, patoka va siroplar, texnik kimyo — kilogramm uchun ulgurji narxlar, Toshkentdagi omborda mavjud.",
    allGoods: "Barcha mahsulotlar",
    categories: "Turkumlar",
    pricesPerKg: "1 kg uchun narxlar",
    leadTitle: "Kerakli mahsulot yoki hajmni topmadingizmi?",
    leadLead:
      "Ishlab chiqarishingizga nima kerakligini ayting — mavjud tovardan tanlaymiz yoki buyurtma asosida partiya olib kelamiz.",
    leadSubmit: "Menga qoʻngʻiroq qiling",
  },
  product: {
    article: "Artikul",
    packaging: "Qadoq",
    wholesale: (min) => `Ulgurji narx · minimal buyurtma: ${min}`,
    factStock: "Toshkentdagi omborda mavjud",
    factStockText: "Yetkazib berishni kutmasdan joʻnatamiz",
    factDeliveryDefault: "Toshkent boʻylab bepul",
    factDeliveryText: "Qulay vaqtda yetkazib berish",
    factPay: "Toʻlov",
    factPayText: "Pul oʻtkazish, UzCard terminali, naqd",
    specs: "Xususiyatlari",
    description: "Tavsif",
    moreInNews: "Qoʻllanilishi haqida batafsil — yangiliklarda",
    others: "Boshqa mahsulotlar",
    leadTitle: "Ishlab chiqarishingiz uchun partiya kerakmi?",
    leadLead: (name) =>
      `Hajmni ayting — «${name}» narxini yetkazib berish va toʻlov shartlari bilan hisoblaymiz.`,
    leadSubmit: "Partiyani hisoblash",
    metaDescription: (lead, price) =>
      `${lead} Ulgurji narx ${price} soʻm/kg, Toshkentdagi ombor.`,
    batchVolume: "Partiya hajmi, kg",
    batchLess: (step) => `${step} kg kamroq`,
    batchMore: (step) => `${step} kg koʻproq`,
    batchMin: (min) =>
      `Minimal partiya — ${min} kg; undan kam buyurtma qilib boʻlmaydi.`,
    batchSum: "Summa",
    batchAsk:
      "Bu mahsulot boʻyicha minimal partiya va qadoqni menejer aniqlaydi va yetkazib berish bilan summani hisoblaydi.",
    batchAskButton: "Partiyani hisoblash",
    getPrice: "Narxlar roʻyxatini olish",
  },
  cart: {
    title: "Savat",
    loading: "Savat yuklanmoqda…",
    empty:
      "Savat hozircha boʻsh. Katalogdan mahsulot tanlang — partiya va yetkazib berishni bitta ariza bilan hisoblaymiz.",
    toCatalog: "Katalogga oʻtish",
    lineMeta: (price, min) => `${price} soʻm/kg · min. ${min} kg`,
    volume: "Hajm, kg",
    remove: (name) => `«${name}»ni olib tashlash`,
    removeShort: "Olib tashlash",
    clear: "Savatni tozalash",
    total: "Ulgurji narxlarda jami",
    totalNote:
      "Menejer mavjudligini tasdiqlab, hisob-faktura yuboradi. Toshkent boʻylab 200 kg dan yetkazib berish bepul.",
    submit: "Ariza yuborish",
  },
  delivery: {
    metaTitle: "Toʻlov va yetkazib berish",
    metaDescription:
      "Pul oʻtkazish, UzCard yoki naqd pul. Toshkent boʻylab 200 kg dan bepul yetkazib berish, viloyatlarga joʻnatish, Kelesdan olib ketish.",
    title: "Toʻlov va yetkazib berish",
    lead: "Oʻzbekiston boʻylab yuridik shaxslar va tadbirkorlar bilan ishlaymiz. Tovar Toshkentdagi omborda mavjud.",
    payTitle: "Toʻlov usullari",
    payLead:
      "Qulay usulni tanlang — yuridik shaxslarga pul oʻtkazish uchun hisob-faktura beramiz.",
    deliveryTitle: "Xomashyoni kerakli joyga yetkazamiz",
    forkliftAlt: "Ombordagi paletli tokchalar orasida yuklagich",
    stepsTitle: "Yetkazib berishgacha toʻrt qadam",
    leadTitle: "Partiyangizni yetkazib berishni hisoblaymiz",
    leadLead:
      "Hajm va manzilni ayting — qachon yetkazishimiz va qancha turishini aytamiz.",
    leadSubmit: "Hisoblash",
  },
  gallery: {
    metaTitle: "Fotogalereya",
    metaDescription:
      "Biz yetkazib beradigan kraxmal, patoka, siroplar va bura qanday koʻrinadi.",
    title: "Fotogalereya",
    lead: "Biz yetkazib beradigan mahsulotlar: kraxmal, patoka, siroplar va bura qanday koʻrinadi. Bu mahsulot turi illyustratsiyalari, aniq partiya surati emas.",
    prev: "Oldingi surat",
    next: "Keyingi surat",
    leadTitle: "Mahsulot kerakmi?",
    leadLead: "Hajmingiz uchun narxni aytib, yetkazib berishni hisoblaymiz.",
    leadSubmit: "Narxni bilish",
  },
  news: {
    metaTitle: "Yangiliklar",
    metaDescription:
      "Tovar kelishi, mahsulotlarning qoʻllanilishi va yetkazib berish shartlari.",
    title: "Yangiliklar",
    lead: "Tovar kelishi, mahsulotlarning qoʻllanilishi va yetkazib berish shartlari.",
    read: "Oʻqish",
    all: "Barcha yangiliklar",
    productFrom: "Maqoladagi mahsulot",
    leadTitle: "Bu mahsulot ishlab chiqarishingiz uchun kerakmi?",
    leadLead:
      "Qoʻngʻiroq qilib, mavjudligi haqida aytamiz va ulgurji narxni yuboramiz.",
    leadSubmit: "Menga qoʻngʻiroq qiling",
  },
  contacts: {
    metaTitle: "Aloqa",
    metaDescription: (address) =>
      `RTW telefonlari, e-mail va ombor manzili: ${address}.`,
    title: "Aloqa",
    lead: "Qoʻngʻiroq qiling yoki ariza qoldiring — mahsulot tanlaymiz, partiya va yetkazib berishni hisoblaymiz.",
    phones: "Telefonlar",
    email: "E-mail",
    address: "Ombor va ofis",
    mapTitle: "RTW ombori xaritada",
    formTitle: "Ariza qoldirish",
    formLead: "Aloqa maʼlumotlaringizni yuboring va joriy narxlarni oling.",
    formSubmit: "Ariza yuborish",
  },
  notFound: {
    title: "Bunday sahifa yoʻq — lekin tovar omborda bor",
    lead: "Havola eskirgan boʻlishi mumkin. Katalogga qarang yoki qoʻngʻiroq qiling:",
    catalog: "Katalog va narxlar",
    home: "Bosh sahifaga",
  },
  company: {
    name: "«RIGHT TO WIN» MChJ",
    address: "Toshkent viloyati, Zangiota tumani, Keles, Okibat koʻchasi, 68",
  },
  data: {
    categories: {
      starch: {
        name: "Kraxmal",
        description:
          "Oziq-ovqat va texnik ishlab chiqarish uchun oliy navli kartoshka va makkajoʻxori kraxmali.",
        industries: "Qandolat, goʻsht, toʻqimachilik va qogʻoz sohalari",
      },
      syrup: {
        name: "Patoka va siroplar",
        description:
          "Qandolatchilar va ichimliklar uchun karamel va kislotali patoka, glyukoza-fruktoza siropi.",
        industries:
          "Qandolat va non mahsulotlari ishlab chiqarish, ichimliklar",
      },
      chem: {
        name: "Kimyo",
        description:
          "Shisha, yuvish vositalari va kimyo sanoati uchun bura va kaustik soda.",
        industries: "Shisha, yuvish vositalari va kimyo sanoati",
      },
    },
    products: {
      corn: {
        name: "Makkajoʻxori kraxmali (oliy nav)",
        shortName: "Makkajoʻxori kraxmali",
        grade: "oliy nav",
        origin: "Qozogʻiston",
        minLabel: "100 kg dan",
        freeDelivery: "200 kg dan buyurtmada Toshkent boʻylab bepul",
        lead: "Oq rangli sochiluvchan kukun, sovuq suvda yaxshi boʻkadi va kimyoviy oʻzgarmaydi.",
        blocks: [
          {
            paragraphs: [
              "Makkajoʻxori kraxmali — oq rangli sochiluvchan kukun. U sovuq suvda yaxshi boʻkadi va kimyoviy oʻzgarishlarga uchramaydi.",
              "U tozalangan makkajoʻxori donidan hoʻl tegirmonlash usulida bir xil oq-sutrang kukun holiga keltirib tayyorlanadi.",
              "Konserva va qogʻoz ishlab chiqarishda, toʻqimachilik va boshqa sanoat tarmoqlarida, farmatsevtikada qoʻllaniladi.",
            ],
          },
        ],
      },
      potato: {
        name: "Kartoshka kraxmali (oliy nav)",
        shortName: "Kartoshka kraxmali",
        grade: "oliy nav",
        origin: "Polsha (PEPEES)",
        minLabel: "1 000 kg dan",
        packaging: "25 kg lik mustahkam kraft-qogʻoz qoplar",
        freeDelivery: "200 kg dan buyurtmada Toshkent boʻylab bepul",
        lead: "Polshaning PEPEES brendi kartoshka kraxmali, GOST talablariga mos.",
        blocks: [
          {
            paragraphs: [
              "Yangi kartoshkadan olinadigan oq kukun. Kraxmal donachalarini mexanik ajratib, soʻng yuvish, tozalash, quritish va elash orqali olinadi.",
            ],
          },
          {
            title: "Sanoatda qoʻllanilishi",
            list: [
              "Oziq-ovqat: goʻsht mahsulotlari, souslar, shoʻrvalar, pudinglar, kisellar, ketchuplar uchun quyuqlashtiruvchi; non tuzilishini yaxshilaydi; qandolat mahsulotlariga qoʻshimcha.",
              "Toʻqimachilik: ipni shlixtlash, kraxmallash, boʻyash, satinlash, gul bosish, pardozlash.",
              "Qogʻoz: qogʻoz massasini yelimlash, satinlash, muqovalash ishlari.",
              "Kimyo: yelim va dekstrinlar ishlab chiqarish.",
              "Kosmetika va farmatsevtika: sepkilar, talklar, dori tabletkalari.",
            ],
          },
          {
            paragraphs: [
              "Ishlab chiqaruvchi — kartoshka mahsulotlari, glyukoza siroplari, yorma va bodroqlar bilan tanilgan polshalik Pepees brendi.",
            ],
          },
        ],
      },
      hfcs: {
        name: "Glyukoza-fruktoza siropi",
        shortName: "Glyukoza-fruktoza siropi",
        grade: "GFS-20, GFS-30, GFS-40",
        origin: "Qozogʻiston",
        minLabel: "menejerdan aniqlang",
        packaging: "280 kg lik bochkalar",
        freeDelivery: "1 bochkadan Toshkent boʻylab bepul",
        lead: "GFS-20, GFS-30, GFS-40 markali oliy nav. HALAL sertifikati bor.",
        blocks: [
          {
            paragraphs: [
              "Sirop kraxmal tarkibidagi D-glyukozaning bir qismini D-fruktozaga izomerlash orqali olinadi. U asosan fruktoza va glyukozadan iborat, shuning uchun shirinligi va toʻyimliligi boʻyicha saxarozaga teng.",
              "GFS makkajoʻxoridan ishlab chiqariladi: kraxmal fraksiyasi asal tarkibiga yaqin holatgacha fermentativ qandlashtiriladi — 58–66% glyukoza va 42–44% fruktoza.",
            ],
          },
          {
            title: "Qayerda qoʻllaniladi",
            list: [
              "Ichimliklar, sharbatlar, siroplar, murabbo va konservalar: bakteriyalarga chidamlilikni oshiradi, rang va hidni saqlaydi.",
              "Non mahsulotlari: qizdirilganda toʻqlashib, tilla rang qobiq beradi.",
              "Sutli desertlar, yogurtlar, muzqaymoq.",
              "Qandolatchilik: invert shakar oʻrnini shirinlik, hid va tuzilishni oʻzgartirmay bosadi; tortlarda saxarozaning 20–50%, oq glazurda 20% gacha, jele toʻldirgichlarda toʻliq.",
              "Souslar va ketchuplar: shakarni toʻliq yoki qisman almashtiradi.",
              "Yuqori maltozali patoka bilan 50/50 nisbatda shakar kristallanishini bartaraf etadi.",
            ],
          },
        ],
      },
      caramel: {
        name: "Fermentativ karamel patoka (makkajoʻxori)",
        shortName: "Karamel patoka",
        grade: "fermentativ, makkajoʻxori",
        origin: "menejerdan aniqlang",
        minLabel: "280 kg dan",
        lead: "Qandolat va non mahsulotlari ishlab chiqarish uchun makkajoʻxori karamel patokasi.",
      },
      acid: {
        name: "Kislotali kraxmal patoka (makkajoʻxori)",
        shortName: "Kislotali patoka",
        grade: "kraxmal, makkajoʻxori",
        origin: "menejerdan aniqlang",
        minLabel: "menejerdan aniqlang",
        lead: "Kislotali gidroliz usulida olingan makkajoʻxori kraxmal patokasi.",
      },
      caustic: {
        name: "Granulalangan kaustik soda",
        shortName: "Kaustik soda",
        grade: "granulalangan, 99%",
        origin: "Rossiya (Volgograd)",
        minLabel: "1 kg dan",
        packaging: "25 kg lik suv oʻtkazmaydigan polipropilen qoplar",
        freeDelivery: "500 kg dan Toshkent boʻylab bepul",
        lead: "Granulalangan natriy gidroksid 99%: eng keng tarqalgan ishqor, yogʻ va organik ifloslanishlarni neytrallaydi.",
        blocks: [
          {
            paragraphs: [
              "Oʻyuvchi natr, natriy gidroksid, kaustik — bitta ishqorning nomlari. Bu hidi sezilmaydigan oq qattiq modda, suvda oson eriydi va havodan namlikni issiqlik chiqarib yutadi.",
              "Eng kuchli ishqorlardan biri: yuqori konsentratsiyada kuydiradi va organik moddalarni yemiradi. Ehtiyotkorlik bilan muomala qilishni talab qiladi.",
            ],
          },
          {
            title: "Xususiyatlari",
            list: [
              "Suvda va spirtli eritmalarda eriydi, efir va atsetonda erimaydi.",
              "Yonmaydi, qaynash harorati juda yuqori (1390 °C).",
              "Alyuminiy, qoʻrgʻoshin, rux va qalay bilan faol reaksiyaga kirishadi.",
              "Suyuqlantirilgan holda shishani yemiradi.",
            ],
          },
        ],
      },
      borax: {
        name: "Oʻn suvli bura, 25 kg lik qop",
        shortName: "Oʻn suvli bura",
        grade: "25 kg lik qop",
        origin: "Turkiya",
        minLabel: "1 kg dan",
        packaging: "25 kg lik qoplar",
        freeDelivery: "200 kg dan buyurtmada Toshkent boʻylab bepul",
        lead: "Keramika, yuvish vositalari, borosilikat shisha va shisha tolasi uchun natriy tetraborat dekagidrat.",
        specs: [
          ["B2O3 massa ulushi, % kamida", "36,47–38,50"],
          ["Na2O miqdori, %", "16,24–17,14"],
          ["SO4 miqdori, koʻpi bilan", "0,0135"],
          ["Cl miqdori, koʻpi bilan", "0,0070"],
          ["Fe miqdori, koʻpi bilan", "0,0010"],
          ["Na2B4O7·10H2O ekvivalenti", "99,90–105,45"],
        ],
        blocks: [
          {
            title: "Ishlab chiqarishda qoʻllaniladi",
            list: [
              "keramika buyumlari",
              "yuvish vositalari",
              "borosilikat shisha",
              "shisha tolasi va izolyatsion shisha mato",
            ],
          },
          {
            paragraphs: [
              "Bura shixtaning erishiga yordam beradi, suyuqlanma qovushqoqligini kamaytiradi va kristallanishning oldini oladi. Bu tayyor mahsulotning mustahkamligi va mexanik, kimyoviy, termik taʼsirlarga chidamliligini oshiradi, shisha tolasini mustahkamlaydi va uning issiqlik va tovush izolyatsiyasini yaxshilaydi.",
            ],
          },
        ],
      },
    },
    industries: [
      {
        name: "Qandolat",
        text: "Karamel, marmelad va pishiriqlar uchun patoka va glyukoza-fruktoza siropi.",
      },
      {
        name: "Goʻsht",
        text: "Namlikni ushlab, kolbasa va yarim tayyor mahsulotlar tuzilishini saqlaydigan kraxmal.",
      },
      {
        name: "Oziq-ovqat",
        text: "Souslar, kisellar va quruq aralashmalar uchun quyuqlashtiruvchi kraxmal.",
      },
      {
        name: "Toʻqimachilik",
        text: "Ipni shlixtlash va matoni pardozlash uchun kraxmal.",
      },
      {
        name: "Qogʻoz",
        text: "Qogʻoz va gofrokarton yelimlash uchun kraxmal.",
      },
      {
        name: "Farmatsevtika",
        text: "Tabletkalar uchun toʻldiruvchi va bogʻlovchi sifatida kraxmal.",
      },
    ],
    countries: ["Qozogʻiston", "Rossiya", "Polsha"],
    advantages: [
      "Yetkazilayotgan tovarning barqaror yuqori sifati — tayyor mahsulotingizning raqobat ustunligi",
      "Toshkentdagi omborda doimiy mavjudlik va real zaxiralar",
      "Moslashuvchan narxlar va doimiy mijozlar uchun chegirmalar tizimi",
      "Toshkent boʻylab sizga qulay vaqtda bepul yetkazib berish",
      "Respublikaning boshqa viloyatlariga partiyalar yetkazib berish",
    ],
    faq: [
      {
        q: "Minimal partiya qancha?",
        a: "Tovarga bogʻliq. Bura va kaustik sodani 1 kg dan, makkajoʻxori kraxmalini 100 kg dan, karamel patokani 280 kg dan, kartoshka kraxmalini 1 000 kg dan sotamiz. Minimal miqdor har bir mahsulot kartochkasida koʻrsatilgan.",
      },
      {
        q: "Yetkazib berish qancha turadi?",
        a: "Toshkent boʻylab 200 kg dan buyurtmada bepul, sizga qulay vaqtda. Oʻzbekistonning boshqa viloyatlariga ham partiyalar yetkazamiz: muddat va narxni menejer hajm va manzilga qarab hisoblaydi.",
      },
      {
        q: "Qanday toʻlash mumkin?",
        a: "Hisob raqamiga pul oʻtkazish, UzCard terminali orqali karta bilan yoki naqd pul bilan — omborda yoki yetkazib berishda.",
      },
      {
        q: "Korxonalar bilan ishlaysizmi? Qanday hujjatlar bor?",
        a: "Ha, doimiy mijozlarimiz — 300 dan ortiq korxona. Shartnoma va joʻnatish hujjatlari toʻplamini menejer buyurtmani rasmiylashtirishda kelishib oladi.",
      },
      {
        q: "Tovar rostdan ham omborda bormi?",
        a: "Zaxiralarni Toshkent viloyatidagi (Keles) omborda saqlaymiz va yetkazib berishni kutmasdan joʻnatamiz. Aniq mahsulot qoldigʻini menejer qoʻngʻiroq paytida tasdiqlaydi.",
      },
    ],
    payments: [
      {
        name: "Pul oʻtkazish",
        text: "Hisob raqamiga naqd pulsiz oʻtkazma. Yuridik shaxslarga hisob-faktura beramiz.",
      },
      {
        name: "UzCard terminali",
        text: "UzCard POS-terminallari orqali naqd pulsiz toʻlov.",
      },
      {
        name: "Naqd pul",
        text: "Savdo joyida yoki tovarni yetkazib berishda.",
      },
    ],
    deliveryOptions: [
      {
        name: "Toshkent boʻylab bepul",
        text: "200 kg dan buyurtmada tovarni ishlab chiqarishingiz yoki omboringizga qoʻshimcha toʻlovsiz yetkazamiz.",
      },
      {
        name: "Qulay vaqtda",
        text: "Yetkazib berish kuni va vaqtini oldindan kelishamiz — qabul qilish jadvalingizga moslashamiz.",
      },
      {
        name: "Viloyatlarga yetkazib berish",
        text: "Respublikaning boshqa viloyatlariga partiyalar joʻnatamiz, narxini ariza boʻyicha hisoblaymiz.",
      },
      {
        name: "Ombordan olib ketish",
        text: "Tovarni Kelesdagi ombordan oʻzingiz olib ketishingiz mumkin — buyurtmani kelishingizga tayyorlab qoʻyamiz.",
      },
    ],
    orderSteps: [
      {
        name: "Ariza",
        text: "Saytda ariza qoldiring, qoʻngʻiroq qiling yoki mahsulotlarni savatga qoʻshing.",
      },
      {
        name: "Hisob-kitob",
        text: "Menejer mavjudlik, partiya narxi va yetkazib berish narxini tasdiqlaydi.",
      },
      {
        name: "Toʻlov",
        text: "Qulay usulda: pul oʻtkazish, UzCard yoki naqd pul.",
      },
      {
        name: "Yetkazib berish",
        text: "Kelishilgan vaqtda yetkazamiz yoki olib ketishga tayyorlaymiz.",
      },
    ],
    galleryCaptions: [
      "Metall bochkalar — patoka va siroplar uchun odatiy idish",
      "Kraxmal patoka shunday koʻrinadi",
      "Makkajoʻxori kraxmali — oq mayda kukun",
      "Kartoshka kraxmali — oq sochiluvchan kukun",
      "Bura shunday koʻrinadi: oq kristallar",
      "Quyuq tiniq sirop shunday koʻrinadi",
      "Kartoshka — kartoshka kraxmali xomashyosi (Unsplash surati)",
      "Makkajoʻxori — makkajoʻxori kraxmali va patoka xomashyosi",
    ],
    articles: {
      "bura-desyativodnaya-meshok-25kg": {
        title: "Oʻn suvli bura, 25 kg lik qop",
        excerpt:
          "Bura maxsus shisha, shisha tolasi va shisha mato ishlab chiqarishda qanday ishlaydi — va yana qayerda qoʻllaniladi.",
        blocks: [
          {
            title: "Tavsif",
            paragraphs: [
              "Maxsus shisha, shisha tolasi va shisha mato ishlab chiqarishda bura (natriy tetraborat dekagidrat) shixtaning erishiga yordam beradi, suyuqlanma qovushqoqligini kamaytiradi va kristallanishning oldini oladi. Bu tayyor mahsulotning mustahkamligi va mexanik, kimyoviy, termik taʼsirlarga chidamliligini oshiradi, shisha tolasini mustahkamlaydi, kimyoviy barqarorlik hamda issiqlik va tovush izolyatsiyasini yaxshilaydi.",
            ],
          },
          {
            title: "Qoʻllanilishi",
            list: [
              "Oltin qazib olish: rudani qayta ishlashda asosan suvsiz bura ishlatiladi — u oltin chiqishini oshiradi va quyma sifatini yaxshilaydi.",
              "Antifriz, moylash va tormoz suyuqliklari: metall yuzasida korroziyadan himoya qatlami hosil qiladi.",
              "Qurilish: metall konstruksiyalar korroziyasini sekinlashtiruvchi.",
              "Ekovata, yelimlar, DSP: antipiren va antiseptik.",
              "Yuvish, tozalash vositalari va oqartirgichlar, natriy perborat ishlab chiqarish, jilolovchilar.",
              "Emal va sirlar: bor oksidi manbai va noorganik bogʻlovchi.",
            ],
          },
          {
            paragraphs: [
              "Ishlab chiqarilgan — Turkiya. Toshkentdagi omborda mavjud. 200 kg dan buyurtmada Toshkent boʻylab bepul yetkazib berish.",
            ],
          },
        ],
      },
      "soda-kausticheskaya-98": {
        title: "Kaustik soda 98%",
        excerpt:
          "Natriy gidroksidning xususiyatlari, sinonimlari va qoʻllanish sohalari — kimyo sanoatidan sellyuloza-qogʻozgacha.",
        blocks: [
          {
            title: "Xususiyatlari",
            list: [
              "Tashqi koʻrinishi: granula yoki parcha",
              "NaOH miqdori, kamida: 98%",
              "Na2CO3 miqdori, koʻpi bilan: 0,5%",
              "NaCl miqdori, koʻpi bilan: 0,03%",
              "Fe2O3 miqdori, koʻpi bilan: 0,005%",
            ],
          },
          {
            title: "Sinonimlari",
            paragraphs: [
              "Natriy gidroksid, oʻyuvchi natr, kaustik. Granulalangan yoki parchalangan holda chiqariladi.",
            ],
          },
          {
            title: "Kimyo sanoatida qoʻllanilishi",
            list: [
              "organik boʻyoqlar",
              "sintetik fenol",
              "glitserin",
              "insektitsidlar",
              "kimyoviy moddalar va yarim mahsulotlar",
              "dori vositalari",
              "plastmassalar",
              "neft, neft mahsulotlari va mineral moylarni tozalash",
            ],
          },
          {
            title: "Metallurgiya va qogʻoz",
            paragraphs: [
              "Qora metallurgiyada — poʻlatdan oltingugurtni chiqarish uchun. Sellyuloza-qogʻoz sanoatida — sellyuloza va qogʻoz massasini ishlov berish uchun.",
            ],
          },
        ],
      },
    },
  },
};
