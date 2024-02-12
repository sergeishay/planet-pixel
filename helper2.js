import { useEffect, useState } from 'react';
import { HeroParallax } from "../../components/ui/hero-parallax";

const Testimonials = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        query MyQuery {
          projects {
            edges {
              node {
                id
                description
                title
                mainImage
                gallery
                liveLink
              }
            }
          }
        }
      `;

      try {
        const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query,
          }),
        });

        const json = await res.json();
        console.log(json);

        // Assuming the data is directly under json.data.projects.edges
        const fetchedProducts = json.data.projects.edges.map(edge => ({
          title: edge.node.title,
          link: edge.node.liveLink, // Adjust according to your data structure
          thumbnail: edge.node.mainImage, // Adjust according to your data structure
        }));

        setProjects(fetchedProducts);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);
  console.log(projects);
  return (
    <div>
      <HeroParallax products={products} />
    </div>
  );
};

export default Testimonials;
