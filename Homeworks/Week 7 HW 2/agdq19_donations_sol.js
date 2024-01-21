// dataJSON is an object
// use dataJSON to construct the webpage's <h1>
// returns the string to be used for the heading
function getHeading(dataJSON){
    const name = dataJSON.name;
    const year = String(dataJSON.year);
    return `Donation Index - ${name} ${year}`;
}

// dataJSON is an object
// use dataJSON to construct the webpage's <h2>
// returns the string to be used for the heading
function getSubHeading(dataJSON){
    // toFixed() is optional here
    // this just formats decimal palces
    const total = dataJSON.donationTotal.toFixed(2);
    const count = dataJSON.donationCount;
    const max = dataJSON.donationMax.toFixed(2);
    const avg = dataJSON.donationAvg.toFixed(2);
    const med = dataJSON.donationMed.toFixed(2);
    return `Total (count): $${total} (${count}) - Max / Avg / Median Donation: $${max} / $${avg} / $${med}`;
}

// create rows for each entry
function addRows(table, dataJSON, start, end){
    // get the array of donations
    const donations = dataJSON["donations"];

    // loop from index start to index end
    // we need a for loop and not forEach() because
    // we're only displaying a subset at a time
    for (let i = start; i < end; ++i){
        // get the individual donation
        const donation = donations[i]

        // create a new row
        const newRow = document.createElement("tr")

        // create each of the four table data:
        // name, time received, amount, comment

        // create and populate name <td>
        const newName = document.createElement("td");
        if (!donation["name"]["hasName"]){
            // anonymized donation
            newName.innerHTML = "(Anonymous)";
            // change classname of the <td>
            newName.className = "anonymous";
        }
        else{
            // named donation, ["name"]["name"] exists
            newName.innerHTML = donation["name"]["name"];
        }

        // create and populate time received <td>
        const newDateTime = document.createElement("td");
        // concatenate the date and time together
        newDateTime.innerHTML = donation["date"] + ", " + donation["time"];

        // create and populate amount <td>
        const newAmount = document.createElement("td");
        newAmount.innerHTML = "$" + String(donation["amount"]);

        // create and populate comment <td>
        const newComment = document.createElement("td");
        // check if comment exists
        if (!donation["comment"]["hasComment"]){
            newComment.innerHTML = "No comment";
        }
        else{
            newComment.innerHTML = donation["comment"]["comment"];
        }

        // add each <td> to the row
        newRow.appendChild(newName);
        newRow.appendChild(newDateTime);
        newRow.appendChild(newAmount);
        newRow.appendChild(newComment);
        
        // add the <tr> to the table
        table.appendChild(newRow);
    }
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
    loadJSON("./agdq19_donations.json");

    // connect the button
    document.getElementById("goBtn").addEventListener("click", goFunction);
}

init();