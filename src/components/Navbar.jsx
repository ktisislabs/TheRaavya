import React from 'react'
import Logo from '../Assets/Mainlogo.png'
import { FaCartShopping } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import {Link} from 'react-router-dom' ; 

function Navbar() {
  return (
    <>      
      <nav className='Navbar-container  flex items-center justify-center w-screen p-0 m-0 fixed
      bg-[#9c8276]
       '>
      
       <div className='Navbar flex items-center ml-14 gap-12 p-2'>
     
    
       <Link to='/'> <p className='font-poppins text-white text-sm font-medium'>Home</p></Link>
        <Link to='/About'> <p className='font-poppins text-white text-sm font-medium'>About</p></Link>
        <Link to='/HomeDecor'> <p className='font-poppins text-white text-sm font-medium'>Home Decor</p></Link>
        <Link to='/Furniture'> <p className='font-poppins text-white text-sm font-medium'>Furniture</p></Link>
        <Link to='/BulkOrder'> <p className='font-poppins text-white text-sm font-medium'>Bulk Order</p></Link>
        <Link to='/Contact'> <p className='font-poppins text-white text-sm font-medium'>Contact</p></Link>
       
        <div className='flex items-center gap-12 mr-12'>
      
      <span className="flex items-center font-mono font-bold text-white gap-1"><FaCartShopping  className='text-white text-sm '/>(0)</span>
      <IoHeart  className='text-white text-sm'/>

     </div> 
      
       </div> 
       
      
        
    
      </nav>
    </>
  )
}

export default Navbar