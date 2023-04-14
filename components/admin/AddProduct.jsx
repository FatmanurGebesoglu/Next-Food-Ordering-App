import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Title } from "../ui/Title";
import Image from "next/image";
import { GiCancel } from "react-icons/gi";

const AddProduct = ({ setIsProductModal }) => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-50 after:content-[""] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-70 first-of-type:h-screen grid place-content-center'>
      <OutsideClickHandler onOutsideClick={() => setIsProductModal(false)}>
        <div className="w-full h-full grid place-content-center relative ">
          <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl  ">
            <Title addclass="text-[40px] text-center">Add a New Product</Title>

            <button
              className="absolute top-2 right-4"
              onClick={() => setIsProductModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default AddProduct;
