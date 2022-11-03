// Global Variable
const globalData = [];

// my variables
const other_Radio = document.getElementById("other-radio");
const south_Radio = document.getElementById("south-radio");
const north_Radio = document.getElementById("north-radio");
const na_Radio = document.getElementById("na-radio");

const inputField = document.getElementById("highschool-input");

south_Radio.addEventListener("click", () => {

    // Reenable the disabled attribute of the high school input field
    document.getElementById("highschool-input").disabled = true;

    // Set the PLACEHOLDER value to an empty string to reset any user entered value
    inputField.placeholder = "";

    // Set the VALUE to an empty string
    document.getElementById("highschool-input").value = "";

});
// Creates an eventlistener when other option is clicked on 
other_Radio.addEventListener("click", () => {
    // A conditional statement to check what the value of text input for the "other" option is IF there is a disabled value then enter the condition and execute following statements
    if(inputField.disabled){
        console.log("The input field is disabled!");
        // Turns on the input field for the other option
        document.getElementById("highschool-input").disabled = false;
        // Adds a place holder
        inputField.placeholder = "Enter high school name";

    }
})


north_Radio.addEventListener("click", () => {
     // Reenable the disabled attribute of the high school input field
    document.getElementById("highschool-input").disabled = true;
    // Set the PLACEHOLDER value to an empty string to reset any user entered value
    inputField.placeholder = "";
     // Set the VALUE to an empty string
    document.getElementById("highschool-input").value = "";

});


na_Radio.addEventListener("click", () => {

    // Reenable the disabled attribute of the high school input field
    document.getElementById("highschool-input").disabled = true;
    // Set the placeholder value to an empty string to reset any entered value
    inputField.placeholder = "";
    // Set the value to an empty string
    document.getElementById("highschool-input").value = "";

});

function fillTable(dataJSON){
    // move this to a function later
    for (let i = 0; i < dataJSON.length; i++) {
        const name = dataJSON[i]["firstName"] + " " + dataJSON[i]["lastName"];
        const email = dataJSON[i]["email"];
        const under18 = dataJSON[i]["under18"];
        const regTime = dataJSON[i]["timestamp"];
        const grade = dataJSON[i]["grade"];
        const highschool= dataJSON[i]["highschool"];
        const session1 = dataJSON[i]["session1"];
        const session2 = dataJSON[i]["session2"];

        console.log(dataJSON[i]["email"])
        const newRow = document.createElement("tr");
        const regBody = document.getElementById("registrar-body");
        regBody.appendChild(newRow);

        // create the td for name
        const newTD = document.createElement("td");
        newTD.innerHTML = name;
        newRow.appendChild(newTD);

        // create the td for age
        const new18 = document.createElement("td");
        new18.innerHTML = under18;
        newRow.appendChild(new18);


        // create the td for email
        const newEmail = document.createElement("td");
        newEmail.innerHTML = email;
        newRow.appendChild(newEmail);

        // change .innerHTML
        // append to tr

         // create the td for reg time
         const newRegTime = document.createElement("td");
         newRegTime.innerHTML = regTime;
         newRow.appendChild(newRegTime);

        // create the td for grade
        const newGrade = document.createElement("td");
        newGrade.innerHTML = grade;
        newRow.appendChild(newGrade);

        // create the td for hs
        const newHS = document.createElement("td");
        newHS.innerHTML = highschool;
        newRow.appendChild(newHS);

        // create the td for hs
        const newSec1 = document.createElement("td");
        newSec1.innerHTML = session1;
        newRow.appendChild(newSec1);

        // create the td for hs
        const newSec2 = document.createElement("td");
        newSec2.innerHTML = session2;
        newRow.appendChild(newSec2);

 
    }
}


function submitJSON() {
    const form = document.getElementById('summerCampRegistration');
    form.addEventListener("submit", (event) => {
        // prevent default submit action
        event.preventDefault();
        // create own formdata
        new FormData(form);
    });

    form.addEventListener("formdata", (event) => {
        // get form data in its raw form
        const formData = event.formData;
        // new JSON object
        const dataJSON = {}
        // iterate through our formData object for parsing
        for (const [key, value] of formData.entries()){
            // populate our JSON object with the form data
            dataJSON[key] = value;
        }
        // print to see if we made our JSON object correctly
        console.log(dataJSON);
        // need to filter out data
        const student = {};
        // good expected properly-formed data
        student["firstName"] = dataJSON["firstName"];
        student["lastName"] = dataJSON["lastName"];
        student["email"] = dataJSON["email"];
        student["timestamp"] = dataJSON["timestamp"];
        student["grade"] = dataJSON["schoolGrade"];
        student["highschool"] = dataJSON["highschool"];
        student["session1"] = [];
        student["session2"] = [];

        if (dataJSON["isUnderEighteen"]){
            student["under18"] = true;
        } else{
            student["under18"] = false;
        }
// session 1
        if (dataJSON["session1-slot1"] != "None"){
            student["session1"].push(dataJSON["session1-slot1"]);
        }

        if (dataJSON["session1-slot2"] != "None"){
            student["session1"].push(dataJSON["session1-slot2"]);
        }
        if (dataJSON["session1-slot3"] != "None"){
            student["session1"].push(dataJSON["session1-slot3"]);
        }
        if (dataJSON["session1-slot4"] != "None"){
            student["session1"].push(dataJSON["session1-slot4"]);
        }
// session 2
        if (dataJSON["session2-slot1"] != "None"){
            student["session2"].push(dataJSON["session2-slot1"]);
        }
        if (dataJSON["session2-slot2"] != "None"){
            student["session2"].push(dataJSON["session2-slot2"]);
        }
        if (dataJSON["session2-slot3"] != "None"){
            student["session2"].push(dataJSON["session2-slot3"]);
        }
        if (dataJSON["session2-slot4"] != "None"){
            student["session2"].push(dataJSON["session2-slot4"]);
        }




        // if (dataJSON["session1-slot2"]){
        //     student["session1"] = dataJSON["session1-slot1"];
        // } else{
        //     student["session1"] = none 
        // }
        // if (dataJSON["session1-slot1"]){
        //     student["session1"] = dataJSON["session1-slot1"];
        // } else{
        //     student["session1"] = none 
        // }
        // if (dataJSON["session1-slot1"]){
        //     student["session1"] = dataJSON["session1-slot1"];
        // } else{
        //     student["session1"] = none 
    
        // student["session1"] = dataJSON["session1"];
        // student["session2"] = dataJSON["session2"];
        // is under18 
        // conver classes to an array
        console.log(student);

        // if (there is a course(slot 1-4)) {
            // add to array
        // } student["session1"] = array
        
        // the object is diffrent from the json, so when a user submits it we it to have the same formatting

        // then submit it to table
   
    });
}


function searchJSON(){


    // access the search button 
    const grabButton = document.getElementById("search-button").addEventListener("click", () => {
        const grabInput = document.getElementById("search-input").value;
        console.log(grabInput);
        // const grabTable = document.getElementById("registrar-table");
        // for (let i = 0; i < globalData.length; i++) {
                //  const grades = globalData[i]["grade"];
        //          console.log(grades);
        const getGrades = globalData.filter( (students) => {
            return grabInput == students["grade"];
            // compare the search to the data
        });

        // cont getCourses = globalData.filter( (students) => {
            // return grabInput == students["grade"];
        
        console.log(getGrades);
        // removes elements from table
        const grabTable = document.getElementById("registrar-body");
        while (grabTable.firstChild) {
            grabTable.removeChild(grabTable.firstChild);
        }
        // grab the table
        // remove the table
        // populate the table 
        for (let i = 0; i <  getGrades.length; i++) {
            const name = getGrades[i]["firstName"] + " " + getGrades[i]["lastName"];
            const email = getGrades[i]["email"];
            const under18 =  getGrades[i]["under18"];
            const regTime =  getGrades[i]["timestamp"];
            const grade =  getGrades[i]["grade"];
            const highschool=  getGrades[i]["highschool"];
            const session1 =  getGrades[i]["session1"];
            const session2 =  getGrades[i]["session2"];
    
            console.log( getGrades[i]["email"])
            const newRow = document.createElement("tr");
            const regBody = document.getElementById("registrar-body");
            regBody.appendChild(newRow);
    
            // create the td for name
            const newTD = document.createElement("td");
            newTD.innerHTML = name;
            newRow.appendChild(newTD);
    
            // create the td for age
            const new18 = document.createElement("td");
            new18.innerHTML = under18;
            newRow.appendChild(new18);
    
    
            // create the td for email
            const newEmail = document.createElement("td");
            newEmail.innerHTML = email;
            newRow.appendChild(newEmail);
    
            // change .innerHTML
            // append to tr
    
             // create the td for reg time
             const newRegTime = document.createElement("td");
             newRegTime.innerHTML = regTime;
             newRow.appendChild(newRegTime);
    
            // create the td for grade
            const newGrade = document.createElement("td");
            newGrade.innerHTML = grade;
            newRow.appendChild(newGrade);
    
            // create the td for hs
            const newHS = document.createElement("td");
            newHS.innerHTML = highschool;
            newRow.appendChild(newHS);
    
            // create the td for hs
            const newSec1 = document.createElement("td");
            newSec1.innerHTML = session1;
            newRow.appendChild(newSec1);
    
            // create the td for hs
            const newSec2 = document.createElement("td");
            newSec2.innerHTML = session2;
            newRow.appendChild(newSec2);
    
     
        }
 



    });

    // for (let i in grabTable.rows){
    //     row = grabTable.rows[i]
    //     // iterate through rows
    //     for (let j in row.cells) {
    //         let col = row.cells[j]
    //         if (grabInput in col){
    //             console.log("yes");
    //         }
    //     }
    // }
    

    // add an eventlistener

    // grabs the usersearch
    // validation with table
    
    // grab table too
}






// read json file
function loadJSON(fileName){
    // use XHTMLhttpRequest to get JSON file contents
    const xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", fileName);
    xobj.onreadystatechange = () => {
        if (xobj.readyState == 4 && xobj.status == 200) {
            // get the text as a raw string
            const responseText = xobj.responseText;
            // parse raw string into JSON object
            const dataJSON = JSON.parse(responseText);
            //append the dataJSON to the global variable
            for (let i = 0; i < dataJSON.length; i++){
                globalData.push(dataJSON[i])
                console.log(dataJSON[i])
            }



            // use the parsed JSON data as necessary
            console.log(dataJSON);

            fillTable(dataJSON);
        }
    };
    xobj.send();
}


// append dataJSON dict to Global
// loop through to dataJSON first to access each individual object

// page load

function loopJSON(fileName){
    loadJSON('proj3.json');
    console.log(dataJSON);

}

function init(){
    loadJSON('proj3.json');
    // print to see if we made our JSON object correctly
    submitJSON();
    // loopJSON('proj3.json');
    searchJSON();


}


init()

// prepare json file when you submit form 