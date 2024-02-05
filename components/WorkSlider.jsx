// data
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination } from "swiper";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "swiper/css/navigation";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
const workSlides = {
  slides: [
    {
      images: [
        {
          id: "aleftaf",
          title: "Aleftaf",
          imgUrl: "/aleftaf.webp",
        },
        {
          id: "cotton-club",
          title: "Cotton-Club",
          imgUrl: "/cotton-club.webp",
        },
      ],
    },
    {
      images: [
        {
          id: "haison",
          title: "Haison",
          imgUrl: "/haison.webp",
        },
        {
          id: "unicorn",
          title: "Unicorn",
          imgUrl: "/Unicorn.webp",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
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
      modules={[Pagination]}
      className={`w-[350px] md:w-[560px] h-[100%] justify-center items-center flex`}
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide
            key={index}
            className="w-full h-full justify-center items-center"
          >
            <div
              className=" "
            >
              {slide.images.map((image, index) => {
                return (
                  <div key={index} className="w-[250] h-[250px]">
                    <Image
                      src={image.imgUrl}
                      alt={image.title}
                      width={400}
                      height={250}
                    />
                    <div>
                      <div>{slide.images.title}</div>
                      <p>{slide.images.imgUrl}</p>
                    </div>
                    <p className="text-orange-700">{image.title}</p>
                    <div className="text-3xl">
                      <Link href={`/work/${image.id}`}>
                        <BsArrowRight />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
