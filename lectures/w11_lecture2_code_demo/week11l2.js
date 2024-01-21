// callback is a function
// callback() takes in an argument: the weather
async function getWeather(zipcode, callback){
    // individual components of an API url
    const endpoint = "https://api.openweathermap.org/";
    const path = "data/2.5/weather/";
    const parameters = `?zip=${String(zipcode)}&units=imperial`;
    const key = "&appid=bbaf86cac3c0e62ef035b4a051fdf664"; // some APIs don't need a key, this one does.

    // construct the full API fetch url
    const URL = endpoint + path + parameters + key;

    // fetch the API url
    const response = await fetch(URL);
    // console.log(response);

    // check if the fetch was successful
    if (response["ok"] == false){
        console.log("Error: something went wrong with the fetch");
    }
    else{
        // fetch was successful!
        // get the JSON data out of the response
        const dataJSON = await response.json();

        // Problem 1
        // Cannot use return values because of asynchronous functions
        // The return happens too late since we need to wait for the API fetch
        // return dataJSON["main"]["temp"];

        // Problem 2
        // This will work, but it pigeonholes our getWeather() function to 1 single use
        // This will require us to duplicate getWeather() if we need the weather API fetch for other purposes (e.g. other buttons)
        // document.getElementById("result").innerHTML = "The weather is " + dataJSON["main"]["temp"] + " right now";

        // Solution
        // Use a callback function
        // the callback function implementation is provided upon the getWeather() function call
        // see the anonymous functions below
        // this allows us to use this one getWeather() API function for multiple purposes
        callback(dataJSON["main"]["temp"]);
    }

}

// setup weather button
document.getElementById("weatherBtn").addEventListener("click", () => {
    // get the zipcode input
    const zipcode = document.getElementById("zipcodeInput").value;

    // call the getWeather() function with the inputted zip code
    getWeather(zipcode, (temperature) => {
        // anonymous function implementation for the callback function for getWeather to use
        document.getElementById("result").innerHTML = "The weather is " + temperature + " right now";
    });
});

// setup recommendation button
document.getElementById("recBtn").addEventListener("click", () => {
    // get the zipcode input
    const zipcode = document.getElementById("zipcodeInput").value;

    // call the getWeather() function with the inputted zip code
    getWeather(zipcode, (temperature) => {
        // anonymous function implementation for the callback function for getWeather to use
        if (temperature < 50){
            document.getElementById("result").innerHTML = "Bring a sweater";
        }
        else{
            document.getElementById("result").innerHTML = "Enjoy the weather";
        }
    });
});


