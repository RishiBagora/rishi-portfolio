import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";

const AboutHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Letter stagger for the heading
      gsap.fromTo(
        ".about-char",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.02,
          ease: "power4.out",
          delay: 0.2,
        }
      );

      // Subtle parallax for the background "intent" text
      gsap.to(".bg-parallax", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: -100,
        opacity: 0,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, i) => (
      <span key={i} className="inline-block about-char">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-32 pb-24 bg-transparent overflow-hidden">
      
     

      {/* Large Decorative Parallax Text */}
      <div className="bg-parallax absolute right-[-5%] top-1/4 select-none pointer-events-none hidden lg:block">
        <h2 className="text-[20vw] font-bold text-current opacity-[0.02] leading-none">
          INTENT
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          
          <div className="lg:col-span-8">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="text-[10px] uppercase tracking-[0.5em] font-mono block mb-8"
            >
              Bio / 01 — Overview
            </motion.span>

            <h1 className="font-bold leading-[0.85] tracking-tighter text-[clamp(3rem,9vw,8rem)] text-current">
              <div className="overflow-hidden py-1">
                {splitText("I build digital")}
              </div>
              <div className="overflow-hidden py-1">
                <span className="text-blue-600 italic font-light mr-4 md:mr-6">/</span>
                {splitText("experiences")}
              </div>
              <div className="overflow-hidden py-1">
                {splitText("with intention.")}
              </div>
            </h1>
          </div>

          {/* Technical Profile Sidebar */}
          <div className="lg:col-span-4 border-l border-current/10 pl-8 space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-2"
            >
              <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold block">Focus</span>
              <p className="text-sm leading-relaxed opacity-70">
                Bridging the gap between design systems and scalable engineering. Specializing in high-performance React architectures.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-12"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold block mb-1">Experience</span>
                <span className="text-2xl font-mono italic">1+ Yrs</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold block mb-1">Projects</span>
                <span className="text-2xl font-mono italic">10+</span>
              </div>
            </motion.div>
            <Link to="/resume" >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full border border-current/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                   <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5"/>
                   </svg>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold">Download CV</span>
              </div>
            </motion.div>
            </Link>
          </div>

        </div>

        {/* Dynamic Timeline Marker */}
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

export default AboutHero;