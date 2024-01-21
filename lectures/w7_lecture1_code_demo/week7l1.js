// Example object
// const student = {
//     firstName:"John",
//     lastName:"Johnson",
//     age:20,
//     gpa:3.2,
//     grades:[3.0, 3.1, 3.3, 3.4],
//     courses:[
//             {schoolID:"INFO",departmentID:"I",number:363,section:32804},
//             {schoolID:"CSCI",departmentID:"C",number:340,section:32805},
//             {schoolID:"INFO",departmentID:"I",number:389,section:13948},
//             {schoolID:"INFO",departmentID:"I",number:453,section:7527}
//     ]
// };



// print the full name of the student
// "lastName, firstName" format
function fullName(student){
    // get the value of the firstName and lastName keys
    const firstName = student["firstName"];
    const lastName = student["lastName"];

    // construct the string
    return lastName + ", " + firstName;
}

// Get the GPA of the student
// return as string
function gpa(student){
    // get the gpa-key value
    const gpa = student["gpa"];
    // return as string
    return String(gpa)
}

// page 74 exercise
// print each grade of the student object
function printGrades(student){
    // get the array of grades using the "grades" key
    const gradeArray = student["grades"];

    // loop through and print each element in the grade array
    for (let i = 0; i < gradeArray.length; ++i){
        console.log(gradeArray[i]);
    }
}

// page 75 exercise
// print each course the student is taking
// INFO-I363
// CSCI-C340
// INFO-I389
// INFO-I453
function printCourses(student){
    // get the array of courses using the "courses" key
    const courseArray = student["courses"];

    // loop through the course array to access 1 course object at a time
    for (let i = 0; i < courseArray.length; ++i){
        // for each course, get the "schoolID", "departmentID", and "number" values
        const school = courseArray[i]["schoolID"];
        const department = courseArray[i]["departmentID"];
        const number = courseArray[i]["number"];

        // construct the string and print it
        console.log(school + "-" + department + String(number));
    }
}


// Example object
const I365 = {
    name: "JavaScript",
    day: ["Monday", "Wednesday"],
    time: ["9:45", "11:05"],
    instructor: {
        firstName: "Stephen",
        lastName: "Sher",
        tired: true},
    students: [
        {   firstname: "John",
            lastName: "Johnson",
            courses: [
                {schoolID: "INFO", departmentID: "I", number: 363, section: 32804},
                {schoolID: "INFO", departmentID: "I", number: 365, section: 32805},
                {schoolID: "INFO", departmentID: "I", number: 389, section: 13948},
                {schoolID: "INFO", departmentID: "I", number: 453, section: 7527}]},
        {   firstname: "Peter",
            lastName: "Peterson",
            courses: [
                {schoolID: "INFO", departmentID: "I", number: 330, section: 9663},
                {schoolID: "INFO", departmentID: "I", number: 363, section: 32804},
                {schoolID: "INFO", departmentID: "I", number: 365, section: 32805}]},        
        {   firstname: "Erika",
            lastName: "Erikson",
            courses: [
                {schoolID: "INFO", departmentID: "I", number: 211, section: 2210},
                {schoolID: "INFO", departmentID: "I", number: 365, section: 32805},
                {schoolID: "INFO", departmentID: "I", number: 389, section: 13948}]}
    ]
};

function countI363_forEach(I365){
    let count = 0;

    // for each student in I365.students (== I365["students"])
    // run the following anonymous function on each student
    I365.students.forEach( (student)=>{

        // for each course in student.courese (== student["coureses"])
        // run the following anonymous function on each course
        student.courses.forEach( (course)=>{

            // compare the course number to 363
            if (course.number == 363){
                count++;
            }
        });
    });

    return count;
}

function countI363_forLoop(I365){
    let count = 0;

    // access the student array using the "student" key
    const studentArray = I365["students"];

    // iterate through each student 1 by 1
    for (let i = 0; i < studentArray.length; ++i){
        // for syntax ease, store the individual student
        const student = studentArray[i];
    
        // access this student's array of courses via "courses" key
        const courseArray = student["courses"];

        // iterate through each course 1 by 1
        for (let j = 0; j < courseArray.length; ++j){
            //for syntax ease, store the individual course
            const course = courseArray[j];
    
            // access the course number via "number" key
            const number = course["number"];

            // compare to see if number is 363 and update counter
            if (number == 363){
                count = count + 1;
            }
        }
    }

    // return the final count
    return count;
}

// function init(){
//     // student object examples
//     console.log(fullName(student));
//     console.log(gpa(student));
//     printGrades(student);
//     printCourses(student);

//     // I365 examples
//     console.log(countI363_forLoop(I365));
//     console.log(countI363_forEach(I365));
// }

// init();

const student = {
    firstName:"John",
    lastName:"Johnson",
    age:20,
    gpa:3.2,
    grades:[3.0, 3.1, 3.3, 3.4],
    courses:[
            {schoolID:"INFO",departmentID:"I",number:363,section:32804},
            {schoolID:"CSCI",departmentID:"C",number:340,section:32805},
            {schoolID:"INFO",departmentID:"I",number:389,section:13948},
            {schoolID:"INFO",departmentID:"I",number:453,section:7527}
    ]
};

function studentCourse(student){
    const courseArray = student["courses"];
    // loop through the schoolids
    for (let i = 0; i< courseArray.length; ++i) {
        console.log(courseArray[i]["schoolID"] + "-" + courseArray[i]["departmentID"] +courseArray[i]["number"] )
    }
    // courseArray[i]["SchoolID']
    // "INFO-I<number>"
};

studentCourse(student)