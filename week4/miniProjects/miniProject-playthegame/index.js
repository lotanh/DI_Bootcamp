    // part 2
    // if (answer == true) {
    //     playerNumber = prompt('Enter a number between 0 and 10')
    //     if (isNaN(playerNumber) == true) {
    //         alert ('Sorry Not a number, Goodbye!')
    //     }
    //     else if (playerNumber < 0 && playerNumber > 10) {
    //         alert ('Sorry it’s not a good number, Goodbye')
    //     } 
    //     else {
    //         computerNumber = Math.floor(Math.random() * 11);
    //     }
    // }
// part 1
function playTheGame() {
    answer = confirm('Would you like to play the game?')
    if (answer == false) {
        alert('No problem, Goodbye')
    }
    else {
        userNumber = prompt('Enter a number between 0 and 10')
        if (isNaN(userNumber) == true) {
            alert ('Sorry Not a number, Goodbye!')
        }
        if (userNumber >= 0 && userNumber <= 10) {
            computerNumber = Math.floor(Math.random() * 11);
            test(userNumber, computerNumber)
        } 
        else {
            alert ('Sorry it’s not a good number, Goodbye')
        }
    }
    return [userNumber,computerNumber]
}
// part 2
function test(playerNumber,computerNumber) {
    console.log(playerNumber , computerNumber)
    if (userNumber < computerNumber || userNumber > computerNumber) {
        new2 = prompt('Enter again')
        console.log(new2)
        if (new2 == computerNumber) {
            alert('Winner')
        }
        else {
            new3 = prompt('Try again')
            console.log(new3)
            if (new3 == computerNumber) {
                alert('Winner')
            }
            else {
                alert('Loser!')
            }
        }
    }
    else {
        alert('Winner')
    }
}
//     }
//     else {
//         if (userNumber > computerNumber) {
//             alert('Your number is bigger then the computer’s, guess again')
//             new2 = prompt('Enter a number between 0 and 10')
//             if (new2 == computerNumber) {
//                 alert('Winner')
//             }
//             else {
//                 new3 = prompt('Try again')
//                 if (new2 == computerNumber) {
//                     alert('Winner')
//                 }
//                 else {
//                     alert('Loser!')
//                 }
//             }
//         }
//         if (userNumber < computerNumber) {
//             new2 = prompt('Enter a number between 0 and 10')
//             if (new2 == computerNumber) {
//                 alert('Winner')
//             }
//             else {
//                 new3 = prompt('Try again')
//                 if (new2 == computerNumber) {
//                     alert('Winner')
//                 }
//                 else {
//                     alert('Loser!')
//                 }
//             }
//         }
//     }
// }
// test(userNumber,computerNumber)
// test(userNumber,computerNumber)
// test(userNumber,computerNumber)


