// / Exercise 1:
// Write a function compareToTen that takes a number
// as an argument and returns a Promise that tests
// if the value is less than or greater than the value 10.
// if greater resolve if not reject

const compareToTen = (number) => {
    var promise = new Promise(function(resolve, reject) {
        if(number > 10) {
            resolve('greater')
        }else {
            reject('smaller')
        }
        return promise
      });
}

compareToTen(20)
.then(res => {
    console.log(res)
})
.catch(rej => {
    console.log(rej);
})

// Exercise 2:
// Write two functions that use Promises that you can chain!
// The first function:
// makeAllCaps(), will take in an array of words
// and capitalize them,
// and then the second function, sortWords():
// will sort the words in alphabetical order.
// If the array contains anything but strings,
// it should throw an error.
// examples of array:
const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]

const makeAllCaps = (arr)=> {
    const p = new Promise((resolve , reject) => {
        resolve(arr.map(f=>{ return f.toUpperCase(); }));
    });
    return p 
}
makeAllCaps(arrayOfWords)
.then(res => {
    console.log(res)
})
.then(res => {
    console.log(res)
})
