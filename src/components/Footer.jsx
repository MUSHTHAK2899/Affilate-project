import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-[#121214] to-slate-800  max-w-full max-h-full] ">
        <h1 className="text-white bg-[#08c] w-32 text-center font-mono rounded-t-md -translate-y-4 ml-7 p-2">
          Get in touch
        </h1>
        <div className="p-7 text-white border-b border-gray-100/20 lg:flex lg:gap-[70px] xl:gap-38">
          <div className="xl:ml-20">
            <div>
              <h1 className="font-bold">CONTACT INFO</h1>
              <address className="mt-4 text-[14px]">
                <h1>ADDRESS:</h1>
                <p className="text-gray-100/50">
                  123 Street Name, City, England
                </p>
              </address>
            </div>
            <div className="mt-4 text-[14px]">
              <h1>PHONE:</h1>
              <p className="text-gray-100/50">(123) 456-7890</p>
            </div>
            <div className="mt-4 text-[14px]">
              <h1>EMAIL:</h1>
              <p className="text-gray-100/50">mail@example.com</p>
            </div>
            <div className="flex gap-4 mt-3">
              <div className="w-8 h-8 rounded-full border flex justify-center items-center">
                <FaFacebookF size={15} />
              </div>
              <div className="w-8 h-8 rounded-full border flex justify-center items-center">
                <ImLinkedin2 size={15} />
              </div>
              <div className="w-8 h-8 rounded-full border flex justify-center items-center">
                <AiOutlineInstagram size={15} />
              </div>
            </div>
          </div>

         <div>
         <div className="mt-5 lg:mt-0 border-b border-gray-600 pb-8 md:flex md:gap-8 xl:gap-15 md:items-center">
            <div>
            <h1 className="font-bold ">SUBSCRIBE NEWSLETTER</h1>
            <p className="mt-4 text-[14px] text-gray-100/50  md:max-w-[350px]">
              Get all the latest information on Events, Sales and Offers. Sign
              up for newsletter today.
            </p>
            </div>
            <div className="mt-5 ">
                <input type="email" className="p-2 rounded-l-full w-[160px] md:w-[200px] xl:w-[300px] bg-black outline-none  placeholder:pl-4" placeholder="Email Address" />
                <button className="bg-[#08c] px-3 md:px-4 py-2 rounded-r-full">SUBSCRIBE</button>
            </div>
          </div>

          <div className="md:flex md:gap-14 xl:gap-32">
           <div className="mt-4 md:flex md:items-center ">
           <div className="">
                <h1 className="font-bold ">CUSTOMER SERVICE</h1>
                <p className="th mt-1">About us</p>
                <p className="th">Contact us</p>
                <p className="th">My Account</p>
            </div>
            <div className="mt-4 md:mt-8">
                <p className="th">Order history</p>
                <p className="th">Advanced search</p>
                <p className="th">Login</p>
            </div>
           </div>

           <div className="md:flex md:gap-5">
           <div className="">
            <h1 className="font-bold mt-4">ABOUT US</h1>
            <p className="th">Super Fast Wordpress Theme</p>
            <p className="th">1st Fully working Ajax Theme</p>
            <p className="th"> 36 Unique Shop Layouts</p>
           </div>
           <div className="mt-3 md:mt-10">
            <p className="th">Powerful Admin Panel</p>
            <p className="th">Mobile & Retina Optimized</p>
           </div>
           </div>
          </div>
         </div>

        </div>
          <div className="p-5 th pb-4 md:flex md:justify-between ">
                    <h1 className="md:mt-3 xl:pl-[80px]">© Porto eCommerce. 2021. All Rights Reserved</h1>
                    <img className="mt-3 xl:pr-32" src="https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/footer/shop2_payment_logo.png" alt="" />
          </div>
      </div>
    </>
  );
};

export default Footer;
