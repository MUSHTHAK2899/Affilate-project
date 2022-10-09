import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
//import { BsHandbag } from "react-icons/bs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { clinet } from './Data';
// import required modules
import { Autoplay,Pagination } from "swiper";
const Clinet = () => {
  return (
    <>
    <div className='md:pl-44 md:pr-44 pl-20 pr-20 pb-10 mt-5'>
    <Swiper
            slidesPerView={1}
            spaceBetween={10}
           
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            grabCursor={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            modules={[Autoplay,Pagination]}
            className="mySwiper"
          >
            <div className="">
              {clinet.map((items) => (
                <div className="flex justify-center items-center">
                  <SwiperSlide>
                  <div>
                    <img className='w-[150px] h-24' src={items.image} alt="" />
                  </div>
                  </SwiperSlide>
                </div>
              ))}
            </div>
          </Swiper>
    </div>
    </>
  )
}

export default Clinet