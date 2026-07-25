"use client";
import { useEffect, useRef } from "react";

export function DNAHelixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // DNA Config
    const numNodes = 40;
    const amplitude = Math.min(width * 0.15, 120); // Width of the helix
    const speed = 0.015;
    let phase = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const stepY = height / (numNodes - 1);

      // Phase shift for animation
      phase += speed;

      // Temporary array to sort nodes by depth (z-index simulation) for proper overlapping
      const renderQueue: Array<{
        type: "node" | "rung";
        y: number;
        x1?: number;
        x2?: number;
        z?: number;
        color?: string;
        radius?: number;
      }> = [];

      for (let i = 0; i < numNodes; i++) {
        const y = i * stepY;
        
        // Helix angle calculation
        const angle = (y * 0.005) + phase;
        
        // Coordinates for Strand 1 and Strand 2
        const x1 = centerX + Math.sin(angle) * amplitude;
        const x2 = centerX - Math.sin(angle) * amplitude;

        // Depth simulation (Z-coordinate from -1 to 1)
        const z1 = Math.cos(angle);
        const z2 = -Math.cos(angle);

        // Add rung (connecting line)
        renderQueue.push({
          type: "rung",
          y,
          x1,
          x2,
          z: Math.min(z1, z2), // Render rungs based on the back node depth
        });

        // Add nodes
        renderQueue.push({
          type: "node",
          y,
          x1,
          z: z1,
          radius: 4 + (z1 + 1) * 3, // Larger nodes in front
          color: z1 > 0 ? "rgba(37, 99, 235, 0.85)" : "rgba(37, 99, 235, 0.35)", // Primary blue with depth
        });

        renderQueue.push({
          type: "node",
          y,
          x2,
          z: z2,
          radius: 4 + (z2 + 1) * 3,
          color: z2 > 0 ? "rgba(96, 165, 250, 0.85)" : "rgba(96, 165, 250, 0.35)", // Light blue with depth
        });
      }

      // Sort queue by depth Z (from back to front)
      renderQueue.sort((a, b) => (a.z || 0) - (b.z || 0));

      // Draw all elements in depth order
      renderQueue.forEach((item) => {
        if (item.type === "rung" && item.x1 !== undefined && item.x2 !== undefined) {
          // Draw connecting rung
          ctx.beginPath();
          ctx.moveTo(item.x1, item.y);
          ctx.lineTo(item.x2, item.y);
          
          // Gradient between the two strands
          const rungGrad = ctx.createLinearGradient(item.x1, item.y, item.x2, item.y);
          const alpha = (item.z !== undefined ? (item.z + 1.5) / 2.5 : 0.5) * 0.3; // depth-based opacity
          rungGrad.addColorStop(0, `rgba(37, 99, 235, ${alpha})`);
          rungGrad.addColorStop(1, `rgba(96, 165, 250, ${alpha})`);
          
          ctx.strokeStyle = rungGrad;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        } else if (item.type === "node" && item.x1 !== undefined && item.radius !== undefined) {
          // Draw node/point
          ctx.beginPath();
          ctx.arc(item.x1, item.y, item.radius, 0, Math.PI * 2);
          ctx.fillStyle = item.color || "rgba(37, 99, 235, 0.8)";
          
          // Add subtle glow to foreground nodes
          if (item.z && item.z > 0.5) {
            ctx.shadowBlur = 8;
            ctx.shadowColor = "#2563EB";
          } else {
            ctx.shadowBlur = 0;
          }
          
          ctx.fill();
          ctx.shadowBlur = 0; // Reset shadow
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-45"
    />
  );
}
