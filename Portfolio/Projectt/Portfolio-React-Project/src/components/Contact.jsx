import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-r from-gray-900 to-blue-900  text-white flex flex-col items-center py-9 px-4 font-sans">
      
      <div className="relative  text-center w-full">
       
        <div className="relative flex items-center justify-center gap-4 z-20">
          <span className="h-[2px] w-8 bg-red-600 "></span>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider">Contact Me</h2>
          <span className="h-[2px] w-8 bg-red-600 "></span>
        </div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 py-8 ">
        
        <div className="md:col-span-4 bg-[#112240] p-8 rounded-md shadow-2xl border border-white/5">
          
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[3px] h-6 bg-red-600"></div>
              <h3 className="text-xl font-bold tracking-wide">Email</h3>
            </div>
            <div className="space-y-1 text-gray-400 text-[15px] pl-4">
              <p>romimohantyromimohanty@gmail.com</p>
            </div>
          </div>

          <div className="mb-8">
           
            <div className="text-gray-400 text-[15px] pl-4 leading-relaxed">
              <p>Nayapali,BBSR</p>
              <p>FL 33157 bbsr City</p>
            </div>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[3px] h-6 bg-red-600"></div>
              <h3 className="text-xl font-bold tracking-wide">Phone</h3>
            </div>
            <div className="text-gray-400 text-[15px] pl-4">
              <p> 
             +91 8926015958</p>
            </div>
          </div>

          <div className="flex gap-5 pl-4">
            <FaFacebookF className="text-lg cursor-pointer hover:text-red-500 transition-all transform hover:scale-110" />
            <FaTwitter className="text-lg cursor-pointer hover:text-red-500 transition-all transform hover:scale-110" />
            <FaInstagram className="text-lg cursor-pointer hover:text-red-500 transition-all transform hover:scale-110" />
            <FaLinkedinIn className="text-lg cursor-pointer hover:text-red-500 transition-all transform hover:scale-110" />
          </div>
        </div>

        <div className="md:col-span-8 bg-[#112240] p-8 rounded-md shadow-2xl border border-white/5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-[3px] h-6 bg-red-600"></div>
            <h3 className="text-xl font-bold tracking-wide">Get In Touch</h3>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Name *" 
                className="w-full bg-transparent border border-gray-700 rounded-sm p-4 focus:outline-none focus:border-red-600 transition-colors text-gray-300 placeholder:text-gray-500"
              />
              <input 
                type="email" 
                placeholder="Email *" 
                className="w-full bg-transparent border border-gray-700 rounded-sm p-4 focus:outline-none focus:border-red-600 transition-colors text-gray-300 placeholder:text-gray-500"
              />
            </div>
            
            <input 
              type="text" 
              placeholder="Subject *" 
              className="w-full bg-transparent border border-gray-700 rounded-sm p-4 focus:outline-none focus:border-red-600 transition-colors text-gray-300 placeholder:text-gray-500"
            />
            
            <textarea 
              rows="6" 
              placeholder="Your message *" 
              className="w-full bg-transparent border border-gray-700 rounded-sm p-4 focus:outline-none focus:border-red-600 transition-colors text-gray-300 placeholder:text-gray-500 resize-none"
            ></textarea>
            
            <div>
              <button 
                type="submit"
                className="bg-white text-[#0b1b35] px-10 py-3.5 rounded-sm font-bold uppercase tracking-wider hover:bg-gray-200 transition-all active:scale-95 text-sm"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;



