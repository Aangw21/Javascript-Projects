// --------- Changing style.fontSize --------
// Since this is default styling, .css is preferred
// For demo purposes, we're going to apply default
// styling via JavaScript
// ------------------------------------------

// change the font size of the paragraphs <p>
function setPFontSize(){
    // we prefer querySelectorAll() whenever possible
    const paragraphs = document.querySelectorAll("p");

    // using a for loop: works but looks messy
    // for (let i = 0; i < paragraphs.length; ++i){
    //     paragraphs[i].style.fontSize = "24px";
    // }

    // using forEach(): preferred
    paragraphs.forEach(function(p){
        p.style.fontSize = "24px";
    });
}

// change the font size of the buttons <button>
function setButtonFontSize(){
    // we prefer querySelectorAll() whenever possible
    const buttons = document.querySelectorAll("button");

    // using a for loop: works but looks messy
    // for (let i = 0; i < buttons.length; ++i){
    //     buttons[i].style.fontSize = "24px";
    // }

    // using forEach(): preferred
    buttons.forEach(function(btn){
        btn.style.fontSize = "24px";
    });
}

// ------- Button Functions -----------
// When we click strawberry
//  1) the text changes to "Strawberry"
//  2) the background color changes to red

function strClick(){
    const filling = document.getElementById("filling");
    filling.innerHTML = "Strawberry"; 
    filling.style.backgroundColor = "red";
}
function graClick(){
    const filling = document.getElementById("filling");
    filling.innerHTML = "Grape"; 
    filling.style.backgroundColor = "purple";
}
function orgClick(){
    const filling = document.getElementById("filling");
    filling.innerHTML = "Orange"; 
    filling.style.backgroundColor = "orange";
}
function bluClick(){
    const filling = document.getElementById("filling");
    filling.innerHTML = "Blueberry"; 
    filling.style.backgroundColor = "blue";
}

// Store functions in array for looping convenience
const clickFunctions = [strClick, graClick, orgClick, bluClick];

function initBtns(){

    // Get all the buttons
    const buttons = document.querySelectorAll("button");

    // Using a for loop
    // for (let i = 0; i < buttons.length; ++i){
    //     buttons[i].addEventListener("click", clickFunctions[i]);
    // }

    // Using forEach()
    // Note the difference in arguments passed into the anonymous function
    // btn: the iterated element in buttons
    // i: an automatically indexed variable: 0 -> 1 -> 2 -> etc...
    buttons.forEach(function(btn, i){
        btn.addEventListener("click", clickFunctions[i]);
    });

    // Hard-coded out
    // const strBtn = document.getElementById("strBtn");
    // const graBtn = document.getElementById("graBtn");
    // const orgBtn = document.getElementById("orgBtn");
    // const bluBtn = document.getElementById("bluBtn");
    // strBtn.addEventListener("click", strClick);
    // graBtn.addEventListener("click", graClick);
    // orgBtn.addEventListener("click", orgClick);
    // bluBtn.addEventListener("click", bluClick);
}

function init(){
    setPFontSize();
    setButtonFontSize();
    initBtns();
}

init();

