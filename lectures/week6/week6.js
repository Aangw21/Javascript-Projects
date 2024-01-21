const students = {
    firstName: "John",
    LastName: "Johnson",
    age: 20,
    gpa: 3.2,
    grades: [3.0, 3.1, 3.3, 3.4],
    courses:[
    {schoolID: "INFO", departmentID:"I", number: 363, section: 32804},
    {schoolID: "INFO", departmentID:"I", number: 363, section: 32804},
    {schoolID: "INFO", departmentID:"I", number: 363, section: 32804},
    {schoolID: "INFO", departmentID:"I", number: 363, section: 32804}
    ]
    };
    
    function fullName(students){
    // get the first name
    const first = students["firstName"];
    // get the last name
    const last = students["lastName"];
    // construct the full name with correct formatting
    const full = last + ", " + first;
    return full;
    }

    // page 75 exercise
    // print each course the student is taking

    const gradeArray = students["grades"]

    // for(let i = 0 i < gradeArray.length)

    function printCourse(students) {
        const courseArray = students["course"];

        for (let i = 0; i < courseArray.length; i++){
            console.log(courseArray[i])
            const school = courseArray[i]["schoolID"];
            const department = courseArray[i]["departmentID"];
            const number = courseArray[i]["numberID"];

            console.log(school + "-" + department + String(number));

        }
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
        { firstname: "John",
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
        // ... more students ...,

        { firstname: "Erika",
        lastName: "Erikson",
        courses: [
        {schoolID: "INFO", departmentID: "I", number: 211, section: 2210} ,
        {schoolID: "INFO", departmentID: "I", number: 365, section: 32805} ,
        {schoolID: "INFO", departmentID: "I", number: 389, section: 13948}]}
        ]
        };


        function foreach(){
            let count = 0;

            I365["students"]
        }

        count = 0

        const studentArray = I365["students"];
        for (let i = 0; i < studentArray.length, i++) {
            const student = studentArray[i];

            const courseArray = student["courses"];
            for (let j= 0; i < courseArray.length, j++) {
                const course = courseArray[j];

                const number = course["number"];
                if (number == 363){
                    count = count + 1;
                }
            }
        }

        console.log(count);