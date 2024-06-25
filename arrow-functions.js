/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
//function addTwoNumbers(a, b) {
    // Code block
    //return a + b;
    //}
//let sum = addTwoNumbers(3, 5);
//console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    // Code block
    return a + b;
    }
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
//const addTwoNumbers2 = (a, b) => a + b;
const addTwoNumbers1 = (a, b) => (a + b);
let sum1 = addTwoNumbers1(4, 6);
console.log(sum1);

