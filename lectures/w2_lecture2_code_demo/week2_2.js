// Generates a random number between 0 and 99 inclusive
function generateRandom(){
    // generates random float between 0 and 1
    let randNum = Math.random();

    // scales random float to be bewteen 0 and 100
    randNum = randNum*100;

    // Rounds random float down, gets rid of decimals
    randNum = Math.floor(randNum);

    return randNum;
}

// getElementsByTagName returns an array of DOM objects
const tag = document.getElementsByTagName("p");
tag[0].innerHTML = "Wheat bread - brought to you by getElementsByTagName()";

// getElementById returns a singular DOM object
const fill = document.getElementById("filling");
fill.innerHTML = "Tomato - brought to you  by getElementById()"

// getElementByClassName returns an array of DOM objects
const bread = document.getElementsByClassName("bread");
bread[1].innerHTML = "Wheat bread - brought to you by getElementsByClassName()";

// Input tags uses .value not .innerHTML
// getElementsByName returns an array of DOM objects
const input = document.getElementsByName("fillingIn");
console.log(input[0].value);