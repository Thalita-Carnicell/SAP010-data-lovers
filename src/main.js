import { fetchPokemon } from './data.js';

const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const atualizaçãoDasInformaçoesDosPokemons = async (pokemon) => {
  pokemonName.innerHTML = 'Loading...';
  pokemonNumber.innerHTML = '';

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonImage.style.display = 'flex';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data.sprites.versions['generation-v']['black-white'].animated.front_default;
    input.value = '';
    searchPokemon = data.id;
  } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Not found';
    pokemonNumber.innerHTML = '';
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  atualizaçãoDasInformaçoesDosPokemons(input.value.toLowerCase());
};

const handlePrevButtonClick = () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    atualizaçãoDasInformaçoesDosPokemons(searchPokemon);
  }
};

const handleNextButtonClick = () => {
  searchPokemon += 1;
  atualizaçãoDasInformaçoesDosPokemons(searchPokemon);
};

form.addEventListener('submit', handleFormSubmit);
buttonPrev.addEventListener('click', handlePrevButtonClick);
buttonNext.addEventListener('click', handleNextButtonClick);

atualizaçãoDasInformaçoesDosPokemons(searchPokemon);

export { atualizaçãoDasInformaçoesDosPokemons };
