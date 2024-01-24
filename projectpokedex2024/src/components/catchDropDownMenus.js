// src/components/Pokemon/PokemonList.js
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { pokedexMappingInterface } from './pokemonMap';

const CatchFilter = ({ pokemonData }) => {
  const [selectedTypes, setSelectedTypes] = useState([]); // Default to an empty array
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Filter the array based on the selected types
//   const filteredPokemon = selectedTypes.length === 0
//     ? pokemonData
//     : pokemonData.filter(pokemon => selectedTypes.every(type => pokemon.types.includes(type)));

  // Handle checkbox change
  const handleCheckboxChange = (type) => {
    if (selectedTypes.includes(type)) {
      // Remove type if it's already selected
      setSelectedTypes(selectedTypes.filter(selectedType => selectedType !== type));
    } else {
      // Add type if it's not selected
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      {/* Vertical dropdown menu with checkboxes */}
      <label>Catch Status:</label>
      <div>
        <div onClick={toggleDropdown}>
          {isDropdownOpen ? '▲' : '▼'} Types
        </div>
        {isDropdownOpen && (
          <div style={{ flexDirection: 'column' }}>
            {['Caught', 'Missing', 'Living Dex', 'Shiny'].map(type => (
              <label key={type} style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  value={type}
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleCheckboxChange(type)}
                />
                {type}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Display the filtered Pokemon list */}
      <ul>
        {/* {filteredPokemon.map(pokemon => (
          <li key={pokemon.id}>{pokemon.name} - Type: {pokemon.types}</li>
        ))} */}
      </ul>
    </div>
  );
};
export default CatchFilter;

