// 1) reset / prevent the default form action
// get the form through DOM
const form = document.getElementById("exampleForm");
form.addEventListener("submit", (event) => {
    // prevent the default submission acction 
    event.preventDefault();
    // create a new form for us to manage
    new FormData(form);
});


// 2) reading the form data and parsing it into JSON
form.addEventListener("formdata", (event) => {
    // store the form data
    const data = event.formData;
    const json = {};

    // go through each input key-value pairs
    for (const [key,value] of data.entries()){
        json[key] = value;
        // console.log(`key: ${key}  -  value: ${value}`);
    }

    const student = {};
    // good expected properly-formed data
    student["firstName"] = json["firstName"];
    student["lastName"] = json["lastName"];
    student["credits"] = json["credits"];
    student["gpa"] = json["gpa"];
    student["campus"] = json["campus"];

    // dirty data
    // json["isActive"] = "on" / 
    // student["isActive"] = true/false
    if (json["isActive"] == "on"){
        student["isActive"] = true;
    }
    else {
        student["isActive"] = false;
    }

    // create and store the current date
    const now = new Date();
    const year = now.getFullYear();
    // month is stored between 0 and 11
    // const month = String(Number(now.getMonth()) + 1)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[now.getMonth()]
    const date = now.getDate();
    student["date"] = `${year}-${month}-${date}`;

    console.log(student);
});
