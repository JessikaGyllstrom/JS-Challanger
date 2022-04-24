// Sum two numbers
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
function addingTwoNums (a, b) {
    let sum = a + b;
    return sum;
}
console.log(addingTwoNums(5, 25)); // 30

// Comparison operators, strict equality
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
function comparisonOp (a, b) {
    if(a===b) {
        return true;
    } else {
        return false;
    }
}
console.log(comparisonOp(5, 10)); //false
console.log(comparisonOp(5, '5')); //false
console.log(comparisonOp(5, 5)); //true
console.log(comparisonOp("A", "B")); //false

// Get type of value
// Write a function that takes a value as argument
// Return the type of the value
function typeOfValue (a) {
    let type = typeof (a);
    return type
}
let sym = Symbol();
let x = false;
console.log(typeOfValue(5)); //number
console.log(typeOfValue("5")); //string
console.log(typeOfValue(x)); //boolean

// Get nth character of string
// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function nthChar (a, b) {
    let charPlace = b; 
    let char = a[charPlace-1];
    return char;
}
console.log(nthChar("Konbanwa", 2)); // o
console.log(nthChar("Ohayō", 4)); // y

// Remove first 3 characters of string
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function removeThreeChars (a) {
    let string = a.slice(0,3);
    return string;
}
removeThreeChars("Helloo"); //loo 
removeThreeChars("Sloth"); //th

// Get last n characters of string
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function lastChar (a) {
    let str = a.slice(-3);
    return str;
}
console.log(lastChar("Meerkat")); //kat
console.log(lastChar("abcdefghijklmnopqrstu")); //stu

// Extract first half of string
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function halfString (a) {
    let half = a.length/2;
    let myStr = a.slice(0,half);
    return myStr;
} 
console.log(halfString("ABCDEF")); //ABC
console.log(halfString("KhalDrogo")); //Khal

// Remove last n characters of string
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function removeChars (a) {
    let lastChar = a.length;
    let thirdLastChar = lastChar - 3;
    let newStr = a.slice(0, thirdLastChar);
    return newStr;
}
console.log(removeChars("Hellooo")); //hell
console.log(removeChars("Foobar")); //foo

// Return the percentage of a number
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
function percentage (a, b) {
    return (a/100) * b;
}
console.log(percentage(100, 50)); // 50
console.log(percentage(10, 1)); // 0.1