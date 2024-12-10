import React, { useContext, useEffect, useState } from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const SingleCategory = () => {
  const navigate = useNavigate();
  const { data, likeHandler, wishlist, user } = useContext(UserContext);
  const { id } = useParams();
  const [likedProducts, setLikedProducts] = useState([]);
  const productList = data?.products?.filter(
    (product) => product.category.name === id
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    // Update liked products based on the wishlist state
    if (wishlist?.wishlist?.items) {
      setLikedProducts(wishlist.wishlist.items.map((item) => item.product._id));
    }
  }, [id, wishlist]);

  // Check if a product is liked
  const isLiked = (productId) => likedProducts.includes(productId);

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

  return (
    <div className="min-h-[71vh] mt-16 sm:mt-0">
      <div className="m-4 flex items-center gap-2 mt-4">
        <p
          className="cursor-pointer text-black hover:underline"
          onClick={() => navigate("/")}
        >
          Home
        </p>
        <MdOutlineChevronRight />
        <p className="text-gray-600">
          Showing all the products of "
          <span className="text-green-500 font-bold">{id}</span>"
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-4 m-4">
        {productList?.map((item) => (
          <div
            key={item._id}
            className="border rounded-md p-2 relative cursor-pointer"
          >
            <div className="">
              <img
                src={item.image}
                alt={item.name}
                className="p-2 hover:scale-75 transition-all duration-500"
                onClick={() => {
                  navigate(`/product/${item._id}`);
                }}
              />
            </div>
            <hr />
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-green-500 font-bold">₹{item.price}</p>
            <div
              className="absolute top-3 right-3 bg-gray-100 rounded-full p-2 cursor-pointer"
              onClick={() => handleLikeToggle(item._id)} // Toggle like immediately
            >
              {isLiked(item._id) ? (
                <FaHeart className="text-red-500 text-xl sm:text-2xl" />
              ) : (
                <FaRegHeart className="text-xl sm:text-2xl text-black" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;
