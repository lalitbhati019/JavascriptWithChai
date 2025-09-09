// test.js

// Variables
let name = "Lalit";
const age = 21;

// Function
function greet(user, years) {
    return `Hello ${user}, you are ${years} years old!`;
}

// Array
let numbers = [1, 2, 3, 4, 5];

// Loop
for (let num of numbers) {
    console.log(`Number: ${num}`);
}

// Function call
console.log(greet(name, age));

// Arrow function
const square = (n) => n * n;
console.log(`Square of 5 is: ${square(5)}`);
