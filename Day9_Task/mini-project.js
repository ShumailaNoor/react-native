//---------Function to calculate grade--------
function calculateGrade(marks) {
  if (marks >= 90) {return "A";}
  else if (marks >= 80) {return "B";}
  else if (marks >= 70) {return "C";}
  else if (marks >= 60) {return "D";}
  else {return "F";}
}

console.log(calculateGrade(85));


//-----------Arrow function to check passorfail
const isPass = (marks) => {
    if(marks>= 50){
    console.log("pass");
}
    else {
        console.log("fail");
    }
}

console.log(isPass(85)); 
console.log(isPass(45)); 

//---------Function to return grades for an array of marks---------------
function getGradesArray(marksArray) {
  return marksArray.map(marks => calculateGrade(marks));
}

console.log(getGradesArray([95, 82, 74, 61, 50]));

//-------------class average-------------------
function classAverage(marksArray) {
  let sum = 0;
  for (let i = 0; i < marksArray.length; i++) {
    sum += marksArray[i];
  }
  return sum / marksArray.length;
}

console.log(classAverage([95, 82, 74, 61, 50])); 


