// TO DO:
//  - setKeys()
//  - resetClick()

// From Practice 5
// Just leave empty or
// Optional: import your updateColor() implementation
function updateColor(){
    return;
}

// Implement keyboard key functionality
// When user clicks the key, the key will be "typed" into the guess

// Recommended steps & hints:
//  - querySelectorAll().forEach() will be most elegant here
//  - String.trim() will be useful here. Check the exact string you get if you use .innerHTML
//  - each key will need its own addEventListener()
//  - INDEX keeps track of where they "keyboard cursor" is
//  - use .innerHTML to your advantage

// Extra Challenge: Enable direct keyboard input as well

let INDEX = 0;
function setKeys(){
    return;
}

// Generate a new random word
// Set the new target word
// Reset the guess string back to XXXXX
// Reset the background color back to white
// Enable the guess button
// reset INDEX back to 0
function resetClick(){
    return;
}


// ---------------- LIBRARY --------------------
// Do not make any edits in this section
// You may reference and use functions in this section
// ---------------- LIBRARY --------------------

// Word bank
const bank = ["About", "Alert", "Argue", "Beach", "Above", "Alike", "Arise", "Began", "Abuse", "Alive", "Array", "Begin", "Actor", "Allow", "Aside", "Begun", "Acute", "Alone", "Asset", "Being", "Admit", "Along", "Audio", "Below", "Adopt", "Alter", "Audit", "Bench", "Adult", "Among", "Avoid", "Billy", "After", "Anger", "Award", "Birth", "Again", "Angle", "Aware", "Black", "Agent", "Angry", "Badly", "Blame", "Agree", "Apart", "Baker", "Blind", "Ahead", "Apple", "Bases", "Block", "Alarm", "Apply", "Basic", "Blood", "Album", "Arena", "Basis", "Board", "Boost", "Buyer", "China", "Cover", "Booth", "Cable", "Chose", "Craft", "Bound", "Calif", "Civil", "Crash", "Brain", "Carry", "Claim", "Cream", "Brand", "Catch", "Class", "Crime", "Bread", "Cause", "Clean", "Cross", "Break", "Chain", "Clear", "Crowd", "Breed", "Chair", "Click", "Crown", "Brief", "Chart", "Clock", "Curve", "Bring", "Chase", "Close", "Cycle", "Broad", "Cheap", "Coach", "Daily", "Broke", "Check", "Coast", "Dance", "Brown", "Chest", "Could", "Dated", "Build", "Chief", "Count", "Dealt", "Built", "Child", "Court", "Death", "Debut", "Entry", "Forth", "Group", "Delay", "Equal", "Forty", "Grown", "Depth", "Error", "Forum", "Guard", "Doing", "Event", "Found", "Guess", "Doubt", "Every", "Frame", "Guest", "Dozen", "Exact", "Frank", "Guide", "Draft", "Exist", "Fraud", "Happy", "Drama", "Extra", "Fresh", "Harry", "Drawn", "Faith", "Front", "Heart", "Dream", "False", "Fruit", "Heavy", "Dress", "Fault", "Fully", "Hence", "Drill", "Fiber", "Funny", "Henry", "Drink", "Field", "Giant", "Horse", "Drive", "Fifth", "Given", "Hotel", "Drove", "Fifty", "Glass", "House", "Dying", "Fight", "Globe", "Human", "Eager", "Final", "Going", "Ideal", "Early", "First", "Grace", "Image", "Earth", "Fixed", "Grade", "Index", "Eight", "Flash", "Grand", "Inner", "Elite", "Fleet", "Grant", "Input", "Empty", "Floor", "Grass", "Issue", "Enemy", "Fluid", "Great", "Irony", "Enjoy", "Focus", "Green", "Juice", "Enter", "Force", "Gross", "Joint", "Jones", "Links", "Media", "Newly", "Judge", "Lives", "Metal", "Night", "Known", "Local", "Might", "Noise", "Label", "Logic", "Minor", "North", "Large", "Loose", "Minus", "Noted", "Laser", "Lower", "Mixed", "Novel", "Later", "Lucky", "Model", "Nurse", "Laugh", "Lunch", "Money", "Occur", "Layer", "Lying", "Month", "Ocean", "Learn", "Magic", "Moral", "Offer", "Lease", "Major", "Motor", "Often", "Least", "Maker", "Mount", "Order", "Leave", "March", "Mouse", "Other", "Legal", "Maria", "Mouth", "Ought", "Level", "Match", "Movie", "Paint", "Lewis", "Maybe", "Music", "Panel", "Light", "Mayor", "Needs", "Paper", "Limit", "Meant", "Never", "Party", "Peace", "Power", "Radio", "Round", "Peter", "Press", "Raise", "Route", "Phase", "Price", "Range", "Royal", "Phone", "Pride", "Rapid", "Rural", "Photo", "Prime", "Ratio", "Scale", "Piece", "Print", "Reach", "Scene", "Pilot", "Prior", "Ready", "Scope", "Pitch", "Prize", "Refer", "Score", "Place", "Proof", "Right", "Sense", "Plain", "Proud", "Rival", "Serve", "Plane", "Prove", "River", "Seven", "Plant", "Queen", "Robin", "Shall", "Plate", "Quick", "Roger", "Shape", "Point", "Quiet", "Roman", "Share", "Pound", "Quite", "Rough", "Sharp", "Sheet", "Spare", "Style", "Times", "Shelf", "Speak", "Sugar", "Tired", "Shell", "Speed", "Suite", "Title", "Shift", "Spend", "Super", "Today", "Shirt", "Spent", "Sweet", "Topic", "Shock", "Split", "Table", "Total", "Shoot", "Spoke", "Taken", "Touch", "Short", "Sport", "Taste", "Tough", "Shown", "Staff", "Taxes", "Tower", "Sight", "Stage", "Teach", "Track", "Since", "Stake", "Teeth", "Trade", "Sixth", "Stand", "Terry", "Train", "Sixty", "Start", "Texas", "Treat", "Sized", "State", "Thank", "Trend", "Skill", "Steam", "Theft", "Trial", "Sleep", "Steel", "Their", "Tried", "Slide", "Stick", "Theme", "Tries", "Small", "Still", "There", "Truck", "Smart", "Stock", "These", "Truly", "Smile", "Stone", "Thick", "Trust", "Smith", "Stood", "Thing", "Truth", "Smoke", "Store", "Think", "Twice", "Solid", "Storm", "Third", "Under", "Solve", "Story", "Those", "Undue", "Sorry", "Strip", "Three", "Union", "Sound", "Stuck", "Threw", "Unity", "South", "Study", "Throw", "Until", "Space", "Stuff", "Tight", "Upper", "Upset", "Whole", "Waste", "Wound", "Urban", "Whose", "Watch", "Write", "Usage", "Woman", "Water", "Wrong", "Usual", "Women", "Wheel", "Wrote", "Valid", "World", "Where", "Yield", "Value", "Worry", "Which", "Young", "Video", "Worse", "While", "Youth", "Virus", "Worst", "White", "Worth", "Visit", "Would", "Vital", "Voice"];

// Returns a random word from the wordbank
function randomWord(){
    return bank[Math.floor(Math.random()*bank.length)].toUpperCase();
}

// Sets the guess table row text to guessString
function setGuess(guessWord){
    document.querySelectorAll("th.guess").forEach((elem, i) => {elem.innerHTML = guessWord[i];});
}

// Sets the target table row text to targetString
function setTarget(target){
    document.querySelectorAll("th.target").forEach((elem, i) => {elem.innerHTML = target[i]});
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

// Functionality of guess button
function guessClick(){
    // update the color of the guess row
    updateColor();

    // Check win condition
    checkWin();
}


// setup
function init(){
    // connect buttons
    document.getElementById("guessBtn").addEventListener("click", guessClick);
    document.getElementById("resetBtn").addEventListener("click", resetClick);

    // load word
    setTarget(randomWord())

    // TO DO: set key functionality
    setKeys();

    // set enter functionality
    document.addEventListener("keydown", (event) =>{
        if (event.key == "Enter"){
            guessClick();
        }
    });
}

init();