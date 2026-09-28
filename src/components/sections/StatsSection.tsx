import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stat } from "@/components/ui/Stat";
import { stats } from "@/content/stats";

export function StatsSection() {
  return (
    <Section className="border-y border-line py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4 lg:gap-x-0 lg:divide-x lg:divide-line">
          {stats.map((stat) => (
            <div key={stat.label} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <Stat value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
