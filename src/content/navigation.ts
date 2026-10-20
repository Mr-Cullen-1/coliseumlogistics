export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Program", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "What You Learn", href: "#curriculum" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

// Official training contact destination — every "Apply for Training" button
// (Header, Hero, Final CTA) shares this single source.
export const primaryCta: NavLink = {
  label: "Apply for Training",
  href: "https://t.me/coliseumlogistics",
};

export const secondaryCta: NavLink = {
  label: "Explore the Program",
  href: "#how-it-works",
};
