import { motion } from "framer-motion";
import { a } from "framer-motion/client";

const projects = [
  {
    title: "Arco Creative Studio",
    category: "Agency Website",
    year: "2026",
    image: "public/images/arcomockup.png",
    url:"https://arcocreativestudio.vercel.app"
  },
  {
    title: "Hotel Bhakti",
    category: "Under Development",
    year: "2025",
    image: "public/images/bhaktimockup.png",
    url:"https://hotelbhaktipalace.vercel.app"
  },
  {
    title: "Note Pad",
    category: "Practice Project",
    year: "2025",
    image: "public/images/notepadmockup.png",
    url:"https://dulcet-centaur-a59b7b.netlify.app/"
  }
];

const ProjectGrid = () => {
  return (
    <section className="relative py-20 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* The Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-32">
          {projects.map((project, index) => (
           <a href={project.url} target="_blank" rel="noopener noreferrer">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
              /* Logic for Asymmetry: Every second item moves down on desktop */
              className={`group cursor-pointer ${index % 2 !== 0 ? "md:mt-32" : ""}`}
            >
              <div className="relative">
                {/* Image Container with "Reveal" effect */}
                <div className="relative aspect-[4/5] overflow-hidden bg-current rounded-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Floating Year Tag */}
                  <div className="absolute top-4 right-4 overflow-hidden">
                    <span className="block text-[10px] font-mono px-2 py-1 text-current  backdrop-blur-md border border-current/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Project Details Overlay-style */}
                <div className="mt-8 flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tighter leading-none">
                        {project.title}
                      </h3>
                      <div className="flex gap-2 mt-4">
                        {project.category.split('/').map((cat) => (
                          <span key={cat} className="text-[10px] uppercase tracking-widest px-3 py-1 border border-current/10 rounded-full opacity-60">
                            {cat.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Circle Arrow Button */}
                    <div className="w-12 h-12 rounded-full border border-current/10 flex items-center justify-center group-hover:bg-current group-hover:text-white dark:group-hover:text-black transition-all duration-500">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:rotate-45 transition-transform duration-500">
                        <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>

                  {/* Blueprint-style Footer inside the card */}
                  <div className="pt-6 border-t border-current/5 flex justify-between items-center overflow-hidden">
                    <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.2em]">View Case Study</span>
                    <div className="h-[1px] flex-grow mx-4 bg-current/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>
                    <span className="text-[10px] font-mono opacity-30 italic">Vol. 0{index + 1}</span>
                  </div>
                </div>
              </div>
            </motion.div>
        </a>
        ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectGrid;