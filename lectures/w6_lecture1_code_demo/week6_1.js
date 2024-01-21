
// Global variable to generate unique id names
let ID_NUMS = 0;

function addButtonEvent(){
    // get access to the button and add an eventListener
    document.getElementById("addBtn").addEventListener("click", () =>{
        // read input tag value
        const value = document.getElementById("sandwichInput").value;

        // create a paragraph tag <p> (this is completely empty)
        // <p></p>
        const newP = document.createElement("p");

        // add in the desired text in our paragraph
        // <p>Bread</p>
        newP.innerHTML = value;

        // set its class name to "myStyle"
        // this ensures that our css styling is applied
        newP.className = "myStyle";

        // set its id name
        // Use ID_NUMS to make sure unique ids are generated
        newP.id = "sandwichElement" + String(ID_NUMS++);

        // add the new element to the HTML page
        // specifically to the custom-made div
        // get access to the div
        const div = document.getElementById("sandwichDiv");

        // add newP to the top
        div.insertBefore(newP, div.firstChild);

        // add newP to the bottom
        // div.appendChild(newP);
    });
}

function eatButtonEvent(){
    // get access to the button and add an eventListener
    document.getElementById("eatBtn").addEventListener("click", () => {

        // get the div we want to clear out
        const div = document.getElementById("sandwichDiv");

        // if there is nothing to eat, communicate that with an error message
        // does the .firstChild exist?
        if (!div.firstChild){
            // error text appears
            // get the error <p>
            const err = document.getElementById("errorTxt");

            // set the text
            err.innerHTML = "There is nothing to eat!";

            // the text disappers after 1 second
            // setTimeout(function(), time in miliseconds)
            setTimeout(() => {
                err.innerHTML = "";
            }, 1000);

            // return to stop all functionality below
            return;
        }

        // is the number of children exactly 0?
        // if (div.childNodes.length == 0){
        //     alert("There is nothing to eat!");
        // }
   
        // loop through the div and delete each individual element
        // as long as div.firstChild does not return empty, we will loop
        // if we're in the loop, it means div.firstChild exists, so remove it
        if( confirm("Are you sure you want to eat your masterpiece?") ){
            while(div.firstChild){
                div.removeChild(div.firstChild);
            }
        }
    });    
}

function init(){
    addButtonEvent();
    eatButtonEvent();

    // prompt gets a string
    const sandwichName = prompt("Pick a name for your sandwich:");
    const heading = document.querySelector("h1");
    heading.innerHTML += sandwichName;

    // global key event
    // event is tied to the root document
    document.addEventListener("keydown", (event) => {
        // check to see if key pressed is "r"
        if (event.key == "r"){
            // reset all sandwich content
            const div = document.getElementById("sandwichDiv");
            while(div.firstChild){
                div.removeChild(div.firstChild);
            }
        }
    })

    document.querySelector("h1").innerHTML += name;
}

init();