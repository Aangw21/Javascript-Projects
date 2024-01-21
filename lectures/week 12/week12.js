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
        const dataJson = await response.json();
        console.log(dataJson);
        const imgURL = dataJson[0]["url"];
        // const imgURL = dataJson[0].url;
        document.querySelector("img").src = imgURL;

    }
}

fetchCat();

// https://cdn2.thecatapi.com/images/MTgyMjQyNQ.jpg"
// placeholder.com
// via.placeholder.com/300x300/888888/FFFFFF/?text= insert cute animal here