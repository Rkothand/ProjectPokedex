// src/App.js
import React, { useState } from 'react';
import DynamicGrid from './components/DynamicGrid.js';
import styled from '@emotion/styled';
import TypeFilter from './components/typeFilter.js'; // Update import
import CatchFilter from './components/catchFilter.js';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
`;

const StyledHeading = styled.h1`
  text-align: center;
  font-size: 100px;
  color: #e0e0e0;
  margin: 0;
  padding: 20px;
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const App = () => {
  const [forceUpdate, setForceUpdate] = useState(false);

  const updateGridData = () => {
    setForceUpdate(prevState => !prevState);
  };

  return (
    <StyledApp>
      <StyledHeading>Project Pokedex</StyledHeading>
      <FiltersContainer>
        <TypeFilter updateGridData={updateGridData} /> {/* Pass updateGridData function as prop */}
        <CatchFilter updateGridData={updateGridData}/>
      </FiltersContainer>
      <DynamicGrid key={forceUpdate} /> {/* Use key prop for force re-rendering */}
    </StyledApp>
  );
};

export default App;
