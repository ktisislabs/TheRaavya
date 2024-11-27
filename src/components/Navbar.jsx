import React from 'react'
import Logo from '../Assets/Mainlogo.png'
import { FaCartShopping } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";


function Navbar() {
  return (
    <>
      <nav className='Navbar-container  flex items-center justify-center w-screen p-0 m-0 fixed
      bg-white 
       '>
      
       <div className='flex items-center gap-12 p-2'>
     
    
      
         <p className='font-poppins text-black text-sm font-medium'>About</p>
        <p className='font-poppins text-black text-sm font-medium'>Products</p>
        <p className='font-poppins text-black text-sm font-medium'>Bulk Order</p>
        <p className='font-poppins text-black text-sm font-medium'>Contact</p> 
        <div className='flex items-center gap-12 mr-12'>
      
      <FaCartShopping  className='text-black text-sm'/>
      <IoHeart  className='text-black text-sm'/>

     </div> 
      
       </div> 
       
      
        
    
      </nav>
    </>
  )
}

export default Navbar