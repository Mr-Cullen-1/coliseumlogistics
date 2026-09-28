import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyColiseum } from "@/content/whyColiseum";
import officeBreakroom from "@/content/media/office-breakroom.jpg";

export function WhyColiseum() {
  return (
    <Section id="about" surface="elevated">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={whyColiseum.eyebrow}
          heading={
            <>
              Training Built Around
              <br className="hidden sm:block" /> Real Logistics Work
            </>
          }
          align="center"
          className="mx-auto max-w-3xl"
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_18rem] lg:items-start lg:gap-8 xl:grid-cols-[1fr_20rem] xl:gap-12">
          <ol className="divide-y divide-line border-t border-line">
            {whyColiseum.points.map((point, index) => (
              <li key={point.title} className="group flex gap-6 py-8 first:pt-0">
                <span className="text-body-lg font-semibold text-bronze transition-colors group-hover:text-bronze-light">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-h3 font-semibold text-foreground">{point.title}</h3>
                  <p className="text-sm text-text-secondary sm:text-base">{point.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="relative mx-auto aspect-[9/16] w-full max-w-xs overflow-hidden rounded-[28px] border border-line lg:mx-0 lg:max-w-none">
            <Image
              src={officeBreakroom}
              alt={whyColiseum.cardAlt}
              fill
              loading="lazy"
              placeholder="blur"
              sizes="(min-width: 1024px) 20rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
