// TO DO:
// There are 2 sets of functionalities:
// Set 1: Headings
//      - complete these functions to set the heading text
//      - heading text format can be found in project description
//      - complete getHeading() and getSubHeading()
//
// Set 2: Table
//      - complete these functions to set the table text
//      - complete getRuns(). This MUST be done first. This will pass the data to the other functions:
//      - complete getName(), getPlayers(), getDescription(), getStart(), getEnd(), and getBit()

// dataJSON is an object
// use dataJSON to construct the webpage's <h1>
// returns the string to be used for the heading
function getHeading(dataJSON){
    const getHead = dataJSON["name"];
    const getYear = dataJSON["year"];
    const yearandhead = "Donation Index - " + getHead + " " + String(getYear);
    return yearandhead;
}

// dataJSON is an object
// use dataJSON to construct the webpage's <h2>
// returns the string to be used for the subheading
function getSubHeading(dataJSON){
    // check if i got right data
    console.log(dataJSON);
    const totalCount = dataJSON["donationCount"];
    const donationTotal = dataJSON["donationTotal"];
    const donationMax = dataJSON["donationMax"];
    const donationAvg = dataJSON["donationAvg"];
    const donationMed = dataJSON["donationMed"];
    const subHead = "Total(Count): $" + donationTotal + "0 (" + String(totalCount) + ") " + "- MAX / AVG / MEDIAN DONATION: $" + String(donationMax) + " / " + "$" + String(donationAvg) + " / " + "$" + donationMed + ".00";
    return subHead;
}

// dataJSON is an object
// returns the full array of runs in this object
// this MUST be completed before for the other functions below to work
function getRuns(dataJSON){
    // const runs = console.log(dataJSON);
    return dataJSON["runs"];
}

// game is an object
// returns the name of the game as a string
function getName(game){
    console.log(game);
    const nameGame = game["name"]
    return nameGame;
}
// 
// game is an object
// returns the list of players as a string
// if a single player, then "<p1>". e.g. "Stephen"
// if multiple players, then "<p1>, <p2>, ..., <pn>". e.g. "Stephen, Krithika"
function getPlayers(game){
// you want to run through the array players
// and then print them out 
    const playerArray = game["players"]
    let playerStrings = ""
    for(let i = 0; i < playerArray.length; ++i)
        playerStrings = playerStrings + playerArray[i] + ", " 
        // conc through a loop
        // i cause it to go from [a,b,c] to a b c
        return playerStrings;

    }

// game is an object
// returns the description of the game as a string
function getDescription(game){
    const descripArray = game["description"]
    return descripArray;
}

// game is an object
// returns the start time as a string
function getStart(game){
    const startArray = game["startTime"]
    return startArray;
}

// game is an object
// returns the end time as a string
function getEnd(game){
    const endArray = game["endTime"]
    return endArray;
}

// game is an object
// return true if there is a bid war
// return false if there is not a bid war
function getBid(game){
    const bidArray = game["bidWars"]
    if (bidArray) {
        return "Yes"
    }
    else{
        return "No"
    }
}

// ---------------- STOP --------------------
// Do not make any edits in this section
// None of the functions will be useful to you
// You may take a look to see how things are setup
// ---------------- STOP --------------------

// Consts
let dataRaw = "";
const COLS = 6;
const headingNames = ["Name", "Players", "Description", "Start Time", "End Time", "Bid Wars"];
const getFunctions = [getName, getPlayers, getDescription, getStart, getEnd, getBid];

// constructs the main table
function constructGameTable(dataJSON){
    // make the table
    const tab = document.createElement("table");

    // make heading row
    const topRow = document.createElement("tr");

    // make headings
    for (let i = 0; i < COLS; ++i){
        const newH = document.createElement("th");
        newH.innerHTML = headingNames[i];
        topRow.appendChild(newH);
    }
    tab.appendChild(topRow);

    // make each game row
    const runs = getRuns(dataJSON);

    // loop through each game
    for (let i = 0; i < runs.length; ++i){

        // make the row of data
        const newRow = document.createElement("tr");
        if (i % 2 == 0) newRow.className = "evenRow";

        // popluate each data
        for (let j = 0; j < COLS; ++j){
            const newD = document.createElement("td");
            if (j == 0) newD.className = "gameName";

            newD.innerHTML = getFunctions[j](runs[i]);
            newRow.appendChild(newD);
        }

        // add to the table
        tab.appendChild(newRow);
    }

    // add the table
    document.getElementById("gameTable").appendChild(tab);
}


// construct the HTML page
function construct(dataJSON){
    // set text for headings
    document.querySelector("h1").innerHTML = getHeading(dataJSON);
    document.querySelector("h2").innerHTML = getSubHeading(dataJSON);

    // construct the table contents
    constructGameTable(dataJSON);
}

function init(){
    // construct HTML with the object
    construct(dataJSON);

}



// data object
dataJSON = {"name":"Awesome Games Done Quick","year":2019,"donationTotal":2425790.5,"donationCount":46457,"donationMax":217226.12,"donationAvg":52.22,"donationMed":20,"runs":[{"name":"Preshow The Best","players":["feasel","Keizaron","Blechy","JHobz","spikevegeta2","Kungfufruitcup"],"description":"","startTime":"January 6th, 2019, 11:30:00 AM","endTime":"January 6th, 2019, 12:00:00 PM","bidWars":false},{"name":"Hollow Knight True Ending No Major Glitches","players":["Vysuals"],"description":"","startTime":"January 6th, 2019, 12:00:00 PM","endTime":"January 6th, 2019, 1:46:00 PM","bidWars":true},{"name":"Kirby & The Amazing Mirror any%","players":["swordsmankirby"],"description":"","startTime":"January 6th, 2019, 1:46:00 PM","endTime":"January 6th, 2019, 2:38:00 PM","bidWars":false},{"name":"Donkey Kong Country Any% All Stages","players":["V0oid","stew_"],"description":"","startTime":"January 6th, 2019, 2:38:00 PM","endTime":"January 6th, 2019, 3:46:00 PM","bidWars":false},{"name":"Mario Kart DS 32 Tracks","players":["Keverage"],"description":"","startTime":"January 6th, 2019, 3:46:00 PM","endTime":"January 6th, 2019, 4:59:00 PM","bidWars":false},{"name":"Serious Sam Classic: The First Encounter Any% Co-op","players":["mr.deagle","The Master"],"description":"","startTime":"January 6th, 2019, 4:59:00 PM","endTime":"January 6th, 2019, 5:44:00 PM","bidWars":true},{"name":"Mega Man Zero 2 Hard mode any%","players":["Krankdud"],"description":"","startTime":"January 6th, 2019, 5:44:00 PM","endTime":"January 6th, 2019, 7:08:30 PM","bidWars":false},{"name":"The Legend of Zelda: Majora's Mask Any%","players":["popesquidward"],"description":"","startTime":"January 6th, 2019, 7:08:30 PM","endTime":"January 6th, 2019, 8:59:30 PM","bidWars":true},{"name":"Portal Inbounds race","players":["alex_sr","ConnorAce"],"description":"","startTime":"January 6th, 2019, 8:59:30 PM","endTime":"January 6th, 2019, 9:30:00 PM","bidWars":false},{"name":"Metal Gear Solid 2: Sons of Liberty European Extreme","players":["Tyler2022"],"description":"","startTime":"January 6th, 2019, 9:30:00 PM","endTime":"January 6th, 2019, 11:13:00 PM","bidWars":false},{"name":"Shadow of the Colossus (2018) Boss Rush (NTA)","players":["ChurchNEOH"],"description":"","startTime":"January 6th, 2019, 11:13:00 PM","endTime":"January 7th, 2019, 12:02:00 AM","bidWars":false},{"name":"God of War II Any% NG+","players":["RagnellGoW"],"description":"","startTime":"January 7th, 2019, 12:02:00 AM","endTime":"January 7th, 2019, 1:41:00 AM","bidWars":true},{"name":"Bomberman 64 any%","players":["Puncayshun"],"description":"","startTime":"January 7th, 2019, 1:41:00 AM","endTime":"January 7th, 2019, 2:34:00 AM","bidWars":false},{"name":"Fe All Songs","players":["CorundumCore"],"description":"","startTime":"January 7th, 2019, 2:34:00 AM","endTime":"January 7th, 2019, 3:34:00 AM","bidWars":false},{"name":"Spike Hike 100%","players":["SecksWrecks"],"description":"","startTime":"January 7th, 2019, 3:34:00 AM","endTime":"January 7th, 2019, 3:49:00 AM","bidWars":false},{"name":"Cat Bird Any% all worlds","players":["MrUppercaseT"],"description":"","startTime":"January 7th, 2019, 3:49:00 AM","endTime":"January 7th, 2019, 4:25:00 AM","bidWars":true},{"name":"CometStriker Arcade - Hard","players":["MrCab"],"description":"","startTime":"January 7th, 2019, 4:25:00 AM","endTime":"January 7th, 2019, 5:07:00 AM","bidWars":true},{"name":"Khimera: Destroy All Monster Girls Race Mode","players":["snapcase"],"description":"","startTime":"January 7th, 2019, 5:07:00 AM","endTime":"January 7th, 2019, 5:42:00 AM","bidWars":true},{"name":"Another World: 20th Anniversary Edition Any% Glitchless","players":["Brandooates"],"description":"","startTime":"January 7th, 2019, 5:42:00 AM","endTime":"January 7th, 2019, 6:03:00 AM","bidWars":false},{"name":"Monster World IV any% w/ Magic Merchant","players":["Cyclone"],"description":"","startTime":"January 7th, 2019, 6:03:00 AM","endTime":"January 7th, 2019, 7:29:00 AM","bidWars":false},{"name":"Mega Turrican Any% Normal","players":["d4gr0n"],"description":"","startTime":"January 7th, 2019, 7:29:00 AM","endTime":"January 7th, 2019, 8:00:00 AM","bidWars":false},{"name":"Ecco: The Tides of Time Any%","players":["chronoon"],"description":"","startTime":"January 7th, 2019, 8:00:00 AM","endTime":"January 7th, 2019, 8:49:00 AM","bidWars":false},{"name":"Vectorman Any%","players":["chronoon"],"description":"","startTime":"January 7th, 2019, 8:49:00 AM","endTime":"January 7th, 2019, 9:13:00 AM","bidWars":false},{"name":"Generations Lost Any%","players":["Nubzombie"],"description":"","startTime":"January 7th, 2019, 9:13:00 AM","endTime":"January 7th, 2019, 9:37:00 AM","bidWars":false},{"name":"Bloody Wolf Any%","players":["RottDawg"],"description":"","startTime":"January 7th, 2019, 9:37:00 AM","endTime":"January 7th, 2019, 10:06:00 AM","bidWars":true},{"name":"Earthworm Jim 2 any% Normal","players":["Gargon100"],"description":"","startTime":"January 7th, 2019, 10:06:00 AM","endTime":"January 7th, 2019, 10:53:00 AM","bidWars":false},{"name":"Pocky & Rocky Any% Normal","players":["d4gr0n"],"description":"","startTime":"January 7th, 2019, 10:53:00 AM","endTime":"January 7th, 2019, 11:24:00 AM","bidWars":false},{"name":"Super Ghouls 'N Ghosts any% (Normal)","players":["NME"],"description":"","startTime":"January 7th, 2019, 11:24:00 AM","endTime":"January 7th, 2019, 12:23:00 PM","bidWars":false},{"name":"ActRaiser 2 Hard difficulty","players":["PJ"],"description":"","startTime":"January 7th, 2019, 12:23:00 PM","endTime":"January 7th, 2019, 1:37:00 PM","bidWars":false},{"name":"Castlevania: Symphony of the Night Alucard","players":["Satoryu"],"description":"","startTime":"January 7th, 2019, 1:37:00 PM","endTime":"January 7th, 2019, 2:01:00 PM","bidWars":false},{"name":"Castlevania: Aria of Sorrow Glitchless Hard Mode","players":["VB__"],"description":"","startTime":"January 7th, 2019, 2:01:00 PM","endTime":"January 7th, 2019, 3:15:00 PM","bidWars":true},{"name":"Castlevania Chronicles any% arranged mode x68k sound on","players":["lurk"],"description":"","startTime":"January 7th, 2019, 3:15:00 PM","endTime":"January 7th, 2019, 4:00:00 PM","bidWars":false},{"name":"Castlevania II: Simon's Quest Any%","players":["jc583"],"description":"","startTime":"January 7th, 2019, 4:00:00 PM","endTime":"January 7th, 2019, 4:47:00 PM","bidWars":false},{"name":"Castlevania III: Dracula's Curse Any% (2nd quest)","players":["jc583"],"description":"","startTime":"January 7th, 2019, 4:47:00 PM","endTime":"January 7th, 2019, 5:37:00 PM","bidWars":true},{"name":"Bloodstained: Curse of the Moon any% Nightmare","players":["Laxxus"],"description":"","startTime":"January 7th, 2019, 5:37:00 PM","endTime":"January 7th, 2019, 6:20:00 PM","bidWars":true},{"name":"Donkey Kong Country: Tropical Freeze Any% No Death Abuse","players":["Kruncha","michael_goldfish","spikevegeta2"],"description":"","startTime":"January 7th, 2019, 6:20:00 PM","endTime":"January 7th, 2019, 8:08:00 PM","bidWars":false},{"name":"Jak 3 Any% No OoB","players":["ThaRixer"],"description":"","startTime":"January 7th, 2019, 8:08:00 PM","endTime":"January 7th, 2019, 9:18:00 PM","bidWars":true},{"name":"Crash Bandicoot: N. Sane Trilogy Crash 2 100%","players":["Blunts Moses"],"description":"","startTime":"January 7th, 2019, 9:18:00 PM","endTime":"January 7th, 2019, 11:21:00 PM","bidWars":false},{"name":"Splatoon 2: Octo Expansion Any%","players":["TonesBalones"],"description":"","startTime":"January 7th, 2019, 11:21:00 PM","endTime":"January 8th, 2019, 12:54:00 AM","bidWars":true},{"name":"Resident Evil Any%","players":["RawDerps"],"description":"","startTime":"January 8th, 2019, 12:54:00 AM","endTime":"January 8th, 2019, 1:57:31 AM","bidWars":true},{"name":"Silent Hill 2 New Game","players":["Punchy"],"description":"","startTime":"January 8th, 2019, 1:57:31 AM","endTime":"January 8th, 2019, 3:08:45 AM","bidWars":true},{"name":"Tomb Raider II Any% Glitches","players":["SmoothOperative"],"description":"","startTime":"January 8th, 2019, 3:08:45 AM","endTime":"January 8th, 2019, 4:35:20 AM","bidWars":true},{"name":"Tomb Raider : The Angel of Darkness Any%","players":["PlasticRainbow"],"description":"","startTime":"January 8th, 2019, 4:35:20 AM","endTime":"January 8th, 2019, 5:21:20 AM","bidWars":false},{"name":"NieR: Automata [E] Ending (Normal)","players":["Fullest"],"description":"","startTime":"January 8th, 2019, 5:21:20 AM","endTime":"January 8th, 2019, 9:59:00 AM","bidWars":true},{"name":"The Battle of Olympus any%","players":["Karma"],"description":"","startTime":"January 8th, 2019, 9:59:00 AM","endTime":"January 8th, 2019, 10:50:00 AM","bidWars":true},{"name":"Vice: Project Doom any%","players":["garadas21"],"description":"","startTime":"January 8th, 2019, 10:50:00 AM","endTime":"January 8th, 2019, 11:24:34 AM","bidWars":false},{"name":"Chip 'n Dale: Rescue Rangers 2 any% 1 player 2 controllers race","players":["swordsmankirby","garadas21"],"description":"","startTime":"January 8th, 2019, 11:24:34 AM","endTime":"January 8th, 2019, 11:47:34 AM","bidWars":false},{"name":"Yume Kojo: Doki Doki Panic! All Levels","players":["LackAttack24"],"description":"","startTime":"January 8th, 2019, 11:47:34 AM","endTime":"January 8th, 2019, 12:34:17 PM","bidWars":false},{"name":"Rayman 2: The Great Escape Any% No Cutscenes","players":["Glackum"],"description":"","startTime":"January 8th, 2019, 12:34:17 PM","endTime":"January 8th, 2019, 2:06:43 PM","bidWars":true},{"name":"Bastion All Story Levels (New Game)","players":["Primorix"],"description":"","startTime":"January 8th, 2019, 2:06:43 PM","endTime":"January 8th, 2019, 3:06:00 PM","bidWars":true},{"name":"Momodora: Reverie Under the Moonlight AVIB - Hard","players":["SNeaky"],"description":"","startTime":"January 8th, 2019, 3:06:00 PM","endTime":"January 8th, 2019, 4:03:00 PM","bidWars":true},{"name":"Sonic Forces Any%","players":["thebluemania"],"description":"","startTime":"January 8th, 2019, 4:03:00 PM","endTime":"January 8th, 2019, 5:29:00 PM","bidWars":true},{"name":"Sonic Mania Plus Encore Mode Any%","players":["Claris","Zaxon96","Joeybaby69"],"description":"","startTime":"January 8th, 2019, 5:29:00 PM","endTime":"January 8th, 2019, 6:27:00 PM","bidWars":true},{"name":"Sanic Ball Current Version - All Levels - 2 Laps","players":["Gyoo"],"description":"","startTime":"January 8th, 2019, 6:27:00 PM","endTime":"January 8th, 2019, 6:54:00 PM","bidWars":true},{"name":"Sonic The Hedgehog 1 Any% Glitched","players":["Dr.Fatbody"],"description":"","startTime":"January 8th, 2019, 6:54:00 PM","endTime":"January 8th, 2019, 7:26:00 PM","bidWars":false},{"name":"Sonic Rush All Stages","players":["Kirbymastah"],"description":"","startTime":"January 8th, 2019, 7:26:00 PM","endTime":"January 8th, 2019, 8:35:00 PM","bidWars":true},{"name":"Mario Kart 64 150cc All Cups (Skips)","players":["abney317"],"description":"","startTime":"January 8th, 2019, 8:35:00 PM","endTime":"January 8th, 2019, 9:27:00 PM","bidWars":false},{"name":"Super Mario Bros. 3mix Any% race","players":["mitchflowerpower","Gadien","Jabem"],"description":"","startTime":"January 8th, 2019, 9:27:00 PM","endTime":"January 8th, 2019, 10:52:00 PM","bidWars":false},{"name":"Super Mario RPG: Legend of the Seven Stars any%","players":["Justin-credible"],"description":"","startTime":"January 8th, 2019, 10:52:00 PM","endTime":"January 9th, 2019, 2:22:00 AM","bidWars":true},{"name":"Trauma Center: Under The Knife 2 Normal","players":["TrjnRabbit"],"description":"","startTime":"January 9th, 2019, 2:22:00 AM","endTime":"January 9th, 2019, 4:39:00 AM","bidWars":true},{"name":"Medal of Honor: Airborne Any% - Casual","players":["ThePackle"],"description":"","startTime":"January 9th, 2019, 4:39:00 AM","endTime":"January 9th, 2019, 5:30:00 AM","bidWars":false},{"name":"Tony Hawk's Pro Skater 2X All Goals and Golds (All Careers)","players":["ThePackle"],"description":"","startTime":"January 9th, 2019, 5:30:00 AM","endTime":"January 9th, 2019, 6:09:00 AM","bidWars":true},{"name":"The Elder Scrolls III: Morrowind All Main Quests","players":["Archariat"],"description":"","startTime":"January 9th, 2019, 6:09:00 AM","endTime":"January 9th, 2019, 6:50:00 AM","bidWars":true},{"name":"Michael Jackson's Moonwalker Any% Easy","players":["Brandooates"],"description":"","startTime":"January 9th, 2019, 6:50:00 AM","endTime":"January 9th, 2019, 7:21:00 AM","bidWars":false},{"name":"The Magical Quest Starring Mickey Mouse Hard","players":["Le Hulk"],"description":"","startTime":"January 9th, 2019, 7:21:00 AM","endTime":"January 9th, 2019, 7:55:00 AM","bidWars":false},{"name":"Puzzle Bobble 1 Player","players":["altabiscuit"],"description":"","startTime":"January 9th, 2019, 7:55:00 AM","endTime":"January 9th, 2019, 8:39:00 AM","bidWars":false},{"name":"Guacamelee! 2 Any%","players":["The Blacktastic"],"description":"","startTime":"January 9th, 2019, 8:39:00 AM","endTime":"January 9th, 2019, 9:56:00 AM","bidWars":true},{"name":"Light Fall Normal Any%","players":["FuzzyGames"],"description":"","startTime":"January 9th, 2019, 9:56:00 AM","endTime":"January 9th, 2019, 10:42:00 AM","bidWars":false},{"name":"Semblance All Orbs one-handed","players":["halfcoordinated"],"description":"","startTime":"January 9th, 2019, 10:42:00 AM","endTime":"January 9th, 2019, 11:23:00 AM","bidWars":true},{"name":"N++ 2 player Coop A-episodes","players":["AND4H","Krankdud"],"description":"","startTime":"January 9th, 2019, 11:23:00 AM","endTime":"January 9th, 2019, 12:00:00 PM","bidWars":false},{"name":"Warcraft III: Reign of Chaos Orc Campaign","players":["CovertMuffin"],"description":"","startTime":"January 9th, 2019, 12:00:00 PM","endTime":"January 9th, 2019, 1:12:00 PM","bidWars":false},{"name":"TimeSplitters 2 Any% Co-op Easy","players":["Copitz","Swoodeasu"],"description":"","startTime":"January 9th, 2019, 1:12:00 PM","endTime":"January 9th, 2019, 2:00:00 PM","bidWars":false},{"name":"Halo: Reach Legendary Co-op","players":["WoLfy","Pedrogas"],"description":"","startTime":"January 9th, 2019, 2:00:00 PM","endTime":"January 9th, 2019, 3:57:00 PM","bidWars":false},{"name":"The Legend of Zelda: Twilight Princess All Dungeons","players":["SkyBlueAether"],"description":"","startTime":"January 9th, 2019, 3:57:00 PM","endTime":"January 9th, 2019, 8:09:00 PM","bidWars":false},{"name":"Octopath Traveler Single Story RTA (Tressa)","players":["murmilio"],"description":"","startTime":"January 9th, 2019, 8:09:00 PM","endTime":"January 9th, 2019, 9:22:00 PM","bidWars":true},{"name":"Mega Man X 1 - 3 team relay race any%","players":["Trogdor","Calebhart42","ColonelFatso","Tokyo90","Walrus_Prime","Soppa","Justin-credible","Luiz Miguel","Madu"],"description":"","startTime":"January 9th, 2019, 9:22:00 PM","endTime":"January 9th, 2019, 11:28:43 PM","bidWars":false},{"name":"Mega Man 10 Any% (Bass)","players":["Slurpeeninja"],"description":"","startTime":"January 9th, 2019, 11:28:43 PM","endTime":"January 10th, 2019, 12:21:14 AM","bidWars":false},{"name":"Mega Man Unlimited Z-Prototype Any%","players":["LV Creed"],"description":"","startTime":"January 10th, 2019, 12:21:14 AM","endTime":"January 10th, 2019, 1:11:18 AM","bidWars":true},{"name":"Mega Man (DOS) Any%","players":["Lizstar"],"description":"","startTime":"January 10th, 2019, 1:11:18 AM","endTime":"January 10th, 2019, 1:34:08 AM","bidWars":true},{"name":"Avoid the Noid 30 minutes or less","players":["Mike Uyama"],"description":"","startTime":"January 10th, 2019, 1:34:08 AM","endTime":"January 10th, 2019, 1:56:15 AM","bidWars":true},{"name":"Virtual Hydlide 100%","players":["Gyre"],"description":"","startTime":"January 10th, 2019, 1:56:15 AM","endTime":"January 10th, 2019, 3:01:58 AM","bidWars":true},{"name":"Urban Yeti! Any%","players":["PeteDorr"],"description":"","startTime":"January 10th, 2019, 3:01:58 AM","endTime":"January 10th, 2019, 3:42:58 AM","bidWars":false},{"name":"Gordo 106 Any%","players":["janglestorm"],"description":"","startTime":"January 10th, 2019, 3:42:58 AM","endTime":"January 10th, 2019, 4:09:58 AM","bidWars":false},{"name":"Mohawk & Headphone Jack Warpless","players":["PJ"],"description":"","startTime":"January 10th, 2019, 4:09:58 AM","endTime":"January 10th, 2019, 5:08:00 AM","bidWars":true},{"name":"Star Wars Episode I: The Phantom Menace Beat the Game","players":["saintmillion"],"description":"","startTime":"January 10th, 2019, 5:08:00 AM","endTime":"January 10th, 2019, 6:10:00 AM","bidWars":true},{"name":"Dragon's Lair: The Legend Beat The Game (EU)","players":["sharif"],"description":"","startTime":"January 10th, 2019, 6:10:00 AM","endTime":"January 10th, 2019, 6:41:00 AM","bidWars":false},{"name":"Sword of Sodan Warpless% Easy","players":["NPC"],"description":"","startTime":"January 10th, 2019, 6:41:00 AM","endTime":"January 10th, 2019, 7:05:00 AM","bidWars":true},{"name":"Férias Frustradas do Pica-Pau Difficult","players":["GarbitheGlitcheress"],"description":"","startTime":"January 10th, 2019, 7:05:00 AM","endTime":"January 10th, 2019, 7:33:00 AM","bidWars":false},{"name":"Home Alone 2: Lost in New York NY%","players":["Iceplug"],"description":"","startTime":"January 10th, 2019, 7:33:00 AM","endTime":"January 10th, 2019, 7:57:00 AM","bidWars":false},{"name":"Garfield: A Week of Garfield any%","players":["coolkid"],"description":"","startTime":"January 10th, 2019, 7:57:00 AM","endTime":"January 10th, 2019, 8:18:00 AM","bidWars":false},{"name":"Monkey King any%","players":["Brossentia"],"description":"","startTime":"January 10th, 2019, 8:18:00 AM","endTime":"January 10th, 2019, 8:41:00 AM","bidWars":false},{"name":"Trio the Punch: Never Forget Me W-Fist%","players":["ZakkyTheShimmeringKirin"],"description":"","startTime":"January 10th, 2019, 8:41:00 AM","endTime":"January 10th, 2019, 9:23:00 AM","bidWars":true},{"name":"Metal Gear (NES) any%","players":["Eriphram"],"description":"","startTime":"January 10th, 2019, 9:23:00 AM","endTime":"January 10th, 2019, 10:04:00 AM","bidWars":false},{"name":"Metal Gear 2: Solid Snake Original Difficulty Big Boss Rank","players":["miniomegaking"],"description":"","startTime":"January 10th, 2019, 10:04:00 AM","endTime":"January 10th, 2019, 11:10:00 AM","bidWars":false},{"name":"Ninja Five-O any% normal","players":["just_defend"],"description":"","startTime":"January 10th, 2019, 11:10:00 AM","endTime":"January 10th, 2019, 11:43:00 AM","bidWars":false},{"name":"Lara Croft and the Guardian of Light Any% NG+","players":["RandomPinkBunny"],"description":"","startTime":"January 10th, 2019, 11:43:00 AM","endTime":"January 10th, 2019, 12:21:00 PM","bidWars":false},{"name":"Overload Trainee Any%","players":["SpootyBiscuit"],"description":"","startTime":"January 10th, 2019, 12:21:00 PM","endTime":"January 10th, 2019, 1:00:00 PM","bidWars":false},{"name":"Prey Mooncrash DLC","players":["bloodthunder"],"description":"","startTime":"January 10th, 2019, 1:00:00 PM","endTime":"January 10th, 2019, 2:54:00 PM","bidWars":false},{"name":"Dishonored: Death of the Outsider any%","players":["Metro72"],"description":"","startTime":"January 10th, 2019, 2:54:00 PM","endTime":"January 10th, 2019, 3:25:00 PM","bidWars":false},{"name":"Ultimate Doom any%","players":["KingDime"],"description":"","startTime":"January 10th, 2019, 3:25:00 PM","endTime":"January 10th, 2019, 4:04:00 PM","bidWars":false},{"name":"Doom 2: Hell On Earth any% UV-Speed","players":["KingDime"],"description":"","startTime":"January 10th, 2019, 4:04:00 PM","endTime":"January 10th, 2019, 4:57:00 PM","bidWars":false},{"name":"Chex Quest Extreme Ooze Max","players":["peaches"],"description":"","startTime":"January 10th, 2019, 4:57:00 PM","endTime":"January 10th, 2019, 5:19:00 PM","bidWars":true},{"name":"Crypt of the NecroDancer: AMPLIFIED Coda Low%","players":["SpootyBiscuit"],"description":"","startTime":"January 10th, 2019, 5:19:00 PM","endTime":"January 10th, 2019, 6:14:00 PM","bidWars":false},{"name":"The Messenger 8-Bit","players":["strizer86"],"description":"","startTime":"January 10th, 2019, 6:14:00 PM","endTime":"January 10th, 2019, 7:20:00 PM","bidWars":false},{"name":"Dead Cells any%","players":["BIGHONKINBURGER","scaz.zaf","ChurchnSarge"],"description":"","startTime":"January 10th, 2019, 7:20:00 PM","endTime":"January 10th, 2019, 7:54:00 PM","bidWars":false},{"name":"Cuphead All S+P Grades","players":["TheMexicanRunner"],"description":"","startTime":"January 10th, 2019, 7:54:00 PM","endTime":"January 10th, 2019, 9:02:00 PM","bidWars":true},{"name":"Celeste All Chapters","players":["TGH"],"description":"","startTime":"January 10th, 2019, 9:02:00 PM","endTime":"January 10th, 2019, 10:49:00 PM","bidWars":true},{"name":"The Legend of Zelda: The Wind Waker HD 100%","players":["Linkus7"],"description":"","startTime":"January 10th, 2019, 10:49:00 PM","endTime":"January 11th, 2019, 5:21:00 AM","bidWars":true},{"name":"Pac-Man: Championship Edition 2 Any%","players":["Pinballwiz45b"],"description":"","startTime":"January 11th, 2019, 5:21:00 AM","endTime":"January 11th, 2019, 6:02:00 AM","bidWars":true},{"name":"Klonoa: Door to Phantomile Any%","players":["Trob"],"description":"","startTime":"January 11th, 2019, 6:02:00 AM","endTime":"January 11th, 2019, 7:02:00 AM","bidWars":true},{"name":"Ratchet & Clank: Up Your Arsenal Any%","players":["Xem"],"description":"","startTime":"January 11th, 2019, 7:02:00 AM","endTime":"January 11th, 2019, 8:24:00 AM","bidWars":true},{"name":"Metroid Fusion Any% Memory Corruption","players":["CScottyW"],"description":"","startTime":"January 11th, 2019, 8:24:00 AM","endTime":"January 11th, 2019, 9:27:00 AM","bidWars":false},{"name":"Diablo 2: Lord of Destruction Any% Normal Amazon","players":["MrLlamaSC"],"description":"","startTime":"January 11th, 2019, 9:27:00 AM","endTime":"January 11th, 2019, 12:17:00 PM","bidWars":true},{"name":"Divinity: Original Sin 2 Any% Old Patch","players":["Semanari"],"description":"","startTime":"January 11th, 2019, 12:17:00 PM","endTime":"January 11th, 2019, 12:50:00 PM","bidWars":false},{"name":"Grand Theft Auto: Vice City Any% No SSU","players":["KZ_FREW"],"description":"","startTime":"January 11th, 2019, 12:50:00 PM","endTime":"January 11th, 2019, 2:08:00 PM","bidWars":false},{"name":"Pokemon Gold Any% Glitchless (Race)","players":["Gunnermaniac3","pokeguy84"],"description":"","startTime":"January 11th, 2019, 2:08:00 PM","endTime":"January 11th, 2019, 5:58:00 PM","bidWars":false},{"name":"Final Fantasy IV - Free Enterprise League Match Flags","players":["Khobahi","Neerrm","Obdajr","riversmccown"],"description":"","startTime":"January 11th, 2019, 5:58:00 PM","endTime":"January 11th, 2019, 8:29:00 PM","bidWars":true},{"name":"TASBot plays mari0 (SMB1 + Portal gun) Various mappacks by Masterjun and Noahkiq","players":["dwangoAC"],"description":"","startTime":"January 11th, 2019, 8:29:00 PM","endTime":"January 11th, 2019, 8:58:00 PM","bidWars":false},{"name":"TASBot plays Castlevania: Aria of Sorrow \"All souls\" by Fz-last, klmz and Pike","players":["dwangoAC"],"description":"","startTime":"January 11th, 2019, 8:58:00 PM","endTime":"January 11th, 2019, 9:29:41 PM","bidWars":false},{"name":"Twitch Plays Super Scribblenauts Chat% by Funkmastermp, Chef Stef, Themas, and SighnWaive","players":["dwangoAC"],"description":"","startTime":"January 11th, 2019, 9:29:41 PM","endTime":"January 11th, 2019, 10:16:01 PM","bidWars":true},{"name":"Super Mario Sunshine 1v1 Lockout Bingo","players":["PangaeaPanga","SniperKing"],"description":"","startTime":"January 11th, 2019, 10:16:01 PM","endTime":"January 11th, 2019, 11:43:01 PM","bidWars":false},{"name":"Final Fantasy IX Any%","players":["Luzbelheim","Muttski","Tojju"],"description":"","startTime":"January 11th, 2019, 11:43:01 PM","endTime":"January 12th, 2019, 9:28:00 AM","bidWars":true},{"name":"Puyo Puyo Tetris Extra Stages 100%","players":["Scottobozo"],"description":"","startTime":"January 12th, 2019, 9:28:00 AM","endTime":"January 12th, 2019, 10:22:00 AM","bidWars":false},{"name":"Luigi's Mansion No OOB","players":["HDlax1"],"description":"","startTime":"January 12th, 2019, 10:22:00 AM","endTime":"January 12th, 2019, 11:48:00 AM","bidWars":true},{"name":"I wanna kill the Kamilia 2 any%","players":["BBF"],"description":"","startTime":"January 12th, 2019, 11:48:00 AM","endTime":"January 12th, 2019, 1:47:00 PM","bidWars":false},{"name":"The Legend of Zelda: A Link to the Past Low% 1-Hit K.O.","players":["Xelna"],"description":"","startTime":"January 12th, 2019, 1:47:00 PM","endTime":"January 12th, 2019, 3:52:00 PM","bidWars":false},{"name":"Dark Souls III All Bosses","players":["spacey1"],"description":"","startTime":"January 12th, 2019, 3:52:00 PM","endTime":"January 12th, 2019, 5:48:00 PM","bidWars":true},{"name":"Bloodborne Any%","players":["heyZeusHeresToast"],"description":"","startTime":"January 12th, 2019, 5:48:00 PM","endTime":"January 12th, 2019, 6:49:00 PM","bidWars":true},{"name":"Quickie World 100%","players":["GlitchCat7","RBMACHOK"],"description":"","startTime":"January 12th, 2019, 6:49:00 PM","endTime":"January 12th, 2019, 7:13:06 PM","bidWars":false},{"name":"Super Gracie World 100%","players":["Wahnthac"],"description":"","startTime":"January 12th, 2019, 7:13:06 PM","endTime":"January 12th, 2019, 8:00:21 PM","bidWars":true},{"name":"Super Mario Odyssey Darker Side","players":["Bayleef"],"description":"","startTime":"January 12th, 2019, 8:00:21 PM","endTime":"January 12th, 2019, 11:51:00 PM","bidWars":true},{"name":"Super Metroid Reverse Boss Order","players":["ShinyZeni"],"description":"","startTime":"January 12th, 2019, 11:51:00 PM","endTime":"January 13th, 2019, 1:01:02 AM","bidWars":true},{"name":"Finale! 100%","players":["GDQ Staff"],"description":"The end!","startTime":"January 13th, 2019, 1:01:02 AM","endTime":"January 13th, 2019, 1:16:02 AM","bidWars":false}]};

init();
