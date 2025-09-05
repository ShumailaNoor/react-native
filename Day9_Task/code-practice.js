//-->Write a function to calculate the square of a number.
console.log("\nQ1-----------Square---------");

function square(num){
    const sqr = num **2;
    return sqr;
}

const sqrNumber = square(4);
console.log("Square of 4: ", sqrNumber);


//-->Write a function that takesn two numbers and returns the larger one.
console.log("\nQ2-----------Largest Number---------");

function largestNumber(number1, number2){
    console.log("Number1: ", number1, " Number2: ", number2);
    if (number1 > number2)
    {
        return number1;
    }
    else
    {
        return number2;
    }
}
const largestNum = largestNumber(23, 78);
console.log("Largest Number is: ", largestNum);


//-->Write an arrow function that takes a string and returns it in uppercase.
console.log("\nQ3-----------Arrow function that return UPPERCASE---------");

let upperCase = (originalString) => {
    let upperCaseString = originalString.toUpperCase();
    return upperCaseString;
}
let convertUpperCase = upperCase("hello, how are You?");
console.log("Orginal string-> hello  \nConverted to UpperCase->", convertUpperCase);


//-->Write a function that takes an array of numbers and returns the sum.
console.log("\nQ4-----------Sum of array---------");

function sumOfArray(numbersArray){
  let sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}
return sum;
}
let numArray = [3,4,5,6,7,2];
let sum = sumOfArray(numArray);
console.log("Array of number: [3,4,5,6,7,2]: ", sum);


//-->Write a function with a default parameter that greets the user.
console.log("\nQ5-----------Default Parameter---------");
function greet(name = "Guest") {
  console.log("Hello, ", name );
}
greet("Shumaila"); 
greet(); 


//-->Write a function that checks if a number is even or odd.
console.log("\nQ6-----------Even or Odd---------");
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is Even");
  } else {
    console.log(number + " is Odd");
  }
}

checkEvenOdd(10); 
checkEvenOdd(7);  

//-->Write a function that takes another function as a parameter and executes it.
console.log("\nQ7---------Another Function-----------");
function executeFunction(callback) {
  callback();
}

function callbackFunction() {
  console.log("Callback Function");
}

executeFunction(callbackFunction);
