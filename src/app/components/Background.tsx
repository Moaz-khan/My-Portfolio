import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // --- Particles System ---
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        const particleCount = 1000; // Increased slightly for global feel
        const mouse = { x: 0, y: 0 };
        const smoothMouse = { x: 0, y: 0 };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * (canvas?.width || 0);
                this.y = Math.random() * (canvas?.height || 0);
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                const dx = this.x - smoothMouse.x;
                const dy = this.y - smoothMouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 300;

                if (distance < maxDist) {
                    const force = (maxDist - distance) / maxDist;
                    this.x += dx * force * 0.02;
                    this.y += dy * force * 0.02;
                }

                if (canvas) {
                    if (this.x > canvas.width) this.x = 0;
                    if (this.x < 0) this.x = canvas.width;
                    if (this.y > canvas.height) this.y = 0;
                    if (this.y < 0) this.y = canvas.height;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(250, 249, 246, ${this.opacity})`;
                ctx.fill();
            }
        }

        const init = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            smoothMouse.x += (mouse.x - smoothMouse.x) * 0.05;
            smoothMouse.y += (mouse.y - smoothMouse.y) * 0.05;

            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener("resize", init);
        window.addEventListener("mousemove", handleMouseMove);
        init();
        animate();

        return () => {
            window.removeEventListener("resize", init);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
            {/* Decorative Elements (Fixed globally, behind content) */}
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#D4AF37] rounded-full opacity-60 blur-sm" />
            <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-[#D4AF37] rounded-full opacity-40 blur-sm" />

            {/* Texture Layer */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain-texture" />

            {/* Background Particles Canvas (In front of everything but transparent to clicks) */}
            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none mix-blend-difference"
            />
        </div>
    );
}
