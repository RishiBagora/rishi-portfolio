import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MiniCTA = () => {
  return (
    <section className="relative py-40 md:py-60 overflow-hidden  text-current">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
        
        {/* Sub-text */}
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.4em] mb-8 block"
        >
          Available for new projects
        </motion.span>

        {/* Main Heading with Mask Effect */}
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-[clamp(2.5rem,8vw,5.5rem)] font-light tracking-tight leading-[1.1]"
          >
            Let's build something <br />
            <span className="italic font-serif opacity-60">remarkable</span> together.
          </motion.h2>
        </div>

        {/* Interactive Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <Link
            to="/contact"
            className="group relative px-12 py-6 rounded-full border border-current/20 overflow-hidden transition-all duration-500 hover:border-blue-500/50"
          >
            {/* Hover Background Fill */}
            <div className="absolute inset-0 bg-blue-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
            
            <span className="relative z-10 text-lg md:text-xl font-medium transition-colors duration-500 group-hover:text-current flex items-center gap-3">
              Start a Conversation
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </motion.div>

        {/* Bottom Socials / Quick Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-32 pt-10 border-t border-current/5 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-mono opacity-40 hover:opacity-100 transition-opacity"
        >
          <a href="https://www.linkedin.com/in/rishibaagora/" className="hover:text-blue-400 transition-colors">LinkedIn</a>
        
          <a href="https://github.com/RishiBagora" className="hover:text-blue-400 transition-colors">Github</a>
          <a href="mailto:rishibaagora@google.com" className="hover:text-blue-400 transition-colors">rishibaagora@google.com</a>
        </motion.div>

      </div>
    </section>
  );
};

export default MiniCTA;