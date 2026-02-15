import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import gsap from "gsap";

const ContactHero = () => {
  const headingRef = useRef(null);

   const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Kolkata", // IMPORTANT for IST
      });
      setTime(now);
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval); // cleanup
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered character reveal
      gsap.fromTo(
        ".contact-char",
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.04,
          ease: "power4.out",
          delay: 0.2,
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const splitChars = (text) => {
    return text.split("").map((char, i) => (
      <span key={i} className="inline-block contact-char">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section className="relative min-h-[70vh] flex items-center pt-40 pb-20 bg-transparent overflow-hidden">
      
      
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          
          <div className="flex-1">
            {/* Minimalist Path Trace */}
            <div className="flex items-center gap-4 mb-8 opacity-40">
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase">Connect</span>
              <div className="h-[1px] w-12 bg-current" />
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase italic">Terminal_03</span>
            </div>

            <h1 
              ref={headingRef} 
              className="font-bold leading-[0.85] tracking-tighter text-[clamp(4rem,12vw,9rem)] text-current"
            >
              <div className="overflow-hidden py-2">
                {splitChars("Let’s")}
              </div>
              <div className="overflow-hidden py-2 flex items-center">
                <span className="text-blue-600 italic font-light mr-4 md:mr-8 text-[0.8em] transition-transform duration-700 hover:rotate-12">/</span>
                {splitChars("talk.")}
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-10 text-lg md:text-xl max-w-[500px] leading-relaxed font-light"
            >
              Have a project in mind or just want to connect? 
              I’m currently available for <span className="text-current font-medium">worldwide contracts</span> and collaborations.
            </motion.p>
          </div>

          {/* RIGHT SIDE: STATUS & TIMEZONE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col gap-8 border-l border-current/10 pl-8 md:pl-12"
          >
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 block">Location</span>
              <span className="text-xl font-bold tracking-tight">Jaipur, IN</span>
            </div>
            
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 block">Local Time</span>
              <span className="text-xl font-mono tracking-tighter italic">
                {time} IST
              </span>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Systems Online</span>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM DECORATIVE LINE */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "expo.inOut" }}
          className="w-full h-[1px] bg-current opacity-10 mt-20 origin-left"
        />
      </div>
    </section>
  );
};

export default ContactHero;