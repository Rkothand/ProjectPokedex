// src/components/DynamicGrid.js

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import PokemonData from '../Database/PokemonData';

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

const generatePokemonData = () => {
  const PokedexDisplayData = [];
  for (const pokemonName in PokemonData) {
    if (PokemonData.hasOwnProperty(pokemonName)) {
      const pokemon = PokemonData[pokemonName];

      


      if (pokemon.form_id !== 0) {
        if ((pokemon.has_gigantamax || pokemon.is_mega)||pokemon.form_name) {
          // Skip the rest of the current iteration and move to the next one
          continue;
        }

      }
      //no diff
      // if (pokemon.gender.length === 1) {
        PokedexDisplayData.push({
          id: pokemon.base_id,
          eggGroup: pokemon.egg_group,
          name: pokemon.name,
          description: pokemon.pokemon_type.join(', '),
          imageUrl: `img/pokemon/${String(pokemon.base_id).padStart(4, '0')}_${String(pokemon.form_id).padStart(3, '0')}_${String(pokemon.gender[0])}_n.png`, // Assuming images are named like 0001_000_mf_n.png
        });
      // }

      //male and female diff
      // if (pokemon.gender.length === 2 && pokemon.gender[0] === "fd") {
      //   PokedexDisplayData.push({
      //     id: pokemon.base_id,
      //     name: pokemon.name,
      //     description: pokemon.pokemon_type.join(', '),
      //     imageUrl: `img/pokemon/${String(pokemon.base_id).padStart(4, '0')}_${String(pokemon.form_id).padStart(3, '0')}_fd_n.png`, // Assuming images are named like 0001_000_mf_n.png
      //   });
      // }



      // Checking evolution
      if (pokemon.evolution_ids) {
        const [evolvesIntoBaseId, evolvesIntoFormId] = pokemon.evolution_ids[0];
        console.log(`Evolves into Base ID: ${evolvesIntoBaseId}`);
        console.log(`Evolves into Form ID: ${evolvesIntoFormId}`);
      }
    }
  }
  return PokedexDisplayData;
};

const DynamicGrid = () => {
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    const pokedexDisplayData = generatePokemonData();
    setGridData(pokedexDisplayData);
  }, []);

  const handleButtonClick = (index) => {
    setGridData((prevData) => {
      const newData = [...prevData];
      newData[index].isActive = !newData[index].isActive;
      return newData;
    });
  };

  return (
    <StyledGrid>
      {gridData.map((item, index) => (
        <StyledItem key={item.id}>
          <StyledItemImage src={item.imageUrl} alt={`Image for ${item.name}`} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <StyledItemButton onClick={() => handleButtonClick(index)} isActive={item.isActive}>
            missing
          </StyledItemButton>
        </StyledItem>
      ))}
    </StyledGrid>
  );
};

export default DynamicGrid;
