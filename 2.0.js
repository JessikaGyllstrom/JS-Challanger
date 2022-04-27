// Get nth element of array
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
function getNthElement (a, n) {
    let result = a[n-1];
    return result;
}
console.log(getNthElement([1,2,3,4,5],3));//3
console.log(getNthElement([10,9,8,7,6],5));//6
console.log(getNthElement([7,2,1,6,3],1));//7

// Remove first n elements of an array
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
function removeElements (a) {
    let length = a.length+1;
    let newArr = a.slice(3,length); 
    return newArr;
}
console.log(removeElements([1,2,3,4]));//4
console.log(removeElements([5,4,3,2,1,0]));//2,1,0
console.log(removeElements([99,1,1]));//" "

// Get last n elements of an array
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array
function lastThreeElements (a) {
    let end = a.length;
    let start = a.length - 3;
    let newArr = a.slice(start,end); 
    return newArr;
}
console.log(lastThreeElements([1,2,3,4]));//2, 3, 4
console.log(lastThreeElements([5,4,3,2,1,0]));//2, 1, 9

// Get first n elements of an array
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
function getFirstElements (a) {
    let newArr = a.slice(0,3); 
    return newArr;
}
console.log(getFirstElements([1,2,3,4]));//1, 2, 3
console.log(getFirstElements([5,4,3,2,1,0]));//5, 4, 3

// Return last n array elements
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
function lastElements (a, n) {
    let start = a.length - n;
    let newArr = a.slice(start,a.length); 
    return newArr;
}
console.log(lastElements([1, 2, 3, 4, 5], 2));//4, 5
console.log(lastElements([1, 2, 3], 6));//1, 2, 3

// Remove a specific array element
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
function removeEl (a, n) {
    for( var i = 0; i < a.length; i++){ 
        if ( a[i] === n) { 
            a.splice(i, 1); 
        }
    }
    return a;
}
console.log(removeEl([1,2,3], 2));//1, 3
console.log(removeEl([1,2,"2"], "2"));//1, 2

// Count number of elements in JavaScript array
// Write a function that takes an array (a) as argument
// Return the number of elements in a
let elementCount = (a) => a.length;
console.log(elementCount([1,2,2,4]));

// Count number of negative values in array
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function negativeCounter (a) {
    counter = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] < 0) {
            counter++;
        }
    }
    return counter;
}
console.log(negativeCounter([1,-2,2,-4]));//2

// Sort an array of numbers in descending order
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
let arraySorter = (a) => a.sort();
console.log(arraySorter([1,3,2])); //1, 2, 3
console.log(arraySorter([4,2,3,1])); //1, 2, 3, 4

// Sort an array of strings alphabetically
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
let alphaSorter = (a) => a.sort();
console.log(alphaSorter(['b', 'c', 'd', 'a'])); //a, b, c, d

// Return the average of an array of numbers
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function getAverage (a) {
    let result = 0;
    let sum = 0;
    for(let i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum / a.length;
} 
console.log(getAverage(([10,100,40]))); //50
console.log(getAverage([10,100,1000])); //370

// Return the longest string from an array of strings
// Write a function that takes an array of strings as argument
// Return the longest string
function longestString (a) {
    console.log(a);
    if(a[0] > [1]) {
        return a[0];
    } else {
        return a[1];
    }
} 
console.log(longestString(['help', 'me'])); //helt

// Check if all array elements are equal
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
function checkEqual (a) {
    var first = a[0];
    for (let i = 1; i < a.length; i++) {
      if (first !== a[i]) {
        return false;
      }
    }
    return true;
}
console.log(checkEqual(([true, true, true, true])));//true
console.log(checkEqual(([1,1,1,2])));//false

// Merge an arbitrary number of arrays
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
const mergeArrays = (...arrays) => newData = [].concat(...arrays);
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(['a', 'b', 'c'], [4, 5, 6]));
console.log(mergeArrays([true, true], [1, 2], ['a', 'b']));






