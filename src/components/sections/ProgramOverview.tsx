import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { program } from "@/content/program";

export function ProgramOverview() {
  return (
    <Section id="curriculum">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={program.eyebrow}
          heading={program.heading}
          description={program.description}
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {program.topics.map((topic, index) => (
            <div
              key={topic.title}
              className="flex flex-col gap-3 bg-background p-6 transition-colors duration-200 hover:bg-surface sm:p-7"
            >
              <span className="text-sm font-semibold text-bronze">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-foreground">{topic.title}</h3>
              <p className="text-sm text-text-secondary">{topic.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
