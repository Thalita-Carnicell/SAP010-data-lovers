// adotar cultura de testes - qualidade(métrica) confiança e tempo ( atingir objetivos de negócio) economia de tempo e dinheiro
// 1* analise de requisitos- funcionalidades do projeto tipos de teste
// 2* Plano de testes- (QA)ferramentas gastos de recursos
// 3* caso de testes- dados de entrada e saida
// 4* ambiente de teste- como e onde serão desenvolvidos ( fluxo )

import { sortPokemonList } from '../src/data.js';


const mockPokemonList = [
  { name: 'charizard' },
  { name: 'darkrai' },
  { name: 'xharizard' },

];

describe('Ordenar lista de pokemons', () => {
  it('deve classificar em ordem alfabetica crescente', () => {
    const resultado = sortPokemonList(mockPokemonList, 'charizard', 'darkrai')
    const esperado = 2;

    expect(resultado.length).toEqual(esperado);

  });

});


