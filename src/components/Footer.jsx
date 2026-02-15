import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-32 border-t border-current/20 text-current transition-colors duration-500">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-20">

        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-16">

          {/* Left - Identity */}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight mb-4">
              Rishi.
            </h3>
            <p className="text-sm opacity-60 max-w-xs leading-relaxed">
              Building scalable digital systems with clarity, structure and precision.
            </p>
          </div>

          {/* Center - Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] opacity-40">
              Navigation
            </span>

            {["Home", "Work", "About", "Contact"].map((item, i) => (
              <Link
                key={i}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="group relative w-fit text-lg"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right - Contact */}
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] opacity-40">
              Connect
            </span>

            <a
              href="mailto:rishibaagora@email.com"
              className="group relative w-fit text-lg"
            >
              rishibaagora@email.com <br/>
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="tel:+918302501774"
              className="group relative w-fit text-lg"
            >
              +91 8302501774 <br/>
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </a>

            <div className="flex gap-6 mt-4 text-sm opacity-70">
              <a
                href="https://www.linkedin.com/in/rishibaagora/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/RishiBagora"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 h-[1px] bg-black/10 dark:bg-white/10" />

        {/* Bottom Row */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-40 gap-4">
          <span>© {new Date().getFullYear()} Rishi. All rights reserved.</span>
          <span>Designed & Built with precision.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
