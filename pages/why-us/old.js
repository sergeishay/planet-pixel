import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "/components/ui/hover-card";
import { fadeIn } from "../../variants";
import styles from "./WhyUs.module.css"; // Import custom CSS

const icons = [
  { src: "/alien.svg", alt: "Alien", style: styles.icon1 },
  { src: "/planet.svg", alt: "Planet", style: styles.icon2 },
  { src: "/moon.svg", alt: "Moon", style: styles.icon3 },
  { src: "/rocket.svg", alt: "Rocket", style: styles.icon4 },
  { src: "/stars.svg", alt: "Stars", style: styles.icon5 },
];

const WhyUs = () => {
  return (
    <div
      className="relative h-screen flex flex-col items-center
     bg-whyBackground bg-cover justify-center overflow-hidden"
    >
      <motion.h1
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="absolute top-10 text-[30px] xl:text-[3.2vw] leading-tight font-medium z-10"
      >
        Why <span className="text-myblue">Us</span>
      </motion.h1>

      <div className="relative w-full h-full flex items-end justify-start">
        <div className={styles.iconContainer}>
          {icons.map((icon, index) => (
            <HoverCard key={index} className={`absolute ${icon.style}`}>
              <HoverCardTrigger>
                <Image src={icon.src} alt={icon.alt} width={60} height={60} />
              </HoverCardTrigger>
              <HoverCardContent>
                <p>Content for {icon.alt}</p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

{
  /* <motion.div className="relative w-1/2 h-1/2 md:w-1/3 md:h-1/3 lg:w-1/4 lg:h-1/4" >

<Image src="/new-glob.png" fill className="rotate2" alt="globe" />
</motion.div> */
}

const modals = () => {
  <div className="w-full h-full flex items-end justify-start">
    <HoverCard className="absolute top-1/4 left-1/4">
      <HoverCardTrigger>
        <Image src="/alien.svg" alt="Alien" width={60} height={60} />
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-black">Content for Alien</p>
      </HoverCardContent>
    </HoverCard>

    <HoverCard className="absolute top-1/4 left-1/3">
      <HoverCardTrigger>
        <Image src="/planet.svg" alt="Planet" width={60} height={60} />
      </HoverCardTrigger>
      <HoverCardContent>
        <p>Content for Planet</p>
      </HoverCardContent>
    </HoverCard>

    <HoverCard className="absolute top-1/2 left-1/4">
      <HoverCardTrigger>
        <Image src="/moon.svg" alt="Moon" width={60} height={60} />
      </HoverCardTrigger>
      <HoverCardContent>
        <p>Content for Moon</p>
      </HoverCardContent>
    </HoverCard>

    <HoverCard className="absolute top-3/4 left-1/3">
      <HoverCardTrigger>
        <Image src="/rocket.svg" alt="Rocket" width={60} height={60} />
      </HoverCardTrigger>
      <HoverCardContent>
        <p>Content for Rocket</p>
      </HoverCardContent>
    </HoverCard>

    <HoverCard className="absolute top-3/4 left-1/4">
      <HoverCardTrigger>
        <Image src="/stars.svg" alt="Stars" width={60} height={60} />
      </HoverCardTrigger>
      <HoverCardContent>
        <p>Content for Stars</p>
      </HoverCardContent>
    </HoverCard>
  </div>;
};
