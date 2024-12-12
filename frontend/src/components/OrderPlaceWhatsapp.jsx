import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
const OrderPlaceWhatsapp = ({ content = "Ayurveda Medicines" }) => {
  const [dynamicText, setDynamicText] = useState(
    `Hello Ankit Ji, I want to place order for  ${content}`
  );
  const number = "919634178864"; // Replace with the phone number in international format

  // Construct the WhatsApp URL
  const getWhatsAppLink = () => {
    const encodedText = encodeURIComponent(dynamicText); // Encode the text
    return `https://wa.me/${number}?text=${encodedText}`;
  };

  return (
    <div>
      {/* <p className=" font-bold text-3xl text-green-500 flex items-center gap-2"></p> */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="  bg-black flex items-center justify-center text-white gap-2 rounded-md p-2 w-full cursor-pointer hover:scale-90 transition-all duration-500"
      >
        <FaWhatsapp /> Order on WhatsApp
      </a>
    </div>
  );
};

export default OrderPlaceWhatsapp;
