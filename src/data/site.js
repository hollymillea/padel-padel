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
      { label: "Off-peak", note: "Mon – Thu 12 – 5pm, Fri 7am – 5pm, weekends 7 – 8am", price: "£9.50" },
      { label: "On-peak", note: "Mon – Fri 5 – 11pm, weekends 8am – 11pm", price: "£12" },
    ],
    cta: "Book a court",
  },
  // Monthly and annual members get the same perks; annual is two months free
  {
    name: "Monthly",
    price: "£30",
    unit: "a month",
    rows: [
      { label: "Book 14 days ahead", note: "Everyone else gets 7" },
      { label: "20% off your share of every court" },
      { label: "15% off the bar, food and drink" },
      { label: "Free racket rental", note: "And free cancellation up to 24 hours before" },
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
      { label: "Every member perk" },
      { label: "Two months free", note: "£300 for the year instead of £360" },
      { label: "Members' Americanos, DJ events and leagues" },
    ],
    cta: "Join annual",
    member: true,
  },
];

// What's on: the weekly sessions, then dated events (event: true, shown under "One-off events").
// Photos are the live site's own, in /images/whats-on.
// Update the dated events as they pass.
export const week = [
  {
    day: "Mon & Fri",
    when: "",
    name: "Coaching, all abilities",
    desc: "A full programme of sessions for every level, with coaches who've played internationally and rank in the UK top 100.",
    img: "/images/whats-on/coaching.jpg",
    alt: "A player in white trainers holding a Padel Padel racket on court",
    pos: "center 40%",
    cta: "Book",
    href: ACADEMY_URL,
  },
  {
    day: "Wed",
    when: "3.30 – 5pm",
    name: "Social Americano",
    desc: "Meet new people in a fast, rotating game format with live leaderboards. Improvers and intermediates alternate weeks.",
    img: "/images/whats-on/americano.jpg",
    alt: "Players holding up Padel Padel rackets",
    pos: "center 35%",
    cta: "Grab a spot",
    href: ACTIVITIES_URL,
  },
  {
    day: "Fri",
    when: "4 – 5pm",
    name: "Kids' club, ages 8 – 11",
    desc: "Fun, friendly group coaching after school. Six children per group, and beginners are welcome.",
    img: "/images/whats-on/kids.jpg",
    alt: "A coach playing padel with a group of children",
    pos: "62% center",
    cta: "Book",
    href: "https://app.playtomic.com/lesson_class/331b40e0-db8c-4034-997b-d8c35a1063d4",
  },
  {
    day: "Sat",
    when: "28 Nov",
    name: "Christmas at the club",
    desc: "Food, mulled wine and festive activities, plus 50% off courts all day and evening. Free entry, and everyone's welcome, playing or not.",
    img: "/images/whats-on/christmas.jpg",
    alt: "Duy and Joe in Santa hats, making a heart with their hands",
    cta: "Join the WhatsApp",
    href: WHATSAPP_URL,
    pos: "center 30%",
    event: true,
  },
  {
    day: "Sat",
    when: "5 Dec",
    name: "Circuits for padel fitness",
    desc: "Full-body HIIT and strength with PT Georgia, to build power on court. All fitness levels, equipment provided.",
    img: "/images/whats-on/circuits.jpg",
    alt: "Dumbbells and weight plates on the clay court",
    cta: "Let's get fit",
    href: "https://playtomic.com/activities/public-classes/49994097-a5ac-407e-aabb-4189f20e96ef",
    pos: "center 45%",
    event: true,
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
