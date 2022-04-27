// Check if two dates are equal
// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
function checkIfDateEqual (a, b) {
    if(a > b) {
        return false;
    } else if(a < b) {
        return false;
    } else {
        return true;
    }
}
console.log(checkIfDateEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));//fasle
console.log(checkIfDateEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));//true

// Return the number of days between two dates
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
function numOfDays (a, b) {
    const oneDay = 24 * 60 * 60 * 1000; 
    const diffDays = Math.round(Math.abs((a - b) / oneDay));
    return diffDays;
}
console.log(numOfDays(new Date('2020-06-11'), new Date('2020-06-01'))); //10
console.log(numOfDays(new Date('2000-01-01'), new Date('2020-06-01'))); //7457

// Check if two dates fall on the exact same day
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
function checkIfSameDay(a, b)   {
    let dayA = a.getDay();
    if(a.getDate() === b.getDate()){
        return true;
    } else {
        return false;
    }
}
console.log(checkIfSameDay(new Date('2000-01-01'), new Date('2020-06-01')));//true
console.log(checkIfSameDay(new Date('2000/01/01'), new Date('2000/01/02')));//false

