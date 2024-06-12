import React, { useState } from "react";
import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import styles from "./work.module.scss";


const WorkSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <ul style={{ marginBottom: "-10px", display: "flex", justifyContent: "center", zIndex: "20" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: i === currentIndex ? "#717171" : "#bbb",
          borderRadius: "50%",
          display: "inline-block",
          margin: "10px 5px",
        }}
      ></div>
    )
  };

  return (
    <div className={styles.sliderWorkContainer}>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className='relative w-full h-full rounded-[10px]'>
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-opacity duration-300
                 hover:opacity-80 rounded-[10px]"
              />
            </div>
            <div className={`${styles.overlay} opacity-0 hover:opacity-100 transition-opacity duration-300`}>
              <span className="text-[#00C2FF] text-lg">Live Project</span>
              <Link href={`/work/${project.title}`}>
                <BsArrowRight className="text-white text-2xl mt-2" />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WorkSlider;
