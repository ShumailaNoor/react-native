let str = "Hello";  
console.log(typeof str);

let num = 1.5;
console.log(typeof num);  

let bool = true; 
console.log(typeof bool);

let undef;   
console.log(typeof undef);

let empty = null;   
console.log(typeof empty);// object (bug in JS)

let sym = Symbol("id"); 
console.log(typeof sym);

let big = 123456789012345678901234567890n; 
console.log(typeof big); 