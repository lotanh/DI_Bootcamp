// Exercise 1 : Information

// 1
// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

// function infoAboutMe() {
//     console.log('My name is lotan and i am 25 years old, i love to code.')
// }
// infoAboutMe()

// // 2
// // Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// // The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// // Call the function twice with the following arguments:
// // infoAboutPerson("David", 45, "blue")
// // infoAboutPerson("Josh", 12, "yellow")

// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log(`Your name is ${personName}, and you are ${personAge} years old. Your fav color is ${personFavoriteColor}`)
// }
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

// 3
// Add a parameter personHobbies to the function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies).
// The function should
// console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// console.log the person’s hobbies one by one (ie. loop through the array of hobbies).
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

// function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies) {
//     console.log(`Your name is ${personName}, and you are ${personAge} years old. Your fav color is ${personFavoriteColor}`)
//     console.log('My hobbies are:')
//     srt = " "
//     for (let i = -1; i < personHobbies.length; i++) {
//         let personFavHobby = srt + personHobbies[i]
//         console.log(personFavHobby); 
//     }
// }
// infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

// Exercise 2 : Keyless Car\

// Ask the user for their age, and save the value to a variable.
// Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
// if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
// if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
// if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
// Call the function.
// Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.
// function checkDriverAge() {
//     userAnswer = prompt('How old are you?')
//     if (userAnswer < 18) {
//         alert('Sorry, you are too young to drive this car. Powering off')
//     }
//     else if (userAnswer > 18) {
//         alert('You are old enough to drive, Powering On. Enjoy the ride!')
//     }
//     else if (userAnswer = 18) {
//         alert('Congratulations on your first year of driving. Enjoy the ride!')
//     }
// }
// checkDriverAge()

// // option 2
// function checkDriverAge(age) {
//     if (age < 18) {
//         alert('Sorry, you are too young to drive this car. Powering off')
//     }
//     else if (age > 18) {
//         alert('You are old enough to drive, Powering On. Enjoy the ride!')
//     }
//     else if (age = 18) {
//         alert('Congratulations on your first year of driving. Enjoy the ride!')
//     }
// }
// checkDriverAge(20)

// Exercise 3: Odd Or Even

// Create a function called checkNumber() that takes no parameter.
// In the function, loop through numbers 0 to 100.
// Add an if/else block
// If the number is even, console.log "the number <number> is even"
// Else, console.log "the number <number> is odd"
// Call the function

// function checkNumber() {
//     for (let i = 0; i <= 100; i++) {
//         if (i % 2 == 0) {
//             console.log(`the number ${i} is even`)
//         }else {
//             console.log(`the number ${i} is odd`)
//         }
//     }
// }
// checkNumber()

// Exercise 4: Find The Numbers Divisible By 23
// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.

// function isDivisible() {
//     sum = 0
//     for (let i = 0; i <= 500; i++) {
//         if (i % 23 == 0) {
//             console.log(i)
//             sum = sum + i;
//         }
//     }
//     console.log(sum)
// }
// isDivisible()

// Exercise 5 : Amazon Shopping

// Create a function called checkBasket().
// It should:
// prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional

// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }
// function checkBasket() {
//     userAnswer = prompt('What is the item?')
//     userAnswerLow = userAnswer.toLowerCase()
//     if (userAnswerLow in amazonBasket) {
//         alert(`You have ${userAnswerLow} in your basket!`);  
//     }else {
//         alert(`You do not have ${userAnswerLow} in your basket!`);
//     }
// }
// checkBasket() 

// Exercise 6 : What’s In My Wallet ?
// Given a item price and an array representing the amount of change in your pocket, determine whether or not you can afford the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// let Quarters  = 0.25
// let Dimes = 0.10
// let Nickels = 0.05
// let Pennies = 0.01

// function changeEnough([one, two , three , four], itemPrice) {
//     sum = (Quarters * one) + (Dimes * two) + (Nickels * three) + (Pennies * four)
//     console.log(sum)
//     if (sum > itemPrice) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
// changeEnough([2, 100, 0, 0], 14.11)
// changeEnough([0, 0, 20, 5], 0.75)
// changeEnough([25, 20, 5, 0], 4.25)

// Exercise 7 : Shopping List
// Add the stock and prices objects to your js file.
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1
// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ['banana', 'orange', 'apple']

// function myBill() {
//     if (shoppingList in stock) {
//         console.log(Object.keys(stock.shoppingList))
//     }
// }

// Exercise 8 : Tips
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// The calculator has the following rules:
// 1. Tip 20% when the bill is less than $50,
// 2. Tip 15% when the bill is between $50 and $200,
// 3. Tip 10% if the bill is more than $200.

// Ask John for the amount of the bill.
// Create the program explained above.
// In the end, John would like to know:
// Tip amount.
// Final bill (bill + tip).
// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

// function checkBill(){
//     let bill = prompt('How much is the bill?')
//     let billNumber = parseInt(bill)
//     tip20 = bill * ((20 / 100)+1)
//     tip15 = bill * ((15 / 100)+1)
//     tip10 = bill * ((10 / 100)+1)
//     if (billNumber < 50) {
//         alert(`You need to tip ${bill * (20 / 100)}$, Total amount is ${Math.round(tip20)}$`)
//     }
//     else if (billNumber >= 50 && billNumber <= 200) {

//         alert(`You need to tip ${bill * (15 / 100)}$, Total amount is ${Math.round(tip15)}$`)
//     }
//     else if (billNumber > 200) {

//         alert(`You need to tip ${bill * (10 /100)}$, Total amount is ${Math.round(tip10)}$`)
//     }
// }
// checkBill()

// Exercise 9 : Vacations Costs
let nights = 0
function hotelCost() {
    nights = parseInt(prompt('How many weeks would you like to stay?'))
    let totalHotel = 0
    while (isNaN(nights) === true) {
        nights = parseInt(prompt('How many weeks would you like to stay?'))
    } 
    totalHotel = (nights * 7) * 15
    console.log(totalHotel)
    return totalHotel
}

function planeRideCost() {
    let userAnswer = prompt('What is your destination?')
    let userVec = userAnswer.toLowerCase()
    let planeCost = 0
    if (userVec === 'london') {
        planeCost = 183
        console.log(planeCost)
        return planeCost
    }
    else if (userVec === 'paris') {
        planeCost = 220
        console.log(planeCost)
        return planeCost
    }
    else {
        planeCost = 850
        console.log(planeCost)
        return planeCost
    }

}

// function rentalCarCost() {
//     let rental = parseInt(prompt('How many days would you like to rent the car?'))
//     let totalCar = 0
//     while (isNaN(rental) === true) {
//         rental = parseInt(prompt('How many days would you like to rent the car?'))
//     } 
//     if (rental > 10) {
//         totalCar = (rental * 40) * ((10 / 100) + 1)
//         console.log(totalCar)
//     }
//     else if (rental <= 10) {
//         totalCar = rental * 40
//         console.log(totalCar)
//     }
//     return totalCar
// }
function foodCost() {
    let tripTime = (nights * 7)
    let totalFood = tripTime * 15
    return totalFood
}

function totalVacationCost() {
    let finalHotel = hotelCost()
    console.log(finalHotel)
    let finalPlane = planeRideCost()
    console.log(finalPlane)
    let finalFood =  foodCost()
    let sumTotal = finalFood + finalPlane + finalHotel
    alert(`Omri, The hostel price would be: ${finalHotel}$ the plane ticket cost is: ${finalPlane}$, and the food cost would be: ${finalFood}$ , total trip approximately is: ${sumTotal}$`)
}

