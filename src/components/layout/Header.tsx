"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { navLinks, primaryCta } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        isScrolled
          ? "border-line bg-background/92 backdrop-blur-sm"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="#top" aria-label={`${siteConfig.legalName} — Home`} className="shrink-0">
          <Image
            src="/logo/logo-transparent.png"
            alt={siteConfig.legalName}
            width={112}
            height={112}
            priority
            className="h-12 w-12 object-contain lg:h-14 lg:w-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm font-medium text-text-secondary transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          href={primaryCta.href}
          className="shrink-0 whitespace-nowrap max-lg:!px-4 max-lg:!py-2.5 max-lg:!text-xs"
        >
          {primaryCta.label}
        </Button>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-foreground transition-colors hover:border-bronze/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        inert={!isMenuOpen}
        className={cn(
          "overflow-hidden border-t bg-background transition-[max-height,opacity] duration-300 ease-out lg:hidden",
          isMenuOpen ? "max-h-96 border-line opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-surface hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-bronze"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </Container>
      </nav>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 4.5H16M2 9H16M2 13.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
