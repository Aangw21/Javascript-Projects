function resetBtn(){
    console.log("Button works!");
    let randomNumber = randBool();
    console.log(randomNumber);
    Allth = document.getElementsByTagName("th");
    console.log(Allth);
    for (let i = 0; i < Allth.length ; i++){
        Allth[i].style.backgroundColor = "white";
    }
   
}

// function counterBtn() {
// const counterBtn = document.getElementsByTagName("th");
// for (let i = 0; i < Allth.length ; i++){
//     counterBtn[i].addEventListener("click",()=>{
//         guesses++;}
//     )
// }

function counterBtn() {
    let guesses = 0
    const counterBtn = document.getElementsByTagName("th");
    for (let i = 0; i < counterBtn.length ; i++){
        counterBtn[i].addEventListener("click", ()=>{
            guesses++;
            // return guesses;
        }

        )
    
    }
    // return "Hello";
    return guesses;
}

function randBool() {
    return Math.floor(Math.random()*100 + 1);
}


function mousehover(event) {
    event.target.style.backgroundColor = "blue";
}

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
                alert(`You got the correct number ${randomNumber} in ${counterBtn()}`);
                newMsg.innerHTML = `Correct the number is ${randomNumber}`
                
                // newh.removeEventListener('mouseover', mousehover)
            }
            else if(guess < randomNumber){
                console.log('too low', randomNumber);
                newh.style.backgroundColor = "red"
                let newMsg = document.getElementById('msg');
                newMsg.innerHTML = "Too Low Stephen"
                setTimeout( () => {
                newMsg.innerHTML = "Make a guess!"


                }, 1000);

                // newh.removeEventListener('mouseover', mousehover)
                
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
