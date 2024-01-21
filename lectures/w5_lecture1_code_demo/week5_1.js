// Unordered data structure
const colorDictionary = {   Blueberry: "blue",
                            Orange: "orange",
                            Strawberry: "red",
                            Grape: "purple"
};

// -----------------------------------------
// --------- Callback Functions ------------
// -----------------------------------------
// jamClick is never called by a human, meaning we will never see "jamClick()"
// jamClick is always called by another function (e.g. addEventListener())
// this means jamClick should be a callback function
// to do so, we add a new argument to this function

// event is the event calling jamClick
// in this case, event = btn.addEventListener()

// we want to access btn.innerHTML, therefore we will
// access the target of event - event.target

// an alternate syntax to event.target is this.

// event.target allows allows us to trickle up and access the function's target (btn)
function jamClick(event){
    // get the filling
    const fill = document.getElementById("filling");

    // fruit text is available directly inside button's innerHTML
    fill.innerHTML = event.target.innerHTML;
    // fill.innerHTML = this.innerHTML;

    // use dictionary to get the correct color
    fill.style.backgroundColor = colorDictionary[event.target.innerHTML];
    // fill.style.backgroundColor = colorDictionary[this.innerHTML];
}

// Optimal implementation using forEach
// Removes reliance on ordered lists (arrays)
function initBtns_forEach_opt(){
    // Run forEach() on the buttons
    document.querySelectorAll("button.jam").forEach((btn) => {
        // addEventListener to each button
        // >>> jamClick is now a named function <<<
        // this is because enable and disable will access this function as well
        // so it can no longer be anonymous
        btn.addEventListener("click", jamClick);
    });
}

// setup event listener for enable and disable button
function init_enable_disable(){
    
    // get enable button and add event listner
    document.getElementById("enableBtn").addEventListener("click", () => {
        // get all the jam buttons
        const jamBtns = document.querySelectorAll("button.jam");
    
        // add jamClick to every jam button
        jamBtns.forEach((btn) => {
            btn.addEventListener("click", jamClick);
        });
    });
    
    // get disable button and add event listner
    document.getElementById("disableBtn").addEventListener("click", () =>{
        // get all the jam buttons
        const jamBtns = document.querySelectorAll("button.jam");
    
        // remove jamClick from every jam button
        jamBtns.forEach((btn) => {
            btn.removeEventListener("click", jamClick);
        });
    });
}





// Goal: implement mouse events
// if the mouse hovers over the jam, clear the background color
function addFillingMouseover(){
    // filling is <p> element
    const filling = document.getElementById("filling");

    // add mouseenter event
    filling.addEventListener("mouseenter", () => {
        // change color to white
        filling.style.backgroundColor = "white";
    });

    // add mouseleave event
    filling.addEventListener("mouseleave", () => {
        // changes to color. Look up color in dictionary
        filling.style.backgroundColor = colorDictionary[filling.innerHTML];
    });
}



function addButtonMouseover(){
    // get all the buttons
    const buttons = document.querySelectorAll("button");

    // iterate through every button with forEach()
    buttons.forEach((btn) => {
        // add mouseenter event (make large)
        btn.addEventListener("mouseenter", () => {
            btn.style.fontSize = "50px";
        });
        // add mouseleave event (return to normal size)
        btn.addEventListener("mouseleave", () => {
            btn.style.fontSize = "2px";
        });
    });
}



// change the font size of the paragraphs <p>
function setPFontSize(){
    // we prefer querySelectorAll() whenever possible
    document.querySelectorAll("p").forEach(function(p){
        p.style.fontSize = "24px";
    });
}

// change the font size of the buttons <button>
function setButtonFontSize(){
    // we prefer querySelectorAll() whenever possible
    document.querySelectorAll("button").forEach(function(btn){
        btn.style.fontSize = "24px";
    });
}

// change the border radiius of the buttons
function setButtonRadius(){
    // get the buttons
    document.querySelectorAll("button").forEach((btn) => {
        // change border radius styling
        btn.style.borderRadius = "20px";
    });
}

function init(){
    setPFontSize();
    setButtonFontSize();
    setButtonRadius();

    // add mouse events for buttons
    addButtonMouseover();

    // add mouse events for filling
    addFillingMouseover();

    // initialize buttons for enable and disable
    init_enable_disable();

    // addEventListener to each button
    initBtns_forEach_opt();
}

init();


















