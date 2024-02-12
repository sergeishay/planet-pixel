'use client';
import { HeroParallax } from "../../components/ui/hero-parallax";
import { getProjects } from "../../dataConnector";
import React, { useEffect, useState } from 'react';




const Testimonials =  () => {
  
  const [projects, setProjects] = useState([]); // State to store fetched projects

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await getProjects(); // Await the Promise from getProjects
        // Transform the fetched data into the required format
        const formattedProjects = data.projects.edges.map(({ node }) => ({
          title: node.title.replace(/ /g, '-'),
          link: node.liveLink,
          thumbnail: node.mainImage,
          description: node.description,
          gallery: node.gallery,
          id: node.id,
        }));
        setProjects(formattedProjects); // Update state with formatted data
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects(); // Invoke the async function to fetch and process projects
  }, []); 
  console.log(projects);

  return (
    <div>
      <HeroParallax products={projects} />
    </div>
  );
};

export default Testimonials;
