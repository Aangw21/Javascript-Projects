// CACHING preparing an image before the user clicks the button



async function prepareCat(){
    // API URL is always the same. No parameters
    const URL = "https://api.thecatapi.com/v1/images/search";

    // fetch the API response
    const response = await fetch(URL);

    // check if fetch was successful
    if (response.ok == false){
        // standard fail action: just send an error message
        console.log("Error: fetch failed");
    }
    else{
        // parse response into JSON object
        const dataJSON = await response.json();

        // parse JSON object for the image URL
        const catURL = dataJSON[0]["url"];
        
        // instead of loading the image immediately
        // let's store the URL
        preparedURL = catURL;
    }
}

async function fetchCat(){
    // API URL is always the same. No parameters
    const URL = "https://api.thecatapi.com/v1/images/search";

    // fetch the API response
    let response = await fetch(URL);

    let counter = 1;

    // check if fetch was successful
    // this is now a while statement because we're going to make repeated fetches in case of a fail
    // repeat as long as the response.ok is false
    while (response.ok == false){
        // redundancy check: make another fetch requeset again after 5 seconds
        // repeat this 10 times before giving up

        // wait 5 seconds, then fetch again
        setTimeout(async () => {
            // fetch the API response
            response = await fetch(URL);
        }, 5000);

        counter++;
        if (counter == 10){
            // failed all 5 times, in this case send an error message and give up
            console.log("Error: fetch failed after 50 seconds of trying");
            return;
        }
    }

    // parse response into JSON object
    const dataJSON = await response.json();

    // parse JSON object for the image URL
    const catURL = dataJSON[0]["url"];
    
    // we have the url to the cat picture
    // set it as the "src" attribute for <img>
    document.getElementById("img").src = catURL;
}

// global variable for caching
// this URL is our fetched prepared data for when we need to use it.
let preparedURL = "";

// called upon page load;
// get a cat picture upon load
fetchCat();

// when the new button is clicked, do 2 things:
//      1) use our cached/prepared URL for the new image (fast)
//      2) run our prepareCat() function to prepare a new URL to cache
document.getElementById("newButton").addEventListener("click", () => {
    document.getElementById("img").src = preparedURL;
    prepareCat();
});

