import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const { allCategories, data } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const baseUrl = import.meta.env.VITE_APP_API_URL;

  const { ref: productsRef, inView: productsInView } = useInView();
  const { ref: categoriesRef, inView: categoriesInView } = useInView();
  const { ref: usersRef, inView: usersInView } = useInView();
  const { ref: ordersRef, inView: ordersInView } = useInView();

  const { data: ordersData } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}/api/checkouts/orders`);
      return response.data;
    },
  });

  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}/api/auth/users`);
      return response.data;
    },
  });

  // Example data for the chart (you can replace this with actual data)
  const chartData =
    ordersData?.map((order) => ({
      date: new Date(order.createdAt).toLocaleDateString(),
      orders: order.count, // Adjust this if your API data structure is different
    })) || [];

  return (
    <div className="dashboard">
      <div className="p-4 text-xl flex items-center flex-wrap gap-2">
        Hi {user?.name}, Welcome to the{" "}
        <img src="./himkalp_logo.png" alt="" className="h-8" />
        Dashboard
      </div>
      <hr />
      <div className="p-4 text-xl text-gray-500 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div
          className="bg-green-200 h-[200px] flex items-center justify-center rounded-md text-green-800"
          ref={productsRef}
        >
          {productsInView && (
            <CountUp start={0} end={data?.products?.length || 0} duration={6} />
          )}{" "}
          <p className="ml-2"> Products</p>
        </div>
        <div
          className="bg-teal-200 h-[200px] flex items-center justify-center rounded-md text-teal-800"
          ref={categoriesRef}
        >
          {categoriesInView && (
            <CountUp
              start={0}
              end={allCategories?.categories?.length || 0}
              duration={6}
            />
          )}
          {"  "}

          <p className="ml-2"> Categories</p>
        </div>
        <div
          className="bg-pink-200 h-[200px] flex items-center justify-center rounded-md text-pink-800"
          ref={usersRef}
        >
          {usersInView && (
            <CountUp start={0} end={users?.users?.length || 0} duration={6} />
          )}{" "}
          <p className="ml-2"> Users</p>
        </div>
        <div
          className="bg-indigo-200 h-[200px] flex items-center justify-center rounded-md text-indigo-800"
          ref={ordersRef}
        >
          {ordersInView && (
            <CountUp start={0} end={ordersData?.length || 0} duration={6} />
          )}{" "}
          <p className="ml-2"> Orders</p>
        </div>
      </div>

      {/* Chart Section */}
      {/* <div className="mt-10 p-4">
        <h2 className="text-xl font-semibold">Orders Over Time</h2>
        <div className=" mt-4 ml-[-40px] z-0">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
