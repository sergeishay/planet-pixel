import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ProjectsBtn from "./ProjectsBtn";

const AboutSection = () => {
  return (
    <div className='justify-center  align-middle items-center w-full pt-[15vh] pb-[12vh]'>
        <div className="w-full  text-center z-10 flex flex-col align-center
         gap-4 m-0 p-0 justify-center xl:justify-center xl:pt-30
         xl:px-[7vw] xl:text-center h-full px-2">
          <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            exit="hidden"
            className=" text-[30px] xl:text-[3.6vw] px-4 leading-tight z-5 font-medium"
          >
            {/* <span className={`font-montserrat font-medium`}>T</span> */}
            How Can We{" "}
            <span className="text-lightBlue">Help You?</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            exit="hidden"
            className=" text-[18px] xl:text-[1.2vw]  leading-tight mx-0 text-white xl:mx-[12vw] mb-5"
          >
            Dive into our universe of services<br></br> where every option is a starlit path to success. Whether it&apos;s web development that defies gravity, social media banners that shine like supernovas, SEO that rockets your visibility, or marketing campaigns that traverse digital galaxies, we&apos;re here to make your online presence as dazzling as a comet&apos;s tail. Let&apos;s craft a digital cosmos that&apos;s uniquely yours.
          </motion.p>
          {/* button */}
          <div className="flex flex-row align-center gap-3 justify-center w-full xl:mb-[100px] ">

          </div>
        </div>
    </div>
  )
}

export default AboutSection