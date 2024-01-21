const student = {
	fName:"Lizzie",
  lName: "Elizabeth",
  grades: [
  	{grade: 3.5, credits: 4},
    {grade: 3.0, credits: 4},
    {grade: 3.7, credits: 3},
    {grade: 2.7, credits: 4}
  ]
  
}

function totalCredits(student) {
  sum = 0;
  student["grades"].forEach((gpair)) => {
    sum+= gPair[credits];
  });
  return sum;
}

