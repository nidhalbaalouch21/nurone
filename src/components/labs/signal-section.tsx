import { Lightbulb, ShieldAlert, Rocket } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const signals = [
  {
    icon: <Lightbulb className="size-6 text-primary" />,
    text: "You have the insight, but not the product.",
  },
  {
    icon: <ShieldAlert className="size-6 text-primary" />,
    text: "Your prototype works, but you don't trust it.",
  },
  {
    icon: <Rocket className="size-6 text-primary" />,
    text: "You're tired of almost launching.",
  },
];

export function SignalSection() {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 text-center">
      {/* Badge */}
      <ScrollReveal>
        <div className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-[#8da2fb] border border-white/10 bg-[#0f0f11d0] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)] uppercase mb-8">
          The Signal
        </div>
      </ScrollReveal>

      {/* Heading */}
      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-nevera text-white mb-6 max-w-3xl mx-auto leading-tight">
          You're not too early.{" "}
          <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
            You're just missing the first real version.
          </span>
        </h2>
      </ScrollReveal>

      {/* Subtitle */}
      <ScrollReveal delay={0.2}>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-16 font-libra">
          Foundation is for ambitious founders who know the problem — but need the product,
          clarity, and confidence to move forward.
        </p>
      </ScrollReveal>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {signals.map((signal, i) => (
          <ScrollReveal key={i} delay={0.15 * i} className="h-full">
            <CardSpotlight className="h-full flex flex-col items-center text-center p-8 border border-white/5 bg-[#0a0a0b]/60 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.2)] rounded-3xl">
              <div className="relative flex items-center justify-center size-14 rounded-full bg-primary/10 border border-primary/20 mb-6 shadow-[0_0_20px_rgba(37,99,235,0.15)]">
                <div className="absolute inset-0 size-full rounded-full bg-primary/20 blur-md pointer-events-none" />
                {signal.icon}
              </div>
              <p className="text-lg font-bold text-white tracking-tight font-libra leading-snug">
                {signal.text}
              </p>
            </CardSpotlight>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
