// 
const users = [
  { name: "Shumaila", 
    age: 23, 
    city: "Faisalabad", 
    skills: ["Mobile App", "React Native"] 
},
  { name: "Saira", 
    age: 25, 
    city: "Karachi", 
    skills: ["Python", "R"] 
},
  { name: "Umaira", 
    age: 24, 
    city: "Sialkot", 
    skills: ["Java", "Android"] 
}
];

users.forEach(user => {
  const { name, age, city, skills } = user;

  console.log(`
Name: ${name}
Age: ${age}
City: ${city}
Skills: ${skills.join(", ")}
--------------------------
  `);
});


function printUserCard({ name, age, city, skills }) {
  console.log(`
Name: ${name}
Age: ${age}
City: ${city}
Skills: ${skills.join(", ")}
--------------------------
  `);
}

console.log("New Studnet");
printUserCard({ name: "Ahmad", age: 26, city: "Islamabad", skills: ["C++", "Flutter"] });
