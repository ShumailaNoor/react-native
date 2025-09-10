//--> Merge two arrays using the spread operator.
console.log("\n");
const arr1 = [1,2];
const arr2 = [3,4];
const mergedArray = [...arr1, ...arr2];
console.log("Array 1: ", arr1);
console.log("Array 2: ", arr2);
console.log("Merged Array: ", mergedArray);

//--> Create a shallow copy of an object using the spread operator.
console.log("\n");
const originalObj = {a: 1, b: 2, c:3};
const shallowCopy = {...originalObj};
console.log("Shallow Copy of Object: ", shallowCopy);

//--> Create a function that takes any number of numeric arguments and returns their sum.
console.log("\n");
function sum(...numbers){
    return numbers.reduce((acc, curr) => acc + curr, 0 );
}
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7,8));

//--> Write a function that takes a fixed first argument (a filter function) and any number of values. Return the values that pass the filter.
console.log("\n");
function filterRestFunction(filterFn, ...values){
    return values.filter(filterFn);
}
console.log(filterRestFunction(x => x<5, 1,3,45,4));
console.log(filterRestFunction(word => word.length<5, "Banana", "Apple", "Pear", "Mango"));

//--> Use the ternary operator to return 'Even' or 'Odd' based on an input number.
console.log("\n");
number = 21;
check = number % 2 === 0 ? "Even" : "Odd";
console.log(check);

//--> Return 'Adult' if age is 18 or above, otherwise 'Minor'.
console.log("\n");
age = 16;
ageCheck = age >= 18 ? "Adult" : "Minor";
console.log(ageCheck);

//--> Given a boolean variable isDarkMode, return the background color using ternary ('black' or 'white').
console.log("\n");
isDarkMode = true;
console.log(isDarkMode? "black" : "white");
