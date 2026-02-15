import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const stack = [
  {
    title: "Frontend",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "GSAP", "Lenis"],
    description: "Building interactive, performance-first user interfaces with refined motion and attention to detail."
  },
  {
    title: "Performance",
    tech: ["Web Vitals", "SEO", "Image Optimization", "Lazy Loading"],
    description: "Every millisecond counts. I optimize builds to ensure seamless delivery across all devices."
  },
  {
    title: "AI Tools",
    tech: ["AI Agents","AI Tools","Automation"],
    description: "Pushing boundaries with intelligent systems and decentralized architecture for the next web."
  }
];

const TechStackSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="text-current py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-current/40">Technical Stack</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">Core Expertise</h2>
          </div>
          <p className="text-current/40 max-w-[280px] text-sm leading-relaxed">
            Specialized in building high-end digital products with modern technologies.
          </p>
        </header>

        {/* Stack List */}
        <div className="border-t border-current/10">
          {stack.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group border-b border-current/10"
            >
              <div className="py-10 md:py-14 cursor-pointer">
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  
                  {/* Category Title */}
                  <div className="md:col-span-4">
                    <h3 className={`text-2xl md:text-4xl transition-all duration-500 ${hoveredIndex === index ? 'translate-x-4 italic text-blue-400' : 'opacity-80'}`}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Tech Tags */}
                  <div className="md:col-span-8 flex flex-wrap gap-2 transition-opacity duration-500">
                    {item.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full border border-current/10 text-[11px] font-mono uppercase tracking-wider bg-current/5 currentspace-nowrap">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated Description */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-8 text-current/50 text-lg max-w-2xl leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Progress Line on Hover */}
              <motion.div 
                className="absolute bottom-0 left-0 h-[1px] bg-blue-500 z-10"
                initial={{ width: 0 }}
                animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                transition={{ duration: 0.6 }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;