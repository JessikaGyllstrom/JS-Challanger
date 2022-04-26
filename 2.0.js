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
