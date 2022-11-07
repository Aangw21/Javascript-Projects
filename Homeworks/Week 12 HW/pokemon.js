async function setImg(pokemon, img){

    
    const endpoint = "https://pokeapi.co/api/v2/pokemon/";
    const URL = endpoint + pokemon;
   
    

    // Storing the value of the fetched URL into a variable called response
    const response = await fetch(URL);


    if(response.ok == false){
        console.log("Error: API fetch failed.");
    }
    else{
        // Test purpose to verify that there was no error when trying to connect to the Pokemon API
        console.log("Successful Connection");

        
        const dataJson = await response.json();


        // Concatenating the id of the specific pokemon with .png extension to retrieve the image of the front view of pokemon
        const pokeID = dataJson["id"] + ".png";

        // Displaying the value of pokemonID which should be a concatenated string of specific Pokemon id and img extension
        // console.log(pokemonID);

        // This will set the href/link for each <img>
        img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeID; 
       
    }

}

// no return value
// "pokemon" is a string of a specified pokemon name
// "stats" is an array of size 6, each containing a <td> element
//
// fetches the specified "pokemon" from the API
// parse the JSON object for the pokemon's stat numbers
//  - look for the appropriate stat number
//  - set the corresponding <td>.innerHTML to the fetched stat value
async function fillStatTable(pokemon, statsTD){

    // Defining the endpoint for the Pokemnon API
    const endpoint = "https://pokeapi.co/api/v2/pokemon/";
    const URL = endpoint + pokemon

    // Sending a fetch request and storing the returned value into variable called response
    const response = await fetch(URL);

    // Conditional statement to determine if connection to the API was successful or not
    if(response.ok == false){
        console.log("Error: API fetch failed");
    }
    else{


        const dataJson = await response.json();

        const pokeStats = dataJson["stats"];


      
        for(let i = 0; i < 6; i++){
            statsTD[i].innerHTML = pokeStats[i]["base_stat"];
        }
    }

}

// no return value
// "pokemon1" is a string of a specifed pokemon name
// "pokemon2" is a string of a specifed pokemon name
// 
// fetches both specified "pokemon" from the API
// parse the JSON object for the pokemon's ID number
// the ID number is under the "game_indices" key value
// 	- if there are multiple ID numbers associated with the pokemon, use the id number of the "gold" version
// 
// After getting the 2 pokemon id numbers, call fetchFusionImg() passing in the 2 id numbers as arguments:
async function fuse(pokemon1, pokemon2){
	let id1 = 25; // example id
	let id2 = 25; // example id
	fetchFusionImg(id1, id2);
}

// ---------------- LIBRARY --------------------
// Do not make any edits in this section
// You may reference and use functions in this section
// ---------------- LIBRARY --------------------

function fetchFusionImg(id1, id2){
	document.getElementById("fuse-img").src = `https://images.alexonsager.net/pokemon/fused/${id1}/${id1}.${id2}.png`;
}

async function optionClick(event){
	document.getElementById("result-id").innerHTML = "";
	document.getElementById("fuse-img").src = "";

	const pokemon = event.target.value;
	const img = document.getElementById(event.target.className + "-img");
	const statTDs = ["HP", "Attack", "Defense", "Sp.Attack", "Sp.Defense", "Speed"].map((stat) => {
		return document.getElementById(event.target.className + "-" + stat);
	});
	if (pokemon == "none"){
		img.src = "https://via.placeholder.com/96/FFFFFF/FFFFFF"
		statTDs.forEach((td) => {
			td.innerHTML = "-";
		});
	}
	else{
		setImg(pokemon, img);
		fillStatTable(pokemon, statTDs);
	}
}

const pokedex = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch’d","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];
function initSelect(){
	const selects = [document.getElementById("pokemon1-select"), document.getElementById("pokemon2-select")];
	
	// select setup
	selects.forEach( (select) => {
		const option = document.createElement("option");
		option.value = "none";
		option.innerHTML = "Select a Pokemon";
		select.appendChild(option);

		select.addEventListener("change", optionClick);
		document.getElementById(select.className + "-img").src = "https://via.placeholder.com/96/FFFFFF/FFFFFF";

		const table = document.getElementById(select.className + "-stats");
		const stats = ["HP", "Attack", "Defense", "Sp.Attack", "Sp.Defense", "Speed"];
		stats.forEach((stat) => {
			const newRow = document.createElement("tr");
			newRow.appendChild(document.createElement("th"));
			newRow.appendChild(document.createElement("td"));
			newRow.firstChild.innerHTML = stat;
			newRow.lastChild.innerHTML = "-";
			newRow.lastChild.id = select.className + "-" + stat;
			table.appendChild(newRow);
		});
	});

	// select values
	selects.forEach( (select) => {
		pokedex.forEach( (pokemon) => {
			const option = document.createElement("option");
			if (select == "Nidoran♀") option.value = "nidoran-f"
			else if (select == "Nidoran♂") option.value = "nidoran-m"
			else option.value = pokemon.toLowerCase();
			option.innerHTML = pokemon;
			select.appendChild(option);
		});
	});
}

function battleClick(){
	const select1 = document.getElementById("pokemon1-select");
	const select2 = document.getElementById("pokemon2-select");
	if (select1.value == "none" || select2.value == "none"){
		document.getElementById("result-id").innerHTML = "Must select 2 Pokemon";
		setTimeout(() => {
			document.getElementById("result-id").innerHTML = "";
		}, 1000);
	}
	else{
		const hp1 = Number(document.getElementById("pokemon1-HP").innerHTML);
		const hp2 = Number(document.getElementById("pokemon2-HP").innerHTML);
		const atk1 = Number(document.getElementById("pokemon1-Attack").innerHTML);
		const atk2 = Number(document.getElementById("pokemon2-Attack").innerHTML);

		if (atk1 >= hp2 && atk2 < hp1) document.getElementById("result-id").innerHTML = pokedex[select1.selectedIndex-1] + " beats " + pokedex[select2.selectedIndex-1] + "!";
		else if (atk2 >= hp1 && atk1 < hp2) document.getElementById("result-id").innerHTML = pokedex[select2.selectedIndex-1] + " beats " + pokedex[select1.selectedIndex-1] + "!";
		else document.getElementById("result-id").innerHTML = "Tie!";
	}
}

function raceClick(){
	const select1 = document.getElementById("pokemon1-select");
	const select2 = document.getElementById("pokemon2-select");
	if (select1.value == "none" || select2.value == "none"){
		document.getElementById("result-id").innerHTML = "Must select 2 Pokemon";
		setTimeout(() => {
			document.getElementById("result-id").innerHTML = "";
		}, 1000);
	}
	else{
		const speed1 = Number(document.getElementById("pokemon1-Speed").innerHTML);
		const speed2 = Number(document.getElementById("pokemon2-Speed").innerHTML);

		if (speed1 > speed2) document.getElementById("result-id").innerHTML = pokedex[select1.selectedIndex-1] + " is faster than " + pokedex[select2.selectedIndex-1] + "!";
		else if (speed2 > speed1) document.getElementById("result-id").innerHTML = pokedex[select2.selectedIndex-1] + " is faster than " + pokedex[select1.selectedIndex-1] + "!";
		else document.getElementById("result-id").innerHTML = pokedex[select1.selectedIndex-1] + " and " + pokedex[select2.selectedIndex-1] + "are the same speed.";
	}
}

function fuseClick(){
	const select1 = document.getElementById("pokemon1-select");
	const select2 = document.getElementById("pokemon2-select");
	if (select1.value == "none" || select2.value == "none"){
		document.getElementById("result-id").innerHTML = "Must select 2 Pokemon";
		setTimeout(() => {
			document.getElementById("result-id").innerHTML = "";
		}, 1000);
	}
	else{
		fuse(select1.value, select2.value);
	}
}

function init(){
	initSelect();
	document.getElementById("battle-btn").addEventListener("click", battleClick);
	document.getElementById("race-btn").addEventListener("click", raceClick);
	document.getElementById("fuse-btn").addEventListener("click", fuseClick);
}

init()