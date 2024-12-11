import React, { useEffect } from "react";
import Consultation from "../components/Consultation";
import { MdOutlineChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ConsulatinPage = () => {
  const navigate = useNavigate();

  // useEffect to scroll to the top of the page when navigating to the page.
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page when navigating to the page.
  }, []);
  return (
    <div className="min-h-[80vh] mt-16 sm:mt-0  mb-10 ">
      <div className="mx-4  flex items-center gap-2 mt-4">
        <p
          className="cursor-pointer text-black hover:underline"
          onClick={() => navigate("/")}
        >
          Home
        </p>
        <MdOutlineChevronRight />
        <p>Consultation</p>
      </div>
      <Consultation />
    </div>
  );
};

export default ConsulatinPage;
