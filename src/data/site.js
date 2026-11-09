// Everything the club might want to change lives here: links, prices, the week, partners.

export const BOOK_URL = "https://playtomic.com/clubs/padel-padel-eltham";
export const WHATSAPP_URL = "https://chat.whatsapp.com/Ca3h0pVSukEBk0g4hngdB7";
// Playtomic: joining as a member, coaching (the Academy) and gift cards (Square)
export const MEMBERSHIP_URL = "https://playtomic.io/tenant/60baf499-42ac-4dc6-8a55-4226a50697d2";
export const ACADEMY_URL = "https://app.playtomic.io/tenant/60baf499-42ac-4dc6-8a55-4226a50697d2/academy";
export const ACTIVITIES_URL = "https://app.playtomic.io/tenant/60baf499-42ac-4dc6-8a55-4226a50697d2/activities";
export const GIFT_CARD_URL = "https://app.squareup.com/gift/MLYD9E3JD1QDG/order";
export const PLAYTOMIC_URL = "https://playtomic.com/";
// The live site's legal pages, until they move here
export const TERMS_URL = "https://padel-padel.uk/terms-and-conditions";
export const PRIVACY_URL =
  "https://assets.zyrosite.com/m6LwKaoQ93cy5Lo9/the-london-padel-club-ltd---privacy-policy-AR01yG2BrecZLMqa.pdf";

export const site = {
  name: "¡Padel Padel!",
  title: "Padel Padel",
  description:
    "London's newest padel club. Four outdoor courts, a bar and a terrace in Eltham, SE9. Everyone welcome.",
  address: "20B Well Hall Road, Eltham, London SE9 6SF",
  addressShort: "20B Well Hall Road · Eltham SE9",
  company: "The London Padel Club Ltd",
  email: "info@padel-padel.uk",
  eventsEmail: "events@padel-padel.uk",
  hours: "Daily, 7am – 11pm",
};

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/_padelpadel" },
  { label: "TikTok", href: "https://www.tiktok.com/@_padelpadel" },
  { label: "WhatsApp", href: WHATSAPP_URL },
];

export const menuMain = [
  { label: "Book a court", href: BOOK_URL },
  { label: "What's on", href: "/#whats-on" },
  { label: "Memberships", href: "/memberships/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "About", href: "/about/" },
];

export const menuMore = [
  { label: "Corporate hire", href: "/corporate-hire/" },
  { label: "Sponsorships", href: "/sponsorships/" },
  { label: "Gift cards", href: "/gift-cards/" },
  { label: "FAQs", href: "/faqs/" },
];

export const ticker = [
  "London's newest padel club",
  "Four outdoor courts",
  "A bar & terrace",
  "Eltham, SE9",
  "Everyone welcome",
];

export const plans = [
  {
    name: "Pay & play",
    price: "£7",
    unit: "from, per player",
    rows: [
      { label: "Super off-peak", note: "Mon – Thu, 7am – 12pm", price: "£7" },
      { label: "Off-peak", note: "Weekday afternoons, early weekends", price: "£9.50" },
      { label: "On-peak", note: "Evenings and weekends", price: "£12" },
    ],
    cta: "Book a court",
  },
  {
    name: "Monthly",
    price: "£30",
    unit: "a month",
    rows: [
      { label: "Priority booking", note: "14 days ahead, everyone else gets 7" },
      { label: "20% off every court" },
      { label: "15% off the bar, food and drink" },
    ],
    cta: "Join monthly",
    member: true,
  },
  {
    name: "Annual",
    price: "£300",
    unit: "a year",
    badge: "Best value · save £60",
    featured: true,
    rows: [
      { label: "Everything in monthly" },
      { label: "Free racket rental" },
      { label: "Members' socials and DJ nights", note: "Free cancellation up to 24 hours before" },
    ],
    cta: "Join annual",
    member: true,
  },
];

export const week = [
  {
    day: "Mon",
    when: "& Fri",
    name: "Coaching, all abilities",
    desc: "Group sessions with coaches who've played internationally.",
    img: "/images/glass.jpg",
    alt: "A player hitting the ball off the glass",
    cta: "Book",
    href: BOOK_URL,
  },
  {
    day: "Wed",
    when: "3.30 – 5pm",
    name: "Midweek social",
    desc: "Free entry and 50% off courts. Bring a friend.",
    img: "/images/drinks.jpg",
    alt: "Members laughing over drinks",
    cta: "Count me in",
    href: WHATSAPP_URL,
  },
  {
    day: "Fri",
    when: "4 – 5pm",
    name: "Social Americano",
    desc: "Rotating partners and live leaderboards. Improvers and intermediates alternate weeks.",
    img: "/images/rally.jpg",
    alt: "Two players mid-rally",
    cta: "Grab a spot",
    href: BOOK_URL,
  },
  {
    day: "Sat",
    when: "Morning",
    name: "Circuits for padel",
    desc: "HIIT and strength with PT Georgia. All levels, equipment provided.",
    img: "/images/circuits.jpg",
    alt: "A circuits class on court",
    cta: "Let's get fit",
    href: BOOK_URL,
  },
  {
    day: "Kids",
    when: "After school",
    name: "Kids' club, ages 8 – 11",
    desc: "Six children per group. Beginners welcome, rackets provided.",
    img: "/images/rackets.jpg",
    alt: "Padel Padel rackets",
    cta: "Book",
    href: BOOK_URL,
  },
];

// The gallery page, in order. w/h are the files' pixel sizes, so the grid holds its shape while loading.
export const gallery = [
  { src: "/images/hero-four-players.jpg", w: 1800, h: 1200, label: "Doubles", alt: "Four players mid-rally across the net" },
  { src: "/images/rally.jpg", w: 1200, h: 1800, label: "The rally", alt: "A player stretching for a low ball on the clay-coloured court" },
  { src: "/images/glass.jpg", w: 1200, h: 1800, label: "Off the glass", alt: "A player lunging for a volley beside the glass walls" },
  { src: "/images/group.jpg", w: 1200, h: 1800, label: "The club", alt: "Members gathered together on court in the sun" },
  { src: "/images/courts.jpg", w: 1800, h: 1200, label: "The courts", alt: "The courts in front of the old brick buildings in Eltham" },
  { src: "/images/rackets.jpg", w: 1200, h: 1800, label: "Club rackets", alt: "A player holding up a Padel Padel racket" },
  { src: "/images/circuits.jpg", w: 1200, h: 1800, label: "Circuits", alt: "A circuits class working out on mats on court" },
  { src: "/images/drinks.jpg", w: 1200, h: 1800, label: "After the game", alt: "Two members laughing over drinks courtside" },
  { src: "/images/terrace.jpg", w: 1200, h: 1800, label: "The terrace", alt: "The terrace with parasols and picnic tables" },
  { src: "/images/clubhouse.jpg", w: 1200, h: 1800, label: "The clubhouse", alt: "Players heading into the clubhouse and its bar" },
];

export const offCourt = [
  { label: "Chill", img: "/images/terrace.jpg", alt: "The terrace with parasols and picnic tables", pos: "40% 85%" },
  { label: "Work", img: "/images/clubhouse.jpg", alt: "The clubhouse with its bar and tables", pos: "center 88%" },
  { label: "Drink", img: "/images/drinks.jpg", alt: "Two members laughing over drinks", pos: "60% 75%" },
];

export const partners = [
  { name: "Blackheath Hospital", src: "/images/partners/blackheath-hospital.png", h: 46 },
  { name: "CALM, Campaign Against Living Miserably", src: "/images/partners/calm.png", h: 60 },
  { name: "Hyperice", src: "/images/partners/hyperice.png", h: 30 },
  { name: "XOXO", src: "/images/partners/xoxo.png", h: 60 },
  { name: "Y1", src: "/images/partners/y1.png", h: 46 },
];
