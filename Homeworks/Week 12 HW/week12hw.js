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

// function grabcatButton(){
//     const grabCat = document.getElementById("catbtn").addEventListener("click", ()=> {
//         console.log("success");
//         fetchCat()
//     });

// }

async function fetchDog(){

   // fetch from API
    const URL = "https://dog.ceo/api/breeds/image/random";

   // Check if our fetch was successful
    const response = await fetch(URL);

   
  
    if(response.ok == false){
        console.log("Error: API fetch failed");
    }
    else{

        const dataJSON = await response.json();
        console.log(dataJSON);
        const dogImg = dataJSON["message"];
        console.log(dogImg);
        document.querySelector("img").src = dogImg;
    }


}


async function fetchFox(){

     // fetch from API
    const URL = "https://randomfox.ca/floof/";
    const response = await fetch(URL);
  // Check if our fetch was successful
    if(response.ok == false){
        console.log("Error: API fetch failed");
    }
    else{

        const dataJSON = await response.json();
        console.log(dataJSON);
        const foxImg = dataJSON["image"];
        console.log(foxImg);
        document.querySelector("img").src = foxImg;
    }


}


async function getRandomImg(){

    const petButtons = document.getElementsByClassName("pet");

    min = Math.ceil(0); 
    max = Math.floor(2);


    const randNum = (Math.floor(Math.random() * (max - min + 1) + min)); 



    if(petButtons[randNum].innerHTML == "Dog"){
        fetchDog();
    }
    else if(petButtons[randNum].innerHTML == "Cat"){
        fetchCat();
    }
    else if(petButtons[randNum].innerHTML == "Fox"){
        fetchFox();
    }
    else{
        console.log("Error has occurred!");
    }

}

document.getElementById("dogbtn").addEventListener("click", () => {
    fetchDog();
})

document.getElementById("foxbtn").addEventListener("click", () => {
    fetchFox();
})

document.getElementById("catbtn").addEventListener("click", () => {
    fetchCat();
})
document.getElementById("surprisebtn").addEventListener("click", () => {
     getRandomImg();

})


