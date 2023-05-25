// adotar cultura de testes - qualidade(métrica) confiança e tempo ( atingir objetivos de negócio) economia de tempo e dinheiro
// 1* analise de requisitos- funcionalidades do projeto tipos de teste
// 2* Plano de testes- (QA)ferramentas gastos de recursos
// 3* caso de testes- dados de entrada e saida
// 4* ambiente de teste- como e onde serão desenvolvidos ( fluxo )

import { fetchPokemon, atualizaçãoDasInformaçoesDosPokemons,sortPokemonList } from '../src/data.js';
import { mockPokemon } from '../src/mock.js';
import fetchMock from 'jest-fetch-mock';
import { JSDOM } from 'jsdom';

const dom = new JSDOM();
global.document = dom.window.document;

beforeEach(() => {
  fetchMock.resetMocks();
});

global.fetch = fetchMock;


describe('fetchPokemon', () => {
  it('deve ser uma função', () => {
    expect(typeof fetchPokemon).toBe('function');
  });

  it('deve retornar o pokemon correto quando a resposta da API for bem-sucedida', async () => {
    fetchMock.mockResponse(JSON.stringify(mockPokemon));
    const APIResponse = await fetchPokemon('bulbasaur');
    expect(APIResponse).toEqual(mockPokemon);
  });

  it('deve retornar null quando a resposta da API for falha', async () => {
    fetchMock.mockResponse('', { status: 404 });
    const APIResponse = await fetchPokemon('unknown');
    expect(APIResponse).toBeNull();
  });
});

describe('atualizaçãoDasInformaçoesDosPokemons', () => {
  let pokemonName;
  let pokemonNumber;
  let pokemonImage;
  const data = mockPokemon[0]; // Utiliza o primeiro objeto do mock de dados do pokemon

  beforeEach(() => {
    pokemonName = document.createElement('div');
    pokemonNumber = document.createElement('div');
    pokemonImage = document.createElement('img');
  });

  it('deve ser uma função', () => {
    expect(typeof atualizaçãoDasInformaçoesDosPokemons).toBe('function');
  });

  it('deve atualizar as informações do pokemon', () => {
    atualizaçãoDasInformaçoesDosPokemons(pokemonName, pokemonNumber, pokemonImage, mockPokemon[0]);
  
    expect(pokemonName.innerHTML).toEqual('bulbasaur');
    expect(pokemonNumber.innerHTML).toBe(mockPokemon[0].numero);
    expect(pokemonImage.src).toBe(mockPokemon[0].imagem);
    expect(pokemonImage.style.display).toBe('');
  });
  

  it('deve atualizar as informações do pokemon para "Not found" quando os dados são nulos', () => {
    atualizaçãoDasInformaçoesDosPokemons(pokemonName, pokemonNumber, pokemonImage);

    expect(pokemonName.innerHTML).toBe('Not found');
    expect(pokemonNumber.innerHTML).toBe('');
    expect(pokemonImage.src).toBe('');
    expect(pokemonImage.style.display).toBe('none');
  });
});


describe('sortPokemonList', () => {

  it('deve ser uma função', () => {
    expect(typeof sortPokemonList).toBe('function');
  });

  it('deve retornar uma nova lista ordenada por nome de forma ascendente', () => {
    const pokemonList = [
      { name: 'bulbasaur', id: 1 },
      { name: 'blastoise', id: 9 },
      { name: 'lickitung', id: 108 }
    ];

    const sortedList = sortPokemonList(pokemonList, 'a-z');

    expect(sortedList).not.toBe(pokemonList);
    expect(sortedList).toEqual([
      { name: 'blastoise', id: 9 },
      { name: 'bulbasaur', id: 1 },
      { name: 'lickitung', id: 108 }
    ]);
  });

  it('deve retornar uma nova lista ordenada por nome de forma descendente', () => {
    const pokemonList = [
      { name: 'bulbasaur', id: 1 },
      { name: 'blastoise', id: 9 },
      { name: 'lickitung', id: 108 }
    ];

    const sortedList = sortPokemonList(pokemonList, 'z-a');

    expect(sortedList).not.toBe(pokemonList);
    expect(sortedList).toEqual([
      { name: 'lickitung', id: 108 },
      { name: 'bulbasaur', id: 1 },
      { name: 'blastoise', id: 9 }
    ]);
  });
});