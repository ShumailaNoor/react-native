const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your name: ", function (name) {
  rl.question("Enter your age: ", function (ageInput) {
    const age = Number(ageInput);

    rl.question("Are you an intern?", function (isInternInput) {
      const isIntern = isInternInput.toLowerCase() === "yes";

      const intern = {
        name: name,
        age: age,
        isIntern: isIntern,
      };

      console.log("\n-------- Intern Info Card ---------");
      console.log("Name:", intern.name);
      console.log("Age:", intern.age);
      console.log("Is Intern:", intern.isIntern);
      console.log("-------------------------");

      if (isNaN(age)) {
        console.log("Age must be a number");
      }

      if (!isIntern) {
        console.log("This person is not an intern.");
      }

      rl.close();
    });
  });
});
