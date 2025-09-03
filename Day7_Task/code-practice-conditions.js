//-> Write a program to check if a number is even or odd.
console.log("-----------Even or Odd-----------");
let number = 7;

if (number % 2 === 0) {
  console.log(number,"is Even Number");
} 
else {
  console.log(number, "is Odd Number");
}

//--> Write a program to check if a number is positive, negative, or zero.
console.log("\n-----------Positive, Negative or Zero-----------");
let n = -3;

if (n > 0) {
  console.log(n, "is Positive");
} 
else if (n < 0) {
  console.log(n, "is Negative");
} 
else {
  console.log(n, "is Zero");
}

//--> Write a program to find the largest of three numbers.
console.log("\n-----------Largest three number-----------");
let a = 12, b = 25, c = 9;
console.log("a = ", a, " b = ", b, " c = ", c)
if (a > b && a2 > c) {
  console.log("Largest: a =", a);
} else if (b > c) {
  console.log("Largest: b =", b);
} else {
  console.log("Largest: c =", c);
}

//--> Write a program to check if a year is leap year.
console.log("\n-----------Leap Yearr-----------");

let year = 2025;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year, "is a Leap Year");
} else {
  console.log(year, "is NOT a Leap Year");
}


//--> Write a program that takes a student’s marks and prints Grade (A, B, C, Fail) using if...else.
console.log("\n-----------Marks Grading-----------");
let marks = 72;

if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: B");
} else if (marks >= 40) {
  console.log("Grade: C");
} else {
  console.log("Fail");
}

//--> Practice switch statement: Make a simple calculator (+, -, *, /).
console.log("\n-----------Simple Calculator-----------");
let num3 = 10;
let num4 = 5;
let operator = "+"; 

switch (operator) {
  case "+":
    console.log("Result:", num3 + num4);
    break;
  case "-":
    console.log("Result:", num3 - num4);
    break;
  case "*":
    console.log("Result:", num3 * num4);
    break;
  case "/":
    console.log("Result:", num3 / num4);
    break;
  default:
    console.log("Invalid Operator");
}

