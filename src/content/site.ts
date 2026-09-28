/**
 * LAUNCH-BLOCKING PLACEHOLDER CONTENT
 * ------------------------------------
 * Still needs real client data before launch:
 *
 * - siteConfig.contact.email — not yet provided (this file, not currently displayed anywhere).
 * - Reviews — content/reviews.ts exports an empty `reviews` array; the section renders an
 *   honest "coming soon" notice until real testimonials are added there.
 *
 * Resolved: phone, the official Coliseum Instagram, the CEO/Head Teacher's Telegram +
 * Instagram, the Google Maps location link (below), and the Hero / Office Experience /
 * Expertise photography (real Coliseum Logistics photos — see components/sections/Hero.tsx,
 * OfficeExperience.tsx, ExpertiseSection.tsx). The official training Telegram used by every
 * "Apply for Training" button lives in content/navigation.ts (primaryCta.href), not here.
 */
export const siteConfig = {
  name: "COLISEUM LOGISTICS",
  legalName: "Coliseum Logistics School",
  contact: {
    phone: {
      display: "+998 94 010 38 18",
      href: "tel:+998940103818",
    },
    email: "[Placeholder email address]",
  },
  social: [{ label: "Instagram", href: "https://www.instagram.com/coliseumlogistics/" }],
  leadership: {
    name: "Sensei Shawn (Saidakbar)",
    role: "CEO & Head Teacher",
    telegram: { label: "Telegram", href: "https://t.me/senseisaidakbar" },
    instagram: { label: "Instagram", href: "https://www.instagram.com/senseisaidakbar/" },
  },
  mapUrl:
    "https://www.google.com/maps/place/41%C2%B020'42.7%22N+69%C2%B019'42.6%22E/@41.3452,69.328501,16z/data=!4m4!3m3!8m2!3d41.3452!4d69.328501!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
};
