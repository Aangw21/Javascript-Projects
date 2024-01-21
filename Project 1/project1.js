// Global Variables
function randBool() {
    return Math.floor(Math.random()*100 + 1);
}

// const counterBtn = document.getElementsByTagName("button");


counterBtn[0].addEventListener("click",()=>{
guesses++;
updateText();
});

function updateText(){
    // const grabParagraphs = document.getElementsByTagName("p");
    // grabParagraphs[0].innerHTML("You guessed" + guesses)
    // grabParagraphs[1].innerHTML("You guessed" + guesses)
    // grabParagraphs[2].innerHTML("You guessed" + guesses)


    const grabGuess = document.getElementById("input_guess");
    const guess = grabGuess.value;
    const grabFeedback3 = document.getElementById("feedback3");
    grabFeedback3.textContent = "Number of guesses: " + guesses;
    const grabFeedback2 = document.getElementById("feedback2");
    grabFeedback2.textContent = "Your guess is: " + guess
}

// function updateText(){

// }

let guesses = 0

let counterButton= document.getElementById("input_guess");

// counterButton[0].addEventListener("click",()=>{
// count++;
// updateText();
// });

// function updateText(){
//     const grabFeedback1 = document.getElementById("feedback2");
//     grabFeedback1.textContent = guesses;
// }

// cant fucking use it after guess right
// update after guessing 

// let number = Math.floor(math.random()*100 + 1);
// // Function to generate number between 1 and 100

// // User enters a number 


// this function is in the guess button, called when you hit?
// function gb() {
//  const grabGuess = document.getElementById("id_guess");
//  const guess = grabGuess.innerHTML
//  return
// }

// // called when button is clicked 
const btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", gb); //functions are objects in js so they dont need ()
// [0] is grabbing the first button since there's a reset button too

// grabbing the text from input
// Eventbased
function gb() {
    const grabGuess = document.getElementById("input_guess");
    const guess = grabGuess.value;
    console.log(guess);
    // check = isNaN(guess);
    // if (guess == null) {
    //     const grabFeedback = document.getElementById("feedback");
    //     grabFeedback.textContent = "Please enter an integer";
    //     const grabFeedback1 = document.getElementById("feedback1");
    //     grabFeedback1.textContent = "Please guess again"
    // }
    // else{
        if (guess == randomNumber){
            console.log("as");
            // grab the p tag 
            const grabFeedback = document.getElementById("feedback");
            grabFeedback.textContent = "You won";
            document.getElementById("guess_button").disabled = true;
            //  found on Youtube
        }
        else if(guess >= randomNumber) {
            const grabFeedback = document.getElementById("feedback");
            grabFeedback.textContent = "Too high";
            console.log("too high")
        }
        else  {
            const grabFeedback = document.getElementById("feedback");
            grabFeedback.textContent = "Too small";
            console.log("too small")
        }
  
 }




function rb(){
    const reset = document.getElementsByName("Input");
    reset[0].value = "Make a guess";

    const grabParagraphs = document.getElementsByTagName("p");
    grabParagraphs[1].textContent = "Good luck have fun!";
    grabParagraphs[2].textContent = "Awaiting guess...";
    grabParagraphs[3].textContent = "Number of guesses: 0";
    document.getElementById("guess_button").disabled = false;
    guesses = 0
}

// check if guess is correct randbool can not be compared 

const randomNumber = randBool();
console.log(randomNumber)




// original idea was the function would be called after hitting the button
// then function gb would grab the input and I would use the event listenr
// to validate


// once you hit the guess button this function will grab the input

   
//  guess.addEventListener("click", function(guess){
//     if guess == randBool():
//         const grabFeedback = document.getElementById("feedback");
//         return grabFeedback.textContent("You won");
//     else:

    
//     // grab tag for return statment and convert it to innerhtml


//  })
// }


    

// num150 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,]