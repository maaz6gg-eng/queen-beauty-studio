export const BRAND = {
  name: "Queen Beauty Studio",
  taglines: ["Your Beauty Our Priority", "Beauty + Confidence + You", "Look Good Feel Better"],
  phoneDisplay: "0303 7290242",
  phoneTel: "tel:+923037290242",
  whatsappNumber: "923037290242",
  whatsappLink: "https://wa.me/923037290242",
  location: "Kot Abdul Malik, Lahore, Pakistan",
  mapsSearch: "Kot Abdul Malik Lahore Pakistan",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Kot+Abdul+Malik+Lahore+Pakistan",
  mapsEmbed: "https://www.google.com/maps?q=Kot%20Abdul%20Malik%20Lahore%20Pakistan&z=12&output=embed",
};

export const HOURS = [
  { days: "Monday – Saturday", time: "10:00 AM – 9:00 PM" },
  { days: "Sunday", time: "11:00 AM – 7:00 PM" },
];

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const imageUrl = (id, w) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

export const img = (id, w = 1200) => imageUrl(id, w);

export const rawId = (url) => `photo-${url.split("/photo-")[1].split("?")[0]}`;

export const pkr = (n) => `Rs. ${n.toLocaleString("en-US")}`;

export const fireWhatsapp = ({ name, phone, service, date, time, notes }) => {
  const lines = [
    "*Queen Beauty Studio — Booking Request*",
    `Name: ${name || "-"}`,
    `Phone: ${phone || "-"}`,
    `Service: ${service || "-"}`,
    `Date: ${date || "-"}`,
    `Time: ${time || "-"}`,
  ];
  if (notes) lines.push(`Notes: ${notes}`);
  const message = lines.join("\n");
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const CATEGORIES = [
  {
    id: "makeup",
    name: "Makeup",
    short: "Makeup",
    tagline: "From soft glam to royal bridal artistry",
    image: img("photo-1487412947147-5cebf100ffc2"),
    description:
      "Our makeup artists sculpt looks that photograph beautifully and last from the first ritual to the final dance. Every face is treated as a canvas — colour-matched, perfected and set to glow for hours.",
    include: [
      "Long-wear, HD & camera-ready finish",
      "Skin-matched undertones and lashes",
      "Setting spray and touch-up guidance",
      "Punctual, fully-equipped bridal artists",
    ],
    procedure: [
      "Consultation, skin prep and face massage",
      "Base build — Foundation, concealer and contouring",
      "Eye artistry — shadow, liner and lashes",
      "Brows, blush and lip perfection",
      "Setting spray and final styling touch-ups",
    ],
    aftercare: [
      "Keep your look intact for the event — blot, don't rub",
      "Refresh with a light mist of setting spray when needed",
      "Remove gently with a balm cleanser at night",
      "Follow with a hydrating mask to reset the skin",
    ],
    items: [
      {
        id: "party-makeup",
        name: "Party Makeup",
        price: 2000,
        duration: "1.5 hrs",
        blurb: "Soft-glam party ready look with flawless base and radiant finish.",
      },
      {
        id: "mehndi-makeup",
        name: "Mehndi Makeup",
        price: 4000,
        duration: "2 hrs",
        blurb: "Fresh, golden-toned celebration glam made for the mehndi floor.",
      },
      {
        id: "bridal-first-day",
        name: "Bridal First Day",
        price: 12000,
        duration: "3.5 hrs",
        blurb: "Complete bridal artistry for your big day — elegant, dewy and long-wear.",
      },
      {
        id: "walima-makeup",
        name: "Walima Makeup",
        price: 9000,
        duration: "3 hrs",
        blurb: "Romantic high-glamour look designed for the walima spotlight.",
      },
      {
        id: "bridal-first-day-package",
        name: "Bridal First Day Package",
        price: 15000,
        duration: "Full day",
        blurb: "The complete royal treatment — bridal makeup, hair styling and touch-up care.",
        featured: true,
        badge: "Signature",
      },
    ],
  },
  {
    id: "facial",
    name: "Facial",
    short: "Facial",
    tagline: "Deep-cleansed, luminous, indulgent skin",
    image: img("photo-1570172619644-dfd03ed5d881"),
    description:
      "A bespoke facial ritual that detoxifies, brightens and feeds the skin with premium actives. Every session ends with a hot-towel massage and a finish that lingers long after you leave the chair.",
    include: [
      "Deep cleanse with premium skincare staples",
      "Brightens and evens skin tone",
      "Relaxing hot towel and face massage therapy",
      "Suitable for all skin types",
    ],
    procedure: [
      "Skin analysis, cleanse and tone",
      "Gentle exfoliation and enzymatic polish",
      "Steam and painless extraction",
      "Active treatment mask application",
      "Massage, hydrator and SPF finish",
    ],
    aftercare: [
      "Skip heavy makeup for 24 hours so skin can breathe",
      "Avoid direct sun and use SPF daily",
      "Hydrate well and apply moisturiser morning and night",
      "No harsh scrubs for 48 hours after your facial",
    ],
    items: [
      {
        id: "whitening-facial",
        name: "Whitening Facial",
        price: 1000,
        duration: "1 hr",
        blurb: "Brightening facial that restores a clear, even-toned glow.",
      },
      {
        id: "herbal-facial",
        name: "Herbal Facial",
        price: 1500,
        duration: "1.5 hrs",
        blurb: "Botanical-powered treatment to calm, purify and rejuvenate.",
      },
      {
        id: "medicated-facial",
        name: "Medicated Facial",
        price: 1600,
        duration: "1.5 hrs",
        blurb: "Therapist-guided facial for acne, blemish and pigment concerns.",
      },
      {
        id: "whitening-medicated-facial",
        name: "Whitening with Medicated",
        price: 2000,
        duration: "1.5 hrs",
        blurb: "Whitening and medicated care combined for stubborn tone issues.",
      },
      {
        id: "johnson-facial",
        name: "Johnson Facial",
        price: 3500,
        duration: "1.5 hrs",
        blurb: "Our premium Johnson lifting facial — total radiance and firmness.",
      },
    ],
  },
  {
    id: "hair",
    name: "Hair Treatment",
    short: "Hair",
    tagline: "Silk-smooth, glossy, healthier hair",
    image: img("photo-1562322140-8baeececf3df"),
    description:
      "From frizz-free smoothness to rich, glass-like shine, our hair rituals use professional brands to transform tired hair into a crown you never want to take off.",
    include: [
      "Premium professional salon brands",
      "Lasting frizz-smoothing results",
      "Comfortable, well-timed service",
      "Finished with luxe styling and guidance",
    ],
    procedure: [
      "Hair analysis, wash and deep cleanse",
      "Mid-shaft blow-dry preparation",
      "Treatment serum applied section by section",
      "Heat sealing for a glass-smooth finish",
      "Mask finish, gloss and salon styling",
    ],
    aftercare: [
      "Avoid washing your hair for 48–72 hours",
      "Use sulphate-free shampoo and lukewarm water",
      "Skip tight styles while the treatment settles",
      "Book a top-up in 6–8 weeks to maintain the shine",
    ],
    items: [
      {
        id: "hair-polisher",
        name: "Hair Polisher",
        price: 2000,
        duration: "1.5 hrs",
        blurb: "Instant shine, softness and friction-fighting polish.",
      },
      {
        id: "blowout",
        name: "Luxury Blowout",
        price: 5000,
        duration: "1 hr",
        blurb: "Voluminous, salon-perfect blow-dry for events and everyday glam.",
      },
      {
        id: "keratin-treatment",
        name: "Keratin Treatment",
        price: 10000,
        duration: "2.5 hrs",
        blurb: "Signature frizz-free smoothness that lasts for months.",
      },
      {
        id: "xtenso-treatment",
        name: "Xtenso",
        price: 12000,
        duration: "3 hrs",
        blurb: "Ultimate density, softness and elasticity for fine, damaged hair.",
      },
      {
        id: "keratin-with-xtenso",
        name: "Keratin with Xtenso",
        price: 15000,
        duration: "3.5 hrs",
        blurb: "Our double crown ritual — maximum smoothness with intense repair.",
        featured: true,
        badge: "Signature",
      },
    ],
  },
  {
    id: "mani-pedi",
    name: "Manicure & Pedicure",
    short: "Nails",
    tagline: "Polished hands, pampered feet",
    image: img("photo-1632345031435-8727f6897d53"),
    description:
      "A luxurious hand and foot ritual that buffs, softens and shines. Single-use hygienic kits, therapeutic soaks and a finish that lasts from the salon to your next celebration.",
    include: [
      "Hygienic, single-use service kits",
      "Shaping, cuticle and polish care",
      "Therapeutic soak and massage",
      "Long-lasting, chip-resistant finish",
    ],
    procedure: [
      "Soak, sanitise and soften",
      "Nail shaping and cuticle care",
      "Buffing and gentle exfoliation",
      "Mask, polish or paraffin application",
      "Moisturising massage and gloss finish",
    ],
    aftercare: [
      "Keep nails dry for a few hours after service",
      "Massage cuticle oil in every evening",
      "Skip using nails as tools for long wear",
      "Wear gloves for household chores",
    ],
    items: [
      {
        id: "whitening-manicure",
        name: "Whitening Manicure & Pedicure",
        price: 1500,
        duration: "1.5 hrs",
        blurb: "Bright, clean hands and feet with whitening care.",
      },
      {
        id: "medicated-manicure",
        name: "Medicated Manicure & Pedicure",
        price: 2000,
        duration: "1.75 hrs",
        blurb: "Targeted care for fungal, dry or sensitive nail concerns.",
      },
      {
        id: "paraffin-manicure",
        name: "Paraffin Manicure & Pedicure",
        price: 4000,
        duration: "2 hrs",
        blurb: "Deep-conditioning paraffin therapy for silky-soft hands and feet.",
      },
    ],
  },
  {
    id: "waxing",
    name: "Waxing",
    short: "Waxing",
    tagline: "Smooth, silky, confident skin",
    image: img("photo-1519823551278-64ac92734fb1"),
    description:
      "Gentle, low-pain waxing using dermatologically safe waxes — from quick touch-ups to full-body smoothness. Choose classic, fruit or medicated wax for your skin type.",
    include: [
      "Gentle, low-pain technique",
      "Dermatologically safe waxes",
      "Fruit & medicated wax options",
      "Soothing after-wax care",
    ],
    procedure: [
      "Patch test and gentle cleansing",
      "Light talcing for comfort",
      "Wax applied and removed in one swift motion",
      "Precision removal in fine sections",
      "Soothing lotion and calming finish",
    ],
    aftercare: [
      "Avoid sun exposure and hot showers for 24 hours",
      "Exfoliate gently after 48 hours",
      "Moisturise daily to keep skin soft",
      "Skip perfumed products right after waxing",
    ],
    items: [
      {
        id: "half-arms",
        name: "Half Arms Waxing",
        price: 300,
        duration: "20 min",
        blurb: "Quick, clean smoothness for the lower arms.",
      },
      {
        id: "half-legs",
        name: "Half Legs Waxing",
        price: 500,
        duration: "30 min",
        blurb: "Silky smoothness from knee to ankle.",
      },
      {
        id: "full-arms",
        name: "Full Arms Waxing",
        price: 500,
        duration: "30 min",
        blurb: "Complete arm smoothness in one sitting.",
      },
      {
        id: "full-legs",
        name: "Full Legs Waxing",
        price: 1000,
        duration: "45 min",
        blurb: "Total leg smoothness with a soothing finish.",
      },
      {
        id: "face-wax",
        name: "Face Waxing",
        price: 800,
        duration: "20 min",
        blurb: "Delicate, precise facial hair removal.",
      },
      {
        id: "fruit-wax",
        name: "Fruit Waxing",
        price: 1000,
        duration: "30 min",
        blurb: "Gentle fruit-based wax for sensitive skin.",
      },
      {
        id: "medicated-wax",
        name: "Medicated Waxing",
        price: 1500,
        duration: "30 min",
        blurb: "Soothing medicated wax for irritation-prone skin.",
      },
      {
        id: "body-wax",
        name: "Body Waxing",
        price: 5000,
        duration: "2 hrs",
        blurb: "The full-body ritual for head-to-toe smoothness.",
      },
    ],
  },
  {
    id: "threading",
    name: "Threading",
    short: "Threading",
    tagline: "Arched, precise, timeless brows",
    image: img("photo-1559599101-f09722fb4948"),
    description:
      "Time-tested, precise threading that shapes brows and refines the face with zero harsh chemicals. Quick, clean and gentle on every skin tone.",
    include: [
      "Precise, symmetrical shaping",
      "Quick and virtually pain-free",
      "Gentle on all skin tones",
      "Soothing after-care gel",
    ],
    procedure: [
      "Brow consultation and arch mapping",
      "Precise thread detailing",
      "Forehead and upper-lip refinement",
      "Face-thread finishing pass",
      "Soothing aloe and serum application",
    ],
    aftercare: [
      "Wash gently and apply toner or sunscreen",
      "Avoid touching freshly threaded areas",
      "Moisturise daily to prevent irritation",
      "Return in 2–3 weeks for upkeep",
    ],
    items: [
      {
        id: "eyebrow-threading",
        name: "Eyebrow Threading",
        price: 150,
        duration: "10 min",
        blurb: "Perfectly mapped, symmetrical brow shaping.",
      },
      {
        id: "upper-lips",
        name: "Upper Lips",
        price: 70,
        duration: "5 min",
        blurb: "Quick, clean upper-lip refinement.",
      },
      {
        id: "forehead-threading",
        name: "Forehead",
        price: 70,
        duration: "5 min",
        blurb: "Smooth, fresh forehead finish.",
      },
      {
        id: "face-threading",
        name: "Face Threading",
        price: 500,
        duration: "30 min",
        blurb: "Complete facial hair removal, gently done.",
      },
    ],
  },
];

export const ALL_SERVICES = CATEGORIES.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, category: cat }))
);

export const findService = (id) => ALL_SERVICES.find((s) => s.id === id);

export const featuredPackages = CATEGORIES.flatMap((cat) =>
  cat.items
    .filter((item) => item.featured)
    .map((item) => ({ ...item, category: cat }))
);

export const WHY_US = [
  {
    icon: "award",
    title: "Certified Experts",
    text: "Trained artists and therapists who treat every face and every strand with precision and devotion.",
  },
  {
    icon: "gem",
    title: "Premium Products",
    text: "We work only with trusted, skin-friendly professional brands — nothing cheap touches your skin.",
  },
  {
    icon: "shield",
    title: "Hygienic Environment",
    text: "Single-use kits, sterilised tools and a spotless studio so your care is as safe as it is beautiful.",
  },
  {
    icon: "crown",
    title: "Custom Bridal Care",
    text: "Dedicated bridal packages tailored to your look, your outfit and your once-in-a-lifetime day.",
  },
];

export const PROCESS = [
  {
    step: "01",
    icon: "messages",
    title: "Consultation",
    text: "We listen first. Your skin type, hair texture, occasion and vision shape everything that comes next.",
  },
  {
    step: "02",
    icon: "sparkles",
    title: "Signature Treatment",
    text: "Luxury products, expert hands and unhurried care deliver a result that feels as good as it looks.",
  },
  {
    step: "03",
    icon: "heart",
    title: "Aftercare & Glow",
    text: "You leave with aftercare rituals and our number — your glow is our ongoing priority.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ayesha Khan",
    service: "Bridal First Day Package",
    rating: 5,
    text: "The bridal package made me feel like royalty in the mirror. Even at 2am after the whole wedding, my makeup still looked fresh. Worth every rupee.",
  },
  {
    name: "Fatima Raza",
    service: "Keratin with Xtenso",
    rating: 5,
    text: "My hair had never felt so soft. It has been three months and the frizz simply never came back. The team is so gentle and professional.",
  },
  {
    name: "Maryam Sheikh",
    service: "Whitening Medicated Facial",
    rating: 5,
    text: "After two sessions my skin tone is so even and bright. They explained every step and used only premium products. I feel completely safe here.",
  },
  {
    name: "Zainab Tariq",
    service: "Walima Makeup",
    rating: 5,
    text: "I got compliments all night at my walima. The artist understood my outfit colours perfectly and my look photographed beautifully.",
  },
  {
    name: "Hina Aslam",
    service: "Paraffin Manicure",
    rating: 4,
    text: "The paraffin treatment left my hands embarrassingly soft! Beautiful, calm studio and very hygienic. Booking again with my sister soon.",
  },
];

export const GALLERY = [
  { src: img("photo-1583939003579-730e3918a45a", 900), caption: "Bridal updo artistry", span: "sm:col-span-2 sm:row-span-2" },
  { src: img("photo-1487412947147-5cebf100ffc2", 700), caption: "Perfect base, camera-ready" },
  { src: img("photo-1596178065887-1198b6148b2b", 700), caption: "Glow-boosting facial rituals" },
  { src: img("photo-1632345031435-8727f6897d53", 700), caption: "Signature nail care" },
  { src: img("photo-1562322140-8baeececf3df", 900), caption: "Hair transformations" },
];

export const BEFORE_AFTER = {
  before: img("photo-1522335789203-aabd1fc54bc9", 1000),
  after: img("photo-1583939003579-730e3918a45a", 1000),
};

export const STATS = [
  { value: "10+", label: "Years of Craft" },
  { value: "5,000+", label: "Happy Clients" },
  { value: "25+", label: "Signature Services" },
  { value: "4.9", label: "Average Rating" },
];

export const ABOUT_VALUES = [
  {
    icon: "shield",
    title: "Hygiene First",
    text: "Sterilised tools, fresh towels and single-use kits for every single client — no exceptions, ever.",
  },
  {
    icon: "gem",
    title: "Products You Can Trust",
    text: "We stock only professional, skin-friendly brands so your investment shows up in your skin and hair.",
  },
  {
    icon: "sparkles",
    title: "Artistry in Every Touch",
    text: "Every brow, base and blow-dry is finished with the eye of an artist, not just a technician.",
  },
  {
    icon: "crown",
    title: "Every Woman Is Royal",
    text: "We built this studio around the belief that every woman deserves luxury care at a fair price.",
  },
];

export const ABOUT_GALLERY = [
  img("photo-1580618672591-eb180b1a973f", 900),
  img("photo-1521590832167-7bcbfaa6381f", 900),
  img("photo-1600948836101-f9ffda59d250", 900),
  img("photo-1540555700478-4be289fbecef", 900),
];

export const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
];