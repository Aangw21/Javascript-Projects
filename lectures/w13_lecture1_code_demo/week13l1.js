// the most recent input
let mostRecent = -1;


// selects all buttons and loops through it 
document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", (event) => {
        // once you click it

        // get the button input as a variable
        const input = Number(event.target.innerHTML);

        // is my current input different from the most recent input?
        // once u first select a button it wont be equal to the global var 
        if (mostRecent != input){
            // add the input to the end of the string
            document.querySelector("p").innerHTML += String(input);
            // then it selects the paragraph and adds the number

            // update mostRecent
            mostRecent = input;
            // makes the global variable what the user selected
        }
    });    
});

// where am i at, and do i need to update where I am 