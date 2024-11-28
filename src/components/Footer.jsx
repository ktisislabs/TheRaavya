import React from "react";
import Mainlogo from "../Assets/Mainlogo.png";
import { IoMdMail } from "react-icons/io";
import { FaAmazon } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="Footer-Section w-screen bg-[#9c8276] p-12 text-white">
      <div className="max-w-7xl mx-auto flex items-start justify-between">
        {/* Logo and Email Section */}
        <div className="Footer-1 flex flex-col gap-4">
          <img src={Mainlogo} alt="Logo" className="w-36 mx-auto" />
          <p className="text-center text-[#fff0db]">Drop your mail and reach out to us</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your E-mail"
              className="w-full p-3 pl-4 rounded-md bg-[#fff0db] text-[#9c8276] placeholder-[#9c8276] outline-none"
            />
            <button className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#9c8276]">
              <IoMdMail size={20} />
            </button>
          </div>
        </div>

        {/* Pages Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Pages</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>Products</li>
            <li>Bulk Order</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Categories Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Categories</h3>
          <ul className="space-y-2">
            <li>Home Decor</li>
            <li>Furniture</li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-bold">Home Address</h3>
            <p>552-Mandakini Enclave</p>
            <p>Alaknanda, New Delhi-110019</p>
            <p>+91 7701853700</p>
            <p>raavya2629@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Office Address</h3>
            <p>552-Mandakini Enclave</p>
            <p>Alaknanda, New Delhi-110019</p>
            <p>+91 7701853700</p>
            <p>raavya2629@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[#fff0db] mt-8 pt-4 text-center text-sm">
        <p>© 2024 Ktisis Labs. All rights reserved.</p>
        <div className="flex justify-center mt-2 space-x-4">
          {/* Add icon placeholders or links */}
          <FaAmazon className="text-xl" />
          <IoLogoWhatsapp className="text-xl"/>
          <RiInstagramFill className="text-xl"/>
          <FaFacebookF className="text-xl"/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
