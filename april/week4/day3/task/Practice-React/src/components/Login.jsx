
import React from "react";
import { FaEnvelope, FaLock, FaEyeSlash, FaSignInAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { ImAppleinc } from "react-icons/im";
import { FaRegShareFromSquare } from "react-icons/fa6";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
      
    
      <div className="w-[380px] bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/40">
        
    
        
               <div className='text-3xl border h-11 w-12 ml-37 mb-6 rounded-xl bg-white p-2 shadow-md shadow-black border-white'><FaRegShareFromSquare /></div> 


        <h1 className="text-2xl font-bold text-center text-gray-800">
          Sign in with email
        </h1>
        <p className="text-center text-gray-500 text-sm mt-2 mb-6">
          Make a new doc to bring your words, data,
          and teams together. For free
        </p>

        <div className="space-y-4">
          
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-200"
            />
            <FaEyeSlash className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
          </div>

          <div className="text-right">
            <button className="text-sm text-gray-600 hover:underline">
              Forgot password?
            </button>
          </div>

          <button className="w-full bg-gradient-to-r from-gray-800 to-black text-white py-3 rounded-xl font-semibold shadow-md hover:scale-95 transition mb-3">
            Get Started
          </button>
        </div>


        <p className="text-center text-gray-400 text-sm mb-4">
          ..................Or sign in with..................
        </p>

        <div className="flex justify-between gap-3">
          <button className="flex-1 bg-white rounded-xl py-3 shadow-md shadow-black hover:bg-gray-50 ">
           <FcGoogle  className="ml-9 text-2xl"/>
          </button>

          <button className="flex-1 bg-white rounded-xl py-3 shadow-md shadow-black hover:bg-gray-50">
            
            <FaFacebook  className="ml-9 text-2xl text-blue-600" />
          </button>

          <button className="flex-1 bg-white rounded-xl py-3 shadow-md shadow-black hover:bg-gray-50">
            <ImAppleinc  className="ml-9 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;