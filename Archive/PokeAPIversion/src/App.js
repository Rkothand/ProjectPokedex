import React, { useEffect, useState } from "react"
import axios from "axios"
import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType1, setPokemonType1] = useState("");
  const [pokemonType2, setPokemonType2] = useState("");

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType1(res.data.types[0].type.name);
      setPokemonType2(res.data.types[1].type.name);
      setPokemonData(toArray);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   getPokemon();
  // }, []);


  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="enter pokemon name"
          />
        </label>
      </form>
      {pokemonData.map((data) => {
        return (
          <div className="container">
            <img src={data.sprites["front_default"]} />
              <div className="divTable">

                <div className="divTableBody">
                <div className="divTableRow">
                  <div className="divTableCell">Type 1</div>
                  <div className="divTableCell">{pokemonType1}</div>
                </div>
                
                <div className="divTableRow">
                  <div className="divTableCell">Type 2</div>
                  <div className="divTableCell">{pokemonType2}</div>
                </div>

                <div className="divTableRow">
                  <div className="divTableCell">Average Height</div>
                  <div className="divTableCell">
                    {" "}
                    {Math.round(data.height * 3.9)} "
                  </div>
                </div>

                <div className="divTableRow">
                  <div className="divTableCell">Average Weight</div>
                  <div className="divTableCell"> 
                    {" "}
                    {Math.round(data.weight / 4.3)} lbs
                  </div>

                </div>
                {/* <div className="divTableRow">
                  <div className="divTableCell">Number Battled</div>
                  <div className="divTableCell">{data.game_indices.length}</div>
                </div> */}

                
              </div>

          </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
