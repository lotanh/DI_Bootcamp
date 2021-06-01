// 1
// Create a function called compareToTen that takes a number as an argument.
// The function should return a Promise that tests if the value of the given argument is less or greater than 10.

const compareToTen =  (number) => {
    var p = new Promise(function (resolve, reject) {
        if (number > 10) {
            resolve("Greater");
        } else {
            reject("Less");
        }
    });
    return p
}

compareToTen(15)
.then(res => {
    console.log(res)
})
.catch(rej => {
    console.log(rej);
})
compareToTen(8)
.then(res => {
    console.log(res)
})
.catch(rej => {
    console.log(rej);
})


// 2

// const timer = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("Success");
//     }, 4000);
// });

// timer.then(res => {
//     console.log(res)
// })
// .catch(rej => {
//     console.log(rej);
// })
var promise = Promise.resolve('Success');
var err = Promise.reject('Ooops something went wrong ');
  
promise.then(function(val) {
    console.log(val);
} , function(value) {
    console.log(value);
});
// Promise.resolve('Success').then(function(value) {
//   console.log(value); // "Success"
// }, function(value) {
//   // not called
// });