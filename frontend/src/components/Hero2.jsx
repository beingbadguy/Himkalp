import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosFootball } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";
import { GiHerbsBundle } from "react-icons/gi";

{
  /* <MdArrowRightAlt />; */
}

const Hero2 = () => {
  const navigate = useNavigate();

  return (
    <div className=" mt-2 h-[500px] flex flex-col items-center justify-center gap-5 ">
      <div className="flex items-center  p-1 gap-1 bg-green-50 text-green-500 shadow-inner rounded-md">
        Ayurvedic Season <GiHerbsBundle />
      </div>
      <div className=" w-full  flex flex-col items-center justify-center text-center text-black space-y-4 ">
        <h1 className="text-3xl sm:text-3xl md:text-6xl font-bold">
          Welcome to Himkalp
        </h1>
        <p className="text-lg">
          Your trusted source for natural Ayurvedic wellness products!
        </p>
        <button
          className="bg-green-300 hover:bg-green-500 text-black px-6 py-2 rounded-md font-bold mt-4 w-[40%] md:w-[15%]"
          onClick={() => {
            navigate(`search/All Products`);
          }}
        >
          Shop Now
        </button>

        {/* Small images surrounding the main text */}
        <div className="flex flex-wrap gap-4">
          <img
            src="https://images.unsplash.com/photo-1480186995480-5f6b7a5dc840?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ronaldo"
            className=" h-16 w-16 sm:h-24 sm:w-24 object-cover rounded-full border-4 border-white hover:scale-90 transition-all duration-300 cursor-pointer"
          />
          <img
            src="https://images.unsplash.com/photo-1564277287253-934c868e54ea?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Messi"
            className=" h-16 w-16 sm:h-24 sm:w-24 object-cover rounded-full border-4 border-white hover:scale-90 transition-all duration-300 cursor-pointer"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1705609328934-98e6e0368b41?q=80&w=2396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Football studs"
            className=" h-16 w-16 sm:h-24 sm:w-24 object-cover rounded-full border-4 border-white hover:scale-90 transition-all duration-300 cursor-pointer"
          />
          <img
            src="https://images.unsplash.com/photo-1587216829167-3efaaeaad2a9?q=80&w=2570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Football jersey"
            className=" h-16 w-16 sm:h-24 sm:w-24 object-cover rounded-full border-4 border-white hover:scale-90 transition-all duration-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
