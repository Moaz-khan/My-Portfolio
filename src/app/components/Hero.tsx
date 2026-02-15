import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const tagRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // --- Parallax Effect ---
    const moveParallax = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;

      gsap.to(headingRef.current, { x: x * 20, y: y * 20, duration: 1, ease: "power2.out" });
      gsap.to(tagRef.current, { x: x * 10, y: y * 10, duration: 1.2, ease: "power2.out" });
      gsap.to(subRef.current, { x: x * 5, y: y * 5, duration: 1.4, ease: "power2.out" });
    };

    window.addEventListener("mousemove", moveParallax);
    return () => {
      window.removeEventListener("mousemove", moveParallax);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-2"
          >
            <div className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: '#D4AF37' }}>
            </div>
            <span
              className="text-sm font-bold tracking-wider uppercase"
              style={{ color: '#D4AF37' }}
            >
              WEB STUDIO
            </span>
          </motion.div>

          {/* Massive MAAZ.DEV Text */}
          <motion.h1
            ref={headingRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="brand-text font-extrabold leading-none mb-12"
            style={{
              fontSize: 'clamp(4rem, 15vw, 12rem)',
              color: '#FAF9F6',
              letterSpacing: '-0.02em'
            }}
          >
            MAAZ.DEV
          </motion.h1>

          {/* Italic Serif Tagline */}
          <motion.h2
            ref={tagRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif italic font-bold mb-6"
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              color: '#FAF9F6',
              lineHeight: '1.2'
            }}
          >
            Reliable Web
            <br />
            Solutions
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            ref={subRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg max-w-2xl"
            style={{ color: '#6B6B6B' }}
          >
            We build modern websites that empower your business and inspire your audience.
          </motion.p>
        </div>
      </div>
    </section >
  );
}
