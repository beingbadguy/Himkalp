import React, { useContext, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";
import WhatsAppLink from "../components/WhatsappLink";

const SingleConsultationPage = () => {
  const { consult } = useContext(UserContext);
  const { name } = useParams();
  const consultation = consult.categories.find((c) => c.name === name);
  // console.log(consultation);
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
        <p>{name}</p>
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
        <img
          src={consultation?.image}
          alt=""
          className="w-full h-48 object-cover mt-2"
        />
        <h1 className="text-4xl mt-4 font-bold text-green-500">{name}</h1>
        <p className="p-4">{consultation?.description}</p>
      </div>
      <div>
        <h1 className=" p-4 font-bold text-3xl text-green-500 hidden">
          Contact Us
        </h1>
        <div className="pl-4   md:py-2 grid grid-cols-1 md:grid-cols-2 ">
          <div>
            <WhatsAppLink content={name} />
          </div>
          <div className="grid grid-cols-1 gap-2 w-[90%] hidden">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="border border-black rounded w-full p-2 outline-green-500"
              />
            </div>

            <div>
              <label htmlFor="phone">Phone Number: </label>
              <input
                type="number"
                id="phone"
                className="border border-black rounded w-full p-2 outline-green-500"
              />
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                name=""
                id=""
                rows={10}
                className="border border-black rounded w-full p-2 outline-green-500"
              ></textarea>
              <p className="p-2 bg-green-500 w-[150px] flex items-center justify-center font-bold  text-white rounded my-3">
                Send Message
              </p>
            </div>
          </div>
          <div className="mr-2">
            <div className=" flex items-start justify-center flex-col md:block  ">
              <h1 className="font-bold text-3xl text-green-500 mb-2">
                Address & Info
              </h1>

              <p>Address 1: 3/37 Sec 2, Rajinder Nagar, Shahibabad, UP </p>
              <p>
                Address 2: Sampurna Aarogyam Sewa Ashram, Greater Noida, UP{" "}
              </p>
            </div>
            <div>
              <p> Contact: +91 9634178864 (Ankit Yogi)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleConsultationPage;
