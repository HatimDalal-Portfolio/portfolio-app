import Navbar from "./compnents/Navbar";
import Hero from "./compnents/Hero";
import { About } from "./compnents/About";
import { Technologies } from "./compnents/Technologies";
import Experience from "./compnents/Experience";
import { Contact } from "./compnents/Contact";
import Testimonial from "./compnents/Testimonial";
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialised
                     selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Testimonial/>
        <Contact/>
        <SpeedInsights/>
      </div>
    </div>
  );
};

export default App;
