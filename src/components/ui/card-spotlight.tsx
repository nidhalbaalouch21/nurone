"use client";
import type { MouseEvent as ReactMouseEvent } from "react";
import { useMotionValue, motion, useMotionTemplate, useSpring, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#2563EB33", // primary blue transparent
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & HTMLMotionProps<"div">) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D Tilt values with spring physics
  const rotateXVal = useMotionValue(0);
  const rotateYVal = useMotionValue(0);
  const rotateX = useSpring(rotateXVal, { stiffness: 150, damping: 22 });
  const rotateY = useSpring(rotateYVal, { stiffness: 150, damping: 22 });

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    // Spotlight cursor tracking
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    // 3D Tilt calculations
    const xOffset = clientX - left - width / 2;
    const yOffset = clientY - top - height / 2;
    
    const maxTilt = 12; // Maximum tilt angle in degrees
    rotateXVal.set(-(yOffset / (height / 2)) * maxTilt);
    rotateYVal.set((xOffset / (width / 2)) * maxTilt);
  }

  function handleMouseLeave() {
    rotateXVal.set(0);
    rotateYVal.set(0);
  }

  return (
    <motion.div
      className={cn(
        "group/spotlight p-8 rounded-2xl relative border border-white/10 bg-[#0A0A0B] overflow-hidden cursor-pointer",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transform: "perspective(1000px)",
      }}
      {...props}
    >
      {/* Spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-2xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              ${color},
              transparent 80%
            )
          `,
          transform: "translateZ(20px)", // Elevate spotlight in 3D space
        }}
      />

      {/* Interactive Dot Matrix Pattern (CanvasRevealEffect alternative) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 transition-opacity duration-300 group-hover/spotlight:opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
          transform: "translateZ(10px)",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
};
