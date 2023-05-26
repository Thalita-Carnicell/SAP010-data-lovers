export const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }

  return null;
};

export const atualizaçãoDasInformaçoesDosPokemons = (pokemonName, pokemonNumber, pokemonImage, data) => {
  if (data) {
    pokemonImage.style.display = 'flex';
    pokemonName.innerHTML = data.name || 'Not found';
    pokemonNumber.innerHTML = data.id != null ? String(data.id) : '';
    pokemonImage.src = data.sprites?.versions?.['generation-v']?.['black-white']?.animated?.front_default || '';

 } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Not found';
    pokemonNumber.innerHTML = '';
  }
};


export const sortPokemonList = (pokemonList, sortOrder = 'a-z') => {
  const sortedList = [...pokemonList]; // Criar uma nova cópia da lista original

  sortedList.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (sortOrder === 'a-z') {
      return nameA.localeCompare(nameB);
    } else if (sortOrder === 'z-a') {
      return nameB.localeCompare(nameA);
    }

    return 0;
  });

  return sortedList;
};


export const addFormEventListener = (form, input, callback) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const pokemonName = input.value.toLowerCase();
    callback(pokemonName);
  };

  form.addEventListener('submit', handleSubmit);
};

export const addButtonPrevEventListener = (buttonPrev, searchPokemon, callback) => {
  const handleButtonClick = () => {
    if (searchPokemon > 1) {
      const prevPokemon = searchPokemon - 1;
      callback(prevPokemon);
    }
  };

  buttonPrev.addEventListener('click', handleButtonClick);
};

