import { FAQItem } from "@/components/ui/faq-section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const SYSTEM_FAQS = [
  {
    q: "What exactly is NURONE?",
    a: "NURONE is an AI-powered operating system for building, scaling, and growing businesses. Not an agency, not a dev shop — a single system that combines senior operators, proven playbooks, and AI automation into one accountable team that ships outcomes.",
  },
  {
    q: "How is NURONE different from a traditional agency?",
    a:
      "Agencies sell hours and hand-offs. We install systems. You don't get a rotating cast of juniors behind a senior pitch — you get senior operators augmented by AI, working inside playbooks we've already proven, with every week visible in your dashboard.",
  },
  {
    q: "Are you a software company or a growth company?",
    a:
      "Both, deliberately. Software without growth is a cost center; growth without software doesn't scale. NURONE builds the product and the machine that grows it — engineering, automation, and strategy under one roof.",
  },
  {
    q: "What does AI-augmented really mean?",
    a:
      "Every specialist on your account is multiplied by AI: code generation reviewed by senior engineers, research compressed by agents, QA and documentation automated. It's not AI replacing people — it's why one of our operators outproduces a traditional team.",
  },
  {
    q: "Do clients work with one person or a full team?",
    a:
      "You get one accountable lead — and the full system behind them. No chasing designers, developers, and strategists separately. One point of contact, one weekly rhythm, one outcome owner.",
  },
  {
    q: "How do you keep work transparent?",
    a:
      "Weekly task logs, live dashboards, and async demos. You see what was shipped, what's next, and what it earned — without scheduling a single status meeting.",
  },
  {
    q: "Do we own what NURONE builds?",
    a:
      "Yes — 100%. Code, designs, documentation, and infrastructure are yours from day one, in your repositories. No lock-in, no hostage situations. If you leave, everything stays with you.",
  },
  {
    q: "Can NURONE work with our existing team?",
    a:
      "Absolutely. We plug into your team as a force multiplier — taking over the lanes where we're strongest while your people keep ownership. Many clients use us to unblock roadmaps their team didn't have bandwidth for.",
  },
  {
    q: "Why do you say you don't work with everyone?",
    a:
      "Because the system only works with real commitment. We take a limited number of builds per month so every one gets senior attention. If a project isn't a fit, we say so early — and point you somewhere better.",
  },
  {
    q: "Where should we start?",
    a:
      "Request access and book a call. We'll map your situation, tell you honestly if NURONE is the right system for it, and if it is — your first step is usually a Blueprint or a free code review.",
  },
];

export function SystemFaqSection() {
  return (
    <section className="relative z-10 w-full max-w-4xl mx-auto px-4 py-24 text-center overflow-hidden">
      {/* Badge */}
      <ScrollReveal>
        <div className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-[#8da2fb] border border-white/10 bg-[#0f0f11d0] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)] uppercase mb-8">
          FAQ
        </div>
      </ScrollReveal>

      {/* Heading */}
      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-nevera text-white mb-6 max-w-3xl mx-auto leading-tight">
          Questions about{" "}
          <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
            the system.
          </span>
        </h2>
      </ScrollReveal>

      {/* Subtitle */}
      <ScrollReveal delay={0.2}>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-12 font-libra">
          Everything you need to know before plugging NURONE into your business.
        </p>
      </ScrollReveal>

      {/* Questions */}
      <div className="w-full text-left">
        {SYSTEM_FAQS.map((faq, i) => (
          <ScrollReveal key={faq.q} delay={Math.min(i * 0.05, 0.4)}>
            <FAQItem q={faq.q} a={faq.a} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
