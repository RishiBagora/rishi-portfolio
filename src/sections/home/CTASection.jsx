import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const CTASection = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.to(".marquee-part", {
      xPercent: -100,
      repeat: -1,
      duration: 20,
      ease: "linear",
    });

    const handleMouseMove = (e) => {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(buttonRef.current, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(buttonRef.current, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });
    };

    const btn = buttonRef.current;
    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative py-40 md:py-60 overflow-hidden transition-colors duration-500 text-current">

      {/* Marquee Background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none opacity-[0.03] dark:opacity-[0.05] whitespace-nowrap flex select-none">
        {[1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="marquee-part text-[15vw] font-bold uppercase tracking-tighter leading-none pr-20"
          >
            Let’s build • Let’s build •
          </span>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 text-center relative z-10">
        <div className="flex flex-col items-center">

          {/* Heading */}
          <h2 className="font-bold leading-[0.85] tracking-tighter text-[clamp(3.5rem,10vw,8rem)]">
            READY TO <br />
            <span className="text-blue-600 dark:text-blue-400">
              EVOLVE?
            </span>
          </h2>

          {/* Subtext */}
          <p className="mt-8 text-lg opacity-60 max-w-[450px]">
            Currently accepting new projects for 2026. Let's create something that defines your brand.
          </p>

          {/* Button */}
          <div className="mt-16 md:mt-24">
            <Link
              to="/contact"
              ref={buttonRef}
              className="group relative flex items-center justify-center w-48 h-48 md:w-64 md:h-64 rounded-full border border-current/20 hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
            >
              {/* Inner Circle */}
              <div className="absolute inset-2 rounded-full bg-blue-600 dark:bg-blue-500 scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />

              <span className="relative z-10 text-sm uppercase tracking-widest font-bold group-hover:text-white transition-colors duration-300">
                Start a Project
              </span>

              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="absolute top-12 right-12 md:top-16 md:right-16 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <path
                  d="M1 19L19 1M19 1H5M19 1V15"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </Link>
          </div>

        </div>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-10 w-full px-6 md:px-24 flex justify-between items-center text-[10px] uppercase tracking-widest opacity-40">
        <span>Available globally</span>
        <span>Based in India</span>
      </div>

    </section>
  );
};

export default CTASection;
