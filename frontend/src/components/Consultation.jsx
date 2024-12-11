import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Consultation = () => {
  const { consult } = useContext(UserContext);
  const navigate = useNavigate();
  // console.log(consult);
  return (
    <div className="p-4">
      <p className="font-bold text-2xl">Our Consultation</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6 gap-4 md:gap-10">
        {consult &&
          consult.categories.map((cons, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4 flex-col text-center "
            >
              <img
                src={cons?.image}
                alt={cons?.image}
                className=" h-40 w-40 md:h-48 md:w-48 rounded-full  cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out object-cover"
                onClick={() => {
                  navigate(`/consult/${cons?.name}`);
                }}
              />
              <p
                className="font-bold cursor-pointer hover:text-green-500"
                onClick={() => {
                  navigate(`/consult/${cons?.name}`);
                }}
              >
                {cons?.name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Consultation;
