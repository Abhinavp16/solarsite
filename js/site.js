// Additions on top of app.js: language toggle, WhatsApp/call buttons and the
// calculator → lead form hand-off. Names here must not clash with app.js,
// which shares the global scope.

const whatsappLink = (text) => `https://wa.me/${window.SITE_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

// System size options in the lead form (kW).
const FORM_SIZE_OPTIONS = [3, 5, 10, 25, 50];

const budgetFor = (netCost) => {
  if (netCost < 200000) return "Under Rs 2 lakh";
  if (netCost < 500000) return "Rs 2-5 lakh";
  if (netCost < 1000000) return "Rs 5-10 lakh";
  return "Rs 10 lakh+";
};

const prefillLeadForm = ({ bill, propertyType, estimate }) => {
  const form = document.querySelector("#leadForm");

  form.elements.property.value = propertyType === "home" ? "Home" : "Commercial";
  form.elements.systemSize.value = String(FORM_SIZE_OPTIONS.find((size) => size >= estimate.kw) ?? 50);
  form.elements.budget.value = budgetFor(estimate.netCost);
  form.elements.message.value = t("calc.prefill", { bill: formatRupees(bill), kw: estimate.kw });

  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  form.elements.name.focus({ preventScroll: true });
};

const updateContactLinks = () => {
  document.querySelector("#floatWhatsapp").href = whatsappLink(t("wa.general"));
};

document.querySelector("#floatCall").href = `tel:+91${window.SITE_CONFIG.phone}`;
document.querySelector("#langToggle").addEventListener("click", () => {
  setLang(getLang() === "en" ? "hi" : "en");
});
document.addEventListener("langchange", updateContactLinks);

if (getLang() === "hi") applyI18n();
updateContactLinks();
initCalculator();
