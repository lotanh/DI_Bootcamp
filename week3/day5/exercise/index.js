// // Exercise 1 : Your Favorite Colors

// let colors = ['black' , 'blue' , 'red' , 'white' , 'green', 'orange']
// for ( x = 0; x <= colors.length; x++) {
//     console.log(`My #${x + 1} fav is ${colors[x]}`)
// }             
// // Exercise 2 : List Of People

// let people = ["Greg", "Mary", "Devon", "James"]

// // 1
// people.shift();
// console.log(people);
// //2
// people.splice(people.indexOf('James'), 1, 'Jason')
// console.log(people);
// // 3
// people.push('Lotan')
// // 4
// console.log(people);
// for (let x = 0; x < people.length; x++) {
//     console.log (`${people[x]}`);
// }
// // 5
// for (let x = 0; x <= people.indexOf('Jason'); x++) {
//     console.log (`${people[x]}`);
    
// }
// // 6
// people.shift() + people.pop()
// console.log(people);
// // 7
// console.log(people.indexOf('Mary'))
// // 8
// console.log(people.indexOf('Foo'))  
// // Return -1 because we don't have Foo in our array.
// // 9
// let last = people[-1]
// console.log(people);

// Exercise 3 : Repeat The Question

// let input = prompt('Choose a number')
// let inputInt = parseInt(input);
// while (inputInt > 10) {
//     input;
// console.log('Good job');
// }

// // Exercise 4 : Attendance
// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
// }
// let currentName = prompt('What is your name?').toLowerCase()
// if (guestList.hasOwnProperty(currentName)) {
//     console.log(`Hi! I'm ${currentName}, and I'm from  ${guestList[currentName]}.`)
// }
// else {
//     console.log("Hi! I'm a guest.")
// }

// Exercise 5 : Family
let family = {
    father : 'James',
    mother : 'Kate',
    sister : 'Michael',
    brother : 'Matt'
};

for (let key in family) {
    if (family.hasOwnProperty(key)) {
        console.log(key);
    }
}

console.log(Object.values(famillY))

// Exercise 6
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
console.log('my name is')