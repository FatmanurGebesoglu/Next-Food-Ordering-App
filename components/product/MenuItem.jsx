import Image from "next/image";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const MenuItem = () => {
  return (
    <div className="bg-secondary rounded-3xl">
      <div className="w-full  bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
        <Link href="/product ">
          <div className="relative w-36 h-36 hover:scale-105 transition-all ">
            <Image src="/images/pizza.png" alt="" fill />
          </div>
        </Link>
      </div>
      <div className="p-[25px] text-white">
        <h4 className="text-xl font-semibold">Delicious Pizza</h4>
        <p className="text-[15px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus quia
          nam nisi aperiam omnis nesciunt suscipit doloribus nihil fuga ex
          debitis id, assumenda rem molestiae quos animi atque iusto maiores.
        </p>
        <div className="flex justify-between items-center mt-4 ">
          <span>$20</span>
          <button className="btn-primary !w-10 !h-10 !rounded-full !p-0 !grid !place-content-center">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
