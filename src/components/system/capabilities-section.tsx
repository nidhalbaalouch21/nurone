import { AppWindow, Code2, Bot, Server, PenTool, ShieldCheck } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const capabilities = [
  {
    icon: <AppWindow className="size-6 text-primary" />,
    title: "Product & Applications",
    description:
      "Web apps, mobile apps, dashboards, internal tools — designed, built, and shipped end-to-end.",
  },
  {
    icon: <Code2 className="size-6 text-primary" />,
    title: "Engineering",
    description:
      "Robust backends, APIs, integrations, and data models that survive real usage.",
  },
  {
    icon: <Bot className="size-6 text-primary" />,
    title: "AI & Automation",
    description:
      "LLM workflows, agents, copilots, and process automation wired into your operations.",
  },
  {
    icon: <Server className="size-6 text-primary" />,
    title: "DevOps & Infrastructure",
    description:
      "Cloud, CI/CD, monitoring, and environments your team can actually maintain.",
  },
  {
    icon: <PenTool className="size-6 text-primary" />,
    title: "UX / UI Design",
    description:
      "Interfaces users understand in seconds — research, flows, design systems, prototypes.",
  },
  {
    icon: <ShieldCheck className="size-6 text-primary" />,
    title: "Quality & Security",
    description:
      "Testing, code review, audits, and hardening so scale doesn't become a liability.",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 text-center">
      {/* Badge */}
      <ScrollReveal>
        <div className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-[#8da2fb] border border-white/10 bg-[#0f0f11d0] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)] uppercase mb-8">
          Capabilities
        </div>
      </ScrollReveal>

      {/* Heading */}
      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-nevera text-white mb-6 max-w-3xl mx-auto leading-tight">
          What Nurone{" "}
          <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
            Can Build
          </span>
        </h2>
      </ScrollReveal>

      {/* Subtitle */}
      <ScrollReveal delay={0.2}>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-16 font-libra">
          One team, one system — every capability your product needs, without hiring
          six vendors to get it.
        </p>
      </ScrollReveal>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
        {capabilities.map((cap, i) => (
          <ScrollReveal key={cap.title} delay={0.1 * i} className="h-full">
            <CardSpotlight className="h-full flex flex-col p-8 border border-white/5 bg-[#0a0a0b]/60 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.2)] rounded-3xl">
              <div className="relative flex items-center justify-center size-14 rounded-full bg-primary/10 border border-primary/20 mb-6 shadow-[0_0_20px_rgba(37,99,235,0.15)]">
                <div className="absolute inset-0 size-full rounded-full bg-primary/20 blur-md pointer-events-none" />
                {cap.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight font-libra">
                {cap.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{cap.description}</p>
            </CardSpotlight>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
