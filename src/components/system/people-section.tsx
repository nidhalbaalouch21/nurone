import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const chips = [
  { label: "Product", className: "left-[8%] top-[18%]" },
  { label: "Engineering", className: "right-[6%] top-[24%]" },
  { label: "AI & Agents", className: "left-[10%] bottom-[24%]" },
  { label: "Design", className: "right-[10%] bottom-[18%]" },
  { label: "Growth", className: "left-[38%] top-[6%]" },
  { label: "Ops", className: "right-[36%] bottom-[8%]" },
];

export function PeopleSection() {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 text-center">
      {/* Badge */}
      <ScrollReveal>
        <div className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-[#8da2fb] border border-white/10 bg-[#0f0f11d0] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)] uppercase mb-8">
          The Team
        </div>
      </ScrollReveal>

      {/* Heading */}
      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-nevera text-white mb-6 max-w-3xl mx-auto leading-tight">
          The People Behind{" "}
          <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
            The Work
          </span>
        </h2>
      </ScrollReveal>

      {/* Subtitle */}
      <ScrollReveal delay={0.2}>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-8 font-libra">
          Senior specialists across product, engineering, AI, and growth — coordinated
          inside one system, not a stack of hand-offs.
        </p>
      </ScrollReveal>

      {/* Hand logo with floating discipline chips */}
      <ScrollReveal delay={0.2} y={32}>
        <div className="relative mx-auto h-[380px] sm:h-[480px] w-full max-w-3xl">
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_50%,rgba(37,99,235,0.2),transparent_70%)]" />
          <motion.img
            src="/Hand_touch_logo.svg"
            alt="NURONE hand logo"
            className="absolute left-1/2 top-1/2 w-full max-w-[480px] h-auto -translate-x-1/2 -translate-y-1/2"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          {chips.map((chip) => (
            <span
              key={chip.label}
              className={`absolute hidden sm:inline-flex items-center px-4 py-1.5 text-[11px] font-bold tracking-widest text-[#8da2fb] border border-white/10 bg-[#0f0f11d0] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(59,130,246,0.15)] uppercase ${chip.className}`}
            >
              {chip.label}
            </span>
          ))}
        </div>
      </ScrollReveal>

      {/* Punchline */}
      <ScrollReveal delay={0.3}>
        <p className="text-xl sm:text-2xl md:text-3xl font-normal tracking-tight font-nevera text-white leading-snug">
          You don't hire them. You don't manage them.{" "}
          <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
            You access the system.
          </span>
        </p>
      </ScrollReveal>
    </section>
  );
}
