import { Play, Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah M.",
    role: "CEO, MedFlow",
    quote: "The 72h prototype showed us the business before we spent a dollar on development.",
    featured: false,
  },
  {
    name: "Adrian R.",
    role: "Founder, RetailOps",
    quote: "NURONE turned my rough idea into a working MVP in weeks, not months.",
    featured: true,
  },
  {
    name: "Daniel K.",
    role: "Founder, LogiTrack",
    quote: "They rebuilt our no-code MVP into a system that finally handles real users.",
    featured: false,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 text-center">
      {/* Badge */}
      <ScrollReveal>
        <div className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-[#8da2fb] border border-white/10 bg-[#0f0f11d0] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)] uppercase mb-8">
          Testimonials
        </div>
      </ScrollReveal>

      {/* Heading */}
      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-nevera text-white mb-6 max-w-3xl mx-auto leading-tight">
          What{" "}
          <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
            Founders
          </span>{" "}
          say
        </h2>
      </ScrollReveal>

      {/* Subtitle */}
      <ScrollReveal delay={0.2}>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-16 font-libra">
          Real products. Real outcomes from people who shipped with NURONE.
        </p>
      </ScrollReveal>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={0.15 * i} className="h-full">
            <div
              className={cn(
                "group relative overflow-hidden rounded-3xl border bg-[#0a0a0b]/60 backdrop-blur-sm text-left transition-all duration-300",
                t.featured
                  ? "border-primary/40 shadow-[0_0_40px_rgba(37,99,235,0.2)] md:-translate-y-4"
                  : "border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
              )}
            >
              {/* Video-style thumbnail */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#0f1729] via-[#101a33] to-[#0a0a0b]">
                <div className="absolute inset-0 [background:radial-gradient(80%_80%_at_50%_20%,rgba(37,99,235,0.25),transparent_70%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center justify-center size-14 rounded-full bg-primary text-white shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                    <Play size={22} className="ml-1 fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-1 text-[10px] font-bold tracking-wider text-white/70 uppercase backdrop-blur-sm">
                  Founder Story
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <Quote size={18} className="text-primary mb-3" />
                <p className="text-sm text-gray-300 leading-relaxed mb-5 font-libra">
                  {t.quote}
                </p>
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
