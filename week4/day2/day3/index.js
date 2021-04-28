// option 1
function BottlesOfBeer() {
    userNumber = prompt('Choose a number')
    for (let i = userNumber; i < 100; i++) {
        console.log(`${userNumber++} bottles of beer on the wall`);
        console.log(`${userNumber} bottles of beer`);
        
    }
}
BottlesOfBeer()

// // option 2

answer = confirm('Would you like to play the game?')
    if (answer == false) {
        alert('No problem, Goodbye')
    }
    else {
        userNumber = prompt('Choose a number')
        for (let i = userNumber; i < 100; i++) {
            console.log(`${userNumber++} bottles of beer on the wall`);
            console.log(`${userNumber} bottles of beer`)
        }
    }
