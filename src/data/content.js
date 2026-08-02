export const WHATSAPP_NUMBER = "13156960147"; // +1 315-696-0147
export const WHATSAPP_MESSAGE =
  "Hi Burning Lotus Tattoo! \u{1F525} I'd love to book an appointment. Here's a bit about what I'm thinking:\n\n\u2022 Idea/placement: \n\u2022 Approx. size: \n\u2022 Preferred dates: \n\nLooking forward to hearing from you!";

export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message || WHATSAPP_MESSAGE)}`;
}

// TODO: swap in the real handles when shared — Instagram is live, others are placeholders.
export const SOCIALS = [
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/burninglotustattoo/?hl=en" },
  { key: "facebook", label: "Facebook", href: "#" },
  { key: "tiktok", label: "TikTok", href: "#" },
  { key: "google", label: "Google Reviews", href: "https://www.google.com/maps/place/?q=place_id:Burning+Lotus+Tattoo+Denham+Springs" },
];

export const GALLERY = [
  { src: "/images/tattoo-archangel.jpg", tag: "Black & Grey", name: "Guardian Archangel" },
  { src: "/images/tattoo-floral-cross-sleeve.jpg", tag: "Ornamental", name: "Louisiana Cross Sleeve" },
  { src: "/images/tattoo-roses.jpg", tag: "Dotwork", name: "Twin Roses" },
  { src: "/images/tattoo-skull-floral.jpg", tag: "Black & Grey", name: "Skull & Peonies" },
  { src: "/images/tattoo-lucky-cat.jpg", tag: "Neo-Traditional", name: "Maneki-Neko Mermaid" },
  { src: "/images/tattoo-art-terror-clown.jpg", tag: "Illustrative Color", name: "Art the Clown" },
  { src: "/images/tattoo-parrot-color.jpg", tag: "Color", name: "Macaw & Margarita" },
  { src: "/images/tattoo-quote-script.jpg", tag: "Script", name: "The Ultimate Measure" },
];

export const STUDIO_PHOTOS = [
  "/images/shop-exterior-sign.jpg",
  "/images/shop-interior-green-room.jpg",
  "/images/shop-front-desk.jpg",
  "/images/shop-wall-art.jpg",
];

export const REVIEWS = [
  {
    name: "Jay Barber",
    meta: "6 reviews \u00b7 6 months ago",
    rating: 5,
    text: "Got my first tattoo with Travis and I'll definitely be back for more \u2014 he walked me through the whole process and aftercare. Everyone I met was friendly, and the price was more than reasonable for the quality.",
  },
  {
    name: "Danielle Edelen",
    meta: "Local Guide \u00b7 2 months ago",
    rating: 5,
    text: "Friendly, knowledgeable staff and beautiful work. Spent the afternoon with my sweet friend Karensa while she got a tattoo honoring her father \u2014 a really special experience.",
  },
  {
    name: "Samantha Blount",
    meta: "7 reviews \u00b7 a year ago",
    rating: 5,
    text: "Everyone at Burning Lotus is kind and so fun to be around. Corey does all my work and I wouldn't ask for a better artist \u2014 the shop is clean, sanitary, and it shows in every piece.",
  },
];
