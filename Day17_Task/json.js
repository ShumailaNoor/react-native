//--> Convert a JavaScript object to JSON string using JSON.stringify().
console.log("\n");
let person = {
    name: "John",
    age: 20,
    city: "xyz",
    hobbies: ["reading", "swimming", "coding"]
}

let jsonString = JSON.stringify(person);
console.log(jsonString);
console.log(typeof jsonString);

//--> Convert a JSON string to a JavaScript object using JSON.parse().
console.log("\n");

let jsonString2 = '{"name": "John", "age": 20, "city": "xyz", "hobbies": ["reading", "swimming", "coding"]}'

let jsObject = JSON.parse(jsonString2);
console.log("Name: ", jsObject.name);
console.log("Age: ", jsObject.age);
console.log("City: ", jsObject.city);
console.log("Hobbies: ", jsObject.hobbies);

//--> Create a function that takes a JSON string of user data and prints each user's name.
console.log("\n");
function processUserData(jsonString) {
    try {
        let users = JSON.parse(jsonString);
    
            for (let i = 0; i < users.length; i++){
                console.log(`Name of User${i+1}: ${users[i].name}`);
            }
    } catch (error) {
        console.error(error.message);
    }
}

let usersJson = '[{"name":"John","age":25},{"name":"Alice","age":30},{"name":"Sara","age":22}]';
processUserData(usersJson);



