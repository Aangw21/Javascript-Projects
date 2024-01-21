studentArray = [
    {   firstName: "John",
        lastName: "Johnson",
        credits: 24,
        gpa: 3.5,},
        
    {   firstName: "Peter",
        lastName: "Peterson",
        credits: 108,
        gpa: 3.2},
        
    {   firstName: "Michelle",
        lastName: "Michaels",
        credits: 72,
        gpa: 2.7},
        
    {   firstName: "Stephanie",
        lastName: "Stevens",
        credits: 66,
        gpa: 3.2},
        
    {   firstName: "Erika",
        lastName: "Erikson",
        credits: 84,
        gpa: 3.0},

    {   firstName: "Will",
        lastName: "Williams",
        credits: 96,
        gpa: 2.3},
        
    {   firstName: "Jamie",
        lastName: "Jamison",
        credits: 87,
        gpa: 3.5}
];

// write a function that return an array of first names
// quite standard, but a bit messy to read
function getFirstNames_forLoop(studentArray){
    const nameArray = [];
    // iterate with for loop
    for (let i = 0; i < studentArray.length; ++i){
        // get the student
        const student = studentArray[i];
        // add student's firstName to our accumulating array
        nameArray.push(student["firstName"]);
    }
    return nameArray;
}

// write a function that return an array of first names
// more streamlined with the forEach function
function getFirstNames_forEach(studentArray){
    const nameArray = [];
    // iterate with forEach()
    studentArray.forEach( (student) => {
        // (student) gives us the student. Access its first name
        nameArray.push(student["firstName"]);
    });
    return nameArray;
}

// write a function that return an array of first names
// most suited for what we want to do
// .map() automatically constructs the array we want
function getFirstNames_map(studentArray){
    // IMPORTANT: .map() returns an array. Need to store it for safekeeping
    const firstNameArray = studentArray.map( (student) =>{
        // what do I look at?
        // return what you want to be in your array
        return student["firstName"];
    });
    return firstNameArray;
}

// write a function that returns an array of the credits of each student
// .map() automatically constructs the array we want
function getCredits_map(studentArray){
    // IMPORTANT: .map() returns an array. Need to store it for safekeeping
    const creditArray = studentArray.map( (student) =>{
        // what do we want?
        // in this case we want credits, so return it.
        return student["credits"];
    });
    return creditArray;
}

// assume each course is 3 credits
// 24 credits = 24/3 = 8  courses
// 72 credits = 72/3 = 24 courses
// write a function that returns an array of the number of courses each
// student has taken
// this is written with a for loop. Note how messy all the indexing becomes
function getNumCourses_forLoop(studentArray){
    const creditArray = [];
    for (let i = 0 ; i < studentArray.length; ++i){
        creditArray.push(studentArray[i]["credits"]);
    }
    const courseArray = [];
    for (let i = 0; i < creditArray.length; ++i){
        courseArray.push(creditArray[i]/3);
    }
    return courseArray;
}

// assume each course is 3 credits
// 24 credits = 24/3 = 8  courses
// 72 credits = 72/3 = 24 courses
// write a function that returns an array of the number of courses each
// student has taken
// using the .map() function, this streamlines our data processing
function getNumCourses_map(studentArray){
    // 1) get the credits from each student
    const creditsArray = studentArray.map( (student) => {
        // what do we want?
        return student["credits"];
    });
    // 2) convert credits to coures for each
    // use map again on our credits array since each credit number will
    // be mapped to a number
    const coursesArray = creditsArray.map( (creditNum) => {
        // what do we do?
        return creditNum / 3;
    });
    return coursesArray;
}

// write a function that returns the full name of each student
// ["John Johnson, Peter Peterson, ..."]
function getFullNames_map(studentArray){
    // iterate through with map
    const fullNames = studentArray.map( (student) => {
        // What do we want / what do we do?
        // We can do some processing in our .map() function!
        return student["firstName"] + " " + student["lastName"];
    });
    return fullNames;
}

// Assume seniors are students with 90 or more credits
// Write a function that returns only the seniors in the array
// Using a forEach() loop works, but suboptimal
function getSeniors_forEach(studentArray){
    const seniors = [];
    // iterate through each student
    studentArray.forEach( (student) => {
        // check if student is a senior with the number of credits
        if (student["credits"] >= 90){
            // if so, add to our array
            seniors.push(student);
        }
    });
    return seniors;
}

// Assume seniors are students with 90 or more credits
// Write a function that returns only the seniors in the array
// This is achieved most optimally using the .filter() function
function getSeniors_filter(studentArray){
    // similar to .map(), .filter() also returns an array. Store it
    const seniors = studentArray.filter ( (student) => {
        // do we choose? students with 90 or more credits
        // [IMPORTANT]: must return a boolean value true/false
        return student["credits"] >= 90;
    });
    return seniors;
}

// write a function that returns an array
// with only the gpas of each student
function getGPAs(studentArray){
    // run map on the array
    const gpaArray = studentArray.map( (student) => {
        // return the data that we want to be in our array
        return student["gpa"];
    });
    return gpaArray;
}

// write a function that returns an array
// of students who are juniors
// juniors are students who have completed 60 - 89 (inclusive) credits
function getJuniors(studentArray){
    const juniors = studentArray.filter( (student) => {
        // for readability, let's store credits in a separate variable
        const credits = student["credits"];
        // return the correct true/false value using comparators and boolean operators
        return ( ( 60 <= credits) && ( credits <= 89) );
    });
    return juniors;
}

// write a function that returns an array
// of students who have taken 20 or less courses
// 1 course = 3 credits
function getCoursesLessTwenty(studentArray){
    const twentyCourses = studentArray.filter( (student) => {
        // for readability, store the credits
        const credits = student["credits"];
        // convert credits to number of courses
        const numCourses = credits / 3;
        // use comparators to return a boolean
        return numCourses <= 20;

        // one-line solution
        // return student["credits"] <= 60;
    });
    return twentyCourses;
}

// write a function that finds the sum of 
// every student's credits
// return a sum
function findCreditSum(studentArray){
    // reduces takes two arguments:
    //  1) anonymous function for accumulation functionality
    //  2) the initial value of the accumulator
    const creditSum = studentArray.reduce( (accumulator, student) => {
        // anonymous function takes two arguments
        //   1) accumulator that is passed along to collect everything
        //   2) the iterator (student)

        // calculate the accumulation and return it
        return accumulator + student["credits"];
    }, 0); // [IMPORTANT] - specify the initial value of the accumulator
    return creditSum;
}

// write a function that finds the average GPA of the students
// returns a float
function averageGPA(studentArray){
    // find accumulated sum using .reduce()
    const sum = studentArray.reduce( (accu, student) => {
        return accu + student["gpa"];
    }, 0);

    // divide by length
    return (sum / studentArray.length).toFixed(2);
}

function init(studentArray){
    // .map() function
    // Extracting names
    // getFirstNames_forLoop(studentArray);
    // getFirstNames_forEach(studentArray);
    console.log("The first name of each student: ");
    console.log(getFirstNames_map(studentArray));
    console.log("The full name of each student: ");
    console.log(getFullNames_map(studentArray));

    // Extracting credits
    // console.log(getNumCourses_forLoop(studentArray));
    console.log("The credits of each student: ");
    console.log(getCredits_map(studentArray));
    console.log("The number of coureses each student has taken: ");
    console.log(getNumCourses_map(studentArray));

    // .filter() function
    // console.log(getSeniors_forEach(studentArray));
    console.log("The students with senior status: ");
    console.log(getSeniors_filter(studentArray));
    console.log("The students with junior status: ");
    console.log(getJuniors(studentArray));

    // .reduce() function
    console.log("The total number of credits taken by all students is " + String(findCreditSum(studentArray)));
    console.log("The average GPA is " + String(averageGPA(studentArray)));
}

init(studentArray);


