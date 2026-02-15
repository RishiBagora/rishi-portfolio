import { motion } from "framer-motion";

const highlights = [
  {
    number: "1+",
    title: "Years Building",
    description: "Building scalable, performance-first digital systems with modern architecture.",
    tag: "Experience"
  },
  {
    number: "10+",
    title: "Projects Delivered",
    description: "From creative websites to full-stack platforms designed for clarity and scale.",
    tag: "Portfolio"
  },
  {
    number: "Front-End",
    title: "Technical Depth",
    description: "Frontend systems, performance optimization, and AI Tools.",
    tag: "Skillset"
  },
  {
    number: "AI Tools",
    title: "Emerging Tech",
    description: "Experience with intelligent AI Tools in the market.",
    tag: "Innovation"
  }
];

const ExperienceHighlights = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24  text-current">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 md:flex items-end justify-between border-b border-current/10 pb-10">
          <div className="max-w-xl">
            <span className="text-blue-500 font-mono text-sm tracking-[0.2em] uppercase">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mt-4">
              Building with clarity, <br />
              <span className="opacity-40 italic">structure and scale.</span>
            </h2>
          </div>
          <p className="hidden md:block text-current/40 text-sm font-mono max-w-[200px]">
            Focused on high-performance digital solutions.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-current/10 bg-current/[0.02] hover:bg-current/[0.04] transition-colors"
            >
              {/* Top Row: Tag & Number */}
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] uppercase tracking-widest text-current/70 font-bold px-2 py-1 border border-current/10 rounded">
                  {item.tag}
                </span>
                <span className="text-2xl font-light  opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  {item.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-current/50 leading-relaxed text-sm">
                {item.description}
              </p>

              {/* Decorative Accent */}
              <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceHighlights;