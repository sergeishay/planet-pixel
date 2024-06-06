import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";
import { fadeIn } from "../variants";
import { slideIn } from "../variants";
import Image from "next/image";

const Footer = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // emailjs.send(...) - Uncomment and configure as needed
  };

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1.5], ["100%", "-80%"]);
  const y = useTransform(scrollYProgress, [0, 1.5], ["-100%", "120%"]);


  return (
    <div className="relative mx-0  w-full flex flex-col
     mt-[70px] mb-[0px] xl:mb-5 xl:mt-3 xl:justify-center xl:items-center p-0 3xl:mt-[4vh] ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="text-center z-10 flex pl-0 flex-col align-center
         gap-2 m-0 justify-start xl:justify-center mx-4 mt-0 pt-0 xl:pt-30 h-[60%] xl:h-full"
      >
        <motion.h1
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-[30px] xl:text-[3.2vw] leading-none z-10 pt-0 mt-0 xl:mt-[150px] font-medium"
        >
          Lets<span className="text-myblue"> Connect.</span> <br />
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-xl xl:max-w-2xl text-[18px] xl:text-[1.2vw] 
          leading-tight mx-auto text-white xl:mx-0 xl:my-4"
        >
          Your story is unique your digital presence should be too. If youre
          ready to propel your vision beyond the stratosphere, our crew at
          Planet-Pixel is eager to chart the course. Contact us to begin our
          collaboration.
        </motion.p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-1 xl:mt-4 flex flex-col gap-3"
        >
          <div className="flex flex-row justify-between w-full mb-4 p-0 gap-3">
            <label className="flex w-full">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="*Full Name"
                className="py-3 px-6 w-full text-[14px] placeholder:text-white text-white rounded-[5px] gradient-border outline-none font-normal"
              />
            </label>
            <label className="flex w-full ">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="*Email"
                className="py-3 px-6 w-full text-[14px] placeholder:text-white text-white rounded-[5px] bg-white/20 border-2 gradient-border outline-none font-normal"
              />
            </label>
            <label className="flex w-full">
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="*Phone"
                className="py-3 px-6 w-full text-[14px] placeholder:text-white text-white rounded-[5px] bg-white/20 border-2 gradient-border outline-none font-normal gradient-border-focus"
              />
            </label>
          </div>

          <label className="flex flex-col">
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="py-1 px-6 w-full text-[14px] placeholder:text-white text-white rounded-[5px] bg-white/20 border-2 gradient-border outline-none font-normal gradient-border-focus"
            />
          </label>

          <button
            type="submit"
            className="py-2 px-8 mt-5 self-end outline-none w-fit text-white font-bold button-default button-hover"
          >
            <span>{loading ? "Sending..." : "Let's Talk"}</span>
          </button>
        </form>
      </motion.div>
      <motion.div
        // style={{ x, y }}
        className=" absolute mix-blend-luminosity  w-full bottom-[25vh] right-[100%] xl:bottom-[35vh] xl:left-[-30vw]"
      >
        <Image className="rotate" src="/new-glob.png" fill alt="glob" />
      </motion.div>
    </div>
  );
};

export default Footer;
