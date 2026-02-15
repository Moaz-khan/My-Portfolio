import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Journey", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Main Pill-Shaped Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div
          className="flex items-center gap-2 px-2 py-2 rounded-[50px] backdrop-blur-xl"
          style={{
            backgroundColor: 'rgba(26, 26, 26, 0.8)',
            border: '1px solid rgba(250, 249, 246, 0.1)'
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 px-4">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
              <span className="text-[#0A0A0A] font-bold text-sm">M</span>
            </div>
            <span className="brand-text text-[#FAF9F6] text-lg font-extrabold tracking-tight">
              MAAZ.DEV
            </span>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-[rgba(250,249,246,0.1)]" />

          {/* Nav Links */}
          <div className="flex items-center gap-1 relative">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.name);
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative px-5 py-2 text-sm font-medium text-[#FAF9F6] hover:text-white transition-colors z-10"
              >
                {link.name}
                {activeLink === link.name && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-[#FAF9F6] rounded-[50px] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {activeLink === link.name && (
                  <span className="absolute inset-0 flex items-center justify-center text-[#0A0A0A] font-semibold">
                    {link.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Language Switcher - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-[50px] backdrop-blur-xl"
          style={{
            backgroundColor: 'rgba(26, 26, 26, 0.8)',
            border: '1px solid rgba(250, 249, 246, 0.1)'
          }}
        >
          <button className="text-[#FAF9F6] text-sm font-medium hover:text-white transition-colors">
            🇺🇸 EN
          </button>
          <div className="h-4 w-px bg-[rgba(250,249,246,0.1)]" />
          <button className="text-[#6B6B6B] text-sm font-medium hover:text-[#FAF9F6] transition-colors">
            🇮🇹 IT
          </button>
        </div>
      </div>

      {/* Privacy Button - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="w-12 h-12 rounded-full backdrop-blur-xl flex items-center justify-center hover:scale-110 transition-transform"
          style={{
            backgroundColor: 'rgba(26, 26, 26, 0.8)',
            border: '1px solid rgba(250, 249, 246, 0.1)'
          }}
        >
          <span className="text-[#FAF9F6] text-xl">⚙️</span>
        </button>
      </div>
    </>
  );
}
