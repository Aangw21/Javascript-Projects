// TO DO:
//      - getHeading()
//      - getChoices()
//      - getChallenges()
//      - challengeDifferences()
//      - sumChoices()
//      - sumChallenges()
//      - getSubHeading
// 
// For full marks, you must use .map(), .filter(), and .reduce()
// If you use for loop or .forEach(), you will receive minimal marks

// dataJSON is the full JSON object
// constructs the string "Bid Index - Awesome Games Done Quick 2019" using the data in the JSON object
// returns a string
function getHeading(dataJSON){
    let dataName = dataJSON["name"];
    let dataYear = dataJSON["year"];
    let finalHeading = "Bid Index - " + dataName + " " + String(dataYear);
    return finalHeading;
}

// dataJSON is the full JSON object
// parse the JSON object using .filter()
// returns an array containing only the incentives objects of type "choice"
function getChoices(dataJSON){
    let inscentives = dataJSON["incentives"];
    let choices = inscentives.filter ( (choice)  => {
        return choice["type"] == "choice";
    });
    return choices;
}

// dataJSON is the full JSON object
// parse the JSON object using .filter()
// returns an array containing only the incentives objects of type "challenge"
function getChallenges(dataJSON){
    // grab incetives
    let incentives = dataJSON["incentives"];
    let challengeArray = incentives.filter (( challenge ) => {
        // what do I pick?
        return challenge["type"] == "challenge";
    });
    return challengeArray;
}

// pre-req: complete getChallenges()
// challenges is an array of incentive objects
// calculates the difference between amount and goal of each incentive using .map()
// for floating point formatting, use .toFixed(2) to truncate the decimals to 2 places
// returns an array of floats
function getChallengeDifferences(challenges){
    const netdiffArray = challenges.map((challenge) => {
        let amount = challenge["amount"];
        let goal = challenge["goal"];
        let netDiff = amount - goal;
            return (netDiff).toFixed(2);
    } );
    return netdiffArray;
}

// pre-req: complete getChoices()
// choices is an array of incentive objects
// calculate the cumulative sum of the amount of money raised across all incentives using .reduce()
// returns a float
function sumChoices(choices){
    console.log(choices);
   const total =  choices.reduce((sum, Incentive) => {
        return sum + Incentive["amount"];
    },0);
    console.log(total);
    return total;
}

// pre-req: complete getChallenges()
// choices is an array of incentive objects
// calculate the cumulative sum of the amount of money raised across all incentives using.reduce()
// returns a float
function sumChallenges(challenges){
    const challengeTotal =  challenges.reduce((sum, challenges) => {
         return sum + challenges["amount"];
     },0);
     return challengeTotal;
 }  

// pre-req: complete sumChoices() and sumChallenges()
// choiceTotal and challengeTotal are two floats calculated from sumChoices() and sumTotal()
// constructs the string "Total: ${} - Choice Total: ${} - Challenge Total: ${}"
// must use the arguments in constructing the string
// for floating point formatting, use .toFixed(2) to truncate the decimals to 2 places
// returns a string
// choicetotal is sumchoices above
function getSubHeading(choiceTotal, challengeTotal){
    return challengeTotal;
}

// ---------------- STOP --------------------
// Do not make any edits in this section
// None of the functions will be useful to you
// You may take a look to see how things are setup
// ---------------- STOP --------------------

function populateChallengeTable(challenges){

    const diffs = getChallengeDifferences(challenges);

    challenges.forEach((challenge, i)=>{
        const newRow = document.createElement("tr");
        
        const name = document.createElement("td");
        const run = document.createElement("td");
        const description = document.createElement("td");
        const amount = document.createElement("td");
        const goal = document.createElement("td");
        const diff = document.createElement("td");

        name.innerHTML = challenge.name;
        run.innerHTML = challenge.run;
        description.innerHTML = challenge.description;
        amount.innerHTML = "$" + String(challenge.amount);
        goal.innerHTML = "$" + String(challenge.goal);
        diff.innerHTML = "$" + String(diffs[i]);

        newRow.appendChild(name);
        newRow.appendChild(run);
        newRow.appendChild(description);
        newRow.appendChild(amount);
        newRow.appendChild(goal);
        newRow.appendChild(diff);

        document.getElementById("challengeTable").appendChild(newRow);        
    });
}

function populateChoiceTable(choices){
    choices.forEach((choice)=>{
        const newRow = document.createElement("tr");
        
        const name = document.createElement("td");
        const run = document.createElement("td");
        const description = document.createElement("td");
        const amount = document.createElement("td");

        name.innerHTML = choice.name;
        run.innerHTML = choice.run;
        description.innerHTML = choice.description;
        amount.innerHTML = "$" + choice.amount;

        newRow.appendChild(name);
        newRow.appendChild(run);
        newRow.appendChild(description);
        newRow.appendChild(amount);

        document.getElementById("choiceTable").appendChild(newRow);        
    });
}

function loadPage(dataJSON){
    document.querySelector("h1").innerHTML = getHeading(dataJSON);

    const choices = getChoices(dataJSON);
    const challenges = getChallenges(dataJSON);

    populateChoiceTable(choices);
    populateChallengeTable(challenges);

    document.querySelector("h2").innerHTML = getSubHeading(sumChoices(choices), sumChallenges(challenges));

}

function loadJSON(fileName){
    // use XMLHttpRequest to get JSON file contents
    const xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", fileName);
    xobj.onreadystatechange = () => {
        if (xobj.readyState == 4 && xobj.status == 200){
            // get the text as a raw string
            const responseText = xobj.responseText;
            // parse raw string into JSON object. Stored globally
            dataJSON = JSON.parse(responseText);
            // load page
            loadPage(dataJSON);
        }
    };
    xobj.send();

}

function init(){
    // read JSON from file
    loadJSON("./agdq19_incentives.json");
}

init();