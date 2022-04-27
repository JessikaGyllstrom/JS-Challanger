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

// Sort array by object property
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
function sortArr (arr) {
    arr.sort((a, b) => (a.b > b.b) ? 1 : -1)
    return arr;
}
console.log(sortArr([{a:2,b:10},{a:5,b:4}]));//[ { a: 5, b: 4 }, { a: 2, b: 10 } ]
console.log(sortArr([{a:1,b:7},{a:2,b:1}]));//[ { a: 2, b: 1 }, { a: 1, b: 7 } ]

// Merge two arrays with duplicate values
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
function mergeTwoArr (a,b) {
     // merge two arrays
    let newArr = a.concat(b);
    let unique = [];
    newArr.forEach((c) => {
        if (!unique.includes(c)) {
        unique.push(c);
        }
    });
    unique.sort((a, b) => a - b);
    return unique;
}
console.log(mergeTwoArr([1, 2, 3], [3, 4, 5]));//  1, 2, 3, 4, 5 
console.log(mergeTwoArr([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); //  -11, -10,   5, 22, 41,  42, 333

// Sum up all array elements with values greater than
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
function sumOfArr (a, b) {
    let newArr = [];
    for(let i = 0; i < a.length; i ++) {
        if(a[i] > b) {
            newArr[i] = a[i];
        } 
    }
    var sum = newArr.reduce(function(a, b) { return a + b; }, 0);
    return sum;
}
console.log(sumOfArr([-10, -11, -3, 1, -4], -3));//1
console.log(sumOfArr([78, 99, 100, 101, 401], 99));//602

// Create a range of numbers
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
function rangeArr (x, y) {
    let newArr = [];
    for(let i = x; i <= y; i++) {
        newArr.push(i);
    }
    const clearArray = newArr.filter(i => i);
    return clearArray;
}
console.log(rangeArr(2, 10)); //  2, 3, 4,  5, 6, 7, 8, 9, 10
console.log(rangeArr(-5, 5)); //  -5, -4, -3, -2, -1, 1,  2,  3,  4,  5

// Group array of strings by first letter
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}
function groupArr (arr) {
let resultObj = {};
for (let i =0; i < arr.length; i++) {
  let currentWord = arr[i];
  let firstChar = currentWord[0].toLowerCase();
  let innerArr = [];
  if (resultObj[firstChar] === undefined) {
    innerArr.push(currentWord);
    resultObj[firstChar] = innerArr
  } else {
    resultObj[firstChar].push(currentWord)
  }
}
return resultObj
}
console.log(groupArr(['Alf', 'Alice', 'Ben'])); //{ a: [ 'Alf', 'Alice' ], b: [ 'Ben' ] }
console.log(groupArr(['Ant', 'Bear', 'Bird'])); //{ a: [ 'Ant' ], b: [ 'Bear', 'Bird' ] }

