import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
    onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                // Delay slightly before calling onComplete to allow smooth fade out
                gsap.to(preloaderRef.current, {
                    yPercent: -100,
                    duration: 1.2,
                    ease: "power4.inOut",
                    onComplete: onComplete
                });
            }
        });

        // Initial state
        gsap.set(textRef.current, { opacity: 0, y: 50 });
        gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left" });

        tl.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.5
        })
            .to(lineRef.current, {
                scaleX: 1,
                duration: 1.5,
                ease: "power2.inOut"
            }, "-=0.2")
            .to(textRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.8,
                ease: "power3.in",
                delay: 0.3
            });

        return () => {
            tl.kill();
        };
    }, [onComplete]);

    return (
        <div
            ref={preloaderRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0A] overflow-hidden"
        >
            <div ref={containerRef} className="relative flex flex-col items-center">
                <h1
                    ref={textRef}
                    className="brand-text font-extrabold text-[#FAF9F6] text-5xl md:text-7xl lg:text-8xl tracking-tighter"
                >
                    MAAZ.DEV
                </h1>
                <div className="w-48 md:w-64 h-[2px] mt-6 bg-[#6B6B6B]/20 relative overflow-hidden">
                    <div
                        ref={lineRef}
                        className="absolute inset-0 bg-[#D4AF37]"
                    />
                </div>
            </div>
        </div>
    );
}
