import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, type Variants, useMotionValue, useSpring, animate } from "framer-motion";

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 15 });

  useEffect(() => {
    animate(motionValue, value, { duration: duration });
  }, [motionValue, value, duration]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

export function HeroSection({ onRequestAccess }: { onRequestAccess?: () => void }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#2563EB_100%)]"></div>
      </div>

      {/* Floating app icon background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.img
          src="/app.svg"
          alt=""
          aria-hidden
          className="w-[85%] max-w-[680px] h-auto opacity-60 translate-y-[22%] drop-shadow-[0_0_60px_rgba(37,99,235,0.35)]"
          animate={{ y: [0, -20, 0], rotate: [0, 1.5, 0, -1.5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex min-h-[500px] flex-col items-center justify-center px-4 py-16 text-center max-w-5xl mx-auto"
      >
      <motion.h1
        variants={itemVariants}
        className="mb-8 text-3xl sm:text-5xl md:text-7xl font-normal tracking-tight font-nevera text-white leading-tight flex flex-col items-center gap-2"
      >
        <span className="block whitespace-nowrap">You bring the ambition.</span>
        <span className="block bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent whitespace-nowrap">
          We build the system to scale it.
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mb-10 max-w-4xl text-center leading-relaxed font-libra"
      >
        <span className="block text-lg sm:text-xl text-white font-bold mb-3">
          NURONE is an AI-augmented operating team of elite engineers, product architects and growth hackers.
        </span>
        <span className="block text-sm sm:text-base text-gray-400 font-medium max-w-3xl mx-auto">
          We help ambitious founders turn ideas, broken MVPs, and existing businesses into scalable products, automated systems, and revenue growth engines built to dominate their market.
        </span>
      </motion.p>

    

      <motion.div variants={itemVariants} className="flex gap-4">
        <Button 
          onClick={onRequestAccess}
          size="lg" 
          className="bg-white text-[#0f0f11] hover:bg-white/90 rounded-xl font-bold px-8 py-3 font-libra cursor-pointer"
        >
          Request Access
        </Button>
        <Button size="lg" variant="outline" className="border border-blue-500/30 bg-[#070913e0] text-[#8da2fb] hover:border-blue-400/50 hover:bg-blue-500/10 rounded-xl font-bold px-8 py-3 font-libra shadow-[0_0_15px_rgba(59,130,246,0.15)]">
          Explore Labs
        </Button>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-20 flex flex-wrap items-center justify-center gap-6 sm:gap-16 text-sm text-muted-foreground font-libra"
      >
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="text-3xl font-extrabold text-foreground">
            <AnimatedCounter value={72} />h
          </div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground/80 mt-1 font-bold">Protype sprint</div>
        </div>
        <div className="h-8 w-px bg-border hidden sm:block" />
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="text-3xl font-extrabold text-foreground">
            <AnimatedCounter value={100} />%
          </div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground/80 mt-1 font-bold">tracked execution</div>
        </div>
        <div className="h-8 w-px bg-border hidden sm:block" />
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="text-3xl font-extrabold text-foreground">
            $<AnimatedCounter value={10} />M+
          </div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground/80 mt-1 font-bold">revenu pipeline</div>
        </div>
      </motion.div>
      </motion.div>
    </div>
  );
}
