// DAY - 2

/*
Problem 1: NPM and Package.json

You're starting a new project and want to manage your project's dependencies using NPM. Explain the purpose of NPM and how it helps in managing packages. Create a simple package.json file for your project, specifying the name, version, and a few dependencies of your choice.

*/

/*
Problem 2: Writing Functions

Write a JavaScript function named calculateCircleArea that takes the radius of a circle as a parameter and returns the area of the circle. You can use the formula area = π * radius^2. Test the function with a few different radii.

*/

function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}

console.log(calculateCircleArea(5));
console.log(calculateCircleArea(10));

/*

Problem 3: Callback Functions

Create a function named performOperation that takes two numbers and a callback function as parameters. The callback function should determine the operation to be performed (addition, subtraction, multiplication, or division) on the two numbers. Call the performOperation function with different numbers and callback functions for each mathematical operation.

*/

function performOperation(num1, num2, callback) {
  return callback(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num2 - num1;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num2 / num1;
}

console.log(performOperation(5, 10, add));
console.log(performOperation(5, 10, subtract));
console.log(performOperation(5, 10, multiply));
console.log(performOperation(5, 10, divide));

/*

Problem 4: Using the 'fs' Module

Write a Node.js program that uses the fs module to read the contents of a text file named "notes.txt" and display them in the console.

*/

const fs = require("fs");

fs.readFile("notes.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});

/*

Problem 5: Using 'os' Module

Create a Node.js program that uses the os module to display the following system information:
●Total memory available (in bytes)
●Free memory available (in bytes)
●Operating system platform
●Number of CPU cores

*/

const os = require("os");

console.log("Total memory available:", os.totalmem());
console.log("Free memory available:", os.freemem());
console.log("Operating system platform:", os.platform());
console.log("Number of CPU cores:", os.cpus().length);

/*

Problem 6: 'lodash' Usage

Use the lodash library to solve the following problem: Given an array of numbers, write a function that returns the sum of all even numbers in the array. Use the _.sumBy function from lodash to achieve this.

*/

const _ = require("lodash");

function sumOfEvenNumbers(num) {
  const evenNumbers = _.filter(num, (n) => n % 2 === 0);
  return _.sumBy(evenNumbers);
}

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
