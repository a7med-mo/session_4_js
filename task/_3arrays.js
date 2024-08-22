// Problem 1:
//  Function that takes a number and return the left most digit of it.

// num = prompt("Enter the number")

// console.log(num[0]);


// =================================================================

// Problem 2:
//  Create a program that takes an array count how many positive numbers,
//  negative numbers, even numbers and odd numbers (By same order as
//  written) (0 is not counted as positive or negative but it’s counted as an
//  even number).


// let arr = prompt("Enter the number \n You must put a ',' between each number").split(",");
// let posArr = [];
// let negArr = [];
// let evengArr = [];
// let oddArr = [];

// for (i = 0; i < arr.length; i++){
//     if (arr[i] > 0) {
//         posArr.push(arr[i]);
//     } else if (arr[i] < 0){
//         negArr.push(arr[i]);
//     }
    
//     if (arr[i] % 2 == 0) {
//         evengArr.push(arr[i]);
//     } else {
//         oddArr.push(arr[i]);
//     }
// }
// console.log("Negative numbers:", negArr);
// console.log("Positive numbers:",posArr);
// console.log("Even numbers:",evengArr);
// console.log("Odd numbers:",oddArr);

// =================================================================

// Problem 3:
//  Create a function that take array as an input this array may contains
//  numbers or strings return the array contains only integers.


// function filterNumbersFromPrompt() {
//     let input = prompt("Enter the number \n You must put a ',' between each number");
//     let arr = input.split(',').map(item => {
//         let num = Number(item);
//         return isNaN(num) ? item : num;
//     });

//     return arr.filter(item => {
//         if (typeof item === 'number' && !isNaN(item)) {
//             return true;
//         }
//         return false;
//     });
// }

// console.log(filterNumbersFromPrompt());

// =================================================================

// Problem 4:
//  `Implement slice() function. Function that takes an array and perform the
//  same thing that .slice() do.

// function customSlice(array, start, end) {
//
//     const length = array.length;
//     start = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
//     end = end === undefined ? length : (end < 0 ? Math.max(length + end, 0) : Math.min(end, length));

//
//     const result = [];
//     for (let i = start; i < end; i++) {
//         result.push(array[i]);
//     }
//     return result;
// }

// console.log(customSlice([1, 2, 3, 4, 5], 1, 3));
// console.log(customSlice([1, 2, 3, 4, 5], -3, -1));
// console.log(customSlice([1, 2, 3, 4, 5], 2));

// =====================================================================

// Problem 5:
//  Create a function that takes an array of arrays with numbers. Return a
//  new single array with the largest numbers of each.


// function largestNumbers(arrays) {
//     return arrays.map(subArray => Math.max(...subArray));
// }

// console.log(largestNumbers([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log(largestNumbers([[10, 20, 30], [15, 25, 35], [5, 15, 25]]));

// ==========================================================================

// Problem 6:
//  Given a string S. Print the origin string if it’s not too long otherwise, print
//  special abbreviation.
//  Note: The string is called too long, if its length is strictly more than 10
//  characters. If the string is too long then you have to print the string in the
//  following manner:
//      • Print the first character in the string.
//      • Print number of characters between the first and the last characters
//      • Print the last character in the string


// function abbreviateString(S) {
//     if (S.length > 10) {
//         const abbreviation = S[0] + (S.length - 2) + S[S.length - 1];
//         console.log(abbreviation);
//     } else {
//         console.log(S);
//     }
// }

// abbreviateString("hi ahmed mohammed ali mohammed");
// abbreviateString("hi ahmed");

// ==============================================================================

// Problem 7:
//  Function takes a string consisting of 4 characters determine if S consists of
//  exactly two kinds of characters. Check if the string has exactly two
//  different characters in which each of them appear two times in the string.
//  Example 1:
//      Input: ASSA
//      Output: True
//  Example 2:
//      Input: STTO
//      Output: False
//  Example 3:
//      Input: FFEE
//      Output: True


// function hasTwoKindsOfCharacters(S) {
//     if (S.length !== 4) {
//         return false;
//     }

//     const charCount = {};


//     for (let char of S) {
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }
//     const counts = Object.values(charCount);
//     return counts.length === 2 && counts.every(count => count === 2);
// }

// console.log(hasTwoKindsOfCharacters("ASSA"));
// console.log(hasTwoKindsOfCharacters("STTO"));
// console.log(hasTwoKindsOfCharacters("FFEE"));

// ===========================================================================

// Problem 8:
//  You will be given the final shape of an X O game you need to define which
//  of the players win (x or o).

//              👌👌👇👇👇
// https://github.com/a7med-mo/X-O.git

// ===========================================================================

// Problem 9:
// Create a function that takes an array and a character that returns the first
// and the last index of this character.


// function findFirstLastIndices(arr, char) {
//     let firstIndex = -1;
//     let lastIndex = -1;
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === char) {
//             if (firstIndex === -1) {
//                 firstIndex = i;
//             }
//             lastIndex = i;
//         }
//     }
    
//     return [firstIndex, lastIndex];
// }

// console.log(findFirstLastIndices(['h', 'e', 'l', 'l', 'o'], 'l'));
// console.log(findFirstLastIndices(['c', 'i', 'r', 'c', 'u', 'm', 'l', 'o', 'c', 'u', 't', 'i', 'o', 'n', 'n', 'n'], 'c'));


// ===============================================================================

// Problem 10:
// Function gets an array and a number check if this number can be 
// obtained by adding some consecutive elements in this array.

// function canSumConsecutive(arr, target) {
//     for (let start = 0; start < arr.length; start++) {
//         let sum = 0;
//         for (let end = start; end < arr.length; end++) {
//             sum += arr[end];
//             if (sum === target) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// console.log(canSumConsecutive([1, 2, 3, 4, 5], 7));
// console.log(canSumConsecutive([1, 2, 3, 4, 5], 10));
