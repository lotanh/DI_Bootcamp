// Exercise 1 

const person = {
    name: 'John Doe',
    age: 25,
    location : {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    },
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Doe from Vancouver, canada Latitude(49.2827), Longitude(-123.1207)`)

// // Exercise 2

const displayStudentInfo = (studentObject) => {
    console.log(`Your full name is ${studentObject.first} ${studentObject.last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'}) 

// // Exercise 3

// Using this object 
const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// const user = Object.keys(users)
// console.log(user)
// const id = Object.values(users)
// console.log(id)
const userArr = Object.entries(users);
let newArr = []
for (const [key, value] of Object.entries(users)) {
    newArr.push([key, value*2])
}

console.log(newArr)

// Exercise 4 : Person Class

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
// object

// Exercise 5 : Dog Class

class Dog {
    constructor(name) {
      this.name = name;
    }
  };
// correct answer:3 
class Labrador extends Dog {
    constructor(size) {
      super(name);
      this.size = size;
    }
  };

// Exercise 6 : Challenges
// [2] === [2] 
// false
// {} === {}
// false

const object1 = { number: 5 }; 
// 4
const object2 = object1; 
// 4
const object3 = object2; 
// 4
const object4 = { number: 5}; 
// 5
object1.number = 4;

// Create a class Animal with the attributes name, type and color

// Create a class Mamal that extends from the Animal class. It has a method called sound().
// Create a cow that accepts a name, type and color and has a sound method that moo’s her name, type and color.

class Animal {
    constructor(name , type , color){
        this.name = name
        this.type = type
        this.color = color
    }
}
class Mamal extends Animal {
    constructor(name , type , color){
        super(name , type , color)
    }sound() {
        console.log('baaaa')
    }
}

class Cow extends Animal {
    constructor(name , type , color){
        super(name , type , color)
    }sound() {
        console.log('Moooo')
    }
}

const cow1 = new Cow('batty' , 'golden' , 'blue')