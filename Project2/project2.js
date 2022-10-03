function resetBtn(){
    numGuesses = 0;
    randomNumber = randBool();
    // console.log(randomNumber);
    Allth = document.getElementsByTagName("th");
    // console.log(Allth);
    for (let i = 0; i < Allth.length ; i++){
        Allth[i].style.backgroundColor = "white";
    }
    newMsg = document.getElementById('msg');
    newMsg.innerHTML = "Make a guess";
}

// function disableBtn(){
//     btn = document.getElementsByTagName("th");
//     for (let i = 0; i < btn.length ; i++){
//     btn.removeEventListner("click", counterBtn);
//     }
    

// }

// need to acess all the th elements
// 

// cont colorDicionary {
//     Red: "red",
//     Blue
// }

let numGuesses = 0;

function counterBtn() {

    numGuesses++;

    return numGuesses;
}


// returns a random number when called
function randBool() {
    return Math.floor(Math.random()*100 + 1);
}

function turnYellow(event) {
    return event.target.style.backgroundColor = "yellow"
}

// event listener allowss access to newH from function addGuessRow and deletes repetition
// the row turns blue when you hover over it
function mouseEnterBlue(event) {
    event.target.style.backgroundColor = "blue";
}

// event listener allowss access to newH from function addGuessRow and deletes repetition
// the row turns back to default when you leave
function mouseExitWhite(event) {
    event.target.style.backgroundColor = "white";
}

function mouseclickRed(event) {
    event.target.style.backgroundColor = "red";
}

// currently it grabs a rand
function addGuessRow(){
    // grabs a random number from the randBool function
    randomNumber = randBool()
    // nested for loop to create a 10x10 
    let num = 1;
    for (let i = 0; i < 10 ; i++) {
        // run 10 times
        newRow = document.createElement("tr")
        for (let j = 0; j < 10 ; j++) {
            // runs 100 tomes
            const newh = document.createElement("th");
            // creates headings
            newh.innerHTML = num++;

            newh.addEventListener('click', () => {
        // once user clicks on a number this will say its their guess

            let guess = Number(newh.innerHTML);
            // grabs the number from the th and converts it to an INT
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
                // setTimeout( () => {
                // newh.style.backgroundColor = "red"   
                // }, 90000);
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

        newh.addEventListener('mouseover', mouseEnterBlue)

        newh.addEventListener('mouseleave', mouseExitWhite)

            

            newRow.appendChild(newh)
        }
        // get the table
        const table = document.getElementById("guessTable");

        // add the <tr> with all the 5 <th> into the table
        table.appendChild(newRow);

    }
}


// setTimeout( () => {
//     newMsg.innerHTML = "Make a guess!"

//     }, 1000);
// }

// function hoverBlue() {
//     Allth = document.getElementsByTagName("th");
//     console.log(Allth);
//     for (let i = 0; i < Allth.length ; i++){
//         Allth[i].addEventListener("mouseenter", mouseEnterBlue)
//         // Allth[i].RemoveEventListener("mouseenter", mousehover)
//          Allth[i].addEventListener("mouseleave", mouseExitWhite)
//         //  setTimeout( () => {Allth[i].addEventListener("mouseclick", mouseclickRed)}, 10000);
//         // Allth[i].RemoveEventListener("mouseenter", mousehover)
// }
// }

// function exitWhite() {
//     Allth = document.getElementsByTagName("th");
//     console.log(Allth);
//     for (let i = 0; i < Allth.length ; i++){
//         // Allth[i].addEventListener("mouseleave", mouseexit)
//         setTimeout( () => {Allth[i].addEventListener("mouseclick", mouseclickRed)}, 10000);
// }
// }

// the blue hover stays, but once clicked it stays red now

addGuessRow()
// hoverBlue()
// exitWhite()


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
