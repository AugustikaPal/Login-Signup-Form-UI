import React from 'react'
import Template from '../components/Template'
import meeet from '../assets/meeet.jpg';
export default function Signup({setIsLoggedIn}) {
  return (
 <div className='min-h-screen '>
    <Template
   
    title="Join the millions learning to code with CodeYoung for free"
    desc1="Build Skills for Today,Tomorrow,and Beyond."
    desc2="Education to future-proof your career"
    image={meeet}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}/>
  </div>
  )
}
