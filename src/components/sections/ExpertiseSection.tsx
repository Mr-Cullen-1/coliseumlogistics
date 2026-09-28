"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image, { type StaticImageData } from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { expertise } from "@/content/expertise";
import { cn } from "@/lib/cn";
import studentsTraining from "@/content/media/students-training.jpg";
import studentsTraining2 from "@/content/media/students-training-2.jpg";
import studentsTraining3 from "@/content/media/students-training-3.jpg";
import studentsTraining4 from "@/content/media/students-training-4.jpg";

const slides: { src: StaticImageData; alt: string; position?: string }[] = [
  { src: studentsTraining, alt: expertise.slides[0].alt },
  // Cropped toward the right edge — the original frame has a hand/arm in the
  // near foreground on the left side that this composition can't fully avoid.
  { src: studentsTraining2, alt: expertise.slides[1].alt, position: "object-right" },
  { src: studentsTraining3, alt: expertise.slides[2].alt },
  { src: studentsTraining4, alt: expertise.slides[3].alt },
];

export function ExpertiseSection() {
  return (
    <Section id="mentors">
      <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16 xl:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-10 lg:col-start-2 lg:row-start-1">
          <div className="flex flex-col gap-4">
            <Eyebrow>{expertise.eyebrow}</Eyebrow>
            <h2 className="text-h2 font-semibold text-foreground">{expertise.heading}</h2>
          </div>

          <div className="flex flex-col gap-8 border-t border-line pt-8">
            {expertise.pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col gap-2">
                <span aria-hidden="true" className="h-px w-8 bg-bronze" />
                <h3 className="text-h3 font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-text-secondary sm:text-base">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        <StudentSlider className="lg:col-start-1 lg:row-start-1" />
      </Container>
    </Section>
  );
}

const SLIDE_INTERVAL_MS = 6000;

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}

function getVisibilitySnapshot() {
  return document.hidden;
}

function StudentSlider({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );
  const isTabHidden = useSyncExternalStore(subscribeVisibility, getVisibilitySnapshot, () => false);

  useEffect(() => {
    if (isPaused || reducedMotion || isTabHidden) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [isPaused, reducedMotion, isTabHidden]);

  const goTo = (next: number) => setIndex(((next % slides.length) + slides.length) % slides.length);

  return (
    <div
      className={cn("relative", className)}
      role="group"
      aria-roledescription="carousel"
      aria-label="Student training photos"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-line">
        <div
          className={cn("flex h-full", !reducedMotion && "transition-transform duration-700 ease-in-out")}
          style={{
            transform: `translateX(-${index * (100 / slides.length)}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.alt}
              className="relative h-full shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                loading="lazy"
                placeholder="blur"
                sizes="(min-width: 1024px) 55vw, 100vw"
                className={cn("object-cover", slide.position)}
              />
            </div>
          ))}
        </div>

        <div className="sr-only" aria-live="polite">
          {`Slide ${index + 1} of ${slides.length}`}
        </div>
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:border-bronze/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
      >
        <ChevronIcon direction="left" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:border-bronze/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
      >
        <ChevronIcon direction="right" />
      </button>
    </div>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M10 3L5 8L10 13" : "M6 3L11 8L6 13"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
