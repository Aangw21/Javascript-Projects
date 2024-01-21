// print the students + the number of courses they are taking 
// John Johnson(4)

function studentAndCourses(I365){
    // need to get all the students
   studentArray.forEach( (student) => {
    const firstName = student["firstName"];
    const lastName = student["lastName"];
    const numCourses = student["courses"].length;
    console.log(`${firstName} ${lastName}, (${String(numCourses)})`);
   });
}




const I365 = {
    name: "JavaScript",
    day: ["Monday", "Wednesday"],
    time: ["9:45", "11:05"],
    instructor: {
    firstName: "Stephen",
    lastName: "Sher",
    tired: true},
    students: [
    { firstName: "John",
    lastName: "Johnson",
    courses: [
    {schoolID: "INFO", departmentID: "I", number: 363, section: 32804} ,
    {schoolID: "INFO", departmentID: "I", number: 365, section: 32805} ,
    {schoolID: "INFO", departmentID: "I", number: 389, section: 13948} ,
    {schoolID: "INFO", departmentID: "I", number: 453, section: 7527}]} ,
    { firstname: "Peter",
    lastName: "Peterson",
    courses: [
    {schoolID: "INFO", departmentID: "I", number: 330, section: 9663} ,
    {schoolID: "INFO", departmentID: "I", number: 363, section: 32804} ,
    {schoolID: "INFO", departmentID: "I", number: 365, section: 32805}]} ,
    { firstname: "Michelle",
    lastName: "Michaels",
    courses: [
    {schoolID: "INFO", departmentID: "I", number: 330, section: 9663} ,
    {schoolID: "INFO", departmentID: "I", number: 365, section: 32804} ,
    {schoolID: "INFO", departmentID: "I", number: 399, section: 32805}]} ,
    { firstname: "Stephanie",
    lastName: "Stevens",
    courses: [
    {schoolID: "INFO", departmentID: "I", number: 201, section: 9663} ,
    {schoolID: "INFO", departmentID: "I", number: 300, section: 32804} ,
    {schoolID: "INFO", departmentID: "I", number: 365, section: 32805}]} ,
    { firstname: "Erika",
    lastName: "Erikson",
    courses: [
    {schoolID: "INFO", departmentID: "I", number: 211, section: 2210} ,
    {schoolID: "INFO", departmentID: "I", number: 365, section: 32805} ,
    {schoolID: "INFO", departmentID: "I", number: 389, section: 13948}]}
    ]
    };

studentAndCourses()