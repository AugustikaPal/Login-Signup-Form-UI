import React from 'react'
import Template from '../components/Template'
import girl from '../assets/girl.jpg'
 
export default function Login({setIsLoggedIn}) {
  return (
   <Template 
     title="Welcome Back"
     desc1="Build Skills for Today,Tomorrow,and Beyond."
     desc2="Education to future-proof your career"
     image={girl}
     formtype="login"
     setIsLoggedIn={setIsLoggedIn}
   />
  )
}
