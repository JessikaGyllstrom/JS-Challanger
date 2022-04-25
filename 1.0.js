// Sum two numbers
// Write a function that takes two numbers (a and b) as argument
// Sum a and b

const { loadDefaultErrorComponents } = require("next/dist/server/load-components");

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
console.log(nthChar("Konbanwa", 2)); // o
console.log(nthChar("Ohayō", 4)); // y

// Remove first 3 characters of string
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function removeThreeChars (a) {
    let string = a.slice(0,3);
    return string;
}
removeThreeChars("Helloo"); //loo 
removeThreeChars("Sloth"); //th

// Get last n characters of string
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function lastChar (a) {
    let str = a.slice(-3);
    return str;
}
console.log(lastChar("Meerkat")); //kat
console.log(lastChar("abcdefghijklmnopqrstu")); //stu

// Extract first half of string
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function halfString (a) {
    let half = a.length/2;
    let myStr = a.slice(0,half);
    return myStr;
} 
console.log(halfString("ABCDEF")); //ABC
console.log(halfString("KhalDrogo")); //Khal

// Remove last n characters of string
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function removeChars (a) {
    let lastChar = a.length;
    let thirdLastChar = lastChar - 3;
    let newStr = a.slice(0, thirdLastChar);
    return newStr;
}
console.log(removeChars("Hellooo")); //hell
console.log(removeChars("Foobar")); //foo

// Return the percentage of a number
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
function percentage (a, b) {
    return (a/100) * b;
}
console.log(percentage(100, 50)); // 50
console.log(percentage(10, 1)); // 0.1

// Basic JavaScript math operators
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
function mathOps (a, b, c, d, e, f) {
    let numb = (a + b - c ) * d / e;
    let result = Math.pow(numb, f);
    return result;
}
console.log(mathOps(6,5,4,3,2,1)); //10.5
console.log(mathOps(6,2,1,4,2,3)); //2744

// Check if a number is even
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
function checkIfEven (a) {
    if (a%2==0) {
        return true;
    } else {
        return false;
    }
}
console.log(checkIfEven(5)); //false
console.log(checkIfEven(2)); //true

// How many times does a character occur?
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function checkCharOcc (a, b) {
    let numOfTimes = 0;
    for(i = 0; i < b.length; i++) {
        if(a==b[i]) {
            numOfTimes ++;
        }
    }
    return numOfTimes;
}
console.log(checkCharOcc('h', 'how many times does the character occur in this sentence?')); //4 
console.log(checkCharOcc('m', 'how many times does the character occur in this sentence?')); //2

// Check if a number is a whole number
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function checkIfInteger (a) {
    if(Number.isInteger(a)==true) {
        return true;
    } else {
        return false;
    }
}
console.log(checkIfInteger(3)); // true
console.log(checkIfInteger(1.3)); // false

// Multiplication, division, and comparison operators
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function mathNess (a, b) {
    let number = 0;
    if(a < b) {
        number = a / b;
    } else {
        number = a * b;
    }
    return number;
}
console.log(mathNess(10, 100)); // 0.1
console.log(mathNess(90, 45)); // 4050

// Check whether a string contains another string and concatenate
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
function stringConcat (a, b) {
    let result = "";
    if(a.includes(b)) {
        result = b.concat(a);
    } else {
        result = a.concat(b);
    }
    return result;
}
console.log(stringConcat ("cheese", "cake")); //cheesecake
console.log(stringConcat ("lips", "s")); //slips
console.log(stringConcat(' think, therefore I am', 'I')); //I think, therefore I am

// Round a number to 2 decimal places
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function roundedNum (a) {
    let number = 0;
    number = Math.round(a * 100) / 100;
    return number;
}
console.log(roundedNum(2.12397));
console.log(roundedNum(26.1379));

// Split a number into its digits
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
function numSplit (a) {
    let str = a.toString();
    str = str.split("");
    return str;
}
console.log(numSplit(10)); // [ '1', '0' ]
console.log(numSplit(931)); // [ '9', '3' ,'1']

// Clear up the chaos behind these strings
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together 
// such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
function sortString (a, b) {
    let firstWord = a;
    let secondWord = "";
    firstWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
    firstWord = firstWord.replace(/%/g, "");
    for (let i = b.length - 1; i >= 0; i--) {
        secondWord += b[i];
    }
    secondWord = secondWord.replace(/%/g, "");
    return firstWord + ", " + secondWord; 
}
console.log(sortString('java', 'tpi%rcs'));
console.log(sortString('c%ountry', 'edis'));


