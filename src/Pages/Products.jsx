import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import { HiMenuAlt3 } from "react-icons/hi";
import { FaCartShopping, FaAmazon, FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp, IoHeart } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Footer from '../components/Footer';
import StickyNavbar from '../components/StickyNavbar';
import {FurnitureData} from '../Data/Furniture'
import{HomeDecorData} from '../Data/HomeDecor';
import { useForm, ValidationError } from '@formspree/react';
import {Toaster,toast} from "react-hot-toast";

function Products() {

  const [openMenu, setOpenMenu] = useState(false);
  const [state, handleSubmit] = useForm("xyzzbnle");

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };



  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thank you for reaching out to us!", {
        duration: 4000,
        position: "bottom-center",
      });
    }
  }, [state.succeeded]);





  return (
    <>

<div className="Products-Container overflow-y-auto overflow-x-hidden relative w-screen h-screen">
  <Navbar />
  <div className="Hammenu">
    <HiMenuAlt3
      size={30}
      className="text-white font-extra mr-1"
      onClick={toggleMenu}
    />
  </div>

  <section className="Products-bgsection w-full h-96 flex items-center justify-center bg-cover bg-center">
    <p className="text-black text-4xl sm:text-6xl md:text-4xl lg:text-5xl font-poppins">
      Shop Our 100% Authentic Products
    </p>
  </section>
  
  <div className="Furniture-Products w-screen h-auto px-8 py-12">
    <h2 className="text-3xl font-medium text-center mb-12 font-sans text-gray-800">
       Best Selling Products
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {HomeDecorData.map((item) => (
        <div
          key={item._id}
          className="border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
        >
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
            <img
              src={item.image_1}
              alt={item.name}
              className="h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {item.Description || "A beautifully crafted piece to enhance your space."}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-bold">
                Category: {item.category}
              </span>
              <button className="px-4 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-700 transition">
                View More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="Furniture-Products w-screen h-auto px-8 py-12">
    <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-gray-800">
    Furniture Collection
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {FurnitureData.map((item) => (
        <div
          key={item._id}
          className="border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
        >
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
            <img
              src={item.image_1}
              alt={item.name}
              className="h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {item.Description || "A beautifully crafted piece to enhance your space."}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-bold">
                Category: {item.category}
              </span>
              <button className="px-4 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-700 transition">
                View More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  <section className="product-descsection w-full h-auto py-12 sm:py-16 flex flex-col items-center justify-center bg-cover bg-center">
  <p className="text-[black] text-xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins text-center">
    Subscribe to our NewsLetter !
  </p>
  <p className="text-[black] text-base sm:text-lg md:text-xl lg:text-2xl font-poppins text-center mt-2">
  Subscribe to get access to the latest designs and product drops from TheRaavya.
  </p>
  
  {/* Email Subscription Form */}
  <div className="mt-6 w-full max-w-md px-4 sm:px-8">
    <form className="flex flex-col sm:flex-row items-center gap-4" onSubmit={handleSubmit}>
      <input
        type="email"
        name='email'
        id='email'
        className="w-full sm:flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base font-poppins"
        placeholder="Enter your email"
      />
      <Toaster/>
      <button
        type="submit"
        className="px-6 py-3 bg-transparent border border-black text-black rounded-full hover:bg-black hover:text-white transition"
      >
        Subscribe
      </button>
    </form>
  </div>
</section>

  <Footer />
  <StickyNavbar />
</div>


   



    </>
  )
}

export default Products