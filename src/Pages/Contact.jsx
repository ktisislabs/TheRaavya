import React from "react";
import Navbar from "../components/Navbar";
import contact from "../Assets/contact.jpg";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <div className="contact-Section overflow-y-scroll overflow-x-hidden w-screen h-screen relative">
        <Navbar />
    <section className="contact-bgsection w-screen h-96  flex items-center justify-center">
    <p className="text-white text-7xl font-poppins ">Contact Us</p>
    </section>
        <div className="contact-section-hero  w-full h-full flex items-center justify-center">
          <div className="Address-details flex flex-col items-center   w-1/2 ">
            <p className="text-black font-poppins text-3xl font-medium">
              Address
            </p>
            <p className="text-sm font-poppins  mt-5">Home Address</p>
            <p className="text-gray-400 text-center">
              552-Mandakini Enclave Alaknanda,<br></br> New Delhi-110019
            </p>
            <p className="text-sm font-poppins mt-5">Office Address</p>
            <p className="text-gray-400 text-center">
              552-Mandakini Enclave Alaknanda,<br></br> New Delhi-110019
            </p>
            <p className="text-black font-poppins text-3xl font-medium mt-12">
              Contact Us
            </p>
            <p className="text-gray-400">+91 7701853700</p>
            <p className="text-gray-400">+91 7701853700</p>
            <p className="text-black font-poppins text-3xl font-medium mt-12">
              Working Hours
            </p>
            <p className="text-gray-400">9:00 AM to 10:00 PM</p>
            <p className="text-gray-400">9:00 AM to 10:00 PM</p>
          </div>
          <form className="Contact-form  w-1/2 flex items-center justify-center flex-col">

            <p className="font-poppins text-5xl font-semibold">GET IN TOUCH</p>

            <div className="form-input flex flex-col items-start mt-12">
            <label className="font-poppins text-lg font-medium">Email</label>
            <input className="w-96 border-b border-black " type="email" placeholder="Enter your Email"></input>

            </div>

            <div className="form-input flex flex-col items-start mt-12">
            <label className="font-poppins text-lg font-medium">Phone Number</label>
            <input className="w-96 border-b border-black " type="Number" placeholder="Enter your Phone Number"></input>

            </div>

            <div className="form-input flex flex-col items-start mt-12">
            <label className="font-poppins text-lg font-medium">Enter a Message</label>
            <textarea className="w-96 border border-black " type="Number" placeholder="Drop a message"></textarea>

            </div>

            <button className="mt-12 border p-2 w-1/4 rounded-full bg-black text-white hover:bg-white hover:text-black hover:border-black">Submit</button>




          </form>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Contact;
