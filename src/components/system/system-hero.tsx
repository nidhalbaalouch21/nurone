import { motion, type Variants } from "framer-motion";
import { SplineScene } from "@/components/ui/spline";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

export function SystemHero() {
  return (
    <div className="relative w-full overflow-hidden min-h-[650px] sm:min-h-[800px] flex flex-col justify-start">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#2563EB_100%)]" />
      </div>

      {/* Spline Robot Scene */}
      <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-auto">
        <div className="w-full h-[120%] sm:h-[140%] translate-y-[25%] sm:translate-y-[30%]">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 mx-auto flex max-w-5xl flex-col items-center justify-center px-4 pt-24 pb-12 text-center pointer-events-none"
      >
        <motion.h1
          variants={itemVariants}
          className="mb-8 text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight font-nevera text-white leading-tight"
        >
          NURONE is{" "}
          <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent">
            not an agency
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-3xl text-base sm:text-xl text-gray-400 leading-relaxed font-libra"
        >
          It's an AI-powered operating system for building, scaling, and growing
          ambitious businesses.
        </motion.p>
      </motion.div>
    </div>
  );
}
