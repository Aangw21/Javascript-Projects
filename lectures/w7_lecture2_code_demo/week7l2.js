
// print the student + the number of courses they are taking
// John Johnson, (4)
// ...
// With Live Server, console.log() will print out to the web server's console
// not Visual Studio's Console
function studentAndCourses(I365){
    // need to get all the students
    const studentArray = I365["students"];

    // go through each student one-by-one
    studentArray.forEach( (student) => {
        const firstName = student["firstName"];
        const lastName = student["lastName"];
        const numCourses = student["courses"].length;

        console.log(`${firstName} ${lastName}, (${String(numCourses)})`);
    });
}

function init(dataJSON){
    studentAndCourses(dataJSON);
}

// Remember, loading an external JSON file will require you to use
// Live Server and not through debug.
function loadJSON(filename){
    // make a JSON loading object
    const xobj = new XMLHttpRequest();
    // prepare to read JSON files
    xobj.overrideMimeType("application/json");
    // specify the request type
    xobj.open("GET", filename);
    // what to do once you read the file
    xobj.onreadystatechange = () => {
        // check if the file is loaded correctly
        if (xobj.readyState == 4 && xobj.status == 200){
            // we're ready to read the JSON and process it
            // first get the file contents
            const responseText = xobj.responseText;

            // this is a raw string
            // convert from string to JSON object
            const dataJSON = JSON.parse(responseText);

            // call the function that requires the JSON data
            // in this case it's the init function at page load
            init(dataJSON);
        }
    }
    // sends the XMLHttpRequest out to fetch data
    xobj.send();
}

loadJSON("week7l2.json")
