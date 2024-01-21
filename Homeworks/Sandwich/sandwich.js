/* TO DO:
Complete the following functions:
  - breadClick()
  - breadClear()
  - fillingClick()
  - fillingClear()
  - eatClick()
*/

/* ------------------------------
List of DOM access commands:
getElementsByTagName(), getElementsByName(), getElementsByClassName
querySelector(), querySelectorAll(), getElementByID()

Hint: take special care between
the use of .innerHTML vs .value
------------------------------*/

// Bound to Add Bread button
// Sets both p.bread text to user input text
function breadClick(){
    // const addBread = document.getElementById("breadClick")
    // const createBread = document.createElement("p")
    // createBread.innerHTML(addBread)
    // why is there a [0]
    const getBread = document.getElementsByClassName("bread");
    const getInput = document.getInputsByValue("Bread type");
    for (let i = 0; i < getBread.length; i++) {
        getBread[i].innerHTML = getInput[0].value;
        }
}

// Bound to Clear Bread button
// Clears p.bread text
function breadClear(){
    const getBreadClear = document.getElementsByClassName("bread")
    for (let i = 0; i < bread.length; i++) {
        getBreadClear[i].innerHTML = "";
    }
}

// Bound to Add Filling button
// Sets both p.filling text to user input text
function fillingClick(){
    const getFilling = document.getElementsByName("filling")
    const getFillInput = document.getElementsByName("fillingInput")
    for (let i = 0; i < getFilling.length; i++) {
        getFilling[i].innerHTML = getFillInput[i].value;
    }
}

// Bound to Clear Filling button
// Clears p.filling
function clearFilling(){
    const getFilling = document.getElementsByName("filling")
    for (let i = 0; i < getFilling.length; i++) {
        getFilling[i].innerHTML = "";
    }
}

// Bound to Eat! button
// Clears all <p> text
function eatClick(){
    // why wont think work
    const getBreadClear = document.getElementsByClassName("bread")
    for (let i = 0; i < bread.length; i++) {
        getBreadClear[i].innerHTML = "";
    }
    const getFilling = document.getElementsByName("filling")
    for (let i = 0; i < getFilling.length; i++) {
        getFilling[i].innerHTML = "";
    }

    return;
}

// certain DOM selectors force an array