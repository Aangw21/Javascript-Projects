// TODO:
//      - randomWord()
//      - seedWord()
//      - checkWord()
// 
// API: https://github.com/awsare/Wordle-API
// Check the website to see the endpoint, path, and parameter information

// no return value
// Calls the API for a randomly-generated five-letter word
// call setTarget() passing in the five-letter word you get from the API
async function randomWord(){
    const endpoint = "https://thatwordleapi.azurewebsites.net/";
    const path = "get/";
    const url = endpoint + path;
    const response = await fetch(url);
    console.log(url);

    // Check if our fetch was successful
    if (response.ok == false){
        console.log("Error: API fetch failed.");
        }
    else {
        // good fetch , continue to parse
        const dataJson = await response.json();
        // console.log("success");
        // console.log(dataJson);
        // console.log(dataJson.Response);
        ranWord = dataJson["Response"];
    

        
        }
        

    return setTarget(ranWord);

    }
// no return value
// "word" is a five-letter word submitted by player
// must make specific function calls as specified below:
//
// Calls the API to check if "word" is a valid five-letter word
//      If "word" is a valid five-letter word, call makeGuess()
//      If "word" is an invalid five-letter word, send an alert message and call resetGuess()
async function checkWord(word){
    // grab the input of the player
    console.log(word);
    const endpoint = "https://thatwordleapi.azurewebsites.net/";
    const path = "ask/?word=";
    const url = endpoint + path + word;
    const response = await fetch(url);
    console.log(url);

    // Check if our fetch was successful
    if (response.ok == false){
        console.log("Error: API fetch failed.");
        }
    else {
        // good fetch , continue to parse
        const dataJson = await response.json();
        console.log(dataJson);
        if (dataJson["Response"]) {
            makeGuess();
        }
        else{
            alert("Wrong word whoever is grading this");
            resetGuess();
        }
    // console.log(Guess)
    

        
        }

    // function makeGuess(){
    //     // set word, update color, check win condition
    //     updateColor();
    
    //     // must happen after new word is loaded
    //     updateKeyboardColor();
    
    //     // Check win condition
    //     checkWin();
    // }

    // function checkWin(){
    //     if (getGuess() == getTarget()){
    //         setTimeout(function(){
    //             alert("You got the word!");
    //         }, 100);
    //         document.getElementById("guessBtn").removeEventListener("click", guessClick);
    //     }
    // }

    // function getGuess(){
    //     guess = "";
    //     document.querySelectorAll("th.guess").forEach((elem) => {guess += elem.innerHTML});
    //     return guess;
    // }
    
}

// no return value
// "seed" is a number between 1 and 2315
// Calls the API to generate a five-letter string based on the given seed (day)
// Should always return the same word for the same seed
// call setTarget() passing in the five-letter word you get from the API
async function seedWord(seed){
    console.log(seed);
    const endpoint = "https://thatwordleapi.azurewebsites.net/";
    const path = "daily/?day=";
    const url = endpoint + path + seed;
    const response = await fetch(url);
    console.log(url);

    // Check if our fetch was successful
    if (response.ok == false){
        console.log("Error: API fetch failed.");
        }
    else {
        // good fetch , continue to parse
        const dataJson = await response.json();
        // console.log("success");
        // console.log(dataJson);
        // console.log(dataJson.Response);
        console.log(dataJson);
        ranWord = dataJson["Response"];
    

        
        }
    return setTarget(ranWord);
}



// ---------------- LIBRARY --------------------
// Do not make any edits in this section
// You may reference and use functions in this section
// ---------------- LIBRARY --------------------
let INDEX = 0;
let alph = "qwertyuiopasdfghjklzxcvbnm";

function updateColor(){
    // get target
    const target = getTarget();
    
    // compare for each guess cell
    document.querySelectorAll("th.guess").forEach((elem, i) => {
        if (target.includes(elem.innerHTML)){
            elem.style.backgroundColor = "yellow";
        }
        if (target[i] == elem.innerHTML){
            elem.style.backgroundColor = "green";
        }
    });
}

function updateKeyboardColor(){
    // get each letter in the guess word
    document.querySelectorAll("th.guess").forEach((letter, i) => {
        // do yellows first:
        //  - letter is in the target word
        if (getTarget().includes(letter.innerHTML)){
            // find the correct key to color
            document.querySelectorAll("th.key").forEach((key) => {
                // match the key letter with the guess letter
                // also want to check if the key is not green
                if (letter.innerHTML == key.innerHTML && key.style.backgroundColor != "green"){
                    // color the key yellow
                    key.style.backgroundColor = "yellow";
                    return;
                }
            });
        }

        // do greens next:
        //  - the letter is the same position and text as target
        if (getTarget()[i] == letter.innerHTML){
            // find the correct key to color
            document.querySelectorAll("th.key").forEach((key) => {
                // match th ekey letter with the guess letter
                if (letter.innerHTML == key.innerHTML){
                    // color the key green
                    key.style.backgroundColor = "green";
                    return;
                }
            });
        }
    });
}


function resetKeyboardColor(){
    document.querySelectorAll("th.key").forEach((key) => {
        key.style.backgroundColor = "white";
    });
}

function addGuessRow(){
    // create a new row
    const newRow = document.createElement("tr");

    // get each guess letter
    // this still exists, but just gets returned to XXXXX immediately
    // so it's not seen on the webpage, but the logic is retained
    document.querySelectorAll("th.guess").forEach((letter) => {
        // create a new <th>
        const newH = document.createElement("th");
        
        // initialize newH with the same innerHTML and color
        newH.innerHTML = letter.innerHTML;
        newH.style.backgroundColor = letter.style.backgroundColor;
        
        // add newH to the newRow
        newRow.appendChild(newH);
    });

    // add newRow (now populated with all the <th>) to table
    document.getElementById("guessTable").appendChild(newRow);
}

function resetGuessRows(){
    // delete every child from the guessTable
    const tab = document.getElementById("guessTable");

    // as long as there are still children in the table
    while (tab.firstChild){
        // remove the child
        tab.removeChild(tab.firstChild);
    }
}

function setKeys(){
    document.querySelectorAll("th.key").forEach((elem) =>{
        elem.addEventListener("click", ()=>{
            if (INDEX < 5){
                document.querySelectorAll("th.guess")[INDEX++].innerHTML = elem.innerHTML.trim();
            }
        });
    });

    document.querySelectorAll("th.key").forEach((elem, i) =>{
            document.addEventListener("keydown", (event) =>{
            if (event.key == alph[i]){
                if (INDEX < 5){
                    document.querySelectorAll("th.guess")[INDEX++].innerHTML = elem.innerHTML.trim();
                }
            }
        });
    });
}

// Reset Button Functionality
function resetClick(){
    INDEX = 0;
    randomWord();
    document.querySelectorAll("th.guess").forEach((elem) => {
        elem.style.backgroundColor = "white";
        elem.innerHTML = "X";
    });

    resetKeyboardColor();
    resetGuessRows();
    
    // reconnect guess button
    document.getElementById("guessBtn").addEventListener("click", guessClick);
}

// Clears guess back to XXXXX and white background
function resetGuess(){
    document.querySelectorAll("th.guess").forEach((elem) => {
        elem.style.backgroundColor = "white";
        elem.innerHTML = "X";
    })
    INDEX = 0;
}

// Sets the guess table row text to guessString
function setGuess(guessWord){
    document.querySelectorAll("th.guess").forEach((elem, i) => {elem.innerHTML = guessWord[i];});
}

// Sets the target table row text to targetString
function setTarget(target){
    document.querySelectorAll("th.target").forEach((elem, i) => {elem.innerHTML = String(target[i]).toUpperCase()});
}

// Returns current text in guess table row (string)
function getGuess(){
    guess = "";
    document.querySelectorAll("th.guess").forEach((elem) => {guess += elem.innerHTML});
    return guess;
}

// Returns current text in target table row (string)
function getTarget(){
    target = "";
    document.querySelectorAll("th.target").forEach((elem) => {target += elem.innerHTML;});
    return target;
}

// Checks win condition
function checkWin(){
    if (getGuess() == getTarget()){
        setTimeout(function(){
            alert("You got the word!");
        }, 100);
        document.getElementById("guessBtn").removeEventListener("click", guessClick);
    }
}

// Create keyboard dynamically
function createKeyboard(){
    const TOP = 10;
    const MID = 9;
    const BOT = 7;

    const topRow = document.createElement("tr");
    for (let i = 0; i < TOP; ++i){
        const cell = document.createElement("th");
        cell.className = "key";
        cell.innerHTML = alph[i].toUpperCase();
        topRow.appendChild(cell);
    }
    document.getElementById("topTab").appendChild(topRow);

    const midRow = document.createElement("tr");
    for (let i = TOP; i < TOP + MID; ++i){
        const cell = document.createElement("th");
        cell.className = "key";
        cell.innerHTML = alph[i].toUpperCase();
        midRow.appendChild(cell);
    }
    document.getElementById("midTab").appendChild(midRow);


    const botRow = document.createElement("tr");
    for (let i = TOP + MID; i < TOP + MID + BOT; ++i){
        const cell = document.createElement("th");
        cell.className = "key";
        cell.innerHTML = alph[i].toUpperCase();
        botRow.appendChild(cell);
    }
    document.getElementById("botTab").appendChild(botRow);
}

// Checks win condition
function checkWin(){
    if (getGuess() == getTarget()){
        setTimeout(function(){
            alert("You got the word!");
        }, 100);
        document.getElementById("guessBtn").removeEventListener("click", guessClick);
    }
    else{
        addGuessRow();
        resetGuess();
    }
}

function guessClick(){
    checkWord(getGuess().toLowerCase());
}

function makeGuess(){
    // set word, update color, check win condition
    updateColor();

    // must happen after new word is loaded
    updateKeyboardColor();

    // Check win condition
    checkWin();
}

function seedClick(){
    const seed = document.getElementById("seedInput").value;
    if (seed < 1 || seed > 2315){
        alert("Seed number must be between 1 and 2315.");
    }
    else{
        seedWord(seed);
    }

}

function init(){
    // connect buttons
    document.getElementById("guessBtn").addEventListener("click", guessClick);
    document.getElementById("resetBtn").addEventListener("click", resetClick);
    document.getElementById("seedBtn").addEventListener("click", seedClick);

    setTarget("XXXXX");

    // load word
    randomWord();

    // create keyboard
    createKeyboard();

    // set key functionality
    setKeys();

    // set enter functionality
    document.addEventListener("keydown", (event) =>{
        if (event.key == "Enter"){
            guessClick();
        }
    });
}

init();
