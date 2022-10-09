import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsHandbag } from "react-icons/bs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { feature } from "../../components/Data";
// import required modules
import { Pagination } from "swiper";
const Feature = () => {
  return (
    <>
      <div className="p-5 md:p-14 ">
        <h1 className="border-b-2 p-4 text-xl font-semibold md:font-bold tracking-wide ">
          FEATURED PRODUCTS
        </h1>
        <div className="mt-10 ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            // pagination={{
            //   clickable: true,
            // }}
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
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className="">
              {feature.map((items,index) => (
                <div className="" key={index}>
                  <SwiperSlide>
                    <div className="group">
                      <div className="group-hover:shadow-xl">
                        <img className="" src={items.image} alt="" />
                        <div className="absolute top-3 group-hover:shadow-xl  right-3 text-transparent cursor-pointer group-hover:text-black group-hover:bg-white rounded-full w-9 h-9 flex items-center justify-center group-hover:-translate-x-2 duration-300">
                          {" "}
                          <BsHandbag size={20} />
                        </div>
                        <button className="group-hover:bg-[#08c] cursor-pointer text-transparent tracking-wider xl:group-hover:shadow-md group-hover:text-white group-hover:font-semibold group-hover:translate-y-1 absolute hidden xl:flex group-hover:duration-500  xl:top-[233px] xl:px-[88px] py-2">
                          QUICKVIEW
                        </button>
                      </div>
                      <div className="flex justify-between mt-5">
                        <h1>{items.title}</h1>
                        <span>{items.icon}</span>
                      </div>
                      <p>{items.Price}</p>
                      <button className="flex xl:hidden bg-[#08c] group-hover:bg-sky-500 text-white tracking-wider duration-300 group-hover:translate-x-5 font-semibold cursor-pointer px-10 py-2">
                          QUICKVIEW
                        </button>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Feature;
