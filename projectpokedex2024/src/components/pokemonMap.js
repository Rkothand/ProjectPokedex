//ok so this file is pretty good
//very comprehensive such that it can be used for all the pokemon


import PokemonData from "../Database/PokemonData";

// JavaScript object list that will hold all the Pokemon data
let pokedexMappingInterface = [];
  for (const pokemonKey in PokemonData) {
    if (PokemonData.hasOwnProperty(pokemonKey)) {
      const pokemon = PokemonData[pokemonKey];

      pokedexMappingInterface.push({
        filtershow : true, // this is for the filter if it catches then display
        name: pokemon.name,
        id: pokemon.base_id,
        form_id: pokemon.form_id,
        genderdiffs: pokemon.gender, //options for gender diff
        gender: pokemon.gender[0],
        eggGroup: pokemon.egg_group,

        //catch status i want the buttons to interface with this
        CatchStatus: 'no',
        ShinyStatus: 'no',
        LivingDexStatus: 'no',

        types: pokemon.pokemon_type, // ((pokemon.pokemon_type).length === 2 ? pokemon.pokemon_type.join(', ') : pokemon.pokemon_type[0]),

        //image url we can edit for if there is an alrenate form image
        
        //interface with seperate buttons
        imageUrl: `img/pokemon/${String(pokemon.base_id).padStart(4, '0')}_${String(pokemon.form_id).padStart(3, '0')}_${String(pokemon.gender[0])}_n.png`,
        has_gigantamax: pokemon.has_gigantamax,
        is_mega: pokemon.is_mega,

        shinyImageUrl: `img/shiny-pokemon/${String(pokemon.base_id).padStart(4, '0')}_${String(pokemon.form_id).padStart(3, '0')}_${String(pokemon.gender[0])}_n.png`

      });
    }
  }

export{pokedexMappingInterface}

export function updateGenderDiffImgUrl(pokemonName, change) {//use this to change img display
  let locPokemon = pokedexMappingInterface[pokemonName];
  if (locPokemon.genderdiffs.length === 2){
    if (change === 'display male') {
      // locPokemon.imageUrl = `img/pokemon/${String(locPokemon.base_id).padStart(4, '0')}_${String(locPokemon.form_id).padStart(3, '0')}_${String(locPokemon.gender[1])}_n.png`;
      locPokemon.gender = locPokemon.genderdiffs[1]
    }
    else if (change === 'display female') {
      locPokemon.gender = locPokemon.genderdiffs[0]
      // locPokemon.imageUrl = `img/pokemon/${String(locPokemon.base_id).padStart(4, '0')}_${String(locPokemon.form_id).padStart(3, '0')}_${String(locPokemon.gender[0])}_n.png`;
    }
  }
}



export function updateCatchStatus(pokemonName, newStatus) { //use this in other files to update the catch status
  let locPokemon = pokedexMappingInterface[pokemonName];
  if (newStatus === 'no') {
    locPokemon.CatchStatus = 'no'; //if you don't have it you don't have it in the living dex or shiny dex 
    locPokemon.ShinyStatus = 'no';
    locPokemon.LivingDexStatus = 'no';
  }
  else if (newStatus === 'yes'){
    locPokemon.CatchStatus = 'yes';
  }
}

export function updateLivingDexStatus(pokemonName, newStatus) {//use this in other files to update the living dex status
  let locPokemon = pokedexMappingInterface[pokemonName];
  if (newStatus === 'yes') {
    locPokemon.LivingDexStatus = 'yes';
    locPokemon.CatchStatus = 'yes'; //if you have a living dex you have it in the dex now
  }
  else if (newStatus === 'no') {
    locPokemon.LivingDexStatus = 'no';
  }
}

export function updateShinyStatus(pokemonName, newStatus) {//use this in other files to update the shiny status
  let locPokemon = pokedexMappingInterface[pokemonName];
  if (newStatus === 'yes') {
    locPokemon.ShinyStatus = 'yes';
    locPokemon.CatchStatus = 'yes'; //if you have a shiny you have it in the dex now
  }
  else if (newStatus === 'no') {
    locPokemon.ShinyStatus = 'no';
  }
}



export function updateFilterShow(pokemonName, newStatus) {//use this in other files to update the living dex status
  let locPokemon = pokedexMappingInterface[pokemonName];
  if (newStatus === 'true') {
    locPokemon.filtershow = 'true';//show when filtered
  }
  else if (newStatus === 'false') {
    locPokemon.filtershow = 'false';//hide when filtered
  }
}

  // Update the catch status of the Pokemon with the given name
  // console.log('updateCatchStatus');
  // console.log(pokemonName);
  // console.log(newStatus);
  // console.log(pokemonMap);
  // console.log(pokemonMap[pokemonName]);
  // console.log(pokemonMap[pokemonName].CatchStatus);
  // pokemonMap[pokemonName].CatchStatus = newStatus;
  // console.log(pokemonMap[pokemonName].CatchStatus);

// Call the function to convert Pokemon data and populate pokemonMap
