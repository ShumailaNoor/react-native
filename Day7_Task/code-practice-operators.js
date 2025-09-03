//--> Write a program to swap two numbers using arithmetic operators (+, -).
console.log("-----------Swap of two numbers-----------");

let a = 5;
let b = 10;

console.log("Before Swap a =", a, ", b =", b);
a = a + b;
b = a - b;
a = a - b;

console.log("After Swap a =", a, ", b =", b);


//--> Take input of two numbers and show results of all operators (+, -, , /, %, *).
console.log("\n-----------Arithmatic Operation of two numbers-----------");

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Enter first number: ", function(number1){
    const num1 = Number(number1);
  rl.question("Enter second number: ", function(number2){
    const num2 = Number(number2);
    console.log("Addition (+): ", num1+num2);
    console.log("Subtraction (-): ", num1-num2);
    console.log("Multiplication (*): ", num1*num2);
    console.log("Division (/): ", num1/num2);
    console.log("Modulus (%): ", num1%num2);

    rl.close();
  });
});

//--> Practice comparison operators (>, <, >=, <=, ==, ===, !=).
console.log("\n-----------Comparison Operator-----------");

let x = 10;
let y = "10";

console.log(x == y);   
console.log(x === y);  
console.log(x != y);  
console.log(x > 5);   
console.log(x <= 10); 

//--> Practice logical operators:
console.log("\n-----------Logical Operator-----------");
 let num = 15;

if (num >= 10 && num <= 20) {
  console.log("Number is between 10 and 20");
}

if (num < 5 || num > 50) {
  console.log("Number is less than 5 OR greater than 50");
}

let isEven = num % 2 === 0;
console.log("Is Even:", isEven);
console.log("Is Odd:", !isEven);


//--> Practice assignment operators (+=, -=, *=, /=, %=).
console.log("\n-----------Assignment Operator-----------");

let s = 10;

s += 5;  // 15
s -= 3;  // 12
s *= 2;  // 24
s /= 4;  // 6
s %= 5;  // 1

