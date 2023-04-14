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
            
            <div className="flex flex-col text-sm mt-8">
              <span className="font-semibold mb-2">Choose an image</span>
              <input type="file" />
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Title</span>
              <input className="border-2 p-1 text-sm px-2 outline-none" type="text" placeholder="Write a title..." />
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Description</span>
              <textarea className="border-2 p-1 text-sm px-2 outline-none"  placeholder="Write a description..." />
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Select Category</span>
              <select className="border-2 p-1 text-sm px-2 outline-none"  placeholder="Write a description..." > 
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
              <option value="4">Category 4</option>
              </select>
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Prices</span>
              <div className="flex justify-betweens gap-6 md:flex-nowrap flex-wrap">
              <input className="border-b-2 p-1 pl-1 text-sm px-2 outline-none w-36" type="number" placeholder="Small" />
              <input className="border-b-2 p-1 pl-1 text-sm px-2 outline-none w-36" type="number" placeholder="Medium" />
              <input className="border-b-2 p-1 pl-1 text-sm px-2 outline-none w-36" type="number" placeholder="Large" />
              </div>
            </div>

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
