// English / Hindi strings. The English values match the page's original text.
// Elements opt in with:
//   data-i18n="key"              → textContent
//   data-i18n-placeholder="key"  → placeholder
//   data-i18n-aria="key"         → aria-label
// The admin panel stays in English.

const LANG_KEY = "heliogrid_lang";

const STRINGS = {
  en: {
    "lang.toggle": "हिंदी",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.admin": "Admin Panel",
    "header.cta": "Get Quote",

    "hero.badge": "Live solar design, installation, and CRM tracking",
    "hero.eyebrow": "Solar systems for homes, factories, and businesses",
    "hero.title": "Build a brighter roof with intelligent solar power.",
    "hero.copy":
      "We design, install, and monitor high-efficiency solar panel systems that cut electricity bills and create cleaner energy independence.",
    "hero.ctaSurvey": "Book Free Survey",
    "hero.ctaServices": "Explore Services",
    "stat.deployed": "Solar deployed",
    "stat.customers": "Happy customers",
    "stat.savings": "Avg. bill savings",
    "card.savings": "Monthly savings",
    "card.output": "Live output",

    "trust.mnre": "Compliant designs",
    "trust.warrantyValue": "25 yrs",
    "trust.warranty": "Panel warranty",
    "trust.chargesValue": "Zero",
    "trust.charges": "Hidden charges",
    "trust.trackingValue": "360 deg",
    "trust.tracking": "Project tracking",

    "about.eyebrow": "About us",
    "about.title": "Engineering-led solar agency with transparent delivery.",
    "about.p1":
      "HelioGrid helps property owners switch to solar with feasibility studies, custom panel layouts, subsidy guidance, installation, and long-term performance tracking.",
    "about.p2":
      "Our team combines electrical engineering, rooftop safety, and data monitoring to deliver solar assets that look sharp and perform reliably for decades.",
    "about.tag1": "Rooftop scan",
    "about.tag2": "ROI simulation",
    "about.tag3": "Subsidy support",

    "services.eyebrow": "Services",
    "services.title": "Complete solar solutions from survey to savings.",
    "s1.title": "Residential Solar",
    "s1.copy": "Rooftop systems, net metering support, battery-ready wiring, and elegant panel layouts for homes.",
    "s2.title": "Commercial Solar",
    "s2.copy": "High-capacity solar plants for offices, schools, warehouses, hospitals, and industrial units.",
    "s3.title": "Maintenance",
    "s3.copy": "Cleaning, inverter checks, fault detection, generation reports, and annual performance audits.",
    "s4.title": "Energy Consulting",
    "s4.copy": "Load analysis, ROI forecasts, subsidy documentation, financing help, and carbon reduction planning.",

    "calc.eyebrow": "Subsidy calculator",
    "calc.title": "How much will solar cost you?",
    "calc.copy":
      "Enter your monthly electricity bill. We'll estimate the system size, PM Surya Ghar + Chhattisgarh subsidy and what you actually pay.",
    "calc.bill": "Monthly electricity bill (₹)",
    "calc.property": "Property type",
    "calc.home": "Home",
    "calc.commercial": "Shop / Office / Factory",
    "calc.submit": "Calculate",
    "calc.size": "Recommended system",
    "calc.cost": "Total cost",
    "calc.central": "Central subsidy",
    "calc.state": "Chhattisgarh subsidy",
    "calc.net": "Your cost",
    "calc.savings": "Monthly savings",
    "calc.payback": "Payback",
    "calc.years": "years",
    "calc.noSubsidy":
      "PM Surya Ghar subsidy is for homes only. Businesses save through lower bills and tax depreciation.",
    "calc.ctaWhatsapp": "Get exact quote on WhatsApp",
    "calc.ctaSurvey": "Book free site survey",
    "calc.disclaimer":
      "Estimate only. Final price and subsidy depend on the site survey and current PM Surya Ghar / state rules.",
    "calc.empty": "Enter your bill to see the estimate.",
    "calc.billError": "Please enter a monthly bill of at least ₹300.",
    "calc.prefill": "Monthly bill: {bill}. Calculator suggested {kw} kW.",

    "contact.eyebrow": "Lead generation",
    "contact.title": "Request a free solar consultation.",
    "contact.copy":
      "Submit the form and your lead will appear in the admin panel with status tracking, system size, budget, and source data.",
    "contact.chip1": "24 hour callback",
    "contact.chip2": "Free site survey",
    "contact.chip3": "ROI estimate",
    "quote.label": "Typical payback",
    "quote.value": "3.5 - 5 years",
    "quote.copy": "Based on rooftop area, tariff, net metering, and usage pattern.",

    "form.header": "New solar inquiry",
    "form.headerStrong": "Free Consultation",
    "form.name": "Full name",
    "form.namePh": "Your name",
    "form.phone": "Phone number",
    "form.email": "Email",
    "form.property": "Property type",
    "form.selectProperty": "Select property",
    "form.home": "Home",
    "form.commercial": "Commercial",
    "form.factory": "Factory",
    "form.institution": "Institution",
    "form.size": "Required system size",
    "form.selectSize": "Select size",
    "form.budget": "Budget range",
    "form.selectBudget": "Select budget",
    "form.budget1": "Under Rs 2 lakh",
    "form.budget2": "Rs 2-5 lakh",
    "form.budget3": "Rs 5-10 lakh",
    "form.budget4": "Rs 10 lakh+",
    "form.message": "Message",
    "form.messagePh": "Tell us your location and electricity bill amount",
    "form.submit": "Generate Lead",

    "footer.tagline": "Clean energy. Clear tracking. Better conversions.",
    "float.whatsapp": "Chat on WhatsApp",
    "float.call": "Call",

    "wa.general": "Hi {name}, I'm interested in rooftop solar. Please share details.",
    "wa.quote":
      "Hi {name}, I used your solar calculator.\nMonthly bill: {bill}\nProperty: {property}\nSuggested system: {kw} kW\nEstimated cost after subsidy: {net}\nPlease share an exact quote.",
  },

  hi: {
    "lang.toggle": "English",
    "nav.about": "हमारे बारे में",
    "nav.services": "सेवाएं",
    "nav.contact": "संपर्क",
    "nav.admin": "एडमिन पैनल",
    "header.cta": "कोटेशन लें",

    "hero.badge": "लाइव सोलर डिज़ाइन, इंस्टॉलेशन और CRM ट्रैकिंग",
    "hero.eyebrow": "घर, फैक्ट्री और व्यापार के लिए सोलर सिस्टम",
    "hero.title": "स्मार्ट सोलर पावर से अपनी छत को रोशन करें।",
    "hero.copy":
      "हम हाई-एफिशिएंसी सोलर पैनल सिस्टम डिज़ाइन, इंस्टॉल और मॉनिटर करते हैं, जो बिजली बिल घटाते हैं और आपको साफ़ ऊर्जा में आत्मनिर्भर बनाते हैं।",
    "hero.ctaSurvey": "फ्री सर्वे बुक करें",
    "hero.ctaServices": "सेवाएं देखें",
    "stat.deployed": "सोलर क्षमता लगाई",
    "stat.customers": "खुश ग्राहक",
    "stat.savings": "औसत बिल बचत",
    "card.savings": "हर महीने बचत",
    "card.output": "लाइव आउटपुट",

    "trust.mnre": "मान्य डिज़ाइन",
    "trust.warrantyValue": "25 साल",
    "trust.warranty": "पैनल वारंटी",
    "trust.chargesValue": "शून्य",
    "trust.charges": "छिपे शुल्क",
    "trust.trackingValue": "360°",
    "trust.tracking": "प्रोजेक्ट ट्रैकिंग",

    "about.eyebrow": "हमारे बारे में",
    "about.title": "इंजीनियरिंग-आधारित सोलर एजेंसी, पारदर्शी काम के साथ।",
    "about.p1":
      "HelioGrid फीज़िबिलिटी स्टडी, कस्टम पैनल लेआउट, सब्सिडी मार्गदर्शन, इंस्टॉलेशन और लंबे समय तक परफॉर्मेंस ट्रैकिंग के साथ प्रॉपर्टी मालिकों को सोलर अपनाने में मदद करता है।",
    "about.p2":
      "हमारी टीम इलेक्ट्रिकल इंजीनियरिंग, छत की सुरक्षा और डेटा मॉनिटरिंग को जोड़कर ऐसे सोलर सिस्टम देती है जो दिखने में शानदार हैं और दशकों तक भरोसेमंद चलते हैं।",
    "about.tag1": "छत स्कैन",
    "about.tag2": "ROI सिमुलेशन",
    "about.tag3": "सब्सिडी सहायता",

    "services.eyebrow": "सेवाएं",
    "services.title": "सर्वे से बचत तक, पूरा सोलर समाधान।",
    "s1.title": "घरेलू सोलर",
    "s1.copy": "घरों के लिए रूफटॉप सिस्टम, नेट मीटरिंग सहायता, बैटरी-रेडी वायरिंग और सुंदर पैनल लेआउट।",
    "s2.title": "कमर्शियल सोलर",
    "s2.copy": "ऑफिस, स्कूल, गोदाम, अस्पताल और इंडस्ट्रियल यूनिट के लिए हाई-कैपेसिटी सोलर प्लांट।",
    "s3.title": "मेंटेनेंस",
    "s3.copy": "सफाई, इन्वर्टर जांच, खराबी की पहचान, जनरेशन रिपोर्ट और सालाना परफॉर्मेंस ऑडिट।",
    "s4.title": "एनर्जी कंसल्टिंग",
    "s4.copy": "लोड एनालिसिस, ROI अनुमान, सब्सिडी डॉक्यूमेंटेशन, फाइनेंसिंग मदद और कार्बन कमी की योजना।",

    "calc.eyebrow": "सब्सिडी कैलकुलेटर",
    "calc.title": "सोलर आपको कितने में पड़ेगा?",
    "calc.copy":
      "अपना महीने का बिजली बिल डालें। हम सिस्टम साइज़, PM सूर्य घर + छत्तीसगढ़ सब्सिडी और आपका असली खर्च बताएंगे।",
    "calc.bill": "महीने का बिजली बिल (₹)",
    "calc.property": "प्रॉपर्टी का प्रकार",
    "calc.home": "घर",
    "calc.commercial": "दुकान / ऑफिस / फैक्ट्री",
    "calc.submit": "कैलकुलेट करें",
    "calc.size": "आपके लिए सिस्टम",
    "calc.cost": "कुल कीमत",
    "calc.central": "केंद्र सब्सिडी",
    "calc.state": "छत्तीसगढ़ सब्सिडी",
    "calc.net": "आपका खर्च",
    "calc.savings": "हर महीने बचत",
    "calc.payback": "पैसा वसूल",
    "calc.years": "साल",
    "calc.noSubsidy":
      "PM सूर्य घर सब्सिडी सिर्फ घरों के लिए है। व्यापार में फायदा बिल बचत और टैक्स डेप्रिसिएशन से होता है।",
    "calc.ctaWhatsapp": "WhatsApp पर सही कोटेशन लें",
    "calc.ctaSurvey": "फ्री साइट सर्वे बुक करें",
    "calc.disclaimer":
      "यह सिर्फ अनुमान है। अंतिम कीमत और सब्सिडी साइट सर्वे और मौजूदा PM सूर्य घर / राज्य नियमों पर निर्भर है।",
    "calc.empty": "अनुमान देखने के लिए बिल डालें।",
    "calc.billError": "कृपया कम से कम ₹300 का मासिक बिल डालें।",
    "calc.prefill": "महीने का बिल: {bill}। कैलकुलेटर ने {kw} kW सुझाया।",

    "contact.eyebrow": "लीड जनरेशन",
    "contact.title": "फ्री सोलर सलाह के लिए अनुरोध करें।",
    "contact.copy":
      "फॉर्म भरें, आपकी लीड स्टेटस ट्रैकिंग, सिस्टम साइज़, बजट और सोर्स डेटा के साथ एडमिन पैनल में दिखेगी।",
    "contact.chip1": "24 घंटे में कॉलबैक",
    "contact.chip2": "फ्री साइट सर्वे",
    "contact.chip3": "ROI अनुमान",
    "quote.label": "सामान्य पेबैक",
    "quote.value": "3.5 - 5 साल",
    "quote.copy": "छत के क्षेत्र, टैरिफ, नेट मीटरिंग और खपत के आधार पर।",

    "form.header": "नई सोलर पूछताछ",
    "form.headerStrong": "फ्री सलाह",
    "form.name": "पूरा नाम",
    "form.namePh": "आपका नाम",
    "form.phone": "फ़ोन नंबर",
    "form.email": "ईमेल",
    "form.property": "प्रॉपर्टी का प्रकार",
    "form.selectProperty": "प्रॉपर्टी चुनें",
    "form.home": "घर",
    "form.commercial": "कमर्शियल",
    "form.factory": "फैक्ट्री",
    "form.institution": "संस्थान",
    "form.size": "ज़रूरी सिस्टम साइज़",
    "form.selectSize": "साइज़ चुनें",
    "form.budget": "बजट रेंज",
    "form.selectBudget": "बजट चुनें",
    "form.budget1": "₹2 लाख से कम",
    "form.budget2": "₹2-5 लाख",
    "form.budget3": "₹5-10 लाख",
    "form.budget4": "₹10 लाख+",
    "form.message": "संदेश",
    "form.messagePh": "अपनी लोकेशन और बिजली बिल की राशि बताएं",
    "form.submit": "लीड बनाएं",

    "footer.tagline": "स्वच्छ ऊर्जा। स्पष्ट ट्रैकिंग। बेहतर कन्वर्ज़न।",
    "float.whatsapp": "WhatsApp पर बात करें",
    "float.call": "कॉल करें",

    "wa.general": "नमस्ते {name}, मुझे रूफटॉप सोलर में रुचि है। कृपया जानकारी दें।",
    "wa.quote":
      "नमस्ते {name}, मैंने आपका सोलर कैलकुलेटर इस्तेमाल किया।\nमहीने का बिल: {bill}\nप्रॉपर्टी: {property}\nसुझाया सिस्टम: {kw} kW\nसब्सिडी के बाद अनुमानित खर्च: {net}\nकृपया सही कोटेशन भेजें।",
  },
};

const getLang = () => (localStorage.getItem(LANG_KEY) === "hi" ? "hi" : "en");

const t = (key, vars = {}) => {
  const template = STRINGS[getLang()][key] ?? STRINGS.en[key] ?? key;
  const allVars = { name: window.SITE_CONFIG.businessName, ...vars };

  return template.replace(/\{(\w+)\}/g, (match, name) => (name in allVars ? allVars[name] : match));
};

const applyI18n = () => {
  document.documentElement.lang = getLang();
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
};

const setLang = (lang) => {
  localStorage.setItem(LANG_KEY, lang);
  applyI18n();
  document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
};
