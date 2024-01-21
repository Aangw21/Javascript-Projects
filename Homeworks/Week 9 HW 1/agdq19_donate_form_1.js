  // TO DO:
//  - processForm()
//  - addDonationRow()

// processForm()
//  1) complete "submit" event listener
//      a) set up preventDefault() for good practice
//      b) create a new FormData using the form object
//  2) complete "formdata" event listener
//      a) get the event's formData property
//      b) loop through the entries and populate "data" JSON object with the appropriate property names
//      c) add any additional properties that is not collected from the form (timestamp)

// the date format should be "MONTH DAY, YYYY, HH:MM:SS"
//  e.g. "October 15, 2022, 15:28:59"
//  To do this, creating a new Date() object will be useful along with its library of methods:
//      - .getFullYear()
//      - .getMont()
//      - .getDate()
//      - .getHours()
//      - .getMinutes()
//      - .getSeconds()

function processForm(){
    const form = document.getElementById("donateForm");
    form.addEventListener("submit", (event) => {
        // implement form submit here
        event.preventDefault();
        new FormData(form);

    });

    form.addEventListener("formdata", (event) => {
        const data = {}; // DO NOT REMOVE: populate this data object with the form data

        // implement form data processing here
        const formData = event.formData;
        for ( const [key, value] of formData.entries()){
            data[key] = value;
        }
        addDonationRow(data); // DO NOT REMOVE: adds the data to the HTML table
    });
}

const dataform = {};

// data is a JSON object
// data is the object you constructed in processForm()
// use this JSON data to create a new table row and data and add it to the table
// recall that you will need to:
//  - document.createElement() to create new table rows ("tr") and table data cells ("td")
//  - .appendChild() or .insertBefore() to add the newly created elements
// The new row should be added to the bottom of the table
// [Optional] - implement adding the row to the top of the table
// function addDonationRow(data){
//     const table = document.getElementById("donationTable"); // DO NOT REMOVE: gets the donation table to populate
    
//     console.log(data)

//     const newRow = document.createElement("tr");

//     for (const properties in data){
//         const formData = document.createElement("td");
//         formData.innerHTML = data[properties];
//         newRow.appendChild(formData);
//     }

//     table.appendChild(newRow);

//     aggregate(data); // DO NOT REMOVE: aggregates data for the subheadings
// }
function addDonationRow(data){
    const table = document.getElementById("donationTable"); // DO NOT REMOVE: gets the donation table to populate
    
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    // construct a new row populated with the JSON data

    // Should loop through and print each key value pair
    for (const property in data){
        console.log(`${property} : ${data[property]}`);
    }


    // Creates a new DOM element in this case a <tr></tr> object
    const newRow = document.createElement("tr");

    // A For In loop that create a new DOM element in this case a <td></td> object and populate it with respective data from dictionary
    for (const property in data){

        // A variable that is assigned to the value of createElement --- which is a data cell
        const newData = document.createElement("td");

        // Assigning the innerHTML value to the value of the data cell with key in the data object

        // If the key is "email" we want to assign the value to the time that the user submits the donation
        if (property == "email"){

            const currDate = new Date(); // Will return a long string of current Date
            const fullYear = currDate.getFullYear();
            const day = currDate.getDate();
            const month = months[currDate.getMonth()];
            const hour = currDate.getHours();
            const min = currDate.getMinutes();
            const sec = currDate.getSeconds();

            newData.innerHTML = `${month} ${day}, ${fullYear}, ${hour}:${min}:${sec}`;
            
        }

        // Otherwise if the key is "amount" we want to assign the value with actual dollar amount instead of the entered integer
        else if (property == "amount") {
            newData.innerHTML = `$${data[property]}.00`
        }
        // Lastly if none of the other conditions are met we will proceed with assigning each data cell with the value of from the user input fields
        else {
            newData.innerHTML = data[property];
        }

        

        // Adding the new data to repsective row
        newRow.appendChild(newData);
    }

    // Appending the new <tr> (Row with data in cells) element onto the page as new entry
    table.appendChild(newRow);

    aggregate(data); // DO NOT REMOVE: aggregates data for the subheadings
};
// ---------------- STOP --------------------
// Do not make any edits in this section
// None of the functions will be useful to you
// You may take a look to see how things are setup
// ---------------- STOP --------------------



// filtering sums
function aggregate(data){
    dataAll.push(data);
    const count = dataAll.length;
    const total = dataAll.reduce( (sum, donation) => {
        return sum + Number(donation["amount"]);
    }, 0);
    const avg = total / count;
    const max = dataAll.reduce( (max, donation) => {
        if (max > donation["amount"]) return max;
        else return Number(donation["amount"]);
    }, 0);
    document.getElementById("donationSummary").innerHTML = `Total (Count): \$${total.toFixed(2)} (${count}) - Max / Avg Donation: \$${max.toFixed(2)} / \$${avg.toFixed(2)}`;
    clearForm();
}

const COLS = 4;
const headingNames = ["Name", "Time Received", "Amount", "Comment"];
const dataAll = [];

// constructs the main table upon load
function constructGameTable(){
    // make the table
    const table = document.createElement("table");
    table.id = "donationTable";

    // make heading row
    const topRow = document.createElement("tr");

    // make headings
    for (let i = 0; i < COLS; ++i){
        const newH = document.createElement("th");
        newH.innerHTML = headingNames[i];
        topRow.appendChild(newH);
    }
    table.appendChild(topRow);

    // add the table
    document.getElementById("tableDiv").appendChild(table);
}

function clearForm(){
    const nameInput = document.getElementById("nameInput");
    nameInput.value = "";
    nameInput.disabled = false;

    const commentInput = document.getElementById("commentInput");
    commentInput.value = "";
    commentInput.disabled = false;

    document.getElementById("emailInput").value = "";
    document.getElementById("amountInput").value = "";
}

function init(){
    constructGameTable();
    const data = processForm();
}

init();