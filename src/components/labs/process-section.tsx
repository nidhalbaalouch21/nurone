import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    num: "01",
    title: "Free Start",
    headline: "Idea or expertise → 72h prototype sprint",
    bullets: [
      "Existing MVP — free code review",
      "You get a clear build plan before committing",
    ],
    note: "No pressure. No vague proposal. Just the truth about what we would build next.",
    tag: "Only 5 spots per month",
  },
  {
    num: "02",
    title: "Scoped Build",
    headline: "Fixed scope, fixed timeline, fixed price",
    bullets: [
      "Blueprint, Prototype, or MVP built exactly as planned",
      "Weekly visibility: what was done, what is next, what is blocked",
    ],
    note: "If we underestimate a scoped build, we finish the agreed work.",
    tag: "Weekly task log included",
  },
  {
    num: "03",
    title: "Fractional Team",
    headline: "Your ongoing product team after launch",
    bullets: [
      "Engineers, product architects, AI operators, DevOps by the hour",
      "Hours tracked. Execution visible. Scale up or down anytime",
    ],
    note: "Start small. Add capacity only when it creates leverage.",
    tag: "From 20h / month",
  },
];

export function ProcessSection({ onRequestAccess }: { onRequestAccess?: () => void }) {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 text-center">
      {/* Badge */}
      <ScrollReveal>
        <div className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-[#8da2fb] border border-white/10 bg-[#0f0f11d0] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)] uppercase mb-8">
          Process
        </div>
      </ScrollReveal>

      {/* Heading */}
      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-nevera text-white mb-6 max-w-3xl mx-auto leading-tight">
          How{" "}
          <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
            Foundation
          </span>{" "}
          works
        </h2>
      </ScrollReveal>

      {/* Subtitle */}
      <ScrollReveal delay={0.2}>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-16 font-libra">
          We remove the risk first. Then you choose the way to build.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {/* Step selector */}
        <ScrollReveal className="h-full">
          <div className="flex flex-col gap-3 h-full justify-center">
            {steps.map((s, i) => (
              <button
                key={s.num}
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center gap-4 rounded-2xl border p-5 transition-all duration-300 text-left cursor-pointer",
                  active === i
                    ? "border-primary/40 bg-primary/10 shadow-[0_0_25px_rgba(37,99,235,0.12)]"
                    : "border-white/10 bg-[#0a0a0b]/60 hover:border-white/25"
                )}
              >
                <span
                  className={cn(
                    "text-2xl font-extrabold font-libra transition-colors",
                    active === i ? "text-primary" : "text-white/30"
                  )}
                >
                  {s.num}
                </span>
                <span
                  className={cn(
                    "text-lg font-bold font-libra transition-colors",
                    active === i ? "text-white" : "text-gray-400"
                  )}
                >
                  {s.title}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Active step card */}
        <ScrollReveal delay={0.15} className="h-full">
          <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0b]/80 backdrop-blur-md p-8 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <div className="absolute left-0 top-0 h-full w-[3px] bg-primary" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex h-full flex-col"
              >
                <h3 className="text-2xl font-bold text-white mb-2 font-libra">{step.title}</h3>
                <p className="text-sm text-[#8da2fb] font-bold mb-6">{step.headline}</p>

                <ul className="space-y-3 mb-6">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-gray-400">
                      <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-gray-500 italic leading-relaxed mb-6">{step.note}</p>

                <div className="mt-auto flex flex-col gap-5">
                  <span className="inline-flex w-fit items-center px-3 py-1 text-[11px] font-bold tracking-wide text-[#8da2fb] border border-blue-500/20 bg-blue-500/5 rounded-full uppercase">
                    {step.tag}
                  </span>
                  <Button
                    onClick={onRequestAccess}
                    size="lg"
                    className="bg-white text-[#0f0f11] hover:bg-white/90 rounded-xl font-bold px-8 py-3 font-libra cursor-pointer w-full sm:w-auto"
                  >
                    Request Foundation Access
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
