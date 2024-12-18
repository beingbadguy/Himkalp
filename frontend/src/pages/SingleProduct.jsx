import React, { useContext, useState, useEffect } from "react";
import {
  FaRegHeart,
  FaHeart,
  FaSearchMinus,
  FaSearchPlus,
  FaTimes,
} from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { MdOutlineChevronRight } from "react-icons/md";
import { IoAdd, IoCloseOutline, IoStarSharp } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import OrderPlaceWhatsapp from "../components/OrderPlaceWhatsapp";

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
  const [isQrOverlay, setIsQrOverlay] = useState(false);

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

  // console.log(product?.name);

  const [isImageOverview, setIsImageOverview] = useState(false);
  const [imageZoom, setImageZoom] = useState(1);

  return (
    <div className="min-h-[80vh] mt-16 sm:mt-0 mb-10">
      {/* QR Overlay */}
      {isQrOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg">
            <IoCloseOutline
              className="absolute top-4 right-4 text-2xl cursor-pointer text-black"
              onClick={() => setIsQrOverlay(false)}
            />
            <img src="/image.png" alt="QR Code" className="max-w-xs mx-auto" />
            <p className="text-center font-bold">
              Pay & Send Screenshot to our whatsapp
            </p>
          </div>
        </div>
      )}

      {isImageOverview && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <IoCloseOutline
              className="absolute top-6 bg-gray-200 rounded-full right-5  text-black text-2xl cursor-pointer z-[999]"
              onClick={() => setIsImageOverview(false)}
            />
            <img
              src={product?.image}
              alt={product?.name}
              style={{ transform: `scale(${imageZoom})` }}
              className="rounded-md object-contain bg-white transition-transform duration-300 max-h-[70vh]"
            />
          </div>
        </div>
      )}

      {/* Section starts from here  */}
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
            className="border p-4 rounded-md h-[300px] md:h-[450px] max-w-full object-contain"
            onClick={() => setIsImageOverview(true)}
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

          <OrderPlaceWhatsapp content={product?.name} />

          <div
            className="bg-black flex items-center justify-center text-white gap-2 rounded-md p-2 w-full cursor-pointer hover:scale-90 transition-all duration-500 mt-4"
            onClick={() => setIsQrOverlay(true)}
          >
            <RiShoppingBag3Line />
            Pay Using QR
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
