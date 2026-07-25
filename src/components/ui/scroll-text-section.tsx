"use client";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const slides = [
  {
    lines: [
      "Ambition rarely dies in the idea.",
      "It breaks in the system behind it."
    ]
  },
  {
    lines: [
      "Prototypes look good, then collapse with real users.",
      "Products get traction, then slow under growth.",
      "Companies add tools and AI on top of chaos."
    ]
  },
  {
    lines: [
      "The market doesn't reward what you imagined.",
      "It rewards what your system can carry."
    ]
  }
];

export function ScrollTextSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the container relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest < 0.33) {
        setActiveIndex(0);
      } else if (latest < 0.66) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    });
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-[#0A0A0B]">
      {/* Sticky full-screen wrapper */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Soft glowing blue light effects on the sides */}
        <div className="absolute left-[-10%] top-[20%] w-[35%] h-[60%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute right-[-10%] top-[30%] w-[35%] h-[60%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
        
        {/* Subtle center background light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.04),transparent_70%)] pointer-events-none" />

        {/* Narrative Text Container */}
        <div className="relative z-10 w-full max-w-5xl h-[350px] sm:h-[450px] mx-auto px-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center gap-6 text-center"
            >
              {slides[activeIndex].lines.map((line, i) => (
                <p 
                  key={i} 
                  className="text-2xl sm:text-4xl md:text-5xl font-medium leading-normal text-[#E5E5E5] font-libra max-w-4xl tracking-tight"
                >
                  {line}
                </p>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
