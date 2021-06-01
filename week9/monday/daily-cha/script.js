// Create two functions that use promises which can be chained.
// The first function called makeAllCaps(), should take an array of words as an argument and capitalize them.
// The second function called sortWords(), should sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.

function check(x) {
    return x.every(i => (typeof i === "string"));
}
const sortWords = (arrayUpper) => {
    return (arrayUpper.sort())
}

const makeAllCaps = (array) => {
    const p = new Promise((resolve , reject) => {
        if (check(array) == true) {
            resolve(array.map(f=>{ return f.toUpperCase(); }))
        }else {
            reject('Error');
        }
    });
    return p
}

makeAllCaps(['avocado' , 'tomato' ,'mushrooms'])
.then(massage => massage)
.then(massage2 => console.log(sortWords(massage2)))
.catch(err => {
    console.log(err);
})

makeAllCaps(['avocado' , 10 ,'mushrooms'])
.then(massage => massage)
.then(massage2 => console.log(sortWords(massage2)))
.catch(err => {
    console.log(err)
})