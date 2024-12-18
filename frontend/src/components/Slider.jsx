import React from "react";
// Import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const categories = [
    {
      id: 1,
      name: "SwamiJi",
      image: "./Swami.png ",
      bgColor: "bg-cyan-100",
    },
    {
      id: 2,
      name: "Ankit",
      image: "./ankit.png",
      bgColor: "bg-rose-100",
    },

    {
      id: 2,
      name: "Him",
      image: "./him.png",
      bgColor: "bg-rose-100",
    },
    {
      id: 2,
      name: "Mountain",
      image: "./Teach.png",
      bgColor: "bg-rose-100",
    },

    {
      id: 3,
      name: "Waterfall",
      image:
        "https://images.unsplash.com/photo-1494645009625-cc17363a5f20?q=80&w=2590&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <div className="m-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        breakpoints={{
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div
              className={`h-full w-full  transition-transform duration-500 ease-in-out cursor-pointer  flex items-center justify-center`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-[300px] md:h-[450px] w-full "
              />
              {/* <p className="mt-4 text-sm font-bold text-black">
                {category.name}
              </p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
