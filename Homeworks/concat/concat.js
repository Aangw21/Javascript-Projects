// TO DO:
// Complete the concatenation function
// Takes in two strings
// returns str1 concatenated with str2
function concat(str1, str2){
    newstrg = str1 + str2
    return newstrg;
}



// ------------- STOP --------------------
// Do not make any edits in this section
// ------------- STOP --------------------

function concatClick(){
    if (!document.getElementById("input1").value ||
    !document.getElementById("input2").value ||
    !document.getElementById("input3").value ||
    !document.getElementById("input4").value){
        document.getElementById("DEBUG").innerHTML = "You must enter a string in each textbox.";
        return;
    }
    document.getElementById("DEBUG").innerHTML = "";

    if (!document.getElementById("input5").value||
    !document.getElementById("input6").value){
        // concat case 1
        document.getElementById("input5").value = concat(document.getElementById("input1").value, document.getElementById("input2").value);
        document.getElementById("input6").value = concat(document.getElementById("input3").value, document.getElementById("input4").value);
    }
    else{
        document.getElementById("input7").value = concat(document.getElementById("input5").value, document.getElementById("input6").value);
    }
}

function clearClick(){
    for (let i = 1; i < 8; ++i){
        document.getElementById("input" + String(i)).value = "";
    }
}

for (let i = 0; i < 40; ++i){
    document.getElementById("invisible").innerHTML += "&nbsp";
}