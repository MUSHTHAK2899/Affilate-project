import React,{ useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const NavBar2 = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 140) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <nav
      className={
        colorChange
          ? "bg-[#08ce] text-white scroll-smooth w-full  fixed top-0 z-[2]"
          : "  "
      }
      >
        <ul className="hidden font-semibold md:flex gap-8 lg:ml-16 p-5 text-[14px]">
          <li>HOME</li>
          <li className="flex items-center">
            CATEGORIES
            <IoIosArrowDown size={20} />
          </li>
          <li className="flex items-center">
            PRODUCTS
            <IoIosArrowDown size={20} />
          </li>
          <li className="flex items-center">
            PAGES
            <IoIosArrowDown size={20} />
          </li>
          <li className="flex items-center">
            FEATURES
            <IoIosArrowDown size={20} />
          </li>
          <li>BLOG</li>
          <li>ABOUT US</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar2;
