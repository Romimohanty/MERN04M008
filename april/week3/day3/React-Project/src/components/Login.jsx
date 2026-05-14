import React from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useState } from 'react'

function Login() {
    const navigate=useNavigate();
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");

    const handleLogin=(e)=>{
        e.preventDefault();
    
    if(email===""|| password===""){
        toast.error("Please fill all the fields");
        return;
    }
    const users=JSON.parse(localStorage.getItem("users"))||[];

    const userFound=users.find(user=>user.email===email&&user.password===password);
    if(userFound){
         toast.success("successfully logged in");
    setTimeout(()=>{
        navigate("/movies")
    }, 2000);
    }
    else{
        toast.error("Invalid email or password");
    }
    }

    return (
        <div className='bg-gray-900 h-screen w-full flex justify-center items-start '>
        <form onSubmit={handleLogin} className='w-100 m-auto  border h-100 bg-purple-100  mt-30 rounded-2xl'>
            <h1 className='text-center font-bold text-3xl mb-10 '>Login Page</h1>

            <label htmlFor="" className='block text-gray-700 font-semibold mb-1 ml-5'>Email: </label>
            <input type="email" 
            placeholder='Enter your email' 
            className='w-90 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none ml-5'
            value={email}
            onChange={(e)=>setEmail(e.target.value)} />
            <br />

            <label htmlFor=""  className='block text-gray-700 font-semibold mb-1 ml-5'>Password: </label>
            <input type="password" placeholder='Enter your password' className='w-90 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none ml-5'  
            value={password}
            onChange={(e)=>setPassword(e.target.value)} />

            <br />
            <button className='pl-3 pr-3 pt-1 pb-1 rounded bg-purple-600 text-white ml-40 mt-7'>Login</button>
            <p className='ml-20 mt-5'>If you have not registered <Link to='/register' className='text-purple-700 font-bold'>Register</Link></p>
        </form>
        </div>
    )
}

export default Login

// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router'
// import { toast } from 'react-toastify';

// function Login() {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""
//     });

//     const navigate = useNavigate();

//     function handleChange(e) {
//         const { name, value } = e.target;

//         setFormData(prev => (
//             {
//                 ...prev,
//                 [name]: value,
//             }
//         ))
//     }

//     function handleLogin() {
//         let localStorageData = JSON.parse(localStorage.getItem("users")) || [];

//         const existingUser = localStorageData.find((user) => user.email == formData.email);

//         if (existingUser) {
//             if (existingUser.password == formData.password) {
//                 localStorage.setItem("loginUser", JSON.stringify(existingUser))
//                 localStorage.setItem("isLogin", true)
//                 navigate("//profile")
//                 toast.success("login successfull")
//             } else {
//                 toast.error("Invalid password");
//             }
//         } else {
//             toast.error("Invalid email");
//         }
//     }

//     return (
//         <div className='w-100 m-auto mt-20 '>
//             <h1 className='text-center font-bold text-3xl text-white'>Login Page</h1>

//             <label htmlFor="">Email</label>
//             <input
//                 type="email"
//                 placeholder='Enter your email'
//                 className='border'
//                 name='email'
//                 value={formData.email}
//                 onChange={handleChange}
//             />
//             <br />

//             <label htmlFor="">password</label>
//             <input
//                 type="password"
//                 placeholder='Enter your password'
//                 className='border'
//                 name='password'
//                 value={formData.password}
//                 onChange={handleChange}
//             />

//             <br />
//             <button
//                 className='pl-3 pr-3 pt-1 pb-1 rounded bg-purple-600 text-white'
//                 onClick={handleLogin}
//             >Login</button>
//             <p>If you have not registered <Link to='/register'>Register</Link></p>
//         </div>
//     )
// }

// export default Login