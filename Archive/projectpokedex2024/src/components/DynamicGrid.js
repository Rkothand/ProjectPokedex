import React, { useEffect, useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { pokedexMappingInterface, updateFilterShow } from './pokemonMap';

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

const DynamicGrid = () => {
  const [gridData, setGridData] = useState([]);

  const updateGridData = useCallback(() => {
    setGridData(pokedexMappingInterface.filter(pokemon => pokemon.filtershow === true));
  }, []);

  useEffect(() => {
    updateGridData();
  }, [updateGridData]);


  return (
    <StyledGrid>
      {gridData.map(item => (
        <StyledItem key={item.id}>
          <StyledItemImage src={item.imageUrl} alt={`Image for ${item.name}`} />
          <h3>{item.name}</h3>
          <p>{item.types.join(', ')}</p>
        </StyledItem>
      ))}
    </StyledGrid>
  );
};

export default DynamicGrid;
