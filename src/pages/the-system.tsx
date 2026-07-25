import { SystemHero } from "@/components/system/system-hero";
import { WhoWeAreSection } from "@/components/system/who-we-are-section";
import { LabSection } from "@/components/system/lab-section";
import { PrinciplesSection } from "@/components/system/principles-section";
import { CapabilitiesSection } from "@/components/system/capabilities-section";
import { PeopleSection } from "@/components/system/people-section";
import { TechSection } from "@/components/system/tech-section";
import { WhyModelSection } from "@/components/system/why-model-section";
import { SystemFaqSection } from "@/components/system/system-faq-section";
import { SystemCtaSection } from "@/components/system/system-cta-section";
import { NewsletterSection } from "@/components/labs/newsletter-section";

export function TheSystemPage({
  onRequestAccess,
}: {
  onRequestAccess?: () => void;
}) {
  return (
    <main className="w-full">
      <SystemHero />
      <WhoWeAreSection />
      <LabSection onRequestAccess={onRequestAccess} />
      <PrinciplesSection />
      <CapabilitiesSection />
      <PeopleSection />
      <TechSection />
      <WhyModelSection />
      <SystemFaqSection />
      <SystemCtaSection onRequestAccess={onRequestAccess} />
      <NewsletterSection />
    </main>
  );
}
