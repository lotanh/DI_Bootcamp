

// let users = ['eli', 'adam' , 'ziv', 'abby', 'josh']

// const newArr = users.map(name => {
//     return name + '@gmail.com'
// })
// console.log(newArr)

/* Exercise
* Create an function that get an array of Numbers as input
* and return a new array with all numbers greater than 3
* For example:
* Give this array [0,1,1,2,3,5,8]
* result [5,8]
*/

// const greater = (array) => {
//     var newArr = []
//    for (let i = 0; i < array.length; i++) {
//        if (array[i] > 3) {
//         newArr.push(array[i])
//        } 
//    }
//    return newArr
// }
// console.log(greater([0,1,1,2,3,5,8]))

// get all names that start with Sa / contain Sa

// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// var newArr = []
// const filterDragons = dragons.filter(item => {

// })
// let employees = [
//     {
//         firstName: 'John',
//         lastName: 'Doe',
//         age: 27,
//         joinedDate: 'December 15, 2017'
//     },

//     {
//         firstName: 'Ana',
//         lastName: 'Rosy',
//         age: 25,
//         joinedDate: 'January 15, 2019'
//     },

//     {
//         firstName: 'Zion',
//         lastName: 'Albert',
//         age: 30,
//         joinedDate: 'February 15, 2011'
//     }
// ];

// const filterEmp = employees.filter(employee => {
//     return employee.age > 26
// })
// console.log(filterEmp)

/* Exercise
* Create an function that get an array of Numbers as input
* and return the sum of all numbers
* For example:
* Give this array [2, 5, 10,100]
* result 117
*/

// const sumArr = (arr) => {
//     var sum = 0 
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(sumArr([2, 5, 10,100]))

// let account = [{dolars:2}, {dolars:5}, {dolars:10},{dolars:100}];
// 1. add the input values to an array in every click on a button
// 2. console log the array in every click.
// 3. create a function that get this array as an argument, loop this array and display the values
// on your webpage.
const btn = document.getElementById('btn')
const input = document.getElementById('input-box')
const bigDiv = document.getElementById('box')
let arr = []

btn.addEventListener('click', ()=>{
    arr.push(input.value)
    console.log(arr)
    option2()
})
console.log(arr)
var newDiv
// const display = () => {
//     for (let i = 0; i < arr.length; i++) {
//         newDiv = document.createElement('div')
//         newDiv.classList.add(i)
//         newDiv.innerHTML = arr[i]
//         bigDiv.appendChild(newDiv)
//     }
// }
const option2 = arr.forEach(item => {
    newDiv = document.createElement('div')
    newDiv.classList.add(i)
    newDiv.innerHTML = arr[i]
    bigDiv.appendChild(newDiv)
    item++
});
