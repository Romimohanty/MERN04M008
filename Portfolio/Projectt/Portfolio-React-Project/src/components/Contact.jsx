
import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <div className='bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen w-full py-20 px-6 overflow-hidden flex justify-center'>
      
      <div ref={sectionRef} className="max-w-6xl w-full">
        
        <div className={`text-center space-y-3 mt-12 mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h1 className='text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400 uppercase tracking-tighter'>
            Contact Me
          </h1>
          <div className="h-1.5 w-24 bg-blue-500 rounded-full mx-auto shadow-[0_0_15px_#3b82f6]"></div>
          <p className="text-gray-400 pt-4 italic">"Let's build something amazing together."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className={`md:col-span-4 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
            
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <MdEmail size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">Email</h3>
                </div>
                <p className="text-gray-400 text-sm pl-11 break-words">romimohantyromimohanty@gmail.com</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <MdLocationOn size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">Location</h3>
                </div>
                <div className="text-gray-400 text-sm pl-11">
                  <p>Nayapali, BBSR</p>
                  <p>Odisha, India</p>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <MdPhone size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">Phone</h3>
                </div>
                <p className="text-gray-400 text-sm pl-11">+91 8926015958</p>
              </div>

              <div className="pt-6 flex gap-4 pl-2">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                  <div key={index} className="p-3 bg-white/5 rounded-full border border-white/10 text-gray-400 hover:bg-blue-600 hover:text-white hover:-translate-y-2 transition-all cursor-pointer shadow-lg">
                    <Icon />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`md:col-span-8 bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 italic">
                <span className="w-8 h-[2px] bg-blue-500"></span>
                Get In Touch
              </h3>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input 
                    type="text" 
                    placeholder="Name *" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-all text-gray-200 placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <input 
                    type="email" 
                    placeholder="Email *" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-all text-gray-200 placeholder:text-gray-500"
                  />
                </div>
              </div>
              
              <input 
                type="text" 
                placeholder="Subject *" 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-all text-gray-200 placeholder:text-gray-500"
              />
              
              <textarea 
                rows="5" 
                placeholder="Your message *" 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-all text-gray-200 placeholder:text-gray-500 resize-none"
              ></textarea>
              
              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="relative group overflow-hidden px-10 py-4 bg-blue-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-xs">
                    Send Message
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;