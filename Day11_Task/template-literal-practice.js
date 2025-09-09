//-------------------------Template Literal---------------------
//--> Create a string that includes variables for name and age.
console.log("\n");
const name = "Shumaila";
const age = "23";
const city = "FSD";
console.log(`My name is ${name}. My age is ${age}. I live in ${city}.`);

//--> Create a multiline string using backticks..
console.log("\n");
const poem = `
A feathering of smoke won’t reach
the jacarandas above, whose cool fronds

darken the surface of the pond by my feet.
The water’s edge has no creases—a perfect image;

its imperfect object—a reflection sharpened
by the shade increases the resolution, the depth,
`;
console.log(poem);

//--> Combine expressions and variables inside a template literal.
console.log("\n");
const num1 = 10, num2 = 20;
const result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
console.log(result);

//--> Use a template literal to generate HTML (e.g., a card or list item).
console.log("\n");
const title = "Student Dashboard";
const studentCard = `
  <div class="card">
    <h2>${title}</h2>
    <p>Name: ${name}</p>
    <p>Age: ${age}</p>
  </div>
`;
console.log(studentCard);

//--> (Optional) Create a tagged template function that transforms a string.
console.log("\n");

