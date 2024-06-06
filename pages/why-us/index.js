import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "/components/ui/hover-card";
import { fadeIn } from "../../variants";

const WhyUs = () => {
  // Animation variants for the icons
  const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

  const iconVariants = {
    float: (custom) => ({
      y: [0, -10, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: getRandomNumber(2, 6),
          ease: "easeInOut",
          delay: getRandomNumber(0, 2),
        },
      },
    }),
  };

  return (
    <div
      className="relative h-screen flex flex-col items-center
      bg-whyBackgroundMobile bg-center xl:bg-top xl:bg-whyBackground bg-cover xl:justify-center overflow-hidden"
    >
      <motion.h1
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="absolute pt-[22vh] xl:pt-[0vh] text-[30px] xl:text-[3.2vw]
         leading-tight font-medium z-10"
      >
        Why <span className="text-myblue">Us</span>
      </motion.h1>

      <div className="w-full h-full flex items-end justify-start">
        <div className="absolute top-[40%] left-[2%] xl:top-[41%] xl:left-[1%]">
          <HoverCard>
            <HoverCardTrigger asChild>
              <motion.div variants={iconVariants} animate="float">
                <Image src="/alien.svg" alt="Alien" width={60} height={60} />
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent
              side="top"
              align="center"
              avoidCollisions
              className="bg-white/40 w-[400px] border-0 px-5 py-5 justify-center items-center text-center"
            >
              <h1 className="text-lightBlue text-[22px] font-bold uppercase">Content for Alien</h1>
              <p className="text-white text-[14px] leading-tight">Our 5/5 rating on Google and 5/5 in our Facebook reviews say it all. We work hard for the satisfaction of our customers, so we also support accordingly.</p>
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="absolute top-[37%] left-[21%] xl:top-[35%] xl:left-[12%]">
          <HoverCard>
            <HoverCardTrigger asChild>
              <motion.div variants={iconVariants} animate="float">
                <Image src="/planet.svg" alt="Planet" width={60} height={60} />
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent
              side="right"
              align="center"
              avoidCollisions
              className="bg-white/40 w-[400px] border-0 px-5 py-5 justify-center items-center text-center"
            >
              <h1 className="text-lightBlue text-[22px] font-bold">Content for Planet</h1>
              <p className="text-white text-[14px] leading-tight">Our 5/5 rating on Google and 5/5 in our Facebook reviews say it all. We work hard for the satisfaction of our customers, so we also support accordingly.</p>
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="absolute top-[36%] left-[42%] xl:top-[41%] xl:left-1/4">
          <HoverCard>
            <HoverCardTrigger asChild>
              <motion.div variants={iconVariants} animate="float">
                <Image src="/moon.svg" alt="Moon" width={60} height={60} />
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent
              side="right"
              align="center"
              avoidCollisions
              className="bg-white/40 w-[400px] border-0 px-5 py-5 justify-center items-center text-center"
            >
              <h1 className="text-lightBlue text-[22px] font-bold">Content for Moon</h1>
              <p className="text-white text-[14px] leading-tight">Our 5/5 rating on Google and 5/5 in our Facebook reviews say it all. We work hard for the satisfaction of our customers, so we also support accordingly.</p>
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="absolute top-[37%] left-[62%]  xl:top-[59%] xl:left-[35%]">
          <HoverCard>
            <HoverCardTrigger asChild>
              <motion.div variants={iconVariants} animate="float">
                <Image src="/rocket.svg" alt="Rocket" width={60} height={60} />
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent
              side="right"
              align="center"
              avoidCollisions
              className="bg-white/40 w-[400px] border-0 px-5 py-5 justify-center items-center text-center hover-card-conten"
            >
              <h1 className="text-lightBlue text-[22px] font-bold">Content for Rocket</h1>
              <p className="text-white text-[14px] leading-tight">Our 5/5 rating on Google and 5/5 in our Facebook reviews say it all. We work hard for the satisfaction of our customers, so we also support accordingly.</p>
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="absolute top-[40%] left-[82%]  xl:top-[85%]  xl:left-[38%]">
          <HoverCard>
            <HoverCardTrigger asChild>
              <motion.div variants={iconVariants} animate="float">
                <Image src="/stars.svg" alt="Stars" width={60} height={60} />
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent
              side="right"
              align="center"
              avoidCollisions
              className="bg-white/40 w-[400px] border-0 px-5 py-5 justify-center items-center text-center"
            >
              <h1 className="text-lightBlue text-[22px] font-bold">Content for Stars</h1>
              <p className="text-white text-[14px] leading-tight">Our 5/5 rating on Google and 5/5 in our Facebook reviews say it all. We work hard for the satisfaction of our customers, so we also support accordingly.</p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
