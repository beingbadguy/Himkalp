import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const Faq = ({
  question = "What is Globalize Herbal?",
  answer = "Globalizeherbal is a trusted provider of Ayurvedic products and treatments from India.",
}) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="px-2 flex justify-center items-center mt-2 sm:w-[80%] md:w-[60%] lg:w-[50%]">
      <div className="w-full">
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out bg-green-200 p-2 rounded-md`}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => {
              setCollapse(!collapse);
            }}
          >
            <div className="flex items-center gap-2">
              <BsChevronDown
                className={`transform ${collapse ? "rotate-180" : ""}`}
              />
              <p className="uppercase">{question}</p>
            </div>
          </div>
          <div
            className={`${
              collapse
                ? "max-h-[1000px] opacity-100" // Use a large max-height value
                : "max-h-0 opacity-0"
            } transition-all duration-300 ease-in-out overflow-hidden`}
          >
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
