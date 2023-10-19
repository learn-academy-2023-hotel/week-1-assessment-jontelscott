// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// if (fruit1.length < fruit2.length){
//     console.log("banana")
// }else{
//     console.log("apple")
// }

// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

var combo = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
var comboLength = combo.length

// console.log(combo.length) MYANSWER
// Expected output: 9

// Pseudo code:

// 1. Create a variable to hold the new version of both arrays
// 2. Use the .concat method to actually combine both arrays
// 3. Use the .length method in order to tell console.log() to return the length of the new variable Combo which is both of the original arrays

// 1) Use concatenation to combine both variables
// 2) Use .length method to length of combined values
// var both = padres1984WorldSeriesRuns + padres1998WorldSeriesRuns
// console.log(both.length)

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
 
var reverse = currentCohort.split('').reverse().join('')
// console.log(reverse) MYANSWER
// Expected output: "3202 NRAEL"

// Pseudo code:

// 1. Identify what methods will be used accomplish task
// 1a. .split will convert the sring to an array. 
// 1b. .reverse will reverse the letters of the string because the are now seen as elements
// 1c. .join will make the values in the array in to a string again
// 2. console.log() the variable reverse to receive output

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
const oddArr = []

// stockExchange.forEach(num => {
//     if(num % 2 !== 0 ){
//         console.log(num) MYANSWER
//     }
// })
// Expected output: 13 5 -5 27

// Pseudo code:
// 1. Use .forEach method to instruct computer to run thru each index of the array
// 2. Pass num as an argument inside of stockExchange variable
// 3. Use conditional statement if to determine if the  passed number is odd by dividing it with the modulo operator
// 3a. Because the conditional statement is checking for odd numbers only to print the even numbers are not inclkuded in the output 