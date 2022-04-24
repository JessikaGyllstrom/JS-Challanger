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
console.log(nthChar("Konbanwa", 2)); // 
console.log(nthChar("Ohayō", 4)); // 


