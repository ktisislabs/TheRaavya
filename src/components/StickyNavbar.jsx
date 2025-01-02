import React from "react";

const StickyNavbar = () => {
  return (
    <nav className="StickyNavbar fixed top-10  left-1/2 transform -translate-x-1/2 bg-white text-black flex justify-between items-center h-16 w-[90%] sm:w-3/4 md:w-1/2 lg:w-1/3 z-50 shadow-md border border-gray-300 rounded-lg px-4">
      <p className="text-sm md:text-base lg:text-xl hover:text-black hover:text-2xl cursor-pointer">All Products</p>
      <p className="text-sm md:text-base lg:text-xl hover:text-black hover:text-2xl cursor-pointer">Home Decor</p>
      <p className="text-sm md:text-base lg:text-xl hover:text-black hover:text-2xl cursor-pointer">Furniture</p>
    </nav>
  );
};

export default StickyNavbar;
