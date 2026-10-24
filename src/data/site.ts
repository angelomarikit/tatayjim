export type InquiryType =
  | "Product Inquiry"
  | "Membership Inquiry"
  | "Reseller Inquiry"
  | "General Inquiry";

export type Product = {
  id: string;
  name: string;
  short: string;
  price: number;
  priceLabel: string;
  image: string;
  summary: string;
  facts: string[];
  chips: string[];
  note: string;
  index: string;
};

export const brand = {
  name: "Tatay Jim's Herbal Natural",
  company: "Greenwealth Naturals",
  tagline: "Love green and live a wealthy life.",
  logo: "/assets/tatay-jim/derived/brand-logo.png",
  contactPerson: "Jimmy Embalsado",
  email: "embalsado.jimmy01@gmail.com",
  phone: "09656571545",
  phoneLabel: "0965 657 1545",
  address: ["P2b,", "Barangay,", "Davao-de-oro,", "Philippines"],
};

export const earningsDisclosure =
  "Earnings depend on actual sales, applicable commissions, and company program terms. No income is guaranteed.";

export const products: Product[] = [
  {
    id: "liniment",
    name: "Tatay Jim's Herbal Liniment",
    short: "Herbal Liniment",
    price: 150,
    priceLabel: "₱150",
    image: "/assets/tatay-jim/herbal-liniment.jpg",
    index: "01",
    summary:
      "A topical herbal liniment from Greenwealth Naturals, presented for comfort and massage.",
    facts: [
      "Topical product",
      "Presented in brand materials for comfort and massage",
      "Manufactured for and distributed by Greenwealth Naturals",
      "Price shown for inquiry: ₱150",
    ],
    chips: ["Topical", "Herbal", "Massage"],
    note: "Promotional artwork mentions comfort-related uses. Those lines are not repeated here as clinical proof. Follow the product label.",
  },
  {
    id: "magnesium",
    name: "Tatay Jim's Magnesium Therapy Oil",
    short: "Magnesium Therapy Oil",
    price: 250,
    priceLabel: "₱250",
    image: "/assets/tatay-jim/magnesium-therapy-oil.jpg",
    index: "02",
    summary:
      "A magnesium oil from Greenwealth Naturals. The label and marketing emphasize magnesium and wellness-related use.",
    facts: [
      "Magnesium oil",
      "Wellness-related positioning on the supplied label",
      "Manufactured for and distributed by Greenwealth Naturals",
      "Price shown for inquiry: ₱250",
    ],
    chips: ["Magnesium", "Oil", "Read the label"],
    note: "The supplied label lists general wellness statements. They are not presented on this page as proven health effects.",
  },
  {
    id: "cleanser",
    name: "Tatay Jim's Bio-Cleanser Alkaline Drops with Aloe Vera Extract",
    short: "Bio-Cleanser Alkaline Drops",
    price: 250,
    priceLabel: "₱250",
    image: "/assets/tatay-jim/bio-cleanser-alkaline-drops.jpg",
    index: "03",
    summary:
      "A personal-care drop formula. Promotional materials list aloe vera extract, virgin coconut oil, and trace minerals.",
    facts: [
      "Aloe vera extract",
      "Virgin coconut oil",
      "Trace minerals — the poster also prints “Trade Minerals (From Salt Lake, Utah, USA)”",
      "Price shown for inquiry: ₱250",
    ],
    chips: ["Aloe vera", "Coconut oil", "Trace minerals"],
    note: "Use the product only as the label directs. This page does not describe it as a treatment.",
  },
];

export const packages = [
  {
    id: "members",
    name: "Members Package",
    bottles: "10 bottles",
    price: "₱1,000",
    detail: "Stated suggested retail price: ₱150 per bottle.",
    includes: ["Membership ID", "Flyer", "Optional head cap"],
    inquiry: "Membership Inquiry" as InquiryType,
    cta: "Ask About Membership",
  },
  {
    id: "reseller",
    name: "Reseller Package",
    bottles: "30 bottles",
    price: "₱2,850",
    detail: "A larger bottle package for people asking about the reseller program.",
    includes: ["Membership ID", "Flyers", "One free head cap"],
    inquiry: "Reseller Inquiry" as InquiryType,
    cta: "Apply as Reseller",
  },
];

export const programPoints = [
  "Direct selling",
  "Direct sponsoring bonus — 10%",
  "Leadership bonus — 5% up to the fifth level",
  "Repeat sales commission — 5% up to the fifth level",
  "Other incentives",
];

export const steps = [
  {
    index: "/01",
    title: "Choose Your Product",
    body: "Start with Herbal Liniment, Magnesium Therapy Oil, or Bio-Cleanser Alkaline Drops.",
  },
  {
    index: "/02",
    title: "Read the Label",
    body: "Check the bottle you have. Directions, cautions, and ingredients belong on the label.",
  },
  {
    index: "/03",
    title: "Follow Product Instructions",
    body: "Use the product only as its own instructions say. This page does not add amounts or schedules.",
  },
];

export const stats = [
  { value: 3, prefix: "", suffix: "", label: "products in the collection" },
  { value: 150, prefix: "₱", suffix: "", label: "starting price for Herbal Liniment" },
  { value: 10, prefix: "", suffix: "", label: "bottles in the Members Package" },
  { value: 30, prefix: "", suffix: "", label: "bottles in the Reseller Package" },
];

export const faqs = [
  {
    q: "What is Tatay Jim's Herbal Natural?",
    a: "It is a collection of herbal and personal-care products from Greenwealth Naturals. The tagline is “Love green and live a wealthy life.”",
  },
  {
    q: "What products are available?",
    a: "Tatay Jim's Herbal Liniment at ₱150, Tatay Jim's Magnesium Therapy Oil at ₱250, and Tatay Jim's Bio-Cleanser Alkaline Drops with Aloe Vera Extract at ₱250. Prices are shown so you can inquire. This page does not sell them online.",
  },
  {
    q: "How can I inquire about a product?",
    a: "Use the contact form and choose Product Inquiry, call 0965 657 1545, or email embalsado.jimmy01@gmail.com. The form opens your email app addressed to Jimmy Embalsado. It does not store the message on this website.",
  },
  {
    q: "How do I become a member?",
    a: "Read the Members Package and Reseller Package, then send a Membership Inquiry or Reseller Inquiry through the contact form. This page does not take applications or payment online.",
  },
  {
    q: "What is included in the Members Package?",
    a: "10 bottles for ₱1,000. The stated suggested retail price is ₱150 per bottle. The poster lists a Membership ID, a flyer, and an optional head cap.",
  },
  {
    q: "What is included in the Reseller Package?",
    a: "30 bottles for ₱2,850. The poster lists a Membership ID, flyers, and one free head cap.",
  },
  {
    q: "Are earnings guaranteed?",
    a: "No. Earnings depend on actual sales, applicable commissions, and company program terms. No income is guaranteed.",
  },
  {
    q: "How can I contact Greenwealth Naturals?",
    a: "Jimmy Embalsado, 0965 657 1545, embalsado.jimmy01@gmail.com. The address supplied is P2b, Barangay, Davao-de-oro, Philippines. Business hours and a map location have not been provided.",
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Our Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Membership", href: "#membership" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const inquiryTypes: InquiryType[] = [
  "Product Inquiry",
  "Membership Inquiry",
  "Reseller Inquiry",
  "General Inquiry",
];
