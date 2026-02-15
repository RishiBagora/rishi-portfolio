import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { a } from "framer-motion/client";

const projects = [
  {
    id: 1,
    title: "Arco Creative Studio",
    category: "Agency Website",
    year: "2026",
    image:
      "public/images/arcomockup.png",
      url:"https://arcocreativestudio.vercel.app"

  },
  {
    id: 2,
    title: "Hotel Bhakti",
    category: "(Under Developement)  Hotel Website",
    year: "2025",
    image:
      "public/images/bhaktimockup.png",
      url:"https://hotelbhaktipalace.vercel.app"
  },
  {
    id: 3,
    title: "Note Pad",
    category: "Practice Project",
    year: "2025",
    image:
      "public/images/notepadmockup.png",
      url:"https://dulcet-centaur-a59b7b.netlify.app/"
  },
];

const FeaturedWork = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const containerRef = useRef(null);

  // Mouse follow only when active
  useEffect(() => {
    if (!modal.active) return;

    const moveItems = (e) => {
      gsap.to(".project-modal", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveItems);
    return () => window.removeEventListener("mousemove", moveItems);
  }, [modal.active]);

  // Hide modal when leaving section completely
  useEffect(() => {
    const handleLeaveSection = (e) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setModal({ active: false, index: 0 });
      }
    };

    document.addEventListener("mousemove", handleLeaveSection);
    return () =>
      document.removeEventListener("mousemove", handleLeaveSection);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">

        <div className="flex justify-between items-end mb-20">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-blue-600">
            Selected Work
          </h2>
          <span className="hidden md:block text-xs uppercase opacity-40">
            © 2024—2026
          </span>
        </div>

        <div className="relative border-t border-current/10">
          {projects.map((project, index) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
            <div
              key={project.id}
              onMouseEnter={() =>
                setModal({ active: true, index })
              }
              onMouseLeave={() =>
                setModal({ active: false, index })
              }
              className="group relative flex flex-col md:flex-row md:justify-between md:items-center py-10 md:py-14 border-b border-current/10 cursor-pointer transition-all duration-500 hover:px-6"
            >
              <div className="flex items-start md:items-baseline gap-4 md:gap-12 z-10">
                <span className="text-xs font-mono opacity-40">
                  0{index + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold tracking-tighter transition-transform duration-500 group-hover:translate-x-4">
                  {project.title}
                </h3>
              </div>

              <div className="text-left md:text-right mt-4 md:mt-0 z-10">
                <p className="text-sm font-medium uppercase tracking-wider">
                  {project.category}
                </p>
                <p className="text-xs opacity-40 mt-1">
                  {project.year}
                </p>
              </div>

              <div className="absolute inset-0 bg-current/5 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom -z-0" />
            </div>
            </a>
          ))}
        </div>

        {/* Floating Modal - Only render when active */}
        {modal.active && (
          <div className="project-modal fixed top-0 left-0 w-[260px] md:w-[300px] h-[320px] md:h-[380px] pointer-events-none overflow-hidden rounded-xl z-50 origin-center -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <div
              className="relative w-full h-full transition-transform duration-500"
              style={{
                transform: `translateY(-${modal.index * 100}%)`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full h-full flex items-center justify-center p-4 bg-current/5"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-20 flex justify-center">
          <Link
            to="/work"
            className="group flex items-center gap-8 text-xl md:text-2xl font-light hover:text-blue-600 transition-colors"
          >
            <span>View all projects</span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-current/10 flex items-center justify-center group-hover:bg-current group-hover:text-[var(--bg)] transition-all duration-500">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:rotate-45 transition-transform duration-500"
              >
                <path
                  d="M1 14L14 1M14 1H5M14 1V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
