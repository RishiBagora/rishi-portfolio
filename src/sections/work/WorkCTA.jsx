import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";

const WorkCTA = () => {
  const containerRef = useRef(null);
  const magneticRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Magnetic effect for the "Start a Project" circle
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = magneticRef.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        gsap.to(magneticRef.current, {
          x: x * 0.4,
          y: y * 0.4,
          duration: 0.6,
          ease: "power3.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(magneticRef.current, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
        });
      };

      const element = magneticRef.current;
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative py-40 md:py-60 border-t border-current/5 bg-transparent overflow-hidden"
    >
      {/* Decorative Grid Marker (Top Left) */}
      <div className="absolute top-0 left-0 p-10 opacity-20 hidden md:block">
        <div className="text-[10px] font-mono uppercase tracking-[0.5em]">Phase / 03</div>
        <div className="text-[10px] font-mono uppercase tracking-[0.5em] mt-1 italic">Engagement</div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-1 border border-blue-600 text-blue-600 rounded-full text-[10px] uppercase font-bold tracking-widest">
              Available for new projects
            </span>
          </motion.div>

          <h2 className="text-[clamp(3rem,10vw,8rem)] font-bold tracking-tighter leading-[0.85] text-current">
            LIKE WHAT <br />
            <span>YOU SEE?</span>
          </h2>

          <div className="mt-20 md:mt-24 relative">
            {/* The Magnetic Link */}
            <Link
              to="/contact"
              ref={magneticRef}
              className="group relative flex items-center justify-center w-40 h-40 md:w-56 md:h-56 rounded-full border border-current/10 transition-colors duration-500 hover:border-blue-600"
            >
              {/* Internal Expanding Background */}
              <div className="absolute inset-0 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              
              <div className="relative z-10 text-center flex flex-col items-center gap-2">
                <span className="text-xs md:text-sm uppercase tracking-widest font-bold group-hover:text-white transition-colors duration-300">
                  Start a <br /> Project
                </span>
                <svg 
                  width="18" height="18" viewBox="0 0 18 18" fill="none" 
                  className="translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                  <path d="M1 17L17 1M17 1H5M17 1V13" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            </Link>

            {/* Subtle "Contact me directly" text below */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-[10px] uppercase tracking-[0.2em] font-mono"
            >
              Or email: rishibaagora@gmail.com
            </motion.p>
          </div>
        </div>
      </div>

      {/* Blueprint Detail (Bottom Right) */}
      <div className="absolute bottom-10 right-10 opacity-10 font-mono text-[80px] leading-none select-none italic">
        ©Rishi Bagora
      </div>
    </section>
  );
};

export default WorkCTA;