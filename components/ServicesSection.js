import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "lenis";
import styles from "./services.module.scss"; // Assuming you have some custom CSS

const ServicesSection = () => {
  const [isClient, setIsClient] = useState(false);
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);
  const thirdLineRef = useRef(null);
  const fourthLineRef = useRef(null);
  const fifthLineRef = useRef(null);
  const sixthLineRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -20 * t)),
    });

    let offset = 0;
    const baseSpeed = 0.001; // Adjust this value to change the base speed (continuous movement)
    const speed = 0.002; // Adjust this value to change the additional speed on scroll

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);

      offset += baseSpeed + window.scrollY * speed;
      if (firstLineRef.current && secondLineRef.current && thirdLineRef.current && fourthLineRef.current && fifthLineRef.current && sixthLineRef.current) {
        firstLineRef.current.style.transform = `translateX(${offset % window.innerWidth}px)`;
        secondLineRef.current.style.transform = `translateX(${-offset % window.innerWidth}px)`;
        thirdLineRef.current.style.transform = `translateX(${offset % window.innerWidth}px)`;
        fourthLineRef.current.style.transform = `translateX(${-offset % window.innerWidth}px)`;
        fifthLineRef.current.style.transform = `translateX(${offset % window.innerWidth}px)`;
        sixthLineRef.current.style.transform = `translateX(${-offset % window.innerWidth}px)`;
      }
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isClient]);

  return (
    <div className="relative flex justify-center items-center font-pirulen overflow-hidden h-[800px] bg-servicebackground bg-cover">
      {isClient && (
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            <div ref={firstLineRef} className="flex whitespace-nowrap">
              <span className="mr-4 flex items-center">
                {" "}BRANDING{" "}
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                {" "}WEB DESIGN{" "}
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                {" "}ECOMMERCE{" "}
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                {" "}MARKETING{" "}
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                {" "}DEVELOPMENT{" "}
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                {" "}SOCIAL{" "}
              </span>
            </div>
            <div ref={secondLineRef} className="flex whitespace-nowrap">
              <span className="mr-4 flex items-center">
                ECOMMERCE
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                MARKETING
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                SOCIAL
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                BRANDING
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                WEB DESIGN
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                DEVELOPMENT
              </span>
            </div>
            <div ref={thirdLineRef} className="flex whitespace-nowrap">
              <span className="mr-4 flex items-center">
                SOCIAL
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                DEVELOPMENT
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                MARKETING
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                BRANDING
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                ECOMMERCE
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                WEB DESIGN
              </span>
            </div>
            <div ref={fourthLineRef} className="flex whitespace-nowrap md:hidden">
              <span className="mr-4 flex items-center">
                DEVELOPMENT
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                BRANDING
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                SOCIAL
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                MARKETING
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                WEB DESIGN
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                ECOMMERCE
              </span>
            </div>
            <div ref={fifthLineRef} className="flex whitespace-nowrap md:hidden">
              <span className="mr-4 flex items-center">
                MARKETING
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                ECOMMERCE
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                WEB DESIGN
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                SOCIAL
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                DEVELOPMENT
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                BRANDING
              </span>
            </div>
            <div ref={sixthLineRef} className="flex whitespace-nowrap md:hidden">
              <span className="mr-4 flex items-center">
                WEB DESIGN
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                SOCIAL
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                DEVELOPMENT
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                ECOMMERCE
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                BRANDING
                <Image src="/Star.svg" alt="star" width={35} height={25} className="mx-5" />
                MARKETING
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;
