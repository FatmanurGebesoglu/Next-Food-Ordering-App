import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Title } from "../ui/Title";
import { GiCancel } from "react-icons/gi";
import { useState } from "react";

const AddProduct = ({ setIsProductModal }) => {
  const [file, setFile] = useState();
  const [imageSrc, setImageSrc] = useState();

  const handleOnChange = (changeEvent) => {
    const reader = new FileReader();
    reader.onload = (onLoadEvent) => {
      setImageSrc(onLoadEvent.target.result);
      setFile(changeEvent.target.files[0]);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
    console.log(imageSrc);
  };

  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-50 after:content-[""] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-70 first-of-type:h-screen grid place-content-center'>
      <OutsideClickHandler onOutsideClick={() => setIsProductModal(false)}>
        <div className="w-full h-full grid place-content-center relative ">
          <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl  ">
            <Title addclass="text-[40px] text-center">Add a New Product</Title>

            <div className="flex flex-col text-sm mt-8">
              <span className="font-semibold mb-2">Choose an image</span>
              <label className="flex gap-2 items-center">
                <input type="file" onChange={(e) => handleOnChange(e)} className="hidden" />
                <button className="btn-primary !rounded-none !bg-blue-600 pointer-events-none ">Choose an Image</button>
                {imageSrc && 
                   <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imageSrc} alt="" className="w-12 h-12 rounded-full" />
                   </div>
                }
              </label>
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Title</span>
              <input
                className="border-2 p-1 text-sm px-2 outline-none"
                type="text"
                placeholder="Write a title..."
              />
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Description</span>
              <textarea
                className="border-2 p-1 text-sm px-2 outline-none"
                placeholder="Write a description..."
              />
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Select Category</span>
              <select
                className="border-2 p-1 text-sm px-2 outline-none"
                placeholder="Write a description..."
              >
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
                <option value="4">Category 4</option>
              </select>
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Prices</span>
              <div className="flex justify-betweens gap-6 md:flex-nowrap flex-wrap">
                <input
                  className="border-b-2 p-1 pl-1 text-sm px-2 outline-none w-36"
                  type="number"
                  placeholder="Small"
                />
                <input
                  className="border-b-2 p-1 pl-1 text-sm px-2 outline-none w-36"
                  type="number"
                  placeholder="Medium"
                />
                <input
                  className="border-b-2 p-1 pl-1 text-sm px-2 outline-none w-36"
                  type="number"
                  placeholder="Large"
                />
              </div>
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Extra</span>
              <div className="flex  gap-6 md:flex-nowrap flex-wrap">
                <input
                  className="border-b-2 p-1 pl-1 text-sm px-2 outline-none w-36"
                  type="text"
                  placeholder="Item"
                />
                <input
                  className="border-b-2 p-1 pl-1 text-sm px-2 outline-none w-36"
                  type="number"
                  placeholder="Price"
                />
                <button className="btn-primary ml-auto"> Add</button>
              </div>
              <div className="mt-2">
                <span className="inline-block border border-orange-500 text-orange-500 p-1 rounded-xl text-xs">
                  Ketçap
                </span>
              </div>
            </div>

            <div className=" flex justify-end">
              <button className="btn-primary !bg-success ml-auto">
                {" "}
                Create{" "}
              </button>
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
