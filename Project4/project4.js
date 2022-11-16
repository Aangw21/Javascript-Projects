// Global Variable
// 1 we need a global variable to keep track of where you were (state)(most recently)  (the number we have)
let startNum = 0;

async function fetchCat (){
    const url = "https://api.thecatapi.com/v1/images/search";

    // fetch from API
    const response = await fetch(url);
    console.log(response);

    // Check if our fetch was successful
    if (response.ok == false){
        console.log("Error");

    }
    else {
        // converts the url into a json
        const dataJson = await response.json();
        console.log(dataJson);
        // select a specific
        // dataJSON is a list of dictionaries
        const imgURL = dataJson[0]["url"];
        // 0:{id: 'Td7lHz0N0', url: 'https://cdn2.thecatapi.com/images/Td7lHz0N0.jpg
        // const imgURL = dataJson[0].url;
        document.querySelector("img").src = imgURL;
        // selects the img file in the html and makes its equal to the dataJSON

    }
}

async function fetchDog (){
    const url = "https://dog.ceo/api/breeds/image/random";

    // fetch from API
    const response = await fetch(url);
    console.log(response);

    // Check if our fetch was successful
    if (response.ok == false){
        console.log("Error");

    }
    else {
        // converts the url into a json
        const dataJson = await response.json();
        console.log(dataJson);
        // select a specific
        // dataJSON is a list of dictionaries
        const imgURL = dataJson["message"];
        console.log(imgURL);
        // 0:{id: 'Td7lHz0N0', url: 'https://cdn2.thecatapi.com/images/Td7lHz0N0.jpg
        // const imgURL = dataJson[0].url;
        document.querySelector("img").src = imgURL;
        // selects the img file in the html and makes its equal to the dataJSON

    }
}


async function fetchFact (){
    const url = "https://catfact.ninja/fact";

    // fetch from API
    const response = await fetch(url);
    console.log(response);

    // Check if our fetch was successful
    if (response.ok == false){
        console.log("Error");

    }
    else {
        // converts the url into a json
        const dataJson = await response.json();
        console.log(dataJson);
        // select a specific
        // dataJSON is a list of dictionaries
        const factURL = dataJson["fact"];
        // 0:{id: 'Td7lHz0N0', url: 'https://cdn2.thecatapi.com/images/Td7lHz0N0.jpg
        // const imgURL = dataJson[0].url;
        // let para = document.createElement("p").
        document.getElementById("body").innerHTML= String(factURL);
        // document.getElementById("body").appendChild(para)
        console.log(factURL)
        // selects the img file in the html and makes its equal to the dataJSON

    }
}



// link to form(dog) or (cat)

// get dog fact

// grab the .value
function grabText(event){
    const body = document.getElementById('count');
    console.log(body.value);
    let bodyValue = body.value;

    // keyup keydown
    // gets the textarea and grabs the value in it
    const getText = document.getElementById("write").value;
    console.log(getText)
    // split takes a string and split it into multiple letters and how to split it, in this case its space
    const words = getText.split(' ');
    // filter function
    // no space is
    const noSpace = words.filter( (word) => {
        return word != "";
    });

    // console.log(noSpace);
    // grabs the counter text
    const grabCount = document.getElementById("currcount");
    // changes the count as you type
    const finalCounter = grabCount.innerHTML = "Current word count:" + String(noSpace.length);

    // no space is an array of thr words inputted, noSpace.length is the count of each word 
    console.log("I am at: " + String(Math.floor(noSpace.length/bodyValue)));

    let state = Math.floor(noSpace.length/bodyValue);

    if (event.key == "Backspace"){
        console.log("Backspace detected");
        startNum += 0
    }

    if (state != startNum) {

        // fetch cat if and only if it is not a backspace event

        if (event.key != "Backspace") {

        // if a backspace is not detected
        //  do fectcat and fact


            const petBody = document.getElementById('pets');
            console.log(petBody.value);
            let petbodyVal = petBody.value;
            if (petbodyVal == "dog") {
                fetchDog(); fetchFact();
            }
            else {
                fetchCat(); fetchFact();
            }
            
            



        // console.log(startNum);
        }
    }
    startNum = state;


    // 2 compare with the state numner now if we were at 0, but the num we calculated is one we need to change (the number you have)

}


const selectElement = document.querySelector(".count");

selectElement.addEventListener('change', (event) =>  {
    const body = document.getElementById('count');
    console.log(body.value);
    let bodyValue = body.value;
    const grabP = document.getElementById('body');
    console.log(grabP.innerHTML = `Every ${bodyValue} words written will generate a new cute animal picture.`);
    
}
)
// .addEventListener("change", (event) => {n = event.target.value;document.querySelector("h2").innerHTML = `Every ${n} words written will generate a new cute animal picture.`});

function init() {
    document.getElementById("write").addEventListener("keyup", grabText)
    // not calling the function but instead referencing it 
    
}

init();
// fetchDog();

// https://cdn2.thecatapi.com/images/MTgyMjQyNQ.jpg"

// grab the button and get an event listener for keyup



// 