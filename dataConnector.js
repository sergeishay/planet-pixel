export async function getProjects() {
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
      const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
  
      if (!response.ok) {
        console.error("Failed to fetch projects:", response);
      }
  
      const json = await response.json();
      console.log(json.data.projects); // Logging the JSON response to the console
  
      return json; // Return the parsed JSON, not the response object
      
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }
  

  // Assuming you have a function to fetch data from your GraphQL API
export async function getProjectBySlug(slug) {
  const query = `
    query GetProjectBySlug($slug: String!) {
      projects(where: {name: $slug}) {
        edges {
          node {
            id
            title
            description
            liveLink
            gallery
          }
        }
      }
    }
  `;

  const variables = { slug };

  const response = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch project');
  }

  const json = await response.json();
  return json.data.projects.edges.map(edge => edge.node)[0]; // Assuming you're querying for one project, so take the first
}
