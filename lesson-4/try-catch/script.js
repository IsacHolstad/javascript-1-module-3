// kitchen()  // run the code
//     .then()    // next step
//     .then()    // next step
//     .catch()   // error caught here
//     .finally() // end of the promise [optional]



// Async / Await in JS -> try, catch
// When we're using async/await, we use this format:

//👇 Magical keyword
async function kitchen(){

    try{
// Let's create a fake problem
        await abc;
    }

    catch(error){
        console.log("abc does not exist", error)
    }

    finally{
        console.log("Runs code anyways")
    }
}

kitchen()  // run the code



//EXAMPLE 2
function getSomething() {
    console.log("hello i am isac")
}



const result = document.querySelector(".result") 

    try{
        getSomething();
        result.innerHTML = "SUCCESES"
    }
    catch(error){
        console.log("abc error does not exsist"),
        result.innerHTML = "nah there is an error"
        
    }

    finally{
        console.log("Runs code anyways")
    }



 // run the code


