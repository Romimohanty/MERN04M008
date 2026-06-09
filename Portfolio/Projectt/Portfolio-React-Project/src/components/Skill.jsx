import React, { useRef, useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNpm, FaGithub, FaGitAlt, FaGraduationCap } from "react-icons/fa";
import { RiTailwindCssFill, RiTeamLine } from "react-icons/ri";
import { TbBrandJavascript, TbBrandMysql } from "react-icons/tb";
import { IoLogoNodejs, IoLogoVercel } from "react-icons/io5";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { FaPersonRunning, FaLaptopFile } from "react-icons/fa6";
import { BiSolidTimer, BiLogoNetlify } from "react-icons/bi";
import { LuFileJson } from "react-icons/lu";

function Skill() {
  const ref = useRef();
  const [show, setShow] = useState(false);
  const eduRef = useRef();
  const [eduShow, setEduShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShow(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);

    const eduObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setEduShow(true);
    }, { threshold: 0.1 });
    if (eduRef.current) eduObserver.observe(eduRef.current);
  }, []);

  const SkillItem = ({ icon: Icon, name, color }) => (
    <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-blue-500/10 hover:scale-105 hover:border-blue-500/50 transition-all duration-300 group">
      <Icon className={`${color} text-2xl group-hover:scale-110 transition-transform`} />
      <span className="text-gray-200 text-sm font-medium tracking-wide">{name}</span>
    </div>
  );

  const EduCard = ({ year, title, inst, delay }) => (
    <div 
      style={{ transitionDelay: `${delay}ms` }}
      className={`bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 hover:bg-white/10 transition-all duration-700 transform hover:-translate-y-2 group shadow-xl ${eduShow ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors duration-500">
          <FaGraduationCap className="text-blue-400 text-2xl group-hover:text-white" />
        </div>
        <span className="text-blue-400 font-mono text-xs font-bold px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
          {year}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{inst}</p>
      <div className="mt-4 h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
    </div>
  );

  return (
    <div className='bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-screen w-full py-20 px-6 overflow-hidden flex justify-center'>
      
      <div className="max-w-6xl w-full space-y-16">
        
        <div className="text-center space-y-3">
          <h1 className='text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400'>
            Technical Skills
          </h1>
          <div className="h-1.5 w-24 bg-blue-500 rounded-full mx-auto"></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className="space-y-5 bg-black/30 p-6 rounded-xl border border-white/10 shadow-xl">
            <h2 className="text-xl font-bold text-blue-400 border-l-4 border-blue-500 pl-3">Front-end</h2>
            <div className="flex flex-col gap-3">
              <SkillItem icon={FaHtml5} name="HTML5" color="text-orange-500" />
              <SkillItem icon={FaCss3Alt} name="CSS3" color="text-blue-500" />
              <SkillItem icon={RiTailwindCssFill} name="Tailwind CSS" color="text-cyan-400" />
              <SkillItem icon={TbBrandJavascript} name="JavaScript" color="text-yellow-400" />
              <SkillItem icon={FaReact} name="React.js" color="text-blue-400" />
            </div>
          </div>

          <div className="space-y-5 bg-black/30 p-6 rounded-xl border border-white/10 shadow-xl">
            <h2 className="text-xl font-bold text-blue-400 border-l-4 border-blue-500 pl-3">Back-end</h2>
            <div className="flex flex-col gap-3">
              <SkillItem icon={IoLogoNodejs} name="Node.js" color="text-green-500" />
              <SkillItem icon={SiExpress} name="Express.js" color="text-gray-300" />
              <SkillItem icon={SiMongodb} name="MongoDB" color="text-green-400" />
              <SkillItem icon={TbBrandMysql} name="MySQL" color="text-blue-400" />
            </div>
          </div>

          <div className="space-y-5 bg-black/30 p-6 rounded-xl border border-white/10 shadow-xl">
            <h2 className="text-xl font-bold text-blue-400 border-l-4 border-blue-500 pl-3">Soft Skills</h2>
            <div className="flex flex-col gap-3">
              <SkillItem icon={FaPersonRunning} name="Quick Learner" color="text-yellow-500" />
              <SkillItem icon={RiTeamLine} name="Collaboration" color="text-blue-400" />
              <SkillItem icon={FaLaptopFile} name="Remote Work" color="text-purple-400" />
              <SkillItem icon={BiSolidTimer} name="Management" color="text-red-400" />
            </div>
          </div>
        </div>

        <div ref={ref} className={`mt-24 transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white italic inline-block border-b-2 border-blue-500/50 pb-2">
              Workflow & Tools
            </h2>
          </div>

          <div className="relative p-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 shadow-2xl">
            <div className="bg-[#0f172a]/80 backdrop-blur-xl p-8 md:p-12 rounded-[calc(1.5rem-1px)] border border-white/5 flex flex-wrap justify-center gap-8 md:gap-12">
               {[
                 {icon: LuFileJson, name: "JSON", col: "text-yellow-500", glow: "group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]"},
                 {icon: FaNpm, name: "NPM", col: "text-red-500", glow: "group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"},
                 {icon: IoLogoVercel, name: "Vercel", col: "text-white", glow: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"},
                 {icon: FaGithub, name: "GitHub", col: "text-gray-300", glow: "group-hover:shadow-[0_0_20px_rgba(209,213,219,0.2)]"},
                 {icon: FaGitAlt, name: "Git", col: "text-orange-500", glow: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"},
                 {icon: BiLogoNetlify, name: "Netlify", col: "text-cyan-400", glow: "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"},
                 {icon: SiPostman, name: "Postman", col: "text-orange-400", glow: "group-hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]"}
               ].map((tool, index) => (
                 <div key={index} className="group flex flex-col items-center gap-3 transition-all duration-500 hover:-translate-y-2">
                   <div className={`p-5 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-blue-500/50 ${tool.glow}`}>
                     <tool.icon className={`${tool.col} text-4xl md:text-5xl transition-transform duration-500 group-hover:scale-110`} />
                   </div>
                   <span className="text-xs md:text-sm text-gray-400 font-mono font-semibold tracking-[0.2em] uppercase transition-colors group-hover:text-blue-400">
                     {tool.name}
                   </span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div ref={eduRef} className="mt-32 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Education Journey</h2>
            <div className="h-1.5 w-24 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EduCard 
              year="2024 - 2026" 
              title="Master of Computer Application" 
              inst="Gandhi Institute Of Education and Technology, Baniatangi"
              delay={200}
            />
            <EduCard 
              year="2021 - 2024" 
              title="Bachelor of Science" 
              inst="Namitadevi Degree College, Odisha"
              delay={400}
            />
            <EduCard 
              year="2019 - 2021" 
              title="Higher Secondary Education" 
              inst="Namitadevi Higher Secondary School, Odisha"
              delay={600}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skill;



