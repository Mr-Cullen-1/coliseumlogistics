"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqContent } from "@/content/faq";
import { cn } from "@/lib/cn";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" surface="surface" className="py-14 md:py-16 lg:py-20">
      <Container className="flex flex-col gap-8">
        <SectionHeading eyebrow={faqContent.eyebrow} heading={faqContent.heading} />

        <div className="border-t border-line">
          {faqContent.items.map((item, index) => (
            <FAQItem
              key={item.question}
              index={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

interface FAQItemProps {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ index, question, answer, isOpen, onToggle }: FAQItemProps) {
  const buttonId = `faq-button-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-b border-line">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
        >
          <span className="text-base font-semibold text-foreground sm:text-lg">{question}</span>
          <PlusMinusIcon isOpen={isOpen} />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl pb-5 text-sm text-text-secondary sm:text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
}

function PlusMinusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="relative flex h-5 w-5 shrink-0 items-center justify-center text-bronze"
    >
      <span className="absolute h-px w-3 bg-current" />
      <span
        className={cn(
          "absolute h-3 w-px bg-current transition-transform duration-200",
          isOpen && "scale-y-0",
        )}
      />
    </span>
  );
}
