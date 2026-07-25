"use client";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AnimatedNavLink = ({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
}) => {
  const defaultTextColor = isActive
    ? "text-white font-semibold"
    : "text-gray-400";
  const hoverTextColor = isActive ? "text-white font-semibold" : "text-white";
  const textSizeClass = "text-sm font-medium";

  return (
    <Link
      to={href}
      className={`group relative inline-block overflow-hidden h-5 flex items-center ${textSizeClass} whitespace-nowrap`}
    >
      <div className="flex flex-col transition-transform duration-300 ease-out transform group-hover:-translate-y-1/2">
        <span className={defaultTextColor}>{children}</span>
        <span className={hoverTextColor}>{children}</span>
      </div>
    </Link>
  );
};

export function Navbar({ onRequestAccess }: { onRequestAccess?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Derive shape from menu state; transition-delay keeps the pill shape
  // until the collapse animation finishes when closing.
  const headerShapeClass = isOpen
    ? "rounded-2xl delay-0"
    : "rounded-full delay-300";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logoElement = (
    <Link to="/" className="flex items-center text-white">
      <svg
        className="h-5 w-auto"
        viewBox="0 0 128 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_299_152)">
          <path
            d="M36.4302 6.40234L44.6709 15.7093V6.40234H48.5251V19.3279H44.6709L36.4302 10.594V19.3279H32.5938V6.40234H36.4302Z"
            fill="currentColor"
          />
          <path
            d="M50.5312 6.40234H54.4209V12.8473C54.4387 15.2481 55.7707 16.4473 57.5642 16.4473C59.5528 16.4473 60.7606 15.0808 60.7606 12.7919V6.40234H64.6325V13.0318C64.6325 17.3526 61.4006 19.5874 57.5642 19.5874C53.7277 19.5874 50.7087 17.3526 50.5312 13.1056V6.40234Z"
            fill="currentColor"
          />
          <path
            d="M66.625 6.40234H75.8074C77.8859 6.40234 79.5374 8.11935 79.5374 10.2804C79.5374 11.573 78.9341 12.7366 77.9746 13.4376C78.9518 13.9358 79.6084 15.0071 79.6084 16.2813V19.3279H75.6477V16.6503C75.6477 15.3207 75.5412 14.5643 74.0317 14.5089H70.4792V19.3291H66.625V6.40234ZM74.6528 11.8313C75.3271 11.8313 75.8961 11.0749 75.8961 10.3542C75.8961 9.63341 75.3271 8.877H74.6528Z"
            fill="currentColor"
          />
          <path
            d="M88.1301 6.10742C92.1263 6.10742 95.3405 8.3779 95.3405 12.8475C95.3405 17.3172 92.1263 19.6049 88.1301 19.6049C84.1339 19.6049 80.9375 17.3159 80.9375 12.8475C80.9375 8.37913 84.1694 6.10742 88.1301 6.10742ZM88.1301 16.4845C89.9768 16.4845 91.4863 15.2472 91.4863 12.866C91.4863 10.4848 89.9768 9.24748 88.1301 9.24748C86.2835 9.24748 84.8094 10.4664 84.8094 12.866C84.8094 15.2656 86.3012 16.4845 88.1301 16.4845Z"
            fill="currentColor"
          />
          <path
            d="M101.165 6.40234L109.405 15.7093V6.40234H113.26V19.3279H109.405L101.165 10.594V19.3279H97.3281V6.40234H101.165Z"
            fill="currentColor"
          />
          <path
            d="M127.946 6.40234V9.50427H119.12V11.5903H125.212V14.1387H119.12V16.2259H127.946V19.3279H115.266V6.40234H127.946Z"
            fill="currentColor"
          />
          <path
            d="M19.0628 13.0205C16.4909 13.0058 14.0327 12.1522 12.0109 10.7353C8.26913 8.11671 6.60466 4.61014 6.47098 -0.0390625C5.01471 0.00275568 3.43305 -0.0562818 0 -0.0218432V22.9757H6.3858C6.3858 20.2551 6.43194 17.6082 6.43194 14.7609C10.1832 18.0153 14.2586 19.6512 19.0959 19.6868C19.0959 17.4483 19.1018 15.2369 19.1018 13.0488H25.3492V7.51158H19.0427L19.0628 13.0205Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_299_152">
            <rect width="128" height="23" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );

  const navLinksData = [
    { label: "Home", href: "/" },
    { label: "Labs", href: "/labs/foundation" },
    { label: "The System", href: "/the-system" },
    { label: "Blog", href: "/blog" },
  ];

  const getInTouchButtonElement = (
    <button
      onClick={onRequestAccess}
      className="px-5 py-2 text-xs font-bold tracking-wider text-white border border-blue-500/50 bg-blue-950/30 rounded-full hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 cursor-pointer uppercase shadow-[0_0_12px_rgba(59,130,246,0.3)] w-full sm:w-auto whitespace-nowrap"
    >
      GET IN TOUCH
    </button>
  );

  return (
    <header
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-20
                       flex flex-col items-center
                       pl-8 pr-8 py-3.5 backdrop-blur-md
                       ${headerShapeClass}
                       border border-white/10 bg-[#0f0f11d0]
                       w-[calc(100%-2rem)] sm:w-auto
                       transition-[border-radius] duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between w-full gap-x-8 md:gap-x-24">
        <div className="flex items-center">{logoElement}</div>

        <nav className="hidden md:flex items-center space-x-8 text-sm">
          {navLinksData.map((link) => (
            <AnimatedNavLink
              key={link.label}
              href={link.href}
              isActive={pathname === link.href}
            >
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className="hidden sm:flex items-center">
          {getInTouchButtonElement}
        </div>

        <button
          className="md:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none cursor-pointer"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      <div
        className={`md:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? "max-h-[1000px] opacity-100 pt-4" : "max-h-0 opacity-0 pt-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col items-center space-y-4 text-base w-full">
          {navLinksData.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition-colors w-full text-center"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-center mt-4 w-full sm:hidden">
          {getInTouchButtonElement}
        </div>
      </div>
    </header>
  );
}
