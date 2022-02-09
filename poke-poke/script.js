//endpoint
//https://pokeapi.co/api/v2/{endpoint}/
const APIUrl = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=40";
//select hte pokemon class
const pokemonsContainer = document.querySelector(".pokemons");

//async example 9.feb 14:00
//async function getPokemonNames(){

    //try{
// Let's create a fake problem
      //  await abc;
    //}

    //catch(error){
       // console.log("abc does not exist", error)
   // }
//}

//getPokemonNames();  // run the code

async function getPokemonNames() {
    
    try {
        const response = await fetch(APIUrl);
        const responseJSON = await response.json();
         console.log(responseJSON);
         const pokemonData = responseJSON.results;
         console.log(pokemonData);
         for(let i = 0; i < pokemonData.length; i++);
         console.log(pokemonData[i]);
         pokemonData.innerHTML = `<li><span>${pokemonData[i].name}</span></li>`

    }
    
    catch (error) {
        console.log("some error happend", error);
        pokemonData.innerHTML = `<li><span>sorry no data</span></li>`
        
    }
}


getPokemonNames();
//for(let i = 0; i < getPokemonNames.length; i++);