import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { finalCtaContent } from "@/content/finalCta";
import { primaryCta } from "@/content/navigation";

export function FinalCTA() {
  return (
    <Section id="contact" surface="elevated" className="border-y border-line">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Eyebrow>{finalCtaContent.eyebrow}</Eyebrow>

        <h2 className="max-w-3xl text-h2 font-semibold text-foreground">
          {finalCtaContent.heading}
        </h2>

        <p className="max-w-xl text-body-lg text-text-secondary">{finalCtaContent.description}</p>

        <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <Button href={primaryCta.href} className="w-full sm:w-auto">
            {primaryCta.label}
          </Button>
          <Button
            href={finalCtaContent.secondaryCta.href}
            variant="secondary"
            className="w-full sm:w-auto"
          >
            {finalCtaContent.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
