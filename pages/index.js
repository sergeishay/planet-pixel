import StarsCanvas from "../components/canvas/Stars";
import Image from "next/image";
import Link from "next/link";
import AboutSection from "../components/AboutSection";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Counter from "../components/Counter";
import ServicesSection from "../components/ServicesSection";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer";
import UnderFooter from "../components/UnderFooter";
import Rounded from "../components/common/RoundedButton";
const products = [
  {
    title: "Aleftaf",
    link: "aleftaf",
    thumbnail: "/aleftaf.webp",
  },
  {
    title: "Cotton-Club",
    link: "cotton-club",
    thumbnail: "/cotton-club.webp",
  },

  {
    title: "Haison",
    link: "haison",
    thumbnail: "/haison.webp",
  },
  {
    title: "Unicorn",
    link: "unicorn",
    thumbnail: "/Unicorn.webp",
  },
  {
    title: "Aleftaf",
    link: "aleftaf",
    thumbnail: "/aleftaf.webp",
  },
  {
    title: "Cotton-Club",
    link: "cotton-club",
    thumbnail: "/cotton-club.webp",
  },

  {
    title: "Haison",
    link: "haison",
    thumbnail: "/haison.webp",
  },
  {
    title: "Unicorn",
    link: "unicorn",
    thumbnail: "/Unicorn.webp",
  },
  {
    title: "Aleftaf",
    link: "aleftaf",
    thumbnail: "/aleftaf.webp",
  },
  {
    title: "Cotton-Club",
    link: "cotton-club",
    thumbnail: "/cotton-club.webp",
  },

  {
    title: "Haison",
    link: "haison",
    thumbnail: "/haison.webp",
  },
  {
    title: "Unicorn",
    link: "unicorn",
    thumbnail: "/Unicorn.webp",
  },
  {
    title: "Aleftaf",
    link: "aleftaf",
    thumbnail: "/aleftaf.webp",
  },
  {
    title: "Cotton-Club",
    link: "cotton-club",
    thumbnail: "/cotton-club.webp",
  },

  {
    title: "Haison",
    link: "haison",
    thumbnail: "/haison.webp",
  },
  {
    title: "Unicorn",
    link: "unicorn",
    thumbnail: "/Unicorn.webp",
  },
  {
    title: "Aleftaf",
    link: "aleftaf",
    thumbnail: "/aleftaf.webp",
  },
  {
    title: "Cotton-Club",
    link: "cotton-club",
    thumbnail: "/cotton-club.webp",
  },

  {
    title: "Haison",
    link: "haison",
    thumbnail: "/haison.webp",
  },
  {
    title: "Unicorn",
    link: "unicorn",
    thumbnail: "/Unicorn.webp",
  },
];
const Home = () => {
  return (
    <div className="flex flex-col">
      <div
        className=" h-[90vh] md:h-[120vh] w-full relative flex
          flex-col xl:flex-row xl:justify-start
          xl:items-start p-0  mx-0 bg-scroll opacity-100 "
      >
        <div
          className=" text-center z-10 flex  flex-col  gap-4 m-0 justify-start pt-[180px]
         xl:pt-[20px]  xl:justify-center  xl:aling-start xl:pl-[7vw] xl:text-left h-full
         mx-2 xl:mx-[2vw]"
        >
          <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" text-[30px] xl:text-[3.6vw] leading-tight z-5 font-medium"
          >
            <span className={`font-montserrat font-medium`}></span>
            Launch Your Story <br />
            <span className={`font-montserrat font-medium`}>i</span>nto{" "}
            <span className="text-lightBlue">the Cosmos.</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-lg xl:max-w-3xl text-[18px] xl:text-[1.2vw]
             leading-tight mx-auto text-white xl:mx-0 mb-2 xl:mt-3"
          >
            Welcome aboard Planet-Pixel, your launchpad to the digital stars!
            Here, we don&apos;t just build websites, we launch your epic story
            into the cosmic web. Imagine your project as a shooting star,
            shining across the digital sky, created by a team that dreams big
            and codes bigger.
          </motion.p>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-2xl font-medium text-[18px] xl:text-[1.4vw] leading-tight mx-auto text-white xl:mx-0 mb-5 xl:mb-2"
          >
            ARE YOU BElTED? BECAUSE WE׳RE ON OUR WAY.
          </motion.p>
          <div className="flex flex-row align-center gap-3 justify-center xl:justify-start ">
            <Link href="/contact" className="text-white hover:text-white">
              <Rounded backgroundButtonColor="lightBlue">
                <p className="text-white hover:text-white">Let`s Talk</p>
              </Rounded>
            </Link>
            <Link href="/work" className="text-white hover:text-white">
              <Rounded backgroundButtonColor="lightBlue">
                <p className="text-white hover:text-white" >Our Projects</p>
              </Rounded>
            </Link>
          </div>
        </div>
        <motion.div className="flex absolute justify-center  w-full h-full ">
          <Avatar />
          <StarsCanvas />
        </motion.div>
      </div>

      <Counter />
      <AboutSection />
      <ServicesSection />

      <Projects />
      <Footer />
      <UnderFooter />
    </div>
  );
};

export default Home;
