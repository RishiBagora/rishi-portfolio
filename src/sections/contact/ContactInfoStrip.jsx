import { motion } from "framer-motion";
import { useState } from "react";

const ContactInfoStrip = () => {
  const [copyStatus, setCopyStatus] = useState("Copy");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopyStatus("Copied!");
    setTimeout(() => setCopyStatus("Copy"), 2000);
  };

  return (
    <section className="relative py-24 md:py-32 border-t border-current/10 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16 opacity-40">
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase">Quick_Access</span>
          <div className="h-[1px] flex-grow bg-current/10" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-0 relative">
          
          {/* Vertical Divider for Desktop */}
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-current/10 hidden md:block" />

          {/* Email Block */}
          <div className="md:pr-12 lg:pr-24 group">
            <span className="text-[10px] uppercase tracking-widest opacity-40 font-mono mb-4 block">
              // Digital_Inbox
            </span>
            <div className="flex items-end justify-between">
              <motion.a
                href="mailto:rishibaagora@gmail.com"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-4xl font-bold tracking-tighter hover:text-blue-600 transition-colors"
              >
                rishibaagora@gmail.com
              </motion.a>
              <button 
                onClick={() => copyToClipboard("rishibaagora@gmail.com")}
                className="text-[9px] uppercase font-mono border border-current/20 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copyStatus}
              </button>
            </div>
          </div>

          {/* Phone Block */}
          <div className="md:pl-12 lg:pl-24">
            <span className="text-[10px] uppercase tracking-widest opacity-40 font-mono mb-4 block">
              // Voice_Line
            </span>
            <motion.a
              href="tel:+918302501774"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl font-bold tracking-tighter hover:text-blue-600 transition-colors block"
            >
              +91 83025 01774
            </motion.a>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] uppercase tracking-widest font-mono opacity-40">Available 10:00 - 18:00 IST</span>
            </div>
          </div>

        </div>

        {/* Blueprint Decorative Metadata */}
        <div className="mt-24 flex flex-wrap justify-between items-center gap-8 border-t border-current/5 pt-8 opacity-20">
          <div className="text-[9px] font-mono uppercase tracking-[0.2em]">
            Reference: 26_COMM_PROTO
          </div>
          <div className="text-[9px] font-mono uppercase tracking-[0.2em]">
            Jaipur • India
          </div>
          <div className="text-[9px] font-mono uppercase tracking-[0.2em]">
            Est. Response: &lt; 24h
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactInfoStrip;