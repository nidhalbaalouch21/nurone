"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { cn } from "@/lib/utils";

interface RequestAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RequestAccessModal({ isOpen, onClose }: RequestAccessModalProps) {
  const [step, setStep] = useState(1);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const choices = [
    { id: "mvp", label: "Build an MVP from scratch" },
    { id: "rebuild", label: "Rebuild a vibe-coded / no-code product" },
    { id: "backend", label: "Backend & infrastructure" },
    { id: "design", label: "UX/UI redesign (product or dashboard)" },
  ];

  const handleNext = () => {
    if (selectedChoice) {
      setStep(2);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after close animation
    setTimeout(() => {
      setStep(1);
      setSelectedChoice(null);
    }, 300);
  };

  const handleWhatsApp = () => {
    const choiceLabel = choices.find(c => c.id === selectedChoice)?.label || "Scaling system";
    const text = encodeURIComponent(
      `Hello Nurone, I would like to request access. I need help with: ${choiceLabel}.`
    );
    window.open(`https://wa.me/918637373116?text=${text}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full max-w-lg relative z-10"
          >
            <CardSpotlight className="w-full border border-white/10 p-6 sm:p-8 bg-[#0A0A0B] shadow-[0_0_50px_rgba(37,99,235,0.15)] relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer z-20"
              >
                <X size={20} />
              </button>

              {/* Logo / Progress Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center text-white">
                  <svg className="h-5 w-auto" viewBox="0 0 128 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_299_152_modal)">
                      <path d="M36.4302 6.40234L44.6709 15.7093V6.40234H48.5251V19.3279H44.6709L36.4302 10.594V19.3279H32.5938V6.40234H36.4302Z" fill="currentColor"/>
                      <path d="M50.5312 6.40234H54.4209V12.8473C54.4387 15.2481 55.7707 16.4473 57.5642 16.4473C59.5528 16.4473 60.7606 15.0808 60.7606 12.7919V6.40234H64.6325V13.0318C64.6325 17.3526 61.4006 19.5874 57.5642 19.5874C53.7277 19.5874 50.7087 17.3526 50.5312 13.1056V6.40234Z" fill="currentColor"/>
                      <path d="M66.625 6.40234H75.8074C77.8859 6.40234 79.5374 8.11935 79.5374 10.2804C79.5374 11.573 78.9341 12.7366 77.9746 13.4376C78.9518 13.9358 79.6084 15.0071 79.6084 16.2813V19.3279H75.6477V16.6503C75.6477 15.3207 75.5412 14.5643 74.0317 14.5089H70.4792V19.3291H66.625V6.40234ZM74.6528 11.8313C75.3271 11.8313 75.8961 11.0749 75.8961 10.3542C75.8961 9.63341 75.3271 8.877H74.6528Z" fill="currentColor"/>
                      <path d="M88.1301 6.10742C92.1263 6.10742 95.3405 8.3779 95.3405 12.8475C95.3405 17.3172 92.1263 19.6049 88.1301 19.6049C84.1339 19.6049 80.9375 17.3159 80.9375 12.8475C80.9375 8.37913 84.1694 6.10742 88.1301 6.10742ZM88.1301 16.4845C89.9768 16.4845 91.4863 15.2472 91.4863 12.866C91.4863 10.4848 89.9768 9.24748 88.1301 9.24748C86.2835 9.24748 84.8094 10.4664 84.8094 12.866C84.8094 15.2656 86.3012 16.4845 88.1301 16.4845Z" fill="currentColor"/>
                      <path d="M101.165 6.40234L109.405 15.7093V6.40234H113.26V19.3279H109.405L101.165 10.594V19.3279H97.3281V6.40234H101.165Z" fill="currentColor"/>
                      <path d="M127.946 6.40234V9.50427H119.12V11.5903H125.212V14.1387H119.12V16.2259H127.946V19.3279H115.266V6.40234H127.946Z" fill="currentColor"/>
                      <path d="M19.0628 13.0205C16.4909 13.0058 14.0327 12.1522 12.0109 10.7353C8.26913 8.11671 6.60466 4.61014 6.47098 -0.0390625C5.01471 0.00275568 3.43305 -0.0562818 0 -0.0218432V22.9757H6.3858C6.3858 20.2551 6.43194 17.6082 6.43194 14.7609C10.1832 18.0153 14.2586 19.6512 19.0959 19.6868C19.0959 17.4483 19.1018 15.2369 19.1018 13.0488H25.3492V7.51158H19.0427L19.0628 13.0205Z" fill="currentColor"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_299_152_modal">
                        <rect width="128" height="23" fill="currentColor"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                {step === 1 && (
                  <div className="text-right">
                    <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden inline-block align-middle mr-2">
                      <div className="h-full w-1/2 bg-primary" />
                    </div>
                    <span className="text-xs text-primary font-bold">50%</span>
                  </div>
                )}
              </div>

              {/* Step Contents */}
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl sm:text-3xl text-white font-normal mb-8 font-nevera">
                      What do you want help with <span className="text-primary font-semibold">right now?</span>
                    </h3>

                    <div className="space-y-3 mb-8">
                      {choices.map((choice) => {
                        const isSelected = selectedChoice === choice.id;
                        return (
                          <button
                            key={choice.id}
                            onClick={() => setSelectedChoice(choice.id)}
                            className={cn(
                              "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer",
                              isSelected
                                ? "border-primary bg-primary/10 text-white shadow-[0_0_15px_rgba(37,99,235,0.15)]"
                                : "border-white/5 bg-white/[0.02] text-gray-400 hover:border-white/10 hover:text-white"
                            )}
                          >
                            <span className="text-sm font-medium">{choice.label}</span>
                            <div
                              className={cn(
                                "size-5 rounded-md border flex items-center justify-center transition-all duration-200",
                                isSelected
                                  ? "border-primary bg-primary text-white"
                                  : "border-white/20 bg-transparent"
                              )}
                            >
                              {isSelected && <Check size={12} strokeWidth={3} />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={handleNext}
                        disabled={!selectedChoice}
                        className={cn(
                          "px-6 py-3 rounded-xl font-bold text-sm tracking-wide flex items-center gap-2 transition-all duration-300",
                          selectedChoice
                            ? "bg-primary text-white hover:bg-primary/90 cursor-pointer shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                            : "bg-white/5 text-gray-500 cursor-not-allowed"
                        )}
                      >
                        Next <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="text-center py-6"
                  >
                    <h3 className="text-3xl text-white font-normal mb-4 font-nevera">
                      That's <span className="text-primary font-semibold">it!</span>
                    </h3>
                    <p className="text-gray-400 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
                      We'll review your answers and prepare the right next step. If it's a good fit, let's talk directly.
                    </p>

                    <button
                      onClick={handleWhatsApp}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-[#60a5fa] text-white font-bold tracking-wide flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                    >
                      Continue on Whatsapp <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardSpotlight>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
