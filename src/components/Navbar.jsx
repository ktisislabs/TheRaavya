import React from 'react'
import Logo from '../Assets/Mainlogo.png'
import { FaCartShopping } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";


function Navbar() {
  return (
    <>
      <nav className='Navbar-container  flex items-center justify-between w-screen p-0 m-0 absolute '>
      <div className='flex items-center gap-12'>
       <img src={Logo} alt="raavya-logo" className='w-36'></img>
    
      
         <p className='font-poppins text-white text-md font-semibold'>About</p>
        <p className='font-poppins text-white text-md font-semibold'>Products</p>
        <p className='font-poppins text-white text-md font-semibold'>Bulk Order</p>
        <p className='font-poppins text-white text-md font-semibold'>Contact</p> 
       
       </div>
       <div className='flex items-center gap-12 mr-12'>
       <FaCartShopping  className='text-white text-xl'/>
       <IoHeart  className='text-white text-xl'/>


       </div>
       
    
      </nav>
    </>
  )
}

export default Navbar