import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { HiMenuAlt3 } from "react-icons/hi";
import { FaCartShopping, FaAmazon, FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp, IoHeart } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Footer from '../components/Footer';
import StickyNavbar from '../components/StickyNavbar';

function Products() {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>

      <div className='Products-Container overflow-y-sroll relative w-screen h-screen'>
      <Navbar/>
      <div className="Hammenu">
          <HiMenuAlt3
            size={30}
            className="text-white font-extra mr-1"
            onClick={toggleMenu}
          />
        </div>

        <section className='Products-bgsection w-full h-96 flex items-center justify-center bg-cover bg-center'>
        <p className="text-black text-4xl sm:text-6xl md:text-4xl lg:text-5xl font-poppins">Shop Our 100% Authentic Products</p>
        </section>


        <div className='Products-Hero-Section w-screen h-screen'>



        </div>
        <Footer/>
        <StickyNavbar/>

      </div>





    </>
  )
}

export default Products