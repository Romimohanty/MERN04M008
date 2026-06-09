import React from 'react'
import profileImg from "../assets/WhatsApp Image 2026-04-25 at 4.19.09 PM.jpeg";

function About() {
  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center py-20 px-6 overflow-hidden'>
      
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          @keyframes pulseGlow {
            0%, 100% { opacity: 0.5; scale: 1; }
            50% { opacity: 0.8; scale: 1.05; }
          }
          .animate-fadeInLeft { animation: fadeInLeft 1s ease-out forwards; }
          .animate-float { animation: float 4s ease-in-out infinite; }
          .animate-pulseGlow { animation: pulseGlow 3s ease-in-out infinite; }
        `}
      </style>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="max-w-xl space-y-6 animate-fadeInLeft">
          

          <div className="space-y-2">
            <h1 className="text-white text-2xl font-semibold">Hii..... I am</h1>
            <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-400 h-25">
              Romi Mohanty
            </h1>
          </div>

          <h2 className="text-2xl font-semibold text-purple-200 flex items-center gap-3">
            I am a
            <span className="px-3 py-1 bg-white/10 rounded-lg border border-white/20 text-blue-300 ">
              MERN Stack Developer
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-blue-500 pl-4 italic">
            "I am a passionate MERN Stack Developer with a strong interest in building modern and responsive web applications. 
            I love working with MongoDB, Express.js, React, and Node.js to create efficient solutions."
          </p>

          <div className="pt-6 flex gap-4">
            <button className="relative group overflow-hidden px-8 py-3 bg-white text-blue-900 font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="relative z-10">Check Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all">
              
                      <a href="#contact" className="text-gray-300 hover:text-white transition duration-300">Contact Me</a>

            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulseGlow"></div>
          
          <div className="relative animate-float">
            <div className="h-100 w-100 md:h-100 md:w-100 rounded-full p-2 bg-gradient-to-tr from-blue-500 via-white to-purple-500 shadow-2xl">
              <img 
                src={profileImg}
                className="h-full w-full object-cover rounded-full border-4 border-gray-900 group-hover:rotate-3 transition-transform duration-500"
                alt="profile"
              />
            </div>
            
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default About









