import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    duration: string;
    description: string;
}

const experiences: ExperienceItem[] = [
    {
        id: 1,
        role: "Full Stack Developer",
        company: "Personal Portfolio & Brand",
        duration: "Jan 2024 – Present",
        description: "Designing and developing high-end creative websites with a focus on smooth user experiences, GSAP animations, and modern React architectures. Successfully delivered multiple client projects with positive feedback."
    },
    {
        id: 2,
        role: "Junior Web Developer",
        company: "Tech Solutions Inc.",
        duration: "June 2023 – Dec 2023",
        description: "Worked on large-scale web applications using Next.js and Tailwind CSS. Improved site performance by 40% through code splitting and image optimization techniques. Collaborated with UI designers to implement pixel-perfect layouts."
    },
    {
        id: 3,
        role: "Open Source Contributor",
        company: "GitHub Community",
        duration: "2022 – 2023",
        description: "Actively contributed to popular React libraries and UI components. Gained deep knowledge of JavaScript performance and accessible web design (WCAG) while working alongside senior developers globally."
    },
    {
        id: 4,
        role: "Computer Science Degree",
        company: "Iqra University",
        duration: "2020 – 2024",
        description: "Studied core software engineering principles, algorithm design, and modern web development. Built several award-winning academic projects including a real-time collaboration tool and a data visualization dashboard."
    }
];

export function Experience() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial states to prevent FOUC
            gsap.set(".experience-card", { autoAlpha: 0, y: 30 });
            gsap.set(".experience-title", { autoAlpha: 0, x: -30 });

            // Reveal Title
            gsap.to(".experience-title", {
                autoAlpha: 1,
                x: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".experience-title",
                    start: "top 90%",
                }
            });

            // Reveal all cards with a very subtle stagger for a premium feel
            // "In one time" implies they should feel more simultaneous
            gsap.to(".experience-card", {
                autoAlpha: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.1, // Reduced stagger for more 'one time' feel
                ease: "power4.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="py-24 lg:py-32 relative overflow-hidden bg-transparent"
        >
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <h2
                    className="experience-title font-serif italic font-bold mb-16 lg:mb-24"
                    style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        color: '#FAF9F6',
                        lineHeight: '1.1',
                        opacity: 0,
                        visibility: 'hidden'
                    }}
                >
                    My <span style={{ color: '#D4AF37' }}>Journey</span>
                </h2>

                <div
                    ref={containerRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto"
                >
                    {experiences.map((exp) => (
                        <motion.div
                            key={exp.id}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 0 30px rgba(212, 175, 55, 0.15)",
                                borderColor: "rgba(212, 175, 55, 0.4)"
                            }}
                            className="experience-card group p-8 lg:p-10 rounded-[2.5rem] border border-[rgba(250,249,246,0.1)] transition-all duration-500 bg-[rgba(250,249,246,0.02)] backdrop-blur-sm relative overflow-hidden"
                            style={{
                                backgroundColor: 'rgba(250, 249, 246, 0.03)',
                                opacity: 0,
                                visibility: 'hidden'
                            }}
                        >
                            {/* Subtle Gold Pulse in Background on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[rgba(212,175,55,0.03)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-[rgba(212,175,55,0.3)]" style={{ color: '#D4AF37' }}>
                                        {exp.duration}
                                    </span>
                                </div>

                                <h3 className="text-2xl lg:text-3xl font-serif italic font-bold mb-2" style={{ color: '#FAF9F6' }}>
                                    {exp.role}
                                </h3>

                                <h4 className="text-lg font-medium mb-6 flex items-center gap-2" style={{ color: 'rgba(250,249,246,0.5)' }}>
                                    <span className="w-8 h-[1px]" style={{ backgroundColor: 'rgba(212,175,55,0.5)' }}></span>
                                    {exp.company}
                                </h4>

                                <p className="text-base lg:text-lg leading-relaxed mt-auto" style={{ color: '#6B6B6B' }}>
                                    {exp.description}
                                </p>
                            </div>

                            {/* Decorative Corner Element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[rgba(212,175,55,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
