import React, { useState } from "react";
import NameImage from "../Assets/text-logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Mainlogo from "../Assets/Mainlogo.png";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import { FaAmazon, FaCartShopping, FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoHeart } from "react-icons/io5";
import Footer from "../components/Footer";
import HomePageScene from "../components/Homepagescene";
import {Link} from 'react-router-dom'

function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="Home-Container overflow-y-scroll overflow-x-hidden w-screen h-auto relative">
        {/* Section 1: Hero Section */}
        <section className="Section-1-container relative w-screen h-screen bg-center bg-no-repeat bg-cover fix z-0">
          <Navbar />
          <HomePageScene />
          <div className="Hammenu absolute top-0 right-0">
            <HiMenuAlt3
              size={30}
              className="text-white cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          <div className="Hero-Section text-white text-center flex items-center flex-col justify-center h-full">
            <img
              src={Mainlogo}
              className="w-64 md:w-56 absolute z-10"
              alt="Main Logo"
            />
          </div>
        </section>

        {/* Aside Menu */}
        {openMenu && (
          <aside className="AsideMenu fixed top-0 right-0 w-[80%] sm:w-[300px] h-screen bg-[#9c8276] text-white shadow-lg z-50 flex flex-col">
            <div className="MenuHeader flex justify-between items-center p-4 border-b border-white">
              <h2 className="text-lg font-semibold">Menu</h2>
              <AiOutlineClose
                size={24}
                className="cursor-pointer"
                onClick={toggleMenu}
              />
            </div>
            <div className="MenuContent flex flex-col gap-4 p-4 flex-grow">
              <a href="#about" className="hover:underline">
                About
              </a>
              <a href="#services" className="hover:underline">
                Home Decor
              </a>
              <a href="#work" className="hover:underline">
                Furniture
              </a>
              <a href="#contact" className="hover:underline">
                Bulk Order
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
              <div className="flex space-x-4">
                <FaCartShopping className="text-white text-lg" />
                <IoHeart className="text-white text-lg" />
              </div>
            </div>
            <div className="MenuFooter mt-auto p-4 text-center text-sm border-t border-white">
              <p>© 2024 Ktisis Labs. All rights reserved.</p>
              <div className="SocialIcons flex justify-center mt-2 space-x-4">
                <FaAmazon className="text-xl" />
                <IoLogoWhatsapp className="text-xl" />
                <RiInstagramFill className="text-xl" />
                <FaFacebookF className="text-xl" />
              </div>
            </div>
          </aside>
        )}

        {/* Section 2: Premium Furniture */}
        <section className="Section-2-container relative z-20 w-screen h-screen bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center px-6 md:px-12">
          <div className="section-2-hero text-white text-center">
            <h1 className="text-4xl md:text-8xl font-medium font-poppins px-4 py-8">
              Premium Furniture Products
            </h1>
           <Link to='/Products'> <p className="font-poppins text-sm text-white">
              <u>LEARN MORE</u>
            </p></Link>
          </div>
        </section>

        {/* Section 3: Home Decor */}
        <section className="Section-3-container relative z-20 w-screen h-screen bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center px-6 md:px-12">
          <div className="section-3-hero text-[#5f4124] text-center">
            <h1 className="text-4xl md:text-8xl font-medium font-poppins px-4 py-8">
              Premium Home Decor Products
            </h1>
            <Link to='/Products'>  <p className="font-poppins text-sm">
              <u>LEARN MORE</u>
            </p> </Link>
          </div>
        </section>

        {/* Section 4: Amazon Store */}
        <section
          className="Section-4-container w-screen h-screen bg-center bg-no-repeat bg-cover crazy-fade-in"
        >
          <div className="section-4-hero text-white text-center flex flex-col items-center justify-center h-full">
            <h1 className="text-8xl font-medium font-poppins text-white px-12 py-12">
              Visit our Amazon store
            </h1>
            <a href='https://www.amazon.in/stores/page/31BEBC02-A059-4270-A214-BBD72A454047' target="_blank"> <button className='text-white font-poppins font-bold rounded-full flex items-center gap-5 px-12 py-2 opacity-70 bg-black hover:bg-slate-500'>SHOP NOW <FaAmazon className='text-xl'/></button></a>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
