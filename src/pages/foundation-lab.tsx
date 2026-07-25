import { LabHero } from "@/components/labs/lab-hero";
import { SignalSection } from "@/components/labs/signal-section";
import { ServicesSection } from "@/components/labs/services-section";
import { ProcessSection } from "@/components/labs/process-section";
import { LabFaqSection } from "@/components/labs/lab-faq-section";
import { TestimonialsSection } from "@/components/labs/testimonials-section";
import { NewsletterSection } from "@/components/labs/newsletter-section";

export function FoundationLabPage({ onRequestAccess }: { onRequestAccess?: () => void }) {
  return (
    <>
      <LabHero onRequestAccess={onRequestAccess} />
      <SignalSection />
      <ServicesSection />
      <ProcessSection onRequestAccess={onRequestAccess} />
      <LabFaqSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
