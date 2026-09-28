import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reviews, reviewsContent, type Review } from "@/content/reviews";

export function ReviewsSection() {
  return (
    <Section id="reviews" className="border-t border-line">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={reviewsContent.eyebrow}
          heading={reviewsContent.heading}
          description={reviewsContent.description}
          align="center"
          className="mx-auto max-w-2xl"
        />

        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        ) : (
          <div className="mx-auto flex max-w-xl flex-col items-center gap-3 rounded-2xl border border-dashed border-line px-8 py-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              Coming Soon
            </span>
            <p className="text-body-lg text-text-secondary">
              Student feedback will be added here as training cohorts complete the program.
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="flex flex-col gap-6">
      <p className="text-sm text-text-secondary sm:text-base">&ldquo;{review.quote}&rdquo;</p>

      <div className="flex items-center gap-3">
        {review.avatarSrc && (
          <Image
            src={review.avatarSrc}
            alt=""
            width={40}
            height={40}
            loading="lazy"
            className="h-10 w-10 rounded-full object-cover"
          />
        )}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">{review.name}</span>
          {review.role && <span className="text-xs text-text-muted">{review.role}</span>}
        </div>
        {review.source && (
          <span className="ml-auto text-xs uppercase tracking-wide text-text-muted">
            {review.source}
          </span>
        )}
      </div>
    </Card>
  );
}
