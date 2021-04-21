
// -------------------------
//JS DAY 1
// -------------------------

// // variable
// let variableName = value

let userName = "David";

// // camelCase
let icecreamFlavourFavoriteUser = "vanilla";


// // DECLARING
let userName;

// // DEFINING
userName = "David";
userName = "Josh";
userName = "Lea";


// //VAR 
// //LET
// //CONST : constant


// // var userName
// // let userName
// // const userName


// //DECLARING AND DEFINING
let age = 12;

// -------------------------
//DATA TYPES
// -------------------------

//STRING
// "How are you ?"
// "Computer"

			   //string
let weather = "It's sunny today";
// 			   //number
let temperature = 24;


// //data - type string
// "It's sunny today"
			// data - type string
			// value of the weather variable
let weather = "It's sunny today";
let temperature = 24;
let city = "Tel Aviv";

// -------------------------
//CONCATENATE
// -------------------------

// It's sunny today, it's 24 degrees in Tel Aviv

let sentence = weather + " it's " + temperature + " degrees in " + city;
console.log(sentence)

let sentenceNew = `${weather} it's ${temperature} degrees in ${city}`
console.log(sentenceNew)

// --> It's sunny today 24 Tel Aviv 

// -------------------------
// STRING METHODS
// -------------------------

let userName = "David"
let userEmail = "david@gmail.com"

//built-in methods and properties
//syntax : nameOfVariable.nameOfProperty
let userNameLength = userName.length;
// the same as let userNameLength= "David".length;
console.log(userNameLength)

let userNameIncludeDa = userName.includes("Da");
console.log(userNameIncludeDa)

							//method - includes()
//syntax : nameOfVariable.nameOfmethod
let checkEmail = userEmail.includes("@")
// the same as let checkEmail = "david@gmail.com".includes("@")
console.log(checkEmail)

let welcome = "hello";
console.log(welcome.toUpperCase())
// the same as : console.log("hello".toUpperCase())

// -----------------------------------
//Data type : Boolean - true or false
// -----------------------------------


// -----------------------------------
//NUMBERS
// -----------------------------------

let password = 123.78;
console.log(password.toFixed(0))
console.log(password.toFixed(1))
console.log(password.toFixed(2))

// -----------------------------------
//COMPARAISON
// -----------------------------------

// = : means assigning

let number = 3;

// == : compare 2 values - comparing only value of each item

12 == "12" --> true

// === : compare the values AND the type of data

12 === "12" --> false

// -----------------------------------
//ARRAYS
// -----------------------------------

// String, Number, Boolean --> Primitive data type
// Array --> Complex Data type

let colors = ["blue", "red", "yellow", "pink"];

// retrieving the position of the elements of the array to retrieve the value of those elements
console.log(colors[0]); // retrieve "blue"
console.log(colors[2]); // retrieve "pink"

console.log(colors.length)

console.log(colors[3])
console.log(colors[colors.length-1]) 
// the same as : -- console.log(colors[4-1])
// the same as : -- console.log(colors[3])

//  get the position of the color "pink"
console.log(colors.indexOf("pink"))


let colors = ["blue", "red", "yellow", "pink"];
// add the color black at the end of the array
colors.push("black")
// take out the last element of the array
colors.pop()
// colors.splice(starting point; how many items you want to remove, what i want to add)

colors.splice(2,2,"white")
console.log(colors)

//join the colors of the array
let sentence = colors.join("!")
console.log(sentence)

//split the string into an array
let sent = "hello world how are you";
let arraySent = sent.split(" ")
console.log(arraySent)

// -----------------------------------
//USER INTERFACE FUNCTION
// -----------------------------------

console.log("hello");
alert("Hello");
let answer = prompt("How are you ?")
console.log(answer)