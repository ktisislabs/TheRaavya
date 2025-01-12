import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaCartShopping, FaAmazon, FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp, IoHeart } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/Contact.css";
import ContactDesc from "../Assets/contact-desc.jpg";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import {Toaster,toast} from "react-hot-toast";

function Contact() {
  const [openMenu, setOpenMenu] = useState(false);
  const [state, handleSubmit] = useForm("mwppwrwy");

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thank you for reaching out to us!", {
        duration: 4000,
        position: "top-center",
      });
    }
  }, [state.succeeded]);

  const whatsappLink =
    "https://wa.me/7701853700?text=Hi%20there!%20I%27m%20interested%20in%20learning%20more%20about%20your%20products.";

  return (
    <>
      <div className="contact-Section w-full h-full relative overflow-x-hidden">
        <Navbar />
        <div className="Hammenu">
          <HiMenuAlt3
            size={30}
            className="text-white font-extra mr-1 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        <section className="contact-bgsection w-full h-72 sm:h-96 flex items-center justify-center bg-cover bg-center">
          <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins text-center">
            Contact Us
          </p>
        </section>

        {openMenu && (
          <aside className="AsideMenu fixed top-0 right-0 w-3/4 sm:w-[300px] h-screen bg-[#9c8276] text-white shadow-lg z-50 flex flex-col">
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

        <div className="contact-section-hero w-full px-4 py-36 sm:px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Form Section */}
          <form
            className="Contact-form w-full lg:w-1/2 flex flex-col items-center gap-6"
            onSubmit={handleSubmit}
          >
            <p className="font-poppins text-2xl sm:text-3xl md:text-4xl text-center">
              Get In Touch
            </p>
            <div className="form-input w-full max-w-md">
              <label
                htmlFor="email"
                className="font-poppins text-sm sm:text-base font-medium"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                className="w-full border-b border-black px-3 py-2"
                type="email"
                placeholder="Enter your Email"
                required
              />
              <ValidationError field="email" errors={state.errors} />
            </div>
            <div className="form-input w-full max-w-md">
              <label
                htmlFor="phone"
                className="font-poppins text-sm sm:text-base font-medium"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                className="w-full border-b border-black px-3 py-2"
                type="text"
                placeholder="Enter your Phone Number"
                required
              />
            </div>
            <div className="form-input w-full max-w-md">
              <label
                htmlFor="message"
                className="font-poppins text-sm sm:text-base font-medium"
              >
                Enter a Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full border-b border-black px-3 py-2"
                placeholder="Drop a message"
                required
              ></textarea>
              <ValidationError field="message" errors={state.errors} />
            </div>
            <Toaster/>
            <button
              
              className="w-full sm:w-auto px-6 py-3 mt-4 bg-black text-white rounded-full hover:bg-white hover:text-black"
            >
              Submit
            </button>
          </form>

          {/* Description Section */}
          <div className="Contact-Description w-full lg:w-1/2 flex flex-col items-center gap-4 text-center">
            <h1 className="text-lg sm:text-xl font-semibold">Let’s Connect</h1>
            <img
              src={ContactDesc}
              alt="contact-description-image"
              className="w-1/3 sm:w-1/4"
            />
            <p className="font-medium text-sm sm:text-base">
              We’re here for you! Connect with us via phone or Whatsapp, and our
              team will be happy to assist you.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.amazon.in/stores/page/31BEBC02-A059-4270-A214-BBD72A454047"
                target="_blank"
              >
                <FaAmazon className="text-xl" />
              </a>
              <a href={whatsappLink} target="_blank">
                <IoLogoWhatsapp className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/theraavya/"
                target="_blank"
              >
                <RiInstagramFill className="text-xl" />
              </a>
              <a
                href="http://facebook.com/theraavya"
                target="_blank"
              >
                <FaFacebookF className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <section className="contact-bgsection w-full h-72 sm:h-96 flex flex-col items-center justify-center bg-cover bg-center">
          <p className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins text-center">
            Let’s Connect!
          </p>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-poppins text-center mt-2">
            Ready to bring your dream space to life? TheRaavya: Your Home
            Creator is here to guide you every step of the way.
          </p>
          <Link to="/Products">
            <button className="px-6 py-3 mt-6 bg-white text-black rounded-full hover:bg-black hover:text-white">
              Shop Now
            </button>
          </Link>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Contact;
