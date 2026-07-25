import { MonitorSmartphone, Database, BrainCircuit } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const stacks = [
  {
    icon: <MonitorSmartphone className="size-6 text-primary" />,
    title: "Product",
    description:
      "Web apps, mobile, extensions, dashboards — everything your users touch, built to feel instant.",
    tags: ["React", "Next.js", "React Native", "Tailwind"],
  },
  {
    icon: <Database className="size-6 text-primary" />,
    title: "Backend & Data",
    description:
      "APIs, databases, queues, analytics — the foundation everything else survives on.",
    tags: ["Node", "Postgres", "Redis", "CI/CD"],
  },
  {
    icon: <BrainCircuit className="size-6 text-primary" />,
    title: "AI & Agents",
    description:
      "LLM workflows, RAG, copilots, automations — wired into the business, not bolted on.",
    tags: ["OpenAI", "Anthropic", "LangChain", "Vector DBs"],
  },
];

export function TechSection() {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 text-center">
      {/* Badge */}
      <ScrollReveal>
        <div className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-[#8da2fb] border border-white/10 bg-[#0f0f11d0] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)] uppercase mb-8">
          The Stack
        </div>
      </ScrollReveal>

      {/* Heading */}
      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-nevera text-white mb-6 max-w-3xl mx-auto leading-tight">
          Technology We{" "}
          <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
            Work With
          </span>
        </h2>
      </ScrollReveal>

      {/* Subtitle */}
      <ScrollReveal delay={0.2}>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-16 font-libra">
          We don't choose tools because they are trendy. We choose the stack that keeps
          your product fast, reliable, and affordable to run.
        </p>
      </ScrollReveal>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {stacks.map((stack, i) => (
          <ScrollReveal key={stack.title} delay={0.15 * i} className="h-full">
            <CardSpotlight className="h-full flex flex-col p-8 border border-white/5 bg-[#0a0a0b]/60 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.2)] rounded-3xl">
              <div className="relative flex items-center justify-center size-14 rounded-full bg-primary/10 border border-primary/20 mb-6 shadow-[0_0_20px_rgba(37,99,235,0.15)]">
                <div className="absolute inset-0 size-full rounded-full bg-primary/20 blur-md pointer-events-none" />
                {stack.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight font-libra">
                {stack.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                {stack.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] font-bold tracking-wide text-[#8da2fb] border border-blue-500/20 bg-blue-500/5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardSpotlight>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
