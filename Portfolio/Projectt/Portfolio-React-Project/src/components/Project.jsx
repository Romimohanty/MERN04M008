
import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router"; 
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import profileImg from "../assets/WhatsApp Image 2026-04-25 at 4.19.09 PM (1).jpeg";
import projectImg from "../assets/WhatsApp Image 2026-04-25 at 4.19.08 PM.jpeg";
import myImg from "../assets/WhatsApp Image 2026-04-25 at 5.33.49 PM.jpeg";

function Project() {
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

  const ProjectCard = ({ img, title, desc, tech, liveLink, codeLink, delay }) => (
    <div 
      style={{ transitionDelay: `${delay}ms` }}
      className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-xl transition-all duration-1000 transform w-full 
      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"} hover:border-blue-500/50 hover:-translate-y-2 flex flex-col md:flex-row group`}
    >
      <div className='relative overflow-hidden h-60 md:h-auto md:w-2/5'>
        <img 
          src={img} 
          alt={title}
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-all duration-500"></div>
      </div>

      <div className='p-8 md:w-3/5 space-y-4 flex flex-col justify-center'>
        <div className="flex justify-between items-start">
           <h2 className='text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors'>{title}</h2>
        </div>
        
        <p className='text-gray-400 text-sm md:text-base leading-relaxed'>{desc}</p>
        
        <div className="space-y-3">
          <h4 className='text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2'>
            <FaCode /> Tech Stack
          </h4>
          <div className='flex flex-wrap gap-2'>
            {tech.map((t, i) => (
              <span key={i} className='px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-[10px] text-blue-300 font-bold uppercase'>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className='flex gap-4 pt-4'>
          <Link 
            to={liveLink} 
            target="_blank"
            className='flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95 text-sm'
          >
            <FaExternalLinkAlt size={12}/> Live Demo
          </Link>
          <Link 
            to={codeLink}
            target="_blank"
            className='flex-1 flex items-center justify-center gap-2 border border-white/20 text-white font-bold py-3 rounded-xl hover:bg-white hover:text-black transition-all active:scale-95 text-sm'
          >
            <FaGithub size={14}/> GitHub
          </Link>
        </div>
        
        <div className="mt-2 h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-700 rounded-full"></div>
      </div>
    </div>
  );

  return (
    <div className='bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen w-full py-20 px-6 overflow-hidden flex justify-center'>
      
      <div ref={sectionRef} className="max-w-6xl w-full space-y-16">
        
        <div className="text-center space-y-3 ">
          <h1 className='text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400  pb-5'>
             My Projects
          </h1>
          <div className="h-1.5 w-24 bg-blue-500 rounded-full mx-auto"></div>
        </div>

        <div className='flex flex-col gap-12 items-center'>
          <ProjectCard 
            img={profileImg}
            title="Anand Sweet Clone"
            desc="A complete e-commerce solution for a sweet shop. Includes fully responsive design, secure login/register functionality, and a seamless add-to-cart experience for users."
            tech={["HTML", "CSS", "JavaScript", "Tailwind"]}
            liveLink="https://leafy-puffpuff-8e171e.netlify.app/"
            codeLink="https://github.com/Romimohanty/MERN04M008/tree/23c6e0ce1dcd24a599e4d4badbbd540c6a0950a8/march/week4/innovation"
            delay={200}
          />

          <ProjectCard 
            img={projectImg}
            title="Cinema Project"
            desc="A modern movie database application where users can discover trending films, search for titles, and manage their personal watchlists with an interactive UI."
            tech={["React", "Tailwind CSS", "Context API"]}
            liveLink="https://snazzy-selkie-572572.netlify.app/"
            codeLink="https://github.com/Romimohanty/MERN04M008/tree/23c6e0ce1dcd24a599e4d4badbbd540c6a0950a8/april/week3"
            delay={400}
          />
        </div>

       

<div className={`mt-32 space-y-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
  
  <div className="text-center space-y-3">
    <h2 className='text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 uppercase tracking-tighter'>
      Coding Activity
    </h2>
    <div className="h-1.5 w-20 bg-blue-600 rounded-full mx-auto shadow-[0_0_15px_#2563eb]"></div>
  </div>

  <div className='relative group max-w-4xl mx-auto px-4 md:px-0'>
    
    <div className='absolute -top-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-[80px] group-hover:bg-blue-600/30 transition-all duration-700'></div>
    <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-[80px] group-hover:bg-purple-600/30 transition-all duration-700'></div>

    <div className='relative bg-white/5 backdrop-blur-2xl p-4 md:p-8 rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-blue-500/40 group-hover:shadow-blue-500/10'>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent -translate-y-full group-hover:translate-y-full transition-all duration-[2000ms] ease-in-out"></div>

      <div className="relative z-10">
        <img 
          src={myImg} 
          alt="GitHub Calendar"
          className='w-full h-auto rounded-xl border border-white/5 transition-all duration-700 group-hover:scale-[1.02] filter saturate-[1.2] brightness-[1.1]'
        />
        
        <div className="mt-6 flex justify-center gap-6 text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-[0.2em]">
           <span className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div> Contributions</span>
           <span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Commits</span>
           <span className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"></div> Activity</span>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl group-hover:border-blue-500 transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/30 rounded-br-3xl group-hover:border-blue-500 transition-colors"></div>
    </div>

    <p className="text-center mt-6 text-gray-500 text-sm font-medium italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      "Consistent growth through daily contributions."
    </p>
  </div>
</div>

      </div>
    </div>
  );
}

export default Project;





