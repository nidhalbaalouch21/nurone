"use client";
import { Zap, Bot, Network } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function DifferenceSection() {
  const cards = [
    {
      icon: <Zap className="size-6 text-primary" />,
      title: "Technical Backbone",
      description: "We build and rebuild products with the architecture, code quality, and delivery discipline needed to scale.",
    },
    {
      icon: <Bot className="size-6 text-primary" />,
      title: "Agentic Operations",
      description: "We combine AI systems, automations, and expert operators to remove bottlenecks and accelerate execution.",
    },
    {
      icon: <Network className="size-6 text-primary" />,
      title: "Growth Infrastructure",
      description: "We turn positioning, outbound, inbound, and ads into repeatable systems for leads, pipeline, and revenue.",
    },
  ];

  return (
    <WavyBackground
      containerClassName="py-24 min-h-fit w-full relative z-10"
      className="w-full max-w-6xl mx-auto px-6 text-center"
      waveOpacity={0.15} // soft waves matching dark background
      blur={12}
    >
      {/* Glass tag/badge */}
      <ScrollReveal>
        <div className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-[#8da2fb] border border-white/10 bg-[#0f0f11d0] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)] uppercase mb-8">
          The NURONE Difference
        </div>
      </ScrollReveal>

      {/* Heading */}
      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-nevera text-white mb-6 max-w-3xl mx-auto leading-tight">
          Not another agency.{" "}
          <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
            An execution system.
          </span>
        </h2>
      </ScrollReveal>

      {/* Subtitle */}
      <ScrollReveal delay={0.2}>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-16 font-libra">
          Built for founders who want speed, technical depth, AI leverage, and revenue growth in one team.
        </p>
      </ScrollReveal>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {cards.map((card, i) => (
          <ScrollReveal key={i} delay={0.15 * i} className="h-full">
          <CardSpotlight
            className="h-full flex flex-col items-center text-center p-8 border border-white/5 bg-[#0a0a0b]/60 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.2)] rounded-3xl"
          >
            {/* Glowing Icon Wrapper */}
            <div className="relative flex items-center justify-center size-14 rounded-full bg-primary/10 border border-primary/20 mb-6 shadow-[0_0_20px_rgba(37,99,235,0.15)]">
              <div className="absolute inset-0 size-full rounded-full bg-primary/20 blur-md pointer-events-none" />
              {card.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight font-libra">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed max-w-[270px]">
              {card.description}
            </p>
          </CardSpotlight>
          </ScrollReveal>
        ))}
      </div>
    </WavyBackground>
  );
}
