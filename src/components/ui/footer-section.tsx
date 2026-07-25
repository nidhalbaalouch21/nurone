"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

// Custom inline SVG icons because brand icons are removed from newer lucide-react versions
const Facebook = ({ size = 20, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const Instagram = ({ size = 20, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Twitter = ({ size = 20, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Dribbble = ({ size = 20, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56"></path>
  </svg>
);

const GlobeIcon = ({ size = 20, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#80eeb4" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 font-[helvetica] text-7xl font-bold dark:stroke-neutral-800"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-[#2563eb] font-[helvetica] text-7xl font-bold 
        dark:stroke-[#2563eb99]"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        whileInView={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #0F0F1166 50%, #2563eb33 100%)",
      }}
    />
  );
};

export function Footer() {
  // Footer link data
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { label: "Company History", href: "#" },
        { label: "Meet the Team", href: "#" },
        { label: "Employee Handbook", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "FAQs", href: "#" },
        { label: "Support", href: "#" },
        {
          label: "Live Chat",
          href: "#",
          pulse: true,
        },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#2563eb]" />,
      text: "hello@nurone.com",
      href: "mailto:hello@nurone.com",
    },
    {
      icon: <Phone size={18} className="text-[#2563eb]" />,
      text: "+91 86373 73116",
      href: "tel:+918637373116",
    },
    {
      icon: <MapPin size={18} className="text-[#2563eb]" />,
      text: "Sylhet, Bangladesh",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Dribbble size={20} />, label: "Dribbble", href: "#" },
    { icon: <GlobeIcon size={20} />, label: "Globe", href: "#" },
  ];

  return (
    <footer className="bg-[#0F0F11]/10 relative h-fit overflow-hidden w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <ScrollReveal>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center text-white">
              <svg className="h-6 w-auto" viewBox="0 0 128 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_299_152_footer)">
                  <path d="M36.4302 6.40234L44.6709 15.7093V6.40234H48.5251V19.3279H44.6709L36.4302 10.594V19.3279H32.5938V6.40234H36.4302Z" fill="currentColor"/>
                  <path d="M50.5312 6.40234H54.4209V12.8473C54.4387 15.2481 55.7707 16.4473 57.5642 16.4473C59.5528 16.4473 60.7606 15.0808 60.7606 12.7919V6.40234H64.6325V13.0318C64.6325 17.3526 61.4006 19.5874 57.5642 19.5874C53.7277 19.5874 50.7087 17.3526 50.5312 13.1056V6.40234Z" fill="currentColor"/>
                  <path d="M66.625 6.40234H75.8074C77.8859 6.40234 79.5374 8.11935 79.5374 10.2804C79.5374 11.573 78.9341 12.7366 77.9746 13.4376C78.9518 13.9358 79.6084 15.0071 79.6084 16.2813V19.3279H75.6477V16.6503C75.6477 15.3207 75.5412 14.5643 74.0317 14.5089H70.4792V19.3291H66.625V6.40234ZM74.6528 11.8313C75.3271 11.8313 75.8961 11.0749 75.8961 10.3542C75.8961 9.63341 75.3271 8.877H74.6528Z" fill="currentColor"/>
                  <path d="M88.1301 6.10742C92.1263 6.10742 95.3405 8.3779 95.3405 12.8475C95.3405 17.3172 92.1263 19.6049 88.1301 19.6049C84.1339 19.6049 80.9375 17.3159 80.9375 12.8475C80.9375 8.37913 84.1694 6.10742 88.1301 6.10742ZM88.1301 16.4845C89.9768 16.4845 91.4863 15.2472 91.4863 12.866C91.4863 10.4848 89.9768 9.24748 88.1301 9.24748C86.2835 9.24748 84.8094 10.4664 84.8094 12.866C84.8094 15.2656 86.3012 16.4845 88.1301 16.4845Z" fill="currentColor"/>
                  <path d="M101.165 6.40234L109.405 15.7093V6.40234H113.26V19.3279H109.405L101.165 10.594V19.3279H97.3281V6.40234H101.165Z" fill="currentColor"/>
                  <path d="M127.946 6.40234V9.50427H119.12V11.5903H125.212V14.1387H119.12V16.2259H127.946V19.3279H115.266V6.40234H127.946Z" fill="currentColor"/>
                  <path d="M19.0628 13.0205C16.4909 13.0058 14.0327 12.1522 12.0109 10.7353C8.26913 8.11671 6.60466 4.61014 6.47098 -0.0390625C5.01471 0.00275568 3.43305 -0.0562818 0 -0.0218432V22.9757H6.3858C6.3858 20.2551 6.43194 17.6082 6.43194 14.7609C10.1832 18.0153 14.2586 19.6512 19.0959 19.6868C19.0959 17.4483 19.1018 15.2369 19.1018 13.0488H25.3492V7.51158H19.0427L19.0628 13.0205Z" fill="currentColor"/>
                </g>
                <defs>
                  <clipPath id="clip0_299_152_footer">
                    <rect width="128" height="23" fill="currentColor"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Nurone is an AI-augmented operating team of elite engineers, product architects and growth hackers. We build scalable products and automated systems.
            </p>
          </div>
          </ScrollReveal>

          {/* Footer link sections */}
          {footerLinks.map((section, i) => (
            <ScrollReveal key={section.title} delay={0.1 + 0.05 * i}>
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#2563eb] transition-colors"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#2563eb] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            </ScrollReveal>
          ))}

          {/* Contact section */}
          <ScrollReveal delay={0.2}>
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-400">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#2563eb] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#2563eb] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          </ScrollReveal>
        </div>

        <hr className="border-t border-gray-800 my-8" />

        {/* Footer bottom */}
        <ScrollReveal delay={0.25} y={12}>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#2563eb] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-gray-400">
            &copy; {new Date().getFullYear()} Nurone. All rights reserved.
          </p>
        </div>
        </ScrollReveal>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="Nurone" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
