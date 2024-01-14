import React from 'react'
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import { AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai';
export default function LoginForm({setIsLoggedIn}) {

const[formData,setFormData]=useState({
    email:"",password:""
})

const navigate=useNavigate();
//this will indicate when password will show up and when not
const [showPassword,setShowPassword]=useState(false);
function changeHandler(event){
    setFormData((prev)=>{
        return{...prev,[event.target.name]: event.target.value}
    })
}
function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate('/dashboard');
}

  return (
    
      <form onSubmit={submitHandler} className='flex flex-col w-full gay-y-4 mt-6 '>
        <label className='w-full ' >
            <p className='text-[0.875rem] text-white leading-[1.375rem] '>Email Address
                <sup className='text-pink-500'>*</sup>
            </p>
            <input className='bg-slate-700 rounded-[0.5rem] text-richblack w-full p-[12px] ' 
            type='email' 
            required
            name='email'
            onChange={changeHandler}
            value={formData.email}
            placeholder='Enter email Id'/>
        </label>
  
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-white leading-[1.375rem] '>Password
                <sup  className='text-pink-500'>*</sup>
            </p>
            <input type={showPassword ? ("text") : ("password")  } 
            required
            name='password'
            onChange={changeHandler}
            value={formData.password}
            placeholder='Enter password'
            className='bg-slate-700 rounded-[0.5rem] text-richblack w-full p-[12px] '
            />

            <span onClick={()=> setShowPassword((prev)=>!prev)} className='absolute right-3 top-[38px] cursor-pointer '>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) }
            </span>

            <Link to="#">
                <p className='max-w-max text-xs mt-2 text-blue-300 ml-auto'>Forgot Password</p>
            </Link>
        </label>
       <button className='bg-yellow-400 rounded-[8px] text-black px-1[2px] py-[8px] font-medium mt-6'> Sign in </button>

      </form>
    
  )
}
