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

// Creating Javascript Sets
// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result
function createSet (a, b, c) {
    let myset = new Set();
    for (var i = 0, j = arguments.length; i < j; i++){
        myset.add(arguments[i]);
        console.log(arguments[i]+' ');
    }
    return myset;
}
console.log(createSet(1, 'b', 3)); // { 1, 'b', 3 }
console.log(createSet(NaN, null, false)); //  { NaN, null, false }

// Delete element from Set
// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result
function deleteSetElement (set, val) {
    for (const elem of set) {
        if(elem == val) {
            set.delete(val);
        }
    }
    return set;
}
console.log(deleteSetElement(new Set([1, 2, 3]), 1)); // { 2, 3 }
console.log(deleteSetElement(new Set('12345'), '3')); // { '1', '2', '4', '5' }

// Add multiple elements to Set
// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set
function addValuesToSet (set, arr) {
    for(let i = 0; i < arr.length; i ++) {
        set.add(arr[i]);
    }
    return set;
}
console.log(addValuesToSet(new Set([1, 2, 3]), [4, 5, 6])); // { 1, 2, 3, 4, 5, 6 }
console.log(addValuesToSet(new Set('12345'), [...'6789'])); // { 1, 2, 3, 4, 5, 6 }
console.log(addValuesToSet(new Set([1, 2, 3]), [2, 3])); // { 1, 2, 3 }

// Get Intersection of two Javascript Sets
// Write a function that takes two sets (a and b) as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in a as well as b
function intersectionSet (a, b) {
    let arrayA = Array.from(a);
    let arrayB = Array.from(b);
    const combinedArr = arrayA.concat(arrayB);
    const set = new Set(combinedArr);
    const duplicates = combinedArr.filter(item => {
        if (set.has(item)) {
            set.delete(item);
        } else {
            set.add(item);
        }
    });
    return set;
}
console.log(intersectionSet(new Set([1, 2, 3]), new Set([4, 5, 6]))); // {}
console.log(intersectionSet(new Set('12345'), new Set([...'45678']))); // { '4', '5' }
console.log(intersectionSet(new Set([1, 2, 3]), new Set([2, 3, 4]))); // { 2, 3 }
