const numbersTrue = [200, 606, 777, 101, 1000]

function isOver100 (n) {
    return n > 100;
}

console.log(numbersTrue.every(isOver100));


numbersTrue(true, true, true) 
numbersTrue(true, false, true) 
numbersTrue(5, 4, 3, 2, 1, 0) 