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
  background-color: #4caf50;
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
`;

// for (let i = 1; i <= count; i++) {
//   PokedexDisplayData.push({
//     id: i,
//     name: `Item ${i}`,
//     description: `Description ${i}`,
//     imageUrl: `img/pokemon/${String(i).padStart(4, '0')}_000_mf_n.png`, // Assuming images are named like 0001_000_mf_n.png
//   });
// }

const generatePokemonData = () => {
  const PokedexDisplayData = [];
  for (const pokemonName in PokemonData) {
    if (PokemonData.hasOwnProperty(pokemonName)) {
      const pokemon = PokemonData[pokemonName];

      // Log the Pokemon information
      console.log(`Name: ${pokemon.name}`);
      console.log(`Base ID: ${pokemon.base_id}`);
      console.log(`Form ID: ${pokemon.form_id}`);
      console.log(`Types: ${pokemon.pokemon_type.join(', ')}`);
      console.log(`Egg Groups: ${pokemon.egg_group.join(', ')}`);
      console.log(`Gender: ${pokemon.gender.join(', ')}`);
      console.log(`Gender Ratio: ${pokemon.gender_ratio}`);
      console.log(`Color: ${pokemon.color}`);
      console.log(`Experience Group: ${pokemon.experience_group}`);
      console.log(`Generation: ${pokemon.generation}`);

      if (pokemon.form_id !== 0) {
        if ((pokemon.has_gigantamax || pokemon.is_mega)||pokemon.form_name) {
          // Skip the rest of the current iteration and move to the next one
          continue;
        }

      }

      if (pokemon.has_gigantamax) {
        console.log("This Pokemon has a Gigantamax form.");
      }

      if (pokemon.is_mega) {
        console.log("This Pokemon has a Mega form.");
      }


      //male and female no diff
      if (pokemon.gender.length === 1 && pokemon.gender[0] === "mf") {
        PokedexDisplayData.push({
          id: pokemon.base_id,
          name: pokemon.name,
          description: pokemon.pokemon_type.join(', '),
          imageUrl: `img/pokemon/${String(pokemon.base_id).padStart(4, '0')}_${String(pokemon.form_id).padStart(3, '0')}_mf_n.png`, // Assuming images are named like 0001_000_mf_n.png
        });
      }

      //male and female diff
      if (pokemon.gender.length === 2 && pokemon.gender[0] === "fd") {
        PokedexDisplayData.push({
          id: pokemon.base_id,
          name: pokemon.name,
          description: pokemon.pokemon_type.join(', '),
          imageUrl: `img/pokemon/${String(pokemon.base_id).padStart(4, '0')}_${String(pokemon.form_id).padStart(3, '0')}_fd_n.png`, // Assuming images are named like 0001_000_mf_n.png
        });
      }

      //male and female no diff
      if (pokemon.gender.length === 1 && pokemon.gender[0] === "uk") {
        PokedexDisplayData.push({
          id: pokemon.base_id,
          name: pokemon.name,
          description: pokemon.pokemon_type.join(', '),
          imageUrl: `img/pokemon/${String(pokemon.base_id).padStart(4, '0')}_${String(pokemon.form_id).padStart(3, '0')}_uk_n.png`, // Assuming images are named like 0001_000_mf_n.png
        });
      }

      if (pokemon.gender.length === 1 && pokemon.gender[0] === "fd") {
        PokedexDisplayData.push({
          id: pokemon.base_id,
          name: pokemon.name,
          description: pokemon.pokemon_type.join(', '),
          imageUrl: `img/pokemon/${String(pokemon.base_id).padStart(4, '0')}_${String(pokemon.form_id).padStart(3, '0')}_fd_n.png`, // Assuming images are named like 0001_000_mf_n.png
        });
      }



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
    // Generate mock data with 1000 images
    const PokedexDisplayData = generatePokemonData();;
    setGridData(PokedexDisplayData);
  }, []);

  return (
    <StyledGrid>
      {gridData.map((item) => (
        <StyledItem key={item.id}>
          <StyledItemImage src={item.imageUrl} alt={`Image for ${item.name}`} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          {/* <StyledItemButton>Click me</StyledItemButton> */}
        </StyledItem>
      ))}
    </StyledGrid>
  );
};

export default DynamicGrid;
