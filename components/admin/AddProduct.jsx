import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Title } from "../ui/Title";
import { GiCancel } from "react-icons/gi";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = ({ setIsProductModal }) => {
  const [file, setFile] = useState();
  const [imageSrc, setImageSrc] = useState();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [prices, setPrices] = useState([]);
  const [extra, setExtra] = useState("");
  const [extraOptions, setExtraOptions] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }   
    };
    getProducts();
  }, [])
  

  console.log(categories);

  const handleExtra = (e) => {
    if (extra) {
      if (extra.text && extra.price) {
        setExtraOptions((prev) => [...prev, extra]);
        setExtra("");
      }
    }
  };

  const handleOnChange = (changeEvent) => {
    const reader = new FileReader();
    reader.onload = (onLoadEvent) => {
      setImageSrc(onLoadEvent.target.result);
      setFile(changeEvent.target.files[0]);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "food-ordering");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dohmira9a/image/upload",
        data
      );

      const { url } = uploadRes.data;
      const newProduct = {
        img: url,
        title,
        desc,
        category: category.toLowerCase(),
        prices,
        extraOptions,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/products`,
        newProduct
      );

      if (res.status === 200) {
        setIsProductModal(false);
        toast.success("Product created successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  }

  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-50 after:content-[""] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-70 first-of-type:h-screen grid place-content-center'>
      <OutsideClickHandler onOutsideClick={() => setIsProductModal(false)}>
        <div className="w-full h-full grid place-content-center relative ">
          <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl  ">
            <Title addclass="text-[40px] text-center">Add a New Product</Title>

            <div className="flex flex-col text-sm mt-8">
              <span className="font-semibold mb-2">Choose an image</span>
              <label className="flex gap-2 items-center">
                <input
                  type="file"
                  onChange={handleOnChange}
                  className="hidden"
                />
                <button className="btn-primary !rounded-none !bg-blue-600 pointer-events-none ">
                  Choose an Image
                </button>
                {imageSrc && (
                  <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageSrc}
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                )}
              </label>
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Title</span>
              <input
                className="border-2 p-1 text-sm px-2 outline-none"
                type="text"
                placeholder="Write a title..."
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Description</span>
              <textarea
                className="border-2 p-1 text-sm px-2 outline-none"
                placeholder="Write a description..."
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Select Category</span>
              <select
                className="border-2 p-1 text-sm px-2 outline-none"
                placeholder="Write a description..."
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.length > 0 && categories.map((category) => (
                  <option value={category.title.toLowerCase()} key={category._id}>{category.title} </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Prices</span>
              {category === "pizza" ? (
                <div className="flex justify-between gap-6 w-full md:flex-nowrap flex-wrap">
                  <input
                    type="number"
                    className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                    placeholder="small"
                    onChange={(e) => changePrice(e, 0)}
                  />
                  <input
                    type="number"
                    className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                    placeholder="medium"
                    onChange={(e) => changePrice(e, 1)}
                  />
                  <input
                    type="number"
                    className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                    placeholder="large"
                    onChange={(e) => changePrice(e, 2)}
                  />
                </div>
              ) : (
                <div className="flex justify-between gap-6 w-full md:flex-nowrap flex-wrap">
                  <input
                    type="number"
                    className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                    placeholder="small"
                    onChange={(e) => changePrice(e, 0)}
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Extra</span>
              <div className="flex  gap-6 md:flex-nowrap flex-wrap">
                <input
                  className="border-b-2 p-1 pl-1 text-sm px-2 outline-none w-36"
                  type="text"
                  placeholder="Item"
                  name="text"
                  onChange={(e) =>
                    setExtra({ ...extra, [e.target.name]: e.target.value })
                  }
                />
                <input
                  className="border-b-2 p-1 pl-1 text-sm px-2 outline-none w-36"
                  type="number"
                  placeholder="Price"
                  name="price"
                  onChange={(e) =>
                    setExtra({ ...extra, [e.target.name]: e.target.value })
                  }
                />
                <button className="btn-primary ml-auto" onClick={handleExtra}>
                  {" "}
                  Add
                </button>
              </div>
              <div className="mt-2 flex gap-2">
                {extraOptions.map((item, index) => (
                  <span
                    className="inline-block border border-orange-500 text-orange-500 p-1 rounded-xl text-xs cursor-pointer"
                    key={index}
                    onClick={() => {
                      setExtraOptions(
                        extraOptions.filter((item, i) => i !== index)
                      );
                    }}
                  >
                    {item.text}
                  </span>
                ))}
              </div>
            </div>

            <div className=" flex justify-end">
              <button
                className="btn-primary !bg-success ml-auto"
                onClick={handleCreate}
              >
                Create
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
