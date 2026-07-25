"use client";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function WorkflowSection() {
  const steps = [
    {
      num: "01",
      title: "Fit Check",
      desc: "Before we sell anything, we look at your idea, MVP, product, workflow, or growth system. We identify what is real, what is risky, what is blocking progress, and whether NURONE is the right team to move it forward. ",
      boldDesc: "This protects both sides.",
      align: "right",
      top: "top-[10%]",
      leftOffset: "md:left-[55%]",
      lineWidth: "w-[150px] sm:w-[250px]",
      lineDir: "left",
    },
    {
      num: "02",
      title: "Choose The Right Lab",
      desc: "You enter the Lab that matches your current stage. Prototype, launch, scale, operations, talent, or growth — each path is built for a specific bottleneck, not a generic service package. No wrong team. No wasted motion.",
      align: "left",
      top: "top-[30%]",
      leftOffset: "md:right-[55%]",
      lineWidth: "w-[150px] sm:w-[250px]",
      lineDir: "right",
    },
    {
      num: "03",
      title: "Build With Visibility",
      desc: "Execution runs on a clear weekly rhythm. You see what was done, what is next, what is blocked, who worked on what, and how every hour was used. No black box. No blind trust.",
      align: "right",
      top: "top-[50%]",
      leftOffset: "md:left-[55%]",
      lineWidth: "w-[120px] sm:w-[220px]",
      lineDir: "left",
    },
    {
      num: "04",
      title: "Stay Accountable",
      desc: "You own the code, the assets, the systems, and the progress. If we underestimate a scoped build, we finish the agreed work. If a talent is not the right fit, we replace them fast. Accountability is built into the model.",
      align: "left",
      top: "top-[70%]",
      leftOffset: "md:right-[55%]",
      lineWidth: "w-[180px] sm:w-[280px]",
      lineDir: "right",
    },
    {
      num: "05",
      title: "Scale Or Exit Cleanly",
      desc: "When the stage is complete, you decide what happens next. Continue with the team, unlock growth, scale the system, or leave with everything in hand. No dependency. No pressure. No messy handoff.",
      align: "center",
      top: "top-[90%]",
      leftOffset: "md:left-1/2 md:-translate-x-1/2",
      lineWidth: "h-[100px]",
      lineDir: "up",
    },
  ];

  return (
    <section id="how-it-works" className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 text-center">
      {/* Badge */}
      <ScrollReveal>
        <div className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-[#8da2fb] border border-white/10 bg-[#0f0f11d0] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)] uppercase mb-8">
          How it works
        </div>
      </ScrollReveal>

      {/* Heading */}
      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-nevera text-white mb-6 max-w-3xl mx-auto leading-tight">
          A Clear Path From{" "}
          <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
            Ambition To Execution.
          </span>
        </h2>
      </ScrollReveal>

      {/* Subtitle */}
      <ScrollReveal delay={0.2}>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-24 font-libra">
          First we understand where you stand. Then we choose the right Lab, assemble the right team, and execute with full visibility.
        </p>
      </ScrollReveal>

      {/* Responsive Storytelling Container */}
      <div className="relative w-full min-h-[1700px] md:min-h-[1400px] flex flex-col md:block items-center gap-12">
        {/* Central Vertical Timeline Line */}
        <div className="absolute top-0 bottom-[15%] left-1/2 -translate-x-1/2 w-[1px] bg-white/10 hidden md:block pointer-events-none" />

        {steps.map((step, idx) => {
          const isLeft = step.align === "left";
          const isRight = step.align === "right";
          
          return (
            <motion.div
              key={idx}
              initial={{ 
                opacity: 0, 
                x: isLeft ? -40 : isRight ? 40 : 0, 
                y: step.align === "center" ? 40 : 0 
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full max-w-[460px] md:absolute ${step.top} ${step.leftOffset} z-20`}
            >
              <CardSpotlight className="text-left border border-white/5 bg-[#0a0a0b]/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)] rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-medium text-white mb-4 font-libra">
                <span className="text-[#2563EB] font-bold mr-2">{step.num}.</span>
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-libra">
                {step.desc}
                {step.boldDesc && (
                  <strong className="block mt-2 text-white italic font-semibold font-libra">
                    {step.boldDesc}
                  </strong>
                )}
              </p>
            </CardSpotlight>

            {/* Connection Pointer Lines (Desktop Only) */}
            {step.lineDir === "left" && (
              <div
                className={`absolute right-full top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent to-[#2563EB]/40 hidden md:flex items-center justify-end ${step.lineWidth}`}
              >
                {/* Connector dot on the DNA helix */}
                <div className="absolute left-0 size-2.5 rounded-full bg-white border border-[#2563EB] shadow-[0_0_8px_#2563EB]" />
              </div>
            )}

            {step.lineDir === "right" && (
              <div
                className={`absolute left-full top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-l from-transparent to-[#2563EB]/40 hidden md:flex items-center justify-start ${step.lineWidth}`}
              >
                {/* Connector dot on the DNA helix */}
                <div className="absolute right-0 size-2.5 rounded-full bg-white border border-[#2563EB] shadow-[0_0_8px_#2563EB]" />
              </div>
            )}

            {step.lineDir === "up" && (
              <div
                className={`absolute bottom-full left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-t from-transparent to-[#2563EB]/40 hidden md:flex items-end justify-center ${step.lineWidth}`}
              >
                {/* Connector dot on the DNA helix */}
                <div className="absolute top-0 size-2.5 rounded-full bg-white border border-[#2563EB] shadow-[0_0_8px_#2563EB]" />
              </div>
            )}
          </motion.div>
        )})}
      </div>
    </section>
  );
}
