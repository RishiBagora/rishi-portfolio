import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const ContactFormSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [activeField, setActiveField] = useState(null);
  const containerRef = useRef(null);

  // Calculate completion percentage for the "System Load" feel
  const filledFields = Object.values(form).filter(val => val.length > 0).length;
  const progress = (filledFields / 3) * 100;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transmission Sent:", form);
    // Add a success animation here
  };

  return (
    <section ref={containerRef} className="relative py-32 md:py-52 border-t border-current/20 bg-transparent">
      
      {/* Background Decor: Vertical Line Trace */}
      <div className="absolute left-[10%] top-0 w-[1px] h-full bg-current opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* Left Side: Metadata & Instructions */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">Form_Inquiry_v1.0</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
              SPECIFY YOUR <br />
              <span className="text-blue-600">OBJECTIVES.</span>
            </h2>

            <div className="pt-10 space-y-4">
              <div className="flex justify-between text-[10px] font-mono uppercase opacity-40">
                <span>Transmission_Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-[2px] w-full bg-current/5">
                <motion.div 
                  className="h-full bg-blue-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-16">
              
              {/* Name Field */}
              <div className="group relative flex flex-col">
                <label className={`text-[10px] uppercase tracking-[0.2em] font-mono transition-colors duration-300 ${activeField === 'name' ? 'text-blue-600' : 'opacity-100'}`}>
                  01 // Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="IDENTIFY YOURSELF"
                  onFocus={() => setActiveField('name')}
                  onBlur={() => setActiveField(null)}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-current/10 py-6 text-xl md:text-3xl outline-none placeholder:opacity-60 placeholder:text-sm tracking-tight focus:border-blue-600 transition-colors duration-500"
                />
              </div>

              {/* Email Field */}
              <div className="group relative flex flex-col">
                <label className={`text-[10px] uppercase tracking-[0.2em] font-mono transition-colors duration-300 ${activeField === 'email' ? 'text-blue-600' : 'opacity-100'}`}>
                  02 // Return Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL@DOMAIN.COM"
                  onFocus={() => setActiveField('email')}
                  onBlur={() => setActiveField(null)}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-current/10 py-6 text-xl md:text-3xl outline-none placeholder:opacity-60 placeholder:text-sm tracking-tight focus:border-blue-600 transition-colors duration-500"
                />
              </div>

              {/* Message Field */}
              <div className="group relative flex flex-col">
                <label className={`text-[10px] uppercase tracking-[0.2em] font-mono transition-colors duration-300 ${activeField === 'message' ? 'text-blue-600' : 'opacity-100'}`}>
                  03 // Project Brief
                </label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="DESCRIBE THE SCOPE, TIMELINE, AND CHALLENGES..."
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField(null)}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-current/10 py-6 text-xl md:text-3xl outline-none placeholder:opacity-60 placeholder:text-sm tracking-tight focus:border-blue-600 transition-colors duration-500 resize-none"
                />
              </div>

              {/* Submit Section */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10">
                <p className="text-[10px] font-mono opacity-30 max-w-[250px] text-center md:text-left">
                  By clicking send, you are initiating a secure encrypted transmission to my local terminal.
                </p>
                
                <button
                  type="submit"
                  className="group relative px-12 py-5  text-current overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 text-current text-xs uppercase tracking-[0.3em] font-bold mix-blend-difference group-hover:text-white transition-colors">
                    Send_Transmission
                  </span>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;