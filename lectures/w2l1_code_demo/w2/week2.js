// Fast solution to summing 1 to 10
// Uses gaussian sum
let sum = (10*(10+1))/2

// -------------------------
// ------ Functions --------
// -------------------------

// takes in Numbers
// returns a String
// military time format
function time24(hour, minute, second){
    return `${hour}:${minute}:${second}`;
}

// takes in Numbers
// returns a String
// am pm time format
function time12(hour, minute, second){
    if (hour <= 12)
        return `${hour}:${minute}:${second} am`;
    else
        return `${hour-12}:${minute}:${second} pm`;
}

// takes in Numbers
// returns a String
// returns custom time format
function fancyTime(hour, minute, second){
    return `Hour ${hour} at ${minute} minute and ${second} seconds!!!!`;
}

// hour, minute, seconds are Numbers
// formatFunc is a function
function tellTime(hour, minute, second, formatFunc){
    // call the custom formatting function
    timeString = formatFunc(hour, minute, second);
    return "The time is " + timeString;
}

console.log("Passing time12 as function argument: " + tellTime(19,55,50, time12));
console.log("Passing time24 as function argument: " + tellTime(19,55,50, time24));
console.log("Passing fancyTime as function argument: " + tellTime(19,55,50,fancyTime));
console.log("Passing anonymous function as argument: " + tellTime(19,55,50, function(hour, minute, second){
    return `Hour ${hour} at ${minute} minute and ${second} seconds!!!!`;
}));

// -------------------------
// -------- Objects --------
// -------------------------

const student = {
    firstName: "John",
    lastName: "Johnson",
    age: 20,
    gpa: 3.2,
    grades: [3.0, 3.1, 3.3, 3.4],
    
    // Takes in a Number
    // Add to grades
    // Uses anonymous function as declaration
    addGrade: function(newGrade){
        // Grade is added
        this.grades.push(newGrade);

        // recalculate GPA
        let newGPA = 0;
        for (let i = 0; i < this.grades.length; ++i){
            newGPA += this.grades[i];
        }
        newGPA = newGPA/this.grades.length;
        this.gpa = newGPA;
    }
};

// Instead of
// student.grades.push(4.0)
// Which will add 4.0 to the grades array
// but not update the gpa, we want to call
// encapsulation functions instead:

// Preferred:
// Provides more control, organization,
// and protection to your object
student.addGrade(4.0);

console.log(student);

// Looping through objects
// Uses iterators
for (const entry of Object.entries(student)){
    // entry contains key-value array pairs
    console.log(entry);
    // console.log(entry[0]);
    // console.log(entry[1]);
}
