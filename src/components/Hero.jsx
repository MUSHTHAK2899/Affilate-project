import React from "react";
import {GiLargeDress, GiFlowerPot,GiMusicalNotes } from "react-icons/gi";
import {BiChip } from "react-icons/bi";
import {FiGift } from "react-icons/fi";
import {MdOutlineSportsCricket } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import {slider}  from "./Data"
import Index from "../pages/Free Ship/Index";


const Hero = () => {
  return (
    <>
    <div className='md:flex justify-center xl:mr-16 p-5 gap-5 pb-5'>
    <div className="   md:w-[300px]">
    <div className='bg-gray-200 p-3 '>
                <th className=''>TOP CATEGORIES</th>
            </div>
        <div className='border p-5'>
            <div className='tr '>
                <GiLargeDress size={20}/>
            <td className='hover:translate-x-2 duration-300  '>Fasion</td>
            </div>
            <div className='tr'>
                <BiChip size={20}/>
                <td className='hover:translate-x-2 duration-300'>Electroics</td>
            </div>
            <div className='tr'>
                <FiGift size={20}/>
                <td className='hover:translate-x-2 duration-300'>Gifts</td>
            </div>
            <div className='tr'>
                <GiFlowerPot size={20}/>
                <td className='hover:translate-x-2 duration-300 '>Home & Garden</td>
            </div>
            <div className='tr'>
                <GiMusicalNotes size={20}/>
                <td className='hover:translate-x-2 duration-300'>Music</td>
            </div>
            <div className='tr'>
                <MdOutlineSportsCricket size={20}/>
                <td className='hover:translate-x-2 duration-300'>Sports</td>
            </div>
           <div className='flex justify-center mt-5 '>
           <button className='bg-black hover:text-white/80 text-white tracking-widest font-bold  whitespace-nowrap text-center px-11  py-2'>HUGE SALE-70% OFF</button>
           </div>
        </div>
    </div>
        <div className="md:w-[400px]  lg:w-[500px] xl:w-[800px] whitespace-nowrap mt-5 md:mt-0">
        <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      //  navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="w-[500px]">
        {slider.map((product, index) => {
      return (
        <SwiperSlide className='' key={index}>
          <div className='relative'>
            <img className=' h-[395px]' src={product.image} alt='' />
            <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
              {/* {product.title} */}
            </div>
            {/* <div className="">
            <button className="absolute top-[300px] bg-black px-5 py-2 rounded-sm  mr-44 text-white  right-44 text-[18px] lg:text-2xl  capitalize">{product.button}</button>
            </div> */}
          </div>
        </SwiperSlide>
      );
    })}
        </div>
      </Swiper>
        </div>
    </div>
    <Index/>
    </>
  )
}

export default Hero