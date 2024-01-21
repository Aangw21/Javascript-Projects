function prompt(){
    // Prompt returns a string
    // We need to cast the strings into Numbers
    // const a = prompt("Enter a number");
    // const b = prompt("Enter a number");

    const a = Number(prompt("Enter a number"));
    const b = Number(prompt("Enter a number"));

    console.log(a);
    console.log(b);
    console.log(a + b);    
}

function stringIndexing(){
    // Strings are indexed from 0

    const str = "pineapple pen";
    console.log(str[0]);
    console.log(str[1]);
    console.log(str[str.length-1]);
}

// Floating point numbers can behave oddly at times
function floating(){
    const a = 0.1;
    const b = 0.2;

    console.log(a + b);
}

// Check if a number is between 1 and 100 inclusive
// output true if it is
// output false otherwise
function conditionals(num){
    // check within bounds
    if (num <= 100 && num >= 0){
        console.log(true);
    }
    else{
        console.log(false);
    }
    // check outside of bounds will use
    // if (num > 100 || num < 0)
}

// takes input a letter grade
// output gpa equivalent
function switchStatement(str){
    // Cascading if...elseif...else will work
    // Switch statements are much more efficent
    // but more niche in their use
    switch(str){
        case("A"):
            console.log(4.0);
            break;
        case("A-"):
            console.log(3.7);
            break;
        case("B+"):
            console.log(3.3);
            break;
        case("B"):
            console.log(3.0);
            break;
        case("B-"):
            console.log(2.7);
            break;
        case("C+"):
            console.log(2.3);
            break;
        case("C"):
            console.log(2.0);
            break;
        case("C-"):
            console.log(1.7);
            break;
        case("D+"):
            console.log(1.3);
            break;
        default:
            console.log(1.0);
            break; 
    }
}

// While loops are most universal
// add up the numbers 1 to 10
function whileLoops(){
    let sum = 0;
    let i = 1;

    while ( i <= 10 ){
        sum += i;
        ++i;
    }
    
    console.log(sum);
}

// For loops are concise
// add up the numbers 1 to 10
function forLoops(){
    for (let j = 1; i <= 10; ++i){
        sum += i;
    }
    
    console.log(sum);
}

// There's an even faster way
// to sum up 1 to 10
function summation(){
    // ???
    console.log(sum);
}























