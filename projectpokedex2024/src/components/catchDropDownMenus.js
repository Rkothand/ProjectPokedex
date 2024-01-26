// src/components/Pokemon/PokemonList.js
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { updateFilterShow, pokedexMappingInterface } from './pokemonMap';
// import {selectedTypes} from './TypeFilterDropDownMenus';

const TypeFilter = ({ updateGridData }) => {
  const [selectedCatchStatus, setSelectedStatus] = useState([]); // Default to an empty array
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Filter the array based on the selected types
  const filterPokemonByCatchStatus = (selectedCatchStatus) => {
    for (const key in pokedexMappingInterface) {
      if (pokedexMappingInterface.hasOwnProperty(key)) {
        const locPokemon = pokedexMappingInterface[key];
        if (selectedCatchStatus.includes('All')) {
          updateFilterShow(locPokemon.name, locPokemon.form_name, true);
        }
        else
        {
          if(selectedCatchStatus.includes('caught') && selectedCatchStatus.includes('missing')){
            updateFilterShow(locPokemon.name, locPokemon.form_name, true);
          }
          if (selectedCatchStatus.includes('caught') && locPokemon.CatchStatus === 'yes') {
            updateFilterShow(locPokemon.name, locPokemon.form_name, true);
          }
          if (selectedCatchStatus.includes('missing') && locPokemon.CatchStatus === 'no') {
            updateFilterShow(locPokemon.name, locPokemon.form_name, true);
          }
          if (selectedCatchStatus.includes('livingdex') && locPokemon.LivingDexStatus === 'yes') {
            updateFilterShow(locPokemon.name, locPokemon.form_name, true);
          }
          if (selectedCatchStatus.includes('shiny') && locPokemon.ShinyStatus === 'yes') {
            updateFilterShow(locPokemon.name, locPokemon.form_name, true);
          }
          else {
            updateFilterShow(locPokemon.name, locPokemon.form_name, false);
          }
        }
      }
    }
  };


  // Handle checkbox change
  const handleCheckboxChange = (type) => {
    if (type === 'All') {
      // If 'All' checkbox is changed, toggle its selection
      setSelectedStatus(selectedCatchStatus.includes('All') ? [] : ['All', 'Caught', 'Missing', 'LivingDex', 'Shiny']);
    }
    else {
      // If any other checkbox is changed, toggle its selection
      if (selectedCatchStatus.includes(type)) {
        setSelectedStatus(selectedCatchStatus.filter(selectedType => selectedType !== type));
      } else {
        setSelectedStatus([...selectedCatchStatus, type]);
      }

      // If 'All' checkbox was previously selected and any other checkbox is now deselected, unselect 'All'
      if (selectedCatchStatus.includes('All') && !selectedCatchStatus.includes(type)) {
        setSelectedStatus(selectedCatchStatus.filter(selectedType => selectedType !== 'All'));
      }
    }
  };

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    filterPokemonByCatchStatus(selectedCatchStatus);
    updateGridData(); // Call the updateGridData function passed from props
    // console.log(selectedTypes);
  }, [selectedCatchStatus]);


  return (
    <div>
      {/* Vertical dropdown menu with checkboxes */}
      <label>Catch Status</label>
      <div>
        <div onClick={toggleDropdown}>
          {isDropdownOpen ? '▲' : '▼'} Types
        </div>
        {isDropdownOpen && (
          <div style={{ flexDirection: 'column' }}>
            {['All','Caught', 'Missing', 'LivingDex', 'Shiny'].map(type => (
              <label key={type} style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  value={type}
                  checked={selectedCatchStatus.includes(type)}
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

