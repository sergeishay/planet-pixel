import ServiceSlider from "../../components/ServiceSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-screen flex">
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
            <ServiceSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
