// src/components/DynamicGrid.js

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
// import PokemonData from '../Database/PokemonData';

import { pokedexMappingInterface, updateCatchStatus, updateLivingDexStatus, updateGenderDiffImgUrl, updateFilterShow } from './pokemonMap';
// import handleButtonClick from './handleButtonClick';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const StyledItem = styled.div`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
  background-color: #f0f0f0;

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const StyledItemImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
`;

const StyledItemButton = styled.button`
  background-color: ${({ isActive }) => (isActive ? '#4caf50' : '#ddd')};
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
`;

// const generatePokemonData = () => {
//   const PokedexDisplayData = [];
//   for (const pokemonName in PokemonData) {
//     if (PokemonData.hasOwnProperty(pokemonName)) {
//       const pokemon = PokemonData[pokemonName];

//       if (pokemon.form_id !== 0) {
//         if ((pokemon.has_gigantamax || pokemon.is_mega) || pokemon.form_name) {
//           // Skip the rest of the current iteration and move to the next one
//           continue;
//         }
//       }

//       PokedexDisplayData.push({
//         id: pokemon.base_id,
//         form_id: pokemon.form_id,
//         eggGroup: pokemon.egg_group,
//         CatchStatus: 'no',
//         ShinyStatus: 'no',
//         LivingDexStatus: 'no',
//         name: pokemon.name,
//         description: pokemon.pokemon_type.join(', '),
//         isActive: false,
//         imageUrl: `img/pokemon/${String(pokemon.base_id).padStart(4, '0')}_${String(
//           pokemon.form_id
//         ).padStart(3, '0')}_${String(pokemon.gender[0])}_n.png`, // Assuming images are named like 0001_000_mf_n.png
//       });

//       // Checking evolution
//       // if (pokemon.evolution_ids) {
//       //   const [evolvesIntoBaseId, evolvesIntoFormId] = pokemon.evolution_ids[0];
//       //   console.log(`Evolves into Base ID: ${evolvesIntoBaseId}`);
//       //   console.log(`Evolves into Form ID: ${evolvesIntoFormId}`);
//       // }
//     }
//   }
//   return PokedexDisplayData;
// };



//list of objects that will be displayed in the pokedex


console.log(pokedexMappingInterface);
console.log('pokedexDisplayData is ');





 const DynamicGrid = () => {
  
  const [gridData, setGridData] = useState([]);

useEffect(() => {
  setGridData(pokedexMappingInterface.filter(pokemon => pokemon.filtershow));
  
}, []);

  // handleButtonClick(index, buttonType)

return (
  <StyledGrid>
    {gridData.map((item, index) => (
      <StyledItem key={item.id}>
        <StyledItemImage src={item.imageUrl} alt={`Image for ${item.name}`} />
        <h3>{item.name}</h3>
        <p>{item.types.join(', ')}</p>
        {/* <StyledItemButton onClick={() => handleButtonClick(index, 'caught')} isActive={item.caught === 'yes'}>
          {item.caught === 'yes' ? 'Caught' : 'Missing'}
        </StyledItemButton>
        <StyledItemButton onClick={() => handleButtonClick(index, 'livingDex')} isActive={item.livingDex === 'yes'}>
          {item.livingDex === 'yes' ? 'Caught in living dex' : 'Missing from living dex'}
        </StyledItemButton>
        <StyledItemButton onClick={() => handleButtonClick(index, 'shiny')} isActive={item.shiny === 'yes'}>
          {item.shiny === 'yes' ? 'Shiny caught' : 'Shiny?'}
        </StyledItemButton> */}
      </StyledItem>
    ))}
  </StyledGrid>
);

 };

export default DynamicGrid;
