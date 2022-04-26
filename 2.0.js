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

