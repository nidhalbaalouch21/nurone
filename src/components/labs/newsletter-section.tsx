import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section className="relative z-10 w-full max-w-3xl mx-auto px-6 py-24">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0b]/80 backdrop-blur-md p-10 sm:p-14 text-center shadow-[0_0_50px_rgba(37,99,235,0.12)]">
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_100%_at_50%_0%,rgba(37,99,235,0.15),transparent_70%)]" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight font-nevera text-white mb-4 leading-tight">
              Join Our{" "}
              <span className="bg-gradient-to-r from-primary to-[#60a5fa] bg-clip-text text-transparent font-semibold">
                Newsletter
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8 font-libra">
              Weekly systems for turning ideas into products — prototypes, architecture,
              automation, and growth. No noise. Unsubscribe anytime.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-bold text-white">
                <Check size={16} className="text-primary" />
                You're on the list. Welcome aboard.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-md flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-12 flex-1 rounded-xl border border-white/10 bg-[#0f0f11d0] px-4 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-primary/60"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-[#0f0f11] transition hover:bg-white/90 cursor-pointer"
                >
                  Subscribe <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
