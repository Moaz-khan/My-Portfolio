import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!section || !scrollContainer) return;

    // Calculate total scroll width
    const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

    // Horizontal scroll animation
    const horizontalScroll = gsap.to(scrollContainer, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      horizontalScroll.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Retail & Shopping",
      laptopImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      mobileImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=800&fit=crop",
      backgroundText: "Efficiency"
    },
    {
      id: 2,
      title: "AI Automation System",
      category: "Technology & AI",
      laptopImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      mobileImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop",
      backgroundText: "Automation"
    },
    {
      id: 3,
      title: "Mobile Application",
      category: "Software & Apps",
      laptopImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",
      mobileImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=800&fit=crop",
      backgroundText: "Design"
    },
    {
      id: 4,
      title: "Brand Identity",
      category: "Design & Branding",
      laptopImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop",
      mobileImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop",
      backgroundText: "Creativity"
    },
    {
      id: 5,
      title: "Brand Identity",
      category: "Design & Branding",
      laptopImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop",
      mobileImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop",
      backgroundText: "Creativity"
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        height: '100vh'
      }}
    >
      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex items-center h-full"
        style={{
          width: 'fit-content',
          willChange: 'transform'
        }}
      >
        {/* Section Header */}
        <div className="flex-shrink-0 px-12 lg:px-24" style={{ width: '100vw' }}>
          <h2
            className="font-serif italic font-bold"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: '#FAF9F6',
              lineHeight: '1.1'
            }}
          >
            Featured{" "}
            <span style={{ color: '#D4AF37' }}>Works</span>
          </h2>
        </div>

        {/* Projects - Each takes full viewport width */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="flex-shrink-0 relative flex items-center justify-center px-12 lg:px-24"
            style={{
              width: '100vw',
              height: '100vh'
            }}
          >
            {/* Massive Background Text */}
            <div
              className="absolute font-serif italic font-bold pointer-events-none select-none"
              style={{
                fontSize: 'clamp(15rem, 10vw, 15rem)',
                color: 'rgba(255, 255, 255, 0.02)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                lineHeight: '1',
                zIndex: 0,
                whiteSpace: 'nowrap'
              }}
            >
              {project.backgroundText}
            </div>

            {/* Device Mockups Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto">
              <div className="relative flex items-center justify-center">
                {/* Laptop Mockup */}
                <div
                  className="relative"
                  style={{
                    width: '55%',
                    zIndex: 1
                  }}
                >
                  <div className="relative" style={{ paddingBottom: '62.5%' }}>
                    {/* Laptop Screen */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        backgroundColor: '#1A1A1A',
                        borderRadius: '12px 12px 0 0',
                        border: '8px solid #2A2A2A',
                        borderBottom: 'none',
                        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
                      }}
                    >
                      <img
                        src={project.laptopImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Laptop Base */}
                    <div
                      className="absolute"
                      style={{
                        bottom: '-3%',
                        left: '-5%',
                        right: '-5%',
                        height: '3%',
                        backgroundColor: '#3A3A3A',
                        borderRadius: '0 0 8px 8px'
                      }}
                    />
                  </div>
                </div>

                {/* Mobile Mockup - Overlapping */}
                <div
                  className="absolute"
                  style={{
                    width: '20%',
                    right: '15%',
                    bottom: '10%',
                    zIndex: 20
                  }}
                >
                  <div className="relative" style={{ paddingBottom: '200%' }}>
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        backgroundColor: '#1A1A1A',
                        borderRadius: '32px',
                        border: '10px solid #2A2A2A',
                        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      {/* Notch */}
                      <div
                        className="absolute top-0 left-1/2 transform -translate-x-1/2"
                        style={{
                          width: '35%',
                          height: '20px',
                          backgroundColor: '#2A2A2A',
                          borderRadius: '0 0 16px 16px',
                          zIndex: 10
                        }}
                      />
                      {/* Screen Content */}
                      <img
                        src={project.mobileImage}
                        alt={`${project.title} Mobile`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Title - Overlapping on Mockup */}
                <div
                  className="absolute"
                  style={{
                    left: '0%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 15,
                    maxWidth: '45%'
                  }}
                >
                  <p
                    className="text-xs font-bold tracking-wider uppercase mb-3"
                    style={{ color: '#D4AF37' }}
                  >
                    {project.category}
                  </p>
                  <h3
                    className="font-serif italic font-bold mb-4"
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                      color: '#FAF9F6',
                      lineHeight: '1.1'
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-base mb-6"
                    style={{ color: '#6B6B6B', lineHeight: '1.6' }}
                  >
                    A comprehensive digital solution designed to transform business operations
                    and deliver exceptional user experiences.
                  </p>
                  <button
                    className="px-6 py-3 font-medium rounded-[50px] transition-all hover:bg-[#0A0A0A] hover:text-[#FAF9F6]"
                    style={{
                      border: '2px solid #D4AF37',
                      color: '#FAF9F6',
                      backgroundColor: 'transparent'
                    }}
                  >
                    View Project →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* End Spacer */}
        <div className="flex-shrink-0" style={{ width: '50vw' }} />
      </div>
    </section>
  );
}
