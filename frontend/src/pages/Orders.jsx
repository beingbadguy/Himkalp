import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import { VscOctoface } from "react-icons/vsc";

const Orders = () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;

  const { data: ordersData } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}/api/checkouts/orders`);
      return response.data; // Adjust according to your API response structure
    },
  });

  const [searchOrder, setSearchOrder] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);

  const handleSearch = (name) => {
    if (!ordersData) return; // Prevent errors if data is not loaded yet
    const filtered = ordersData.filter((order) =>
      order.user.name.toLowerCase().includes(name.trim().toLowerCase())
    );
    setFilteredOrders(filtered);
  };

  const displayedOrders = searchOrder.length > 0 ? filteredOrders : ordersData;
  // console.log(displayedOrders);

  return (
    <div>
      <div className="p-4 flex justify-between items-center flex-wrap gap-3">
        <h1 className="text-2xl">Orders ({displayedOrders?.length})</h1>
        <div className="p-2 flex border border-gray-300 rounded-md gap-2 bg-gray-100 w-[50%]">
          <IoIosSearch className="text-2xl text-gray-400" />
          <input
            type="text"
            className="outline-none bg-transparent w-full"
            placeholder="Search for a user"
            value={searchOrder}
            onChange={(e) => {
              setSearchOrder(e.target.value);
              handleSearch(e.target.value);
            }}
          />
        </div>
      </div>
      <hr />

      {displayedOrders?.length > 0 ? (
        // <div >
        //   <div className="p-4 grid grid-cols-5 font-bold">
        //     <div>Order ID</div>
        //     <div>Customer Name</div>
        //     <div>Customer Address</div>
        //     <div>Customer Phone</div>
        //     <div>Total Amount</div>
        //   </div>
        //   <div>
        //     {displayedOrders.map((order) => (
        //       <div
        //         key={order._id}
        //         className="p-4 border border-gray-300 rounded-md  grid  sm:grid-cols-5"
        //       >
        //         <p>{order._id}</p>
        //         <p>{order.user.name}</p>
        //         <p>{order.deliveryAddress}</p>
        //         <p>{order.deliveryPhone}</p>

        //         <p>₹{order.total}</p>
        //       </div>
        //     ))}
        //   </div>
        // </div>

        <div>
          {displayedOrders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-lg shadow-lg p-6 mb-6"
            >
              {/* Order Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-xl font-semibold text-gray-900">
                    Order ID: {order._id}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Created at: {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>
                <span
                  className={`text-sm font-bold px-4 py-2 rounded-full ${
                    order.status === "pending"
                      ? "bg-yellow-200 text-yellow-700"
                      : "bg-green-200 text-green-700"
                  }`}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>

              {/* Customer Info */}
              <div className="border-b pb-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Customer Information
                </h3>
                <p className="text-gray-600">Name: {order.user.name}</p>
                <p className="text-gray-600">
                  Email:{" "}
                  <a
                    href={`mailto:${order.user.email}`}
                    className="text-blue-500"
                  >
                    {order.user.email}
                  </a>
                </p>
                <p className="text-gray-600">
                  Phone:{" "}
                  <a
                    href={`tel:${order.deliveryPhone}`}
                    className="text-blue-500"
                  >
                    {order.deliveryPhone}
                  </a>
                </p>
              </div>

              {/* Delivery Information */}
              <div className="border-b pb-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Delivery Information
                </h3>
                <p className="text-gray-600">
                  Address: {order.deliveryAddress}
                </p>
                <p className="text-gray-600">
                  Delivery Method: {order.deliveryMethod}
                </p>
              </div>

              {/* Items Ordered */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Items Ordered
                </h3>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div
                      key={item._id}
                      className="flex justify-between items-center border-b pb-4"
                    >
                      <div className="flex items-center">
                        <img
                          src={item.product.image} // assuming each product has an image
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded-lg mr-4"
                        />
                        <div>
                          <p className="text-gray-800 font-semibold">
                            {item.product.name}
                          </p>
                          <p className="text-gray-600">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-900 font-semibold">
                        {item.price} INR
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Information */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-800 font-semibold">
                    Payment Method: {order.paymentMethod}
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">
                    Total: {order.total} INR
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-4 flex items-center gap-1 font-bold">
          <VscOctoface className="text-2xl text-green-500" />
          No orders found!
        </div>
      )}
    </div>
  );
};

export default Orders;
