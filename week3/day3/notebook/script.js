//  ------------------------------
// JS - DAY 2
//  ------------------------------


// * push()
// * pop()
// * indexOf()

//------------------
// REVIEW ON SPLICE
//------------------


let flavours = ["vanilla", "chocolate", "caramel"];
// flavours.splice(position where I want to start adding or deleting, how many items I want to delete, what items do I want to add)
// goal : remove "chocolate"
flavours.splice(1,1)
console.log(flavours)

//goal : remove "chocolate" and add "strawberry"
flavours.splice(1,1,"strawberry")
console.log(flavours)

//goal : don't remove anything and add "strawberry" before vanilla
flavours.splice(0,0, "strawberry")
console.log(flavours)


//------------------
// NESTED ARRAYS
//------------------

let flavours = ["vanilla", "chocolate", "caramel", 2, true, 3.8, ["A", "B", [200,300,400] , "C"] ];
console.log(flavours)

//console.log the nested array
console.log(flavours[6])

// //console.log B
console.log(flavours[6][1])

//console.log the number 400
console.log(flavours[6][2][2])

//------------------
// OBJECTS
//------------------

//Object : complex data type - save inside a lot of different data types
// let obj = {
// 	key : value,
// 	property : value,
// 	property : value,
// }


let icecreamShop = {
	address : "Tel Aviv",
	dateOfCreation : 1987,
	flavours : ["vanilla", "chocolate", "caramel"],
	scoops : [1, 2, 3, "bucket"],
	//employees is a property 
	// the value {
	// 	names : ["David", "John"],
	// 	salary : [2000, 1800],
	// 	currency : "$"
	// }
	employees : {
		names : ["David", "John"],
		salary : [2000, 1800],
		currency : "$"
	}
};
// //access values
// // 1st syntax
console.log(icecreamShop.address);

// //2nd syntax
console.log(icecreamShop["address"]);

// //access "caramel"
console.log(icecreamShop["flavours"][2]);

// //access 2 scoops
console.log(icecreamShop["scoops"][1])

// // console.log $ (ie. the currency)
console.log(icecreamShop["employees"]["currency"])
// the same as console.log(icecreamShop.employees.currency)

// //change the value of a property
// // 1st step : to access
// // 2nd step : change the value
icecreamShop["employees"]["currency"] = "euros"
console.log(icecreamShop)

// //add a new property
// // 1st step: decide where I want to add
// // 2nd step : add
icecreamShop["nameOfOwner"] = "DOE";
console.log(icecreamShop)

//Difference between variable and property
// let varName  : variable
// the elements of an objects are properties and values


//------------------
// REVIEW ON INDEXOF
//------------------

// let flavours = ["vanilla", "chocolate", "caramel"];

let positionOfCaramel = flavours.indexOf("caramel")
// // returns 2
console.log(positionOfCaramel)
// get "caramel"
console.log(flavours[positionOfCaramel])

//------------------
// CONDITIONALS
//------------------

//------------------
// IF/ELSE IF/ELSE BLOCK
//------------------


// SYNTAX

// if (condition) {
// 	//run only if the condition in the IF is true
// 	//statement
// 	//code to be executed
// } else {
// 	//run only if the condition in the IF is false
// }


let bankAmount = 1000;
let carPrice = 2000;
let bicyclePrice = 1200;
let rollerbladesPrice = 50;

if (bankAmount >= carPrice){
	console.log("I can buy the car")
} else if (bankAmount >= bicyclePrice){
	//run if the condition of the IF is false
	//AND if the condition of the ELSE IF is true
	console.log("I cannot buy a car but I can buy the bicycle")
} else if (bankAmount >= rollerbladesPrice){
	//run if the condition of the IF is false
	//AND if the condition of the ELSE IF is true
	console.log("I cannot buy a car but I can buy rollerblades")
} else {
	//run if the condition of the IF is false
	//AND if the condition of the ELSE IF is false
	console.log("I cannot buy the car and I cannot buy the bicycle")
}


// IF THE CONDITION IS IN THE IF IS TRUE
// THE STATEMENT IN THE IF IS EXECUTED
// WE GO OUT OF THE IF/ELSE IF/ELSE BLOCK


let bankAmount = 1000;
let carPrice = 800;
let traffic = true;

// && : both conditions MUST BE TRUE
if(bankAmount >= carPrice && traffic == false){
if(bankAmount >= carPrice && !traffic){
	console.log("I will drive the car in Tel Aviv")
} else {
	console.log("TOO MUCH TRAFFIC")
}

// || : one of the condition MUST BE TRUE
if(bankAmount >= carPrice || !traffic){
	console.log("I will drive the car in Tel Aviv")
} else {
	console.log("TOO MUCH TRAFFIC")
}

// nested if/else blocks

if(bankAmount >= carPrice){
	console.log("I will drive the car")
	if (traffic == true) {
		console.log("I will drive the car in the Kibboutz, not in TLV")
	} else {
		console.log("I will drive the car in TLV")
	}
} else {
	console.log("TOO MUCH TRAFFIC")
}


let weather = "raining";

//!= : means NOT EQUAL
if (weather != "sunny"){
	console.log("I don't go out")
} else {
	console.log("I will go to the beach")
}


// PRACTICAL EXAMPLE

let bankAmount = 1000;
let carPrice = 800;
let salaryDay = true;
let salary = 3000;

if (bankAmount >= carPrice){
	console.log("I will buy the car");
	//i want to buy to car - i want to pay for it
	// i want to decrease the bank amount
	
	// the same as : bankAmount = bankAmount - carPrice
	// the same as : bankAmount = 1000 - 800
	bankAmount -= carPrice;
	console.log(bankAmount)

	// I want to check if it's pay day
	// it's pay day, I want to add my salary to the bank
	// it's not, alert the user the money left in the account

	// the same as : if (salaryDay) {}
	if (salaryDay == true) {
		bankAmount = bankAmount + salary;
		// the same as: bankAmount += salary;
		console.log(`It's PAY DAY ! You have left ${bankAmount} in your account`)
	} else {
		console.log(`SORRY ! You have left ${bankAmount} in your account`)
	}
} else {
	console.log("I won't buy the car");
}

//------------------
// SWITCH
//------------------


let fruit = 'Papayas';

// we want to check the value of the fruit variable
switch (fruit) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Papayas':
    console.log('Papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + fruit + '.');
}

//the same as : 
// if (fruit === "Oranges"){
// 	///
// } else if (fruit === "Papayas"){
// 	///
// } else {
// 	// 
// }