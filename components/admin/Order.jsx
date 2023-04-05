import React from "react";
import { Title } from "@/components/ui/Title";

const Order = () => {
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
            <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all ">
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white  gap-x-1 justify-center">
                <span>343543542</span>
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <span>John Doe</span>
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $20
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <span>Paypal</span>
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <span>Preparing</span>
              </td>
              <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="bg-success text-white px-4 py-2 rounded-md">
                  Next Stage{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
