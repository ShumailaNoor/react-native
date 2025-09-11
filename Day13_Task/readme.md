# JavaScript Learning Summary – Classes and Inheritance  

## 1. Concept Learning  

### What I Learned Today  
- **Class in JavaScript**: A blueprint for creating objects with properties and methods.  
- **Constructor Method**: Special method for initializing object properties when an instance is created.  
- **Class Methods**: Functions defined inside a class to add behavior.  
- **Inheritance (`extends`)**: Allows one class to inherit properties and methods from another.  
- **super()**: Used in the child class to call the constructor or methods of the parent class.  
- **Method Overriding**: Child class can redefine a parent method to provide a different behavior.  
- **Prototypal vs. Class-Based Inheritance**:  
  - Prototypal uses object prototypes.  
  - Class-based uses `class` and `extends` syntax (syntactic sugar over prototypes).  

---

## 2. Handwritten Notes Questions Covered  
- Syntax of a class in JavaScript.  
- Role of the constructor method.  
- How to create an object from a class.  
- What is inheritance and why it is useful.  
- Purpose of `super()`.  
- Difference between a normal function and a class method.  
- Behavior when two classes have methods with the same name (method overriding).  

---

## 3. Coding Practice Implemented  

### Person and Student Classes  
- **Person** class with `name` and `age`.  
- **Student** extends `Person`, adds `grades`, and overrides `introduction()` method.  

### Shape, Rectangle, and Circle  
- **Shape** class with default `area() = 0`.  
- **Rectangle** and **Circle** classes extend Shape and provide their own `area()` calculations.  

### Bank Account and Savings Account  
- **BankAccount** with `deposit()` and `withdraw()` methods.  
- **SavingsAccount** extends BankAccount, adds `interestRate` and `addInterest()` method.  

### Library Management System (Mini Project)  
- **Book** class with `title`, `author`, and `year`.  
- **EBook** extends Book with `fileSize` and overrides `getDetails()`.  
- **AudioBook** extends Book with `duration` and overrides `getDetails()`.  
- Created multiple objects and stored them in an array, then looped through to display details.  
