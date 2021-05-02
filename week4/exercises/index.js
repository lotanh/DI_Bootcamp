// Exercise 1 : Information

// Part 1
// function infoAboutMe() {
//     console.log('My name is Lotan, I am 25 years old and i love coding and run')
// }
// infoAboutMe()

// Part 2
// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log(`Your name is ${personName} and you are ${personAge} years old, and your favorite color is ${personFavoriteColor}`)
// }
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

// Part 3
// function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies) {
//     console.log(`Your name is ${personName} and you are ${personAge} years old, and your favorite color is ${personFavoriteColor}`)
//     console.log('Your hobbies are:')
//     for (let i = -1; i <= personHobbies.length; i++) {
//         hobby = personHobbies[i];
//         console.log(hobby);   
//     }
// }
// infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

// Exercise 2 : Keyless Car
// Ask the user for their age, and save the value to a variable.
// Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
// if the user is too young, alert “'Sorry, you are too young to drive this car. Powering off'”
// if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
// if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
// Call the function.
// Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.

// Part 1
let age = prompt('How old are you')
// let ageNumber = parseInt(age)
function checkDriverAge() {
    if (age < 18) {
        alert('Sorry, you are too young to drive this car. Powering off')
    }
    else if(age > 18)
        alert('You are old enough to drive, Powering On. Enjoy the ride!')
    else if (age == 18) {
        alert('Congratulations on your first year of driving. Enjoy the ride!')
    }
}
checkDriverAge()

// part 2
// let age = prompt('How old are you')
// let ageNumber = parseInt(age)
// function checkDriverAge() {
//     let age = prompt('How old are you')
//     if (age < 18) {
//         alert('Sorry, you are too young to drive this car. Powering off')
//     }
//     else if(age > 18)
//         alert('You are old enough to drive, Powering On. Enjoy the ride!')
//     else if (age == 18) {
//         alert('Congratulations on your first year of driving. Enjoy the ride!')
//     }
//     return age
// }

// checkDriverAge()

// function checkDriverAge(age) {
//     let personAge = prompt('How old are you')
//     if (personAge < 18) {
//         alert('Sorry, you are too young to drive this car. Powering off')
//     }
//     else if(personAge > 18)
//         alert('You are old enough to drive, Powering On. Enjoy the ride!')
//     else if (personAge == 18) {
//         alert('Congratulations on your first year of driving. Enjoy the ride!')
//     }
//     return personAge
// }
// Exercise 3: Odd Or Even
// Create a function called checkNumber() that takes no parameter.
// In the function, loop through numbers from 0 to 100.
// Add an if/else block
// If the number is even, console.log "the number <number> is even"
// Else, console.log "the number <number> is odd"
// Call the function
function checkNumber() {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}
