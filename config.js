// Settings for the WhatsApp/call buttons and the subsidy calculator.

window.SITE_CONFIG = {
  businessName: "HelioGrid Solar",

  // phone is used for tel: links, whatsapp is country code + number.
  phone: "8839439024",
  whatsapp: "918839439024",

  calculator: {
    tariffPerUnit: 6.5, // ₹ per unit, average CSPDCL domestic
    costPerKw: 60000, // ₹ per kW installed, before subsidy
    unitsPerKwPerMonth: 120, // ~4 units/kW/day in Chhattisgarh
    maxResidentialKw: 10,
    // PM Surya Ghar central subsidy (homes only): ₹30k/kW for the first
    // 2 kW, ₹18k for the 3rd kW, capped at ₹78k.
    centralPerKwFirstTwo: 30000,
    centralPerKwThird: 18000,
    centralCap: 78000,
    // Chhattisgarh state top-up. Verify current rates before going live.
    stateSubsidy: [
      { minKw: 2, amount: 30000 },
      { minKw: 1, amount: 15000 },
    ],
  },
};
