// // Exercise 1 : Scope

// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
// 5

//#2
var a = 0;
function q2() {
    a = 5;
}
 
function q22() {
    alert(a);
}
// 0


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
// undefined or 0 

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
1

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
// 5

// Exercise 2 : Ternary Operator
function winBattle(){
    return true;
}

var experiencePoints = (winBattle()) ? 10 : 1;
console.log(experiencePoints)

// Exercise 3 : Colors
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
console.log(colors.indexOf("Violet"))
colors.forEach((item,index) => {
    console.log(`${index+1}# choice is ${item}`)
})


// Exercise 4: Colors

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];
colors.forEach((item , index) => {
    const ord = ordinal[1]
    console.log(`${index+1}${ord} choice is ${item}`)
});

// Exercise 5 : Is It A String ?

function isString(params) {
    if (typeof params === 'string') {
       return true 
    } else {
        return false 
    }
}
console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));

// Exercise 6 : Bank Details

var bankAmount = 10000
let VAT = 1.17
let details = ["+200", "-100", "+146", "+167", "-2900"]
let withTax = []
details.forEach((item , index , array) => {
    var sum = Math.round(item * VAT)
    console.log(sum)
    withTax.pop(sum)  
})
console.log(withTax)