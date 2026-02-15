import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react'; // Optional: Use any icon library

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen  text-current pt-32 pb-20 px-6 md:px-24"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-blue-600"></span>
              <span className="text-blue-600 font-medium uppercase tracking-widest text-sm">Curriculum Vitae</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Resume<span className="text-blue-600">.</span>
            </h1>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume/Rishi-Resume.pdf"
            download
            className="group flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white"
          >
            <Download size={18} className="group-hover:animate-bounce" />
            Download PDF
          </motion.a>
        </div>

        {/* PDF Viewer Container */}
        <div className="relative group">
          {/* Decorative Background Blur (Glassmorphism effect) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-zinc-900">
            {/* Top Bar like a Browser/Document Viewer */}
            <div className="bg-gray-100 dark:bg-zinc-800/50 px-4 py-3 border-b border-black/5 dark:border-white/10 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/20"></div>
              </div>
              <div className="mx-auto flex items-center gap-2 text-xs font-medium opacity-50">
                <FileText size={12} />
                Rishi-Resume.pdf
              </div>
            </div>

            {/* The Actual PDF */}
            <iframe
              src="/resume/Rishi-Resume.pdf#toolbar=0" // Toolbar=0 hides the default browser UI for a cleaner look
              title="Resume"
              className="w-full h-[70vh] md:h-[85vh] bg-zinc-100 dark:bg-zinc-900"
            />
          </div>
        </div>

        {/* Footer Hint */}
        <p className="text-center mt-8 text-sm text-gray-500 dark:text-zinc-500">
          Viewing on mobile? For the best experience, download the PDF.
        </p>
      </div>
    </motion.div>
  );
};

export default Resume;