// PM Surya Ghar + Chhattisgarh subsidy estimate. estimateSolar() is pure so it
// can be checked in isolation; the rest wires it to the #calculator section.

const MIN_BILL = 300;

const roundUpToHalf = (value) => Math.ceil(value * 2) / 2;

const estimateSolar = (monthlyBill, propertyType, settings) => {
  const isHome = propertyType === "home";
  const unitsPerMonth = monthlyBill / settings.tariffPerUnit;
  const rawKw = Math.max(1, roundUpToHalf(unitsPerMonth / settings.unitsPerKwPerMonth));
  const kw = isHome ? Math.min(rawKw, settings.maxResidentialKw) : rawKw;

  const totalCost = kw * settings.costPerKw;

  let centralSubsidy = 0;
  let stateSubsidy = 0;
  if (isHome) {
    centralSubsidy = Math.min(
      settings.centralCap,
      Math.min(kw, 2) * settings.centralPerKwFirstTwo + Math.max(0, Math.min(kw, 3) - 2) * settings.centralPerKwThird,
    );
    stateSubsidy = settings.stateSubsidy.find((tier) => kw >= tier.minKw)?.amount ?? 0;
  }

  const netCost = Math.max(0, totalCost - centralSubsidy - stateSubsidy);
  const generatedUnits = kw * settings.unitsPerKwPerMonth;
  const monthlySavings = Math.round(Math.min(unitsPerMonth, generatedUnits) * settings.tariffPerUnit);
  const paybackYears = monthlySavings > 0 ? netCost / (monthlySavings * 12) : null;

  return { isHome, kw, totalCost, centralSubsidy, stateSubsidy, netCost, monthlySavings, paybackYears };
};

const formatRupees = (amount) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);

const initCalculator = () => {
  const form = document.querySelector("#calcForm");
  if (!form) return;

  const results = document.querySelector("#calcResults");
  const emptyState = document.querySelector("#calcEmpty");
  const errorMessage = document.querySelector("#calcError");
  const settings = window.SITE_CONFIG.calculator;
  let lastEstimate = null;

  const render = () => {
    if (!lastEstimate) return;
    const { estimate } = lastEstimate;

    document.querySelector("#calcKw").textContent = `${estimate.kw} kW`;
    document.querySelector("#calcCost").textContent = formatRupees(estimate.totalCost);
    document.querySelector("#calcCentral").textContent = formatRupees(estimate.centralSubsidy);
    document.querySelector("#calcState").textContent = formatRupees(estimate.stateSubsidy);
    document.querySelector("#calcNet").textContent = formatRupees(estimate.netCost);
    document.querySelector("#calcSavings").textContent = formatRupees(estimate.monthlySavings);
    document.querySelector("#calcPayback").textContent =
      estimate.paybackYears === null ? "–" : `~${estimate.paybackYears.toFixed(1)} ${t("calc.years")}`;
    document.querySelector("#calcNoSubsidy").hidden = estimate.isHome;
    document.querySelectorAll(".subsidy-row").forEach((row) => {
      row.hidden = !estimate.isHome;
    });

    const propertyLabel = t(estimate.isHome ? "calc.home" : "calc.commercial");
    document.querySelector("#calcWhatsapp").href = whatsappLink(
      t("wa.quote", {
        bill: formatRupees(lastEstimate.bill),
        property: propertyLabel,
        kw: estimate.kw,
        net: formatRupees(estimate.netCost),
      }),
    );
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const bill = Number(form.elements.bill.value);
    const propertyType = form.elements.property.value;

    if (!Number.isFinite(bill) || bill < MIN_BILL) {
      errorMessage.textContent = t("calc.billError");
      lastEstimate = null;
      results.hidden = true;
      emptyState.hidden = false;
      return;
    }

    errorMessage.textContent = "";
    lastEstimate = { bill, propertyType, estimate: estimateSolar(bill, propertyType, settings) };
    results.hidden = false;
    emptyState.hidden = true;
    render();
  });

  // Carry the estimate into the lead form so the customer doesn't retype it.
  document.querySelector("#calcSurvey").addEventListener("click", () => {
    if (lastEstimate) prefillLeadForm(lastEstimate);
  });

  document.addEventListener("langchange", render);
};
