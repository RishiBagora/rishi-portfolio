import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const philosophy = [
  { text: "Performance Matters.", bg: "PERFORMANCE", desc: "Optimizing for speed isn't a feature; it's a foundation for user trust." },
  { text: "Simplicity Scales.", bg: "SIMPLICITY", desc: "Complexity is easy. Simple, maintainable architecture is the real challenge." },
  { text: "Design Is Communication.", bg: "DESIGN", desc: "Every pixel should tell a story and guide the user toward their goal." },
  { text: "Motion Has Meaning.", bg: "MOTION", desc: "Animations should provide context and feedback, not just decoration." },
  { text: "Systems Over Chaos.", bg: "SYSTEMS", desc: "Clean code and design systems ensure longevity and seamless collaboration." }
];

const PhilosophySection = () => {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative py-40 md:py-60 bg-transparent overflow-hidden">
      
     

      {/* Huge Dynamic Background Word with Blur Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
        <AnimatePresence mode="wait">
          <motion.span
            key={active}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            animate={{ opacity: 0.05, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-[20vw] font-black tracking-tighter uppercase select-none text-current"
          >
            {philosophy[active].bg}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Section Metadata */}
        <div className="flex items-center gap-4 mb-20">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.5em] font-mono opacity-40">
            Core_Directives / 0{active + 1}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Interactive List */}
          <div className="flex flex-col gap-2">
            {philosophy.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                className="group relative py-6 cursor-pointer border-b border-current/5"
              >
                <div className="relative flex items-center gap-6 z-10">
                  <span className={`text-xs font-mono transition-colors duration-500 ${active === index ? "text-blue-600" : "opacity-30"}`}>
                    0{index + 1}
                  </span>
                  <h3 
                    className={`text-3xl md:text-5xl font-bold tracking-tighter transition-all duration-500 ${
                      active === index ? "translate-x-4 text-current" : "opacity-30 blur-[1px] grayscale"
                    }`}
                  >
                    {item.text}
                  </h3>
                </div>
                
                {/* Underline Progress */}
                {active === index && (
                  <motion.div 
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 h-[2px] bg-blue-600 w-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right Side: Narrative Content */}
          <div className="lg:pt-4">
            <div className="max-w-[400px] space-y-8">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-xl md:text-2xl leading-relaxed font-light italic text-current/80">
                      "{philosophy[active].desc}"
                    </p>
                    
                    <div className="mt-12 flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest opacity-40">
                       <div className="flex flex-col gap-1">
                          <span>Status</span>
                          <span className="text-blue-600">Active</span>
                       </div>
                       <div className="flex flex-col gap-1">
                          <span>Impact</span>
                          <span>High_Priority</span>
                       </div>
                    </div>
                  </motion.div>
               </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;