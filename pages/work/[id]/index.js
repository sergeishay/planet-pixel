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
  let slug = pathname?.split("/").pop().replace(/ /g, '-');
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
            gallery: projectData.gallery || [], // Assuming gallery is an array of MediaItems
            id: projectData.id,
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
  }, [slug]); // Depend on the slug, so if it changes, the project is refetched

  if (!project) {
    return <div className="pt-5 h-hull">Loading...</div>; // Or any other loading state representation
  }

  return (
    <div className="flex flex-row justify-center items-center pt-5 h-screen">
      <div className="flex items-start justify-center">
        <div>
          <div className="text-center z-10 flex  flex-col align-center gap-4 m-0 justify-end xl:justify-center xl:pt-30  xl:pl-[7vw] xl:text-left h-full container mx-2 xl:mx-auto">
            <motion.h1
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" text-[30px] xl:text-[3.8vw] leading-tight z-5 font-medium"
            >
              <span className="text-white">{project.title}</span>
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
            {/* button */}
            <div
              className="flex flex-row align-center
           justify-center xl:justify-start "
            >
              <ProjectsBtn
                backgroundColor="lightBlue"
                text="let`s Talk"
                url="contact"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image src={project.gallery[0]} width="900" height="400" alt={project.title} />
      </div>
    </div>
  );
};

export default WorkDetails;
