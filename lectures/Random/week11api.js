const URL = "https :// api.openweathermap.org/data /2.5/ weather?zip =47408& units=imperial&appid=bbaf86cac3c0e62ef035b4a051fdf664";

const endpoint = "https :// api.openweathermap.org/";
const path = "data /2.5/ weather/";
const parameter = "?zip =47408";
const key = "&appid=bbaf86cac3c0e62ef035b4a051fdf664";


async function getWeather(zipcode , units){
    // get weather using API
    const endpoint = "https :// api.openweathermap.org/";
    const path = "data /2.5/ weather/";
    const parameter = ‘?zip=${zipcode }& units=${units}‘;
    const key = "&appid=bbaf86cac3c0e62ef035b4a051fdf664";
    const URL = endpoint + path + parameter + key;

    const response = await fetch(URL);

    if (response.ok == false){
        console.log("Error: API fetch failed.");
        }
        else {
        // good fetch , continue to parse
        }

}


getWeather("47408", "imperial");
    

