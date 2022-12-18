const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    

const idPkmn = pokémon.filter(pokémon => pokémon.id %3);

// console.log(idPkmn)

const firePkmn = pokémon.filter(pokemon => pokemon.types[0] === "fire")

// console.log(firePkmn);

const morePkmn = pokémon.map((more,box) =>{
    if(more.types >=1){
        return true
    }else{
        return false
    }

})
// console.log(morePkmn);

const namePkmn = pokémon.map(pnames => pnames.name)
// console.log(namePkmn);

const filterPkmn = pokémon.filter(spec => spec.id >=99)
// console.log(filterPkmn);

const namesList = pokémon.filter(spec => spec.id >=99).map( poke => poke.name)
// console.log(namesList );
// console.log("damn bro something is wrong");

const onlyP = pokémon.filter(poison => poison.types == "poison")
// console.log(onlyP);

const flyP = pokémon.filter(flying => flying.types[0] == "flying")
// console.log(flyP);

const countNorm = pokémon.filter((count) => {
    let counts = 0
    if(count.types == "normal"){
        console.log(count)
        // console.log(counts)
        return ++counts
    }else{
        return null
    }
})
    // (norm => norm.types == "normal") if( ))
// (count => count.types == "normal" ,countNorm)
// console.log(count);