// Problem 1:
// Create a function that takes two number as input and return true if one
// of them is 15 or their summation is 15
// Example: 1. Input: 5 15 --> Output: true
// 2. Input: 10 5 --> Output: true
// 3. Input: 5 5 --> Output: false


// function Problem_1(num_1, num_2) {

//     let num_3 = num_1 + num_2

//     if (num_1 == 15 || num_2 == 15 || num_3 == 15) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let num_1_in = prompt("Enter the number: ")
// let num_2_in = prompt("Enter the number: ")

// console.log(Problem_1(num_1_in, num_2_in));


// ==========================================================================

// Problem 2:
// Function to check if the given number is a perfect square or not.
// (Search for what is perfect square is.)


// function isInteger(num) {
//     return Number.isInteger(num);
// }

// console.log(isInteger(num = +prompt("Enter the number:")));

// ==========================================================================

// Problem 3:
// You have five variables x1, x2, x3, x4, x5 their values are initially (1, 2, 3,
// 4, 5). One of these variables is replaced with 0. You need to make a
// function that takes these five variables and checks which of them is
// replaced.
// Example: Input: 1, 2, 0, 4, 5 --> Output: 3
// Input: 0, 2, 3, 4, 5 --> Output: 1


// function findZero(num) {

//     for (let i = 0; i < num.length; i++) {
//         if (num[i] == 0) {
//             return i + 1;
//         }
//     }
//     return "Number 0 not found";
// }

// let inX1 = prompt("Enter the number \n You must put a ',' between each number").split(",")


// console.log(findZero(inX1));
