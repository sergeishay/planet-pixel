import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import WorkSlider from "../../components/WorkSlider";

const Work = () => {
  return (
    <div className="h-full flex">
      <div className="mx-auto">
        <div className="flex flex-col gap-y-4 justify-center items-center w-full h-full  ">
          <div className="text-center">
            <motion.h1
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" text-[30px] xl:text-[3.2vw] leading-tight z-10  font-medium"
            >
              How Can We <span className="text-myblue ">Help You?</span> <br />
            </motion.h1>
          </div>
          <div>
            <WorkSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
