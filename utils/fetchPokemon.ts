export const fetchPokemon = async ({ pageParam = 0 }) => {
  const limit = 10;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${pageParam}`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
};

export default fetchPokemon;