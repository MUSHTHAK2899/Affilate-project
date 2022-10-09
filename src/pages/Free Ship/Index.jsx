import React from "react";
import { GrDeliver } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Index = () => {
  return (
    <>
      <section className="p-5  pb-10 xl:pl-20 xl:pr-36">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-5 p-5 border items-">
          <div className="flex items-center border-b lg:justify-center md:border-b-transparent md:border-r gap-5 pb-4 pt-4 ">
            <GrDeliver size={40}/>
            <div className="">
              <h1 className="font-bold tracking-widest  lg:tracking-wide lg:text-[16px] md:tracking-normal md:text-[13px] whitespace-nowrap">FREE SHIPPING & RETURN</h1>
              <p className="text-[13px] text-black/60">Free shipping on all orders over $99.</p>
            </div>
          </div>
          <div className="flex items-center lg:justify-center md:border-b-transparent md:border-r gap-5 pb-4 pt-4">
            <AiOutlineDollar size={40}/>
            <div className="">
              <h1 className="font-bold tracking-widest lg:tracking-wide lg:text-[16px]  md:tracking-normal md:text-[13px] whitespace-nowrap">MONEY BACK GUARANTEE</h1>
              <p className="text-[13px] text-black/60">100% money back guarantee</p>
            </div>
          </div>
          <div className="flex items-center lg:justify-center gap-5  pt-4 pb-4">
            <FiPhoneCall size={40}/>
            <div className="">
              <h1 className="font-bold tracking-widest  lg:tracking-wide lg:text-[16px]  md:tracking-normal md:text-[13px] whitespace-nowrap">ONLINE SUPPORT 24/7</h1>
              <p className="text-[13px] text-black/60">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        
        </div>
      </section>
    </>
  );
};

export default Index;
