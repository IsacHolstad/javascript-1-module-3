console.log(document.location.search)
//const queryString = document.location.search;
//in order t oget the value
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
console.log<(params.get("name"));

const pokemonName = params.get("name");

const API_URL = "`https://pokeapi.co/api/v2/pokemon/${pokemonName}`";

console.log(API_URL)

//select my container ul class

const pokemonDetails = document.querySelector(".pokemon-details");

async function getPokemonDetails() {
    try {
        const response = await fetch(API_URL)
        const signelPokemonDetails = await response.json()
        console.log("singlePokemonDetails: ", singelPokemonDetails);
        const pokmonWeight = signelPokemonDetails.weihgt;
        console.log(pokemonDetailsWeight);
        pokemonDetails.innerHTML = `<div>The Pokémon Weight Is : ${pokmonWeight}</div>`
    }
    catch (error){
        console.log(error)

    }
};
getPokemonDetails();
