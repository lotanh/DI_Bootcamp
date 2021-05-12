let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// First step
let copyGroceries = JSON.parse(JSON.stringify(groceries))
console.log(copyGroceries)
// changing in the original array 
// It did not effect my copy because i turned the copy object to a string and then again to an object
// and it created a new place in the memory for my new copy
groceries.totalPrice = '35$'
console.log(groceries)
console.log(copyGroceries)

groceries.other.payed = false

console.log(groceries)
console.log(copyGroceries)