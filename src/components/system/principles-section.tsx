import { ScrollReveal } from "@/components/ui/scroll-reveal";

const principles = [
  {
    num: "1",
    title: "Systems > Services",
    description:
      "We don't sell tasks. We build the machine that produces the outcome — so value keeps compounding after we ship.",
  },
  {
    num: "2",
    title: "Leverage > Headcount",
    description:
      "AI, automation, and proven playbooks multiply every person on your account. One senior operator outproduces a noisy team.",
  },
  {
    num: "3",
    title: "Foundation > Firefighting",
    description:
      "We fix the base first: architecture, data, workflows. Then growth stops breaking things.",
  },
  {
    num: "4",
    title: "Outcomes > Activity",
    description:
      "Dashboards, weekly logs, visible metrics. You always know what moved — and what it earned.",
  },
];

export function PrinciplesSection() {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 text-center">
      {/* Badge */}
      <ScrollReveal>
        <div className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-[#8da2fb] border border-white/10 bg-[#0f0f11d0] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)] uppercase mb-8">
          The Process
        </div>
      </ScrollReveal>

      {/* Heading */}
      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-nevera text-white mb-6 max-w-3xl mx-auto leading-tight">
          How we{" "}
          <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
            Work
          </span>
        </h2>
      </ScrollReveal>

      {/* Subtitle */}
      <ScrollReveal delay={0.2}>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-16 font-libra">
          We don't sell hours. We design the system, install it, and make it compound —
          so growth stops depending on headcount.
        </p>
      </ScrollReveal>

      {/* Principles grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
        {principles.map((p, i) => (
          <ScrollReveal key={p.num} delay={0.12 * i} className="h-full">
            <div className="h-full rounded-2xl border border-white/10 bg-[#0a0a0b]/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_25px_rgba(37,99,235,0.12)]">
              <div className="text-4xl font-extrabold text-primary mb-4 font-libra">
                {p.num}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight font-libra">
                {p.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
