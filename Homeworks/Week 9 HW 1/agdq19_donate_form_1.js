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
function addDonationRow(data){
    // const table = document.getElementById("donationTable"); // DO NOT REMOVE: gets the donation table to populate
    
    // construct a new row populated with the JSON data
    // for {const property in data} {
    //     console.log(${property} : ${data[property]}});
    // }
    // console.log(data)

    // const newRow = document.createElement("tr");

    // for (const property in data){
    //     const newData = document.createElement("td");
    //     newData.innerHTML = data[property];
    //     newRow.appendChild(newData);
    // }

    // table.appendChild(newData);

    // aggregate(data); // DO NOT REMOVE: aggregates data for the subheadings
}
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