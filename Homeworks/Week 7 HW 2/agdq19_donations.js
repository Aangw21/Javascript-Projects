// dataJSON is an object
// use dataJSON to construct the webpage's <h1>
// returns the string to be used for the heading
// can use hard-coded string if needed (for this practice ONLY)
function getHeading(dataJSON){
    // return "Donation Index - Awesome Games Done Quick 2019";
    const getHead = dataJSON["name"];
    const getYear = dataJSON["year"];
    const yearandhead = "Donation Index - " + getHead + " " + String(getYear);
    return yearandhead;
}

// dataJSON is an object
// use dataJSON to construct the webpage's <h2>
// returns the string to be used for the subheading
// can use hard-coded string if needed (for this practice ONLY)
function getSubHeading(dataJSON){
    // return "Total (Count): $2,425,790.50 (46457) — Max / Avg / Median Donation: $217,226.12 / $52.22 / $20.00";
    console.log(dataJSON);
    const totalCount = dataJSON["donationCount"];
    const donationTotal = dataJSON["donationTotal"];
    const donationMax = dataJSON["donationMax"];
    const donationAvg = dataJSON["donationAvg"];
    const donationMed = dataJSON["donationMed"];
    const subHead = "Total(Count): $" + donationTotal + "0 (" + String(totalCount) + ") " + "- MAX / AVG / MEDIAN DONATION: $" + String(donationMax) + " / " + "$" + String(donationAvg) + " / " + "$" + parseFloat(donationMed);
    return subHead;
}

// arguments are:
//      - table:    the DOM table to populate
//      - dataJSON: the full JSON object
//      - start:    the starting index for the donation messages
//      - end:      the ending index for the donation messages
//      for example, if start = 50 and end = 100, then you will read donation messages 50 to 99 inclusive
// 
// reads donation messages ranged <start> to <end> from <dataJSON>
// create new rows for each donation message, populate the donor's name, donation timestamp, donation amount, and donation message
// new rows are appended to <table>
// 
// Name:    if there is no name (false), then use "(Anonymous)"
//      If you want the anonymous names to be grayed out, set the class to "anonymous"
// Message: if there is no message (false), then put "No comment"
function addRows(table, dataJSON, start, end){
    let tableGame = document.createElement("TABLE");
    // dataJSON["donations"] .forEach((dTime=>{
    //     return table.appendChild(dTime["date"]);
    // }))
    return tableGame;
}

// ---------------- STOP --------------------
// Do not make any edits in this section
// None of the functions will be useful to you
// You may take a look to see how things are setup
// ---------------- STOP --------------------

// Consts
dataJSON = {};
const COLS = 4;
const headingNames = ["Name", "Time Received", "Amount", "Comment"];

// dataJSON {

// }

// constructs the main table upon load
// only do first 50 rows
function constructGameTable(dataJSON){
    // make the table
    const table = document.createElement("table");
    table.id = "gameTable";

    // make heading row
    const topRow = document.createElement("tr");

    // make headings
    for (let i = 0; i < COLS; ++i){
        const newH = document.createElement("th");
        newH.innerHTML = headingNames[i];
        topRow.appendChild(newH);
    }
    table.appendChild(topRow);

    // initial 50 rows
    addRows(table, dataJSON, 0, 50);

    // add the table
    document.getElementById("tableDiv").appendChild(table);
}

function goFunction(){
    const pageNum = Number(document.getElementById("pageNum").value);
    const table = document.getElementById("gameTable");

    // clear 50 rows
    while (table.lastChild != table.firstChild){
        table.removeChild(table.lastChild);
    }

    // add back rows
    if ((pageNum-1)*50 + 50 > dataJSON.donations.length) addRows(table, dataJSON, (pageNum-1)*50, dataJSON.donations.length);
    else addRows(table, dataJSON, (pageNum-1)*50, (pageNum-1)*50 + 50);
    
}

// construct the HTML page
function loadPage(dataJSON){
    // set text for headings
    document.querySelector("h1").innerHTML = getHeading(dataJSON);
    document.querySelector("h2").innerHTML = getSubHeading(dataJSON);

    // construct the table contents
    constructGameTable(dataJSON);
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
    loadJSON("agdq19_donations_v2.json");

    // connect the button
    document.getElementById("goBtn").addEventListener("click", goFunction);
    
}

init();
getHeading(dataJSON);
// constructGameTable(dataJSON);


