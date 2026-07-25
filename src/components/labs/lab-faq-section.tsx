import { FAQItem } from "@/components/ui/faq-section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const LAB_FAQS = [
  {
    q: "I only have an idea. Can I still request access?",
    a: "Yes. Foundation is built for exactly that stage. If the idea has a real market, a clear ambition, or strong founder expertise behind it, we start with the free 72h prototype sprint so you can see it, test it, and decide what deserves to be built.",
  },
  {
    q: "Is the 72h prototype really free?",
    a: "Yes, for selected projects. We use it to understand your vision, show you how we think, and help both sides decide if there is a serious opportunity to build together.",
  },
  {
    q: "What if I already built something with Lovable, Cursor, Bubble, no-code, or freelancers?",
    a: "That is one of our strongest use cases. We review what exists, identify what is risky, what can be saved, and what needs to be rebuilt. Then we give the product the technical foundation it needs to launch and handle real users.",
  },
  {
    q: "Do you rebuild everything from scratch?",
    a: "No. Rebuilding everything is usually waste. We keep what is solid, isolate what is risky, and rebuild only the parts that block launch, scale, or real users. You get the truth about what is worth saving before we touch anything.",
  },
  {
    q: "What do I get after the free review or prototype?",
    a: "A clear build plan: what we would build, in what order, with which team, on what timeline, and at what budget. Then you decide — scoped build, fractional team, or walk away with the plan. No pressure either way.",
  },
  {
    q: "What is the difference between Scoped Build and Fractional Team?",
    a: "Scoped Build is a fixed project with a defined outcome, timeline, and price — best for a Blueprint, Prototype, or MVP. Fractional Team is ongoing hourly execution — best after launch, when the product needs continuous engineering, automation, and iteration.",
  },
  {
    q: "How does the hourly team model work?",
    a: "You get access to the right people for your current stage: engineers, product architects, AI operators, DevOps, or UX/UI. Hours are tracked, execution is visible, and you receive a weekly task log showing what was done, what is next, and what is blocked.",
  },
  {
    q: "Do I own the code?",
    a: "Yes. You own the code, product assets, workflows, documentation, and systems built for your project. No lock-in. No hostage situation. No dependency by design.",
  },
  {
    q: "What happens if the scope was underestimated?",
    a: "If we underestimate a scoped build, we finish the agreed work. Accountability is built into the model — the price of a bad estimate is ours, not yours.",
  },
  {
    q: "Do you accept every Foundation project?",
    a: "No. We run only 5 free starts per month. The project must have a real problem, real market potential, and a founder who is ready to move. If we don't believe we can create leverage, we won't take it.",
  },
];

export function LabFaqSection() {
  return (
    <section className="relative z-10 w-full max-w-3xl mx-auto px-6 py-24">
      {/* Header */}
      <ScrollReveal>
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-[#8da2fb] border border-white/10 bg-[#0f0f11d0] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)] uppercase mb-8">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-nevera text-white mb-6 leading-tight">
            Questions{" "}
            <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
              before Foundation.
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-libra">
            Everything you need to know before turning an idea, prototype, or fragile MVP into the
            first real version of the product.
          </p>
        </div>
      </ScrollReveal>

      {/* FAQ list */}
      <div className="flex flex-col gap-3">
        {LAB_FAQS.map((item, i) => (
          <ScrollReveal key={item.q} delay={Math.min(i * 0.05, 0.4)} y={16}>
            <FAQItem q={item.q} a={item.a} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
