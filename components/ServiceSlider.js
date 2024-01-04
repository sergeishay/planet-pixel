// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
import { FreeMode, Pagination } from "swiper";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import 'swiper/css/navigation';
// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
    grabCursor={true}
    loop={true}

      breakpoints={{
        
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        // 768: {
        //   slidesPerView: 3,
        //   spaceBetween: 40,
        // },
        // 1024: {
        //   slidesPerView: 4,
        //   spaceBetween: 50,
        // },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className={`w-[350px] md:w-[1000px] h-[100%] justify-center items-center flex`}
    >
      {serviceData.map((item, index) => {
          return(
            <SwiperSlide key={index} className="w-full h-full justify-center items-center" >
              
              <div className="bg-blend-screen bg-white/10 h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer pt-[5vw] flex-col items-center justify-center text-center " >  
                <div>{item.icon}</div>
                <div>
                  <div>{item.title}</div>
                  <p>{item.description}</p>
                  <p>{item.description}</p>
                  <p>{item.description}</p>
                </div>
                <div className="text-3xl" >
                  <RxArrowTopRight />
                </div>
              </div>
            </SwiperSlide>
          )
      })}
    </Swiper>
  );
};

export default ServiceSlider;
