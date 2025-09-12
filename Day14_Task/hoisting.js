console.log(_a);
var _a = 5;
// expected Output:
// undefined
// Reason: As i told before var can be hoisted e.g can be used before the line where it is physically declared and initiallized but its value is undefined as var is only declaration hoisted.

greet();
function greet() {
  console.log("Hello!");
}
// Expected Output:
// Hello
// Explanation: function are completely hoisted e.g can be used and initialized before the block where its declared.

greet2(); 
var greet2 = function() {
  console.log("Hi!");
};
// Reason of Failure: greet2 is a variable declared with var. Only the declaration is hoisted not the initiallization.So before the assignment, greet2 is undefined.