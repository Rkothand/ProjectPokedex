import logo from './logo.svg';
import './App.css';
import DynamicTable from './components/DynamicTable';


// src/App.js
import DynamicGrid from './components/DynamicGrid';
import DropDownMenus from './components/TypeFilterDropDownMenus';
import styled from '@emotion/styled';
import TypeFilter from './components/TypeFilterDropDownMenus';
import CatchFilter from './components/catchDropDownMenus';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px; /* Add some padding if needed */
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
  gap: 20px; /* Adjust the gap as needed */
`;

const App = () => {
  return (
    <StyledApp>
      <StyledHeading>Project Pokedex</StyledHeading>
      <FiltersContainer>
        <TypeFilter />
        <CatchFilter />
      </FiltersContainer>
      <DynamicGrid />
    </StyledApp>
  );
};

export default App;

