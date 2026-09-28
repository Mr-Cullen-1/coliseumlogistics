import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { officeExperience } from "@/content/officeExperience";
import officeCoworking from "@/content/media/office-coworking.jpg";
import officeMeetingRoom from "@/content/media/office-meeting-room.jpg";
import officeBreakroom from "@/content/media/office-breakroom.jpg";

export function OfficeExperience() {
  return (
    <Section id="office" surface="elevated">
      <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16 xl:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-8 lg:col-start-2 lg:row-start-1">
          <div className="flex flex-col gap-4">
            <Eyebrow>{officeExperience.eyebrow}</Eyebrow>
            <h2 className="text-h2 font-semibold text-foreground">{officeExperience.heading}</h2>
            <p className="text-body-lg text-text-secondary">{officeExperience.description}</p>
          </div>

          <ul className="flex flex-col gap-5 border-t border-line pt-8">
            {officeExperience.points.map((point) => (
              <li key={point.title} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                  <span className="font-semibold text-foreground">{point.title}</span>
                </div>
                <p className="pl-3.5 text-sm text-text-secondary">{point.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:col-start-1 lg:row-start-1">
          <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-[28px] border border-line">
            <Image
              src={officeCoworking}
              alt={officeExperience.primaryAlt}
              fill
              loading="lazy"
              placeholder="blur"
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-[center_76%] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line">
              <Image
                src={officeMeetingRoom}
                alt={officeExperience.secondaryAlts.meetingRoom}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 27vw, 50vw"
                className="object-cover object-[center_59%]"
              />
            </div>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line">
              <Image
                src={officeBreakroom}
                alt={officeExperience.secondaryAlts.breakroom}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 27vw, 50vw"
                className="object-cover object-[center_60%]"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
