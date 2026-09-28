import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { navLinks } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { externalLinkProps } from "@/lib/links";

const linkStyles =
  "rounded-sm text-sm text-text-secondary transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="flex flex-col gap-10 py-14">
        <div
          id="footer-contact"
          className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-10"
        >
          <div className="col-span-2 flex items-start sm:col-span-3 lg:col-span-1">
            <Image
              src="/logo/logo-transparent.png"
              alt={siteConfig.legalName}
              width={200}
              height={200}
              loading="lazy"
              className="h-20 w-20 object-contain sm:h-24 sm:w-24"
            />
          </div>

          <FooterColumn heading="Coliseum Logistics">
            <Link href={siteConfig.contact.phone.href} className={linkStyles}>
              {siteConfig.contact.phone.display}
            </Link>
            {siteConfig.social.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                {...externalLinkProps(social.href)}
                className={linkStyles}
              >
                {social.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn heading={siteConfig.leadership.role}>
            <span className="text-sm text-foreground">{siteConfig.leadership.name}</span>
            <Link
              href={siteConfig.leadership.telegram.href}
              {...externalLinkProps(siteConfig.leadership.telegram.href)}
              className={linkStyles}
            >
              {siteConfig.leadership.telegram.label}
            </Link>
            <Link
              href={siteConfig.leadership.instagram.href}
              {...externalLinkProps(siteConfig.leadership.instagram.href)}
              className={linkStyles}
            >
              {siteConfig.leadership.instagram.label}
            </Link>
          </FooterColumn>

          <FooterColumn heading="Location">
            <LocationCard />
          </FooterColumn>

          <FooterColumn heading="Navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkStyles}>
                {link.label}
              </Link>
            ))}
          </FooterColumn>
        </div>

        <p className="border-t border-line pt-6 text-small text-text-muted">
          © {year} {siteConfig.legalName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

function FooterColumn({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-small font-semibold uppercase tracking-wide text-text-muted">
        {heading}
      </span>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function LocationCard() {
  return (
    <div className="flex flex-col gap-3">
      <div
        aria-hidden="true"
        className="relative h-20 w-full overflow-hidden rounded-xl border border-line bg-background"
      >
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(245,243,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(245,243,238,0.06)_1px,transparent_1px)] [background-size:14px_14px]" />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <span className="h-2.5 w-2.5 rounded-full bg-bronze" />
          <span className="mt-1 h-3 w-px bg-bronze/50" />
        </div>
      </div>
      <Link
        href={siteConfig.mapUrl}
        {...externalLinkProps(siteConfig.mapUrl)}
        className={linkStyles}
      >
        Open in Google Maps
      </Link>
    </div>
  );
}
