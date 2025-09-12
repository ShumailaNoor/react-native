let a = 10;
function test() {
  let a = 20;
  console.log(a);
}
test();
console.log(a);
// Expected Output:  
//  20
//  10                
// Reason: fisrt a is global variable and inside the function as both a are accessible so a is again declared and intialized. But outside the function only global a's value print as scope of 2nd a is finished with end of function.

{
  var x = 10;
}
console.log(x);

{
  let y = 20;
}
console.log(y);

// Explanation:
// var x does not cause error because var can escape from {} e.g it is function scoped, not accessible from outside when inside the function.
// let y causes error as let can't escape. Due to its block scope. And can be accessed outside the block.