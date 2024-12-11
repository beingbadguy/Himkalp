import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaRegHeart, FaTwitter } from "react-icons/fa";
import {
  FaInstagram,
  FaRegUser,
  FaUserDoctor,
  FaWhatsapp,
} from "react-icons/fa6";
import { RiHome3Line, RiMenu3Fill, RiShoppingBag3Line } from "react-icons/ri";
import { CgSearch } from "react-icons/cg";
import {
  MdArrowRightAlt,
  MdContacts,
  MdOutlineClose,
  MdOutlineDashboard,
  MdOutlineLocalPhone,
  MdOutlinePhoneInTalk,
  MdOutlineSettingsPhone,
} from "react-icons/md";
import { UserContext } from "../Context/UserContext";
import Subheader from "../components/Subheader";
import { IoMdMenu } from "react-icons/io";
import { GiHerbsBundle } from "react-icons/gi";
import logo from "../../public/himkalp_logo.png";
import { IoLocationSharp } from "react-icons/io5";

const Layout = () => {
  const { user, data, cart } = useContext(UserContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [searchProduct, setSearchProduct] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const handleSearch = (name) => {
    const trimmedName = name.trim().toLowerCase();
    if (trimmedName === "") {
      setSearchProduct([]); // Clear search results if input is empty
    } else {
      const filteredProducts = data.products.filter((item) =>
        item.name.toLowerCase().includes(search.trim().toLowerCase())
      );
      setSearchProduct(filteredProducts); // Update search results
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <div>
      {showMenu && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setShowMenu(false)}
        ></div>
      )}

      {/* Navigation bar */}
      <div className="p-4 bg-white flex items-center justify-between border sm:sticky top-0 z-50 shadow-md">
        {/* logo */}
        <div
          className="flex justify-center items-center gap-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" className="h-8" />
        </div>
        {/* search */}
        <div className="flex items-center justify-center border p-2 gap-2 sm:w-[50%] rounded border-gray-300 bg-gray-100 absolute top-[70px] w-[96%] sm:static left-2">
          <CgSearch className="text-2xl text-gray-400" />
          <input
            type="text"
            className="outline-none rounded-md w-full bg-transparent"
            placeholder="Enter product name..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleSearch(e.target.value); // Update search results on input change
            }}
          />
          <MdOutlineClose
            className={`${
              search.length > 0 ? "" : "hidden"
            } text-2xl text-gray-400 cursor-pointer`}
            onClick={() => {
              setSearch("");
              setSearchProduct([]); // Clear search results on close
            }}
          />
          <hr className="absolute w-full sm:hidden top-[47px] border-gray-300 left-0" />
          {/* Search Results */}
          <div className="absolute top-11 sm:top-16 z-[999] bg-gray-100 w-[100%] sm:w-[49%] rounded">
            {searchProduct.length > 0 && search.length > 0 ? (
              <div>
                <p className="p-2 font-bold">Search Results</p>
                <div>
                  {searchProduct.map((item) => (
                    <div
                      key={item._id}
                      className="p-2 cursor-pointer flex gap-2 items-center hover:bg-green-100"
                      onClick={() => {
                        setSearch("");
                        setSearchProduct([]); // Clear results on item click
                        navigate(`/product/${item._id}`);
                      }}
                    >
                      <img src={item.image} alt="" className="h-8" />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {search.length > 0 && searchProduct.length === 0 ? (
              <div>
                <div
                  className="p-2 flex justify-between cursor-pointer"
                  onClick={() => {
                    navigate(`/search/${search}`);
                    setSearch("");
                    setSearchProduct([]); // Clear results on no match
                  }}
                >
                  <p>
                    No results found for "<span className="">{search}</span>"
                  </p>
                  <MdArrowRightAlt className="text-2xl" />
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* icons */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <FaRegHeart
            className="text-2xl cursor-pointer"
            onClick={() => {
              navigate("wishlist");
            }}
          />
          <div
            className="relative cursor-pointer"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <RiShoppingBag3Line className="text-2xl cursor-pointer" />
            <span className="absolute -top-2 -right-1 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center font-bold p-2 text-white">
              {cart?.cart?.items?.length > 0 ? cart?.cart?.items?.length : 0}
            </span>
          </div>
          {user?.avatar ? (
            <img
              src={user?.avatar}
              alt=""
              className="rounded-full h-8 w-8 cursor-pointer"
              onClick={() => {
                if (!user) {
                  navigate("login");
                } else {
                  navigate("user");
                }
              }}
            />
          ) : (
            <FaRegUser
              className="text-2xl cursor-pointer"
              onClick={() => {
                if (!user) {
                  navigate("login");
                } else {
                  navigate("user");
                }
              }}
            />
          )}
          {user?.role === "admin" ? (
            <MdOutlineDashboard
              className="text-2xl cursor-pointer"
              onClick={() => {
                navigate("/dashboard");
              }}
            />
          ) : null}
          <div>
            <RiMenu3Fill
              className="text-2xl cursor-pointer"
              onClick={() => {
                setShowMenu(true);
              }}
            />

            {/* menu bar  */}
            <div
              className={`${
                showMenu ? "translate-x-0" : "translate-x-[-200%]"
              } transition-all duration-300 ease-in-out fixed top-0 left-0 w-[70%] md:w-[20%] h-screen bg-gray-50 z-50 border`}
            >
              <ul className="flex pl-3 pt-14 flex-col font-bold uppercase text-2xl gap-2 relative ">
                <div
                  className="absolute right-4 top-4 text-3xl cursor-pointer"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <MdOutlineClose />
                </div>

                <li
                  className={`${
                    pathname === "/" ? "text-green-500" : ""
                  } hover:text-green-500 cursor-pointer flex items-center gap-2 border-b py-2 `}
                  onClick={() => {
                    navigate("/");
                    setShowMenu(false);
                  }}
                >
                  <RiHome3Line /> Home
                </li>
                <li
                  className={`${
                    pathname === "/search" ? "text-green-500" : ""
                  } hover:text-green-500 cursor-pointer flex items-center gap-2  border-b py-2  `}
                  onClick={() => {
                    navigate("/search/search");
                    setShowMenu(false);
                  }}
                >
                  <GiHerbsBundle />
                  Products
                </li>
                <li
                  className={`${
                    pathname === "/contact" ? "text-green-500" : ""
                  } hover:text-green-500 cursor-pointer flex items-center gap-2 border-b py-2   `}
                  onClick={() => {
                    navigate("/consult");
                    setShowMenu(false);
                  }}
                >
                  <FaUserDoctor /> Our Consultation
                </li>
                <li
                  className={`${
                    pathname === "/about" ? "text-green-500" : ""
                  } hover:text-green-500 cursor-pointer flex items-center gap-2 border-b py-2   `}
                  onClick={() => {
                    navigate("/about");
                    setShowMenu(false);
                  }}
                >
                  <MdContacts />
                  About Us
                </li>
                <li
                  className={`${
                    pathname === "/contact" ? "text-green-500" : ""
                  } hover:text-green-500 cursor-pointer flex items-center gap-2 border-b py-2   `}
                  onClick={() => {
                    navigate("/contact");
                    setShowMenu(false);
                  }}
                >
                  <MdOutlinePhoneInTalk /> Contact Us
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* outlet */}
      <Outlet />
      {/* footer */}
      <div
        className={`${
          pathname === "/login" || pathname === "/signup" ? "hidden" : "block"
        } bg-gradient-to-r from-green-500 to-green-700 p-6 text-white`}
      >
        <div className="py-8  md:py-2 flex items-center justify-center flex-col md:block text-center md:text-left">
          <div>
            <div className="flex items-center gap-1 w-full">
              Address 1: 3/37 Sec 2, Rajinder Nagar, Shahibabad, UP{" "}
            </div>
            <div className="flex items-center gap-1">
              Address 2: Sampurna Aarogyam Sewa Ashram, Greater Noida, UP{" "}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <MdOutlineLocalPhone />
            <p> Contact: +91 9634178864 (Ankit Yogi)</p>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="flex flex-col items-center text-center sm:text-left sm:flex-row justify-between">
            <div className="flex items-center gap-1">
              <img src={logo} alt="logo" className="bg-white h-8" />
            </div>
            <p className="text-sm italic mt-2 sm:mt-0">
              "Your trusted source for natural Ayurvedic wellness products!"
            </p>
          </div>
        </div>

        <hr className="my-4 border-t border-gray-200" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm mt-4 space-y-2 sm:space-y-0">
          <div>© {new Date().getFullYear()} Himkalp. All Rights Reserved.</div>

          <div className="flex space-x-4 text-2xl">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-500 transition duration-200" />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-green-300 transition duration-200" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-blue-500 transition duration-200" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-blue-400 transition duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
