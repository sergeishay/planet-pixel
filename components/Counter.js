import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="flex flex-1 xl:gap-x-6 justify-center align-middle gap-5 
    -mt-[0%] md:-mt-0 items-center px-6 py-6 w-full bg-white/20	z-20 ">
      <div className="flex flex-col xl:flex-row xl:gap-x-6 " >
        <div className=" items-center text-center justify-center mb-4 ">
          <div className="text-2xl  xl:text-4xl font-regular text-sky-500 mb-2">
            <CountUp start={0} end={100} duration={5} delay={0} /> +
          </div>
          <div className="text-cs uppercase tracking-[1px] font-montserrat ">
            Projects
          </div>
        </div>
        <div className=" items-center text-center justify-center ">
          <div className="text-2xl  xl:text-4xl font-regular text-sky-500 mb-2">
            <CountUp start={0} end={100} duration={5} delay={0} /> +
          </div>
          <div className="text-cs uppercase tracking-[1px] font-montserrat ">
            Customers
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row xl:gap-x-6 " >
        <div className=" items-center text-center justify-center mb-4 ">
          <div className="text-2xl  xl:text-4xl font-regular text-sky-500 mb-2">
            <CountUp start={0} end={100} duration={5} delay={0} /> +
          </div>
          <div className="text-cs uppercase tracking-[1px] font-montserrat ">
            Designed
          </div>
        </div>
        <div className=" items-center text-center justify-center ">
          <div className="text-2xl  xl:text-4xl font-regular text-sky-500 mb-2">
            <CountUp start={0} end={100} duration={5} delay={0} /> +
          </div>
          <div className="text-cs uppercase tracking-[1px] font-montserrat ">
            Developed
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
