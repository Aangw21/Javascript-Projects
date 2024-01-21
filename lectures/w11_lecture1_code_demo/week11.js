async function getWeather(){
    // individual components of an API url
    const endpoint = "https://api.openweathermap.org/";
    const path = "data/2.5/weather/";
    const parameters = "?zip=47408&units=imperial";
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

        // parse the JSON for the information you need
        console.log(dataJSON);
        console.log("City: " + dataJSON["name"]);
        console.log("Temperature: " + dataJSON["main"]["temp"]);
        console.log("Humidity: " + dataJSON["main"]["humidity"]);
    }

}

getWeather();