//so this is a pokemon database that i retrieved from github to save sometime in compiling the information needed on generations 1-8
//This was retrieved prior to the release of pokemon scarlet and violet
//This is also my first large scale javascript project so this will be a fun learning expierience using Pokemon which is a series that I Love


export default {
    "bulbasaur": {//so we're gonna use bulbasaur,ivysaur,and venusaur as a main example since they contain most of the necessary data points but look for more unique traits in some other pokemon 
        "base_id": 1, //Pokedex Number
        "form_id": 0, //Form ID encompasses all Megas and Regional Variants numbers are by case
        "name": "Bulbasaur", //Obviously the name
        "pokemon_type": [ //Pokemon type 
            "grass", //Type 1
            "poison" //Type 2 if applicable
        ],
        "egg_group": [ //Egg Groups
            "monster", 
            "grass"
        ],
        "gender": [ //Gender Encompasses these areas mf = MaleFemale, mo=MaleOnly, fo=FemaleOnly, uk=Unkown
            "mf" 
        ],
        "gender_ratio": 1, //gender ratio types male:female ratio, 0=100:0, 1=87.5:12.5, 2=75:25, 3=50:50, 6=25:75, 7=12.5:87.5, 8=0:100
        "color": "green", //pokedex color
        "experience_group": "Medium Slow", //expierience group
        "generation": 1, //generation
        "evolution_ids": [ 
            [
                2, //evolves into base_id
                0 //evolves into form_id
            ]
        ]
    },
    "ivysaur": {
        "base_id": 2,
        "form_id": 0,
        "name": "Ivysaur",
        "pokemon_type": [
            "grass",
            "poison"
        ],
        "egg_group": [
            "monster",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                3,
                0
            ]
        ]
    },
    "venusaur": {
        "base_id": 3,
        "form_id": 0,
        "name": "Venusaur",
        "pokemon_type": [
            "grass",
            "poison"
        ],
        "egg_group": [
            "monster",
            "grass"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 1,
        "has_gigantamax": true, //this is the tag to show that there is a GMAX form
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 1
    },
    "venusaur-mega": {
        "base_id": 3,
        "form_id": 1,
        "name": "Mega Venusaur",
        "pokemon_type": [
            "grass",
            "poison"
        ],
        "egg_group": [
            "monster",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "is_mega": true, //this is a tag that shows that this is a mega form of a pokemon
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "charmander": {
        "base_id": 4,
        "form_id": 0,
        "name": "Charmander",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                5,
                0
            ]
        ]
    },
    "charmeleon": {
        "base_id": 5,
        "form_id": 0,
        "name": "Charmeleon",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                6,
                0
            ]
        ]
    },
    "charizard": {
        "base_id": 6,
        "form_id": 0,
        "name": "Charizard",
        "pokemon_type": [
            "fire",
            "flying"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "has_gigantamax": true,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 1
    },
    "charizard-mega-x": {
        "base_id": 6,
        "form_id": 1,
        "name": "Mega Charizard X",
        "pokemon_type": [
            "fire",
            "dragon"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "is_mega": true,
        "color": "black",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "charizard-mega-y": {
        "base_id": 6,
        "form_id": 2,
        "name": "Mega Charizard Y",
        "pokemon_type": [
            "fire",
            "flying"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "is_mega": true,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "squirtle": {
        "base_id": 7,
        "form_id": 0,
        "name": "Squirtle",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                8,
                0
            ]
        ]
    },
    "wartortle": {
        "base_id": 8,
        "form_id": 0,
        "name": "Wartortle",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                9,
                0
            ]
        ]
    },
    "blastoise": {
        "base_id": 9,
        "form_id": 0,
        "name": "Blastoise",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "has_gigantamax": true,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 1
    },
    "blastoise-mega": {
        "base_id": 9,
        "form_id": 1,
        "name": "Mega Blastoise",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "is_mega": true,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "caterpie": {
        "base_id": 10,
        "form_id": 0,
        "name": "Caterpie",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                11,
                0
            ]
        ]
    },
    "metapod": {
        "base_id": 11,
        "form_id": 0,
        "name": "Metapod",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                12,
                0
            ]
        ]
    },
    "butterfree": {
        "base_id": 12,
        "form_id": 0,
        "name": "Butterfree",
        "pokemon_type": [
            "bug",
            "flying"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "weedle": {
        "base_id": 13,
        "form_id": 0,
        "name": "Weedle",
        "pokemon_type": [
            "bug",
            "poison"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                14,
                0
            ]
        ]
    },
    "kakuna": {
        "base_id": 14,
        "form_id": 0,
        "name": "Kakuna",
        "pokemon_type": [
            "bug",
            "poison"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                15,
                0
            ]
        ]
    },
    "beedrill": {
        "base_id": 15,
        "form_id": 0,
        "name": "Beedrill",
        "pokemon_type": [
            "bug",
            "poison"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "beedrill-mega": {
        "base_id": 15,
        "form_id": 1,
        "name": "Mega Beedrill",
        "pokemon_type": [
            "bug",
            "poison"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "pidgey": {
        "base_id": 16,
        "form_id": 0,
        "name": "Pidgey",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                17,
                0
            ]
        ]
    },
    "pidgeotto": {
        "base_id": 17,
        "form_id": 0,
        "name": "Pidgeotto",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                18,
                0
            ]
        ]
    },
    "pidgeot": {
        "base_id": 18,
        "form_id": 0,
        "name": "Pidgeot",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 1
    },
    "pidgeot-mega": {
        "base_id": 18,
        "form_id": 1,
        "name": "Mega Pidgeot",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "rattata": {
        "base_id": 19,
        "form_id": 0,
        "name": "Rattata",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                20,
                0
            ]
        ]
    },
    "rattata-alola": {
        "base_id": 19,
        "form_id": 1,
        "name": "Alolan Rattata",
        "pokemon_type": [
            "dark",
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                20,
                1
            ]
        ]
    },
    "raticate": {
        "base_id": 20,
        "form_id": 0,
        "name": "Raticate",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "raticate-alola": {
        "base_id": 20,
        "form_id": 1,
        "name": "Alolan Raticate",
        "pokemon_type": [
            "dark",
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "spearow": {
        "base_id": 21,
        "form_id": 0,
        "name": "Spearow",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                22,
                0
            ]
        ]
    },
    "fearow": {
        "base_id": 22,
        "form_id": 0,
        "name": "Fearow",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "ekans": {
        "base_id": 23,
        "form_id": 0,
        "name": "Ekans",
        "pokemon_type": [
            "poison"
        ],
        "egg_group": [
            "field",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                24,
                0
            ]
        ]
    },
    "arbok": {
        "base_id": 24,
        "form_id": 0,
        "name": "Arbok",
        "pokemon_type": [
            "poison"
        ],
        "egg_group": [
            "field",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "pikachu": {
        "base_id": 25,
        "form_id": 0,
        "name": "Pikachu",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "field",
            "fairy"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                26,
                0
            ],
            [
                26,
                1
            ]
        ]
    },
    "raichu": {
        "base_id": 26,
        "form_id": 0,
        "name": "Raichu",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "field",
            "fairy"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "raichu-alola": {
        "base_id": 26,
        "form_id": 1,
        "name": "Alolan Raichu",
        "pokemon_type": [
            "electric",
            "psychic"
        ],
        "egg_group": [
            "field",
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "sandshrew": {
        "base_id": 27,
        "form_id": 0,
        "name": "Sandshrew",
        "pokemon_type": [
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                28,
                0
            ]
        ]
    },
    "sandshrew-alola": {
        "base_id": 27,
        "form_id": 1,
        "name": "Alolan Sandshrew",
        "pokemon_type": [
            "ice",
            "steel"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                28,
                1
            ]
        ]
    },
    "sandslash": {
        "base_id": 28,
        "form_id": 0,
        "name": "Sandslash",
        "pokemon_type": [
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "sandslash-alola": {
        "base_id": 28,
        "form_id": 1,
        "name": "Alolan Sandslash",
        "pokemon_type": [
            "ice",
            "steel"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "nidoran-f": {
        "base_id": 29,
        "form_id": 0,
        "name": "Nidoran\u00e2\u2122\u20ac",
        "pokemon_type": [
            "poison"
        ],
        "egg_group": [
            "monster",
            "field"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                30,
                0
            ]
        ]
    },
    "nidorina": {
        "base_id": 30,
        "form_id": 0,
        "name": "Nidorina",
        "pokemon_type": [
            "poison"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                31,
                0
            ]
        ]
    },
    "nidoqueen": {
        "base_id": 31,
        "form_id": 0,
        "name": "Nidoqueen",
        "pokemon_type": [
            "poison",
            "ground"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 1
    },
    "nidoran-m": {
        "base_id": 32,
        "form_id": 0,
        "name": "Nidoran\u00e2\u2122\u201a",
        "pokemon_type": [
            "poison"
        ],
        "egg_group": [
            "monster",
            "field"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                33,
                0
            ]
        ]
    },
    "nidorino": {
        "base_id": 33,
        "form_id": 0,
        "name": "Nidorino",
        "pokemon_type": [
            "poison"
        ],
        "egg_group": [
            "monster",
            "field"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                34,
                0
            ]
        ]
    },
    "nidoking": {
        "base_id": 34,
        "form_id": 0,
        "name": "Nidoking",
        "pokemon_type": [
            "poison",
            "ground"
        ],
        "egg_group": [
            "monster",
            "field"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 1
    },
    "clefairy": {
        "base_id": 35,
        "form_id": 0,
        "name": "Clefairy",
        "pokemon_type": [
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "normal"
            ]
        },
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "pink",
        "experience_group": "Fast",
        "generation": 1,
        "evolution_ids": [
            [
                36,
                0
            ]
        ]
    },
    "clefable": {
        "base_id": 36,
        "form_id": 0,
        "name": "Clefable",
        "pokemon_type": [
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "normal"
            ]
        },
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "pink",
        "experience_group": "Fast",
        "generation": 1
    },
    "vulpix": {
        "base_id": 37,
        "form_id": 0,
        "name": "Vulpix",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                38,
                0
            ]
        ]
    },
    "vulpix-alola": {
        "base_id": 37,
        "form_id": 1,
        "name": "Alolan Vulpix",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                38,
                1
            ]
        ]
    },
    "ninetales": {
        "base_id": 38,
        "form_id": 0,
        "name": "Ninetales",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "ninetales-alola": {
        "base_id": 38,
        "form_id": 1,
        "name": "Alolan Ninetales",
        "pokemon_type": [
            "ice",
            "fairy"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "jigglypuff": {
        "base_id": 39,
        "form_id": 0,
        "name": "Jigglypuff",
        "pokemon_type": [
            "normal",
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "normal"
            ]
        },
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "pink",
        "experience_group": "Fast",
        "generation": 1,
        "evolution_ids": [
            [
                40,
                0
            ]
        ]
    },
    "wigglytuff": {
        "base_id": 40,
        "form_id": 0,
        "name": "Wigglytuff",
        "pokemon_type": [
            "normal",
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "normal"
            ]
        },
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "pink",
        "experience_group": "Fast",
        "generation": 1
    },
    "zubat": {
        "base_id": 41,
        "form_id": 0,
        "name": "Zubat",
        "pokemon_type": [
            "poison",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                42,
                0
            ]
        ]
    },
    "golbat": {
        "base_id": 42,
        "form_id": 0,
        "name": "Golbat",
        "pokemon_type": [
            "poison",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                169,
                0
            ]
        ]
    },
    "oddish": {
        "base_id": 43,
        "form_id": 0,
        "name": "Oddish",
        "pokemon_type": [
            "grass",
            "poison"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                44,
                0
            ]
        ]
    },
    "gloom": {
        "base_id": 44,
        "form_id": 0,
        "name": "Gloom",
        "pokemon_type": [
            "grass",
            "poison"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                45,
                0
            ],
            [
                182,
                0
            ]
        ]
    },
    "vileplume": {
        "base_id": 45,
        "form_id": 0,
        "name": "Vileplume",
        "pokemon_type": [
            "grass",
            "poison"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 1
    },
    "paras": {
        "base_id": 46,
        "form_id": 0,
        "name": "Paras",
        "pokemon_type": [
            "bug",
            "grass"
        ],
        "egg_group": [
            "bug",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                47,
                0
            ]
        ]
    },
    "parasect": {
        "base_id": 47,
        "form_id": 0,
        "name": "Parasect",
        "pokemon_type": [
            "bug",
            "grass"
        ],
        "egg_group": [
            "bug",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "venonat": {
        "base_id": 48,
        "form_id": 0,
        "name": "Venonat",
        "pokemon_type": [
            "bug",
            "poison"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                49,
                0
            ]
        ]
    },
    "venomoth": {
        "base_id": 49,
        "form_id": 0,
        "name": "Venomoth",
        "pokemon_type": [
            "bug",
            "poison"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "diglett": {
        "base_id": 50,
        "form_id": 0,
        "name": "Diglett",
        "pokemon_type": [
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                51,
                0
            ]
        ]
    },
    "diglett-alola": {
        "base_id": 50,
        "form_id": 1,
        "name": "Alolan Diglett",
        "pokemon_type": [
            "ground",
            "steel"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                51,
                1
            ]
        ]
    },
    "dugtrio": {
        "base_id": 51,
        "form_id": 0,
        "name": "Dugtrio",
        "pokemon_type": [
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "dugtrio-alola": {
        "base_id": 51,
        "form_id": 1,
        "name": "Alolan Dugtrio",
        "pokemon_type": [
            "ground",
            "steel"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "meowth": {
        "base_id": 52,
        "form_id": 0,
        "name": "Meowth",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                53,
                0
            ]
        ]
    },
    "meowth-alola": {
        "base_id": 52,
        "form_id": 1,
        "name": "Alolan Meowth",
        "pokemon_type": [
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                53,
                1
            ]
        ]
    },
    "meowth-galar": {
        "base_id": 52,
        "form_id": 2,
        "name": "Galarian Meowth",
        "pokemon_type": [
            "steel"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                863,
                0
            ]
        ]
    },
    "persian": {
        "base_id": 53,
        "form_id": 0,
        "name": "Persian",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "persian-alola": {
        "base_id": 53,
        "form_id": 1,
        "name": "Alolan Persian",
        "pokemon_type": [
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "psyduck": {
        "base_id": 54,
        "form_id": 0,
        "name": "Psyduck",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                55,
                0
            ]
        ]
    },
    "golduck": {
        "base_id": 55,
        "form_id": 0,
        "name": "Golduck",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "mankey": {
        "base_id": 56,
        "form_id": 0,
        "name": "Mankey",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                57,
                0
            ]
        ]
    },
    "primeape": {
        "base_id": 57,
        "form_id": 0,
        "name": "Primeape",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "growlithe": {
        "base_id": 58,
        "form_id": 0,
        "name": "Growlithe",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 1,
        "evolution_ids": [
            [
                59,
                0
            ]
        ]
    },
    "growlithe-hisui": {
        "base_id": 58,
        "form_id": 1,
        "name": "Hisuian Growlithe",
        "pokemon_type": [
            "fire",
            "rock"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 8,
        "evolution_ids": [
            [
                59,
                1
            ]
        ]
    },
    "arcanine": {
        "base_id": 59,
        "form_id": 0,
        "name": "Arcanine",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 1
    },
    "arcanine-hisui": {
        "base_id": 59,
        "form_id": 1,
        "name": "Hisuian Arcanine",
        "pokemon_type": [
            "fire",
            "rock"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 8
    },
    "poliwag": {
        "base_id": 60,
        "form_id": 0,
        "name": "Poliwag",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                61,
                0
            ]
        ]
    },
    "poliwhirl": {
        "base_id": 61,
        "form_id": 0,
        "name": "Poliwhirl",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                62,
                0
            ],
            [
                186,
                0
            ]
        ]
    },
    "poliwrath": {
        "base_id": 62,
        "form_id": 0,
        "name": "Poliwrath",
        "pokemon_type": [
            "water",
            "fighting"
        ],
        "egg_group": [
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 1
    },
    "abra": {
        "base_id": 63,
        "form_id": 0,
        "name": "Abra",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                64,
                0
            ]
        ]
    },
    "kadabra": {
        "base_id": 64,
        "form_id": 0,
        "name": "Kadabra",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 2,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                65,
                0
            ]
        ]
    },
    "alakazam": {
        "base_id": 65,
        "form_id": 0,
        "name": "Alakazam",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 2,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 1
    },
    "alakazam-mega": {
        "base_id": 65,
        "form_id": 1,
        "name": "Mega Alakazam",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "is_mega": true,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "machop": {
        "base_id": 66,
        "form_id": 0,
        "name": "Machop",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                67,
                0
            ]
        ]
    },
    "machoke": {
        "base_id": 67,
        "form_id": 0,
        "name": "Machoke",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                68,
                0
            ]
        ]
    },
    "machamp": {
        "base_id": 68,
        "form_id": 0,
        "name": "Machamp",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "has_gigantamax": true,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 1
    },
    "bellsprout": {
        "base_id": 69,
        "form_id": 0,
        "name": "Bellsprout",
        "pokemon_type": [
            "grass",
            "poison"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                70,
                0
            ]
        ]
    },
    "weepinbell": {
        "base_id": 70,
        "form_id": 0,
        "name": "Weepinbell",
        "pokemon_type": [
            "grass",
            "poison"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                71,
                0
            ]
        ]
    },
    "victreebel": {
        "base_id": 71,
        "form_id": 0,
        "name": "Victreebel",
        "pokemon_type": [
            "grass",
            "poison"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 1
    },
    "tentacool": {
        "base_id": 72,
        "form_id": 0,
        "name": "Tentacool",
        "pokemon_type": [
            "water",
            "poison"
        ],
        "egg_group": [
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 1,
        "evolution_ids": [
            [
                73,
                0
            ]
        ]
    },
    "tentacruel": {
        "base_id": 73,
        "form_id": 0,
        "name": "Tentacruel",
        "pokemon_type": [
            "water",
            "poison"
        ],
        "egg_group": [
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 1
    },
    "geodude": {
        "base_id": 74,
        "form_id": 0,
        "name": "Geodude",
        "pokemon_type": [
            "rock",
            "ground"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                75,
                0
            ]
        ]
    },
    "geodude-alola": {
        "base_id": 74,
        "form_id": 1,
        "name": "Alolan Geodude",
        "pokemon_type": [
            "rock",
            "electric"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 7,
        "evolution_ids": [
            [
                75,
                1
            ]
        ]
    },
    "graveler": {
        "base_id": 75,
        "form_id": 0,
        "name": "Graveler",
        "pokemon_type": [
            "rock",
            "ground"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                76,
                0
            ]
        ]
    },
    "graveler-alola": {
        "base_id": 75,
        "form_id": 1,
        "name": "Alolan Graveler",
        "pokemon_type": [
            "rock",
            "electric"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 7,
        "evolution_ids": [
            [
                76,
                1
            ]
        ]
    },
    "golem": {
        "base_id": 76,
        "form_id": 0,
        "name": "Golem",
        "pokemon_type": [
            "rock",
            "ground"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 1
    },
    "golem-alola": {
        "base_id": 76,
        "form_id": 1,
        "name": "Alolan Golem",
        "pokemon_type": [
            "rock",
            "electric"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 7
    },
    "ponyta": {
        "base_id": 77,
        "form_id": 0,
        "name": "Ponyta",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                78,
                0
            ]
        ]
    },
    "ponyta-galar": {
        "base_id": 77,
        "form_id": 1,
        "name": "Galarian Ponyta",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                78,
                1
            ]
        ]
    },
    "rapidash": {
        "base_id": 78,
        "form_id": 0,
        "name": "Rapidash",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "rapidash-galar": {
        "base_id": 78,
        "form_id": 1,
        "name": "Galarian Rapidash",
        "pokemon_type": [
            "psychic",
            "fairy"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "slowpoke": {
        "base_id": 79,
        "form_id": 0,
        "name": "Slowpoke",
        "pokemon_type": [
            "water",
            "psychic"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                80,
                0
            ],
            [
                199,
                0
            ]
        ]
    },
    "slowpoke-galar": {
        "base_id": 79,
        "form_id": 1,
        "name": "Galarian Slowpoke",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                80,
                2
            ],
            [
                199,
                1
            ]
        ]
    },
    "slowbro": {
        "base_id": 80,
        "form_id": 0,
        "name": "Slowbro",
        "pokemon_type": [
            "water",
            "psychic"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "slowbro-mega": {
        "base_id": 80,
        "form_id": 1,
        "name": "Mega Slowbro",
        "pokemon_type": [
            "water",
            "psychic"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "slowbro-galar": {
        "base_id": 80,
        "form_id": 2,
        "name": "Galarian Slowbro",
        "pokemon_type": [
            "poison",
            "psychic"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "magnemite": {
        "base_id": 81,
        "form_id": 0,
        "name": "Magnemite",
        "pokemon_type": [
            "electric",
            "steel"
        ],
        "past_type": {
            "generation": 2,
            "pokemon_type": [
                "electric"
            ]
        },
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                82,
                0
            ]
        ]
    },
    "magneton": {
        "base_id": 82,
        "form_id": 0,
        "name": "Magneton",
        "pokemon_type": [
            "electric",
            "steel"
        ],
        "past_type": {
            "generation": 2,
            "pokemon_type": [
                "electric"
            ]
        },
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                462,
                0
            ]
        ]
    },
    "farfetchd": {
        "base_id": 83,
        "form_id": 0,
        "name": "Farfetch'd",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "farfetchd-galar": {
        "base_id": 83,
        "form_id": 1,
        "name": "Galarian Farfetch'd",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "flying",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                865,
                0
            ]
        ]
    },
    "doduo": {
        "base_id": 84,
        "form_id": 0,
        "name": "Doduo",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                85,
                0
            ]
        ]
    },
    "dodrio": {
        "base_id": 85,
        "form_id": 0,
        "name": "Dodrio",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "seel": {
        "base_id": 86,
        "form_id": 0,
        "name": "Seel",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                87,
                0
            ]
        ]
    },
    "dewgong": {
        "base_id": 87,
        "form_id": 0,
        "name": "Dewgong",
        "pokemon_type": [
            "water",
            "ice"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "grimer": {
        "base_id": 88,
        "form_id": 0,
        "name": "Grimer",
        "pokemon_type": [
            "poison"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                89,
                0
            ]
        ]
    },
    "grimer-alola": {
        "base_id": 88,
        "form_id": 1,
        "name": "Alolan Grimer",
        "pokemon_type": [
            "poison",
            "dark"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                89,
                1
            ]
        ]
    },
    "muk": {
        "base_id": 89,
        "form_id": 0,
        "name": "Muk",
        "pokemon_type": [
            "poison"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "muk-alola": {
        "base_id": 89,
        "form_id": 1,
        "name": "Alolan Muk",
        "pokemon_type": [
            "poison",
            "dark"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "shellder": {
        "base_id": 90,
        "form_id": 0,
        "name": "Shellder",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 1,
        "evolution_ids": [
            [
                91,
                0
            ]
        ]
    },
    "cloyster": {
        "base_id": 91,
        "form_id": 0,
        "name": "Cloyster",
        "pokemon_type": [
            "water",
            "ice"
        ],
        "egg_group": [
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 1
    },
    "gastly": {
        "base_id": 92,
        "form_id": 0,
        "name": "Gastly",
        "pokemon_type": [
            "ghost",
            "poison"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                93,
                0
            ]
        ]
    },
    "haunter": {
        "base_id": 93,
        "form_id": 0,
        "name": "Haunter",
        "pokemon_type": [
            "ghost",
            "poison"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 1,
        "evolution_ids": [
            [
                94,
                0
            ]
        ]
    },
    "gengar": {
        "base_id": 94,
        "form_id": 0,
        "name": "Gengar",
        "pokemon_type": [
            "ghost",
            "poison"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 1
    },
    "gengar-mega": {
        "base_id": 94,
        "form_id": 1,
        "name": "Mega Gengar",
        "pokemon_type": [
            "ghost",
            "poison"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "onix": {
        "base_id": 95,
        "form_id": 0,
        "name": "Onix",
        "pokemon_type": [
            "rock",
            "ground"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                208,
                0
            ]
        ]
    },
    "drowzee": {
        "base_id": 96,
        "form_id": 0,
        "name": "Drowzee",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                97,
                0
            ]
        ]
    },
    "hypno": {
        "base_id": 97,
        "form_id": 0,
        "name": "Hypno",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "krabby": {
        "base_id": 98,
        "form_id": 0,
        "name": "Krabby",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                99,
                0
            ]
        ]
    },
    "kingler": {
        "base_id": 99,
        "form_id": 0,
        "name": "Kingler",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "voltorb": {
        "base_id": 100,
        "form_id": 0,
        "name": "Voltorb",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                101,
                0
            ]
        ]
    },
    "voltorb-hisui": {
        "base_id": 100,
        "form_id": 1,
        "name": "Hisuian Voltorb",
        "pokemon_type": [
            "electric",
            "grass"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                101,
                1
            ]
        ]
    },
    "electrode": {
        "base_id": 101,
        "form_id": 0,
        "name": "Electrode",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "electrode-hisui": {
        "base_id": 101,
        "form_id": 1,
        "name": "Hisuian Electrode",
        "pokemon_type": [
            "electric",
            "grass"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "exeggcute": {
        "base_id": 102,
        "form_id": 0,
        "name": "Exeggcute",
        "pokemon_type": [
            "grass",
            "psychic"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Slow",
        "generation": 1,
        "evolution_ids": [
            [
                103,
                0
            ],
            [
                103,
                1
            ]
        ]
    },
    "exeggutor": {
        "base_id": 103,
        "form_id": 0,
        "name": "Exeggutor",
        "pokemon_type": [
            "grass",
            "psychic"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 1
    },
    "exeggutor-alola": {
        "base_id": 103,
        "form_id": 1,
        "name": "Alolan Exeggutor",
        "pokemon_type": [
            "grass",
            "dragon"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 7
    },
    "cubone": {
        "base_id": 104,
        "form_id": 0,
        "name": "Cubone",
        "pokemon_type": [
            "ground"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                105,
                0
            ],
            [
                105,
                1
            ]
        ]
    },
    "marowak": {
        "base_id": 105,
        "form_id": 0,
        "name": "Marowak",
        "pokemon_type": [
            "ground"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "marowak-alola": {
        "base_id": 105,
        "form_id": 1,
        "name": "Alolan Marowak",
        "pokemon_type": [
            "fire",
            "ghost"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "hitmonlee": {
        "base_id": 106,
        "form_id": 0,
        "name": "Hitmonlee",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "hitmonchan": {
        "base_id": 107,
        "form_id": 0,
        "name": "Hitmonchan",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "lickitung": {
        "base_id": 108,
        "form_id": 0,
        "name": "Lickitung",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                463,
                0
            ]
        ]
    },
    "koffing": {
        "base_id": 109,
        "form_id": 0,
        "name": "Koffing",
        "pokemon_type": [
            "poison"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                110,
                0
            ],
            [
                110,
                1
            ]
        ]
    },
    "weezing": {
        "base_id": 110,
        "form_id": 0,
        "name": "Weezing",
        "pokemon_type": [
            "poison"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "weezing-galar": {
        "base_id": 110,
        "form_id": 1,
        "name": "Galarian Weezing",
        "pokemon_type": [
            "poison",
            "fairy"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "rhyhorn": {
        "base_id": 111,
        "form_id": 0,
        "name": "Rhyhorn",
        "pokemon_type": [
            "ground",
            "rock"
        ],
        "egg_group": [
            "monster",
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 1,
        "evolution_ids": [
            [
                112,
                0
            ]
        ]
    },
    "rhydon": {
        "base_id": 112,
        "form_id": 0,
        "name": "Rhydon",
        "pokemon_type": [
            "ground",
            "rock"
        ],
        "egg_group": [
            "monster",
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 1,
        "evolution_ids": [
            [
                464,
                0
            ]
        ]
    },
    "chansey": {
        "base_id": 113,
        "form_id": 0,
        "name": "Chansey",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "pink",
        "experience_group": "Fast",
        "generation": 1,
        "evolution_ids": [
            [
                242,
                0
            ]
        ]
    },
    "tangela": {
        "base_id": 114,
        "form_id": 0,
        "name": "Tangela",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                465,
                0
            ]
        ]
    },
    "kangaskhan": {
        "base_id": 115,
        "form_id": 0,
        "name": "Kangaskhan",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "kangaskhan-mega": {
        "base_id": 115,
        "form_id": 1,
        "name": "Mega Kangaskhan",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "is_mega": true,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "horsea": {
        "base_id": 116,
        "form_id": 0,
        "name": "Horsea",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                117,
                0
            ]
        ]
    },
    "seadra": {
        "base_id": 117,
        "form_id": 0,
        "name": "Seadra",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                230,
                0
            ]
        ]
    },
    "goldeen": {
        "base_id": 118,
        "form_id": 0,
        "name": "Goldeen",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                119,
                0
            ]
        ]
    },
    "seaking": {
        "base_id": 119,
        "form_id": 0,
        "name": "Seaking",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "staryu": {
        "base_id": 120,
        "form_id": 0,
        "name": "Staryu",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_3"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 1,
        "evolution_ids": [
            [
                121,
                0
            ]
        ]
    },
    "starmie": {
        "base_id": 121,
        "form_id": 0,
        "name": "Starmie",
        "pokemon_type": [
            "water",
            "psychic"
        ],
        "egg_group": [
            "water_3"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 1
    },
    "mr-mime": {
        "base_id": 122,
        "form_id": 0,
        "name": "Mr. Mime",
        "pokemon_type": [
            "psychic",
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "psychic"
            ]
        },
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "mr-mime-galar": {
        "base_id": 122,
        "form_id": 1,
        "name": "Galarian Mr. Mime",
        "pokemon_type": [
            "ice",
            "psychic"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                866,
                0
            ]
        ]
    },
    "scyther": {
        "base_id": 123,
        "form_id": 0,
        "name": "Scyther",
        "pokemon_type": [
            "bug",
            "flying"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                212,
                0
            ],
            [
                900,
                0
            ]
        ]
    },
    "jynx": {
        "base_id": 124,
        "form_id": 0,
        "name": "Jynx",
        "pokemon_type": [
            "ice",
            "psychic"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "electabuzz": {
        "base_id": 125,
        "form_id": 0,
        "name": "Electabuzz",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                466,
                0
            ]
        ]
    },
    "magmar": {
        "base_id": 126,
        "form_id": 0,
        "name": "Magmar",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                467,
                0
            ]
        ]
    },
    "pinsir": {
        "base_id": 127,
        "form_id": 0,
        "name": "Pinsir",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 1
    },
    "pinsir-mega": {
        "base_id": 127,
        "form_id": 1,
        "name": "Mega Pinsir",
        "pokemon_type": [
            "bug",
            "flying"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 6
    },
    "tauros": {
        "base_id": 128,
        "form_id": 0,
        "name": "Tauros",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 1
    },
    "magikarp": {
        "base_id": 129,
        "form_id": 0,
        "name": "Magikarp",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_2",
            "dragon"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Slow",
        "generation": 1,
        "evolution_ids": [
            [
                130,
                0
            ]
        ]
    },
    "gyarados": {
        "base_id": 130,
        "form_id": 0,
        "name": "Gyarados",
        "pokemon_type": [
            "water",
            "flying"
        ],
        "egg_group": [
            "water_2",
            "dragon"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 1
    },
    "gyarados-mega": {
        "base_id": 130,
        "form_id": 1,
        "name": "Mega Gyarados",
        "pokemon_type": [
            "water",
            "dark"
        ],
        "egg_group": [
            "water_2",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 6
    },
    "lapras": {
        "base_id": 131,
        "form_id": 0,
        "name": "Lapras",
        "pokemon_type": [
            "water",
            "ice"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 1
    },
    "ditto": {
        "base_id": 132,
        "form_id": 0,
        "name": "Ditto",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "ditto"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "eevee": {
        "base_id": 133,
        "form_id": 0,
        "name": "Eevee",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 1,
        "has_gigantamax": true,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                134,
                0
            ],
            [
                135,
                0
            ],
            [
                136,
                0
            ],
            [
                196,
                0
            ],
            [
                197,
                0
            ],
            [
                470,
                0
            ],
            [
                471,
                0
            ],
            [
                700,
                0
            ]
        ]
    },
    "vaporeon": {
        "base_id": 134,
        "form_id": 0,
        "name": "Vaporeon",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "jolteon": {
        "base_id": 135,
        "form_id": 0,
        "name": "Jolteon",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "flareon": {
        "base_id": 136,
        "form_id": 0,
        "name": "Flareon",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "porygon": {
        "base_id": 137,
        "form_id": 0,
        "name": "Porygon",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                233,
                0
            ]
        ]
    },
    "omanyte": {
        "base_id": 138,
        "form_id": 0,
        "name": "Omanyte",
        "pokemon_type": [
            "rock",
            "water"
        ],
        "egg_group": [
            "water_1",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                139,
                0
            ]
        ]
    },
    "omastar": {
        "base_id": 139,
        "form_id": 0,
        "name": "Omastar",
        "pokemon_type": [
            "rock",
            "water"
        ],
        "egg_group": [
            "water_1",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "kabuto": {
        "base_id": 140,
        "form_id": 0,
        "name": "Kabuto",
        "pokemon_type": [
            "rock",
            "water"
        ],
        "egg_group": [
            "water_1",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1,
        "evolution_ids": [
            [
                141,
                0
            ]
        ]
    },
    "kabutops": {
        "base_id": 141,
        "form_id": 0,
        "name": "Kabutops",
        "pokemon_type": [
            "rock",
            "water"
        ],
        "egg_group": [
            "water_1",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 1
    },
    "aerodactyl": {
        "base_id": 142,
        "form_id": 0,
        "name": "Aerodactyl",
        "pokemon_type": [
            "rock",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 1
    },
    "aerodactyl-mega": {
        "base_id": 142,
        "form_id": 1,
        "name": "Mega Aerodactyl",
        "pokemon_type": [
            "rock",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "is_mega": true,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 6
    },
    "snorlax": {
        "base_id": 143,
        "form_id": 0,
        "name": "Snorlax",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "has_gigantamax": true,
        "color": "black",
        "experience_group": "Slow",
        "generation": 1
    },
    "articuno": {
        "base_id": 144,
        "form_id": 0,
        "name": "Articuno",
        "pokemon_type": [
            "ice",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 1
    },
    "articuno-galar": {
        "base_id": 144,
        "form_id": 1,
        "name": "Galarian Articuno",
        "pokemon_type": [
            "psychic",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 8
    },
    "zapdos": {
        "base_id": 145,
        "form_id": 0,
        "name": "Zapdos",
        "pokemon_type": [
            "electric",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 1
    },
    "zapdos-galar": {
        "base_id": 145,
        "form_id": 1,
        "name": "Galarian Zapdos",
        "pokemon_type": [
            "fighting",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 8
    },
    "moltres": {
        "base_id": 146,
        "form_id": 0,
        "name": "Moltres",
        "pokemon_type": [
            "fire",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 1
    },
    "moltres-galar": {
        "base_id": 146,
        "form_id": 1,
        "name": "Galarian Moltres",
        "pokemon_type": [
            "dark",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "red",
        "experience_group": "Slow",
        "generation": 8
    },
    "dratini": {
        "base_id": 147,
        "form_id": 0,
        "name": "Dratini",
        "pokemon_type": [
            "dragon"
        ],
        "egg_group": [
            "water_1",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 1,
        "evolution_ids": [
            [
                148,
                0
            ]
        ]
    },
    "dragonair": {
        "base_id": 148,
        "form_id": 0,
        "name": "Dragonair",
        "pokemon_type": [
            "dragon"
        ],
        "egg_group": [
            "water_1",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 1,
        "evolution_ids": [
            [
                149,
                0
            ]
        ]
    },
    "dragonite": {
        "base_id": 149,
        "form_id": 0,
        "name": "Dragonite",
        "pokemon_type": [
            "dragon",
            "flying"
        ],
        "egg_group": [
            "water_1",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 1
    },
    "mewtwo": {
        "base_id": 150,
        "form_id": 0,
        "name": "Mewtwo",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 1
    },
    "mewtwo-mega-x": {
        "base_id": 150,
        "form_id": 1,
        "name": "Mega Mewtwo X",
        "pokemon_type": [
            "psychic",
            "fighting"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "is_mega": true,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 6
    },
    "mewtwo-mega-y": {
        "base_id": 150,
        "form_id": 2,
        "name": "Mega Mewtwo Y",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "is_mega": true,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 6
    },
    "mew": {
        "base_id": 151,
        "form_id": 0,
        "name": "Mew",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "pink",
        "experience_group": "Medium Slow",
        "generation": 1
    },
    "chikorita": {
        "base_id": 152,
        "form_id": 0,
        "name": "Chikorita",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "monster",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 2,
        "evolution_ids": [
            [
                153,
                0
            ]
        ]
    },
    "bayleef": {
        "base_id": 153,
        "form_id": 0,
        "name": "Bayleef",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "monster",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 2,
        "evolution_ids": [
            [
                154,
                0
            ]
        ]
    },
    "meganium": {
        "base_id": 154,
        "form_id": 0,
        "name": "Meganium",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "monster",
            "grass"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 2
    },
    "cyndaquil": {
        "base_id": 155,
        "form_id": 0,
        "name": "Cyndaquil",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "yellow",
        "experience_group": "Medium Slow",
        "generation": 2,
        "evolution_ids": [
            [
                156,
                0
            ]
        ]
    },
    "quilava": {
        "base_id": 156,
        "form_id": 0,
        "name": "Quilava",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "yellow",
        "experience_group": "Medium Slow",
        "generation": 2,
        "evolution_ids": [
            [
                157,
                0
            ],
            [
                157,
                1
            ]
        ]
    },
    "typhlosion": {
        "base_id": 157,
        "form_id": 0,
        "name": "Typhlosion",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "yellow",
        "experience_group": "Medium Slow",
        "generation": 2
    },
    "typhlosion-hisui": {
        "base_id": 157,
        "form_id": 1,
        "name": "Hisuian Typhlosion",
        "pokemon_type": [
            "fire",
            "ghost"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "yellow",
        "experience_group": "Medium Slow",
        "generation": 8
    },
    "totodile": {
        "base_id": 158,
        "form_id": 0,
        "name": "Totodile",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 2,
        "evolution_ids": [
            [
                159,
                0
            ]
        ]
    },
    "croconaw": {
        "base_id": 159,
        "form_id": 0,
        "name": "Croconaw",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 2,
        "evolution_ids": [
            [
                160,
                0
            ]
        ]
    },
    "feraligatr": {
        "base_id": 160,
        "form_id": 0,
        "name": "Feraligatr",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 2
    },
    "sentret": {
        "base_id": 161,
        "form_id": 0,
        "name": "Sentret",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 2,
        "evolution_ids": [
            [
                162,
                0
            ]
        ]
    },
    "furret": {
        "base_id": 162,
        "form_id": 0,
        "name": "Furret",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "hoothoot": {
        "base_id": 163,
        "form_id": 0,
        "name": "Hoothoot",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 2,
        "evolution_ids": [
            [
                164,
                0
            ]
        ]
    },
    "noctowl": {
        "base_id": 164,
        "form_id": 0,
        "name": "Noctowl",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "ledyba": {
        "base_id": 165,
        "form_id": 0,
        "name": "Ledyba",
        "pokemon_type": [
            "bug",
            "flying"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Fast",
        "generation": 2,
        "evolution_ids": [
            [
                166,
                0
            ]
        ]
    },
    "ledian": {
        "base_id": 166,
        "form_id": 0,
        "name": "Ledian",
        "pokemon_type": [
            "bug",
            "flying"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Fast",
        "generation": 2
    },
    "spinarak": {
        "base_id": 167,
        "form_id": 0,
        "name": "Spinarak",
        "pokemon_type": [
            "bug",
            "poison"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Fast",
        "generation": 2,
        "evolution_ids": [
            [
                168,
                0
            ]
        ]
    },
    "ariados": {
        "base_id": 168,
        "form_id": 0,
        "name": "Ariados",
        "pokemon_type": [
            "bug",
            "poison"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Fast",
        "generation": 2
    },
    "crobat": {
        "base_id": 169,
        "form_id": 0,
        "name": "Crobat",
        "pokemon_type": [
            "poison",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "chinchou": {
        "base_id": 170,
        "form_id": 0,
        "name": "Chinchou",
        "pokemon_type": [
            "water",
            "electric"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 2,
        "evolution_ids": [
            [
                171,
                0
            ]
        ]
    },
    "lanturn": {
        "base_id": 171,
        "form_id": 0,
        "name": "Lanturn",
        "pokemon_type": [
            "water",
            "electric"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 2
    },
    "pichu": {
        "base_id": 172,
        "form_id": 0,
        "name": "Pichu",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_baby": true,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 2,
        "evolution_ids": [
            [
                25,
                0
            ]
        ]
    },
    "cleffa": {
        "base_id": 173,
        "form_id": 0,
        "name": "Cleffa",
        "pokemon_type": [
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "normal"
            ]
        },
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "is_baby": true,
        "color": "pink",
        "experience_group": "Fast",
        "generation": 2,
        "evolution_ids": [
            [
                35,
                0
            ]
        ]
    },
    "igglybuff": {
        "base_id": 174,
        "form_id": 0,
        "name": "Igglybuff",
        "pokemon_type": [
            "normal",
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "normal"
            ]
        },
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "is_baby": true,
        "color": "pink",
        "experience_group": "Fast",
        "generation": 2,
        "evolution_ids": [
            [
                39,
                0
            ]
        ]
    },
    "togepi": {
        "base_id": 175,
        "form_id": 0,
        "name": "Togepi",
        "pokemon_type": [
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "normal"
            ]
        },
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "is_baby": true,
        "color": "white",
        "experience_group": "Fast",
        "generation": 2,
        "evolution_ids": [
            [
                176,
                0
            ]
        ]
    },
    "togetic": {
        "base_id": 176,
        "form_id": 0,
        "name": "Togetic",
        "pokemon_type": [
            "fairy",
            "flying"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "normal",
                "flying"
            ]
        },
        "egg_group": [
            "flying",
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "white",
        "experience_group": "Fast",
        "generation": 2,
        "evolution_ids": [
            [
                468,
                0
            ]
        ]
    },
    "natu": {
        "base_id": 177,
        "form_id": 0,
        "name": "Natu",
        "pokemon_type": [
            "psychic",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 2,
        "evolution_ids": [
            [
                178,
                0
            ]
        ]
    },
    "xatu": {
        "base_id": 178,
        "form_id": 0,
        "name": "Xatu",
        "pokemon_type": [
            "psychic",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "mareep": {
        "base_id": 179,
        "form_id": 0,
        "name": "Mareep",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "monster",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Slow",
        "generation": 2,
        "evolution_ids": [
            [
                180,
                0
            ]
        ]
    },
    "flaaffy": {
        "base_id": 180,
        "form_id": 0,
        "name": "Flaaffy",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "monster",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Slow",
        "generation": 2,
        "evolution_ids": [
            [
                181,
                0
            ]
        ]
    },
    "ampharos": {
        "base_id": 181,
        "form_id": 0,
        "name": "Ampharos",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "monster",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Slow",
        "generation": 2
    },
    "ampharos-mega": {
        "base_id": 181,
        "form_id": 1,
        "name": "Mega Ampharos",
        "pokemon_type": [
            "electric",
            "dragon"
        ],
        "egg_group": [
            "monster",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "yellow",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "bellossom": {
        "base_id": 182,
        "form_id": 0,
        "name": "Bellossom",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 2
    },
    "marill": {
        "base_id": 183,
        "form_id": 0,
        "name": "Marill",
        "pokemon_type": [
            "water",
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "water"
            ]
        },
        "egg_group": [
            "water_1",
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Fast",
        "generation": 2,
        "evolution_ids": [
            [
                184,
                0
            ]
        ]
    },
    "azumarill": {
        "base_id": 184,
        "form_id": 0,
        "name": "Azumarill",
        "pokemon_type": [
            "water",
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "water"
            ]
        },
        "egg_group": [
            "water_1",
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Fast",
        "generation": 2
    },
    "sudowoodo": {
        "base_id": 185,
        "form_id": 0,
        "name": "Sudowoodo",
        "pokemon_type": [
            "rock"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "politoed": {
        "base_id": 186,
        "form_id": 0,
        "name": "Politoed",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 2
    },
    "hoppip": {
        "base_id": 187,
        "form_id": 0,
        "name": "Hoppip",
        "pokemon_type": [
            "grass",
            "flying"
        ],
        "egg_group": [
            "fairy",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Slow",
        "generation": 2,
        "evolution_ids": [
            [
                188,
                0
            ]
        ]
    },
    "skiploom": {
        "base_id": 188,
        "form_id": 0,
        "name": "Skiploom",
        "pokemon_type": [
            "grass",
            "flying"
        ],
        "egg_group": [
            "fairy",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 2,
        "evolution_ids": [
            [
                189,
                0
            ]
        ]
    },
    "jumpluff": {
        "base_id": 189,
        "form_id": 0,
        "name": "Jumpluff",
        "pokemon_type": [
            "grass",
            "flying"
        ],
        "egg_group": [
            "fairy",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 2
    },
    "aipom": {
        "base_id": 190,
        "form_id": 0,
        "name": "Aipom",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Fast",
        "generation": 2,
        "evolution_ids": [
            [
                424,
                0
            ]
        ]
    },
    "sunkern": {
        "base_id": 191,
        "form_id": 0,
        "name": "Sunkern",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Slow",
        "generation": 2,
        "evolution_ids": [
            [
                192,
                0
            ]
        ]
    },
    "sunflora": {
        "base_id": 192,
        "form_id": 0,
        "name": "Sunflora",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Slow",
        "generation": 2
    },
    "yanma": {
        "base_id": 193,
        "form_id": 0,
        "name": "Yanma",
        "pokemon_type": [
            "bug",
            "flying"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 2,
        "evolution_ids": [
            [
                469,
                0
            ]
        ]
    },
    "wooper": {
        "base_id": 194,
        "form_id": 0,
        "name": "Wooper",
        "pokemon_type": [
            "water",
            "ground"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 2,
        "evolution_ids": [
            [
                195,
                0
            ]
        ]
    },
    "quagsire": {
        "base_id": 195,
        "form_id": 0,
        "name": "Quagsire",
        "pokemon_type": [
            "water",
            "ground"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "espeon": {
        "base_id": 196,
        "form_id": 0,
        "name": "Espeon",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "umbreon": {
        "base_id": 197,
        "form_id": 0,
        "name": "Umbreon",
        "pokemon_type": [
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "murkrow": {
        "base_id": 198,
        "form_id": 0,
        "name": "Murkrow",
        "pokemon_type": [
            "dark",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Slow",
        "generation": 2,
        "evolution_ids": [
            [
                430,
                0
            ]
        ]
    },
    "slowking": {
        "base_id": 199,
        "form_id": 0,
        "name": "Slowking",
        "pokemon_type": [
            "water",
            "psychic"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "slowking-galar": {
        "base_id": 199,
        "form_id": 1,
        "name": "Galarian Slowking",
        "pokemon_type": [
            "poison",
            "psychic"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "misdreavus": {
        "base_id": 200,
        "form_id": 0,
        "name": "Misdreavus",
        "pokemon_type": [
            "ghost"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Fast",
        "generation": 2,
        "evolution_ids": [
            [
                429,
                0
            ]
        ]
    },
    "unown": {
        "base_id": 201,
        "form_id": 0,
        "name": "Unown",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "wobbuffet": {
        "base_id": 202,
        "form_id": 0,
        "name": "Wobbuffet",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "girafarig": {
        "base_id": 203,
        "form_id": 0,
        "name": "Girafarig",
        "pokemon_type": [
            "normal",
            "psychic"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "pineco": {
        "base_id": 204,
        "form_id": 0,
        "name": "Pineco",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 2,
        "evolution_ids": [
            [
                205,
                0
            ]
        ]
    },
    "forretress": {
        "base_id": 205,
        "form_id": 0,
        "name": "Forretress",
        "pokemon_type": [
            "bug",
            "steel"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "dunsparce": {
        "base_id": 206,
        "form_id": 0,
        "name": "Dunsparce",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "gligar": {
        "base_id": 207,
        "form_id": 0,
        "name": "Gligar",
        "pokemon_type": [
            "ground",
            "flying"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 2,
        "evolution_ids": [
            [
                472,
                0
            ]
        ]
    },
    "steelix": {
        "base_id": 208,
        "form_id": 0,
        "name": "Steelix",
        "pokemon_type": [
            "steel",
            "ground"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "steelix-mega": {
        "base_id": 208,
        "form_id": 1,
        "name": "Mega Steelix",
        "pokemon_type": [
            "steel",
            "ground"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "snubbull": {
        "base_id": 209,
        "form_id": 0,
        "name": "Snubbull",
        "pokemon_type": [
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "normal"
            ]
        },
        "egg_group": [
            "field",
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "pink",
        "experience_group": "Fast",
        "generation": 2,
        "evolution_ids": [
            [
                210,
                0
            ]
        ]
    },
    "granbull": {
        "base_id": 210,
        "form_id": 0,
        "name": "Granbull",
        "pokemon_type": [
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "normal"
            ]
        },
        "egg_group": [
            "field",
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "purple",
        "experience_group": "Fast",
        "generation": 2
    },
    "qwilfish": {
        "base_id": 211,
        "form_id": 0,
        "name": "Qwilfish",
        "pokemon_type": [
            "water",
            "poison"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "qwilfish-hisui": {
        "base_id": 211,
        "form_id": 1,
        "name": "Hisuian Qwilfish",
        "pokemon_type": [
            "dark",
            "poison"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                904,
                0
            ]
        ]
    },
    "scizor": {
        "base_id": 212,
        "form_id": 0,
        "name": "Scizor",
        "pokemon_type": [
            "bug",
            "steel"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "scizor-mega": {
        "base_id": 212,
        "form_id": 1,
        "name": "Mega Scizor",
        "pokemon_type": [
            "bug",
            "steel"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "shuckle": {
        "base_id": 213,
        "form_id": 0,
        "name": "Shuckle",
        "pokemon_type": [
            "bug",
            "rock"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Slow",
        "generation": 2
    },
    "heracross": {
        "base_id": 214,
        "form_id": 0,
        "name": "Heracross",
        "pokemon_type": [
            "bug",
            "fighting"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 2
    },
    "heracross-mega": {
        "base_id": 214,
        "form_id": 1,
        "name": "Mega Heracross",
        "pokemon_type": [
            "bug",
            "fighting"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 6
    },
    "sneasel": {
        "base_id": 215,
        "form_id": 0,
        "name": "Sneasel",
        "pokemon_type": [
            "dark",
            "ice"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Slow",
        "generation": 2,
        "evolution_ids": [
            [
                461,
                0
            ]
        ]
    },
    "sneasel-hisui": {
        "base_id": 215,
        "form_id": 1,
        "name": "Hisuian Sneasel",
        "pokemon_type": [
            "fighting",
            "poison"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 8,
        "evolution_ids": [
            [
                903,
                0
            ]
        ]
    },
    "teddiursa": {
        "base_id": 216,
        "form_id": 0,
        "name": "Teddiursa",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 2,
        "evolution_ids": [
            [
                217,
                0
            ]
        ]
    },
    "ursaring": {
        "base_id": 217,
        "form_id": 0,
        "name": "Ursaring",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 2,
        "evolution_ids": [
            [
                901,
                0
            ]
        ]
    },
    "slugma": {
        "base_id": 218,
        "form_id": 0,
        "name": "Slugma",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 2,
        "evolution_ids": [
            [
                219,
                0
            ]
        ]
    },
    "magcargo": {
        "base_id": 219,
        "form_id": 0,
        "name": "Magcargo",
        "pokemon_type": [
            "fire",
            "rock"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "swinub": {
        "base_id": 220,
        "form_id": 0,
        "name": "Swinub",
        "pokemon_type": [
            "ice",
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 2,
        "evolution_ids": [
            [
                221,
                0
            ]
        ]
    },
    "piloswine": {
        "base_id": 221,
        "form_id": 0,
        "name": "Piloswine",
        "pokemon_type": [
            "ice",
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 2,
        "evolution_ids": [
            [
                473,
                0
            ]
        ]
    },
    "corsola": {
        "base_id": 222,
        "form_id": 0,
        "name": "Corsola",
        "pokemon_type": [
            "water",
            "rock"
        ],
        "egg_group": [
            "water_1",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "pink",
        "experience_group": "Fast",
        "generation": 2
    },
    "corsola-galar": {
        "base_id": 222,
        "form_id": 1,
        "name": "Galarian Corsola",
        "pokemon_type": [
            "ghost"
        ],
        "egg_group": [
            "water_1",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "white",
        "experience_group": "Fast",
        "generation": 8,
        "evolution_ids": [
            [
                864,
                0
            ]
        ]
    },
    "remoraid": {
        "base_id": 223,
        "form_id": 0,
        "name": "Remoraid",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 2,
        "evolution_ids": [
            [
                224,
                0
            ]
        ]
    },
    "octillery": {
        "base_id": 224,
        "form_id": 0,
        "name": "Octillery",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "water_2"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "delibird": {
        "base_id": 225,
        "form_id": 0,
        "name": "Delibird",
        "pokemon_type": [
            "ice",
            "flying"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Fast",
        "generation": 2
    },
    "mantine": {
        "base_id": 226,
        "form_id": 0,
        "name": "Mantine",
        "pokemon_type": [
            "water",
            "flying"
        ],
        "egg_group": [
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 2
    },
    "skarmory": {
        "base_id": 227,
        "form_id": 0,
        "name": "Skarmory",
        "pokemon_type": [
            "steel",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 2
    },
    "houndour": {
        "base_id": 228,
        "form_id": 0,
        "name": "Houndour",
        "pokemon_type": [
            "dark",
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Slow",
        "generation": 2,
        "evolution_ids": [
            [
                229,
                0
            ]
        ]
    },
    "houndoom": {
        "base_id": 229,
        "form_id": 0,
        "name": "Houndoom",
        "pokemon_type": [
            "dark",
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Slow",
        "generation": 2
    },
    "houndoom-mega": {
        "base_id": 229,
        "form_id": 1,
        "name": "Mega Houndoom",
        "pokemon_type": [
            "dark",
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "black",
        "experience_group": "Slow",
        "generation": 6
    },
    "kingdra": {
        "base_id": 230,
        "form_id": 0,
        "name": "Kingdra",
        "pokemon_type": [
            "water",
            "dragon"
        ],
        "egg_group": [
            "water_1",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "phanpy": {
        "base_id": 231,
        "form_id": 0,
        "name": "Phanpy",
        "pokemon_type": [
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 2,
        "evolution_ids": [
            [
                232,
                0
            ]
        ]
    },
    "donphan": {
        "base_id": 232,
        "form_id": 0,
        "name": "Donphan",
        "pokemon_type": [
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "porygon2": {
        "base_id": 233,
        "form_id": 0,
        "name": "Porygon2",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 2,
        "evolution_ids": [
            [
                474,
                0
            ]
        ]
    },
    "stantler": {
        "base_id": 234,
        "form_id": 0,
        "name": "Stantler",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 2,
        "evolution_ids": [
            [
                899,
                0
            ]
        ]
    },
    "smeargle": {
        "base_id": 235,
        "form_id": 0,
        "name": "Smeargle",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Fast",
        "generation": 2
    },
    "tyrogue": {
        "base_id": 236,
        "form_id": 0,
        "name": "Tyrogue",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "is_baby": true,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 2,
        "evolution_ids": [
            [
                106,
                0
            ],
            [
                107,
                0
            ],
            [
                237,
                0
            ]
        ]
    },
    "hitmontop": {
        "base_id": 237,
        "form_id": 0,
        "name": "Hitmontop",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 2
    },
    "smoochum": {
        "base_id": 238,
        "form_id": 0,
        "name": "Smoochum",
        "pokemon_type": [
            "ice",
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "is_baby": true,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 2,
        "evolution_ids": [
            [
                124,
                0
            ]
        ]
    },
    "elekid": {
        "base_id": 239,
        "form_id": 0,
        "name": "Elekid",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "is_baby": true,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 2,
        "evolution_ids": [
            [
                125,
                0
            ]
        ]
    },
    "magby": {
        "base_id": 240,
        "form_id": 0,
        "name": "Magby",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "is_baby": true,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 2,
        "evolution_ids": [
            [
                126,
                0
            ]
        ]
    },
    "miltank": {
        "base_id": 241,
        "form_id": 0,
        "name": "Miltank",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "pink",
        "experience_group": "Slow",
        "generation": 2
    },
    "blissey": {
        "base_id": 242,
        "form_id": 0,
        "name": "Blissey",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "pink",
        "experience_group": "Fast",
        "generation": 2
    },
    "raikou": {
        "base_id": 243,
        "form_id": 0,
        "name": "Raikou",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 2
    },
    "entei": {
        "base_id": 244,
        "form_id": 0,
        "name": "Entei",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 2
    },
    "suicune": {
        "base_id": 245,
        "form_id": 0,
        "name": "Suicune",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 2
    },
    "larvitar": {
        "base_id": 246,
        "form_id": 0,
        "name": "Larvitar",
        "pokemon_type": [
            "rock",
            "ground"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Slow",
        "generation": 2,
        "evolution_ids": [
            [
                247,
                0
            ]
        ]
    },
    "pupitar": {
        "base_id": 247,
        "form_id": 0,
        "name": "Pupitar",
        "pokemon_type": [
            "rock",
            "ground"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 2,
        "evolution_ids": [
            [
                248,
                0
            ]
        ]
    },
    "tyranitar": {
        "base_id": 248,
        "form_id": 0,
        "name": "Tyranitar",
        "pokemon_type": [
            "rock",
            "dark"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Slow",
        "generation": 2
    },
    "tyranitar-mega": {
        "base_id": 248,
        "form_id": 1,
        "name": "Mega Tyranitar",
        "pokemon_type": [
            "rock",
            "dark"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "green",
        "experience_group": "Slow",
        "generation": 6
    },
    "lugia": {
        "base_id": 249,
        "form_id": 0,
        "name": "Lugia",
        "pokemon_type": [
            "psychic",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "white",
        "experience_group": "Slow",
        "generation": 2
    },
    "ho-oh": {
        "base_id": 250,
        "form_id": 0,
        "name": "Ho-Oh",
        "pokemon_type": [
            "fire",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "red",
        "experience_group": "Slow",
        "generation": 2
    },
    "celebi": {
        "base_id": 251,
        "form_id": 0,
        "name": "Celebi",
        "pokemon_type": [
            "psychic",
            "grass"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 2
    },
    "treecko": {
        "base_id": 252,
        "form_id": 0,
        "name": "Treecko",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                253,
                0
            ]
        ]
    },
    "grovyle": {
        "base_id": 253,
        "form_id": 0,
        "name": "Grovyle",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                254,
                0
            ]
        ]
    },
    "sceptile": {
        "base_id": 254,
        "form_id": 0,
        "name": "Sceptile",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 3
    },
    "sceptile-mega": {
        "base_id": 254,
        "form_id": 1,
        "name": "Mega Sceptile",
        "pokemon_type": [
            "grass",
            "dragon"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "is_mega": true,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "torchic": {
        "base_id": 255,
        "form_id": 0,
        "name": "Torchic",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                256,
                0
            ]
        ]
    },
    "combusken": {
        "base_id": 256,
        "form_id": 0,
        "name": "Combusken",
        "pokemon_type": [
            "fire",
            "fighting"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                257,
                0
            ]
        ]
    },
    "blaziken": {
        "base_id": 257,
        "form_id": 0,
        "name": "Blaziken",
        "pokemon_type": [
            "fire",
            "fighting"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 3
    },
    "blaziken-mega": {
        "base_id": 257,
        "form_id": 1,
        "name": "Mega Blaziken",
        "pokemon_type": [
            "fire",
            "fighting"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "is_mega": true,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "mudkip": {
        "base_id": 258,
        "form_id": 0,
        "name": "Mudkip",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                259,
                0
            ]
        ]
    },
    "marshtomp": {
        "base_id": 259,
        "form_id": 0,
        "name": "Marshtomp",
        "pokemon_type": [
            "water",
            "ground"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                260,
                0
            ]
        ]
    },
    "swampert": {
        "base_id": 260,
        "form_id": 0,
        "name": "Swampert",
        "pokemon_type": [
            "water",
            "ground"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 3
    },
    "swampert-mega": {
        "base_id": 260,
        "form_id": 1,
        "name": "Mega Swampert",
        "pokemon_type": [
            "water",
            "ground"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "is_mega": true,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "poochyena": {
        "base_id": 261,
        "form_id": 0,
        "name": "Poochyena",
        "pokemon_type": [
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 3,
        "evolution_ids": [
            [
                262,
                0
            ]
        ]
    },
    "mightyena": {
        "base_id": 262,
        "form_id": 0,
        "name": "Mightyena",
        "pokemon_type": [
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 3
    },
    "zigzagoon": {
        "base_id": 263,
        "form_id": 0,
        "name": "Zigzagoon",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 3,
        "evolution_ids": [
            [
                264,
                0
            ]
        ]
    },
    "zigzagoon-galar": {
        "base_id": 263,
        "form_id": 1,
        "name": "Galarian Zigzagoon",
        "pokemon_type": [
            "dark",
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                264,
                1
            ]
        ]
    },
    "linoone": {
        "base_id": 264,
        "form_id": 0,
        "name": "Linoone",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 3
    },
    "linoone-galar": {
        "base_id": 264,
        "form_id": 1,
        "name": "Galarian Linoone",
        "pokemon_type": [
            "dark",
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                862,
                0
            ]
        ]
    },
    "wurmple": {
        "base_id": 265,
        "form_id": 0,
        "name": "Wurmple",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 3,
        "evolution_ids": [
            [
                266,
                0
            ],
            [
                268,
                0
            ]
        ]
    },
    "silcoon": {
        "base_id": 266,
        "form_id": 0,
        "name": "Silcoon",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 3,
        "evolution_ids": [
            [
                267,
                0
            ]
        ]
    },
    "beautifly": {
        "base_id": 267,
        "form_id": 0,
        "name": "Beautifly",
        "pokemon_type": [
            "bug",
            "flying"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 3
    },
    "cascoon": {
        "base_id": 268,
        "form_id": 0,
        "name": "Cascoon",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 3,
        "evolution_ids": [
            [
                269,
                0
            ]
        ]
    },
    "dustox": {
        "base_id": 269,
        "form_id": 0,
        "name": "Dustox",
        "pokemon_type": [
            "bug",
            "poison"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 3
    },
    "lotad": {
        "base_id": 270,
        "form_id": 0,
        "name": "Lotad",
        "pokemon_type": [
            "water",
            "grass"
        ],
        "egg_group": [
            "water_1",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                271,
                0
            ]
        ]
    },
    "lombre": {
        "base_id": 271,
        "form_id": 0,
        "name": "Lombre",
        "pokemon_type": [
            "water",
            "grass"
        ],
        "egg_group": [
            "water_1",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                272,
                0
            ]
        ]
    },
    "ludicolo": {
        "base_id": 272,
        "form_id": 0,
        "name": "Ludicolo",
        "pokemon_type": [
            "water",
            "grass"
        ],
        "egg_group": [
            "water_1",
            "grass"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 3
    },
    "seedot": {
        "base_id": 273,
        "form_id": 0,
        "name": "Seedot",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "field",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                274,
                0
            ]
        ]
    },
    "nuzleaf": {
        "base_id": 274,
        "form_id": 0,
        "name": "Nuzleaf",
        "pokemon_type": [
            "grass",
            "dark"
        ],
        "egg_group": [
            "field",
            "grass"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                275,
                0
            ]
        ]
    },
    "shiftry": {
        "base_id": 275,
        "form_id": 0,
        "name": "Shiftry",
        "pokemon_type": [
            "grass",
            "dark"
        ],
        "egg_group": [
            "field",
            "grass"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 3
    },
    "taillow": {
        "base_id": 276,
        "form_id": 0,
        "name": "Taillow",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                277,
                0
            ]
        ]
    },
    "swellow": {
        "base_id": 277,
        "form_id": 0,
        "name": "Swellow",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 3
    },
    "wingull": {
        "base_id": 278,
        "form_id": 0,
        "name": "Wingull",
        "pokemon_type": [
            "water",
            "flying"
        ],
        "egg_group": [
            "water_1",
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 3,
        "evolution_ids": [
            [
                279,
                0
            ]
        ]
    },
    "pelipper": {
        "base_id": 279,
        "form_id": 0,
        "name": "Pelipper",
        "pokemon_type": [
            "water",
            "flying"
        ],
        "egg_group": [
            "water_1",
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 3
    },
    "ralts": {
        "base_id": 280,
        "form_id": 0,
        "name": "Ralts",
        "pokemon_type": [
            "psychic",
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "psychic"
            ]
        },
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Slow",
        "generation": 3,
        "evolution_ids": [
            [
                281,
                0
            ]
        ]
    },
    "kirlia": {
        "base_id": 281,
        "form_id": 0,
        "name": "Kirlia",
        "pokemon_type": [
            "psychic",
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "psychic"
            ]
        },
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Slow",
        "generation": 3,
        "evolution_ids": [
            [
                282,
                0
            ],
            [
                475,
                0
            ]
        ]
    },
    "gardevoir": {
        "base_id": 282,
        "form_id": 0,
        "name": "Gardevoir",
        "pokemon_type": [
            "psychic",
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "psychic"
            ]
        },
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Slow",
        "generation": 3
    },
    "gardevoir-mega": {
        "base_id": 282,
        "form_id": 1,
        "name": "Mega Gardevoir",
        "pokemon_type": [
            "psychic",
            "fairy"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "white",
        "experience_group": "Slow",
        "generation": 6
    },
    "surskit": {
        "base_id": 283,
        "form_id": 0,
        "name": "Surskit",
        "pokemon_type": [
            "bug",
            "water"
        ],
        "egg_group": [
            "water_1",
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 3,
        "evolution_ids": [
            [
                284,
                0
            ]
        ]
    },
    "masquerain": {
        "base_id": 284,
        "form_id": 0,
        "name": "Masquerain",
        "pokemon_type": [
            "bug",
            "flying"
        ],
        "egg_group": [
            "water_1",
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 3
    },
    "shroomish": {
        "base_id": 285,
        "form_id": 0,
        "name": "Shroomish",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "fairy",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Fluctuating",
        "generation": 3,
        "evolution_ids": [
            [
                286,
                0
            ]
        ]
    },
    "breloom": {
        "base_id": 286,
        "form_id": 0,
        "name": "Breloom",
        "pokemon_type": [
            "grass",
            "fighting"
        ],
        "egg_group": [
            "fairy",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Fluctuating",
        "generation": 3
    },
    "slakoth": {
        "base_id": 287,
        "form_id": 0,
        "name": "Slakoth",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 3,
        "evolution_ids": [
            [
                288,
                0
            ]
        ]
    },
    "vigoroth": {
        "base_id": 288,
        "form_id": 0,
        "name": "Vigoroth",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Slow",
        "generation": 3,
        "evolution_ids": [
            [
                289,
                0
            ]
        ]
    },
    "slaking": {
        "base_id": 289,
        "form_id": 0,
        "name": "Slaking",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 3
    },
    "nincada": {
        "base_id": 290,
        "form_id": 0,
        "name": "Nincada",
        "pokemon_type": [
            "bug",
            "ground"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Erratic",
        "generation": 3,
        "evolution_ids": [
            [
                291,
                0
            ],
            [
                292,
                0
            ]
        ]
    },
    "ninjask": {
        "base_id": 291,
        "form_id": 0,
        "name": "Ninjask",
        "pokemon_type": [
            "bug",
            "flying"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Erratic",
        "generation": 3
    },
    "shedinja": {
        "base_id": 292,
        "form_id": 0,
        "name": "Shedinja",
        "pokemon_type": [
            "bug",
            "ghost"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "brown",
        "experience_group": "Erratic",
        "generation": 3
    },
    "whismur": {
        "base_id": 293,
        "form_id": 0,
        "name": "Whismur",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "monster",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                294,
                0
            ]
        ]
    },
    "loudred": {
        "base_id": 294,
        "form_id": 0,
        "name": "Loudred",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "monster",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                295,
                0
            ]
        ]
    },
    "exploud": {
        "base_id": 295,
        "form_id": 0,
        "name": "Exploud",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "monster",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 3
    },
    "makuhita": {
        "base_id": 296,
        "form_id": 0,
        "name": "Makuhita",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "color": "yellow",
        "experience_group": "Fluctuating",
        "generation": 3,
        "evolution_ids": [
            [
                297,
                0
            ]
        ]
    },
    "hariyama": {
        "base_id": 297,
        "form_id": 0,
        "name": "Hariyama",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "color": "brown",
        "experience_group": "Fluctuating",
        "generation": 3
    },
    "azurill": {
        "base_id": 298,
        "form_id": 0,
        "name": "Azurill",
        "pokemon_type": [
            "normal",
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "normal"
            ]
        },
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "is_baby": true,
        "color": "blue",
        "experience_group": "Fast",
        "generation": 3,
        "evolution_ids": [
            [
                183,
                0
            ]
        ]
    },
    "nosepass": {
        "base_id": 299,
        "form_id": 0,
        "name": "Nosepass",
        "pokemon_type": [
            "rock"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 3,
        "evolution_ids": [
            [
                476,
                0
            ]
        ]
    },
    "skitty": {
        "base_id": 300,
        "form_id": 0,
        "name": "Skitty",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field",
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "pink",
        "experience_group": "Fast",
        "generation": 3,
        "evolution_ids": [
            [
                301,
                0
            ]
        ]
    },
    "delcatty": {
        "base_id": 301,
        "form_id": 0,
        "name": "Delcatty",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field",
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "purple",
        "experience_group": "Fast",
        "generation": 3
    },
    "sableye": {
        "base_id": 302,
        "form_id": 0,
        "name": "Sableye",
        "pokemon_type": [
            "dark",
            "ghost"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 3
    },
    "sableye-mega": {
        "base_id": 302,
        "form_id": 1,
        "name": "Mega Sableye",
        "pokemon_type": [
            "dark",
            "ghost"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "mawile": {
        "base_id": 303,
        "form_id": 0,
        "name": "Mawile",
        "pokemon_type": [
            "steel",
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "steel"
            ]
        },
        "egg_group": [
            "field",
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Fast",
        "generation": 3
    },
    "mawile-mega": {
        "base_id": 303,
        "form_id": 1,
        "name": "Mega Mawile",
        "pokemon_type": [
            "steel",
            "fairy"
        ],
        "egg_group": [
            "field",
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "black",
        "experience_group": "Fast",
        "generation": 6
    },
    "aron": {
        "base_id": 304,
        "form_id": 0,
        "name": "Aron",
        "pokemon_type": [
            "steel",
            "rock"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 3,
        "evolution_ids": [
            [
                305,
                0
            ]
        ]
    },
    "lairon": {
        "base_id": 305,
        "form_id": 0,
        "name": "Lairon",
        "pokemon_type": [
            "steel",
            "rock"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 3,
        "evolution_ids": [
            [
                306,
                0
            ]
        ]
    },
    "aggron": {
        "base_id": 306,
        "form_id": 0,
        "name": "Aggron",
        "pokemon_type": [
            "steel",
            "rock"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 3
    },
    "aggron-mega": {
        "base_id": 306,
        "form_id": 1,
        "name": "Mega Aggron",
        "pokemon_type": [
            "steel"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 6
    },
    "meditite": {
        "base_id": 307,
        "form_id": 0,
        "name": "Meditite",
        "pokemon_type": [
            "fighting",
            "psychic"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 3,
        "evolution_ids": [
            [
                308,
                0
            ]
        ]
    },
    "medicham": {
        "base_id": 308,
        "form_id": 0,
        "name": "Medicham",
        "pokemon_type": [
            "fighting",
            "psychic"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 3
    },
    "medicham-mega": {
        "base_id": 308,
        "form_id": 1,
        "name": "Mega Medicham",
        "pokemon_type": [
            "fighting",
            "psychic"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "electrike": {
        "base_id": 309,
        "form_id": 0,
        "name": "Electrike",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Slow",
        "generation": 3,
        "evolution_ids": [
            [
                310,
                0
            ]
        ]
    },
    "manectric": {
        "base_id": 310,
        "form_id": 0,
        "name": "Manectric",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 3
    },
    "manectric-mega": {
        "base_id": 310,
        "form_id": 1,
        "name": "Mega Manectric",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 6
    },
    "plusle": {
        "base_id": 311,
        "form_id": 0,
        "name": "Plusle",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 3
    },
    "minun": {
        "base_id": 312,
        "form_id": 0,
        "name": "Minun",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 3
    },
    "volbeat": {
        "base_id": 313,
        "form_id": 0,
        "name": "Volbeat",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug",
            "human_like"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "gray",
        "experience_group": "Erratic",
        "generation": 3
    },
    "illumise": {
        "base_id": 314,
        "form_id": 0,
        "name": "Illumise",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug",
            "human_like"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "purple",
        "experience_group": "Fluctuating",
        "generation": 3
    },
    "roselia": {
        "base_id": 315,
        "form_id": 0,
        "name": "Roselia",
        "pokemon_type": [
            "grass",
            "poison"
        ],
        "egg_group": [
            "fairy",
            "grass"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                407,
                0
            ]
        ]
    },
    "gulpin": {
        "base_id": 316,
        "form_id": 0,
        "name": "Gulpin",
        "pokemon_type": [
            "poison"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Fluctuating",
        "generation": 3,
        "evolution_ids": [
            [
                317,
                0
            ]
        ]
    },
    "swalot": {
        "base_id": 317,
        "form_id": 0,
        "name": "Swalot",
        "pokemon_type": [
            "poison"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Fluctuating",
        "generation": 3
    },
    "carvanha": {
        "base_id": 318,
        "form_id": 0,
        "name": "Carvanha",
        "pokemon_type": [
            "water",
            "dark"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Slow",
        "generation": 3,
        "evolution_ids": [
            [
                319,
                0
            ]
        ]
    },
    "sharpedo": {
        "base_id": 319,
        "form_id": 0,
        "name": "Sharpedo",
        "pokemon_type": [
            "water",
            "dark"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 3
    },
    "sharpedo-mega": {
        "base_id": 319,
        "form_id": 1,
        "name": "Mega Sharpedo",
        "pokemon_type": [
            "water",
            "dark"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 6
    },
    "wailmer": {
        "base_id": 320,
        "form_id": 0,
        "name": "Wailmer",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "field",
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Fluctuating",
        "generation": 3,
        "evolution_ids": [
            [
                321,
                0
            ]
        ]
    },
    "wailord": {
        "base_id": 321,
        "form_id": 0,
        "name": "Wailord",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "field",
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Fluctuating",
        "generation": 3
    },
    "numel": {
        "base_id": 322,
        "form_id": 0,
        "name": "Numel",
        "pokemon_type": [
            "fire",
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 3,
        "evolution_ids": [
            [
                323,
                0
            ]
        ]
    },
    "camerupt": {
        "base_id": 323,
        "form_id": 0,
        "name": "Camerupt",
        "pokemon_type": [
            "fire",
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 3
    },
    "camerupt-mega": {
        "base_id": 323,
        "form_id": 1,
        "name": "Mega Camerupt",
        "pokemon_type": [
            "fire",
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "torkoal": {
        "base_id": 324,
        "form_id": 0,
        "name": "Torkoal",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 3
    },
    "spoink": {
        "base_id": 325,
        "form_id": 0,
        "name": "Spoink",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Fast",
        "generation": 3,
        "evolution_ids": [
            [
                326,
                0
            ]
        ]
    },
    "grumpig": {
        "base_id": 326,
        "form_id": 0,
        "name": "Grumpig",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Fast",
        "generation": 3
    },
    "spinda": {
        "base_id": 327,
        "form_id": 0,
        "name": "Spinda",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Fast",
        "generation": 3
    },
    "trapinch": {
        "base_id": 328,
        "form_id": 0,
        "name": "Trapinch",
        "pokemon_type": [
            "ground"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                329,
                0
            ]
        ]
    },
    "vibrava": {
        "base_id": 329,
        "form_id": 0,
        "name": "Vibrava",
        "pokemon_type": [
            "ground",
            "dragon"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                330,
                0
            ]
        ]
    },
    "flygon": {
        "base_id": 330,
        "form_id": 0,
        "name": "Flygon",
        "pokemon_type": [
            "ground",
            "dragon"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 3
    },
    "cacnea": {
        "base_id": 331,
        "form_id": 0,
        "name": "Cacnea",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "grass",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                332,
                0
            ]
        ]
    },
    "cacturne": {
        "base_id": 332,
        "form_id": 0,
        "name": "Cacturne",
        "pokemon_type": [
            "grass",
            "dark"
        ],
        "egg_group": [
            "grass",
            "human_like"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 3
    },
    "swablu": {
        "base_id": 333,
        "form_id": 0,
        "name": "Swablu",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Erratic",
        "generation": 3,
        "evolution_ids": [
            [
                334,
                0
            ]
        ]
    },
    "altaria": {
        "base_id": 334,
        "form_id": 0,
        "name": "Altaria",
        "pokemon_type": [
            "dragon",
            "flying"
        ],
        "egg_group": [
            "flying",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Erratic",
        "generation": 3
    },
    "altaria-mega": {
        "base_id": 334,
        "form_id": 1,
        "name": "Mega Altaria",
        "pokemon_type": [
            "dragon",
            "fairy"
        ],
        "egg_group": [
            "flying",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "blue",
        "experience_group": "Erratic",
        "generation": 6
    },
    "zangoose": {
        "base_id": 335,
        "form_id": 0,
        "name": "Zangoose",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Erratic",
        "generation": 3
    },
    "seviper": {
        "base_id": 336,
        "form_id": 0,
        "name": "Seviper",
        "pokemon_type": [
            "poison"
        ],
        "egg_group": [
            "field",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Fluctuating",
        "generation": 3
    },
    "lunatone": {
        "base_id": 337,
        "form_id": 0,
        "name": "Lunatone",
        "pokemon_type": [
            "rock",
            "psychic"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "yellow",
        "experience_group": "Fast",
        "generation": 3
    },
    "solrock": {
        "base_id": 338,
        "form_id": 0,
        "name": "Solrock",
        "pokemon_type": [
            "rock",
            "psychic"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "red",
        "experience_group": "Fast",
        "generation": 3
    },
    "barboach": {
        "base_id": 339,
        "form_id": 0,
        "name": "Barboach",
        "pokemon_type": [
            "water",
            "ground"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 3,
        "evolution_ids": [
            [
                340,
                0
            ]
        ]
    },
    "whiscash": {
        "base_id": 340,
        "form_id": 0,
        "name": "Whiscash",
        "pokemon_type": [
            "water",
            "ground"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 3
    },
    "corphish": {
        "base_id": 341,
        "form_id": 0,
        "name": "Corphish",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Fluctuating",
        "generation": 3,
        "evolution_ids": [
            [
                342,
                0
            ]
        ]
    },
    "crawdaunt": {
        "base_id": 342,
        "form_id": 0,
        "name": "Crawdaunt",
        "pokemon_type": [
            "water",
            "dark"
        ],
        "egg_group": [
            "water_1",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Fluctuating",
        "generation": 3
    },
    "baltoy": {
        "base_id": 343,
        "form_id": 0,
        "name": "Baltoy",
        "pokemon_type": [
            "ground",
            "psychic"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 3,
        "evolution_ids": [
            [
                344,
                0
            ]
        ]
    },
    "claydol": {
        "base_id": 344,
        "form_id": 0,
        "name": "Claydol",
        "pokemon_type": [
            "ground",
            "psychic"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 3
    },
    "lileep": {
        "base_id": 345,
        "form_id": 0,
        "name": "Lileep",
        "pokemon_type": [
            "rock",
            "grass"
        ],
        "egg_group": [
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "purple",
        "experience_group": "Erratic",
        "generation": 3,
        "evolution_ids": [
            [
                346,
                0
            ]
        ]
    },
    "cradily": {
        "base_id": 346,
        "form_id": 0,
        "name": "Cradily",
        "pokemon_type": [
            "rock",
            "grass"
        ],
        "egg_group": [
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Erratic",
        "generation": 3
    },
    "anorith": {
        "base_id": 347,
        "form_id": 0,
        "name": "Anorith",
        "pokemon_type": [
            "rock",
            "bug"
        ],
        "egg_group": [
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "gray",
        "experience_group": "Erratic",
        "generation": 3,
        "evolution_ids": [
            [
                348,
                0
            ]
        ]
    },
    "armaldo": {
        "base_id": 348,
        "form_id": 0,
        "name": "Armaldo",
        "pokemon_type": [
            "rock",
            "bug"
        ],
        "egg_group": [
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "gray",
        "experience_group": "Erratic",
        "generation": 3
    },
    "feebas": {
        "base_id": 349,
        "form_id": 0,
        "name": "Feebas",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Erratic",
        "generation": 3,
        "evolution_ids": [
            [
                350,
                0
            ]
        ]
    },
    "milotic": {
        "base_id": 350,
        "form_id": 0,
        "name": "Milotic",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "dragon"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Erratic",
        "generation": 3
    },
    "castform": {
        "base_id": 351,
        "form_id": 0,
        "name": "Castform",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "fairy",
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 3
    },
    "kecleon": {
        "base_id": 352,
        "form_id": 0,
        "name": "Kecleon",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 3
    },
    "shuppet": {
        "base_id": 353,
        "form_id": 0,
        "name": "Shuppet",
        "pokemon_type": [
            "ghost"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Fast",
        "generation": 3,
        "evolution_ids": [
            [
                354,
                0
            ]
        ]
    },
    "banette": {
        "base_id": 354,
        "form_id": 0,
        "name": "Banette",
        "pokemon_type": [
            "ghost"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Fast",
        "generation": 3
    },
    "banette-mega": {
        "base_id": 354,
        "form_id": 1,
        "name": "Mega Banette",
        "pokemon_type": [
            "ghost"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "black",
        "experience_group": "Fast",
        "generation": 6
    },
    "duskull": {
        "base_id": 355,
        "form_id": 0,
        "name": "Duskull",
        "pokemon_type": [
            "ghost"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Fast",
        "generation": 3,
        "evolution_ids": [
            [
                356,
                0
            ]
        ]
    },
    "dusclops": {
        "base_id": 356,
        "form_id": 0,
        "name": "Dusclops",
        "pokemon_type": [
            "ghost"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Fast",
        "generation": 3,
        "evolution_ids": [
            [
                477,
                0
            ]
        ]
    },
    "tropius": {
        "base_id": 357,
        "form_id": 0,
        "name": "Tropius",
        "pokemon_type": [
            "grass",
            "flying"
        ],
        "egg_group": [
            "monster",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Slow",
        "generation": 3
    },
    "chimecho": {
        "base_id": 358,
        "form_id": 0,
        "name": "Chimecho",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Fast",
        "generation": 3
    },
    "absol": {
        "base_id": 359,
        "form_id": 0,
        "name": "Absol",
        "pokemon_type": [
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Slow",
        "generation": 3
    },
    "absol-mega": {
        "base_id": 359,
        "form_id": 1,
        "name": "Mega Absol",
        "pokemon_type": [
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "white",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "wynaut": {
        "base_id": 360,
        "form_id": 0,
        "name": "Wynaut",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_baby": true,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 3,
        "evolution_ids": [
            [
                202,
                0
            ]
        ]
    },
    "snorunt": {
        "base_id": 361,
        "form_id": 0,
        "name": "Snorunt",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "fairy",
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 3,
        "evolution_ids": [
            [
                362,
                0
            ],
            [
                478,
                0
            ]
        ]
    },
    "glalie": {
        "base_id": 362,
        "form_id": 0,
        "name": "Glalie",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "fairy",
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 3
    },
    "glalie-mega": {
        "base_id": 362,
        "form_id": 1,
        "name": "Mega Glalie",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "fairy",
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "spheal": {
        "base_id": 363,
        "form_id": 0,
        "name": "Spheal",
        "pokemon_type": [
            "ice",
            "water"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                364,
                0
            ]
        ]
    },
    "sealeo": {
        "base_id": 364,
        "form_id": 0,
        "name": "Sealeo",
        "pokemon_type": [
            "ice",
            "water"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 3,
        "evolution_ids": [
            [
                365,
                0
            ]
        ]
    },
    "walrein": {
        "base_id": 365,
        "form_id": 0,
        "name": "Walrein",
        "pokemon_type": [
            "ice",
            "water"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 3
    },
    "clamperl": {
        "base_id": 366,
        "form_id": 0,
        "name": "Clamperl",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Erratic",
        "generation": 3,
        "evolution_ids": [
            [
                367,
                0
            ],
            [
                368,
                0
            ]
        ]
    },
    "huntail": {
        "base_id": 367,
        "form_id": 0,
        "name": "Huntail",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Erratic",
        "generation": 3
    },
    "gorebyss": {
        "base_id": 368,
        "form_id": 0,
        "name": "Gorebyss",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Erratic",
        "generation": 3
    },
    "relicanth": {
        "base_id": 369,
        "form_id": 0,
        "name": "Relicanth",
        "pokemon_type": [
            "water",
            "rock"
        ],
        "egg_group": [
            "water_1",
            "water_2"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 1,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 3
    },
    "luvdisc": {
        "base_id": 370,
        "form_id": 0,
        "name": "Luvdisc",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "pink",
        "experience_group": "Fast",
        "generation": 3
    },
    "bagon": {
        "base_id": 371,
        "form_id": 0,
        "name": "Bagon",
        "pokemon_type": [
            "dragon"
        ],
        "egg_group": [
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 3,
        "evolution_ids": [
            [
                372,
                0
            ]
        ]
    },
    "shelgon": {
        "base_id": 372,
        "form_id": 0,
        "name": "Shelgon",
        "pokemon_type": [
            "dragon"
        ],
        "egg_group": [
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Slow",
        "generation": 3,
        "evolution_ids": [
            [
                373,
                0
            ]
        ]
    },
    "salamence": {
        "base_id": 373,
        "form_id": 0,
        "name": "Salamence",
        "pokemon_type": [
            "dragon",
            "flying"
        ],
        "egg_group": [
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 3
    },
    "salamence-mega": {
        "base_id": 373,
        "form_id": 1,
        "name": "Mega Salamence",
        "pokemon_type": [
            "dragon",
            "flying"
        ],
        "egg_group": [
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 6
    },
    "beldum": {
        "base_id": 374,
        "form_id": 0,
        "name": "Beldum",
        "pokemon_type": [
            "steel",
            "psychic"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 3,
        "evolution_ids": [
            [
                375,
                0
            ]
        ]
    },
    "metang": {
        "base_id": 375,
        "form_id": 0,
        "name": "Metang",
        "pokemon_type": [
            "steel",
            "psychic"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 3,
        "evolution_ids": [
            [
                376,
                0
            ]
        ]
    },
    "metagross": {
        "base_id": 376,
        "form_id": 0,
        "name": "Metagross",
        "pokemon_type": [
            "steel",
            "psychic"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 3
    },
    "metagross-mega": {
        "base_id": 376,
        "form_id": 1,
        "name": "Mega Metagross",
        "pokemon_type": [
            "steel",
            "psychic"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mega": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 6
    },
    "regirock": {
        "base_id": 377,
        "form_id": 0,
        "name": "Regirock",
        "pokemon_type": [
            "rock"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 3
    },
    "regice": {
        "base_id": 378,
        "form_id": 0,
        "name": "Regice",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 3
    },
    "registeel": {
        "base_id": 379,
        "form_id": 0,
        "name": "Registeel",
        "pokemon_type": [
            "steel"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 3
    },
    "latias": {
        "base_id": 380,
        "form_id": 0,
        "name": "Latias",
        "pokemon_type": [
            "dragon",
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "is_sublegendary": true,
        "color": "red",
        "experience_group": "Slow",
        "generation": 3
    },
    "latias-mega": {
        "base_id": 380,
        "form_id": 1,
        "name": "Mega Latias",
        "pokemon_type": [
            "dragon",
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "is_sublegendary": true,
        "is_mega": true,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 6
    },
    "latios": {
        "base_id": 381,
        "form_id": 0,
        "name": "Latios",
        "pokemon_type": [
            "dragon",
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "is_sublegendary": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 3
    },
    "latios-mega": {
        "base_id": 381,
        "form_id": 1,
        "name": "Mega Latios",
        "pokemon_type": [
            "dragon",
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "is_sublegendary": true,
        "is_mega": true,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 6
    },
    "kyogre": {
        "base_id": 382,
        "form_id": 0,
        "name": "Kyogre",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 3
    },
    "kyogre-primal": {
        "base_id": 382,
        "form_id": 1,
        "name": "Primal Kyogre",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 6
    },
    "groudon": {
        "base_id": 383,
        "form_id": 0,
        "name": "Groudon",
        "pokemon_type": [
            "ground"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "red",
        "experience_group": "Slow",
        "generation": 3
    },
    "groudon-primal": {
        "base_id": 383,
        "form_id": 1,
        "name": "Primal Groudon",
        "pokemon_type": [
            "ground",
            "fire"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "red",
        "experience_group": "Slow",
        "generation": 6
    },
    "rayquaza": {
        "base_id": 384,
        "form_id": 0,
        "name": "Rayquaza",
        "pokemon_type": [
            "dragon",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "green",
        "experience_group": "Slow",
        "generation": 3
    },
    "rayquaza-mega": {
        "base_id": 384,
        "form_id": 1,
        "name": "Mega Rayquaza",
        "pokemon_type": [
            "dragon",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "is_mega": true,
        "color": "green",
        "experience_group": "Slow",
        "generation": 6
    },
    "jirachi": {
        "base_id": 385,
        "form_id": 0,
        "name": "Jirachi",
        "pokemon_type": [
            "steel",
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 3
    },
    "deoxys": {
        "base_id": 386,
        "form_id": 0,
        "name": "Deoxys",
        "form_name": "Normal Forme",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "red",
        "experience_group": "Slow",
        "generation": 3
    },
    "deoxys-attack": {
        "base_id": 386,
        "form_id": 1,
        "name": "Deoxys",
        "form_name": "Attack Forme",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "red",
        "experience_group": "Slow",
        "generation": 3
    },
    "deoxys-defense": {
        "base_id": 386,
        "form_id": 2,
        "name": "Deoxys",
        "form_name": "Defense Forme",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "red",
        "experience_group": "Slow",
        "generation": 3
    },
    "deoxys-speed": {
        "base_id": 386,
        "form_id": 3,
        "name": "Deoxys",
        "form_name": "Speed Forme",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "red",
        "experience_group": "Slow",
        "generation": 3
    },
    "turtwig": {
        "base_id": 387,
        "form_id": 0,
        "name": "Turtwig",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "monster",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 4,
        "evolution_ids": [
            [
                388,
                0
            ]
        ]
    },
    "grotle": {
        "base_id": 388,
        "form_id": 0,
        "name": "Grotle",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "monster",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 4,
        "evolution_ids": [
            [
                389,
                0
            ]
        ]
    },
    "torterra": {
        "base_id": 389,
        "form_id": 0,
        "name": "Torterra",
        "pokemon_type": [
            "grass",
            "ground"
        ],
        "egg_group": [
            "monster",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 4
    },
    "chimchar": {
        "base_id": 390,
        "form_id": 0,
        "name": "Chimchar",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 4,
        "evolution_ids": [
            [
                391,
                0
            ]
        ]
    },
    "monferno": {
        "base_id": 391,
        "form_id": 0,
        "name": "Monferno",
        "pokemon_type": [
            "fire",
            "fighting"
        ],
        "egg_group": [
            "field",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 4,
        "evolution_ids": [
            [
                392,
                0
            ]
        ]
    },
    "infernape": {
        "base_id": 392,
        "form_id": 0,
        "name": "Infernape",
        "pokemon_type": [
            "fire",
            "fighting"
        ],
        "egg_group": [
            "field",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 4
    },
    "piplup": {
        "base_id": 393,
        "form_id": 0,
        "name": "Piplup",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 4,
        "evolution_ids": [
            [
                394,
                0
            ]
        ]
    },
    "prinplup": {
        "base_id": 394,
        "form_id": 0,
        "name": "Prinplup",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 4,
        "evolution_ids": [
            [
                395,
                0
            ]
        ]
    },
    "empoleon": {
        "base_id": 395,
        "form_id": 0,
        "name": "Empoleon",
        "pokemon_type": [
            "water",
            "steel"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 4
    },
    "starly": {
        "base_id": 396,
        "form_id": 0,
        "name": "Starly",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 4,
        "evolution_ids": [
            [
                397,
                0
            ]
        ]
    },
    "staravia": {
        "base_id": 397,
        "form_id": 0,
        "name": "Staravia",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 4,
        "evolution_ids": [
            [
                398,
                0
            ]
        ]
    },
    "staraptor": {
        "base_id": 398,
        "form_id": 0,
        "name": "Staraptor",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 4
    },
    "bidoof": {
        "base_id": 399,
        "form_id": 0,
        "name": "Bidoof",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 4,
        "evolution_ids": [
            [
                400,
                0
            ]
        ]
    },
    "bibarel": {
        "base_id": 400,
        "form_id": 0,
        "name": "Bibarel",
        "pokemon_type": [
            "normal",
            "water"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "kricketot": {
        "base_id": 401,
        "form_id": 0,
        "name": "Kricketot",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 4,
        "evolution_ids": [
            [
                402,
                0
            ]
        ]
    },
    "kricketune": {
        "base_id": 402,
        "form_id": 0,
        "name": "Kricketune",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 4
    },
    "shinx": {
        "base_id": 403,
        "form_id": 0,
        "name": "Shinx",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 4,
        "evolution_ids": [
            [
                404,
                0
            ]
        ]
    },
    "luxio": {
        "base_id": 404,
        "form_id": 0,
        "name": "Luxio",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 4,
        "evolution_ids": [
            [
                405,
                0
            ]
        ]
    },
    "luxray": {
        "base_id": 405,
        "form_id": 0,
        "name": "Luxray",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 4
    },
    "budew": {
        "base_id": 406,
        "form_id": 0,
        "name": "Budew",
        "pokemon_type": [
            "grass",
            "poison"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_baby": true,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 4,
        "evolution_ids": [
            [
                315,
                0
            ]
        ]
    },
    "roserade": {
        "base_id": 407,
        "form_id": 0,
        "name": "Roserade",
        "pokemon_type": [
            "grass",
            "poison"
        ],
        "egg_group": [
            "fairy",
            "grass"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 4
    },
    "cranidos": {
        "base_id": 408,
        "form_id": 0,
        "name": "Cranidos",
        "pokemon_type": [
            "rock"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Erratic",
        "generation": 4,
        "evolution_ids": [
            [
                409,
                0
            ]
        ]
    },
    "rampardos": {
        "base_id": 409,
        "form_id": 0,
        "name": "Rampardos",
        "pokemon_type": [
            "rock"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Erratic",
        "generation": 4
    },
    "shieldon": {
        "base_id": 410,
        "form_id": 0,
        "name": "Shieldon",
        "pokemon_type": [
            "rock",
            "steel"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "gray",
        "experience_group": "Erratic",
        "generation": 4,
        "evolution_ids": [
            [
                411,
                0
            ]
        ]
    },
    "bastiodon": {
        "base_id": 411,
        "form_id": 0,
        "name": "Bastiodon",
        "pokemon_type": [
            "rock",
            "steel"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "gray",
        "experience_group": "Erratic",
        "generation": 4
    },
    "burmy": {
        "base_id": 412,
        "form_id": 0,
        "name": "Burmy",
        "form_name": "Plant Cloak",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 4,
        "evolution_ids": [
            [
                413,
                0
            ],
            [
                414,
                0
            ]
        ]
    },
    "burmy-sandy": {
        "base_id": 412,
        "form_id": 1,
        "name": "Burmy",
        "form_name": "Sandy Cloak",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 4,
        "evolution_ids": [
            [
                413,
                1
            ],
            [
                414,
                0
            ]
        ]
    },
    "burmy-trash": {
        "base_id": 412,
        "form_id": 2,
        "name": "Burmy",
        "form_name": "Trash Cloak",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 4,
        "evolution_ids": [
            [
                413,
                2
            ],
            [
                414,
                0
            ]
        ]
    },
    "wormadam": {
        "base_id": 413,
        "form_id": 0,
        "name": "Wormadam",
        "form_name": "Plant Cloak",
        "pokemon_type": [
            "bug",
            "grass"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "wormadam-sandy": {
        "base_id": 413,
        "form_id": 1,
        "name": "Wormadam",
        "form_name": "Sandy Cloak",
        "pokemon_type": [
            "bug",
            "ground"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "wormadam-trash": {
        "base_id": 413,
        "form_id": 2,
        "name": "Wormadam",
        "form_name": "Trash Cloak",
        "pokemon_type": [
            "bug",
            "steel"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "mothim": {
        "base_id": 414,
        "form_id": 0,
        "name": "Mothim",
        "pokemon_type": [
            "bug",
            "flying"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "combee": {
        "base_id": 415,
        "form_id": 0,
        "name": "Combee",
        "pokemon_type": [
            "bug",
            "flying"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 1,
        "color": "yellow",
        "experience_group": "Medium Slow",
        "generation": 4,
        "evolution_ids": [
            [
                416,
                0
            ]
        ]
    },
    "vespiquen": {
        "base_id": 416,
        "form_id": 0,
        "name": "Vespiquen",
        "pokemon_type": [
            "bug",
            "flying"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "yellow",
        "experience_group": "Medium Slow",
        "generation": 4
    },
    "pachirisu": {
        "base_id": 417,
        "form_id": 0,
        "name": "Pachirisu",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "field",
            "fairy"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "buizel": {
        "base_id": 418,
        "form_id": 0,
        "name": "Buizel",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 4,
        "evolution_ids": [
            [
                419,
                0
            ]
        ]
    },
    "floatzel": {
        "base_id": 419,
        "form_id": 0,
        "name": "Floatzel",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "cherubi": {
        "base_id": 420,
        "form_id": 0,
        "name": "Cherubi",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "fairy",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 4,
        "evolution_ids": [
            [
                421,
                1
            ]
        ]
    },
    "cherrim": {
        "base_id": 421,
        "form_id": 1,
        "name": "Cherrim",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "fairy",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "shellos": {
        "base_id": 422,
        "form_id": 0,
        "name": "Shellos",
        "form_name": "West Sea",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 4,
        "evolution_ids": [
            [
                423,
                0
            ]
        ]
    },
    "shellos-east": {
        "base_id": 422,
        "form_id": 1,
        "name": "Shellos",
        "form_name": "East Sea",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 4,
        "evolution_ids": [
            [
                423,
                1
            ]
        ]
    },
    "gastrodon": {
        "base_id": 423,
        "form_id": 0,
        "name": "Gastrodon",
        "form_name": "West Sea",
        "pokemon_type": [
            "water",
            "ground"
        ],
        "egg_group": [
            "water_1",
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "gastrodon-east": {
        "base_id": 423,
        "form_id": 1,
        "name": "Gastrodon",
        "form_name": "East Sea",
        "pokemon_type": [
            "water",
            "ground"
        ],
        "egg_group": [
            "water_1",
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "ambipom": {
        "base_id": 424,
        "form_id": 0,
        "name": "Ambipom",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Fast",
        "generation": 4
    },
    "drifloon": {
        "base_id": 425,
        "form_id": 0,
        "name": "Drifloon",
        "pokemon_type": [
            "ghost",
            "flying"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Fluctuating",
        "generation": 4,
        "evolution_ids": [
            [
                426,
                0
            ]
        ]
    },
    "drifblim": {
        "base_id": 426,
        "form_id": 0,
        "name": "Drifblim",
        "pokemon_type": [
            "ghost",
            "flying"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Fluctuating",
        "generation": 4
    },
    "buneary": {
        "base_id": 427,
        "form_id": 0,
        "name": "Buneary",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 4,
        "evolution_ids": [
            [
                428,
                0
            ]
        ]
    },
    "lopunny": {
        "base_id": 428,
        "form_id": 0,
        "name": "Lopunny",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "lopunny-mega": {
        "base_id": 428,
        "form_id": 1,
        "name": "Mega Lopunny",
        "pokemon_type": [
            "normal",
            "fighting"
        ],
        "egg_group": [
            "field",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "mismagius": {
        "base_id": 429,
        "form_id": 0,
        "name": "Mismagius",
        "pokemon_type": [
            "ghost"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Fast",
        "generation": 4
    },
    "honchkrow": {
        "base_id": 430,
        "form_id": 0,
        "name": "Honchkrow",
        "pokemon_type": [
            "dark",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Slow",
        "generation": 4
    },
    "glameow": {
        "base_id": 431,
        "form_id": 0,
        "name": "Glameow",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "gray",
        "experience_group": "Fast",
        "generation": 4,
        "evolution_ids": [
            [
                432,
                0
            ]
        ]
    },
    "purugly": {
        "base_id": 432,
        "form_id": 0,
        "name": "Purugly",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "gray",
        "experience_group": "Fast",
        "generation": 4
    },
    "chingling": {
        "base_id": 433,
        "form_id": 0,
        "name": "Chingling",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_baby": true,
        "color": "yellow",
        "experience_group": "Fast",
        "generation": 4,
        "evolution_ids": [
            [
                358,
                0
            ]
        ]
    },
    "stunky": {
        "base_id": 434,
        "form_id": 0,
        "name": "Stunky",
        "pokemon_type": [
            "poison",
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 4,
        "evolution_ids": [
            [
                435,
                0
            ]
        ]
    },
    "skuntank": {
        "base_id": 435,
        "form_id": 0,
        "name": "Skuntank",
        "pokemon_type": [
            "poison",
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "bronzor": {
        "base_id": 436,
        "form_id": 0,
        "name": "Bronzor",
        "pokemon_type": [
            "steel",
            "psychic"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 4,
        "evolution_ids": [
            [
                437,
                0
            ]
        ]
    },
    "bronzong": {
        "base_id": 437,
        "form_id": 0,
        "name": "Bronzong",
        "pokemon_type": [
            "steel",
            "psychic"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "bonsly": {
        "base_id": 438,
        "form_id": 0,
        "name": "Bonsly",
        "pokemon_type": [
            "rock"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_baby": true,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 4,
        "evolution_ids": [
            [
                185,
                0
            ]
        ]
    },
    "mime-jr": {
        "base_id": 439,
        "form_id": 0,
        "name": "Mime Jr.",
        "pokemon_type": [
            "psychic",
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "psychic"
            ]
        },
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_baby": true,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 4,
        "evolution_ids": [
            [
                122,
                0
            ],
            [
                122,
                1
            ]
        ]
    },
    "happiny": {
        "base_id": 440,
        "form_id": 0,
        "name": "Happiny",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "is_baby": true,
        "color": "pink",
        "experience_group": "Fast",
        "generation": 4,
        "evolution_ids": [
            [
                113,
                0
            ]
        ]
    },
    "chatot": {
        "base_id": 441,
        "form_id": 0,
        "name": "Chatot",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Slow",
        "generation": 4
    },
    "spiritomb": {
        "base_id": 442,
        "form_id": 0,
        "name": "Spiritomb",
        "pokemon_type": [
            "ghost",
            "dark"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "gible": {
        "base_id": 443,
        "form_id": 0,
        "name": "Gible",
        "pokemon_type": [
            "dragon",
            "ground"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 4,
        "evolution_ids": [
            [
                444,
                0
            ]
        ]
    },
    "gabite": {
        "base_id": 444,
        "form_id": 0,
        "name": "Gabite",
        "pokemon_type": [
            "dragon",
            "ground"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 4,
        "evolution_ids": [
            [
                445,
                0
            ]
        ]
    },
    "garchomp": {
        "base_id": 445,
        "form_id": 0,
        "name": "Garchomp",
        "pokemon_type": [
            "dragon",
            "ground"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 4
    },
    "garchomp-mega": {
        "base_id": 445,
        "form_id": 1,
        "name": "Mega Garchomp",
        "pokemon_type": [
            "dragon",
            "ground"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 6
    },
    "munchlax": {
        "base_id": 446,
        "form_id": 0,
        "name": "Munchlax",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "is_baby": true,
        "color": "black",
        "experience_group": "Slow",
        "generation": 4,
        "evolution_ids": [
            [
                143,
                0
            ]
        ]
    },
    "riolu": {
        "base_id": 447,
        "form_id": 0,
        "name": "Riolu",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "is_baby": true,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 4,
        "evolution_ids": [
            [
                448,
                0
            ]
        ]
    },
    "lucario": {
        "base_id": 448,
        "form_id": 0,
        "name": "Lucario",
        "pokemon_type": [
            "fighting",
            "steel"
        ],
        "egg_group": [
            "field",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 4
    },
    "lucario-mega": {
        "base_id": 448,
        "form_id": 1,
        "name": "Mega Lucario",
        "pokemon_type": [
            "fighting",
            "steel"
        ],
        "egg_group": [
            "field",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "is_mega": true,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "hippopotas": {
        "base_id": 449,
        "form_id": 0,
        "name": "Hippopotas",
        "pokemon_type": [
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 4,
        "evolution_ids": [
            [
                450,
                0
            ]
        ]
    },
    "hippowdon": {
        "base_id": 450,
        "form_id": 0,
        "name": "Hippowdon",
        "pokemon_type": [
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 4
    },
    "skorupi": {
        "base_id": 451,
        "form_id": 0,
        "name": "Skorupi",
        "pokemon_type": [
            "poison",
            "bug"
        ],
        "egg_group": [
            "bug",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 4,
        "evolution_ids": [
            [
                452,
                0
            ]
        ]
    },
    "drapion": {
        "base_id": 452,
        "form_id": 0,
        "name": "Drapion",
        "pokemon_type": [
            "poison",
            "dark"
        ],
        "egg_group": [
            "bug",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 4
    },
    "croagunk": {
        "base_id": 453,
        "form_id": 0,
        "name": "Croagunk",
        "pokemon_type": [
            "poison",
            "fighting"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 4,
        "evolution_ids": [
            [
                454,
                0
            ]
        ]
    },
    "toxicroak": {
        "base_id": 454,
        "form_id": 0,
        "name": "Toxicroak",
        "pokemon_type": [
            "poison",
            "fighting"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "carnivine": {
        "base_id": 455,
        "form_id": 0,
        "name": "Carnivine",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Slow",
        "generation": 4
    },
    "finneon": {
        "base_id": 456,
        "form_id": 0,
        "name": "Finneon",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Erratic",
        "generation": 4,
        "evolution_ids": [
            [
                457,
                0
            ]
        ]
    },
    "lumineon": {
        "base_id": 457,
        "form_id": 0,
        "name": "Lumineon",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Erratic",
        "generation": 4
    },
    "mantyke": {
        "base_id": 458,
        "form_id": 0,
        "name": "Mantyke",
        "pokemon_type": [
            "water",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_baby": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 4,
        "evolution_ids": [
            [
                226,
                0
            ]
        ]
    },
    "snover": {
        "base_id": 459,
        "form_id": 0,
        "name": "Snover",
        "pokemon_type": [
            "grass",
            "ice"
        ],
        "egg_group": [
            "monster",
            "grass"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Slow",
        "generation": 4,
        "evolution_ids": [
            [
                460,
                0
            ]
        ]
    },
    "abomasnow": {
        "base_id": 460,
        "form_id": 0,
        "name": "Abomasnow",
        "pokemon_type": [
            "grass",
            "ice"
        ],
        "egg_group": [
            "monster",
            "grass"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Slow",
        "generation": 4
    },
    "abomasnow-mega": {
        "base_id": 460,
        "form_id": 1,
        "name": "Mega Abomasnow",
        "pokemon_type": [
            "grass",
            "ice"
        ],
        "egg_group": [
            "monster",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "white",
        "experience_group": "Slow",
        "generation": 6
    },
    "weavile": {
        "base_id": 461,
        "form_id": 0,
        "name": "Weavile",
        "pokemon_type": [
            "dark",
            "ice"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Slow",
        "generation": 4
    },
    "magnezone": {
        "base_id": 462,
        "form_id": 0,
        "name": "Magnezone",
        "pokemon_type": [
            "electric",
            "steel"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "lickilicky": {
        "base_id": 463,
        "form_id": 0,
        "name": "Lickilicky",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "rhyperior": {
        "base_id": 464,
        "form_id": 0,
        "name": "Rhyperior",
        "pokemon_type": [
            "ground",
            "rock"
        ],
        "egg_group": [
            "monster",
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 4
    },
    "tangrowth": {
        "base_id": 465,
        "form_id": 0,
        "name": "Tangrowth",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "electivire": {
        "base_id": 466,
        "form_id": 0,
        "name": "Electivire",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "magmortar": {
        "base_id": 467,
        "form_id": 0,
        "name": "Magmortar",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "togekiss": {
        "base_id": 468,
        "form_id": 0,
        "name": "Togekiss",
        "pokemon_type": [
            "fairy",
            "flying"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "normal",
                "flying"
            ]
        },
        "egg_group": [
            "flying",
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "white",
        "experience_group": "Fast",
        "generation": 4
    },
    "yanmega": {
        "base_id": 469,
        "form_id": 0,
        "name": "Yanmega",
        "pokemon_type": [
            "bug",
            "flying"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "leafeon": {
        "base_id": 470,
        "form_id": 0,
        "name": "Leafeon",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "glaceon": {
        "base_id": 471,
        "form_id": 0,
        "name": "Glaceon",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "gliscor": {
        "base_id": 472,
        "form_id": 0,
        "name": "Gliscor",
        "pokemon_type": [
            "ground",
            "flying"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 4
    },
    "mamoswine": {
        "base_id": 473,
        "form_id": 0,
        "name": "Mamoswine",
        "pokemon_type": [
            "ice",
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 4
    },
    "porygon-z": {
        "base_id": 474,
        "form_id": 0,
        "name": "Porygon-Z",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "gallade": {
        "base_id": 475,
        "form_id": 0,
        "name": "Gallade",
        "pokemon_type": [
            "psychic",
            "fighting"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "white",
        "experience_group": "Slow",
        "generation": 4
    },
    "gallade-mega": {
        "base_id": 475,
        "form_id": 1,
        "name": "Mega Gallade",
        "pokemon_type": [
            "psychic",
            "fighting"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "is_mega": true,
        "color": "white",
        "experience_group": "Slow",
        "generation": 6
    },
    "probopass": {
        "base_id": 476,
        "form_id": 0,
        "name": "Probopass",
        "pokemon_type": [
            "rock",
            "steel"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "dusknoir": {
        "base_id": 477,
        "form_id": 0,
        "name": "Dusknoir",
        "pokemon_type": [
            "ghost"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Fast",
        "generation": 4
    },
    "froslass": {
        "base_id": 478,
        "form_id": 0,
        "name": "Froslass",
        "pokemon_type": [
            "ice",
            "ghost"
        ],
        "egg_group": [
            "fairy",
            "mineral"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "rotom": {
        "base_id": 479,
        "form_id": 0,
        "name": "Rotom",
        "pokemon_type": [
            "electric",
            "ghost"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "rotom-heat": {
        "base_id": 479,
        "form_id": 1,
        "name": "Heat Rotom",
        "pokemon_type": [
            "electric",
            "fire"
        ],
        "past_type": {
            "generation": 5,
            "pokemon_type": [
                "electric",
                "ghost"
            ]
        },
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "rotom-wash": {
        "base_id": 479,
        "form_id": 2,
        "name": "Wash Rotom",
        "pokemon_type": [
            "electric",
            "water"
        ],
        "past_type": {
            "generation": 5,
            "pokemon_type": [
                "electric",
                "ghost"
            ]
        },
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "rotom-frost": {
        "base_id": 479,
        "form_id": 3,
        "name": "Frost Rotom",
        "pokemon_type": [
            "electric",
            "ice"
        ],
        "past_type": {
            "generation": 5,
            "pokemon_type": [
                "electric",
                "ghost"
            ]
        },
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "rotom-fan": {
        "base_id": 479,
        "form_id": 4,
        "name": "Fan Rotom",
        "pokemon_type": [
            "electric",
            "flying"
        ],
        "past_type": {
            "generation": 5,
            "pokemon_type": [
                "electric",
                "ghost"
            ]
        },
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "rotom-mow": {
        "base_id": 479,
        "form_id": 5,
        "name": "Mow Rotom",
        "pokemon_type": [
            "electric",
            "grass"
        ],
        "past_type": {
            "generation": 5,
            "pokemon_type": [
                "electric",
                "ghost"
            ]
        },
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 4
    },
    "uxie": {
        "base_id": 480,
        "form_id": 0,
        "name": "Uxie",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 4
    },
    "mesprit": {
        "base_id": 481,
        "form_id": 0,
        "name": "Mesprit",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "pink",
        "experience_group": "Slow",
        "generation": 4
    },
    "azelf": {
        "base_id": 482,
        "form_id": 0,
        "name": "Azelf",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 4
    },
    "dialga": {
        "base_id": 483,
        "form_id": 0,
        "name": "Dialga",
        "pokemon_type": [
            "steel",
            "dragon"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "white",
        "experience_group": "Slow",
        "generation": 4
    },
    "dialga-origin": {
        "base_id": 483,
        "form_id": 1,
        "name": "Dialga",
        "form_name": "Origin Forme",
        "pokemon_type": [
            "steel",
            "dragon"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "white",
        "experience_group": "Slow",
        "generation": 8
    },
    "palkia": {
        "base_id": 484,
        "form_id": 0,
        "name": "Palkia",
        "pokemon_type": [
            "water",
            "dragon"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 4
    },
    "palkia-origin": {
        "base_id": 484,
        "form_id": 1,
        "name": "Palkia",
        "form_name": "Origin Forme",
        "pokemon_type": [
            "water",
            "dragon"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 8
    },
    "heatran": {
        "base_id": 485,
        "form_id": 0,
        "name": "Heatran",
        "pokemon_type": [
            "fire",
            "steel"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_sublegendary": true,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 4
    },
    "regigigas": {
        "base_id": 486,
        "form_id": 0,
        "name": "Regigigas",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "white",
        "experience_group": "Slow",
        "generation": 4
    },
    "giratina": {
        "base_id": 487,
        "form_id": 0,
        "name": "Giratina",
        "form_name": "Altered Forme",
        "pokemon_type": [
            "ghost",
            "dragon"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "black",
        "experience_group": "Slow",
        "generation": 4
    },
    "giratina-origin": {
        "base_id": 487,
        "form_id": 1,
        "name": "Giratina",
        "form_name": "Origin Forme",
        "pokemon_type": [
            "ghost",
            "dragon"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "black",
        "experience_group": "Slow",
        "generation": 4
    },
    "cresselia": {
        "base_id": 488,
        "form_id": 0,
        "name": "Cresselia",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "is_sublegendary": true,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 4
    },
    "phione": {
        "base_id": 489,
        "form_id": 0,
        "name": "Phione",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "fairy"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 4
    },
    "manaphy": {
        "base_id": 490,
        "form_id": 0,
        "name": "Manaphy",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "fairy"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 4
    },
    "darkrai": {
        "base_id": 491,
        "form_id": 0,
        "name": "Darkrai",
        "pokemon_type": [
            "dark"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "black",
        "experience_group": "Slow",
        "generation": 4
    },
    "shaymin": {
        "base_id": 492,
        "form_id": 0,
        "name": "Shaymin",
        "form_name": "Land Forme",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 4
    },
    "shaymin-sky": {
        "base_id": 492,
        "form_id": 1,
        "name": "Shaymin",
        "form_name": "Sky Forme",
        "pokemon_type": [
            "grass",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 4
    },
    "arceus": {
        "base_id": 493,
        "form_id": 0,
        "name": "Arceus",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "white",
        "experience_group": "Slow",
        "generation": 4
    },
    "victini": {
        "base_id": 494,
        "form_id": 0,
        "name": "Victini",
        "pokemon_type": [
            "psychic",
            "fire"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 5
    },
    "snivy": {
        "base_id": 495,
        "form_id": 0,
        "name": "Snivy",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "field",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                496,
                0
            ]
        ]
    },
    "servine": {
        "base_id": 496,
        "form_id": 0,
        "name": "Servine",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "field",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                497,
                0
            ]
        ]
    },
    "serperior": {
        "base_id": 497,
        "form_id": 0,
        "name": "Serperior",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "field",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "tepig": {
        "base_id": 498,
        "form_id": 0,
        "name": "Tepig",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                499,
                0
            ]
        ]
    },
    "pignite": {
        "base_id": 499,
        "form_id": 0,
        "name": "Pignite",
        "pokemon_type": [
            "fire",
            "fighting"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                500,
                0
            ]
        ]
    },
    "emboar": {
        "base_id": 500,
        "form_id": 0,
        "name": "Emboar",
        "pokemon_type": [
            "fire",
            "fighting"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "oshawott": {
        "base_id": 501,
        "form_id": 0,
        "name": "Oshawott",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                502,
                0
            ]
        ]
    },
    "dewott": {
        "base_id": 502,
        "form_id": 0,
        "name": "Dewott",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                503,
                0
            ],
            [
                503,
                1
            ]
        ]
    },
    "samurott": {
        "base_id": 503,
        "form_id": 0,
        "name": "Samurott",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "samurott-hisui": {
        "base_id": 503,
        "form_id": 1,
        "name": "Hisuian Samurott",
        "pokemon_type": [
            "water",
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 8
    },
    "patrat": {
        "base_id": 504,
        "form_id": 0,
        "name": "Patrat",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                505,
                0
            ]
        ]
    },
    "watchog": {
        "base_id": 505,
        "form_id": 0,
        "name": "Watchog",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "lillipup": {
        "base_id": 506,
        "form_id": 0,
        "name": "Lillipup",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                507,
                0
            ]
        ]
    },
    "herdier": {
        "base_id": 507,
        "form_id": 0,
        "name": "Herdier",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                508,
                0
            ]
        ]
    },
    "stoutland": {
        "base_id": 508,
        "form_id": 0,
        "name": "Stoutland",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "purrloin": {
        "base_id": 509,
        "form_id": 0,
        "name": "Purrloin",
        "pokemon_type": [
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                510,
                0
            ]
        ]
    },
    "liepard": {
        "base_id": 510,
        "form_id": 0,
        "name": "Liepard",
        "pokemon_type": [
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "pansage": {
        "base_id": 511,
        "form_id": 0,
        "name": "Pansage",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                512,
                0
            ]
        ]
    },
    "simisage": {
        "base_id": 512,
        "form_id": 0,
        "name": "Simisage",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "pansear": {
        "base_id": 513,
        "form_id": 0,
        "name": "Pansear",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                514,
                0
            ]
        ]
    },
    "simisear": {
        "base_id": 514,
        "form_id": 0,
        "name": "Simisear",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "panpour": {
        "base_id": 515,
        "form_id": 0,
        "name": "Panpour",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                516,
                0
            ]
        ]
    },
    "simipour": {
        "base_id": 516,
        "form_id": 0,
        "name": "Simipour",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "munna": {
        "base_id": 517,
        "form_id": 0,
        "name": "Munna",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Fast",
        "generation": 5,
        "evolution_ids": [
            [
                518,
                0
            ]
        ]
    },
    "musharna": {
        "base_id": 518,
        "form_id": 0,
        "name": "Musharna",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Fast",
        "generation": 5
    },
    "pidove": {
        "base_id": 519,
        "form_id": 0,
        "name": "Pidove",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                520,
                0
            ]
        ]
    },
    "tranquill": {
        "base_id": 520,
        "form_id": 0,
        "name": "Tranquill",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                521,
                0
            ]
        ]
    },
    "unfezant": {
        "base_id": 521,
        "form_id": 0,
        "name": "Unfezant",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "blitzle": {
        "base_id": 522,
        "form_id": 0,
        "name": "Blitzle",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                523,
                0
            ]
        ]
    },
    "zebstrika": {
        "base_id": 523,
        "form_id": 0,
        "name": "Zebstrika",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "roggenrola": {
        "base_id": 524,
        "form_id": 0,
        "name": "Roggenrola",
        "pokemon_type": [
            "rock"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                525,
                0
            ]
        ]
    },
    "boldore": {
        "base_id": 525,
        "form_id": 0,
        "name": "Boldore",
        "pokemon_type": [
            "rock"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                526,
                0
            ]
        ]
    },
    "gigalith": {
        "base_id": 526,
        "form_id": 0,
        "name": "Gigalith",
        "pokemon_type": [
            "rock"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "woobat": {
        "base_id": 527,
        "form_id": 0,
        "name": "Woobat",
        "pokemon_type": [
            "psychic",
            "flying"
        ],
        "egg_group": [
            "flying",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                528,
                0
            ]
        ]
    },
    "swoobat": {
        "base_id": 528,
        "form_id": 0,
        "name": "Swoobat",
        "pokemon_type": [
            "psychic",
            "flying"
        ],
        "egg_group": [
            "flying",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "drilbur": {
        "base_id": 529,
        "form_id": 0,
        "name": "Drilbur",
        "pokemon_type": [
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                530,
                0
            ]
        ]
    },
    "excadrill": {
        "base_id": 530,
        "form_id": 0,
        "name": "Excadrill",
        "pokemon_type": [
            "ground",
            "steel"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "audino": {
        "base_id": 531,
        "form_id": 0,
        "name": "Audino",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Fast",
        "generation": 5
    },
    "audino-mega": {
        "base_id": 531,
        "form_id": 1,
        "name": "Mega Audino",
        "pokemon_type": [
            "normal",
            "fairy"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_mega": true,
        "color": "white",
        "experience_group": "Fast",
        "generation": 6
    },
    "timburr": {
        "base_id": 532,
        "form_id": 0,
        "name": "Timburr",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                533,
                0
            ]
        ]
    },
    "gurdurr": {
        "base_id": 533,
        "form_id": 0,
        "name": "Gurdurr",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                534,
                0
            ]
        ]
    },
    "conkeldurr": {
        "base_id": 534,
        "form_id": 0,
        "name": "Conkeldurr",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 2,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "tympole": {
        "base_id": 535,
        "form_id": 0,
        "name": "Tympole",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                536,
                0
            ]
        ]
    },
    "palpitoad": {
        "base_id": 536,
        "form_id": 0,
        "name": "Palpitoad",
        "pokemon_type": [
            "water",
            "ground"
        ],
        "egg_group": [
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                537,
                0
            ]
        ]
    },
    "seismitoad": {
        "base_id": 537,
        "form_id": 0,
        "name": "Seismitoad",
        "pokemon_type": [
            "water",
            "ground"
        ],
        "egg_group": [
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "throh": {
        "base_id": 538,
        "form_id": 0,
        "name": "Throh",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "sawk": {
        "base_id": 539,
        "form_id": 0,
        "name": "Sawk",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "sewaddle": {
        "base_id": 540,
        "form_id": 0,
        "name": "Sewaddle",
        "pokemon_type": [
            "bug",
            "grass"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                541,
                0
            ]
        ]
    },
    "swadloon": {
        "base_id": 541,
        "form_id": 0,
        "name": "Swadloon",
        "pokemon_type": [
            "bug",
            "grass"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                542,
                0
            ]
        ]
    },
    "leavanny": {
        "base_id": 542,
        "form_id": 0,
        "name": "Leavanny",
        "pokemon_type": [
            "bug",
            "grass"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "venipede": {
        "base_id": 543,
        "form_id": 0,
        "name": "Venipede",
        "pokemon_type": [
            "bug",
            "poison"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                544,
                0
            ]
        ]
    },
    "whirlipede": {
        "base_id": 544,
        "form_id": 0,
        "name": "Whirlipede",
        "pokemon_type": [
            "bug",
            "poison"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                545,
                0
            ]
        ]
    },
    "scolipede": {
        "base_id": 545,
        "form_id": 0,
        "name": "Scolipede",
        "pokemon_type": [
            "bug",
            "poison"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "cottonee": {
        "base_id": 546,
        "form_id": 0,
        "name": "Cottonee",
        "pokemon_type": [
            "grass",
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "grass"
            ]
        },
        "egg_group": [
            "fairy",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                547,
                0
            ]
        ]
    },
    "whimsicott": {
        "base_id": 547,
        "form_id": 0,
        "name": "Whimsicott",
        "pokemon_type": [
            "grass",
            "fairy"
        ],
        "past_type": {
            "generation": 6,
            "pokemon_type": [
                "grass"
            ]
        },
        "egg_group": [
            "fairy",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "petilil": {
        "base_id": 548,
        "form_id": 0,
        "name": "Petilil",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                549,
                0
            ],
            [
                549,
                1
            ]
        ]
    },
    "lilligant": {
        "base_id": 549,
        "form_id": 0,
        "name": "Lilligant",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "lilligant-hisui": {
        "base_id": 549,
        "form_id": 1,
        "name": "Hisuian Lilligant",
        "pokemon_type": [
            "grass",
            "fighting"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "basculin": {
        "base_id": 550,
        "form_id": 0,
        "name": "Basculin",
        "form_name": "Red-Striped Form",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "basculin-blue-striped": {
        "base_id": 550,
        "form_id": 1,
        "name": "Basculin",
        "form_name": "Blue-Striped Form",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "basculin-white-striped": {
        "base_id": 550,
        "form_id": 2,
        "name": "Basculin",
        "form_name": "White-Striped Form",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                902,
                0
            ],
            [
                902,
                1
            ]
        ]
    },
    "sandile": {
        "base_id": 551,
        "form_id": 0,
        "name": "Sandile",
        "pokemon_type": [
            "ground",
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                552,
                0
            ]
        ]
    },
    "krokorok": {
        "base_id": 552,
        "form_id": 0,
        "name": "Krokorok",
        "pokemon_type": [
            "ground",
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                553,
                0
            ]
        ]
    },
    "krookodile": {
        "base_id": 553,
        "form_id": 0,
        "name": "Krookodile",
        "pokemon_type": [
            "ground",
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "darumaka": {
        "base_id": 554,
        "form_id": 0,
        "name": "Darumaka",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                555,
                0
            ]
        ]
    },
    "darumaka-galar": {
        "base_id": 554,
        "form_id": 1,
        "name": "Galarian Darumaka",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Slow",
        "generation": 8,
        "evolution_ids": [
            [
                555,
                2
            ]
        ]
    },
    "darmanitan": {
        "base_id": 555,
        "form_id": 0,
        "name": "Darmanitan",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "darmanitan-galar": {
        "base_id": 555,
        "form_id": 2,
        "name": "Galarian Darmanitan",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Slow",
        "generation": 8
    },
    "maractus": {
        "base_id": 556,
        "form_id": 0,
        "name": "Maractus",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "dwebble": {
        "base_id": 557,
        "form_id": 0,
        "name": "Dwebble",
        "pokemon_type": [
            "bug",
            "rock"
        ],
        "egg_group": [
            "bug",
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                558,
                0
            ]
        ]
    },
    "crustle": {
        "base_id": 558,
        "form_id": 0,
        "name": "Crustle",
        "pokemon_type": [
            "bug",
            "rock"
        ],
        "egg_group": [
            "bug",
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "scraggy": {
        "base_id": 559,
        "form_id": 0,
        "name": "Scraggy",
        "pokemon_type": [
            "dark",
            "fighting"
        ],
        "egg_group": [
            "field",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                560,
                0
            ]
        ]
    },
    "scrafty": {
        "base_id": 560,
        "form_id": 0,
        "name": "Scrafty",
        "pokemon_type": [
            "dark",
            "fighting"
        ],
        "egg_group": [
            "field",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "sigilyph": {
        "base_id": 561,
        "form_id": 0,
        "name": "Sigilyph",
        "pokemon_type": [
            "psychic",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "yamask": {
        "base_id": 562,
        "form_id": 0,
        "name": "Yamask",
        "pokemon_type": [
            "ghost"
        ],
        "egg_group": [
            "mineral",
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                563,
                0
            ]
        ]
    },
    "yamask-galar": {
        "base_id": 562,
        "form_id": 1,
        "name": "Galarian Yamask",
        "pokemon_type": [
            "ground",
            "ghost"
        ],
        "egg_group": [
            "mineral",
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                867,
                0
            ]
        ]
    },
    "cofagrigus": {
        "base_id": 563,
        "form_id": 0,
        "name": "Cofagrigus",
        "pokemon_type": [
            "ghost"
        ],
        "egg_group": [
            "mineral",
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "tirtouga": {
        "base_id": 564,
        "form_id": 0,
        "name": "Tirtouga",
        "pokemon_type": [
            "water",
            "rock"
        ],
        "egg_group": [
            "water_1",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                565,
                0
            ]
        ]
    },
    "carracosta": {
        "base_id": 565,
        "form_id": 0,
        "name": "Carracosta",
        "pokemon_type": [
            "water",
            "rock"
        ],
        "egg_group": [
            "water_1",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "archen": {
        "base_id": 566,
        "form_id": 0,
        "name": "Archen",
        "pokemon_type": [
            "rock",
            "flying"
        ],
        "egg_group": [
            "flying",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                567,
                0
            ]
        ]
    },
    "archeops": {
        "base_id": 567,
        "form_id": 0,
        "name": "Archeops",
        "pokemon_type": [
            "rock",
            "flying"
        ],
        "egg_group": [
            "flying",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "trubbish": {
        "base_id": 568,
        "form_id": 0,
        "name": "Trubbish",
        "pokemon_type": [
            "poison"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                569,
                0
            ]
        ]
    },
    "garbodor": {
        "base_id": 569,
        "form_id": 0,
        "name": "Garbodor",
        "pokemon_type": [
            "poison"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "zorua": {
        "base_id": 570,
        "form_id": 0,
        "name": "Zorua",
        "pokemon_type": [
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                571,
                0
            ]
        ]
    },
    "zorua-hisui": {
        "base_id": 570,
        "form_id": 1,
        "name": "Hisuian Zorua",
        "pokemon_type": [
            "normal",
            "ghost"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 8,
        "evolution_ids": [
            [
                571,
                1
            ]
        ]
    },
    "zoroark": {
        "base_id": 571,
        "form_id": 0,
        "name": "Zoroark",
        "pokemon_type": [
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "zoroark-hisui": {
        "base_id": 571,
        "form_id": 1,
        "name": "Hisuian Zoroark",
        "pokemon_type": [
            "normal",
            "ghost"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 8
    },
    "minccino": {
        "base_id": 572,
        "form_id": 0,
        "name": "Minccino",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "gray",
        "experience_group": "Fast",
        "generation": 5,
        "evolution_ids": [
            [
                573,
                0
            ]
        ]
    },
    "cinccino": {
        "base_id": 573,
        "form_id": 0,
        "name": "Cinccino",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "gray",
        "experience_group": "Fast",
        "generation": 5
    },
    "gothita": {
        "base_id": 574,
        "form_id": 0,
        "name": "Gothita",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                575,
                0
            ]
        ]
    },
    "gothorita": {
        "base_id": 575,
        "form_id": 0,
        "name": "Gothorita",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                576,
                0
            ]
        ]
    },
    "gothitelle": {
        "base_id": 576,
        "form_id": 0,
        "name": "Gothitelle",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "solosis": {
        "base_id": 577,
        "form_id": 0,
        "name": "Solosis",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                578,
                0
            ]
        ]
    },
    "duosion": {
        "base_id": 578,
        "form_id": 0,
        "name": "Duosion",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                579,
                0
            ]
        ]
    },
    "reuniclus": {
        "base_id": 579,
        "form_id": 0,
        "name": "Reuniclus",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "ducklett": {
        "base_id": 580,
        "form_id": 0,
        "name": "Ducklett",
        "pokemon_type": [
            "water",
            "flying"
        ],
        "egg_group": [
            "water_1",
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                581,
                0
            ]
        ]
    },
    "swanna": {
        "base_id": 581,
        "form_id": 0,
        "name": "Swanna",
        "pokemon_type": [
            "water",
            "flying"
        ],
        "egg_group": [
            "water_1",
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "vanillite": {
        "base_id": 582,
        "form_id": 0,
        "name": "Vanillite",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Slow",
        "generation": 5,
        "evolution_ids": [
            [
                583,
                0
            ]
        ]
    },
    "vanillish": {
        "base_id": 583,
        "form_id": 0,
        "name": "Vanillish",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Slow",
        "generation": 5,
        "evolution_ids": [
            [
                584,
                0
            ]
        ]
    },
    "vanilluxe": {
        "base_id": 584,
        "form_id": 0,
        "name": "Vanilluxe",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Slow",
        "generation": 5
    },
    "deerling": {
        "base_id": 585,
        "form_id": 0,
        "name": "Deerling",
        "form_name": "Spring Form",
        "pokemon_type": [
            "normal",
            "grass"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                586,
                0
            ]
        ]
    },
    "deerling-summer": {
        "base_id": 585,
        "form_id": 1,
        "name": "Deerling",
        "form_name": "Summer Form",
        "pokemon_type": [
            "normal",
            "grass"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                586,
                1
            ]
        ]
    },
    "deerling-autumn": {
        "base_id": 585,
        "form_id": 2,
        "name": "Deerling",
        "form_name": "Autumn Form",
        "pokemon_type": [
            "normal",
            "grass"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                586,
                2
            ]
        ]
    },
    "deerling-winter": {
        "base_id": 585,
        "form_id": 3,
        "name": "Deerling",
        "form_name": "Winter Form",
        "pokemon_type": [
            "normal",
            "grass"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                586,
                3
            ]
        ]
    },
    "sawsbuck": {
        "base_id": 586,
        "form_id": 0,
        "name": "Sawsbuck",
        "form_name": "Spring Form",
        "pokemon_type": [
            "normal",
            "grass"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "sawsbuck-summer": {
        "base_id": 586,
        "form_id": 1,
        "name": "Sawsbuck",
        "form_name": "Summer Form",
        "pokemon_type": [
            "normal",
            "grass"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "sawsbuck-autumn": {
        "base_id": 586,
        "form_id": 2,
        "name": "Sawsbuck",
        "form_name": "Autumn Form",
        "pokemon_type": [
            "normal",
            "grass"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "sawsbuck-winter": {
        "base_id": 586,
        "form_id": 3,
        "name": "Sawsbuck",
        "form_name": "Winter Form",
        "pokemon_type": [
            "normal",
            "grass"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "emolga": {
        "base_id": 587,
        "form_id": 0,
        "name": "Emolga",
        "pokemon_type": [
            "electric",
            "flying"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "karrablast": {
        "base_id": 588,
        "form_id": 0,
        "name": "Karrablast",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                589,
                0
            ]
        ]
    },
    "escavalier": {
        "base_id": 589,
        "form_id": 0,
        "name": "Escavalier",
        "pokemon_type": [
            "bug",
            "steel"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "foongus": {
        "base_id": 590,
        "form_id": 0,
        "name": "Foongus",
        "pokemon_type": [
            "grass",
            "poison"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                591,
                0
            ]
        ]
    },
    "amoonguss": {
        "base_id": 591,
        "form_id": 0,
        "name": "Amoonguss",
        "pokemon_type": [
            "grass",
            "poison"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "frillish": {
        "base_id": 592,
        "form_id": 0,
        "name": "Frillish",
        "pokemon_type": [
            "water",
            "ghost"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                593,
                0
            ]
        ]
    },
    "jellicent": {
        "base_id": 593,
        "form_id": 0,
        "name": "Jellicent",
        "pokemon_type": [
            "water",
            "ghost"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "alomomola": {
        "base_id": 594,
        "form_id": 0,
        "name": "Alomomola",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Fast",
        "generation": 5
    },
    "joltik": {
        "base_id": 595,
        "form_id": 0,
        "name": "Joltik",
        "pokemon_type": [
            "bug",
            "electric"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                596,
                0
            ]
        ]
    },
    "galvantula": {
        "base_id": 596,
        "form_id": 0,
        "name": "Galvantula",
        "pokemon_type": [
            "bug",
            "electric"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "ferroseed": {
        "base_id": 597,
        "form_id": 0,
        "name": "Ferroseed",
        "pokemon_type": [
            "grass",
            "steel"
        ],
        "egg_group": [
            "grass",
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                598,
                0
            ]
        ]
    },
    "ferrothorn": {
        "base_id": 598,
        "form_id": 0,
        "name": "Ferrothorn",
        "pokemon_type": [
            "grass",
            "steel"
        ],
        "egg_group": [
            "grass",
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "klink": {
        "base_id": 599,
        "form_id": 0,
        "name": "Klink",
        "pokemon_type": [
            "steel"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                600,
                0
            ]
        ]
    },
    "klang": {
        "base_id": 600,
        "form_id": 0,
        "name": "Klang",
        "pokemon_type": [
            "steel"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                601,
                0
            ]
        ]
    },
    "klinklang": {
        "base_id": 601,
        "form_id": 0,
        "name": "Klinklang",
        "pokemon_type": [
            "steel"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "tynamo": {
        "base_id": 602,
        "form_id": 0,
        "name": "Tynamo",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Slow",
        "generation": 5,
        "evolution_ids": [
            [
                603,
                0
            ]
        ]
    },
    "eelektrik": {
        "base_id": 603,
        "form_id": 0,
        "name": "Eelektrik",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 5,
        "evolution_ids": [
            [
                604,
                0
            ]
        ]
    },
    "eelektross": {
        "base_id": 604,
        "form_id": 0,
        "name": "Eelektross",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 5
    },
    "elgyem": {
        "base_id": 605,
        "form_id": 0,
        "name": "Elgyem",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                606,
                0
            ]
        ]
    },
    "beheeyem": {
        "base_id": 606,
        "form_id": 0,
        "name": "Beheeyem",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "litwick": {
        "base_id": 607,
        "form_id": 0,
        "name": "Litwick",
        "pokemon_type": [
            "ghost",
            "fire"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                608,
                0
            ]
        ]
    },
    "lampent": {
        "base_id": 608,
        "form_id": 0,
        "name": "Lampent",
        "pokemon_type": [
            "ghost",
            "fire"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                609,
                0
            ]
        ]
    },
    "chandelure": {
        "base_id": 609,
        "form_id": 0,
        "name": "Chandelure",
        "pokemon_type": [
            "ghost",
            "fire"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "axew": {
        "base_id": 610,
        "form_id": 0,
        "name": "Axew",
        "pokemon_type": [
            "dragon"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Slow",
        "generation": 5,
        "evolution_ids": [
            [
                611,
                0
            ]
        ]
    },
    "fraxure": {
        "base_id": 611,
        "form_id": 0,
        "name": "Fraxure",
        "pokemon_type": [
            "dragon"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Slow",
        "generation": 5,
        "evolution_ids": [
            [
                612,
                0
            ]
        ]
    },
    "haxorus": {
        "base_id": 612,
        "form_id": 0,
        "name": "Haxorus",
        "pokemon_type": [
            "dragon"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 5
    },
    "cubchoo": {
        "base_id": 613,
        "form_id": 0,
        "name": "Cubchoo",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                614,
                0
            ]
        ]
    },
    "beartic": {
        "base_id": 614,
        "form_id": 0,
        "name": "Beartic",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "cryogonal": {
        "base_id": 615,
        "form_id": 0,
        "name": "Cryogonal",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "shelmet": {
        "base_id": 616,
        "form_id": 0,
        "name": "Shelmet",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                617,
                0
            ]
        ]
    },
    "accelgor": {
        "base_id": 617,
        "form_id": 0,
        "name": "Accelgor",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "stunfisk": {
        "base_id": 618,
        "form_id": 0,
        "name": "Stunfisk",
        "pokemon_type": [
            "ground",
            "electric"
        ],
        "egg_group": [
            "water_1",
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "stunfisk-galar": {
        "base_id": 618,
        "form_id": 1,
        "name": "Galarian Stunfisk",
        "pokemon_type": [
            "ground",
            "steel"
        ],
        "egg_group": [
            "water_1",
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "mienfoo": {
        "base_id": 619,
        "form_id": 0,
        "name": "Mienfoo",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "field",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Slow",
        "generation": 5,
        "evolution_ids": [
            [
                620,
                0
            ]
        ]
    },
    "mienshao": {
        "base_id": 620,
        "form_id": 0,
        "name": "Mienshao",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "field",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 5
    },
    "druddigon": {
        "base_id": 621,
        "form_id": 0,
        "name": "Druddigon",
        "pokemon_type": [
            "dragon"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "golett": {
        "base_id": 622,
        "form_id": 0,
        "name": "Golett",
        "pokemon_type": [
            "ground",
            "ghost"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                623,
                0
            ]
        ]
    },
    "golurk": {
        "base_id": 623,
        "form_id": 0,
        "name": "Golurk",
        "pokemon_type": [
            "ground",
            "ghost"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "pawniard": {
        "base_id": 624,
        "form_id": 0,
        "name": "Pawniard",
        "pokemon_type": [
            "dark",
            "steel"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 5,
        "evolution_ids": [
            [
                625,
                0
            ]
        ]
    },
    "bisharp": {
        "base_id": 625,
        "form_id": 0,
        "name": "Bisharp",
        "pokemon_type": [
            "dark",
            "steel"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "bouffalant": {
        "base_id": 626,
        "form_id": 0,
        "name": "Bouffalant",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "rufflet": {
        "base_id": 627,
        "form_id": 0,
        "name": "Rufflet",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "white",
        "experience_group": "Slow",
        "generation": 5,
        "evolution_ids": [
            [
                628,
                0
            ],
            [
                628,
                1
            ]
        ]
    },
    "braviary": {
        "base_id": 628,
        "form_id": 0,
        "name": "Braviary",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "red",
        "experience_group": "Slow",
        "generation": 5
    },
    "braviary-hisui": {
        "base_id": 628,
        "form_id": 1,
        "name": "Hisuian Braviary",
        "pokemon_type": [
            "psychic",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "white",
        "experience_group": "Slow",
        "generation": 8
    },
    "vullaby": {
        "base_id": 629,
        "form_id": 0,
        "name": "Vullaby",
        "pokemon_type": [
            "dark",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 5,
        "evolution_ids": [
            [
                630,
                0
            ]
        ]
    },
    "mandibuzz": {
        "base_id": 630,
        "form_id": 0,
        "name": "Mandibuzz",
        "pokemon_type": [
            "dark",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 5
    },
    "heatmor": {
        "base_id": 631,
        "form_id": 0,
        "name": "Heatmor",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "durant": {
        "base_id": 632,
        "form_id": 0,
        "name": "Durant",
        "pokemon_type": [
            "bug",
            "steel"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 5
    },
    "deino": {
        "base_id": 633,
        "form_id": 0,
        "name": "Deino",
        "pokemon_type": [
            "dark",
            "dragon"
        ],
        "egg_group": [
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 5,
        "evolution_ids": [
            [
                634,
                0
            ]
        ]
    },
    "zweilous": {
        "base_id": 634,
        "form_id": 0,
        "name": "Zweilous",
        "pokemon_type": [
            "dark",
            "dragon"
        ],
        "egg_group": [
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 5,
        "evolution_ids": [
            [
                635,
                0
            ]
        ]
    },
    "hydreigon": {
        "base_id": 635,
        "form_id": 0,
        "name": "Hydreigon",
        "pokemon_type": [
            "dark",
            "dragon"
        ],
        "egg_group": [
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 5
    },
    "larvesta": {
        "base_id": 636,
        "form_id": 0,
        "name": "Larvesta",
        "pokemon_type": [
            "bug",
            "fire"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Slow",
        "generation": 5,
        "evolution_ids": [
            [
                637,
                0
            ]
        ]
    },
    "volcarona": {
        "base_id": 637,
        "form_id": 0,
        "name": "Volcarona",
        "pokemon_type": [
            "bug",
            "fire"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Slow",
        "generation": 5
    },
    "cobalion": {
        "base_id": 638,
        "form_id": 0,
        "name": "Cobalion",
        "pokemon_type": [
            "steel",
            "fighting"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 5
    },
    "terrakion": {
        "base_id": 639,
        "form_id": 0,
        "name": "Terrakion",
        "pokemon_type": [
            "rock",
            "fighting"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 5
    },
    "virizion": {
        "base_id": 640,
        "form_id": 0,
        "name": "Virizion",
        "pokemon_type": [
            "grass",
            "fighting"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "green",
        "experience_group": "Slow",
        "generation": 5
    },
    "tornadus": {
        "base_id": 641,
        "form_id": 0,
        "name": "Tornadus",
        "form_name": "Incarnate Form",
        "pokemon_type": [
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "is_sublegendary": true,
        "color": "green",
        "experience_group": "Slow",
        "generation": 5
    },
    "tornadus-therian": {
        "base_id": 641,
        "form_id": 1,
        "name": "Tornadus",
        "form_name": "Therian Forme",
        "pokemon_type": [
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "is_sublegendary": true,
        "color": "green",
        "experience_group": "Slow",
        "generation": 5
    },
    "thundurus": {
        "base_id": 642,
        "form_id": 0,
        "name": "Thundurus",
        "form_name": "Incarnate Form",
        "pokemon_type": [
            "electric",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "is_sublegendary": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 5
    },
    "thundurus-therian": {
        "base_id": 642,
        "form_id": 1,
        "name": "Thundurus",
        "form_name": "Therian Forme",
        "pokemon_type": [
            "electric",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "is_sublegendary": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 5
    },
    "reshiram": {
        "base_id": 643,
        "form_id": 0,
        "name": "Reshiram",
        "pokemon_type": [
            "dragon",
            "fire"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "white",
        "experience_group": "Slow",
        "generation": 5
    },
    "zekrom": {
        "base_id": 644,
        "form_id": 0,
        "name": "Zekrom",
        "pokemon_type": [
            "dragon",
            "electric"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "black",
        "experience_group": "Slow",
        "generation": 5
    },
    "landorus": {
        "base_id": 645,
        "form_id": 0,
        "name": "Landorus",
        "form_name": "Incarnate Form",
        "pokemon_type": [
            "ground",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "is_sublegendary": true,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 5
    },
    "landorus-therian": {
        "base_id": 645,
        "form_id": 1,
        "name": "Landorus",
        "form_name": "Therian Forme",
        "pokemon_type": [
            "ground",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "is_sublegendary": true,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 5
    },
    "kyurem": {
        "base_id": 646,
        "form_id": 0,
        "name": "Kyurem",
        "pokemon_type": [
            "dragon",
            "ice"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 5
    },
    "kyurem-white": {
        "base_id": 646,
        "form_id": 1,
        "name": "White Kyurem",
        "pokemon_type": [
            "dragon",
            "ice"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 5
    },
    "kyurem-black": {
        "base_id": 646,
        "form_id": 2,
        "name": "Black Kyurem",
        "pokemon_type": [
            "dragon",
            "ice"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 5
    },
    "keldeo": {
        "base_id": 647,
        "form_id": 0,
        "name": "Keldeo",
        "pokemon_type": [
            "water",
            "fighting"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 5
    },
    "meloetta": {
        "base_id": 648,
        "form_id": 0,
        "name": "Meloetta",
        "pokemon_type": [
            "normal",
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "white",
        "experience_group": "Slow",
        "generation": 5
    },
    "genesect": {
        "base_id": 649,
        "form_id": 0,
        "name": "Genesect",
        "pokemon_type": [
            "bug",
            "steel"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 5
    },
    "chespin": {
        "base_id": 650,
        "form_id": 0,
        "name": "Chespin",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 6,
        "evolution_ids": [
            [
                651,
                0
            ]
        ]
    },
    "quilladin": {
        "base_id": 651,
        "form_id": 0,
        "name": "Quilladin",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 6,
        "evolution_ids": [
            [
                652,
                0
            ]
        ]
    },
    "chesnaught": {
        "base_id": 652,
        "form_id": 0,
        "name": "Chesnaught",
        "pokemon_type": [
            "grass",
            "fighting"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "fennekin": {
        "base_id": 653,
        "form_id": 0,
        "name": "Fennekin",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 6,
        "evolution_ids": [
            [
                654,
                0
            ]
        ]
    },
    "braixen": {
        "base_id": 654,
        "form_id": 0,
        "name": "Braixen",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 6,
        "evolution_ids": [
            [
                655,
                0
            ]
        ]
    },
    "delphox": {
        "base_id": 655,
        "form_id": 0,
        "name": "Delphox",
        "pokemon_type": [
            "fire",
            "psychic"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "froakie": {
        "base_id": 656,
        "form_id": 0,
        "name": "Froakie",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 6,
        "evolution_ids": [
            [
                657,
                0
            ]
        ]
    },
    "frogadier": {
        "base_id": 657,
        "form_id": 0,
        "name": "Frogadier",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 6,
        "evolution_ids": [
            [
                658,
                0
            ]
        ]
    },
    "greninja": {
        "base_id": 658,
        "form_id": 0,
        "name": "Greninja",
        "pokemon_type": [
            "water",
            "dark"
        ],
        "egg_group": [
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "bunnelby": {
        "base_id": 659,
        "form_id": 0,
        "name": "Bunnelby",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                660,
                0
            ]
        ]
    },
    "diggersby": {
        "base_id": 660,
        "form_id": 0,
        "name": "Diggersby",
        "pokemon_type": [
            "normal",
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "fletchling": {
        "base_id": 661,
        "form_id": 0,
        "name": "Fletchling",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 6,
        "evolution_ids": [
            [
                662,
                0
            ]
        ]
    },
    "fletchinder": {
        "base_id": 662,
        "form_id": 0,
        "name": "Fletchinder",
        "pokemon_type": [
            "fire",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 6,
        "evolution_ids": [
            [
                663,
                0
            ]
        ]
    },
    "talonflame": {
        "base_id": 663,
        "form_id": 0,
        "name": "Talonflame",
        "pokemon_type": [
            "fire",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "scatterbug": {
        "base_id": 664,
        "form_id": 6,
        "name": "Scatterbug",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                665,
                6
            ]
        ]
    },
    "spewpa": {
        "base_id": 665,
        "form_id": 6,
        "name": "Spewpa",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                666,
                6
            ]
        ]
    },
    "vivillon": {
        "base_id": 666,
        "form_id": 6,
        "name": "Vivillon",
        "form_name": "Meadow Pattern",
        "pokemon_type": [
            "bug",
            "flying"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "litleo": {
        "base_id": 667,
        "form_id": 0,
        "name": "Litleo",
        "pokemon_type": [
            "fire",
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 7,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 6,
        "evolution_ids": [
            [
                668,
                0
            ]
        ]
    },
    "pyroar": {
        "base_id": 668,
        "form_id": 0,
        "name": "Pyroar",
        "pokemon_type": [
            "fire",
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fd",
            "md"
        ],
        "gender_ratio": 7,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 6
    },
    "flabebe": {
        "base_id": 669,
        "form_id": 0,
        "name": "Flab\u00c3\u00a9b\u00c3\u00a9",
        "form_name": "Red Flower",
        "pokemon_type": [
            "fairy"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                670,
                0
            ]
        ]
    },
    "floette": {
        "base_id": 670,
        "form_id": 0,
        "name": "Floette",
        "form_name": "Red Flower",
        "pokemon_type": [
            "fairy"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                671,
                0
            ]
        ]
    },
    "florges": {
        "base_id": 671,
        "form_id": 0,
        "name": "Florges",
        "form_name": "Red Flower",
        "pokemon_type": [
            "fairy"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "skiddo": {
        "base_id": 672,
        "form_id": 0,
        "name": "Skiddo",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                673,
                0
            ]
        ]
    },
    "gogoat": {
        "base_id": 673,
        "form_id": 0,
        "name": "Gogoat",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "pancham": {
        "base_id": 674,
        "form_id": 0,
        "name": "Pancham",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "field",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                675,
                0
            ]
        ]
    },
    "pangoro": {
        "base_id": 675,
        "form_id": 0,
        "name": "Pangoro",
        "pokemon_type": [
            "fighting",
            "dark"
        ],
        "egg_group": [
            "field",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "furfrou": {
        "base_id": 676,
        "form_id": 0,
        "name": "Furfrou",
        "form_name": "Natural Form",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "espurr": {
        "base_id": 677,
        "form_id": 0,
        "name": "Espurr",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                678,
                0
            ],
            [
                678,
                1
            ]
        ]
    },
    "meowstic": {
        "base_id": 678,
        "form_id": 0,
        "name": "Meowstic",
        "form_name": "Male",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "meowstic-female": {
        "base_id": 678,
        "form_id": 1,
        "name": "Meowstic",
        "form_name": "Female",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "honedge": {
        "base_id": 679,
        "form_id": 0,
        "name": "Honedge",
        "pokemon_type": [
            "steel",
            "ghost"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                680,
                0
            ]
        ]
    },
    "doublade": {
        "base_id": 680,
        "form_id": 0,
        "name": "Doublade",
        "pokemon_type": [
            "steel",
            "ghost"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                681,
                1
            ]
        ]
    },
    "aegislash": {
        "base_id": 681,
        "form_id": 1,
        "name": "Aegislash",
        "pokemon_type": [
            "steel",
            "ghost"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "spritzee": {
        "base_id": 682,
        "form_id": 0,
        "name": "Spritzee",
        "pokemon_type": [
            "fairy"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                683,
                0
            ]
        ]
    },
    "aromatisse": {
        "base_id": 683,
        "form_id": 0,
        "name": "Aromatisse",
        "pokemon_type": [
            "fairy"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "swirlix": {
        "base_id": 684,
        "form_id": 0,
        "name": "Swirlix",
        "pokemon_type": [
            "fairy"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                685,
                0
            ]
        ]
    },
    "slurpuff": {
        "base_id": 685,
        "form_id": 0,
        "name": "Slurpuff",
        "pokemon_type": [
            "fairy"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "inkay": {
        "base_id": 686,
        "form_id": 0,
        "name": "Inkay",
        "pokemon_type": [
            "dark",
            "psychic"
        ],
        "egg_group": [
            "water_1",
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                687,
                0
            ]
        ]
    },
    "malamar": {
        "base_id": 687,
        "form_id": 0,
        "name": "Malamar",
        "pokemon_type": [
            "dark",
            "psychic"
        ],
        "egg_group": [
            "water_1",
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "binacle": {
        "base_id": 688,
        "form_id": 0,
        "name": "Binacle",
        "pokemon_type": [
            "rock",
            "water"
        ],
        "egg_group": [
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                689,
                0
            ]
        ]
    },
    "barbaracle": {
        "base_id": 689,
        "form_id": 0,
        "name": "Barbaracle",
        "pokemon_type": [
            "rock",
            "water"
        ],
        "egg_group": [
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "skrelp": {
        "base_id": 690,
        "form_id": 0,
        "name": "Skrelp",
        "pokemon_type": [
            "poison",
            "water"
        ],
        "egg_group": [
            "water_1",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                691,
                0
            ]
        ]
    },
    "dragalge": {
        "base_id": 691,
        "form_id": 0,
        "name": "Dragalge",
        "pokemon_type": [
            "poison",
            "dragon"
        ],
        "egg_group": [
            "water_1",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "clauncher": {
        "base_id": 692,
        "form_id": 0,
        "name": "Clauncher",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 6,
        "evolution_ids": [
            [
                693,
                0
            ]
        ]
    },
    "clawitzer": {
        "base_id": 693,
        "form_id": 0,
        "name": "Clawitzer",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 6
    },
    "helioptile": {
        "base_id": 694,
        "form_id": 0,
        "name": "Helioptile",
        "pokemon_type": [
            "electric",
            "normal"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                695,
                0
            ]
        ]
    },
    "heliolisk": {
        "base_id": 695,
        "form_id": 0,
        "name": "Heliolisk",
        "pokemon_type": [
            "electric",
            "normal"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "tyrunt": {
        "base_id": 696,
        "form_id": 0,
        "name": "Tyrunt",
        "pokemon_type": [
            "rock",
            "dragon"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                697,
                0
            ]
        ]
    },
    "tyrantrum": {
        "base_id": 697,
        "form_id": 0,
        "name": "Tyrantrum",
        "pokemon_type": [
            "rock",
            "dragon"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "amaura": {
        "base_id": 698,
        "form_id": 0,
        "name": "Amaura",
        "pokemon_type": [
            "rock",
            "ice"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                699,
                0
            ]
        ]
    },
    "aurorus": {
        "base_id": 699,
        "form_id": 0,
        "name": "Aurorus",
        "pokemon_type": [
            "rock",
            "ice"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "sylveon": {
        "base_id": 700,
        "form_id": 0,
        "name": "Sylveon",
        "pokemon_type": [
            "fairy"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "hawlucha": {
        "base_id": 701,
        "form_id": 0,
        "name": "Hawlucha",
        "pokemon_type": [
            "fighting",
            "flying"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "dedenne": {
        "base_id": 702,
        "form_id": 0,
        "name": "Dedenne",
        "pokemon_type": [
            "electric",
            "fairy"
        ],
        "egg_group": [
            "field",
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "carbink": {
        "base_id": 703,
        "form_id": 0,
        "name": "Carbink",
        "pokemon_type": [
            "rock",
            "fairy"
        ],
        "egg_group": [
            "fairy",
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 6
    },
    "goomy": {
        "base_id": 704,
        "form_id": 0,
        "name": "Goomy",
        "pokemon_type": [
            "dragon"
        ],
        "egg_group": [
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 6,
        "evolution_ids": [
            [
                705,
                0
            ],
            [
                705,
                1
            ]
        ]
    },
    "sliggoo": {
        "base_id": 705,
        "form_id": 0,
        "name": "Sliggoo",
        "pokemon_type": [
            "dragon"
        ],
        "egg_group": [
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 6,
        "evolution_ids": [
            [
                706,
                0
            ]
        ]
    },
    "sliggoo-hisui": {
        "base_id": 705,
        "form_id": 1,
        "name": "Hisuian Sliggoo",
        "pokemon_type": [
            "steel",
            "dragon"
        ],
        "egg_group": [
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 8,
        "evolution_ids": [
            [
                706,
                1
            ]
        ]
    },
    "goodra": {
        "base_id": 706,
        "form_id": 0,
        "name": "Goodra",
        "pokemon_type": [
            "dragon"
        ],
        "egg_group": [
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 6
    },
    "goodra-hisui": {
        "base_id": 706,
        "form_id": 1,
        "name": "Hisuian Goodra",
        "pokemon_type": [
            "steel",
            "dragon"
        ],
        "egg_group": [
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 8
    },
    "klefki": {
        "base_id": 707,
        "form_id": 0,
        "name": "Klefki",
        "pokemon_type": [
            "steel",
            "fairy"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Fast",
        "generation": 6
    },
    "phantump": {
        "base_id": 708,
        "form_id": 0,
        "name": "Phantump",
        "pokemon_type": [
            "ghost",
            "grass"
        ],
        "egg_group": [
            "grass",
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                709,
                0
            ]
        ]
    },
    "trevenant": {
        "base_id": 709,
        "form_id": 0,
        "name": "Trevenant",
        "pokemon_type": [
            "ghost",
            "grass"
        ],
        "egg_group": [
            "grass",
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "pumpkaboo": {
        "base_id": 710,
        "form_id": 0,
        "name": "Pumpkaboo",
        "pokemon_type": [
            "ghost",
            "grass"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                711,
                0
            ]
        ]
    },
    "gourgeist": {
        "base_id": 711,
        "form_id": 0,
        "name": "Gourgeist",
        "pokemon_type": [
            "ghost",
            "grass"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "bergmite": {
        "base_id": 712,
        "form_id": 0,
        "name": "Bergmite",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                713,
                0
            ],
            [
                713,
                1
            ]
        ]
    },
    "avalugg": {
        "base_id": 713,
        "form_id": 0,
        "name": "Avalugg",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "avalugg-hisui": {
        "base_id": 713,
        "form_id": 1,
        "name": "Hisuian Avalugg",
        "pokemon_type": [
            "ice",
            "rock"
        ],
        "egg_group": [
            "monster"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "noibat": {
        "base_id": 714,
        "form_id": 0,
        "name": "Noibat",
        "pokemon_type": [
            "flying",
            "dragon"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 6,
        "evolution_ids": [
            [
                715,
                0
            ]
        ]
    },
    "noivern": {
        "base_id": 715,
        "form_id": 0,
        "name": "Noivern",
        "pokemon_type": [
            "flying",
            "dragon"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 6
    },
    "xerneas": {
        "base_id": 716,
        "form_id": 1,
        "name": "Xerneas",
        "pokemon_type": [
            "fairy"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 6
    },
    "yveltal": {
        "base_id": 717,
        "form_id": 0,
        "name": "Yveltal",
        "pokemon_type": [
            "dark",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "red",
        "experience_group": "Slow",
        "generation": 6
    },
    "zygarde": {
        "base_id": 718,
        "form_id": 0,
        "name": "Zygarde",
        "pokemon_type": [
            "dragon",
            "ground"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "green",
        "experience_group": "Slow",
        "generation": 6
    },
    "zygarde-10": {
        "base_id": 718,
        "form_id": 2,
        "name": "Zygarde",
        "form_name": "10% Forme",
        "pokemon_type": [
            "dragon",
            "ground"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "black",
        "experience_group": "Slow",
        "generation": 7
    },
    "zygarde-complete": {
        "base_id": 718,
        "form_id": 4,
        "name": "Zygarde",
        "form_name": "Complete Forme",
        "pokemon_type": [
            "dragon",
            "ground"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "black",
        "experience_group": "Slow",
        "generation": 7
    },
    "diancie": {
        "base_id": 719,
        "form_id": 0,
        "name": "Diancie",
        "pokemon_type": [
            "rock",
            "fairy"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "pink",
        "experience_group": "Slow",
        "generation": 6
    },
    "diancie-mega": {
        "base_id": 719,
        "form_id": 1,
        "name": "Mega Diancie",
        "pokemon_type": [
            "rock",
            "fairy"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "is_mega": true,
        "color": "pink",
        "experience_group": "Slow",
        "generation": 6
    },
    "hoopa": {
        "base_id": 720,
        "form_id": 0,
        "name": "Hoopa Confined",
        "pokemon_type": [
            "psychic",
            "ghost"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 6
    },
    "hoopa-unbound": {
        "base_id": 720,
        "form_id": 1,
        "name": "Hoopa Unbound",
        "pokemon_type": [
            "psychic",
            "dark"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 6
    },
    "volcanion": {
        "base_id": 721,
        "form_id": 0,
        "name": "Volcanion",
        "pokemon_type": [
            "fire",
            "water"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 6
    },
    "rowlet": {
        "base_id": 722,
        "form_id": 0,
        "name": "Rowlet",
        "pokemon_type": [
            "grass",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 7,
        "evolution_ids": [
            [
                723,
                0
            ]
        ]
    },
    "dartrix": {
        "base_id": 723,
        "form_id": 0,
        "name": "Dartrix",
        "pokemon_type": [
            "grass",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 7,
        "evolution_ids": [
            [
                724,
                0
            ],
            [
                724,
                1
            ]
        ]
    },
    "decidueye": {
        "base_id": 724,
        "form_id": 0,
        "name": "Decidueye",
        "pokemon_type": [
            "grass",
            "ghost"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 7
    },
    "decidueye-hisui": {
        "base_id": 724,
        "form_id": 1,
        "name": "Hisuian Decidueye",
        "pokemon_type": [
            "grass",
            "fighting"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 8
    },
    "litten": {
        "base_id": 725,
        "form_id": 0,
        "name": "Litten",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 7,
        "evolution_ids": [
            [
                726,
                0
            ]
        ]
    },
    "torracat": {
        "base_id": 726,
        "form_id": 0,
        "name": "Torracat",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 7,
        "evolution_ids": [
            [
                727,
                0
            ]
        ]
    },
    "incineroar": {
        "base_id": 727,
        "form_id": 0,
        "name": "Incineroar",
        "pokemon_type": [
            "fire",
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 7
    },
    "popplio": {
        "base_id": 728,
        "form_id": 0,
        "name": "Popplio",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 7,
        "evolution_ids": [
            [
                729,
                0
            ]
        ]
    },
    "brionne": {
        "base_id": 729,
        "form_id": 0,
        "name": "Brionne",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 7,
        "evolution_ids": [
            [
                730,
                0
            ]
        ]
    },
    "primarina": {
        "base_id": 730,
        "form_id": 0,
        "name": "Primarina",
        "pokemon_type": [
            "water",
            "fairy"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 7
    },
    "pikipek": {
        "base_id": 731,
        "form_id": 0,
        "name": "Pikipek",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                732,
                0
            ]
        ]
    },
    "trumbeak": {
        "base_id": 732,
        "form_id": 0,
        "name": "Trumbeak",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                733,
                0
            ]
        ]
    },
    "toucannon": {
        "base_id": 733,
        "form_id": 0,
        "name": "Toucannon",
        "pokemon_type": [
            "normal",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "yungoos": {
        "base_id": 734,
        "form_id": 0,
        "name": "Yungoos",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                735,
                0
            ]
        ]
    },
    "gumshoos": {
        "base_id": 735,
        "form_id": 0,
        "name": "Gumshoos",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "grubbin": {
        "base_id": 736,
        "form_id": 0,
        "name": "Grubbin",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                737,
                0
            ]
        ]
    },
    "charjabug": {
        "base_id": 737,
        "form_id": 0,
        "name": "Charjabug",
        "pokemon_type": [
            "bug",
            "electric"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                738,
                0
            ]
        ]
    },
    "vikavolt": {
        "base_id": 738,
        "form_id": 0,
        "name": "Vikavolt",
        "pokemon_type": [
            "bug",
            "electric"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "crabrawler": {
        "base_id": 739,
        "form_id": 0,
        "name": "Crabrawler",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                740,
                0
            ]
        ]
    },
    "crabominable": {
        "base_id": 740,
        "form_id": 0,
        "name": "Crabominable",
        "pokemon_type": [
            "fighting",
            "ice"
        ],
        "egg_group": [
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "oricorio": {
        "base_id": 741,
        "form_id": 0,
        "name": "Oricorio",
        "form_name": "Baile Style",
        "pokemon_type": [
            "fire",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "oricorio-pom-pom": {
        "base_id": 741,
        "form_id": 1,
        "name": "Oricorio",
        "form_name": "Pom-Pom Style",
        "pokemon_type": [
            "electric",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "oricorio-pau": {
        "base_id": 741,
        "form_id": 2,
        "name": "Oricorio",
        "form_name": "Pau'u Style",
        "pokemon_type": [
            "psychic",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "oricorio-sensu": {
        "base_id": 741,
        "form_id": 3,
        "name": "Oricorio",
        "form_name": "Sensu Style",
        "pokemon_type": [
            "ghost",
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "cutiefly": {
        "base_id": 742,
        "form_id": 0,
        "name": "Cutiefly",
        "pokemon_type": [
            "bug",
            "fairy"
        ],
        "egg_group": [
            "bug",
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                743,
                0
            ]
        ]
    },
    "ribombee": {
        "base_id": 743,
        "form_id": 0,
        "name": "Ribombee",
        "pokemon_type": [
            "bug",
            "fairy"
        ],
        "egg_group": [
            "bug",
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "rockruff": {
        "base_id": 744,
        "form_id": 0,
        "name": "Rockruff",
        "pokemon_type": [
            "rock"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                745,
                0
            ],
            [
                745,
                1
            ]
        ]
    },
    "lycanroc": {
        "base_id": 745,
        "form_id": 0,
        "name": "Lycanroc",
        "form_name": "Midday Form",
        "pokemon_type": [
            "rock"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "lycanroc-midnight": {
        "base_id": 745,
        "form_id": 1,
        "name": "Lycanroc",
        "form_name": "Midnight Form",
        "pokemon_type": [
            "rock"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "lycanroc-dusk": {
        "base_id": 745,
        "form_id": 2,
        "name": "Lycanroc",
        "form_name": "Dusk Form",
        "pokemon_type": [
            "rock"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "wishiwashi": {
        "base_id": 746,
        "form_id": 1,
        "name": "Wishiwashi",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Fast",
        "generation": 7
    },
    "mareanie": {
        "base_id": 747,
        "form_id": 0,
        "name": "Mareanie",
        "pokemon_type": [
            "poison",
            "water"
        ],
        "egg_group": [
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                748,
                0
            ]
        ]
    },
    "toxapex": {
        "base_id": 748,
        "form_id": 0,
        "name": "Toxapex",
        "pokemon_type": [
            "poison",
            "water"
        ],
        "egg_group": [
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "mudbray": {
        "base_id": 749,
        "form_id": 0,
        "name": "Mudbray",
        "pokemon_type": [
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                750,
                0
            ]
        ]
    },
    "mudsdale": {
        "base_id": 750,
        "form_id": 0,
        "name": "Mudsdale",
        "pokemon_type": [
            "ground"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "dewpider": {
        "base_id": 751,
        "form_id": 0,
        "name": "Dewpider",
        "pokemon_type": [
            "water",
            "bug"
        ],
        "egg_group": [
            "water_1",
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                752,
                0
            ]
        ]
    },
    "araquanid": {
        "base_id": 752,
        "form_id": 0,
        "name": "Araquanid",
        "pokemon_type": [
            "water",
            "bug"
        ],
        "egg_group": [
            "water_1",
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "fomantis": {
        "base_id": 753,
        "form_id": 0,
        "name": "Fomantis",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                754,
                0
            ]
        ]
    },
    "lurantis": {
        "base_id": 754,
        "form_id": 0,
        "name": "Lurantis",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "morelull": {
        "base_id": 755,
        "form_id": 0,
        "name": "Morelull",
        "pokemon_type": [
            "grass",
            "fairy"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                756,
                0
            ]
        ]
    },
    "shiinotic": {
        "base_id": 756,
        "form_id": 0,
        "name": "Shiinotic",
        "pokemon_type": [
            "grass",
            "fairy"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "salandit": {
        "base_id": 757,
        "form_id": 0,
        "name": "Salandit",
        "pokemon_type": [
            "poison",
            "fire"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                758,
                0
            ]
        ]
    },
    "salazzle": {
        "base_id": 758,
        "form_id": 0,
        "name": "Salazzle",
        "pokemon_type": [
            "poison",
            "fire"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "stufful": {
        "base_id": 759,
        "form_id": 0,
        "name": "Stufful",
        "pokemon_type": [
            "normal",
            "fighting"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                760,
                0
            ]
        ]
    },
    "bewear": {
        "base_id": 760,
        "form_id": 0,
        "name": "Bewear",
        "pokemon_type": [
            "normal",
            "fighting"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "bounsweet": {
        "base_id": 761,
        "form_id": 0,
        "name": "Bounsweet",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 7,
        "evolution_ids": [
            [
                762,
                0
            ]
        ]
    },
    "steenee": {
        "base_id": 762,
        "form_id": 0,
        "name": "Steenee",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 7,
        "evolution_ids": [
            [
                763,
                0
            ]
        ]
    },
    "tsareena": {
        "base_id": 763,
        "form_id": 0,
        "name": "Tsareena",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 7
    },
    "comfey": {
        "base_id": 764,
        "form_id": 0,
        "name": "Comfey",
        "pokemon_type": [
            "fairy"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "green",
        "experience_group": "Fast",
        "generation": 7
    },
    "oranguru": {
        "base_id": 765,
        "form_id": 0,
        "name": "Oranguru",
        "pokemon_type": [
            "normal",
            "psychic"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Slow",
        "generation": 7
    },
    "passimian": {
        "base_id": 766,
        "form_id": 0,
        "name": "Passimian",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Slow",
        "generation": 7
    },
    "wimpod": {
        "base_id": 767,
        "form_id": 0,
        "name": "Wimpod",
        "pokemon_type": [
            "bug",
            "water"
        ],
        "egg_group": [
            "bug",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                768,
                0
            ]
        ]
    },
    "golisopod": {
        "base_id": 768,
        "form_id": 0,
        "name": "Golisopod",
        "pokemon_type": [
            "bug",
            "water"
        ],
        "egg_group": [
            "bug",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "sandygast": {
        "base_id": 769,
        "form_id": 0,
        "name": "Sandygast",
        "pokemon_type": [
            "ghost",
            "ground"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 7,
        "evolution_ids": [
            [
                770,
                0
            ]
        ]
    },
    "palossand": {
        "base_id": 770,
        "form_id": 0,
        "name": "Palossand",
        "pokemon_type": [
            "ghost",
            "ground"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "pyukumuku": {
        "base_id": 771,
        "form_id": 0,
        "name": "Pyukumuku",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Fast",
        "generation": 7
    },
    "type-null": {
        "base_id": 772,
        "form_id": 0,
        "name": "Type: Null",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 7,
        "evolution_ids": [
            [
                773,
                0
            ]
        ]
    },
    "silvally": {
        "base_id": 773,
        "form_id": 0,
        "name": "Silvally",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 7
    },
    "minior": {
        "base_id": 774,
        "form_id": 7,
        "name": "Minior",
        "form_name": "Red Core",
        "pokemon_type": [
            "rock",
            "flying"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "red",
        "experience_group": "Medium Slow",
        "generation": 7
    },
    "komala": {
        "base_id": 775,
        "form_id": 0,
        "name": "Komala",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 7
    },
    "turtonator": {
        "base_id": 776,
        "form_id": 0,
        "name": "Turtonator",
        "pokemon_type": [
            "fire",
            "dragon"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "togedemaru": {
        "base_id": 777,
        "form_id": 0,
        "name": "Togedemaru",
        "pokemon_type": [
            "electric",
            "steel"
        ],
        "egg_group": [
            "field",
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "mimikyu": {
        "base_id": 778,
        "form_id": 0,
        "name": "Mimikyu",
        "pokemon_type": [
            "ghost",
            "fairy"
        ],
        "egg_group": [
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "bruxish": {
        "base_id": 779,
        "form_id": 0,
        "name": "Bruxish",
        "pokemon_type": [
            "water",
            "psychic"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "drampa": {
        "base_id": 780,
        "form_id": 0,
        "name": "Drampa",
        "pokemon_type": [
            "normal",
            "dragon"
        ],
        "egg_group": [
            "monster",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "dhelmise": {
        "base_id": 781,
        "form_id": 0,
        "name": "Dhelmise",
        "pokemon_type": [
            "ghost",
            "grass"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 7
    },
    "jangmo-o": {
        "base_id": 782,
        "form_id": 0,
        "name": "Jangmo-o",
        "pokemon_type": [
            "dragon"
        ],
        "egg_group": [
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 7,
        "evolution_ids": [
            [
                783,
                0
            ]
        ]
    },
    "hakamo-o": {
        "base_id": 783,
        "form_id": 0,
        "name": "Hakamo-o",
        "pokemon_type": [
            "dragon",
            "fighting"
        ],
        "egg_group": [
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 7,
        "evolution_ids": [
            [
                784,
                0
            ]
        ]
    },
    "kommo-o": {
        "base_id": 784,
        "form_id": 0,
        "name": "Kommo-o",
        "pokemon_type": [
            "dragon",
            "fighting"
        ],
        "egg_group": [
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 7
    },
    "tapu-koko": {
        "base_id": 785,
        "form_id": 0,
        "name": "Tapu Koko",
        "pokemon_type": [
            "electric",
            "fairy"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 7
    },
    "tapu-lele": {
        "base_id": 786,
        "form_id": 0,
        "name": "Tapu Lele",
        "pokemon_type": [
            "psychic",
            "fairy"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "pink",
        "experience_group": "Slow",
        "generation": 7
    },
    "tapu-bulu": {
        "base_id": 787,
        "form_id": 0,
        "name": "Tapu Bulu",
        "pokemon_type": [
            "grass",
            "fairy"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "red",
        "experience_group": "Slow",
        "generation": 7
    },
    "tapu-fini": {
        "base_id": 788,
        "form_id": 0,
        "name": "Tapu Fini",
        "pokemon_type": [
            "water",
            "fairy"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 7
    },
    "cosmog": {
        "base_id": 789,
        "form_id": 0,
        "name": "Cosmog",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 7,
        "evolution_ids": [
            [
                790,
                0
            ]
        ]
    },
    "cosmoem": {
        "base_id": 790,
        "form_id": 0,
        "name": "Cosmoem",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 7,
        "evolution_ids": [
            [
                791,
                0
            ],
            [
                792,
                0
            ]
        ]
    },
    "solgaleo": {
        "base_id": 791,
        "form_id": 0,
        "name": "Solgaleo",
        "pokemon_type": [
            "psychic",
            "steel"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "white",
        "experience_group": "Slow",
        "generation": 7
    },
    "lunala": {
        "base_id": 792,
        "form_id": 0,
        "name": "Lunala",
        "pokemon_type": [
            "psychic",
            "ghost"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 7
    },
    "nihilego": {
        "base_id": 793,
        "form_id": 0,
        "name": "Nihilego",
        "pokemon_type": [
            "rock",
            "poison"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "white",
        "experience_group": "Slow",
        "generation": 7
    },
    "buzzwole": {
        "base_id": 794,
        "form_id": 0,
        "name": "Buzzwole",
        "pokemon_type": [
            "bug",
            "fighting"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "red",
        "experience_group": "Slow",
        "generation": 7
    },
    "pheromosa": {
        "base_id": 795,
        "form_id": 0,
        "name": "Pheromosa",
        "pokemon_type": [
            "bug",
            "fighting"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "white",
        "experience_group": "Slow",
        "generation": 7
    },
    "xurkitree": {
        "base_id": 796,
        "form_id": 0,
        "name": "Xurkitree",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "black",
        "experience_group": "Slow",
        "generation": 7
    },
    "celesteela": {
        "base_id": 797,
        "form_id": 0,
        "name": "Celesteela",
        "pokemon_type": [
            "steel",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "green",
        "experience_group": "Slow",
        "generation": 7
    },
    "kartana": {
        "base_id": 798,
        "form_id": 0,
        "name": "Kartana",
        "pokemon_type": [
            "grass",
            "steel"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "white",
        "experience_group": "Slow",
        "generation": 7
    },
    "guzzlord": {
        "base_id": 799,
        "form_id": 0,
        "name": "Guzzlord",
        "pokemon_type": [
            "dark",
            "dragon"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "black",
        "experience_group": "Slow",
        "generation": 7
    },
    "necrozma": {
        "base_id": 800,
        "form_id": 0,
        "name": "Necrozma",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "black",
        "experience_group": "Slow",
        "generation": 7
    },
    "necrozma-dusk": {
        "base_id": 800,
        "form_id": 1,
        "name": "Dusk Mane Necrozma",
        "pokemon_type": [
            "psychic",
            "steel"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 7
    },
    "necrozma-dawn": {
        "base_id": 800,
        "form_id": 2,
        "name": "Dawn Wings Necrozma",
        "pokemon_type": [
            "psychic",
            "ghost"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 7
    },
    "necrozma-ultra": {
        "base_id": 800,
        "form_id": 3,
        "name": "Ultra Necrozma",
        "pokemon_type": [
            "psychic",
            "dragon"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 7
    },
    "magearna": {
        "base_id": 801,
        "form_id": 0,
        "name": "Magearna",
        "pokemon_type": [
            "steel",
            "fairy"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 7
    },
    "magearna-original": {
        "base_id": 801,
        "form_id": 1,
        "name": "Original Color Magearna",
        "pokemon_type": [
            "steel",
            "fairy"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "red",
        "experience_group": "Slow",
        "generation": 7
    },
    "marshadow": {
        "base_id": 802,
        "form_id": 0,
        "name": "Marshadow",
        "pokemon_type": [
            "fighting",
            "ghost"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 7
    },
    "poipole": {
        "base_id": 803,
        "form_id": 0,
        "name": "Poipole",
        "pokemon_type": [
            "poison"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 7,
        "evolution_ids": [
            [
                804,
                0
            ]
        ]
    },
    "naganadel": {
        "base_id": 804,
        "form_id": 0,
        "name": "Naganadel",
        "pokemon_type": [
            "poison",
            "dragon"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 7
    },
    "stakataka": {
        "base_id": 805,
        "form_id": 0,
        "name": "Stakataka",
        "pokemon_type": [
            "rock",
            "steel"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 7
    },
    "blacephalon": {
        "base_id": 806,
        "form_id": 0,
        "name": "Blacephalon",
        "pokemon_type": [
            "fire",
            "ghost"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "white",
        "experience_group": "Slow",
        "generation": 7
    },
    "zeraora": {
        "base_id": 807,
        "form_id": 0,
        "name": "Zeraora",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 7
    },
    "meltan": {
        "base_id": 808,
        "form_id": 0,
        "name": "Meltan",
        "pokemon_type": [
            "steel"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 7,
        "evolution_ids": [
            [
                809,
                0
            ]
        ]
    },
    "melmetal": {
        "base_id": 809,
        "form_id": 0,
        "name": "Melmetal",
        "pokemon_type": [
            "steel"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "has_gigantamax": true,
        "is_mythical": true,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 7
    },
    "grookey": {
        "base_id": 810,
        "form_id": 0,
        "name": "Grookey",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "field",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 8,
        "evolution_ids": [
            [
                811,
                0
            ]
        ]
    },
    "thwackey": {
        "base_id": 811,
        "form_id": 0,
        "name": "Thwackey",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "field",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 8,
        "evolution_ids": [
            [
                812,
                0
            ]
        ]
    },
    "rillaboom": {
        "base_id": 812,
        "form_id": 0,
        "name": "Rillaboom",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "field",
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "has_gigantamax": true,
        "color": "green",
        "experience_group": "Medium Slow",
        "generation": 8
    },
    "scorbunny": {
        "base_id": 813,
        "form_id": 0,
        "name": "Scorbunny",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "white",
        "experience_group": "Medium Slow",
        "generation": 8,
        "evolution_ids": [
            [
                814,
                0
            ]
        ]
    },
    "raboot": {
        "base_id": 814,
        "form_id": 0,
        "name": "Raboot",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "gray",
        "experience_group": "Medium Slow",
        "generation": 8,
        "evolution_ids": [
            [
                815,
                0
            ]
        ]
    },
    "cinderace": {
        "base_id": 815,
        "form_id": 0,
        "name": "Cinderace",
        "pokemon_type": [
            "fire"
        ],
        "egg_group": [
            "field",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "has_gigantamax": true,
        "color": "white",
        "experience_group": "Medium Slow",
        "generation": 8
    },
    "sobble": {
        "base_id": 816,
        "form_id": 0,
        "name": "Sobble",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 8,
        "evolution_ids": [
            [
                817,
                0
            ]
        ]
    },
    "drizzile": {
        "base_id": 817,
        "form_id": 0,
        "name": "Drizzile",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 8,
        "evolution_ids": [
            [
                818,
                0
            ]
        ]
    },
    "inteleon": {
        "base_id": 818,
        "form_id": 0,
        "name": "Inteleon",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "has_gigantamax": true,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 8
    },
    "skwovet": {
        "base_id": 819,
        "form_id": 0,
        "name": "Skwovet",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                820,
                0
            ]
        ]
    },
    "greedent": {
        "base_id": 820,
        "form_id": 0,
        "name": "Greedent",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "rookidee": {
        "base_id": 821,
        "form_id": 0,
        "name": "Rookidee",
        "pokemon_type": [
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 8,
        "evolution_ids": [
            [
                822,
                0
            ]
        ]
    },
    "corvisquire": {
        "base_id": 822,
        "form_id": 0,
        "name": "Corvisquire",
        "pokemon_type": [
            "flying"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 8,
        "evolution_ids": [
            [
                823,
                0
            ]
        ]
    },
    "corviknight": {
        "base_id": 823,
        "form_id": 0,
        "name": "Corviknight",
        "pokemon_type": [
            "flying",
            "steel"
        ],
        "egg_group": [
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 8
    },
    "blipbug": {
        "base_id": 824,
        "form_id": 0,
        "name": "Blipbug",
        "pokemon_type": [
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                825,
                0
            ]
        ]
    },
    "dottler": {
        "base_id": 825,
        "form_id": 0,
        "name": "Dottler",
        "pokemon_type": [
            "bug",
            "psychic"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                826,
                0
            ]
        ]
    },
    "orbeetle": {
        "base_id": 826,
        "form_id": 0,
        "name": "Orbeetle",
        "pokemon_type": [
            "bug",
            "psychic"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "nickit": {
        "base_id": 827,
        "form_id": 0,
        "name": "Nickit",
        "pokemon_type": [
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Fast",
        "generation": 8,
        "evolution_ids": [
            [
                828,
                0
            ]
        ]
    },
    "thievul": {
        "base_id": 828,
        "form_id": 0,
        "name": "Thievul",
        "pokemon_type": [
            "dark"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Fast",
        "generation": 8
    },
    "gossifleur": {
        "base_id": 829,
        "form_id": 0,
        "name": "Gossifleur",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                830,
                0
            ]
        ]
    },
    "eldegoss": {
        "base_id": 830,
        "form_id": 0,
        "name": "Eldegoss",
        "pokemon_type": [
            "grass"
        ],
        "egg_group": [
            "grass"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "wooloo": {
        "base_id": 831,
        "form_id": 0,
        "name": "Wooloo",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                832,
                0
            ]
        ]
    },
    "dubwool": {
        "base_id": 832,
        "form_id": 0,
        "name": "Dubwool",
        "pokemon_type": [
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "chewtle": {
        "base_id": 833,
        "form_id": 0,
        "name": "Chewtle",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                834,
                0
            ]
        ]
    },
    "drednaw": {
        "base_id": 834,
        "form_id": 0,
        "name": "Drednaw",
        "pokemon_type": [
            "water",
            "rock"
        ],
        "egg_group": [
            "monster",
            "water_1"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "yamper": {
        "base_id": 835,
        "form_id": 0,
        "name": "Yamper",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Fast",
        "generation": 8,
        "evolution_ids": [
            [
                836,
                0
            ]
        ]
    },
    "boltund": {
        "base_id": 836,
        "form_id": 0,
        "name": "Boltund",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Fast",
        "generation": 8
    },
    "rolycoly": {
        "base_id": 837,
        "form_id": 0,
        "name": "Rolycoly",
        "pokemon_type": [
            "rock"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Slow",
        "generation": 8,
        "evolution_ids": [
            [
                838,
                0
            ]
        ]
    },
    "carkol": {
        "base_id": 838,
        "form_id": 0,
        "name": "Carkol",
        "pokemon_type": [
            "rock",
            "fire"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Slow",
        "generation": 8,
        "evolution_ids": [
            [
                839,
                0
            ]
        ]
    },
    "coalossal": {
        "base_id": 839,
        "form_id": 0,
        "name": "Coalossal",
        "pokemon_type": [
            "rock",
            "fire"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "black",
        "experience_group": "Medium Slow",
        "generation": 8
    },
    "applin": {
        "base_id": 840,
        "form_id": 0,
        "name": "Applin",
        "pokemon_type": [
            "grass",
            "dragon"
        ],
        "egg_group": [
            "grass",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Erratic",
        "generation": 8,
        "evolution_ids": [
            [
                841,
                0
            ],
            [
                842,
                0
            ]
        ]
    },
    "flapple": {
        "base_id": 841,
        "form_id": 0,
        "name": "Flapple",
        "pokemon_type": [
            "grass",
            "dragon"
        ],
        "egg_group": [
            "grass",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "green",
        "experience_group": "Erratic",
        "generation": 8
    },
    "appletun": {
        "base_id": 842,
        "form_id": 0,
        "name": "Appletun",
        "pokemon_type": [
            "grass",
            "dragon"
        ],
        "egg_group": [
            "grass",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "green",
        "experience_group": "Erratic",
        "generation": 8
    },
    "silicobra": {
        "base_id": 843,
        "form_id": 0,
        "name": "Silicobra",
        "pokemon_type": [
            "ground"
        ],
        "egg_group": [
            "field",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                844,
                0
            ]
        ]
    },
    "sandaconda": {
        "base_id": 844,
        "form_id": 0,
        "name": "Sandaconda",
        "pokemon_type": [
            "ground"
        ],
        "egg_group": [
            "field",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "cramorant": {
        "base_id": 845,
        "form_id": 0,
        "name": "Cramorant",
        "pokemon_type": [
            "flying",
            "water"
        ],
        "egg_group": [
            "water_1",
            "flying"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "arrokuda": {
        "base_id": 846,
        "form_id": 0,
        "name": "Arrokuda",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 8,
        "evolution_ids": [
            [
                847,
                0
            ]
        ]
    },
    "barraskewda": {
        "base_id": 847,
        "form_id": 0,
        "name": "Barraskewda",
        "pokemon_type": [
            "water"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Slow",
        "generation": 8
    },
    "toxel": {
        "base_id": 848,
        "form_id": 0,
        "name": "Toxel",
        "pokemon_type": [
            "electric",
            "poison"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "is_baby": true,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 8,
        "evolution_ids": [
            [
                849,
                0
            ],
            [
                849,
                1
            ]
        ]
    },
    "toxtricity": {
        "base_id": 849,
        "form_id": 0,
        "name": "Toxtricity",
        "form_name": "Amped Form",
        "pokemon_type": [
            "electric",
            "poison"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 8
    },
    "toxtricity-low-key": {
        "base_id": 849,
        "form_id": 1,
        "name": "Toxtricity",
        "form_name": "Low Key Form",
        "pokemon_type": [
            "electric",
            "poison"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "purple",
        "experience_group": "Medium Slow",
        "generation": 8
    },
    "sizzlipede": {
        "base_id": 850,
        "form_id": 0,
        "name": "Sizzlipede",
        "pokemon_type": [
            "fire",
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                851,
                0
            ]
        ]
    },
    "centiskorch": {
        "base_id": 851,
        "form_id": 0,
        "name": "Centiskorch",
        "pokemon_type": [
            "fire",
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "red",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "clobbopus": {
        "base_id": 852,
        "form_id": 0,
        "name": "Clobbopus",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "water_1",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Slow",
        "generation": 8,
        "evolution_ids": [
            [
                853,
                0
            ]
        ]
    },
    "grapploct": {
        "base_id": 853,
        "form_id": 0,
        "name": "Grapploct",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "water_1",
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 8
    },
    "sinistea": {
        "base_id": 854,
        "form_id": 0,
        "name": "Sinistea",
        "pokemon_type": [
            "ghost"
        ],
        "egg_group": [
            "mineral",
            "amorphous"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                855,
                0
            ]
        ]
    },
    "polteageist": {
        "base_id": 855,
        "form_id": 0,
        "name": "Polteageist",
        "pokemon_type": [
            "ghost"
        ],
        "egg_group": [
            "mineral",
            "amorphous"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "hatenna": {
        "base_id": 856,
        "form_id": 0,
        "name": "Hatenna",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "pink",
        "experience_group": "Slow",
        "generation": 8,
        "evolution_ids": [
            [
                857,
                0
            ]
        ]
    },
    "hattrem": {
        "base_id": 857,
        "form_id": 0,
        "name": "Hattrem",
        "pokemon_type": [
            "psychic"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "pink",
        "experience_group": "Slow",
        "generation": 8,
        "evolution_ids": [
            [
                858,
                0
            ]
        ]
    },
    "hatterene": {
        "base_id": 858,
        "form_id": 0,
        "name": "Hatterene",
        "pokemon_type": [
            "psychic",
            "fairy"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "has_gigantamax": true,
        "color": "pink",
        "experience_group": "Slow",
        "generation": 8
    },
    "impidimp": {
        "base_id": 859,
        "form_id": 0,
        "name": "Impidimp",
        "pokemon_type": [
            "dark",
            "fairy"
        ],
        "egg_group": [
            "fairy",
            "human_like"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                860,
                0
            ]
        ]
    },
    "morgrem": {
        "base_id": 860,
        "form_id": 0,
        "name": "Morgrem",
        "pokemon_type": [
            "dark",
            "fairy"
        ],
        "egg_group": [
            "fairy",
            "human_like"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "pink",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                861,
                0
            ]
        ]
    },
    "grimmsnarl": {
        "base_id": 861,
        "form_id": 0,
        "name": "Grimmsnarl",
        "pokemon_type": [
            "dark",
            "fairy"
        ],
        "egg_group": [
            "fairy",
            "human_like"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "has_gigantamax": true,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "obstagoon": {
        "base_id": 862,
        "form_id": 0,
        "name": "Obstagoon",
        "pokemon_type": [
            "dark",
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "perrserker": {
        "base_id": 863,
        "form_id": 0,
        "name": "Perrserker",
        "pokemon_type": [
            "steel"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "cursola": {
        "base_id": 864,
        "form_id": 0,
        "name": "Cursola",
        "pokemon_type": [
            "ghost"
        ],
        "egg_group": [
            "water_1",
            "water_3"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 6,
        "color": "white",
        "experience_group": "Fast",
        "generation": 8
    },
    "sirfetchd": {
        "base_id": 865,
        "form_id": 0,
        "name": "Sirfetch'd",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "flying",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "mr-rime": {
        "base_id": 866,
        "form_id": 0,
        "name": "Mr. Rime",
        "pokemon_type": [
            "ice",
            "psychic"
        ],
        "egg_group": [
            "human_like"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "runerigus": {
        "base_id": 867,
        "form_id": 0,
        "name": "Runerigus",
        "pokemon_type": [
            "ground",
            "ghost"
        ],
        "egg_group": [
            "mineral",
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "milcery": {
        "base_id": 868,
        "form_id": 0,
        "name": "Milcery",
        "pokemon_type": [
            "fairy"
        ],
        "egg_group": [
            "fairy",
            "amorphous"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                869,
                0
            ]
        ]
    },
    "alcremie": {
        "base_id": 869,
        "form_id": 0,
        "name": "Alcremie",
        "pokemon_type": [
            "fairy"
        ],
        "egg_group": [
            "fairy",
            "amorphous"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "has_gigantamax": true,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "falinks": {
        "base_id": 870,
        "form_id": 0,
        "name": "Falinks",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "fairy",
            "mineral"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "pincurchin": {
        "base_id": 871,
        "form_id": 0,
        "name": "Pincurchin",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "water_1",
            "amorphous"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "purple",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "snom": {
        "base_id": 872,
        "form_id": 0,
        "name": "Snom",
        "pokemon_type": [
            "ice",
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                873,
                0
            ]
        ]
    },
    "frosmoth": {
        "base_id": 873,
        "form_id": 0,
        "name": "Frosmoth",
        "pokemon_type": [
            "ice",
            "bug"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "stonjourner": {
        "base_id": 874,
        "form_id": 0,
        "name": "Stonjourner",
        "pokemon_type": [
            "rock"
        ],
        "egg_group": [
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 8
    },
    "eiscue": {
        "base_id": 875,
        "form_id": 0,
        "name": "Eiscue",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "water_1",
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 8
    },
    "indeedee": {
        "base_id": 876,
        "form_id": 0,
        "name": "Indeedee",
        "form_name": "Male",
        "pokemon_type": [
            "psychic",
            "normal"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "mo"
        ],
        "gender_ratio": 0,
        "color": "purple",
        "experience_group": "Fast",
        "generation": 8
    },
    "indeedee-female": {
        "base_id": 876,
        "form_id": 1,
        "name": "Indeedee",
        "form_name": "Female",
        "pokemon_type": [
            "psychic",
            "normal"
        ],
        "egg_group": [
            "fairy"
        ],
        "gender": [
            "fo"
        ],
        "gender_ratio": 8,
        "color": "purple",
        "experience_group": "Fast",
        "generation": 8
    },
    "morpeko": {
        "base_id": 877,
        "form_id": 0,
        "name": "Morpeko",
        "pokemon_type": [
            "electric",
            "dark"
        ],
        "egg_group": [
            "field",
            "fairy"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "cufant": {
        "base_id": 878,
        "form_id": 0,
        "name": "Cufant",
        "pokemon_type": [
            "steel"
        ],
        "egg_group": [
            "field",
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "yellow",
        "experience_group": "Medium Fast",
        "generation": 8,
        "evolution_ids": [
            [
                879,
                0
            ]
        ]
    },
    "copperajah": {
        "base_id": 879,
        "form_id": 0,
        "name": "Copperajah",
        "pokemon_type": [
            "steel"
        ],
        "egg_group": [
            "field",
            "mineral"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "dracozolt": {
        "base_id": 880,
        "form_id": 0,
        "name": "Dracozolt",
        "pokemon_type": [
            "electric",
            "dragon"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "green",
        "experience_group": "Slow",
        "generation": 8
    },
    "arctozolt": {
        "base_id": 881,
        "form_id": 0,
        "name": "Arctozolt",
        "pokemon_type": [
            "electric",
            "ice"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 8
    },
    "dracovish": {
        "base_id": 882,
        "form_id": 0,
        "name": "Dracovish",
        "pokemon_type": [
            "water",
            "dragon"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "green",
        "experience_group": "Slow",
        "generation": 8
    },
    "arctovish": {
        "base_id": 883,
        "form_id": 0,
        "name": "Arctovish",
        "pokemon_type": [
            "water",
            "ice"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 8
    },
    "duraludon": {
        "base_id": 884,
        "form_id": 0,
        "name": "Duraludon",
        "pokemon_type": [
            "steel",
            "dragon"
        ],
        "egg_group": [
            "mineral",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "has_gigantamax": true,
        "color": "white",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "dreepy": {
        "base_id": 885,
        "form_id": 0,
        "name": "Dreepy",
        "pokemon_type": [
            "dragon",
            "ghost"
        ],
        "egg_group": [
            "amorphous",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Slow",
        "generation": 8,
        "evolution_ids": [
            [
                886,
                0
            ]
        ]
    },
    "drakloak": {
        "base_id": 886,
        "form_id": 0,
        "name": "Drakloak",
        "pokemon_type": [
            "dragon",
            "ghost"
        ],
        "egg_group": [
            "amorphous",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Slow",
        "generation": 8,
        "evolution_ids": [
            [
                887,
                0
            ]
        ]
    },
    "dragapult": {
        "base_id": 887,
        "form_id": 0,
        "name": "Dragapult",
        "pokemon_type": [
            "dragon",
            "ghost"
        ],
        "egg_group": [
            "amorphous",
            "dragon"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "green",
        "experience_group": "Slow",
        "generation": 8
    },
    "zacian": {
        "base_id": 888,
        "form_id": 0,
        "name": "Zacian",
        "form_name": "Hero of Many Battles",
        "pokemon_type": [
            "fairy"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 8
    },
    "zacian-crowned": {
        "base_id": 888,
        "form_id": 1,
        "name": "Zacian",
        "form_name": "Crowned Sword",
        "pokemon_type": [
            "fairy",
            "steel"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "blue",
        "experience_group": "Slow",
        "generation": 8
    },
    "zamazenta": {
        "base_id": 889,
        "form_id": 0,
        "name": "Zamazenta",
        "form_name": "Hero of Many Battles",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "red",
        "experience_group": "Slow",
        "generation": 8
    },
    "zamazenta-crowned": {
        "base_id": 889,
        "form_id": 1,
        "name": "Zamazenta",
        "form_name": "Crowned Shield",
        "pokemon_type": [
            "fighting",
            "steel"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "red",
        "experience_group": "Slow",
        "generation": 8
    },
    "eternatus": {
        "base_id": 890,
        "form_id": 0,
        "name": "Eternatus",
        "pokemon_type": [
            "poison",
            "dragon"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "purple",
        "experience_group": "Slow",
        "generation": 8
    },
    "kubfu": {
        "base_id": 891,
        "form_id": 0,
        "name": "Kubfu",
        "pokemon_type": [
            "fighting"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "is_sublegendary": true,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 8,
        "evolution_ids": [
            [
                892,
                0
            ],
            [
                892,
                1
            ]
        ]
    },
    "urshifu": {
        "base_id": 892,
        "form_id": 0,
        "name": "Urshifu",
        "form_name": "Single Strike Style",
        "pokemon_type": [
            "fighting",
            "dark"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "has_gigantamax": true,
        "is_sublegendary": true,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 8
    },
    "urshifu-rapid-strike": {
        "base_id": 892,
        "form_id": 1,
        "name": "Urshifu",
        "form_name": "Rapid Strike Style",
        "pokemon_type": [
            "fighting",
            "water"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 1,
        "has_gigantamax": true,
        "is_sublegendary": true,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 8
    },
    "zarude": {
        "base_id": 893,
        "form_id": 0,
        "name": "Zarude",
        "pokemon_type": [
            "dark",
            "grass"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_mythical": true,
        "color": "black",
        "experience_group": "Slow",
        "generation": 8
    },
    "regieleki": {
        "base_id": 894,
        "form_id": 0,
        "name": "Regieleki",
        "pokemon_type": [
            "electric"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "yellow",
        "experience_group": "Slow",
        "generation": 8
    },
    "regidrago": {
        "base_id": 895,
        "form_id": 0,
        "name": "Regidrago",
        "pokemon_type": [
            "dragon"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "green",
        "experience_group": "Slow",
        "generation": 8
    },
    "glastrier": {
        "base_id": 896,
        "form_id": 0,
        "name": "Glastrier",
        "pokemon_type": [
            "ice"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "white",
        "experience_group": "Slow",
        "generation": 8
    },
    "spectrier": {
        "base_id": 897,
        "form_id": 0,
        "name": "Spectrier",
        "pokemon_type": [
            "ghost"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_sublegendary": true,
        "color": "black",
        "experience_group": "Slow",
        "generation": 8
    },
    "calyrex": {
        "base_id": 898,
        "form_id": 0,
        "name": "Calyrex",
        "pokemon_type": [
            "psychic",
            "grass"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "green",
        "experience_group": "Slow",
        "generation": 8
    },
    "calyrex-ice": {
        "base_id": 898,
        "form_id": 1,
        "name": "Ice Rider Calyrex",
        "pokemon_type": [
            "psychic",
            "ice"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "white",
        "experience_group": "Slow",
        "generation": 8
    },
    "calyrex-shadow": {
        "base_id": 898,
        "form_id": 2,
        "name": "Shadow Rider Calyrex",
        "pokemon_type": [
            "psychic",
            "ghost"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "uk"
        ],
        "gender_ratio": -1,
        "is_legendary": true,
        "color": "black",
        "experience_group": "Slow",
        "generation": 8
    },
    "wyrdeer": {
        "base_id": 899,
        "form_id": 0,
        "name": "Wyrdeer",
        "pokemon_type": [
            "normal",
            "psychic"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "gray",
        "experience_group": "Slow",
        "generation": 8
    },
    "kleavor": {
        "base_id": 900,
        "form_id": 0,
        "name": "Kleavor",
        "pokemon_type": [
            "bug",
            "rock"
        ],
        "egg_group": [
            "bug"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "ursaluna": {
        "base_id": 901,
        "form_id": 0,
        "name": "Ursaluna",
        "pokemon_type": [
            "ground",
            "normal"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "brown",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "basculegion": {
        "base_id": 902,
        "form_id": 0,
        "name": "Basculegion",
        "form_name": "Male",
        "pokemon_type": [
            "water",
            "ghost"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "md"
        ],
        "gender_ratio": 0,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "basculegion-female": {
        "base_id": 902,
        "form_id": 1,
        "name": "Basculegion",
        "form_name": "Female",
        "pokemon_type": [
            "water",
            "ghost"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "fd"
        ],
        "gender_ratio": 8,
        "color": "green",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "sneasler": {
        "base_id": 903,
        "form_id": 0,
        "name": "Sneasler",
        "pokemon_type": [
            "fighting",
            "poison"
        ],
        "egg_group": [
            "field"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "blue",
        "experience_group": "Medium Slow",
        "generation": 8
    },
    "overqwil": {
        "base_id": 904,
        "form_id": 0,
        "name": "Overqwil",
        "pokemon_type": [
            "dark",
            "poison"
        ],
        "egg_group": [
            "water_2"
        ],
        "gender": [
            "mf"
        ],
        "gender_ratio": 4,
        "color": "black",
        "experience_group": "Medium Fast",
        "generation": 8
    },
    "enamorus": {
        "base_id": 905,
        "form_id": 0,
        "name": "Enamorus",
        "form_name": "Incarnate Form",
        "pokemon_type": [
            "fairy",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "fd"
        ],
        "gender_ratio": 8,
        "is_sublegendary": true,
        "color": "pink",
        "experience_group": "Slow",
        "generation": 8
    },
    "enamorus-therian": {
        "base_id": 905,
        "form_id": 1,
        "name": "Enamorus",
        "form_name": "Therian Forme",
        "pokemon_type": [
            "fairy",
            "flying"
        ],
        "egg_group": [
            "undiscovered"
        ],
        "gender": [
            "fd"
        ],
        "gender_ratio": 8,
        "is_sublegendary": true,
        "color": "pink",
        "experience_group": "Slow",
        "generation": 8
    }
};