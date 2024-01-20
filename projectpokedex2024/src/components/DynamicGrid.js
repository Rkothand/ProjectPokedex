// src/components/DynamicGrid.js

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const StyledItem = styled.div`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
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

const DynamicGrid = () => {
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    // Example data, replace it with your actual data or fetch from an API
    const mockData = [
      { id: 1, name: 'Item 1', description: 'Description 1', imageUrl:'img/pokemon/0001_000_mf_n.png' },
      { id: 2, name: 'Item 2', description: 'Description 2', imageUrl: 'img/pokemon/0001_000_mf_n.png' },
      { id: 3, name: 'Item 3', description: 'Description 3', imageUrl: 'img/pokemon/0001_000_mf_n.png' },
      // ... Add more items as needed
    ];

    setGridData(mockData);
  }, []);

  return (
    <StyledGrid>
      {gridData.map((item) => (
        <StyledItem key={item.id}>
          <StyledItemImage src={item.imageUrl} alt={`Image for ${item.name}`} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <StyledItemButton>Click me</StyledItemButton>
        </StyledItem>
      ))}
    </StyledGrid>
  );
};

export default DynamicGrid;
