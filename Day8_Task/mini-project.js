const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let againAnswer;

do{
rl.question("Enter  a number: ", function(numInput){
    let number = Number(numInput);
    console.log("\nMultiplication Table of ", number);
    for (let i = 1; i<=10; i++){
        console.log(number," X ", i, " = ", number*i);
    }

    let count = 0;
    let x = 1;
    while(x<=100){
        if(x % number === 0){
            count++;
        }
        x++;
    }
    console.log("\nNumbers divisible by 5 between 1–100: ", count);
rl.question("Do you want to try again? (yes/no)? ", function(again){
    againAnswer = again;
    rl.close();
  });    
});

}
while(againAnswer === "yes");