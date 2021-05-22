// Exercise 1 : Analyzing
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// ['bread', "carrot", "potato", 'chicken', "apple", "orange"];

// ------2------
const country = "USA";
console.log([...country]);
// ["U" , "S" , "A"]
// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// [?]

// Exercise 2 : Employees

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];
// Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
// Using the filter() method, congratulate only the Full Stack Residents.

const hello = users.map(item => {
   return 'Hello ' + item.firstName 
})
hello.forEach((item) => {
    console.log(item)
})

const only = users.filter(item => {
    var newList = item.role === 'Full Stack Resident'
    return newList
})

const cong = only.map(names => {
    return 'congratulate ' + names.firstName 
})

cong.forEach((element) => {
    console.log(element)
})

// Exercise 3 : Star Wars
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const sum = epic.reduce((accumulator, element) => {
    return accumulator + element + " ";
});
console.log(sum)

// Exercise 4 : Employees #2
let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}
];
const passTest = student.filter(pass => {
    return pass.isPassed === true
})

const congStudent = passTest.map(item => {
    return 'congratulate ' + item.name
})
congStudent.forEach(stu => {
    console.log(stu)
})
Exercises