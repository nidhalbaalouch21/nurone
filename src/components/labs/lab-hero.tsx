import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

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

const stats = [
  { value: "72h", label: "Prototype Sprint" },
  { value: "Free", label: "Code Review" },
  { value: "100%", label: "Code Ownership" },
];

export function LabHero({ onRequestAccess }: { onRequestAccess?: () => void }) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#2563EB_100%)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-4 pt-20 pb-24 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-[#8da2fb] border border-white/10 bg-[#0f0f11d0] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)] uppercase mb-8"
        >
          Entrance 01
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="mb-8 text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight font-nevera text-white leading-tight"
        >
          Foundation{" "}
          <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent">
            Lab
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-3xl text-sm sm:text-base text-gray-400 leading-relaxed font-libra"
        >
          For founders with an idea, deep expertise, a rough prototype, or a fragile MVP.
          We turn it into the first real version of the product — clarity, technical
          foundation, and a base that is ready for users, clients, or investors.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mb-10 flex flex-wrap items-center justify-center gap-6 sm:gap-16 font-libra"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 sm:gap-16">
              {i > 0 && <div className="h-8 w-px bg-border hidden sm:block" />}
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl font-extrabold text-foreground">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground/80 mt-1 font-bold">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants}>
          <Button
            onClick={onRequestAccess}
            size="lg"
            className="bg-white text-[#0f0f11] hover:bg-white/90 rounded-xl font-bold px-8 py-3 font-libra cursor-pointer"
          >
            Request Foundation Access
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
