import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const SPIRAL_CONFIG = {
  points: 700,
  dotRadius: 1.8,
  duration: 3.0,
  color: "#ffffff",
  opacityMin: 0.25,
  opacityMax: 0.9,
  sizeMin: 0.5,
  sizeMax: 1.4,
};

function SpiralBackground() {
  const spiralRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = spiralRef.current;
    if (!container) return;

    const { points, dotRadius, duration, color, opacityMin, opacityMax, sizeMin, sizeMax } = SPIRAL_CONFIG;
    const SIZE = 560;
    const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
    const CENTER = SIZE / 2;
    const MAX_R = CENTER - 4 - dotRadius;

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", String(SIZE));
    svg.setAttribute("height", String(SIZE));
    svg.setAttribute("viewBox", `0 0 ${SIZE} ${SIZE}`);

    for (let i = 0; i < points; i++) {
      const idx = i + 0.5;
      const frac = idx / points;
      const r = Math.sqrt(frac) * MAX_R;
      const theta = idx * GOLDEN_ANGLE;
      const x = CENTER + r * Math.cos(theta);
      const y = CENTER + r * Math.sin(theta);

      const c = document.createElementNS(svgNS, "circle");
      c.setAttribute("cx", x.toFixed(3));
      c.setAttribute("cy", y.toFixed(3));
      c.setAttribute("r", String(dotRadius));
      c.setAttribute("fill", color);
      c.setAttribute("opacity", "0.6");

      const animR = document.createElementNS(svgNS, "animate");
      animR.setAttribute("attributeName", "r");
      animR.setAttribute("values", `${dotRadius * sizeMin};${dotRadius * sizeMax};${dotRadius * sizeMin}`);
      animR.setAttribute("dur", `${duration}s`);
      animR.setAttribute("begin", `${(frac * duration).toFixed(3)}s`);
      animR.setAttribute("repeatCount", "indefinite");
      animR.setAttribute("calcMode", "spline");
      animR.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
      c.appendChild(animR);

      const animO = document.createElementNS(svgNS, "animate");
      animO.setAttribute("attributeName", "opacity");
      animO.setAttribute("values", `${opacityMin};${opacityMax};${opacityMin}`);
      animO.setAttribute("dur", `${duration}s`);
      animO.setAttribute("begin", `${(frac * duration).toFixed(3)}s`);
      animO.setAttribute("repeatCount", "indefinite");
      animO.setAttribute("calcMode", "spline");
      animO.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
      c.appendChild(animO);

      svg.appendChild(c);
    }

    container.innerHTML = "";
    container.appendChild(svg);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1),rgba(255,255,255,0.1)_60%,transparent_75%)]"
      style={{ mixBlendMode: "screen" }}
    >
      <div ref={spiralRef} />
    </div>
  );
}

const FAQS = [
  {
    q: "Do you work with people who only have an idea?",
    a: "Yes. If the idea has a real market, a clear ambition, or strong founder expertise behind it, we can start before there is a product. We help you turn the idea into a clear prototype, so you can see it, test it, and decide what deserves to be built.",
  },
  {
    q: "Is the 72h prototype really free?",
    a: "Yes, for selected projects. We use it to understand your vision, show you how we think, and help both sides decide if there is a serious opportunity to build together.",
  },
  {
    q: "What if I already built an MVP with no-code, Lovable, Cursor, or freelancers?",
    a: "That is one of our strongest use cases. We review what exists, identify what is risky, what can be saved, and what needs to be rebuilt. Then we give the product the technical foundation it needs to launch and handle real users.",
  },
  {
    q: "Are you a software agency?",
    a: "No. A software agency usually delivers tasks. NURONE acts as an AI-augmented operating team combining product, engineering, automation, and growth. We don't just build features — we build the system behind the next stage of the business.",
  },
  {
    q: "Do you replace a CTO or work with our existing team?",
    a: "Both are possible. We can operate as your fractional CTO team if you don't have one, or plug into your existing team to accelerate delivery, architecture, automation, AI implementation, or growth infrastructure.",
  },
  {
    q: "How does the fractional CTO model work?",
    a: "You get access to the right team for your current stage: engineers, product architects, AI operators, DevOps, UX/UI, or automation experts. Hours are tracked, execution is visible, and you receive a weekly task log showing what was done, what is next, and what is blocked.",
  },
  {
    q: "Do you provide talent only?",
    a: "Yes. Through our talent layer, we can deploy vetted technical talent in 5–7 days. If the talent is not the right fit, we replace them within 72 hours.",
  },
  {
    q: "Do we own the code and assets?",
    a: "Yes. You own the code, product assets, workflows, documentation, and systems built for your project. No lock-in. No hostage situation. No dependency by design.",
  },
  {
    q: "How does the Growth Layer work?",
    a: "The Growth Layer is our private GTM system for selected businesses. We help with positioning, inbound, outbound, ads, lead generation, and revenue pipeline. In some cases, we work on performance, per lead, or equity-based models.",
  },
  {
    q: "Do you work for equity?",
    a: "For the right business, yes. If we see strong founder commitment, real potential, and a market worth attacking, we can invest our CTO and/or CMO execution in exchange for equity. We don't do this for every project.",
  },
  {
    q: "What kind of businesses do you accept?",
    a: "We work with ambitious founders and companies building something serious. The project must have a real problem, real market potential, and a founder who is ready to move. If we don't believe we can create leverage, we won't take it.",
  },
  {
    q: "What happens after I request access?",
    a: "We review where you are now: idea, MVP, product, operations, team, or growth. Then we tell you which Lab fits your stage, what we would do first, and whether NURONE is the right partner to help you win.",
  },
];

export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border bg-[#0a0a0b]/60 backdrop-blur-sm p-5 transition-all duration-300",
        open
          ? "border-primary/40 shadow-[0_0_25px_rgba(37,99,235,0.12)]"
          : "border-white/10 hover:border-white/25"
      )}
    >
      {/* Blue accent bar when open */}
      <div
        className={cn(
          "absolute left-0 top-0 h-full w-[3px] bg-primary transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
      />

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <h3 className="text-base md:text-lg font-semibold leading-tight text-white font-libra">
          {q}
        </h3>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 transition-transform duration-300",
            open ? "rotate-180 text-primary" : "text-white/50"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.4,0,.2,1)]",
          open ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="text-sm leading-relaxed text-gray-400">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [query, setQuery] = useState("");

  const filtered = query
    ? FAQS.filter(({ q, a }) => (q + a).toLowerCase().includes(query.toLowerCase()))
    : FAQS;

  return (
    <section id="faq" className="relative w-full overflow-hidden py-24">
      <SpiralBackground />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Header */}
        <ScrollReveal>
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-[#8da2fb] border border-white/10 bg-[#0f0f11d0] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)] uppercase mb-8">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-nevera text-white mb-6 leading-tight">
            Questions,{" "}
            <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
              answered.
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-libra">
            Everything you need to know about working with NURONE — from the 72h prototype to ownership, equity, and growth.
          </p>
        </div>
        </ScrollReveal>

        {/* Search */}
        <ScrollReveal delay={0.1}>
        <div className="mb-8 flex justify-center">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions…"
            className="h-11 w-full max-w-md rounded-xl border border-white/10 bg-[#0f0f11d0] backdrop-blur-md px-4 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-primary/60"
          />
        </div>
        </ScrollReveal>

        {/* FAQ list */}
        <div className="flex flex-col gap-3">
          {filtered.map((item, i) => (
            <ScrollReveal key={item.q} delay={Math.min(i * 0.05, 0.4)} y={16}>
              <FAQItem q={item.q} a={item.a} />
            </ScrollReveal>
          ))}
          {filtered.length === 0 && (
            <p className="py-8 text-center text-sm text-white/50">
              No questions match your search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
