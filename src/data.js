export const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }

  return null;
};

export const sortPokemonList = (pokemonList, sortOrder = 'a-z') => {
  const sortedList = [...pokemonList]; // Criar uma nova cópia da lista original

  sortedList.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (sortOrder === 'a-z') {
      return nameA.localeCompare(nameB);
    } 
      return nameB.localeCompare(nameA);
    
  });

  return sortedList;
};



