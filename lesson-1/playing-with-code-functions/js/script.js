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




