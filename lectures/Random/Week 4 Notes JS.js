// Change the font size of the paragraphs <p>
let paragraphs = document.getElementsByTagName("p");


// Only works with querySelectorAll
// Will not work getElementsByClassName()

paragraphs.forEach(function(elements){
    elements.style.fontSize = "24px";
});
// 


for(let i = 0; i < paragraphs.length; ++1) {
    paragraphs[i].style.fontSize = "24px";
}

//Understand css selectors
let paragraphs = document.querySelectorAll("p.bread");

for(let i = 0; i < paragraphs.length; ++1) {
    paragraphs[i].style.fontSize = "24px";
}

// change the size of the button 

const button = document.querySelectorAll("button");
    for(let i = 0; i < button.length; ++1) {
        button[i].style.fontSize = "24px";
    }


function strClick (
    const filling = document.getElementById("Filling");
    filling.innerHTML = "Strawberry";
    filling.style.backgroundColor = "red";
) {

}
// When we click strawberry 1) the text changes to "Strawberry" and 2) the background changes to red
const strw = document.getElementById("strBtn");
strBtn.addEventListener("Click", strClick);









// Change the font size of the button <button>
const buttonArray = document.querySelectorAll("button");

buttonsArray.foreach(function(button)){
    button.style.fontSize = "24px";
}
// Improving code
const clickFunctions = [strClick, graClick, orgClick, bluClick]
const fruits = ["strawberry", "grape", "orange", "blueberry"]
const colors = ["red", "purple", "orange", "blue"]
const colorDictionary = {Blueberry: "blue", Orange: "orange", Strawberry: "red", Grape: "purple"}




const buttons = document.querySelectorAll("button");
// for loop
for (let i = 0; i < button.length, ++i){
    buttons[i].addEventListener("click", clickFunctions[i]);
}

// for each 
buttons.foreach(function(b)) {
    b.addEventListener("click", clickFunctions[i]);
}

// Week 4 Day 2 


// get the buttons
const buttons = document.querySelectorAll("buttons");

// iterate through buttons
buttons.forEach(function(btn){
    btn.style.borderRadius = "20px";
});

// change border styling


// buttons[0].style.borderRadius = "20px";

// clickFunctions is an array 
buttons.forEach(function(btn, index)) {
    console.log("we're in button.forEach");
    console.log("index is: " + String(index));
    btn.addEventListener("click", clickFunctions[index]);
};


// Anonymous function in anonymous function
buttons.forEach(function(btn, index)) {

    btn.addEventListener("click", () => {
        const filling = document.getElementById("filling");
        filling.innerHTML = fruits[index];
        filling.style.backgroundColor = colors[index];
    }
};

// Using buttons to 
buttons.forEach(function(btn, index)) {

    btn.addEventListener("click", () => {
        const filling = document.getElementById("filling");
        filling.innerHTML = btn.innerHTML;
        filling.style.backgroundColor = colorDictionary[btn.innerHTML];
    }
};








function strClick (
    const filling = document.getElementById("Filling");
    filling.innerHTML = "Strawberry";
    filling.style.backgroundColor = "red";
) {