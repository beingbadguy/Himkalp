import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MdOutlineChevronRight,
  MdEmail,
  MdLocationOn,
  MdPhone,
} from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[50vh] mt-16 sm:mt-0 mb-10">
      {/* Breadcrumb */}
      <div className="mx-4 flex items-center gap-2 mt-4">
        <p
          className="cursor-pointer text-black hover:underline"
          onClick={() => navigate("/")}
        >
          Home
        </p>
        <MdOutlineChevronRight />
        <p>Contact Us</p>
      </div>

      {/* Contact Section */}
      <div className="m-4 bg-white rounded-lg grid md:grid-cols-2 gap-6">
        <img
          src="https://plus.unsplash.com/premium_photo-1664300707585-dceaf4e2b066?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Contact Image"
          className="h-72 w-full object-cover md:h-[400px]"
        />
        <div>
          <h1 className="text-2xl font-bold text-green-500 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Reach out to us through any of the
            following ways.
          </p>

          {/* Contact Details */}
          <div className="grid gap-6 sm:grid-cols-1">
            <div className="flex items-center gap-4">
              <MdEmail className="text-green-500 text-3xl" />
              <div>
                <p className="font-bold text-black">Email</p>
                <a
                  href="mailto:globalizeherbal@gmail.com"
                  className="text-gray-600 cursor-pointer"
                >
                  himkalpayurveda@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MdPhone className="text-green-500 text-3xl" />
              <div>
                <p className="font-bold text-black">Phone</p>
                <a
                  href="tel:+919634178864"
                  className="text-gray-600 cursor-pointer"
                >
                  +91 9634178864 (Ankit Yogi)
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MdLocationOn className="text-green-500 text-3xl" />
              <div>
                <div>
                  <p className="font-bold text-black">Address 1</p>
                  <a
                    href="https://www.google.com/maps?q=3/37+Sec+2,+Rajinder+Nagar,+Shahibabad,+UP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 cursor-pointer"
                  >
                    3/37 Sec 2, Rajinder Nagar, Shahibabad, UP
                  </a>
                </div>
                <div>
                  <p className="font-bold text-black">Address 2</p>
                  <a
                    href="https://www.google.com/maps?q=Sampurna+Aarogyam+Sewa+Ashram,+Greater+Noida,+UP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 cursor-pointer"
                  >
                    Sampurna Aarogyam Sewa Ashram, Greater Noida, UP
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
