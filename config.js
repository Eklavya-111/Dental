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
  },
  "polk-dental-richland": {
    clinicName: "Polk Dental Center",
    locationTagline: "Compassionate Family Dentistry • Richland, MS",
    displayPhone: "(601) 932-0606",
    smsAndCallNumber: "+16019320606",
    address: "150 Scarbrough St, Richland, MS 39218",
    hours: "Mon–Tue: 8am–4:30pm, Wed: 8:30am–4:30pm, Thu: 8am–4:30pm",
    leadDoctor: { name: "Dr. Jason & Dr. Lexi Polk, DMD" }
  },
  "mark-owens-pearl": {
    clinicName: "Mark Family Dentistry",
    locationTagline: "Trusted Family Dental Care • Pearl, MS",
    displayPhone: "(601) 939-2377",
    smsAndCallNumber: "+16019392377",
    address: "642 S Pearson Rd, Pearl, MS 39208",
    hours: "Mon–Fri: 8am–5pm, Sat–Sun: Closed",
    leadDoctor: { name: "Dr. R. Mark Owens, DMD" }
  },
  "george-stacey-gadsden": {
    clinicName: "George Family Dentistry",
    locationTagline: "Modern Family Dentistry • Gadsden, AL",
    displayPhone: "(256) 546-4947",
    smsAndCallNumber: "+12565464947",
    address: "938 Forrest Ave, Gadsden, AL 35901",
    hours: "Mon–Fri: 8am–5pm, Sat–Sun: Closed",
    leadDoctor: { name: "Dr. George C. Stacey Jr., DMD" }
  },
  "rex-wilson-gadsden": {
    clinicName: "Rex Family Dentistry",
    locationTagline: "Complete Dental Care • Gadsden, AL",
    displayPhone: "(256) 543-9046",
    smsAndCallNumber: "+12565439046",
    address: "522 Walnut St, Gadsden, AL 35901",
    hours: "Mon–Fri: 8am–5pm, Sat–Sun: Closed",
    leadDoctor: { name: "Dr. Rex R. Wilson, DMD" }
  },
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
