import React from "react";
import { Title } from "@/components/ui/Title";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Product = () => {
  const [products, setProducts] = useState([]);

  const handleDelete = async (id) => {
    try {
      if (confirm("Are you sure to delete this product?")) {
        const res = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
        );
        if (res.status === 200) {
          toast.success("Product deleted successfully");
          getProducts();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/products`
      );
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addclass="text-[40px]">Products</Title>
      <div className="overflow-auto max-h-[400px] w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 xl:min-w-[1000px] ">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                IMAGE
              </th>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                TITLE
              </th>
              <th scope="col" className="py-3 px-6">
                PRICE
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 &&
              products.map((product) => (
                <tr
                  className="bg-secondary border-gray-700 hover:bg-primary transition-all "
                  key={product._id}
                >
                  <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                    <Image
                      src={product.img}
                      alt={product.title}
                      width={50}
                      height={50}
                    />
                  </td>
                  <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    <span>{product._id.substring(0, 5)}...</span>
                  </td>
                  <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    <span>{product.title}</span>
                  </td>
                  <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    ${product.prices[0]}
                  </td>
                  <td className=" py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    <button
                      className="bg-danger text-white px-4 py-2 rounded-md"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete{" "}
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

export default Product;
