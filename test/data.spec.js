// adotar cultura de testes - qualidade(métrica) confiança e tempo ( atingir objetivos de negócio) economia de tempo e dinheiro
// 1* analise de requisitos- funcionalidades do projeto tipos de teste
// 2* Plano de testes- (QA)ferramentas gastos de recursos 
// 3* caso de testes- dados de entrada e saida 
// 4* ambiente de teste- como e onde serão desenvolvidos ( fluxo )

//escolher a unidade a ser testada// comportamento esperado//

import { filteredList } from '../';

describe('filteredList', () => {
  it('filtra a lista de Pokémon na ordem A-Z', () => {
    const pokemon_List = [
      { name: 'abomasnow' },
      { name: 'abra' },
      { name: 'absol' },
    ];

    const filteredList = displayPokemonList(pokemon_List);

    expect(filteredList).toEqual([
      { name: 'abomasnow' },
      { name: 'abra' },
      { name: 'absol' },
    ]);
  });
});
