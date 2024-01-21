// TO DO:
// Copmlete the randBool function
// Complete the decideWinner function

// Takes no inputs
// Returns a boolean by random
// Will use Math.random() to simulate randomness
function randBool(){
    Math.floor(math.random() * 10) + 1;
    return ;
}

// Decides winner between two players
// Takes two players as input (strings)
// returns one of the inputs by random (as winner)
// Will use randBool function above
function decideWinner(player1, player2){
    // the larger number wins
    return;
}

// ---------------- STOP ----------------
// Do not make any edits in this section
// --------------------------------------
const uni = ["Illinois", "Indiana", "Iowa", "Maryland", "Michigan", "Minnesota", "Nebraska", "Wisconsin"];

function competeClick(){
    // if tier2 is empty
    const tier1 = document.getElementsByClassName("tier1");
    const tier2 = document.getElementsByClassName("tier2");
    const tier3 = document.getElementsByClassName("tier3");
    const tier4 = document.getElementsByClassName("tier4");

    if (!tier2[0].value){
        for (let i = 0; i < 4; ++i){
            const p1 = tier1[i*2].value;
            const p2 = tier1[i*2 + 1].value;
            tier2[i].value = decideWinner(p1, p2);
            
            // const p1 = document.getElementById("tier1_" + String(i*2)).value;
            // const p2 = document.getElementById("tier1_" + String(i*2 + 1)).value;
            // document.getElementById("tier2_" + String(i)).value = decideWinner(p1, p2);
        }
    }
    // if tier3 is empty
    else if (!tier3[0].value){
        for (let i = 0; i < 2; ++i){
            const p1 = tier2[i*2].value;
            const p2 = tier2[i*2 + 1].value;

            tier3[i].value = decideWinner(p1, p2);
            // const p1 = document.getElementById("tier2_" + String(i*2)).value;
            // const p2 = document.getElementById("tier2_" + String(i*2 + 1)).value;
            // document.getElementById("tier3_" + String(i)).value = decideWinner(p1, p2);

        }
    }
    // if tier4 is empty
    else if (!tier4[0].value){
        const p1 = tier3[0].value;
        const p2 = tier3[1].value;
        tier4[0].value = decideWinner(p1, p2);
        // const p1 = document.getElementById("tier3_0").value;
        // const p2 = document.getElementById("tier3_1").value;
        // document.getElementById("tier4_0").value = decideWinner(p1, p2);
    }
    else{
        // all filled
        return;
    }
}

function clearClick(){
    // set all to ""
    const tier2 = document.getElementsByClassName("tier2");
    const tier3 = document.getElementsByClassName("tier3");
    const tier4 = document.getElementsByClassName("tier4");

    for (let i = 0; i < 4; ++i){
        tier2[i].value = "";
    }
    for (let i = 0; i < 2; ++i){
        tier3[i].value = "";
    }
    tier4[0].value = "";
}


// Init
const tier1 = document.getElementsByClassName("tier1");
for (let i = 0; i < 8; ++i){
    // populate initial uni names
    tier1[i].value = uni[i];
}