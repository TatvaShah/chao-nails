import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Chao Nails",
  tagline: "Gel X, soft gel, BIAB and overlays in Markham.",
  category: "Nail tech",
  schemaType: "BeautySalon",
  area: "Markham, ON",
  siteUrl: "https://chao-nails-ca.vercel.app",

  theme: {
    preset: "salon-chic",
    wordmark: "script",
  },

  hero: {
    eyebrow: "Home based nails in Markham",
    headline: "Gel X, soft gel, BIAB and nail art",
    subhead: "Chao Nails is a home based nail tech in Markham offering Gel X, soft gel, BIAB and overlays, including cat eye, chrome, plaid and character nail art. Send an Instagram message to book.",
    images: [
      { src: "/images/post-1.jpg", alt: "A pearly cat eye nail set with gemstones from Chao Nails in Markham", width: 1080, height: 1080 },
      { src: "/images/post-10.jpg", alt: "A coffin shaped Japanese Y2K inspired nail set from Chao Nails in Markham", width: 1080, height: 1080 },
      { src: "/images/post-3.jpg", alt: "A short chrome nail set from Chao Nails in Markham", width: 1080, height: 1080 },
    ],
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Gel X, soft gel, BIAB and overlays",
    "Home based studio in Markham",
    "Cat eye, chrome, plaid and character sets",
    "Book by Instagram DM",
  ],

  about: {
    title: "Welcome to Chao Nails",
    body: [
      "Chao Nails is a home based nail tech in Markham, offering Gel X, soft gel, BIAB and overlays. Recent work has included a pearly cat eye set with gemstones, a pink and grey plaid set, a short chrome set, a simple blue BIAB set, a Halloween set, tiger print nails, a freestyle grunge set, a black set inspired by Ken Kaneki, and a coffin shaped Japanese Y2K inspired set.",
      "Send an Instagram message to book.",
    ],
    image: { src: "/images/post-1.jpg", alt: "A pearly cat eye nail set with gemstones from Chao Nails in Markham", width: 1080, height: 1080 },
  },

  menu: {
    label: "Services",
    title: "Nails and art",
    variant: "list",
    showPrices: false,
    priceNote: "Send an Instagram message to book and for pricing.",
    groups: [
      {
        title: "Sets",
        items: [
          { name: "Gel X" },
          { name: "Soft gel" },
          { name: "BIAB and overlays" },
        ],
      },
      {
        title: "Nail art",
        items: [
          { name: "Cat eye, chrome and plaid sets" },
          { name: "Character and freestyle sets", description: "Recent work has included a Halloween set, tiger print, a Ken Kaneki inspired set, and a Japanese Y2K inspired set." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent sets",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1080, alt: "A pearly cat eye nail set with gemstones from Chao Nails in Markham", caption: "Pearly cat eye with gemstones", href: "https://www.instagram.com/p/Df40XK9paCV/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1437, alt: "A pink and grey plaid nail set from Chao Nails in Markham", caption: "Pink and grey plaid", href: "https://www.instagram.com/p/Df0L2Z-Ctua/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1080, alt: "A short chrome nail set from Chao Nails in Markham", caption: "A short chrome set", href: "https://www.instagram.com/p/Dfa2XX-mznm/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1080, alt: "A simple blue BIAB nail set from Chao Nails in Markham", caption: "A blue BIAB set", href: "https://www.instagram.com/p/DfSOlxvm7Z2/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1080, alt: "A Halloween nail set with a flash emblem from Chao Nails in Markham", caption: "A Halloween set", href: "https://www.instagram.com/p/DfF0d_GG6Ad/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1080, alt: "Tiger print nails from Chao Nails in Markham", caption: "Tiger print", href: "https://www.instagram.com/p/Deu_nMqDWyU/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1080, alt: "Freestyle grunge nails from Chao Nails in Markham", caption: "Freestyle grunge nails", href: "https://www.instagram.com/p/DcrTYdwARty/" },
      { src: "/images/post-9.jpg", width: 1080, height: 1080, alt: "A black nail set inspired by Ken Kaneki from Chao Nails in Markham", caption: "A Ken Kaneki inspired set", href: "https://www.instagram.com/p/DcrSgJ6AUzD/" },
      { src: "/images/post-10.jpg", width: 1080, height: 1080, alt: "A coffin shaped Japanese Y2K inspired nail set from Chao Nails in Markham", caption: "A Japanese Y2K inspired set", href: "https://www.instagram.com/p/DcjcCg_HBby/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "chao.nailss",
    embeds: ["https://www.instagram.com/p/Df40XK9paCV/", "https://www.instagram.com/p/Dfa2XX-mznm/", "https://www.instagram.com/p/DcjcCg_HBby/"],
  },

  order: {
    label: "How to book",
    title: "Book by Instagram DM",
    intro: "Send an Instagram message to book. Chao Nails is a home based studio in Markham.",
    headerCtaLabel: "Book now",
    dmMessage: "Hi Chao Nails! I would like to book a set.\nPreferred day:\nSet or design:",
    links: [
      { label: "Book by Instagram DM", href: "https://ig.me/m/chao.nailss" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send an Instagram message to book." },
    { q: "What services do you offer?", a: "Gel X, soft gel, BIAB and overlays, including nail art such as cat eye, chrome, plaid and character sets." },
    { q: "Where are you based?", a: "Chao Nails is a home based studio in Markham." },
  ],

  contact: {
    title: "Contact",
    area: "Markham, ON",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/chao.nailss/" },
    ],
  },

  seo: {
    title: "Chao Nails | Gel X and nail art in Markham",
    description: "Home based Markham nail tech offering Gel X, soft gel, BIAB, overlays and nail art, including cat eye, chrome and plaid sets. Book by Instagram DM.",
    keywords: ["Chao Nails", "Gel X Markham", "Markham nail tech", "BIAB Markham"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
