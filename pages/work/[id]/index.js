"use client";
import React, { useEffect, useState } from "react";
import { getProjectBySlug } from "../../../dataConnector";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import ProjectsBtn from "../../../components/ProjectsBtn";
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
    return <div className="pt-5 h-full">Loading...</div>; // Or any other loading state representation
  }

  return (
    <div className="flex flex-row justify-center items-center w-full pt-5 h-full">
      <div className="flex items-start justify-center w-full h-[100vh]">
        <div className="text-center z-10 flex  flex-col
         align-center gap-4 m-0 justify-end xl:justify-center xl:pt-30
           xl:pl-3 xl:text-left h-full container mx-2 xl:mx-1">
             <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" text-[30px] xl:text-[3.8vw] leading-tight z-5 font-medium"
          >
            <span className="text-white font-montserrat">{project.title.toUpperCase()}</span>

          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-2xl text-[18px] xl:text-[1.4vw] leading-tight mx-auto text-white xl:mx-0 mb-5 xl:my-7"
          >
            {project.description}
          </motion.p>
        </div>
      </div>

    </div>
  );
};

export default WorkDetails;
