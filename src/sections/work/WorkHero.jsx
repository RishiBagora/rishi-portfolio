import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const WorkHero = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal animation
      gsap.fromTo(
        ".work-char",
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.03,
          ease: "power4.out",
          delay: 0.2,
        }
      );

      // Grid subtle fade-in
      gsap.fromTo(".grid-overlay", { opacity: 0 }, { opacity: 1, duration: 2, ease: "power2.inOut" });
    });
    return () => ctx.revert();
  }, []);

  const splitChars = (text) => {
    return text.split("").map((char, i) => (
      <span key={i} className="inline-block work-char">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    // bg-transparent ensures the parent background shows through
    <section className="relative min-h-[70vh] flex items-center pt-40 pb-20 bg-transparent overflow-hidden">
      
     

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          
          <div className="flex-1">
            <h1 
              ref={headingRef} 
              className="font-bold leading-[0.85] tracking-tighter text-[clamp(4rem,12vw,9rem)]"
            >
              <div className="overflow-hidden py-1">
                {splitChars("Selected")}
              </div>
              <div className="overflow-hidden py-1 flex items-center">
                <span className="text-blue-600 italic font-light mr-4 md:mr-8 text-[0.8em]">/</span>
                {splitChars("Work")}
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 text-lg md:text-xl max-w-[500px] leading-relaxed"
            >
              A showcase of digital solutions where <span className="text-current font-medium">engineering</span> meets <span className="text-current font-medium">minimalism</span>.
            </motion.p>
          </div>

          {/* Stats / Info Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-row md:flex-col gap-10 md:gap-6 border-l border-current/10 pl-0 md:pl-10"
          >
       
            
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 block">Availability</span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-mono uppercase">Open for Hire</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Separator Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "expo.inOut" }}
          className="w-full h-[1px] bg-current opacity-10 mt-24 origin-left"
        />
      </div>
    </section>
  );
};

export default WorkHero;