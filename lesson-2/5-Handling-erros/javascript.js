//API´S API
const URL = "https://catfact.ninja/facts"
const factsContainr = document.querySelector(".my-cats-facts");

fetch(URL) //Promise<Response>
.then((response) => response.json()) //Promise<any>
.then((data) => { 
console.log(data.data)
factsContainr.innerHTML = "";


const myCatFactsArray = data.data;
for (let i = 0; i < myCatFactsArray.length; i++) {
    console.log(myCatFactsArray[i].fact);
    if(i === 4) {
        break;
    }
    factsContainr.innerHTML += `<li>${myCatFactsArray[i].fact}</li>`
}
    catch((error) => {
        factsContainr.innerHTML =  displayError("erooooorr")
    });
});