import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Profile2 from "../assets/Profile2.png";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const story = [
    {
      id: 1,
      text: "Hi, I’m Muhammad Maaz, a passionate Full Stack Web Developer with a love for creating dynamic and visually appealing web experiences. From the first time I wrote code, I knew I wanted to craft websites that not only work but also feel alive.",
      position: "center",
      small: true
    },
    {
      id: 2,
      text: "I began my journey by exploring HTML, CSS, and JavaScript, gradually moving into frameworks like Next.js and libraries like GSAP for animations. Early on, I experimented with small personal projects, learning by doing and constantly pushing my boundaries.",
      position: "center",
      small: true
    },
    {
      id: 3,
      text: "Over time, I’ve completed numerous projects, ranging from portfolio websites to interactive web apps. Each project taught me something new — whether it was performance optimization, responsive design, or advanced animations — helping me grow as a developer.",
      position: "center",
      small: true

    },
    {
      id: 4,
      text: "I am always looking for new challenges and opportunities to push my creative limits further. Let's build something amazing together.",
      position: "center",
      small: true
    }
  ];

  const triggerRef = useRef<HTMLDivElement>(null);
  const myRef = useRef<HTMLSpanElement>(null);
  const storyRef = useRef<HTMLSpanElement>(null);
  const splitLayoutRef = useRef<HTMLDivElement>(null);
  const paragraphsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial State: Strict Visibility Management
      gsap.set([myRef.current, storyRef.current, splitLayoutRef.current], {
        autoAlpha: 0,
        y: 30
      });
      gsap.set(paragraphsRef.current, {
        autoAlpha: 0,
        y: 40,
        x: 0
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=8000", // Large scroll padding for the full sequence
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      // --- STEP 1: Title Word Reveal ---
      tl.to(myRef.current, { autoAlpha: 1, y: 0, duration: 2 });
      tl.to(storyRef.current, { autoAlpha: 1, y: 0, duration: 2 }, "+=1");

      // --- STEP 2: Split Layout (Name Left, Image Right) ---
      // Fade out Step 1
      tl.to([myRef.current, storyRef.current], { autoAlpha: 0, y: -20, duration: 1.5 }, "+=1.5");
      // Show Split Layout
      tl.to(splitLayoutRef.current, { autoAlpha: 1, y: 0, duration: 2.5 });

      // --- STEP 3: Paragraph Story Reveal (One by One) ---
      // Transition out Step 2
      tl.to(splitLayoutRef.current, {
        autoAlpha: 0,
        y: -50,
        duration: 2,
        ease: "power2.in"
      }, "+=2");

      // Sequential Paragraph Revels in Staggered Positions
      story.forEach((item, i) => {
        const para = paragraphsRef.current[i];
        if (!para) return;

        // Determine slide direction based on position
        const xOffset = item.position.includes("left") ? -50 : 50;

        tl.fromTo(para,
          { autoAlpha: 0, y: 40, x: xOffset },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            duration: 4,
            ease: "power2.out"
          }, "+=1");

        // Transition OUT for next step
        if (i < story.length - 1) {
          tl.to(para, { autoAlpha: 0, y: -40, duration: 2.5 }, "+=3");
        }
      });

      // Stay at the end for a bit
      tl.to({}, { duration: 2 });

    }, triggerRef);

    return () => ctx.revert();
  }, []);

  const getPositionClasses = (position: string) => {
    switch (position) {
      case "left-bottom": return "items-start justify-end pb-24 lg:pb-32 pl-6 lg:pl-12 text-left";
      case "right-top": return "items-end justify-start pt-24 lg:pt-32 pr-6 lg:pr-12 text-right";
      case "left-top": return "items-start justify-start pt-24 lg:pt-32 pl-6 lg:pl-12 text-left";
      case "right-bottom": return "items-end justify-end pb-24 lg:pb-32 pr-6 lg:pr-12 text-right";
      default: return "items-center justify-center text-center";
    }
  };

  return (
    <div ref={triggerRef} className="relative h-screen overflow-hidden bg-transparent">
      {/* Step 1: Sequential Title Reveal */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
        <h2 className="font-serif italic font-bold tracking-tighter flex gap-6" style={{ fontSize: 'clamp(4rem, 15vw, 10rem)' }}>
          <span ref={myRef} className="text-[#FAF9F6]">My</span>
          <span ref={storyRef} className="text-[#D4AF37]" id="about">Story</span>
        </h2>
      </div>

      {/* Step 2: Split Layout (Name Left, Image Right) */}
      <div
        ref={splitLayoutRef}
        className="absolute inset-0 z-40 px-6 lg:px-12 flex items-center pointer-events-none"
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h3 className="text-4xl lg:text-7xl font-sans tracking-tight text-[#FAF9F6] font-medium leading-tight">
              Hi, I’m Muhammad Maaz
            </h3>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[300px] lg:max-w-md">
              <img
                src={Profile2}
                height={800}
                width={500}
                alt="Muhammad Maaz"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Paragraph Narrative Layers (Staggered) */}
      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
        {story.map((item, index) => (
          <div
            key={item.id}
            ref={el => { paragraphsRef.current[index] = el; }}
            className={`absolute inset-0 flex flex-col ${getPositionClasses(item.position)} px-6 lg:px-12 pointer-events-none`}
          >
            <p className={`${item.small ? 'text-lg lg:text-xl' : 'text-xl lg:text-4xl'} font-light leading-relaxed max-w-2xl ${index % 2 === 0 ? 'text-[#FAF9F6]' : 'text-[#6B6B6B]'
              }`}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
