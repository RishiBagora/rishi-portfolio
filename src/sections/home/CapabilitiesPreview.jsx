import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    id: "01",
    title: "Web Development",
    tags: ["React", "Framer", "GSAP"],
    description:
      "High-performance, scalable frontend systems built with modern architecture and clean code principles."
  },
  {
    id: "02",
    title: "UI Designs",
    tags: ["Framer", "Figma", "Tailwind"],
    description:
      "Pixel-perfect interfaces with motion clarity, refined spacing, and thoughtful interaction design."
  },



  {
    id: "03",
    title: "AI Tools",
    tags: ["Image Generation", "Content Writing", "Automation"],
    description:
      "Core Web Vitals focused builds ensuring speed, accessibility, and real-world user performance."
  },
  {
    id: "04",
    title: "Performance",
    tags: ["Vitals", "SEO", "Speed"],
    description:
      "Core Web Vitals focused builds ensuring speed, accessibility, and real-world user performance."
  },
  {
    id: "05",
    title: "Graphic Design",
    tags: ["Canva", "CorelDraw", "Adobe"],
    description:
      "Creative and impactful visual assets for branding, marketing, and digital presence."
  }
];

const CapabilitiesPreview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".capability-line");
      const items = gsap.utils.toArray(".capability-item");

      // Line animation (GPU optimized)
      gsap.fromTo(
  lines,
  { scaleX: 0 },
  {
    scaleX: 1,
    transformOrigin: "left center",
    duration: 1.2,
    ease: "power4.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 80%",
      once: true
    }
  }
);

// Item animation
gsap.fromTo(
  items,
  { y: 40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 75%",
      once: true
    }
  }
);

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-40 transition-colors duration-500"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-blue-600 dark:text-blue-400">
              Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Capabilities
            </h2>
          </div>
          <p className="max-w-[300px] text-sm md:text-base opacity-50 leading-relaxed">
            Helping brands stand out in the digital age through technical excellence.
          </p>
        </div>

        {/* List */}
        <div className="flex flex-col border-b border-current/10">

          {capabilities.map((item) => (
            <div
              key={item.id}
              className="capability-item group relative py-10 md:py-16 transition-all duration-500 hover:px-4 md:hover:px-8 overflow-hidden"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-black/5 dark:bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10" />

              {/* Animated Line */}
              <div className="capability-line absolute top-0 left-0 h-[1px] bg-current/20 w-full" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start relative z-10">

                {/* ID & Tags */}
                <div className="md:col-span-2 flex flex-row md:flex-col justify-between md:justify-start gap-4">
                  <span className="text-sm font-mono opacity-30 group-hover:opacity-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">
                    {item.id}
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-tighter px-2 py-1 border border-current/20 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <div className="md:col-span-5">
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="text-base md:text-lg leading-relaxed opacity-60 group-hover:opacity-90 transition-opacity duration-500 max-w-[480px]">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CapabilitiesPreview;
