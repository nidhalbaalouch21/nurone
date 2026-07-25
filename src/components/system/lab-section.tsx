import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const members = [
  { initials: "AR", name: "Adrian R.", role: "Product Architect" },
  { initials: "SM", name: "Sarah M.", role: "AI Operator" },
  { initials: "DK", name: "Daniel K.", role: "Senior Engineer" },
  { initials: "EL", name: "Emma L.", role: "UX/UI Designer" },
  { initials: "MB", name: "Marc B.", role: "Growth Strategist" },
];

export function LabSection({ onRequestAccess }: { onRequestAccess?: () => void }) {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 text-center">
      {/* Badge */}
      <ScrollReveal>
        <div className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-[#8da2fb] border border-white/10 bg-[#0f0f11d0] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)] uppercase mb-8">
          The Lab
        </div>
      </ScrollReveal>

      {/* Heading */}
      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-nevera text-white mb-6 max-w-3xl mx-auto leading-tight">
          The{" "}
          <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
            Lab
          </span>
        </h2>
      </ScrollReveal>

      {/* Subtitle */}
      <ScrollReveal delay={0.2}>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-16 font-libra">
          A curated group of builders, designers, and engineers who make exceptional
          things for brands that refuse to settle.
        </p>
      </ScrollReveal>

      {/* Members */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mb-12">
        {members.map((member, i) => (
          <ScrollReveal key={member.name} delay={0.1 * i} className="h-full">
            <div
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0b]/60 backdrop-blur-sm p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_25px_rgba(37,99,235,0.15)]",
                i === 2 && "border-primary/30 shadow-[0_0_25px_rgba(37,99,235,0.12)]"
              )}
            >
              {/* Avatar placeholder */}
              <div className="relative mx-auto mb-4 flex size-20 sm:size-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#12203f] via-[#0f1729] to-[#0a0a0b] border border-white/10 overflow-hidden">
                <div className="absolute inset-0 [background:radial-gradient(80%_80%_at_50%_20%,rgba(37,99,235,0.3),transparent_70%)]" />
                <span className="relative text-xl sm:text-2xl font-extrabold text-white/80 font-libra">
                  {member.initials}
                </span>
              </div>
              <div className="text-sm font-bold text-white">{member.name}</div>
              <div className="text-xs text-gray-500 mt-1">{member.role}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* CTA */}
      <ScrollReveal delay={0.2}>
        <Button
          onClick={onRequestAccess}
          size="lg"
          className="bg-white text-[#0f0f11] hover:bg-white/90 rounded-xl font-bold px-8 py-3 font-libra cursor-pointer"
        >
          Join The Lab
        </Button>
      </ScrollReveal>
    </section>
  );
}
