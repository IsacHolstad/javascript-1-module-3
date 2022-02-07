//fat arrow fucntion without paranteces
const showPetName = name => {
    console.log("the pet name is : " + name);
}

showPetName("isac")


//another fat arrow function 
//+ "" + MAKES A SPACE INSIDE A LOG MEASSAGE
const showNameTwo = (name, age) => { 
    console.log("exapmle 2: the pet name is : " + name + " " + age)
  
}

showNameTwo("isac william", 23 )


//examples in class

const thisProfil = (name, age, height) => {
    console.log("the name is : ", age + " " + height)
}
thisProfil("isac")


//examples in class
const cityName = "oslo";
function showMeTheCityName () {
    console.log("city name is : " + cityName);

}





function isScania(){
    if(cityName === "oslo") {
        console.log(cityName +" is scandinavia")
    }
    else {
        console.log("not scandinavia")
    }
}
isScania()


//examples for my self

const favoritPlace = "Fauske";
    function showFavortPlace () {
        console.log("favorit place is : " + favoritPlace)
    }
function isFavorit() {
    if(favoritPlace === "Fauske") {
        console.log(favoritPlace +" is my favorit place on earth")
    }
    else {
        console.log("is not my favort place")
    }
}
isFavorit()

//another example

const favoritcar = "tesla";
function ShowFavoritCar () {
    console.log("my favorit car is : " + favoritcar)

}
function isCar() {
    if(favoritcar === "tesla")
    console.log(favoritcar +"is my favorit car")
    else {
        console.log("i dont like")
    }
}
isCar()

const favoritColor = "orange";
function showFavoritColor () {
    console.log("is my favorit color" + favoritColor)
}
function isColor() {
    if(favoritColor === "orange")
    console.log(favoritColor +"is my favorit color")

    else{
    console.log(favoritColor +"i dont like that color")
}
}
isColor()

//block scoupe

{
    const name = "isac";
    const age = 19;
console.log(name)

}
console.log(name);


{
    let age = 19;
    const name = "isac";
    var car = "tesla";
    let drink = "redbull"
    var food = "baguett"
 console.log(age);
 console.log(name)
 console.log(car)
 console.log(drink)
 console.log(food)
}


//exapels 

const myObject = {
    number: 10,
    myFunction: function() {
        console.log(this.number)
    } 
}
myObject.myFunction()

//more examples in class

const pet = "rhino";
let isDangerous;
if(pet === "rhino") {
    isDangerous = true;
}
else {
    isDangerous = false;
}
isDangerous = pet === "rhino";
//isDangerous ? pet === "rhino" ? true : false
 //const isDangerous = pet === "rhino" ? true : false,

const pencile = "pen";
let dangerous;
if(pencile === "pen") {
    dangerous = true;
} else {
    dangerous = false;
}
//pencile()


logWord()
function logWord() {
    console.log("tesla")

}
const DiffrentCars = [
    {
        brand: "TESLA",
        model: "model s",
        year: 2018
    },
    {
        brand: "BMW",
        model: "330 e",
        year: 2016
    },
    {
        brand: "TESLA",
        model: "model x",
        year: 2021
    }
];
console.log(DiffrentCars)




