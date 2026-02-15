import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { ScrollingTestimonials } from "./components/ScrollingTestimonials";
import { Testimonials as FAQ } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Preloader } from "./components/Preloader";
import { Background } from "./components/Background";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { ChatSupport } from "./components/ChatSupport";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Background />

      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      <div
        className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'} relative z-10`}
      >
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <ScrollingTestimonials />
        <FAQ />
        <Contact />
        <ChatSupport />
      </div>
    </div>
  );
}

export default App;
