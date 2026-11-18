window.CLINIC_CONFIG = {
  // Brand & Visuals
  clinicName: "LuminaDental",
  logoUrl: "", // Leave empty to use a clean inline SVG tooth/smile icon + clinicName text, or paste image path/URL
  primaryColor: "#1b3957",
  accentColor: "#1f9d97",
  heroImageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
  locationTagline: "Painless Sanctuary Dentistry • Boston & Metro",

  // Contact & Lead Routing
  displayPhone: "+1 (800) 586-4621",
  smsAndCallNumber: "+18005864621", // Raw E.164 format for tel: and sms: links
  frontDeskEmail: "care@luminadental.example.com",
  bookingUrl: "", // Optional Calendly/NexHealth URL; if empty, uses SMS/modal booking

  // Clinic Address & Hours
  address: "120 Newbury Street, Suite 400, Boston, MA 02116",
  hours: "Mon–Fri: 8:00 AM – 6:00 PM | Sat: 9:00 AM – 2:00 PM",
  emergencyBannerText: "24/7 Emergency Dental: Severe tooth pain, broken crown or trauma? Immediate priority slot in under 60 mins.",

  map: {
    imageUrl: "",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=120+Newbury+Street+Boston+MA+02116",
    parkingBadgeLabel: "Complimentary Valet Station",
    parkingBadgeDetail: "Gate B"
  },

  // Lead Doctor Profile
  leadDoctor: {
    name: "Dr. Elena Vance, DDS",
    title: "Chief Implantologist & Cosmetic Dentist",
    nextAvailableSlot: "Today at 2:30 PM",
    badgeText: "Pain-Free Tech • Laser & Gentle Sedation"
  },

  // Trust & Social Proof
  trustStats: {
    rating: "4.9/5",
    reviewCount: "1,400+ Reviews",
    certification: "ADA Certified Clinic",
    award: "Top Dental Practice 2026"
  },

  // Insurance & Calculator Pricing (USD)
  acceptedInsurancePlaceholder: "e.g. Delta, Cigna, MetLife, Aetna",
  procedures: {
    cleaning: { label: "Routine Dental Cleaning & Diagnostic X-Rays", min: 149, max: 220, perUnit: false },
    whitening: { label: "Teeth Whitening (In-Office Laser)", min: 350, max: 650, perUnit: false },
    filling: { label: "Tooth-Colored Composite Filling", min: 180, max: 350, perUnit: true },
    crown: { label: "Porcelain Crown", min: 1100, max: 1600, perUnit: true },
    rootCanal: { label: "Root Canal Therapy", min: 900, max: 1400, perUnit: true },
    implant: { label: "Single Dental Implant", min: 3000, max: 4800, perUnit: true }
  },

  concierge: {
    enabled: true,
    welcomeMessage: "",
    responseTimeText: "Typically replies instantly"
  }
};

window.CLINIC_PRESETS = {
  brightsmile: {
    clinicName: "Bright Smile Dental",
    logoUrl: "",
    heroImageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
    locationTagline: "Friendly Family Dentistry • San Francisco",
    displayPhone: "+1 (800) 555-0101",
    smsAndCallNumber: "+18005550101",
    address: "123 Market Street, San Francisco, CA 94105",
    map: { googleMapsUrl: "" },
    leadDoctor: {
      name: "Dr. Maya Chen, DDS",
      title: "Lead Dentist & Family Care Specialist",
      nextAvailableSlot: "Tomorrow at 10:00 AM",
      badgeText: "Gentle Care • Modern Dentistry"
    }
  },

  "clarksdale-family": {
    clinicName: "Clarksdale Family Dentistry",
    locationTagline: "Painless Sanctuary Dentistry • Clarksdale, MS",
    displayPhone: "(662) 624-6862",
    smsAndCallNumber: "+16626246862",
    address: "632 Friars Point Rd, Clarksdale, MS 38614",
    hours: "Open 24 Hours Daily",
    leadDoctor: { name: "Family Dentistry" }
  },

  "davis-family-pinebluff": {
    clinicName: "Davis Family Dentistry",
    locationTagline: "Painless Sanctuary Dentistry • Pine Bluff, AR",
    displayPhone: "(870) 879-4870",
    smsAndCallNumber: "+18708794870",
    address: "4100 W 28th Ave, Pine Bluff, AR 71603",
    hours: "Mon–Thu: 8:00 AM – 5:00 PM",
    leadDoctor: { name: "Dr. Davis" }
  },

  "arkansas-dental-sheridan": {
    clinicName: "Arkansas Dental Centers",
    locationTagline: "Painless Sanctuary Dentistry • Sheridan, AR",
    displayPhone: "(870) 942-2822",
    smsAndCallNumber: "+18709422822",
    address: "1310 S Rock St, Sheridan, AR 72150",
    hours: "Mon–Wed: 8am–5pm, Thu: 8am–4pm, Fri: 8am–2pm",
    leadDoctor: { name: "Dr.Brandon Mann" }
  }
};

(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const pathSlug = window.location.pathname.replace(/^\/|\/$/g, '');
  const clientSlug = urlParams.get('client') || (pathSlug && !pathSlug.includes('.') ? pathSlug : '');
  const preset = Object.prototype.hasOwnProperty.call(window.CLINIC_PRESETS, clientSlug)
    ? window.CLINIC_PRESETS[clientSlug]
    : null;

  if (!preset) return;

  const mergeConfig = (target, source) => {
    Object.keys(source).forEach(key => {
      const value = source[key];
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        const existing = target[key];
        target[key] = mergeConfig(
          existing && typeof existing === 'object' && !Array.isArray(existing) ? existing : {},
          value
        );
      } else {
        target[key] = value;
      }
    });
    return target;
  };

  mergeConfig(window.CLINIC_CONFIG, preset);
})();

// Custom URLs: append the query string to the deployed site URL.
// ?client=clarksdale-family
// ?client=arkansas-dental-sheridan
// ?client=davis-family-pinebluff
