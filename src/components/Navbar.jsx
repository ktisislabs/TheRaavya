import React from 'react'
import Logo from '../Assets/Mainlogo.png'
import { FaCartShopping } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import {Link} from 'react-router-dom' ; 

function Navbar() {
  return (
    <>      
      <nav className='Navbar-container absolute z-10 flex items-center justify-center w-screen p-0 m-0 fixed
      bg-[#9c8276]
       '>
      
       <div className='Navbar flex items-center ml-14 gap-12 p-2'>
     
    
       <Link to='/'> <p className='font-poppins text-white text-sm font-medium'>Home</p></Link>
        <Link to='/About'> <p className='font-poppins text-white text-sm font-medium'>About</p></Link>
        <Link to='/Products'> <p className='font-poppins text-white text-sm font-medium'>Products</p></Link>
        {/* <Link to='/BulkOrder'> <p className='font-poppins text-white text-sm font-medium'>Bulk Order</p></Link> */}
        <Link to='/Contact'> <p className='font-poppins text-white text-sm font-medium'>Contact</p></Link>
       
       
      
       </div> 
       
      
        
    
      </nav>
    </>
  )
}

export default Navbar