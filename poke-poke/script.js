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
         console.log(responseJSON)
    }
    catch (error) {
        console.log("some error happend", error)
    }
}


getPokemonNames();