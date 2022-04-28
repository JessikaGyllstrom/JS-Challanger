// Check if value is present in Set
// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set
function checkIfValuePresent (set, val) {
    for(let key of set) {
        console.log(key);
        if(set.has(val)) {
            return true;
        } else {
            return false;
        }
    } 
}
console.log(checkIfValuePresent(new Set([1, 2, 3]), 2)); //true
console.log(checkIfValuePresent(new Set([123]), 2)); //false
console.log(checkIfValuePresent(new Set(['1', '2', '3']), '2'));//true

// Convert a Set to Array
// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array
const convertSetToArray = (set) => Array.from(set);
console.log(convertSetToArray(new Set([1, 2, 3])));// [1, 2, 3]
console.log(convertSetToArray(new Set('123'))); // [1, 2, 3]

// Get union of two sets
// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code
function uniteSets (a, b)  {
    const union = new Set(a);
    for (const elem of b) {
        union.add(elem);
    }
    return union;
}
console.log(uniteSets(new Set('123'), new Set('234'))); // { '1', '2', '3', '4' }

console.log(uniteSets(new Set([false, false, NaN]), new Set([true, true, NaN]))); // { false, NaN, true }