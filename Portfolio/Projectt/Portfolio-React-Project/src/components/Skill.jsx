import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { FaPersonRunning } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
import { FaLaptopFile } from "react-icons/fa6";
import { BiSolidTimer } from "react-icons/bi";
import { LuFileJson } from "react-icons/lu";
import { FaNpm } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { BiLogoNetlify } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import  { useRef, useState, useEffect } from 'react';
import certImg from "../assets/WhatsApp Image 2026-04-26 at 11.21.10 PM.jpeg";




function Skill() {

 const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
  }, []);



  



  const eduRef = useRef();
const [eduShow, setEduShow] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setEduShow(true);
      }
    },
    { threshold: 0.3 }
  );

  if (eduRef.current) observer.observe(eduRef.current);
}, []);






  return (
    <div className=' bg-gradient-to-r  from-blue-800 to-gray-800  h-500 w-full' >
      <h1 className='text-4xl font-bold text-center pt-20 text-purple-700'>Skills</h1>
      <div className='flex gap-60'>
      


      <div className="mt-10 ml-10">
  <h2 className="text-3xl font-bold mb-8 text-blue-600 animate-[slideRight_1s_ease-out_forwards]">
    Front-end Skills
  </h2>

  <div className="space-y-5">
    
    <div className="flex items-center gap-3 h-12 w-72 bg-white rounded-2xl border shadow-md hover:shadow-pink-400/50 hover:scale-105 transition duration-300 pl-5 text-lg font-medium">
      <FaHtml5 className="text-orange-500 text-xl" />
      HTML5
    </div>

    <div className="flex items-center gap-3 h-12 w-72 bg-white rounded-2xl border shadow-md hover:shadow-pink-400/50 hover:scale-105 transition duration-300 pl-5 text-lg font-medium">
      <FaCss3Alt className="text-blue-500 text-xl" />
      CSS3
    </div>

    <div className="flex items-center gap-3 h-12 w-72 bg-white rounded-2xl border shadow-md hover:shadow-pink-400/50 hover:scale-105 transition duration-300 pl-5 text-lg font-medium">
      <RiTailwindCssFill className="text-cyan-500 text-xl" />
      Tailwind CSS
    </div>

    <div className="flex items-center gap-3 h-12 w-72 bg-white rounded-2xl border shadow-md hover:shadow-pink-400/50 hover:scale-105 transition duration-300 pl-5 text-lg font-medium">
      <TbBrandJavascript className="text-yellow-500 text-xl" />
      JavaScript
    </div>

    <div className="flex items-center gap-3 h-12 w-72 bg-white rounded-2xl border shadow-md hover:shadow-pink-400/50 hover:scale-105 transition duration-300 pl-5 text-lg font-medium">
      <FaReact className="text-blue-400 text-xl" />
      React
    </div>

  </div>
</div>


     
 <div className="mt-10 ">
  <h2 className="text-3xl font-bold mb-8 text-blue-600 animate-[slideRight_1s_ease-out_forwards]">
    Back-end Skills
  </h2>

  <div className="space-y-5">

    <div className="flex items-center gap-3 h-12 w-72 bg-white rounded-2xl border shadow-md hover:shadow-green-400/50 hover:scale-105 transition duration-300 pl-5 text-lg font-medium">
      <IoLogoNodejs className="text-green-600 text-xl" />
      Node.js
    </div>

    <div className="flex items-center gap-3 h-12 w-72 bg-white rounded-2xl border shadow-md hover:shadow-gray-400/50 hover:scale-105 transition duration-300 pl-5 text-lg font-medium">
      <SiExpress className="text-gray-700 text-xl" />
      Express.js
    </div>

    <div className="flex items-center gap-3 h-12 w-72 bg-white rounded-2xl border shadow-md hover:shadow-green-500/50 hover:scale-105 transition duration-300 pl-5 text-lg font-medium">
      <SiMongodb className="text-green-500 text-xl" />
      MongoDB
    </div>

    <div className="flex items-center gap-3 h-12 w-72 bg-white rounded-2xl border shadow-md hover:shadow-blue-400/50 hover:scale-105 transition duration-300 pl-5 text-lg font-medium">
      <TbBrandMysql className="text-blue-600 text-xl" />
      MySQL
    </div>

  </div>
</div>

      
<div className="mt-10 ">
  <h2 className="text-3xl font-bold mb-8 text-blue-500 animate-[slideRight_1s_ease-out_forwards]">
    Soft Skills
  </h2>

  <div className="space-y-5">

    <div className="flex items-center gap-3 h-12 w-72 bg-white rounded-2xl border shadow-md hover:shadow-yellow-400/50 hover:scale-105 transition duration-300 pl-5 text-lg font-medium">
      <FaPersonRunning className="text-yellow-500 text-xl" />
      Quick Learner
    </div>

    <div className="flex items-center gap-3 h-12 w-72 bg-white rounded-2xl border shadow-md hover:shadow-blue-400/50 hover:scale-105 transition duration-300 pl-5 text-lg font-medium">
      <RiTeamLine className="text-blue-500 text-xl" />
      Team Collaboration
    </div>

    <div className="flex items-center gap-3 h-12 w-72 bg-white rounded-2xl border shadow-md hover:shadow-purple-400/50 hover:scale-105 transition duration-300 pl-5 text-lg font-medium">
      <FaLaptopFile className="text-purple-500 text-xl" />
      Remote Work
    </div>

    <div className="flex items-center gap-3 h-12 w-72 bg-white rounded-2xl border shadow-md hover:shadow-green-400/50 hover:scale-105 transition duration-300 pl-5 text-lg font-medium">
      <BiSolidTimer className="text-green-500 text-xl" />
      Time Management
    </div>

  </div>
</div>

      </div>



    <div ref={ref} className="mt-20">

      <h1
        className={`text-4xl font-bold text-blue-600 mb-10 text-center mt-35
        transition-all duration-700
        ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
      >
        TOOLS
      </h1>

      <div
        className={`mt-10 px-20 h-100 w-250 ml-60 pt-10 
        bg-gradient-to-r from-blue-900 to-gray-900 
        rounded-2xl border border-white
        transition-all duration-700
        ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
      >
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className={`bg-gradient-to-r from-blue-800 to-gray-600 shadow-lg rounded-2xl p-6 text-center 
                          hover:scale-110 hover:shadow-2xl transition duration-500
                          ${show ? "opacity-100 translate-x-0 delay-100" : "opacity-0 -translate-x-20"}`}>
            <LuFileJson className="text-5xl text-blue-600 mx-auto mb-3" />
            <h2 className="font-semibold text-lg text-yellow-600">JSON Server</h2>
          </div>

          <div className={`bg-gradient-to-r from-blue-800 to-gray-600 shadow-lg rounded-2xl p-6 text-center 
                          hover:scale-110 hover:shadow-2xl transition duration-500
                          ${show ? "opacity-100 translate-x-0 delay-200" : "opacity-0 -translate-x-20"}`}>
            <FaNpm className="text-5xl text-red-600 mx-auto mb-3" />
            <h2 className="font-semibold text-lg text-yellow-600">NPM</h2>
          </div>

          <div className={`bg-gradient-to-r from-blue-800 to-gray-600 shadow-lg rounded-2xl p-6 text-center 
                          hover:scale-110 hover:shadow-2xl transition duration-500
                          ${show ? "opacity-100 translate-x-0 delay-300" : "opacity-0 -translate-x-20"}`}>
            <IoLogoVercel className="text-5xl text-black mx-auto mb-3" />
            <h2 className="font-semibold text-lg text-yellow-600">Vercel</h2>
          </div>

          <div className={`bg-gradient-to-r from-blue-800 to-gray-600 shadow-lg rounded-2xl p-6 text-center 
                          hover:scale-110 hover:shadow-2xl transition duration-500
                          ${show ? "opacity-100 translate-x-0 delay-400" : "opacity-0 -translate-x-20"}`}>
            <FaGithub className="text-5xl text-gray-800 mx-auto mb-3" />
            <h2 className="font-semibold text-lg text-yellow-600">GitHub</h2>
          </div>

          <div className={`bg-gradient-to-r from-blue-800 to-gray-600 shadow-lg rounded-2xl p-6 text-center 
                          hover:scale-110 hover:shadow-2xl transition duration-500
                          ${show ? "opacity-100 translate-x-0 delay-500" : "opacity-0 -translate-x-20"}`}>
            <FaGitAlt className="text-5xl text-orange-600 mx-auto mb-3" />
            <h2 className="font-semibold text-lg text-yellow-600">Git</h2>
          </div>

          <div className={`bg-gradient-to-r from-blue-800 to-gray-600 shadow-lg rounded-2xl p-6 text-center 
                          hover:scale-110 hover:shadow-2xl transition duration-500
                          ${show ? "opacity-100 translate-x-0 delay-600" : "opacity-0 -translate-x-20"}`}>
            <BiLogoNetlify className="text-5xl text-teal-500 mx-auto mb-3" />
            <h2 className="font-semibold text-lg text-yellow-600">Netlify</h2>
          </div>

          <div className={`bg-gradient-to-r from-blue-800 to-gray-600 shadow-lg rounded-2xl p-6 text-center 
                          hover:scale-110 hover:shadow-2xl transition duration-500
                          ${show ? "opacity-100 translate-x-0 delay-700" : "opacity-0 -translate-x-20"}`}>
            <SiPostman className="text-5xl text-orange-500 mx-auto mb-3" />
            <h2 className="font-semibold text-lg text-yellow-600">Postman</h2>
          </div>

        </div>
      </div>
    </div>





<h1
  className={`text-4xl font-bold text-blue-600 mb-10 text-center mt-15
  transition-all duration-700
  ${eduShow ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
>
  EDUCATION
</h1>

<div 
  ref={eduRef}
  className="flex items-center justify-center bg-gradient-to-r from-blue-800 to-gray-800 p-6 overflow-hidden"
>
  
  <div className={`flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden max-w-5xl w-full transform transition-all duration-700 
    ${eduShow ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>

    <div className="p-8 space-y-8 w-full md:w-1/2">
      
      <h1 className="text-3xl font-bold text-purple-600 mb-4">
        Education
      </h1>

      <div className={`border-l-4 border-purple-500 pl-4 p-3 rounded-lg transition-all duration-700 delay-200 
        ${eduShow ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
        <h2 className="text-sm text-gray-500">2024 - 2026</h2>
        <h2 className="text-lg font-semibold">Master of Computer Application</h2>
        <p className="text-gray-600 text-sm">
          Gandhi Institute Of Education and Technology, Baniatangi
        </p>
      </div>

      <div className={`border-l-4 border-pink-500 pl-4 p-3 rounded-lg transition-all duration-700 delay-400 
        ${eduShow ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
        <h2 className="text-sm text-gray-500">2021 - 2024</h2>
        <h2 className="text-lg font-semibold">Bachelor of Science</h2>
        <p className="text-gray-600 text-sm">
          Namitadevi Degree College
        </p>
      </div>

      <div className={`border-l-4 border-blue-500 pl-4 p-3 rounded-lg transition-all duration-700 delay-600 
        ${eduShow ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
        <h2 className="text-sm text-gray-500">2019 - 2021</h2>
        <h2 className="text-lg font-semibold">Higher Secondary Education</h2>
        <p className="text-gray-600 text-sm">
          Namitadevi Higher Secondary School
        </p>
      </div>

    </div>

    <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-tr from-purple-100 to-blue-100 p-6">
      <img 
        src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-d-a-pile-of-books-pencils-learning-indicates-an-educational-story-png-image_13004043.png" 
        alt="education"
        className="w-80 h-80 object-contain hover:scale-105 transition duration-300"
      />
    </div>

  </div>
</div>

  

      
    </div>
  )
}

export default Skill
