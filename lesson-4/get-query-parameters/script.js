//example 1
//console.log(document.location);

//how to get the query param

console.log(document.location.search)

//const queryString = document.location.search;
//in order t oget the value
const params = new URLSearchParams(queryString);
console.log(params)
console.log(params.get("school"));//this whil show in consol "NOROFF"
const mySchoolParams = params.get("school");

//i want to chack that i hava param called school
//console.log i hava the param

//i want to chack this param is equal to noroff
//okay thee param is noroff

//else redircet to another page

if(params.has("school")) {
    console.log("i have the param")
}
else if(param.get("school")=== "noroff") {
   console.log("okey the param is noroff")
}
//else{
   // document.location.href = "second.html";
//}
//EXAMPLE-1
console.log(document.location);

console.log(document.location.search);
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params)
console.log(params.get("car"));
const myCarParams = params.get("car")
if(params.has("car")) {
    console.log("i have the param")
}
else if(param.get("car") === "bmw") {
    console.log("okey the param is bmw")
}
//else{
   // document.location.href = "second.html"
//}

console.log(document.search.location)

console.log("helrlo");

