import { HeroSection } from "@/components/ui/hero-section";
import { DifferenceSection } from "@/components/ui/difference-section";
import { WorkflowSection } from "@/components/ui/workflow-section";
import { FAQSection } from "@/components/ui/faq-section";

export function HomePage({ onRequestAccess }: { onRequestAccess?: () => void }) {
  return (
    <>
      <HeroSection onRequestAccess={onRequestAccess} />
      <DifferenceSection />
      <WorkflowSection />
      <FAQSection />
    </>
  );
}
