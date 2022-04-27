// Check if two dates are equal
// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
function checkIfDateEqual (a, b) {
    if(a > b){
        return false;
    } else if(a < b){
        return false;
    } else {
        return true;
    }
}
console.log(checkIfDateEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));//fasle
console.log(checkIfDateEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));//true