/* eslint-disable react/jsx-key */
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import ParticlesContainer from '../../components/ParticlesContainer'
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import React, { useState } from "react";
import Circles from "../../components/Circles";
//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="xl:bg-halfpanda bg-contain bg-bottom-left  w-full h-full bg-no-repeat flex  ">
      <div className=" mx-0 h-full w-full flex flex-col xl:flex-row mt-[15vh] xl:justify-center xl:items-center p-0 xl:mt-[4vh] xl:mx-12">
        <div className="text-center  xl:w-[60%] z-10 flex pl-0 xl:pl-[7vw]  flex-col align-center gap-3 m-0 justify-center xl:justify-center pt-0 xl:pt-30  xl:text-left h-[38%] xl:h-full ">
          <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" text-[30px] xl:text-[3.2vw] leading-tight z-10  font-medium"
          >
            Captivating <span className="text-myblue ">Stories</span> <br />
            Birth Magnificent Designs.
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-2xl text-[18px] xl:text-[1.4vw] leading-tight mx-auto text-white xl:mx-0 mb-5 xl:my-7"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&lsquo;s standard dummy text
            ever since book.
          </motion.p>
          {/* counter */}
          <div className="hidden xl:flex w-[450px]" >
            <div className="flex flex-1 xl:gap-x-6 " >
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/20 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-regular text-sky-500 mb-2">
                  <CountUp start={0} end={100} duration={5} delay={0} /> +
                </div>
                <div className="text-cs uppercase tracking-[1px] leading-[1.4] max-w-[100px] font-montserrat ">
                  Years OF Experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/20 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-regular text-myblue mb-2">
                  <CountUp start={0} end={100} duration={5} delay={0} /> +
                </div>
                <div className="text-cs uppercase tracking-[1px] leading-[1.4] max-w-[100px] font-montserrat ">
                  Years OF Experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/20 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-regular text-myblue mb-2">
                  <CountUp start={0} end={100} duration={5} delay={0} /> +
                </div>
                <div className="text-cs uppercase tracking-[1px] leading-[1.4] max-w-[100px] font-montserrat ">
                  Years OF Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" xl:w-[40%] flex flex-col z-10 items-center justify-center xl:items-start xl:justify-start">
          <div className="flex flex-row gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-lightBlue after:transition-all after:w-[100%] after:bg-lightBlue after:duration-300"
                  } 
              cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" mx-[7%] xl:mx-0 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center  xl:items-start max-w-md w-md ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col max-w-md gap-x-2 text-white"
                >
                  <div className="flex flex-col xl:flex-row pb-3">
                    <div className="font-light mb-2 md:mb-0 text-center">
                      {item.title}
                    </div>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>
                  </div>

                  <div className="flex flex-wrap gap-3 items-center justify-center xl:justify-start xl:items-start ">
                    {item.icons?.map((icon, index) => {
                      return (
                        <div key={index} className="text-3xl">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ParticlesContainer />

    </div>
  );
};

export default About;
