import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    id: "01",
    title: "Web Development",
    skills: ["React", "Framer", "GSAP", "Tailwind CSS", "Responsive UI"]
  },
  {
    id: "02",
    title: "UI Designs",
    skills: ["Figma", "Framer", "Tailwind", "Design Systems", "Prototyping"]
  },
  {
    id: "03",
    title: "Tools & Software",
    skills: ["VS Code", "AntiGravity", "Git & GitHub", "Prototyping"]
  },
  {
    id: "04",
    title: "AI Tools",
    skills: ["Image Generation", "Content Writing", "Automation", "OpenAI"]
  },
  {
    id: "05",
    title: "Performance",
    skills: ["Core Web Vitals", "SEO", "Speed Optimization", "Accessibility"]
  },
  {
    id: "06",
    title: "Graphic Design",
    skills: ["Canva", "CorelDraw", "Adobe Suite", "Brand Assets"]
  },
  {
    id: "07",
    title: "CS Subjects",
    skills: ["Data Structures", "Algorithms", "Database Systems", "Operating Systems", "Computer Networks"]
  },

];

const CapabilitiesPreview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".capability-line");
      const items = gsap.utils.toArray(".capability-item");

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
    <section ref={containerRef} className="relative py-24 md:py-40">
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
              className="capability-item group relative py-12 md:py-16 transition-all duration-500 hover:px-4 md:hover:px-8 overflow-hidden"
            >
              <div className="capability-line absolute top-0 left-0 h-[1px] bg-current/20 w-full" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">

                {/* ID */}
                <div className="md:col-span-2">
                  <span className="text-sm font-mono opacity-30 group-hover:opacity-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">
                    {item.id}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-5">
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h3>
                </div>

                {/* Skills instead of description */}
                <div className="md:col-span-5">
                  <div className="flex flex-wrap gap-3">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm md:text-base px-3 py-1 border border-current/20 rounded-full opacity-70 hover:opacity-100 transition-opacity"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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
