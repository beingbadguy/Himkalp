import React, { useContext, useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { MdOutlineChevronRight } from "react-icons/md";
import { IoAdd, IoStarSharp } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const SingleProduct = () => {
  const queryClient = useQueryClient();
  const { data, likeHandler, wishlist, AddToCart, user } =
    useContext(UserContext);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("md"); // Default value
  const [likedProducts, setLikedProducts] = useState([]);

  const allProducts = data?.products;
  const wishArr = wishlist?.wishlist?.items;

  // Check if a product is liked
  const isLiked = (productId) => likedProducts.includes(productId);

  // Suggested products excluding the current product
  const suggestedProducts = allProducts?.filter(
    (product) => product._id !== id
  );

  // Fetch single product data using react-query
  const { data: singleProduct } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}/api/products/product/${id}`);
      return response.data;
    },
    onError: (error) => {
      console.error("Error fetching product:", error);
    },
  });
  const product = singleProduct?.product;

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
    // Update liked products based on the wishlist state
    if (wishlist?.wishlist?.items) {
      setLikedProducts(wishlist.wishlist.items.map((item) => item.product._id));
    }
  }, [id, wishlist]);

  // Handle like toggle with optimistic UI update
  const handleLikeToggle = (productId) => {
    if (!user) {
      navigate("/login");
    } else {
      likeHandler(productId); // Call the likeHandler to update backend
      // Optimistically update the UI by adding/removing from likedProducts
      if (isLiked(productId)) {
        setLikedProducts(likedProducts.filter((id) => id !== productId));
      } else {
        setLikedProducts([...likedProducts, productId]);
      }
    }
  };

  const jerseysize = ["xs", "sm", "md", "lg", "xl", "xxl"];
  const shoesize = ["6", "7", "8", "9", "10", "11", "12"];
  const footballsize = ["3", "4", "5", "6"];

  useEffect(() => {
    if (product) {
      setSize(product.category.name === "Cleats" ? "7" : "md");
    }
  }, [product]);

  return (
    <div className="min-h-[80vh] mt-16 sm:mt-0 mb-10">
      <div className="mx-4 md:mx-10 flex items-center gap-2 mt-4">
        <p
          className="cursor-pointer text-black hover:underline"
          onClick={() => navigate("/")}
        >
          Home
        </p>
        <MdOutlineChevronRight />
        <p
          className="text-gray-600 cursor-pointer hover:underline"
          onClick={() => navigate(`/category/${product?.category?.name}`)}
        >
          {product?.category?.name}
        </p>
        <MdOutlineChevronRight />
        <p className="text-green-500 font-semibold">{product?.name}</p>
      </div>

      <div className="flex items-center justify-center md:items-start md:justify-evenly flex-col md:flex-row my-4 p-4">
        <div className="w-full md:w-[50%] flex items-center justify-center mb-4">
          <img
            src={product?.image}
            alt={product?.name}
            className="border p-4 rounded-md md:h-[450px] max-w-full object-contain"
          />
        </div>
        <div className="w-[90%] md:w-[40%] flex flex-col gap-4 justify-between">
          <p className="text-gray-600">{product?.category?.name}</p>
          <p className="font-bold text-2xl">{product?.name}</p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <IoStarSharp key={index} className="text-yellow-500" />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <p className="font-bold text-xl text-green-600">
              ₹{(product?.price * 0.9).toFixed(2)}
            </p>
            <p className="font-bold text-xl line-through text-red-500">
              ₹{product?.price}
            </p>
          </div>
          <p className="text-gray-700">{product?.description}</p>
          <p className="text-xl font-bold">Stock: {product?.quantity}</p>

          <div
            className={`${
              product?.category?.name === "Cleats" ? "" : "hidden"
            } ${
              product?.category?.name === "Football" ? "hidden" : ""
            } flex gap-4 p-2`}
          >
            {shoesize.map((_, i) => (
              <div
                key={i}
                className={`${
                  size === _ ? "bg-green-500 text-white" : ""
                } bg-gray-100 p-2 rounded cursor-pointer`}
                onClick={() => setSize(_)}
              >
                {_.toUpperCase()}
              </div>
            ))}
          </div>

          <div
            className={`${
              product?.category?.name !== "Cleats" ? "" : "hidden"
            }${
              product?.category?.name === "Football" ? "hidden" : ""
            }  flex gap-4 p-2 hidden`}
          >
            {jerseysize.map((_, i) => (
              <div
                key={i}
                className={`${
                  size === _ ? "bg-green-500 text-white" : ""
                } bg-gray-100 p-2 rounded cursor-pointer`}
                onClick={() => setSize(_)}
              >
                {_.toUpperCase()}
              </div>
            ))}
          </div>

          <hr />
          <div className="flex items-center">
            <div
              className="bg-gray-100 w-10 h-10 cursor-pointer flex items-center justify-center rounded-full"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            >
              <RiSubtractLine />
            </div>
            <p className="px-4 py-2 h-6 w-10 flex items-center justify-center">
              {quantity}
            </p>
            <div
              className="bg-gray-100 w-10 h-10 cursor-pointer flex items-center justify-center rounded-full"
              onClick={() => setQuantity(quantity + 1)}
            >
              <IoAdd />
            </div>
          </div>

          <div className="flex items-center md:mt-0 py-2">
            <div
              className="bg-black flex items-center justify-center text-white gap-2 rounded-md p-2 w-full cursor-pointer hover:scale-90 transition-all duration-500"
              onClick={() => {
                if (!user) {
                  navigate("/login");
                } else {
                  AddToCart.mutate({
                    productId: product?._id,
                    quantity,
                    size,
                  });
                }
              }}
            >
              <RiShoppingBag3Line />
              Add to cart
            </div>
            <div
              className="bg-gray-200 p-3 rounded-md cursor-pointer hover:bg-white hover:text-red-500 transition-all ml-2"
              onClick={() => handleLikeToggle(product?._id)} // Toggle like immediately
            >
              {isLiked(product?._id) ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Suggested products */}
      <div className="p-4">
        <p className="text-xl">Suggested Products</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-4">
          {suggestedProducts?.map((item) => (
            <div key={item._id} className="border rounded-md p-2 relative">
              <div className="flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="p-2 hover:scale-75 transition-all duration-500 cursor-pointer h-72"
                  onClick={() => navigate(`/product/${item._id}`)}
                />
              </div>
              <hr />
              <h3
                className="font-bold cursor-pointer"
                onClick={() => navigate(`/product/${item._id}`)}
              >
                {item.name}
              </h3>
              <p className="text-green-500 font-bold">₹{item.price}</p>
              <div
                className="absolute top-3 right-3 bg-gray-100 rounded-full p-2 cursor-pointer"
                onClick={() => handleLikeToggle(item._id)} // Toggle like immediately
              >
                {isLiked(item._id) ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
