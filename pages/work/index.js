import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import WorkSlider from "../../components/WorkSlider";
import { getProjects } from "../../dataConnector";

const Work = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data } = await getProjects();
        const formattedProjects = data.projects.edges.map(({ node }) => ({
          title: node.title.replace(/ /g, '-'),
          link: node.liveLink,
          thumbnail: node.mainImage,
          description: node.description,
          gallery: node.gallery,
          id: node.id,
        }));
        setProjects(formattedProjects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="h-[100vh] flex-1 flexflex-col mx-[15px] items-center">
      <div className="flex flex-col xl:flex-row gap-y-4 justify-center items-center h-full">
        <div className="xl:text-left mb-8 xl:w-[40%] xl:ml-5">
          <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[30px] xl:text-[3.2vw] leading-tight z-10 font-medium"
          >
            Our <span className="text-myblue">Projects</span>
          </motion.h1>
          <p className="text-white mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since book.
          </p>
        </div>
        <div className="w-full xl:w-[60%] flex justify-center xl:mx-[8vw]">
          {
            projects.length > 0 ? (
              <WorkSlider projects={projects} />
            ) : (
              <p className="text-white">Loading...</p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Work;
