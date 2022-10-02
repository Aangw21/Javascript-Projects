function resetBtn(){
    numGuesses = 0;
    randomNumber = randBool();
    // console.log(randomNumber);
    Allth = document.getElementsByTagName("th");
    // console.log(Allth);
    for (let i = 0; i < Allth.length ; i++){
        Allth[i].style.backgroundColor = "white";
    }
   
}



let numGuesses = 0;

function counterBtn() {

    numGuesses++;

    return numGuesses;
}

// function counterBtn() {
//     if (!resetBtn()) {
//         numGuesses++;
//     }
//     else {
//         numGuesses = 0
//         numGuesses++;
//     }
    
//         return numGuesses;
//     }

// returns a random numner when called
function randBool() {
    return Math.floor(Math.random()*100 + 1);
}

// event listener 
// the row turns blue when you hover over it
function mousehover(event) {
    event.target.style.backgroundColor = "blue";
}

// connects 
// the row turns back to default when you leave
function mouseexit(event) {
    event.target.style.backgroundColor = "white";
}


function addGuessRow(){
    randomNumber = randBool()
    let num = 1;
    for (let i = 0; i < 10 ; i++) {
        // run 10 times
        newRow = document.createElement("tr")
        for (let j = 0; j < 10 ; j++) {
            // runs 100 tomes
            const newh = document.createElement("th");
            newh.innerHTML = num++;

            newh.addEventListener('click', () => {
        // once user clicks on a number this will say its their guess

            let guess = Number(newh.innerHTML);
            if (guess == randomNumber){
                console.log('success', randomNumber);
                newh.style.backgroundColor = "yellow"
                let newMsg = document.getElementById('msg');
                alert(`You got the correct number ${randomNumber} in ${counterBtn()} tries!`);
                newMsg.innerHTML = `Correct the number is ${randomNumber}`
                
                
            }
            else if(guess < randomNumber){
                console.log('too low', randomNumber);
                counterBtn();
                newh.style.backgroundColor = "red"
                let newMsg = document.getElementById('msg');
                newMsg.innerHTML = "Too Low Stephen"
                setTimeout( () => {
                newMsg.innerHTML = "Make a guess!"


                }, 1000);

                
                
            }
            else {
                console.log('too high', randomNumber);
                newh.style.backgroundColor = "gray"
                let newMsg = document.getElementById('msg');
                newMsg.innerHTML = "Too High Stephen"
                setTimeout( () => {
                    newMsg.innerHTML = "Make a guess!"
    
                    }, 1000);
            }
            }
        )

        // newh.addEventListener('mouseover', mousehover)

        // newh.addEventListener('mouseleave', mouseexit)

            

            newRow.appendChild(newh)
        }
        // get the table
        const table = document.getElementById("guessTable");

        // add the <tr> with all the 5 <th> into the table
        table.appendChild(newRow);

    }
}


addGuessRow()




//Each element will require a hover-over action
// //color change(.style)
// //click elemented with be disabled addEventListener(), removeEventListener()

// function guessclick() {
//     n
    
// }


























// User clicks to enter guess
// // will use range
// // use if statement, if its not guess when it is clicked change to color (use click function then will use .style, DOM to change html text, )
// // use a function to stop the button from being clicked again 


// A reset button is required
// // call a button, a new number will be generated, all styling back to default
