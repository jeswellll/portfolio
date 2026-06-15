"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "timeline", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Honors" },
  { id: "skills", label: "Skills" },
  { id: "personal", label: "Off-Duty" },
];

export function SideNavigation() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = SECTIONS[0].id;
      
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (window.scrollY >= top - 240) {
            current = section.id;
          }
        }
      }

      // Force last section when scrolled to bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        current = SECTIONS[SECTIONS.length - 1].id;
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Desktop Minimal Dot Navigation */}
      <nav className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-end gap-4 z-50">
        <div className="relative flex flex-col items-end gap-3.5 py-4 px-2">
          {/* Faint vertical connector line */}
          <div className="absolute right-[17px] top-6 bottom-6 w-[1px] bg-slate-200" />

          {SECTIONS.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className="flex items-center gap-3 group focus:outline-none"
                aria-label={`Scroll to ${section.label}`}
              >
                {/* Minimal tooltip label - slides in on hover */}
                <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 group-hover:text-slate-700 transition-all duration-200 translate-x-2 group-hover:translate-x-0 pointer-events-none">
                  {section.label}
                </span>

                {/* Dot container */}
                <div className="w-[19px] h-[19px] flex items-center justify-center relative">
                  {isActive ? (
                    <motion.div
                      layoutId="activeDotDesktop"
                      className="w-1.5 h-3.5 bg-orange-600 rounded-full z-10 shadow-[0_0_6px_rgba(234,88,12,0.4)]"
                      transition={{ type: "spring", stiffness: 350, damping: 26 }}
                    />
                  ) : (
                    <div className="w-1.5 h-1.5 bg-slate-300 group-hover:bg-slate-400 rounded-full transition-all duration-200 group-hover:scale-125" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Floating Bottom Dots */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md px-4 py-2.5 rounded-full border border-slate-200/50 shadow-md">
          {SECTIONS.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className="w-5 h-5 flex items-center justify-center relative focus:outline-none"
                aria-label={`Scroll to ${section.label}`}
              >
                {isActive ? (
                  <motion.div
                    layoutId="activeDotMobile"
                    className="w-2.5 h-2.5 bg-orange-600 rounded-full shadow-[0_0_6px_rgba(234,88,12,0.4)]"
                    transition={{ type: "spring", stiffness: 350, damping: 26 }}
                  />
                ) : (
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
