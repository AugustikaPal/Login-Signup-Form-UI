import React from 'react'
import {  useNavigate } from 'react-router-dom';
export default function PrivateRoute({isLoggedIn,children}) {
    const navigate = useNavigate();
  if(isLoggedIn){
    return children;
  }
  else{
     return navigate('/login');
  }
}
