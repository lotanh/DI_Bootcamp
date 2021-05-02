// Exercise 1 : Find Nemo

// let userString = prompt('give a sentence containing the word Nemo')
// let lowerUser = userString.toLowerCase()
// console.log(lowerUser)
// console.log(lowerUser.indexOf('nemo'))
// if (lowerUser.indexOf('nemo') == false) {
//     alert('I can’t find Nemo')
// }else {
//     alert(`I found Nemo at ${lowerUser.indexOf('nemo')}`)
// }

// Exercise 3 : Ask For Numbers

// let userStr = prompt('enter a string of numbers separated by commas')
// let userInt = sumNumbers(userStr)
// console.log(userInt)
// function sumNumbers(str) {
//     let sum = str.reduce(function(total, num){
//         return parseFloat(total) + parseFloat(num);
//     });
//     return sum;
// }

// Exercise 4 : Boom

userStr = prompt('enter a number')


if (userStr <   2) {
    console.log('boom')
}
else if (userStr  >   2) {
    console.log("b" + (userStr.length * "o") + "m")
}
else if (userStr % 2 === 0) {
    newString = "b" + (userStr.length * "o") + "m" + "!"
    console.log(newString)
}
else if (userStr % 5 === 0) {
    upperStr = newString.toUpperCase()
    console.log(upperStr)
}
else if (userStr % 2 === 0 && userStr % 5 === 0) {
    console.log(upperStr + "!")
}