import styles from "./rounded.module.scss";
import React, { useEffect, useState, useRef } from "react";
import { getProjectBySlug, getProjects } from "../../../dataConnector";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, slideIn, parallaxVariant1 } from "../../../variants";
import ProjectsBtn from "../../../components/ProjectsBtn";
import Rounded from "../../../components/common/RoundedButton";
import Link from "next/link";
import Image from "next/image";
import Rellax from "rellax";

const WorkDetails = () => {
  const pathname = usePathname();
  let slug = pathname?.split("/").pop().replace(/ /g, "-");
  const [project, setProject] = useState(null); // State to store the fetched project
  const [nextProject, setNextProject] = useState(null); // State to store the next project
  const [videoPlaying, isVideoPlaying] = useState(null); // State to store
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await getProjectBySlug(slug);
        if (projectData) {
          const formattedProject = {
            title: projectData.title,
            link: projectData.liveLink,
            thumbnail: projectData.mainImage,
            description: projectData.description,
            id: projectData.id,
            location: projectData.location,
            services: projectData.services,
            year: projectData.year,
            image1: projectData.image1,
            image2: projectData.image2,
            image3: projectData.image3,
            image4: projectData.image4,
            image5: projectData.image5,
            image6: projectData.image6,
            image7: projectData.image7,
            image8: projectData.image8,
            image9: projectData.image9,
            image10: projectData.image10,
            image11: projectData.image11,
            image12: projectData.image12,
            video1: projectData.video1,
          };
          setProject(formattedProject); // Update state with the formatted project
        } else {
          console.log("Project not found or no projects returned.");
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    const fetchNextProject = async () => {
      try {
        const { data } = await getProjects();
        const formattedProjects = data.projects.edges.map(({ node }) => ({
          title: node.title,
          slug: node.title.replace(/ /g, "-"),
          link: node.liveLink,
          thumbnail: node.mainImage,
          description: node.description,
          gallery: node.gallery,
          id: node.id,
        }));

        const currentIndex = formattedProjects.findIndex(
          (project) => project.slug === slug
        );
        const nextIndex = (currentIndex + 1) % formattedProjects.length;
        setNextProject(formattedProjects[nextIndex]);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    if (slug) {
      fetchProject(); // Only invoke the fetch function if a slug is provided
      fetchNextProject(); // Fetch the next project
    }
  }, [slug]);

  const videoRef = useRef(null);
  const imageRef = useRef(null);
  function handleImageLoad(ref) {
    if (ref.current) {
      new Rellax(ref.current, {
        horizontal: true,
        center: true,
        speed: 2,
        callback: function (position) {
          console.log(position);
        },
      });
    }
  }

  if (!project) {
    return <div className="pt-5 h-[100vh]">Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full pt-5 h-full px-[7vw] font-montserrat">
      <div className="relative  flex flex-col items-start justify-center w-full pt-[50px] xl:pt-0  h-[90vh]">
        <div
          className="text-center z-10 flex  flex-col
         align-center gap-4 m-0 justify-center xl:pt-30
            xl:text-left xl:h-full"
        >
          <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" text-[30px] xl:text-[3.8vw] leading-tight z-5 font-medium"
          >
            <span className="text-white font-montserrat">
              {project.title.toUpperCase()}
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full text-[18px] xl:pr-[100px]
             xl:text-[1.4vw] leading-tight mx-auto text-white "
          >
            {project.description}
          </motion.p>
        </div>
        <div className="flex flex-col justify-center items-center xl:justify-start
         pt-[50px] xl:pt-0 xl:flex-row gap-6 w-full">
          <div className="flex flex-col justify-center items-center  xl:items-start gap-0">
            <h1 className="leading-0">ROLE/SERVICES</h1>
            <div className="divider"></div>
            <h1 className="leading-0">{project.services}</h1>
          </div>
          <div className="flex flex-col gap-0 justify-center items-center  xl:items-start">
            <h1 className="leading-0">LOCATION & YEAR</h1>
            <div className="divider"></div>
            <div className="flex flex-row gap-2">
              <h1 className="leading-0">{project.location}</h1> |
              <h1 className="leading-0">{project.year}</h1>
            </div>
          </div>
        </div>
        {project.link && (
          <Link href="/work" className="button text-white hover:text-white">
            <Rounded className={styles.button}>
              <p>Live Website</p>
            </Rounded>
          </Link>
        )}
      </div>

      <div className="first-image-par w-full flex flex-col">
        {project.image1 && (
          <div className="three-images flex flex-row w-full gap-5 mt-[70px]">
            <motion.div
              className="relative w-1/4 h-[110px] xl:h-[258px]"
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }}
              exit="hidden"
            >
              <Image
                src={project.image1}
                fill
                alt="first image"
                className="object-cover"
              />
            </motion.div>
            <div className="relative w-1/2 h-[110px] xl:h-[258px]">
              <Image
                src={project.image2}
                fill
                alt="second image"
                className="object-cover"
              />
            </div>
            <motion.div
              className="relative w-1/4 h-[110px] xl:h-[258px]"
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }}
            >
              <Image
                src={project.image3}
                fill
                alt="third image"
                className="object-cover"
              />
            </motion.div>
          </div>
        )}
      </div>

      <div className="second-image-par w-full flex flex-col pt-[20px]">
        {project.image4 && (
          <div className="three-images flex flex-row w-full gap-5">
            <div className="relative w-1/2 h-[210px]  xl:h-[441px]">
              <Image
                ref={imageRef}
                src={project.image4}
                fill
                alt="first image"
                className="object-cover"
              />
            </div>
            <div className="relative w-1/2 h-[210px]  xl:h-[441px]">
              <Image
                src={project.image5}
                fill
                alt="second image"
                className="object-cover"
              />
            </div>
          </div>
        )}

        {project.image6 && (
          <div className="relative w-full h-[250px] xl:h-[90vh] mt-[20px] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                ref={imageRef}
                src={project.image6}
                fill
                alt="background image"
                className="eye object-fill xl:object-cover"
                onLoadingComplete={() => handleImageLoad(imageRef)}
              />
            </div>
          </div>
        )}

        {project.image7 && (
          <div className="relative w-full h-[250px] xl:h-[100vh] mt-[20px] bg-white">
            <Image
              src={project.image7}
              fill
              alt="third image"
              className="object-contain"
            />
          </div>
        )}
      </div>

      {project.video1 && (
        <div className="video-par w-full flex flex-col my-[50px]">
          <div className="relative w-full">
            {/* Mockup Image */}
            <Image
              src="/compMock.png"
              alt="Computer Mockup"
              width={1440}
              height={900}
              className="w-full h-auto"
            />

            {/* Video */}
            <div className="absolute top-[2%] left-[15%] w-[72%] h-[88%]">
              <video
                ref={videoRef}
                src={project.video1}
                autoplay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-[20px]"
              />
              <button
                onClick={() => videoRef.current.play()}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl"
                style={{ display: isVideoPlaying ? "none" : "flex" }}
              >
                Play
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="third-image-par w-full flex flex-col pt-[20px]">
        {project.image8 && (
          <div className="four-images flex flex-row w-full gap-5">
            <div className="relative w-1/2 xl:w-1/4 h-[150px] xl:h-[60vh]">
              <Image
                src={project.image8}
                fill
                alt="first image"
                className="object-cover"
              />
            </div>
            <div className="relative w-1/2 xl:w-1/4 h-[150px] xl:h-[60vh]">
              <Image
                src={project.image9}
                fill
                alt="second image"
                className="object-cover"
              />
            </div>
            <div className="relative w-1/2 xl:w-1/4 h-[150px] xl:h-[60vh]">
              <Image
                src={project.image10}
                fill
                alt="third image"
                className="object-cover"
              />
            </div>
            <div className="relative w-1/2 xl:w-1/4 h-[150px] xl:h-[60vh]">
              <Image
                src={project.image11}
                fill
                alt="third image"
                className="object-cover"
              />
            </div>
          </div>
        )}
        {project.image12 && (
          <div className="relative w-full h-[250px] xl:h-[100vh] mt-[20px] bg-white">
            <Image
              src={project.image12}
              fill
              alt="third image"
              className="object-contain"
            />
          </div>
        )}
      </div>

      {nextProject && (
        <div className="next-case mt-[50px] w-full flex flex-col items-center justify-center my-[100px]">
          <h2 className="text-white text-[24px] mb-[20px]">Next Case</h2>
          <Link
            href={`/work/${nextProject.slug}`}
            className="w-full flex flex-col items-center justify-center border-b-2 border-lightBlue overflow-hidden group"
          >
            <h3 className="text-white text-[75px] group-hover:text-gray-500 transition duration-300">
              {nextProject.title}
            </h3>
            <div className="relative w-[600px] h-[250px] mb-[-50px] transition-transform duration-700 group-hover:-translate-y-[50px]">
              <Image
                src={nextProject.thumbnail}
                fill
                alt={nextProject.title}
                className="object-cover"
              />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default WorkDetails;
