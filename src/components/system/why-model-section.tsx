import { X, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const traditional = [
  "Sell hours, not outcomes",
  "Junior teams behind senior pitches",
  "Black-box delivery",
  "Lock-in by design",
];

const nurone = [
  "Sell systems that compound",
  "Senior operators, AI-augmented",
  "Weekly visible execution",
  "You own everything we build",
];

export function WhyModelSection() {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 text-center">
      {/* Badge */}
      <ScrollReveal>
        <div className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-[#8da2fb] border border-white/10 bg-[#0f0f11d0] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)] uppercase mb-8">
          The Difference
        </div>
      </ScrollReveal>

      {/* Heading */}
      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-nevera text-white mb-6 max-w-3xl mx-auto leading-tight">
          Why This Model{" "}
          <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
            Exists
          </span>
        </h2>
      </ScrollReveal>

      {/* Subtitle */}
      <ScrollReveal delay={0.2}>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-16 font-libra">
          Because the agency model is broken. One team with one goal: build things that
          actually move the business forward.
        </p>
      </ScrollReveal>

      {/* Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
        {/* Traditional Agencies */}
        <ScrollReveal delay={0.1} className="h-full">
          <div className="h-full rounded-3xl border border-white/10 bg-[#0a0a0b]/60 backdrop-blur-sm p-8">
            <h3 className="text-lg font-bold text-gray-400 mb-6 tracking-tight font-libra">
              Traditional Agencies
            </h3>
            <ul className="space-y-4">
              {traditional.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 border border-red-500/30">
                    <X className="size-3 text-red-400" />
                  </span>
                  <span className="text-sm text-gray-400 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* The NURONE System */}
        <ScrollReveal delay={0.2} className="h-full">
          <div
            className={cn(
              "h-full rounded-3xl border border-primary/40 bg-[#0a0a0b]/60 backdrop-blur-sm p-8",
              "shadow-[0_0_40px_rgba(37,99,235,0.15)]"
            )}
          >
            <h3 className="text-lg font-bold text-white mb-6 tracking-tight font-libra">
              The NURONE System
            </h3>
            <ul className="space-y-4">
              {nurone.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 border border-primary/40">
                    <Check className="size-3 text-primary" />
                  </span>
                  <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
