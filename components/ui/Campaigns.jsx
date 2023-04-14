import Title from "../ui/Title"
import  {HiShoppingCart}  from "react-icons/hi";
import React from 'react'




import Image from 'next/image';


const CampaignItem = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
      <div className="relative md:w-44 md:h-44 w-36 h-36 border-[5px] border-primary rounded-full overflow-hidden">
        <Image
          src="/images/indirim.png"
          alt=""
          className="hover:scale-105 transition-all"
          cover= "true"
          fill= "true"
          priority= "true"
        />
      </div>
      <div className="text-white">
        
        <h2 className="text-2xl font-dancing">Tasty Thursdays</h2>
        <div className="font-dancing my-1">
          <span className="text-[40px]">20%</span>
          <span className="text-sm inline-block ml-1">Off</span>
        </div>
        <button className="btn-primary flex items-center gap-x-2">
          Order Now <HiShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};


const Campaigns = () => {

  return (
    
    <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
       <CampaignItem/>
       <CampaignItem/>
       
    </div>
  );
};

export default Campaigns;