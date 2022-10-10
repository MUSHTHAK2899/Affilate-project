import React, { useState } from "react";
import { AiOutlineInstagram, AiOutlineTwitter ,AiOutlineClose} from "react-icons/ai";
import { FaFacebookF  } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { BiMenuAltLeft, BiSearchAlt, BiUser } from "react-icons/bi";
import NavBar2 from "./NavBar2";
import Menu from "./Menu";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
    <div className={
              (navbarOpen ? " flex" : " hidden")
            }>
      <Menu/>
      </div>
      <nav className="bg-gradient-to-r from-cyan-500 to-blue-500 max-w-full h-[150px]">
        <div className="flex justify-between lg:justify-around lg:gap-28 p-4 md:p-5 ">
          <h1 className="text-white md:whitespace-nowrap text-[10px] md:text-[12px] flex items-center font-semibold">
            FREE RETURNS. STANDARD SHIPPING ORDERS $99+
          </h1>
          <div className="flex gap-4 text-white/50 ">
            <div className="hidden whitespace-nowrap lg:flex gap-5 items-center text-white/70 text-[13px]">
              <div>DEFAULT WELCOME MSG!</div>
              <div>Blog</div>
              <div>Sign In</div>
              <div>Contact Us</div>
              <div>Create an Account</div>
            </div>
            <div className="hidden md:flex md:items-center gap-5 ">
              <h1 className="md:flex lg:hidden items-center gap-2 text-[13px]">
                LINKS
                <span>
                  {" "}
                  <MdKeyboardArrowDown />{" "}
                </span>
              </h1>
              <span className="text-gray-200/30">|</span>
              <h1 className="flex items-center gap-2 text-[13px]">
                USD
                <span>
                  {" "}
                  <MdKeyboardArrowDown />{" "}
                </span>
              </h1>
            </div>
            <div className="flex gap-2 items-center text-gray-100/70">
              <span className="text-gray-200/30">|</span>
              <span className="hover:bg-blue-900/30 cursor-pointer w-7 h-7 rounded-full flex items-center justify-center">
                <FaFacebookF size={13} />
              </span>
              <span className="hover:bg-orange-900/50 cursor-pointer w-7 h-7 rounded-full flex items-center justify-center">
                {" "}
                <AiOutlineInstagram />
              </span>
              <span className="hover:bg-blue-500 cursor-pointer w-7 h-7 rounded-full flex items-center justify-center">
                <AiOutlineTwitter size={18} />
              </span>
            </div>
          </div>
        </div>
        <div className="border-b w-full border-gray-200/30"></div>

        <div className="p-5 flex justify-between lg:justify-around items-center">
          <div className="flex items-center gap-2">
         <div onClick={() => setNavbarOpen(!navbarOpen)} className="text-white flex md:hidden">
      {   navbarOpen?<AiOutlineClose  size={30} />:  <BiMenuAltLeft   size={30}  />}
         </div>
            <h1 className="font-bold text-white text-xl font-serif italic">
              eCommerCe
            </h1>
          </div>
          <div className="hidden md:flex gap-10 items-center">
            <div className="flex md:w-[300px] lg:w-[500px] h-5  items-center">
              <div className="relative flex items-center w-full h-12 rounded-full focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                  <BiSearchAlt size={25} className=" text-gray-600 " />
                </div>
                <input
                  type="text"
                  className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 "
                  placeholder="Search...."
                />
              </div>
            </div>
            <div className="flex items-center text-white/80 gap-2">
              <HiOutlinePhoneMissedCall size={40} />
              <div className="flex flex-col text-[13px]" >
                <span className="font-bold text-[15px] text-slate-200">CALL US NOW</span>
                +918086966621
              </div>
            </div>
          </div>

          <div className="flex gap-7 text-white/80">
            <BiSearchAlt className="flex md:hidden" size={25} />
            <BiUser size={25} />
            <span>
              <BsHandbag size={25} />
              <h1 className="bg-red-500 absolute top-[98px] ml-3 h-4 w-4 text-[11px] flex justify-center items-center rounded-full">
                0
              </h1>
            </span>
          </div>
        </div>
      </nav>
      <NavBar2/>
    </>
  );
};

export default NavBar;
