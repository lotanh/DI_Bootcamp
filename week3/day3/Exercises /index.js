// First exercise
let x = 20; 
let y = 50;
if (x > y) {
    console.log('x is the biggest number')
} else {
    console.log('y is the biggest number')
}

// Secound exercise
let newDog = 'Chihuahua'
// let len = newDog.length;
console.log(newDog.length)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())
if (newDog == 'Chihuahua') {
    console.log("I love Chihuahuas, it’s my favorite dog breed")
} else {
    console.log ("I dont care, I prefer cats")
}

// third exercise
let number = prompt("Please enter a number");
let num = parseInt(number)
if (num %2 == 0) {
    console.log (`${num} is an even number `)
} else {
    console.log (`${num} is an odd number `)
}

// fourth exercise
let users = [
"Lea123",
"Princess45",
"cat&doglovers", 
"helooo@000"
]
online = users.length
if (online == 0) {
    console.log('no one is online')
}
else if (online == 1) {
    console.log(`${users[0]} is online`);
}
else if (online == 2) {
    console.log(`${users[0]} and ${users[1]} is online`);
}
else if (online > 2) {
    console.log(`${users[0]} and ${users[1]} and ${online - 2} is online`);
}
