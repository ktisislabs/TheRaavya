import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Homepage.css'
import HomeImg from '../Assets/Homepage.jpg'
import NameImage from '../Assets/text-logo.png'

function Home() {


  return (
    <>
      <div className="Homepage-Container overflow-y-scroll overflow-x-hidden w-screen h-auto relative">
        
        <section
  className="Section-1-container w-screen h-screen bg-center bg-no-repeat bg-cover fix"
  style={{
    backgroundImage: `url(${HomeImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
<Navbar />

  <div className="text-white text-center flex items-center justify-center h-full">
    <img src={NameImage} alt="TheRaavya" className=' w-[30vw] mr-[-50vw] mt-[30vw]'></img>
  </div>
</section>
 <section
  className="Section-1-container w-screen h-screen bg-center bg-no-repeat bg-cover absolute"
  style={{
    // backgroundImage: `url(${HomeImg})`,
    
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  <div className="text-white text-center flex items-center justify-center h-full">
    <h1 className="text-4xl font-bold">Hello</h1>
  </div>
</section>
      </div>
    </>
  );
}

export default Home;
