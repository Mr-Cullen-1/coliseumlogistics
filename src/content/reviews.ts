export interface Review {
  quote: string;
  name: string;
  role?: string;
  avatarSrc?: string;
  source?: string;
}

export const reviewsContent = {
  eyebrow: "STUDENT FEEDBACK",
  heading: "What Students Say",
  description:
    "Feedback reflects students' real experience with the training environment and practical learning.",
};

// No real student feedback has been provided yet.
// Populate this array once testimonials are available — the section
// will automatically switch from the placeholder notice to a review grid.
export const reviews: Review[] = [];
