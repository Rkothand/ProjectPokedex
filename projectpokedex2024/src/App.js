import logo from './logo.svg';
import './App.css';
import DynamicTable from './components/DynamicTable';


// src/App.js
import DynamicGrid from './components/DynamicGrid';
import styled from '@emotion/styled';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px; /* Add some padding if needed */
`;

const StyledHeading = styled.h1`
  text-align: center;
`;

const App = () => {
  return (
    <StyledApp>
      <StyledHeading>Pokedex</StyledHeading>
      <DynamicGrid />
    </StyledApp>
  );
};

export default App;

