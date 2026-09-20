import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, navLinks } from "../data/portfolio";
import { useScrollSpy } from "../hooks/useScrollSpy";

interface NavbarProps {
  dark: boolean;
  onToggle: () => void;
}

export default function Navbar({ dark, onToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(navLinks.map((l) => l.href.replace("#", "")));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const glassClass = dark
    ? `glass-dark ${scrolled ? "shadow-lg shadow-black/30" : ""}`
    : `glass-light ${scrolled ? "shadow-lg shadow-black/10" : ""}`;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className={`mx-4 md:mx-auto md:max-w-6xl mt-4 rounded-2xl ${glassClass} px-5 py-3 flex items-center justify-between`}>
        {/* Logo */}
        <a href="#about" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl accent-gradient flex items-center justify-center glow-accent-sm">
            <span className="text-white font-display font-semibold text-sm">SJ</span>
          </div>
          <span className={`font-display font-semibold text-sm hidden sm:block ${dark ? "text-white" : "text-slate-800"}`}>
            {personalInfo.name.split(" ")[0]}
            <span className="accent-gradient-text"> {personalInfo.name.split(" ")[1]}</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-accent-DEFAULT"
                    : dark
                    ? "text-gray-400 hover:text-white"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "rgba(91,140,255,0.1)" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={onToggle}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
              dark
                ? "bg-white/5 hover:bg-white/10 text-gray-300"
                : "bg-black/5 hover:bg-black/10 text-slate-600"
            }`}
            aria-label="Toggle theme"
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`md:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
              dark ? "bg-white/5 hover:bg-white/10 text-gray-300" : "bg-black/5 hover:bg-black/10 text-slate-600"
            }`}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-4">
              <span className={`block h-0.5 w-full transition-all duration-200 ${dark ? "bg-gray-300" : "bg-slate-600"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 transition-all duration-200 ${dark ? "bg-gray-300" : "bg-slate-600"} ${menuOpen ? "opacity-0 w-0" : "w-full"}`} />
              <span className={`block h-0.5 w-full transition-all duration-200 ${dark ? "bg-gray-300" : "bg-slate-600"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className={`mx-4 md:hidden mt-2 rounded-2xl ${glassClass} px-4 py-3 flex flex-col gap-1`}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                  active === link.href.replace("#", "")
                    ? "text-accent-DEFAULT bg-accent-DEFAULT/10"
                    : dark
                    ? "text-gray-400 hover:text-white hover:bg-white/5"
                    : "text-slate-600 hover:text-slate-900 hover:bg-black/5"
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
