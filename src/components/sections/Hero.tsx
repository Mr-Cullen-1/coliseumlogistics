import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { heroContent } from "@/content/hero";
import { primaryCta, secondaryCta } from "@/content/navigation";
import { cn } from "@/lib/cn";
import mainTeacher from "@/content/media/main-teacher.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_85%_0%,rgba(193,154,99,0.10),transparent_70%)]"
      />

      <Container className="relative grid gap-y-12 gap-x-12 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-20 lg:pb-24 xl:grid-cols-[1.4fr_1fr] xl:gap-x-16 xl:pt-14">
        <div className="flex max-w-[46rem] flex-col gap-8 xl:col-start-1 xl:row-start-1">
          <Eyebrow className="animate-fade-up">{heroContent.eyebrow}</Eyebrow>

          <h1 className="animate-fade-up text-display font-semibold text-foreground [animation-delay:80ms]">
            START YOUR CAREER IN <span className="text-bronze">U.S.&nbsp;LOGISTICS</span>
          </h1>

          <p className="animate-fade-up max-w-xl text-body-lg text-text-secondary [animation-delay:160ms]">
            {heroContent.supportingText}
          </p>

          <div className="animate-fade-up flex flex-wrap items-center gap-4 [animation-delay:240ms]">
            <Button href={primaryCta.href} className="group">
              {primaryCta.label}
              <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        <HeroVisual className="xl:col-start-2 xl:row-start-1 xl:row-span-2" />

        <TrustRow
          items={heroContent.trustPoints}
          className="animate-fade-up xl:col-start-1 xl:row-start-2 [animation-delay:320ms]"
        />
      </Container>
    </section>
  );
}

function TrustRow({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-x-6 gap-y-3 xl:gap-x-4", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm text-text-secondary xl:text-xs"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function HeroVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn("animate-fade-scale relative mb-8 [animation-delay:120ms] xl:mb-0", className)}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-line">
        <Image
          src={mainTeacher}
          alt={heroContent.visualAlt}
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 1280px) 40vw, 100vw"
          className="object-cover object-[center_35%]"
        />
      </div>

      <div className="absolute -bottom-6 left-6 right-6 rounded-xl border border-line bg-surface/95 p-4 backdrop-blur-sm sm:right-auto sm:w-64">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze-light">
          {heroContent.visualCaptionEyebrow}
        </p>
        <p className="mt-1 text-sm font-medium text-foreground">{heroContent.visualCaption}</p>
      </div>
    </div>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
