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


