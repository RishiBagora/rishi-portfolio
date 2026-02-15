import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const philosophyPoints = [
  "Performance Matters.",
  "Simplicity Scales.",
  "Design Is Communication.",
  "Motion Has Meaning.",
  "Systems Over Chaos."
];

const PhilosophySection = () => {
  const containerRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite rotation for the text path
      gsap.to(circleRef.current, {
        rotate: 360,
        duration: 25,
        repeat: -1,
        ease: "linear"
      });

      // Subtle parallax for the circle as the user scrolls
      gsap.to(".circle-wrap", {
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-40 md:py-60 bg-transparent overflow-hidden">
      
     

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Left: Engineering Compass */}
          <div className="circle-wrap flex justify-center md:justify-start">
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
              
              {/* Outer Decorative Rings */}
              <div className="absolute inset-0 rounded-full border border-current/5 scale-110" />
              <div className="absolute inset-0 rounded-full border border-current/10 scale-90 border-dashed" />

              {/* Rotating Circular Text */}
              <div
                ref={circleRef}
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-1000"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full fill-current">
                  <defs>
                    <path
                      id="circlePath"
                      d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
                    />
                  </defs>
                  <text fontSize="10" letterSpacing="5" className="uppercase font-bold opacity-30">
                    <textPath href="#circlePath">
                      CREATIVE • STRUCTURED • PERFORMANCE • INTENTIONAL • 
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Central Core */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-2">Core</span>
                <span className="text-2xl font-bold tracking-tighter">001</span>
                <div className="w-12 h-[1px] bg-blue-600 mt-4" />
              </div>

            </div>
          </div>

          {/* Right: Philosophy List */}
          <div className="flex flex-col">
            <div className="mb-12">
               <span className="text-[10px] uppercase tracking-[0.5em] font-mono opacity-40">System_Values</span>
            </div>

            <div className="space-y-0">
              {philosophyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative py-8 md:py-10 border-b border-current/5 transition-all duration-500 hover:px-6 overflow-hidden"
                >
                  {/* Subtle hover background slide */}
                  <div className="absolute inset-0 bg-blue-600/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

                  <div className="relative flex items-baseline gap-6 md:gap-10">
                    <span className="text-xs font-mono opacity-30 group-hover:text-blue-600 transition-colors">
                      0{index + 1}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-current opacity-60 group-hover:opacity-100 transition-all">
                      {point}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;