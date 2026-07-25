import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function SystemCtaSection({
  onRequestAccess,
}: {
  onRequestAccess?: () => void;
}) {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 text-center overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_50%_at_50%_50%,rgba(37,99,235,0.15),transparent_70%)]" />

      <ScrollReveal>
        <h2 className="relative text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight font-nevera text-white mb-6 max-w-4xl mx-auto leading-tight">
          Bring the ambition.{" "}
          <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
            We'll build the system behind it.
          </span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <p className="relative text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-10 font-libra">
          Tell us where you want to go. We'll show you the system that gets you there.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <Button
          onClick={onRequestAccess}
          size="lg"
          className="relative bg-white text-[#0f0f11] hover:bg-white/90 rounded-xl font-bold px-8 py-3 font-libra cursor-pointer"
        >
          Request Access
        </Button>
      </ScrollReveal>
    </section>
  );
}
