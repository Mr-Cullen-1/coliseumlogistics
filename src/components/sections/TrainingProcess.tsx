import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trainingProcess } from "@/content/process";

export function TrainingProcess() {
  const steps = trainingProcess.steps;

  return (
    <Section id="how-it-works" className="border-t border-line">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={trainingProcess.eyebrow}
          heading={trainingProcess.heading}
          description={trainingProcess.description}
        />

        <div className="relative">
          {/*
            Desktop connector: every column's marker starts flush with the row's top edge
            (grid rows default to align-items: stretch), so a fixed line at half the marker's
            own height (h-10 -> top-5) always passes through every marker's center exactly,
            regardless of how tall each step's description grows. Not a pixel guess.
          */}
          <div aria-hidden="true" className="absolute inset-x-0 top-5 hidden h-px bg-line lg:block" />

          <ol className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-8">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              return (
                <li
                  key={step.title}
                  className="grid grid-cols-[auto_1fr] gap-x-4 lg:flex lg:flex-col lg:gap-y-6"
                >
                  <div className="relative z-10 flex flex-col items-center lg:items-start">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-bronze bg-background text-sm font-semibold text-bronze">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {/*
                      Mobile connector: this column is stretched by the grid to match the
                      content column's full height, so flex-1 always reaches exactly to the
                      bottom of this step's content — no fixed height needed.
                    */}
                    {!isLast && (
                      <span aria-hidden="true" className="mt-1 w-px flex-1 bg-line lg:hidden" />
                    )}
                  </div>

                  <div className="flex flex-col gap-2 pb-10 pt-1.5 lg:pb-0 lg:pt-0">
                    <h3 className="text-base font-semibold text-foreground sm:text-lg">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
