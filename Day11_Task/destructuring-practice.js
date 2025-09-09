//----------------------Destructuring---------------------------
//--> Destructure an array of names and assign them to variables.
console.log("\n");
const names = ["John", "Doe", "Charlei", "Eden"];
const [name1, name2, name3, name4] = names;
console.log("name1: " + name1);
console.log("name2: " + name2);
console.log("name3: " + name3);
console.log("name4: " + name4);

//--> Destructure an object with name, age, and city.
console.log("\n");
let person = {
    name: "shumaila",
    age: 23,
    city: "fsd"
};
let {name, age, city} = person;
console.log("Name: ", name);
console.log("Age: ", age);
console.log("City: ", city);

//--> Destructure a nested object and extract a deep property.
console.log("\n");
let user = {
    id: 1,
    details: {
    username: "shumaila_noor",
    email: "noorshumaila97@gmail.com",
    education: {
        degree: "Bachelors",
        program: "Software Engineering",
        gpa: 3.66,
    }
  }
};
const {details: {username}, 
            details: {email}, 
            details: {education: {degree}}, 
            details: {education: {program}}, 
            details: {education: {gpa}},} = user;
console.log("Username: ", username);
console.log("Email: ", email);
console.log("Degree: ", degree);
console.log("Program: ", program);
console.log("GPA: ", gpa);

//--> Use default values in destructuring (e.g., age = 25 if not provided).
console.log("\n");
const student = {
    name: "Shumaila"
};
const {name: stdName, age: stdAge = 23} = student;
console.log("Name: " , stdName);
console.log("Age: " ,stdAge);

//--> Destructure function parameters in a function that takes an object.
console.log("\n");
function printUser({ name, age, city }) {
  console.log(name, "is", age, "years old and lives in", city);
}
printUser({ name: "Sarah", age: 22, city: "Lahore" });


