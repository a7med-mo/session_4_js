// Problem 1:
// Make a function that accepts one string and return it reversed.

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

// ==================================================================

// Problem 2:
// Function that accepts two string and check if they are equal or not (not 
// case sensitive)

function areStringsEqualIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(areStringsEqualIgnoreCase("Eraa", "eraa"));  
console.log(areStringsEqualIgnoreCase("Mohamed", "Moamen")); 

// ===================================================================

// Problem 3:
// Function that takes a string and check if this string is all uppercase or not.

function isAllUppercase(str) {
    return str === str.toUpperCase();
}

console.log(isAllUppercase("HELLO"));
console.log(isAllUppercase("Hello"));
