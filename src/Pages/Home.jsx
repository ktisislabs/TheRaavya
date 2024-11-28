import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Homepage.css';
import HomeImg from '../Assets/Homepage.jpg';
import NameImage from '../Assets/text-logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import Mainlogo from '../Assets/Mainlogo.png';
import { FaAmazon } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="Homepage-Container overflow-y-scroll overflow-x-hidden w-screen h-auto relative">
        <Navbar />
        <section
          className="Section-1-container w-screen h-screen bg-center bg-no-repeat bg-cover fix crazy-fade-in"
        >
          <div className="Hammenu">
            <RxHamburgerMenu />
          </div>

          <div className="text-white text-center flex items-center flex-col justify-center h-full">
            <img src={Mainlogo} className="w-36" alt="Main Logo" />
            <img
              src={NameImage}
              alt="TheRaavya"
              className="raavya-img w-[20vw] mb-48 logo-fade-in"
            />
          </div>
        </section>

        <section
          className="Section-2-container w-screen h-screen bg-center bg-no-repeat bg-cover crazy-fade-in"
        >
          <div className="text-white text-center flex flex-col items-center justify-center h-full">
            <h1 className="text-9xl font-medium font-poppins text-[#848383] px-12 py-12">
              Premium Furniture Products
            </h1>
            <p className="font-poppins text-sm text-[#848383]">
              <u>LEARN MORE</u>
            </p>
          </div>
        </section>

        <section
          className="Section-3-container w-screen h-screen bg-center bg-no-repeat bg-cover crazy-fade-in"
        >
          <div className="text-white text-center flex flex-col items-bottom justify-bottom h-full">
            <h1 className="text-9xl font-medium  font-poppins text-[white] px-12 py-12">
             Premium Home Decor Products
            </h1>
            <p className="font-poppins text-sm text-white">
              <u>LEARN MORE</u>
            </p>
          </div>
        </section>

        <section
          className="Section-4-container w-screen h-screen bg-center bg-no-repeat bg-cover crazy-fade-in"
        >
          <div className="text-white text-center flex flex-col items-center justify-center h-full">
            <h1 className="text-8xl font-medium font-poppins text-white px-12 py-12">
            Visit our Amazon store
            </h1>
            <button className='text-white font-poppins font-bold rounded-full flex items-center gap-5 px-12 py-2 opacity-70 bg-black hover:bg-slate-500'>SHOP NOW <FaAmazon className='text-xl'/></button>
            
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
