// Exercise 1 : Favorite Color
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.
let me = ["my","favorite","color","is","blue"]
let fav = me.join(" ")
console.log(fav)

// Exercise 2 : Mixup
// Create 2 variables. The values should be strings. For example:
// let str1 = "mix" let str2 = "pod"
// Slice out and swap the first 2 characters of the 2 strings from part 1.
// Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
// Finally console.log the new concatenated string.
let x = "mix"
let y = "pod"
let z = x.slice(0, 2) + " " + y.slice(0, 2)
console.log(z)

// Exercise 3 : Calculator
// Make a Calculator. Follow the instructions:
// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!
num1 = prompt('Enter a number')
num2 = prompt('Another one')
alert(num1 + num2)
