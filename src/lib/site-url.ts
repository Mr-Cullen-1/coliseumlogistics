// Centralized production URL. Set NEXT_PUBLIC_SITE_URL once the domain is known —
// every place that needs an absolute URL (metadata, OG tags, robots.txt, sitemap.xml)
// reads from here instead of hardcoding a host.
//
// Where to set it: as an environment variable named NEXT_PUBLIC_SITE_URL, in the
// hosting platform's project settings (e.g. Vercel → Project → Settings →
// Environment Variables), or in a local .env.production file. It must be set for
// the production build/deploy — see the loud warning below if it's missing.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_SITE_URL) {
  console.warn(
    "[site-url] NEXT_PUBLIC_SITE_URL is not set in a production build — " +
      "canonical URL, Open Graph tags, robots.txt and sitemap.xml are all falling " +
      "back to http://localhost:3000. Set NEXT_PUBLIC_SITE_URL to the real domain " +
      "before shipping this build.",
  );
}
