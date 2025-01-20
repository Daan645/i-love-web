import fetching from "$lib/api/index"
const discussion = [];

export async function load( {params} ) {
    const { slug } = params;  // Haal de slug op uit de params
    const response = await fetching(slug);  // Roep de functie op

    return {
      response
    };
};