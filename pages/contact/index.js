import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { fadeIn } from "../../variants";
import { EarthCanvas } from "../../components/canvas/";
import { slideIn } from "../../variants";
import { StarsCanvas } from "../../components/canvas/";
const Contact = () => {
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
    emailjs;
    // .send(
    //   import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //   import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //   {
    //     from_name: form.name,
    //     to_name: "Sergei | Shay",
    //     from_email: form.email,
    //     phone:form.email,
    //     to_email: "sergeishay@gmail.com",
    //     message: form.message,
    //   },
    //   import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    // )
    // .then(
    //   () => {
    //     setLoading(false);
    //     alert("Thank you. I will get back to you as soon as possible.");

    //     setForm({
    //       name: "",
    //       email: "",
    //       phone:"",
    //       message: "",
    //     });
    //   },
    //   (error) => {
    //     setLoading(false);
    //     console.error(error);

    //     alert("Ahh, something went wrong. Please try again.");
    //   }
    // );
  };

  return (
    <div className="mx-0 h-screen w-full flex flex-col-reverse  xl:flex-row mt-3 xl:mt-[10vh] xl:justify-center xl:items-center p-0 3xl:mt-[4vh] xl:mx-12">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="text-center xl:w-[40%] z-10 flex pl-0 xl:pl-[7vw]  
            flex-col align-center gap-2 m-0 justify-start xl:justify-center mx-4 mt-0 pt-0 xl:pt-30
              xl:text-left  h-[60%] xl:h-full "
              >
          <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" text-[30px] xl:text-[3.2vw] leading-none z-10 pt-0 mt-0  font-medium"
          >
            Lets<span className="text-myblue "> Connect.</span> <br />
          </motion.h1>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-1 xl:mt-4 flex flex-col gap-3"
          >
            <div className="flex flex-row justify-between w-full m-0 p-0 gap-3">
              <label className="flex w-full">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="*Full Name"
                  className=" py-1 px-6 w-full placeholder:text-white text-white rounded-md bg-transparent border-2 border-white outline-none font-normal"
                />
              </label>
              <label className="flex w-full ">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your Email?"
                  className=" py-1 px-6 w-full text-white placeholder:text-white rounded-md bg-transparent border-2 border-white outline-none font-normal"
                />
              </label>
            </div>
            <label className="flex flex-col">
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="What's your Phone?"
                className=" py-1 px-6  text-white rounded-md placeholder:text-white bg-transparent border-2 border-white outline-none font-normal"
              />
            </label>
            <label className="flex flex-col">
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className=" py-1 px-6  text-white rounded-md placeholder:text-white bg-transparent border-2 border-white outline-none font-normal"
              />
            </label>

            <button
              type="submit"
              className=" py-2 px-8 rounded-xl outline-none w-fit  primary-gradient primary-border text-white font-bold "
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className=" xl:w-[60%] h-[40%] xl:h-full flex flex-col z-10  xl:items-start xl:justify-start"
      >
        <EarthCanvas />
      </motion.div>
      <StarsCanvas />
    </div>

  );
};

export default Contact;
