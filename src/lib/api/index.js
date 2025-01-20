// src/routes/api/discussions/index.js

const token = import.meta.env.VITE_GITHUB_TOKEN;

export default async function fetching(slug) {
  const repo = 'Daan645/i-love-web';  // Vervang door je repository naam

  
    let response;
    
    if (!slug) {
      // Haal discussies op zonder specifieke slug
      response = await fetch(`https://api.github.com/repos/${repo}/discussions`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
    } else {
      // Haal een specifieke discussie op op basis van de slug
      console.log(repo + " piemel " + slug)
      response = await fetch(`https://api.github.com/repos/${repo}/discussions/${slug}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
    }

    const data = await response.json();

    return {
      status: 200,
      body: data,
    };
  
}