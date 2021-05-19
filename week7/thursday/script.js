/*
* findIntersection function return an array that
* contain the numbers exist in both strings from the array.
* ["1,2,5,6,7", "2,5,7,8,15"] => [2,5,7]
*/

// let arr = ["1,2,5,6,7", "2,5,7,8,15"];
// const findIntersection = (arr) => {
//   let arr1 = arr[0].split(',');   // [1,2,5,6,7]
//   let arr2 = arr[1].split(',');   // [2,5,7,8,15]
//   let ret = arr1.filter( value => {
//     return arr2.includes(value)
//   })
//   return ret;
// }
// console.log(findIntersection(arr));

// const numberStr = [["1,2,5,6,7", "2,5,7,8,15"]]
// const filter = numberStr.filter(numbers => {
//     return numbers[0].startsWith(numbers[1])
// })
// console.log(filter)

const btn = document.getElementById('btn')

let employees = `{
    "status":"ok",
    "employees": [
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 27,
        "joinedDate": "December 15, 2017"
    },

    {
        "firstName": "Ana",
        "lastName": "Rosy",
        "age": 25,
        "joinedDate": "January 15, 2019"
    },

    {
        "firstName": "Zion",
        "lastName": "Albert",
        "age": 30,
        "joinedDate": "February 15, 2011"
    }
]
}`;
var newDiv
const divCreate = (name) => {
    name = document.createElement('div')
    name.classList.add(name)
    box.appendChild(name)
}
var empList = JSON.parse(employees).employees
console.log(empList)

empList.forEach(item => {
    newDiv = document.createElement('div')
    newDiv.innerHTML = empList.
    bigDiv.appendChild(newDiv)
});

