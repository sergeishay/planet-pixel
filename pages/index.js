import StarsCanvas from "../components/canvas/Stars";
import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div
      className="h-full w-full flex
     flex-col xl:flex-row justify-center
      items-center p-0 mt-[4vh] mx-0 xl:mx-12
      bg-auto   bg-no-repeat bg-left-bottom bg-pandamobile xl:bg-none z-20 
      
      "
    >
      {/* text */}
      <div className="text-center z-10 flex  flex-col align-center gap-4 m-0 justify-end xl:justify-center xl:pt-30  xl:pl-[7vw] xl:text-left h-full container mx-2 xl:mx-auto">
        <motion.h1
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" text-[30px] xl:text-[3.8vw] leading-tight z-5 font-medium"
        >
          <span className={`font-montserrat font-medium`}>T</span>
          ransforming Ideas <br />
          <span className={`font-montserrat font-medium`}>I</span>nto{" "}
          <span className="text-lightBlue">Digital Reality.</span>
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-sm xl:max-w-2xl text-[18px] xl:text-[1.4vw] leading-tight mx-auto text-white xl:mx-0 mb-5 xl:my-7"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since book.
        </motion.p>
        {/* button */}
        <div className="flex flex-row align-center justify-center xl:justify-start ">
          <ProjectsBtn
            backgroundColor="lightBlue"
            text="let`s Talk"
            url="contact"
          />
          <ProjectsBtn
            backgroundColor="bg-lightBlue"
            text="Our Projects"
            url="projects"
          />
        </div>
      </div>
      <motion.div
        // variants={fadeIn("right", 0.5)}
        // initial="hidden"
        // animate="show"
        // exit="hidden"
        // transition={{ duration: 1 , ease: "easeInOut" }}
        className="flex justify-center mr-[8vw]  xl:justify-start w-full h-full "
      >
        {/* Avatar */}
        <Avatar />
      </motion.div>
      <StarsCanvas />
    </div>
  );
};

export default Home;
