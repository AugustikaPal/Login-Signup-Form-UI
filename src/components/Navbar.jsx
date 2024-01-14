import React from 'react'
import {Link} from 'react-router-dom';
import motive from '../assets/motive.png';
import toast from 'react-hot-toast';

export default function Navbar(props) {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn= props.setIsLoggedIn;

  return (
    <div className='flex justify-between text-white items-center w-11/12 max-w-[1160px] py-4 mx-auto text-xl'>
        <Link to ='/'>
            <img src={motive} alt='img' width={250} height={35} loading='lazy'/>
        </Link> 

        <nav>
            <ul className='flex gap-x-6 text-white ' >
                <li>
                    <Link to= '/'>Home</Link>
                </li>
                <li>
                    <Link to= '/'>About</Link>
                </li>
                <li>
                    <Link to='/' >Contact</Link>
                </li>
                <li></li>
            </ul>
        </nav>

        {/* login-signup-logout-dashboard */}

        <div className='flex ml-5 mr-6 gap-x-6 items-center'>

           {
              !isLoggedIn &&
                <Link to='/login'>
                <button className='bg-richBlack text-white py-[8px] px-[12px] rounded-[8px] border border-gray-600'>Login</button>
                </Link>
            }

            {
                !isLoggedIn &&
                <Link to='/signup'>
                <button className='bg-richBlack text-white py-[8px] px-[12px] rounded-[8px] border border-gray-600'>Sign up</button>
                 </Link>
            }
            {
                isLoggedIn && 
                <Link to='/logout'>
                <button onClick={()=>{

                    setIsLoggedIn(false)
                    toast.success("Logged Out");
                }} className='bg-richBlack text-white py-[8px] px-[12px] rounded-[8px] border border-gray-600'>Log Out</button>
            </Link>
            }
           { 
                isLoggedIn &&
                <Link to='/dashboard'>
                <button className='bg-richBlack text-white py-[8px] px-[12px] rounded-[8px] border border-gray-600'>Dashboard</button>
                </Link>
            }
        </div>
    </div>
  )
}
