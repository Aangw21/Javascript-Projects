// button functionality for the check button.
// This is used in multiple places:
    // - checkBtn.addEventListener()
    // - enableBtn.addEventListener()
    // - disableBtn.addEventListener()
// Because this is used in multiple places, this will remain
// as a named function instead of an anonymous function
function checkClick(){
    const filling = document.getElementById("filling").value;
    console.log("The filling is: " + filling);
}

// function that immediately runs when the webpage loads
// Ensure a single entry point and code cleanliness
function init(){
    // get buttons and connect their functions

    // ---------------------------
    // Check Button initialization
    // ---------------------------
    const checkBtn = document.getElementById("checkBtn");
    // Connect the button to its function
    checkBtn.addEventListener("click", checkClick);

    // ---------------------------
    // Remove Button initialization
    // ---------------------------
    const removeBtn = document.getElementById("removeBtn");
    // Connect the button to its function
    // function is anonymous since its use is tied to
    // removeBtn and only removeBtn
    removeBtn.addEventListener("click", () => {
        document.getElementById("filling").value = "";
    });

    // ---------------------------
    // Enable Button initialization
    // ---------------------------
    const enableBtn = document.getElementById("enableBtn");
    // Connect the button to its function
    // function is anonymous since its use is tied to
    // removeBtn and only removeBtn
    enableBtn.addEventListener("click", () => {
        // get the checkBtn
        const checkBtn = document.getElementById("checkBtn");
        // connect the function
        checkBtn.addEventListener("click", checkClick);
    });

    // ---------------------------
    // Disable Button initialization
    // ---------------------------
    const disableBtn = document.getElementById("disableBtn");
    // Connect the button to its function
    // function is anonymous since its use is tied to
    // removeBtn and only removeBtn
    disableBtn.addEventListener("click", () => {
        // get the checkBtn
        const checkBtn = document.getElementById("checkBtn");
        // disconnect the function
        checkBtn.removeEventListener("click", checkClick);
    });
}

// Singular entry point into the
// inititialization instructions
init();

// ----------------------------------------------------
// Depreciated functions. Converted into anonymous functions
// ----------------------------------------------------
// function removeClick(){
//     document.getElementById("filling").value = "";
// }

// function enableClick(){
//     const checkBtn = document.getElementById("checkBtn");
//     checkBtn.addEventListener("click", checkClick);
// }

// function disableClick(){
//     const checkBtn = document.getElementById("checkBtn");
//     checkBtn.removeEventListener("click", checkClick);
// }
// ----------------------------------------------------
