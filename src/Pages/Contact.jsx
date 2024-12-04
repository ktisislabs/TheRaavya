import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaCartShopping, FaAmazon, FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp, IoHeart } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import '../styles/Contact.css';


function Contact() {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="contact-Section overflow-y-auto w-screen h-full relative">
        <Navbar />
        <div className="Hammenu">
          <HiMenuAlt3
            size={30}
            className="text-white font-extra mr-1"
            onClick={toggleMenu}
          />
        </div>
        <section className="contact-bgsection w-full h-96 flex items-center justify-center bg-cover bg-center">
          <p className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-poppins">Contact Us</p>
        </section>
        {openMenu && (
          <aside className="AsideMenu fixed top-0 right-0 w-[300px] h-screen bg-[#9c8276] text-white shadow-lg z-50 flex flex-col">
            <div className="MenuHeader flex justify-between items-center p-4 border-b border-white">
              <h2 className="text-lg font-semibold">Menu</h2>
              <AiOutlineClose size={24} className="cursor-pointer" onClick={toggleMenu} />
            </div>
            <div className="MenuContent flex flex-col gap-4 p-4 flex-grow">
              <a href="#about" className="hover:underline">About</a>
              <a href="#services" className="hover:underline">Home Decor</a>
              <a href="#work" className="hover:underline">Furniture</a>
              <a href="#contact" className="hover:underline">Bulk Order</a>
              <a href="#contact" className="hover:underline">Contact</a>
              <FaCartShopping className="text-white text-sm" />
              <IoHeart className="text-white text-sm" />
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
        <div className="contact-section-hero w-full h-full px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Address Section */}
          <div className="Address-details flex flex-col items-center lg:items-start w-full lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-black font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-center lg:text-left">
              Address
            </p>
            <p className="text-sm sm:text-base font-poppins mt-5">Home Address</p>
            <p className="text-gray-400 text-center lg:text-left">
              552-Mandakini Enclave Alaknanda,<br /> New Delhi-110019
            </p>
            <p className="text-sm sm:text-base font-poppins mt-5">Office Address</p>
            <p className="text-gray-400 text-center lg:text-left">
              552-Mandakini Enclave Alaknanda,<br /> New Delhi-110019
            </p>
            <p className="text-black font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mt-12 text-center lg:text-left">
              Contact Us
            </p>
            <p className="text-gray-400 text-center lg:text-left">+91 7701853700</p>
            <p className="text-gray-400 text-center lg:text-left">+91 7701853700</p>
            <p className="text-black font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mt-12 text-center lg:text-left">
              Working Hours
            </p>
            <p className="text-gray-400 text-center lg:text-left">9:00 AM to 10:00 PM</p>
            <p className="text-gray-400 text-center lg:text-left">9:00 AM to 10:00 PM</p>
          </div>
          {/* Form Section */}
          <form className="Contact-form w-full lg:w-1/2 flex flex-col items-center justify-center gap-8">
            <p className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-5 font-semibold text-center">
              GET IN TOUCH
            </p>
            <div className="form-input flex flex-col items-start mt-8 w-full max-w-md">
              <label className="font-poppins text-sm sm:text-base font-medium">Email</label>
              <input
                className="w-full border-b border-black px-3 py-2 text-sm sm:text-base"
                type="email"
                placeholder="Enter your Email"
              />
            </div>
            <div className="form-input flex flex-col items-start mt-8 w-full max-w-md">
              <label className="font-poppins text-sm sm:text-base font-medium">Phone Number</label>
              <input
                className="w-full border-b border-black px-3 py-2 text-sm sm:text-base"
                type="number"
                placeholder="Enter your Phone Number"
              />
            </div>
            <div className="form-input flex flex-col items-start mt-8 w-full max-w-md">
              <label className="font-poppins text-sm sm:text-base font-medium">Enter a Message</label>
              <textarea
                className="w-full h-56 border border-black px-3 py-2 text-sm sm:text-base"
                placeholder="Drop a message"
              ></textarea>
            </div>
            <button className="mt-8 border m-2 p-2 w-full md:w-1/3 rounded-full bg-black text-white hover:bg-white hover:text-black hover:border-black">
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
