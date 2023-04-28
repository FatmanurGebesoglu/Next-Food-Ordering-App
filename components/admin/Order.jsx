import React, { useEffect } from "react";
import { Title } from "@/components/ui/Title";
import axios from "axios";
import { useState } from "react";

const Order = () => {

  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders`);
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getOrders();

  }, []);

  const handleStatus = async (id) => {
      const item = orders.find((order) => order.id === id);
      const currentStatus = item.status;
  };

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addclass="text-[40px]">Order</Title>
      <div className="overflow-x-auto w-full mt-5">
        <table className="w-full txt-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                PRODUCT
              </th>
              <th scope="col" className="py-3 px-6">
                CUSTOMER
              </th>
              <th scope="col" className="py-3 px-6">
                TOTAL
              </th>
              <th scope="col" className="py-3 px-6">
                PAYMENT
              </th>
              <th scope="col" className="py-3 px-6">
                STATUS
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all " key={order._id} >
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white  gap-x-1 justify-center">
                {order._id?.substring(0,5)}...
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                {order?.customer}
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                ${order?.total}
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                {order?.method === 0 ? "Cash" : "Credit Card"}
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <span>Preparing</span>
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="bg-success text-white px-4 py-2 rounded-md" onClick={()=>handleStatus(order?._id)}>
                  Next Stage{" "}
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
