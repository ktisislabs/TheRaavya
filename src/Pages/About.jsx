import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Aboutimg from "../Assets/About.jpg";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaAmazon } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import Footer from '../components/Footer';
function About() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu); 
  };

  return (
    <>
      <div className="About-Section overflow-x-hidden w-screen h-auto relative">
        <Navbar />
        <div className="Hammenu">
            <HiMenuAlt3
              size={30}
              className="text-white font-extra mr-1 "
              onClick={toggleMenu}
            />
          </div>
        {/* About Section Heading */}
        <section className="AboutSection-Heading w-screen flex flex-col md:flex-row items-center">
          <img
            src={Aboutimg}
            alt="about-img"
            className="w-full md:w-1/2 h-auto object-cover"
          />
          <div className="About-text-1 flex flex-col items-center justify-center w-full md:w-1/2 bg-white px-6 py-8">
            <p className="text-sm font-poppins text-black">ABOUT US</p>
            <p className="text-2xl md:text-3xl font-semibold my-6 text-center font-poppins text-black">
              "Crafted for the soul. Designed for eternity"
            </p>
            <p className="text-md md:text-2xl px-4 md:px-10 my-4 text-gray-400 text-center">
              We founded TheRaavya with a simple yet powerful vision: to bring beauty into a million
              homes. As our customers began sharing glimpses of their spaces, we noticed something
              extraordinary: each home had its own distinct character. The same table, the same
              chair, found new life and meaning in different settings, reflecting the unique
              personality of its owner.
              <br />
              <br />
              This insight sparked a deeper understanding: people don't just want beautiful homes;
              they want spaces that are uniquely theirs. And we discovered something even more
              profound: true joy lies not just in owning, but in creating. At TheRaavya, we
              celebrate this journey of creation, helping you craft a home that tells your story.
            </p>
            <p className="font-bold">Raghav Khanna (Founder : TheRaavya)</p>
          </div>
        </section>
        {openMenu && (
  <aside className="AsideMenu fixed top-0 right-0 w-[300px] h-screen bg-[#9c8276] text-white shadow-lg z-50 flex flex-col">
    <div className="MenuHeader flex justify-between items-center p-4 border-b border-white">
      <h2 className="text-lg font-semibold">Menu</h2>
      <AiOutlineClose
        size={24}
        className="cursor-pointer"
        onClick={toggleMenu}
      />
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
        {/* Stats Section */}
        <section className="AboutSection-2 py-16 bg-white flex flex-col items-center justify-center text-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            <div>
              <p className="text-4xl font-bold text-black">10,000+</p>
              <p className="text-gray-500">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-black">500+</p>
              <p className="text-gray-500">Furniture & Home Decor Designs</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-black">40+</p>
              <p className="text-gray-500">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-black">99%</p>
              <p className="text-gray-500">Customer Satisfaction Rate</p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="AboutSection-3 py-16 w-screen bg-gray-50">
          <div className="flex flex-col items-center px-6">
            <h1 className="text-sm font-semibold italic font-poppins my-4">
              Our Mission
            </h1>
            <p className="w-full max-w-4xl font-poppins text-gray-600 text-center font-light">
              Our mission is to revolutionize the way people experience furniture and home decor by
              making high-quality, customized, and sustainable products accessible to everyone. We
              believe that sustainability should not be a luxury but a standard, and that beautiful,
              thoughtfully designed spaces should be within reach for all.
              <br />
              <br />
              Through vertical integration, we control every stage of the production process, from
              sourcing raw materials to crafting finished products. This approach not only ensures
              impeccable quality and design but also significantly reduces costs. By cutting out
              intermediaries, we are able to pass these savings directly to our customers, making
              sustainable living more affordable and inclusive.
              <br />
              <br />
              At TheRaavya, we are committed to combining style, functionality, and sustainability
              in every piece, empowering you to create a home that reflects your values without
              compromising on quality or budget. Together, we’re shaping a future where conscious
              living meets timeless elegance.
            </p>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default About;
