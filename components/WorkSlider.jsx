import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import styles from "./work.module.scss"; // Import the styles

const WorkSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (projects.length / 4)); // Move to the next set of projects
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  const handlePaginationClick = (index) => {
    setCurrentIndex(index);
  };

  const slides = [];
  for (let i = 0; i < projects.length; i += 4) {
    slides.push(projects.slice(i, i + 4));
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slides} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            {slide.map((project) => (
              <div key={project.id} className={styles["project-card"]}>
                <div className={styles["image-container"]}>
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="transition-opacity duration-300 hover:opacity-80"
                  />
                </div>
                <div className={`${styles.overlay} opacity-0 hover:opacity-100 transition-opacity duration-300`}>
                  <span className="text-[#00C2FF] text-lg">Live Project</span>
                  <Link href={project.link}>
                    <BsArrowRight className="text-white text-2xl mt-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkSlider;
