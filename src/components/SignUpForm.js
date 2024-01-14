import React, { useState } from 'react';
import './SignUpForm.css';
import {Link, useNavigate} from 'react-router-dom';
import { AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai';

import toast from 'react-hot-toast';
export default function SignUpForm({setIsLoggedIn}) {
  const[formData,setFormData] =useState({
    fname:"",
    lname:"",
    email:"",
    password:"",
    confirmPassword:""
    

  })
  const [showPassword,setShowPassword]=useState(false);
  const [showPassword2,setShowPassword2]=useState(false);
  const[accountType,setAccountType]=useState("student");
  const navigate = useNavigate();
  function changeHandler(event){
    setFormData((prev)=>{
        return{...prev,[event.target.name]: event.target.value}
    })
}
   function submitHandler(event){
          event.preventDefault();
          if(formData.password!==formData.confirmPassword)
          {
            toast.error("Incorrect Password");
            return ;
          }
 
          setIsLoggedIn(true);
          toast.success(`Welcome ${formData.fname}`);
          const accountData={
            ...formData
          };

          const finalData ={
            ...accountData,accountType
          }
          console.log('printing final account data');
          console.log(finalData);
         
          //navigating user to dashboard page after successful signup
          navigate('/dashboard');
   }
  return (
    <div className='overflow-x-hidden min-w-screen'>
      <div className='flex bg-slate-800 p-1 gap-x-1 my-5 rounded-full max-w-max'>
      <button
      className={`${accountType==="student"
    ? "bg-slate-900 text-white " :"bg-transparent text-grey "} py-2 px-5 rounded-full transition-all duration-200`}
      onClick={()=>setAccountType("student")}>
         Student
      </button>
      <button
      className={`${accountType==="instructor"
      ? "bg-slate-900 text-white " :"bg-transparent text-grey "} py-2 px-5 rounded-full transition-all duration-200`}
      onClick={()=>setAccountType("instructor")}>
         Instructor
      </button>
      </div>
      <form onSubmit={submitHandler} >
        <div className='flex  gap-x-2 mt-4'>
        <label className='w-full '>
          <p className='text-[0.875rem] text-white leading-[1.375rem] ' >First Name<sup className='text-pink-500'>*</sup></p>
          <input
          required
          type='text'
          name='fname'
          onChange={changeHandler}
          value={formData.fname}
          placeholder='Enter first Name'
          className='bg-slate-700 rounded-[0.5rem] text-richblack w-full p-[12px] '
          />
        </label> 

        <label className='w-full '>
          <p className='text-[0.875rem] text-white leading-[1.375rem] '>Last Name<sup className='text-pink-500'>*</sup></p>
          <input
          required
          type='text'
          name='lname'
          onChange={changeHandler}
          value={formData.lname}
          placeholder='Enter lastt Name'
          className='bg-slate-700 rounded-[0.5rem] text-richblack w-full p-[12px] '
          />
        </label> 
        </div>

        <div className='mt-[20px]'>
        <label className='w-full '>
          <p className='text-[0.875rem] text-white leading-[1.375rem] '>Email Address <sup className='text-pink-500'>*</sup></p>
          <input 
          required
          type='email'
          name='email'
          onChange={changeHandler}
          placeholder='Enter your email'
          value={formData.email}
          className='bg-slate-700 rounded-[0.5rem] text-richblack w-full p-[12px] '/>
        </label>
        </div>
        <div className='flex justify-between gap-x-2 mt-4'>

        <label className='w-full relative'>
          <p className='text-[0.875rem] text-white leading-[1.375rem] '>Create Password <sup className='text-pink-500'>*</sup></p>
          <input 
          required
          type={showPassword ? ("password") : ("text")}
          name='password'
          onChange={changeHandler}
          placeholder='Enter password'
          value={formData.password}
          className='bg-slate-700 rounded-[0.5rem] text-richblack w-full p-[12px] '/>
          <span onClick={()=> setShowPassword((prev)=>!prev)} className='absolute right-3 top-[35px] cursor-pointer '>
                {showPassword ? (<AiOutlineEyeInvisible
                 fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye
                  fontSize={24} fill='#AFB2BF'/>) }
            </span>
        </label>
        
        <label className='w-full relative'>
          <p className='text-[0.875rem] text-white leading-[1.375rem] '>Confirm Password <sup className='text-pink-500'>*</sup></p>
          <input 
          required
          type={showPassword2 ? ("password") : ("text")}
          name='confirmPassword'
          onChange={changeHandler}
          placeholder='confirm password'
          value={formData.confirmPassword}
          className='bg-slate-700 rounded-[0.5rem] text-richblack w-full p-[12px] '/>
          <span onClick={()=> setShowPassword2((prev)=>!prev)} className='absolute right-3 top-[38px] cursor-pointer '>
                {showPassword2 ? (<AiOutlineEyeInvisible
                 fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) }
            </span>
        </label>
        </div>

        <button className= 'bg-yellow-400 rounded-[8px] text-black px-1[2px] py-[8px] font-medium mt-6 w-full'>Create Account</button>
      </form>
    </div>
  )
}
