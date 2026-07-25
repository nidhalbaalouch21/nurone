import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function WhoWeAreSection() {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <ScrollReveal>
            <div className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-[#8da2fb] border border-white/10 bg-[#0f0f11d0] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)] uppercase mb-8">
              About Us
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-nevera text-white mb-6 leading-tight">
              Who{" "}
              <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
                We Are
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 font-libra">
              NURONE is a system for AI-augmented execution. We combine product
              architects, engineers, AI operators, and growth strategists into one
              accountable team.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-libra">
              You don't get tasks, hand-offs, or billable hours. You get outcomes,
              shipped with full visibility — without hiring a dozen people to manage
              them.
            </p>
          </ScrollReveal>
        </div>

        {/* Hand logo */}
        <ScrollReveal delay={0.2} y={32}>
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_50%,rgba(37,99,235,0.18),transparent_70%)]" />
            <motion.img
              src="/Hand_touch_logo.svg"
              alt="NURONE hand logo"
              className="relative mx-auto w-full max-w-[420px] h-auto"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
