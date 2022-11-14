let preparedURL = "";

async function fetchCat (){
    const url = "https://api.thecatapi.com/v1/images/search";

    // fetch from API
    let response = await fetch(url);
    console.log(response);

    let counter = 0;

    // Check if our fetch was successful
    while (response.ok == false){
        // try again after 5 seconds
        setTimeout( async () => {
            const response = await fetch(url);
        }, 5000);

        counter++;
            if (counter == 10){
            console.log("error after 50 secs")
            return;
        
            }
        console.log("Error");
     }
    else {
        const dataJson = await response.json();
        console.log(dataJson);
        const imgURL = dataJson[0]["url"];

        preparedURL = catURL;

        // const imgURL = dataJson[0].url;
        document.querySelector("img").src = imgURL;

    }
}

function grabcatButton(){
    const grabCat = document.getElementById("catbtn").addEventListener("click", ()=> {
        console.log("success");
        fetchCat()
    });

}

fetchCat();
document.getElementById("newButton").addEventListener("click", ()=> {
    document.getElementById("img").src = preparedURL;
    preparedCat()
})
grabcatButton();