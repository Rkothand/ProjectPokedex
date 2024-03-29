// src/components/Pokemon/PokemonList.js
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { updateFilterShow, pokedexMappingInterface } from './pokemonMap';

const TypeFilter = ({ updateGridData }) => {
  const [selectedTypes, setSelectedTypes] = useState([]); // Default to an empty array
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Filter the array based on the selected types
  const filterPokemonByTypes = (selectedTypes) => {
    if (selectedTypes.length === 0) {
      for (const key in pokedexMappingInterface) {
        if (pokedexMappingInterface.hasOwnProperty(key)) {
          const locPokemon = pokedexMappingInterface[key];
          updateFilterShow(locPokemon.name, locPokemon.form_name, false); //show nothing if no types selected
        }
      }

      console.log('no types selected');
      // console.log(pokedexMappingInterface);
      return;
    }

    else {
      console.log('types selected' + selectedTypes);
      // Otherwise, filter the array
      for (const key in pokedexMappingInterface) {
        // if (pokedexMappingInterface.hasOwnProperty(key)) {
        const locPokemon = pokedexMappingInterface[key];
        // console.log(locPokemon);
        // console.log(locPokemon.types);
        const hasCommonType = selectedTypes.some(type => locPokemon.types.includes(type));
        if (hasCommonType) {
          updateFilterShow(locPokemon.name, locPokemon.form_name, true);
        }
        else {
          updateFilterShow(locPokemon.name, locPokemon.form_name, false);
        }
      }
    }
    // console.log(pokedexMappingInterface);

  };


  // Handle checkbox change
  const handleCheckboxChange = (type) => {
    if (type === 'All') {
      // If 'All' checkbox is changed, toggle its selection
      setSelectedTypes(selectedTypes.includes('All') ? [] : ['All', 'bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']);
    } else {
      // If any other checkbox is changed, toggle its selection
      if (selectedTypes.includes(type)) {
        // If the checkbox is already selected, deselect it
        setSelectedTypes(selectedTypes.filter(selectedType => selectedType !== type));
      } else {
        // If the checkbox is not selected, check if 'All' is selected
        const updatedTypes = [...selectedTypes, type];
        setSelectedTypes(updatedTypes.includes('All') ? ['All', 'bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'] : updatedTypes);
      }
    }
  };
  


  // Handle dropdown toggle
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    filterPokemonByTypes(selectedTypes);
    updateGridData(); // Call the updateGridData function passed from props
    console.log(selectedTypes);
  }, [selectedTypes]);


  return (
    <div>
      {/* Vertical dropdown menu with checkboxes */}
      <label>Select Types:</label>
      <div>
        <div onClick={toggleDropdown}>
          {isDropdownOpen ? '▲' : '▼'} Types
        </div>
        {isDropdownOpen && (
          <div style={{ flexDirection: 'column' }}>
            {['All', 'bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'].map(type => (
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
export default TypeFilter;