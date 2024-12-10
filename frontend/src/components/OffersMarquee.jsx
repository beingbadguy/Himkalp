import React from "react";
import Marquee from "react-fast-marquee";

const OffersMarquee = () => {
  return (
    <div className="bg-green-300 text-black py-2">
      <Marquee gradient={false} speed={50}>
        🌿 Get 15% off on all Ayurvedic products! 🌿 💚 Free shipping on orders
        over ₹1000! 💚 ✨ New arrivals just in! Shop now and experience the
        benefits of Ayurveda! ✨ 🌿 Get 15% off on all Ayurvedic products! 🌿 💚
        Free shipping on orders over ₹1000! 💚 ✨ New arrivals just in! Shop now
        and experience the benefits of Ayurveda! ✨
      </Marquee>
    </div>
  );
};

export default OffersMarquee;
