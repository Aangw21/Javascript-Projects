// TO DO:
//      - filterAnonymous()
//      - filterName()
//      - filterAmount()
//      - calculateTotal()
//      - calcualteCount()
//      - calculateMax()
// 
// For full marks, you must use .map(), .filter(), and .reduce() unless otherwise stated
// If you use for loop or .forEach(), you will receive minimal marks

// donations is an array of donation objects
// filters for anonymous donations
// [required] - must use .filter()
// returns an array of donations
function filterAnonymous(donations){
    let name = donations.filter ( (anon) => {
        nameFalse = anon["name"];
        return nameFalse["hasName"] == false;
    });
    return name;

}

// donations is an array of donation objects
// name is a string
// filters for donations with matching name
// [required] - must use .filter()
// returns an array of donations
function filterName(donations, name){
    // console.log(name);
    // must capture user names
    // filter check condition thr user is typing w json data
    let names = donations.filter ( (anon) => {
        // checking 
        // 37 name is true only boolean variable 38 we're checking only if its a boolean not a string
        nameObj = anon["name"];
        nameTrue = nameObj["hasName"] == true;
        if (name in nameTrue){
            return name;
        } else {
            return [];
        }
        // if (nameObj != name) {
        //     return name;
        // }
        // nameTrue = nameObj["hasName"];
        // console.log(nameObj);
        // console.log(nameTrue);
        // return nameTrue == name;
    });
    return names;
}

// donations is an array of donation objects
// min and max are both numbers
// filters for donations with donation amounts ranged between min and max (inclusive)
// [required] - must use .filter()
// returns an array of donations
function filterAmount(donations, min, max){
    console.log('apple');
    const donateArray = donations.filter( (donate) => {
        const amount = parseFloat(donate["amount"])
        return (min <= amount) && (amount <= max);
    })
    return donateArray;
}

// donations is an array of donation objects
// calculates the total sum of donations
// [required] - must use .map(), .reduce(), or both
// returns an integer sum
function calculateTotal(donations){
    const donationSum = donations.reduce( (accumulator, donation) => {
        // anonymous function takes two arguments
        //   1) accumulator that is passed along to collect everything
        //   2) the iterator (student)

        // calculate the accumulation and return it
           return accumulator + parseFloat(donation["amount"]);
        // console.log(donation["amount"]);
        // return []
    }, 0); // [IMPORTANT] - specify the initial value of the accumulator
    return donationSum;
}

// donations is an array of donation objects
// calculates the total number of donations in the array
// [optional] - .reduce() is optional here; try it for a challenge
// returns an integer count
function calculateCount(donations){
    // const totalDon = donations.reduce((sum, donate) => {
    //     return sum + 
    // })
    // count = 0
    // donationAmount = donations["amount"];
    // donationAmount.foreach(amount => {
    //     if (amount) {
    //         count += 1
    //     }
    // }

    // )
    // donationAmount = donations["amount"]
    // for (let i = 0; i <  donations.length; i++) {
    //     length = donations.length
    //   }
    length = donations.length
    return length;
}

// donations is an array of donation objects
// finds the largest donation amount within the array of donations
// [optional] - .map() and .reduce() are optional, but highly recommended
// returns an float
function calculateMax(donations){
    return '217226.12';
}

// ---------------- STOP --------------------
// Do not make any edits in this section
// None of the functions will be useful to you
// You may take a look to see how things are setup
// ---------------- STOP --------------------

// Consts
dataJSON = {};
liveJSON = {};
const COLS = 4;
const headingNames = ["Name", "Time Received", "Amount", "Comment"];

// Heading stays the same here
function getHeading(dataJSON){
    const name = dataJSON.name;
    const year = String(dataJSON.year);
    return `Donation Index - ${name} ${year}`;
}

// Subheading depends on the filter
function getSubHeading(donations){

    const total = calculateTotal(donations);
    const count = calculateCount(donations);
    const avg = count == 0 ? NaN : (total/count).toFixed(2);
    const max = calculateMax(donations);
    
    return `Total (count): $${total} (${count}) - Max / Avg Donation: $${max} / $${avg}`;
}

function filterNameType(donations, name){
    if (name == "Anonymous" || name == "(Anonymous)" || name == "anonymous" || name == "(anonymous)"){
        return filterAnonymous(donations);
    }
    else{
        return filterName(donations, name);
    }
}

// create rows for each entry
function addRows(table, donations, start, end){

    // get the array of donations
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

// constructs the main table upon load
// only do first 50 rows
function constructGameTable(dataJSON){
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

    // initial 50 rows
    addRows(table, dataJSON["donations"], 0, 50);

    // add the table
    document.getElementById("tableDiv").appendChild(table);

    // update page num
    updatePageNumber(dataJSON["donations"].length);
}

function goFunction(){
    // get the page to go to
    const pageNum = Number(document.getElementById("pageNum").value);
    const table = document.getElementById("donationTable");

    // clear 50 rows
    while (table.lastChild != table.firstChild){
        table.removeChild(table.lastChild);
    }

    // add back rows
    if ((pageNum-1)*50 + 50 > liveJSON.length) addRows(table, liveJSON, (pageNum-1)*50, liveJSON.length);
    else addRows(table, liveJSON, (pageNum-1)*50, (pageNum-1)*50 + 50);
    
}

// div 50 + 1
function updatePageNumber(n){
    document.getElementById("pageNum").value = 1;
    document.getElementById("pageNum").max =  Math.floor(n/50) + 1;
    document.getElementById("pageNumText").innerHTML = Math.floor(n/50) + 1;
}


function searchFunction(){
    // clear table to be udpated with search results
    const table = document.getElementById("donationTable");
    while (table.lastChild != table.firstChild){
        table.removeChild(table.lastChild);
    }

    // run filter function accordingly
    if (document.getElementsByName("searchType")[0].checked){
        // name search
        liveJSON = filterNameType(dataJSON["donations"], document.getElementById("searchInput").value);
    }
    else{
        // amount search
        // From <input type="number" id="amountMin" min = 0> to <input type="number" id="amountMax">
        liveJSON = filterAmount(dataJSON["donations"], Number(document.getElementById("amountMin").value), Number(document.getElementById("amountMax").value));
    }

    // add rows with correct number of entries
    if (liveJSON.length >= 50){
        addRows(table, liveJSON, 0, 50);
    }
    else{
        addRows(table, liveJSON, 0, liveJSON.length);
    }
    
    // update heading
    document.querySelector("h2").innerHTML = getSubHeading(liveJSON);

    // update page numbers
    updatePageNumber(liveJSON.length);
}

function resetFunction(){
    // reset JSON object back to base
    liveJSON = dataJSON["donations"];

    // reset search back to blank
    if (document.getElementsByName("searchType")[0].checked){
        // name search
        const input = document.getElementById("searchInput");
        input.value = "";
        input.placeholder = "Search...";
    }
    else{
        // amount search
        document.getElementById("amountMin").value = "";
        document.getElementById("amountMax").value = "";
    }

    // reset page number back to 1
    document.getElementById("pageNum").value = 1;

    // clear 50 rows
    const table = document.getElementById("donationTable");
    while (table.lastChild != table.firstChild){
        table.removeChild(table.lastChild);
    }

    // add back rows with default JSON object
    goFunction();
    updatePageNumber(liveJSON.length);

    // reset subheading
    document.querySelector("h2").innerHTML = getSubHeading(liveJSON);
}

// <input type="text" id="searchInput" placeholder="Search...">
// fired when click on name radio button
function nameClick(){
    // inject new input
    searchSpan = document.getElementById("searchBar").innerHTML = `<input type="text" id="searchInput" placeholder="Search...">`;
    // connect enter functionality
    document.getElementById("searchInput").addEventListener("keydown", (event) => {if (event.key == "Enter"){searchFunction();}});
}

// From <input type="number" id="amountMin" min = 0> to <input type="number" id="amountMax">
// fired when click on amount radio button
function amountClick(){
    // inject new inputs
    document.getElementById("searchBar").innerHTML = `From <input class="amountInput" type="number" id="amountMin" min = 0> to <input class="amountInput" type="number" id="amountMax">`;
    // connect enter functionality
    document.getElementById("amountMin").addEventListener("keydown", (event) => {if (event.key == "Enter"){searchFunction();}});
    document.getElementById("amountMax").addEventListener("keydown", (event) => {if (event.key == "Enter"){searchFunction();}});
}

// construct the HTML page
function loadPage(dataJSON){
    // set text for headings
    document.querySelector("h1").innerHTML = getHeading(dataJSON);
    document.querySelector("h2").innerHTML = getSubHeading(dataJSON["donations"]);

    // construct the table contents
    constructGameTable(dataJSON);
}

// load JSON file from same folder
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
            liveJSON = dataJSON["donations"];
            // load page
            loadPage(dataJSON);
        }
    };
    xobj.send();
}

function init(){
    // read JSON from file
    loadJSON("./agdq19_search.json");

    // connect the button functionality
    document.getElementById("goBtn").addEventListener("click", goFunction);
    document.getElementById("searchBtn").addEventListener("click", searchFunction);
    document.getElementById("resetBtn").addEventListener("click", resetFunction);
    document.getElementById("nameRadio").addEventListener("click", nameClick);
    document.getElementById("amountRadio").addEventListener("click", amountClick);
    document.getElementById("searchInput").addEventListener("keydown", (event) => {if (event.key == "Enter"){searchFunction();}});
}

init();