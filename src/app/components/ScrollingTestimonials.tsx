import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        author: "James Wilson",
        role: "CEO, TechFlow",
        text: "The web solutions provided by MAAZ.DEV are truly world-class. Our conversion rate increased by 200% after the relaunch.",
    },
    {
        author: "Sarah Chen",
        role: "Director, Innovate AI",
        text: "Working with this studio has been a game-changer for our digital strategy. Professional, fast, and highly creative.",
    },
    {
        author: "Marco Rossi",
        role: "Founder, Studio 54",
        text: "Their attention to detail and ability to translate complex requirements into elegant code is unmatched.",
    },
    {
        author: "Elena Petrova",
        role: "Marketing Head, Global Pulse",
        text: "The most reliable web development partner we have ever had. The performance of our site is incredible now.",
    },
    {
        author: "David Miller",
        role: "Product Manager, Sphere",
        text: "Beautiful design combined with robust engineering. MAAZ.DEV exceeded our expectations in every way.",
    }
];

export function ScrollingTestimonials() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        rowsRef.current.forEach((row, index) => {
            if (!row) return;

            const direction = index % 2 === 0 ? 1 : -1;
            const initialOffset = direction === 1 ? -100 : 100;

            gsap.fromTo(row,
                {
                    xPercent: initialOffset,
                },
                {
                    xPercent: -initialOffset,
                    ease: "none",
                    scrollTrigger: {
                        trigger: row,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5,
                    }
                }
            );

            // Fade-in/Scale effect for the row contents
            gsap.fromTo(row,
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: row,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section
            id="testimonials"
            className="py-24 lg:py-32 relative overflow-hidden"
            ref={containerRef}
        >
            <div className="container mx-auto px-6 lg:px-12 mb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span
                        className="text-sm font-bold tracking-wider uppercase inline-block mb-6"
                        style={{ color: '#D4AF37' }}
                    >
                        TESTIMONIALS
                    </span>
                    <h2
                        className="font-serif italic font-bold mb-4"
                        style={{
                            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                            color: '#FAF9F6',
                            lineHeight: '1.1'
                        }}
                    >
                        What our{" "}
                        <span style={{ color: '#D4AF37' }}>Clients Say</span>
                    </h2>
                </motion.div>
            </div>

            {/* Alternating Scrolling Rows */}
            <div className="flex flex-col gap-8 lg:gap-12">
                {testimonials.map((t, index) => (
                    <div
                        key={index}
                        ref={el => { rowsRef.current[index] = el; }}
                        className="whitespace-nowrap w-full flex justify-center py-4"
                    >
                        <div
                            className="inline-block px-12 py-10 lg:py-12 bg-[#1A1A1A] border border-[rgba(250,249,246,0.05)] rounded-[3rem] shadow-2xl relative group"
                            style={{
                                maxWidth: '90vw',
                                width: '100%',
                                margin: '0 20px'
                            }}
                        >
                            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                                <span className="text-6xl text-[#D4AF37] opacity-30 font-serif leading-none mb-4">"</span>
                                <p
                                    className="text-xl md:text-2xl lg:text-3xl font-serif italic mb-8 whitespace-normal h-auto line-clamp-3 md:line-clamp-none"
                                    style={{ color: '#FAF9F6', lineHeight: '1.4' }}
                                >
                                    {t.text}
                                </p>
                                <div className="flex flex-col items-center">
                                    <span className="text-[#FAF9F6] font-bold text-lg mb-1">{t.author}</span>
                                    <span className="text-[#6B6B6B] text-sm uppercase tracking-widest">{t.role}</span>
                                </div>
                            </div>

                            {/* Decorative Subtle Gradient */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[3rem]"
                                style={{
                                    background: 'radial-gradient(circle at center, rgba(230, 57, 70, 0.03) 0%, transparent 70%)'
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
