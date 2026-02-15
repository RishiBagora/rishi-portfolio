import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IntroStatement = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scrub animation: Text brightens/fills as you scroll
      gsap.fromTo(
        headingRef.current,
        { opacity: 0.2, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      // Parallax for the right-side content
      gsap.from(".intro-right-content", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 md:py-60 border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 md:gap-24">
          
          {/* Left: Giant Sticky-ish Heading */}
          <div className="lg:w-1/2">
            <h2 
              ref={headingRef}
              className="font-bold tracking-tighter text-[clamp(4rem,10vw,12rem)] leading-[0.8] uppercase italic pointer-events-none"
            >
              Design <br /> 
              <span className=" " style={{ 
        WebkitTextStroke: "1.5px", // Black stroke with 80% opacity
        display: "block",
        marginTop: "10px"
      }}>
                Driven
              </span>
            </h2>
          </div>

          {/* Right: Refined Editorial Content */}
          <div className="lg:w-1/2 intro-right-content">
            <div className="space-y-8 max-w-[480px]">
              <div className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-blue-500"></span>
                <span className="text-xs uppercase tracking-[0.3em] text-blue-500 font-semibold">Philosophy</span>
              </div>
              
              <p className="text-xl md:text-2xl leading-[1.6] font-light italic">
                “I believe the best products aren't just engineered—they are <span className="text-blue-500 font-medium not-italic">felt</span>.”
              </p>
              
              <p className="text-base md:text-lg leading-relaxed opacity-60">
                I bridge the gap between complex backend logic and high-end visual storytelling. Every pixel serves a purpose, and every interaction is an opportunity to delight.
              </p>

              <Link
                to="/about"
                className="group inline-flex items-center gap-4 text-sm uppercase tracking-widest font-bold"
              >
                <span className="relative overflow-hidden">
                  <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">More About Me</span>
                  <span className="absolute top-full left-0 inline-block transition-transform duration-500 group-hover:-translate-y-full text-blue-500">View Experience</span>
                </span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-500 group-hover:translate-x-2">
                  <path d="M1 9H17M17 9L11 3M17 9L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroStatement;