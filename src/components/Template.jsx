import React from 'react'
import frame from '../assets/frame.png'


import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm';
import {FcGoogle} from 'react-icons/fc'


export default function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}) {
  // console.log("Formtype")
  //  console.log(formtype);

  return (
    <div className='w-11/12 flex max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between'>
      
        <div className='w-11/12 max-w-[450px]' >
            <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
              <span className='text-white
              ' >{desc1}</span>
              <br/>
              <span className='text-blue-300 italic'>{desc2}</span>
            </p>

            {formtype==='signup' ?  (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='w-full flex flex-row items-center gap-x-2 my-4'>
                <div className='w-full h-[1px] bg-slate-700'></div>
                <p className='text-slate-700 font-medium leading-[1.375rem]'>OR</p>
                <div className='w-full h-[1px] bg-slate-700'></div>
            </div>

            <button className='w-full flex justify-center rounded-[8px] font-medium text-white border border-gray-600 px-[12px] py-[8px] gap-x-2 mt-6'>
              <FcGoogle/>
              <p>Sign Up with Google</p>
            </button>
        </div>

{/* image */}
   <div className='relative w-11/12 max-w-[450px] '>
    <img src={frame} alt="profile" width={558} height={554} loading='lazy'/>

    <img src={image} alt="profile" width={558} height={490} loading='lazy' className='absolute -top-4 right-4 '/>
   </div>


    </div>
  )
}
