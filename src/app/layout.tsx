import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/content/site";
import { primaryCta } from "@/content/navigation";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Coliseum Logistics School | USA Logistics Career Training";
const description =
  "Practical U.S. logistics training with real office experience, industry-focused workflows, expert masterclasses and interview preparation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Coliseum Logistics School",
  },
  description,
  applicationName: "Coliseum Logistics School",
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "logistics training",
    "U.S. logistics career",
    "dispatch training",
    "trucking industry training",
    "logistics school",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Coliseum Logistics School",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0D1114",
  colorScheme: "dark",
};

// Organization-level structured data — the school's own official channels only.
// Sensei Shawn's personal Telegram/Instagram are page content (Footer), not org identity,
// so they're deliberately left out here.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.legalName,
  url: siteUrl,
  logo: `${siteUrl}/logo/logo-transparent.png`,
  telephone: siteConfig.contact.phone.href.replace("tel:", ""),
  sameAs: [siteConfig.social[0]?.href, primaryCta.href].filter(Boolean),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
