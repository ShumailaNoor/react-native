//--> Create a Person class with name and age, and a method introduce().
console.log("\n");

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduction (){
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

let person = new Person("Shumaila", 23);
person.introduction();

//--> Create a Student class that inherits from Person and adds grade. Override the introduce() method.
console.log("\n");

class Student extends Person {
    constructor(name, age, grades){
        super(name, age);
        this.grades = grades;
    }
    introduction (){
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grades: ${this.grades}`);
    }
}
let std = new Student("Shumaila", 23, 3.66);
std.introduction();

//--> Make a Shape class with area() method (default returns 0). Extend it into Circle and Rectangle classes with correct area() implementations.
console.log("\n");
class Shape {
    area(){
        return 0;
    }
}

class Rectangle extends Shape{
    area(a,b){
        const area = a*b;
        return area;
    }
}

class Circle extends Shape{
    area(r){
        const area = 3.14 * (r**2);
        return area;
    }
}
let areaOfRect = new Rectangle();
console.log(`Area of Rectangle: ${areaOfRect.area(2,3)}`);
console.log("---------------------")
let areaOfCircle = new Circle();
console.log(`Area of Circle: ${areaOfCircle.area(5)}`);

//--> Create a BankAccount class with deposit() and withdraw() methods. Extend it to SavingsAccount with interestRate and method addInterest().
console.log("\n");
class BankAccount{
    constructor(balance = 0){
        this.balance = balance;
    }
    deposit(amount){
            this.balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.balance}`);

    }
    withdraw(amount){
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
            } else {
                console.log("Insufficient funds.");
            }
    }
}

class SavingAccount extends BankAccount{
    constructor(balance = 0, interestRate = 0.01){
        super(balance);
        this.interestRate = interestRate;
    }
    addInterest(){
        const interest = this.balance * this.interestRate;
        console.log(`Interest added: $${interest}.`);
        this.deposit(interest); 
    }
}

const myAcct = new BankAccount(100);
myAcct.deposit(50);
myAcct.withdraw(20);
console.log("------------------------------------")
const savingAcct = new SavingAccount(500, 0.02); 
savingAcct.addInterest();