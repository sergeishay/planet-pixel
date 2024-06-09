"use client";
import styles from "./styles.module.scss";
import React, { useEffect, useState } from "react";
import { getProjectBySlug } from "../../../dataConnector";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import ProjectsBtn from "../../../components/ProjectsBtn";
import Rounded from "../../../components/common/RoundedButton";
import Link from "next/link";
import Image from "next/image";
const WorkDetails = () => {
  const pathname = usePathname();
  let slug = pathname?.split("/").pop().replace(/ /g, "-");
  const [project, setProject] = useState(null); // State to store the fetched project

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await getProjectBySlug(slug);
        if (projectData?.id.length > 0) {
          // Assuming the query returns an array, even if it's for a single project

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
          console.log(formattedProject);
          setProject(formattedProject); // Update state with the formatted project
        } else {
          console.log("Project not found or no projects returned.");
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    if (slug) {
      fetchProject(); // Only invoke the fetch function if a slug is provided
    }
  }, [slug]);

  if (!project) {
    return <div className="pt-5 h-[100vh]">Loading...</div>; // Or any other loading state representation
  }

  return (
    <div className="flex flex-col justify-center items-center w-full pt-5 h-full px-[7vw]">
      <div className="flex flex-col items-start justify-center w-full h-[90vh]">
        <div
          className="text-center z-10 flex  flex-col
         align-center gap-4 m-0 justify-end xl:justify-center xl:pt-30
            xl:text-left h-full"
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
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-2xl text-[18px]
             xl:text-[1.4vw] leading-tight mx-auto text-white "
          >
            {project.description}
          </motion.p>
        </div>
        <div className="flex flex-row gap-6 w-full">
          <div className="flex flex-col gap-0">
            <h1 className="leading-0">ROLE/SERVICES</h1>
            <div className="divider"></div>
            <h1 className="leading-0">{project.services}</h1>
          </div>
          <div className="flex flex-col gap-0">
            <h1 className="leading-0">LOCATION & YEAR</h1>
            <div className="divider"></div>
            <div className="flex flex-row gap-2">
              <h1 className="leading-0">{project.location}</h1> |
              <h1 className="leading-0">{project.year}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="first-image-par w-full flex flex-col  ">
        {/* <Link href={project.link} className="text-white hover:text-white">
          <Rounded className={styles.button}>
            <p>Live Website</p>
          </Rounded>
        </Link> */}
        {project.image1 && (
          <div className="three-images flex flex-row w-full gap-5 mt-[70px]">
            <div className="relative w-1/4 h-[258px]">
              <Image
                src={project.image1}
                fill
                alt="first image"
                className="object-cover"
              />
            </div>
            <div className="relative w-1/2 h-[258px]">
              <Image
                src={project.image2}
                fill
                alt="second image"
                className="object-cover"
              />
            </div>
            <div className="relative w-1/4 h-[258px]">
              <Image
                src={project.image3}
                fill
                alt="third image"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
      <div className="second-image-par w-full flex flex-col pt-[20px]">
        {project.image4 && (
          <div className="three-images flex flex-row w-full gap-5">
            <div className="relative w-1/2 h-[441px]">
              <Image
                src={project.image4}
                fill
                alt="first image"
                className="object-cover"
              />
            </div>
            <div className="relative w-1/2 h-[441px]">
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
          <div className="relative w-full h-[90vh] mt-[20px]">
            <Image
              src={project.image6}
              fill
              alt="third image"
              className="object-cover"
            />
          </div>
        )}
        {project.image7 && (
          <div className="relative w-full h-[100vh] mt-[20px] bg-white">
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
          <div className="relative w-full ">
            {/* Mockup Image */}
            <Image
              src="/compMock.png"
              alt="Computer Mockup"
              width={1440}
              height={900}
              className="w-full h-auto"
            />

            {/* Video */}
            <div className="absolute top-[2%] left-[15%] w-[72%] h-[88%] ">
              <video
                src={project.video1}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      )}
      <div className="third-image-par w-full flex flex-col pt-[20px]">
        {project.image8 && (
          <div className="four-images flex flex-row w-full gap-5 mb-[100px]">
            <div className="relative w-1/4 h-[60vh]">
              <Image
                src={project.image8}
                fill
                alt="first image"
                className="object-cover"
              />
            </div>
            <div className="relative w-1/4 h-[60vh]">
              <Image
                src={project.image9}
                fill
                alt="second image"
                className="object-cover"
              />
            </div>
            <div className="relative w-1/4 h-[60vh]">
              <Image
                src={project.image10}
                fill
                alt="third image"
                className="object-cover"
              />
            </div>
            <div className="relative w-1/4 h-[60vh]">
              <Image
                src={project.image11}
                fill
                alt="third image"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkDetails;
