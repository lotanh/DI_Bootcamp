// Ask the user which language they speak.

// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”

// Create a few conditions :
// If the user speaks French : display “Bonjour”
// If the user speaks English : display “Hello”
// If the user speaks Hebrew : display “Shalom”
// If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’

// Exercise 1 : The World Translator
// let userAnswer = prompt('which language are you speaking')
//  let userSmall = userAnswer.toLowerCase()
//  switch (userSmall) {
//     case 'french':
//          alert('Bonjour')
//          break;
//     case 'english':
//         alert('Hello')
//         break;
//     case 'hebrew':
//         alert('shalom')
//         break; 
//      default:
//          alert('01110011 01101111 01110010 01110010 01111001')
//          break;
// }

// Exercise 2 : The Grade Assigner

// Ask the user for their grade.
// If the grade is bigger than 90, console.log “A”
// If the grade is between 80 and 90 (included), console.log “B”
// If the grade is between 70(included) and 80 (included), console.log “C”
// If the grade is lower than 70, console.log “D”

// let userGrade = prompt('What is your grade?')

// if (userGrade > 90) {
//     console.log('A')
// }
// else if (userGrade > 80 && userGrade < 90) {
//     console.log('B')
// }
// else if (userGrade >= 70 && userGrade <= 80) {
//     console.log('C')
// }else {
//     console.log('D')
// }

// Exercise 3 : Verbing

// Prompt the user for a string. It must be a verb.
// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
// If the length of the string is less than 3, leave it unchanged.

let userVerb = prompt('Enter a verb')
let verbSmall = userVerb.toLowerCase()
if (verbSmall.length > 3 && verbSmall.indexOf('ing') == -1) {
    console.log(verbSmall + 'ing')
} else {
    console.log(verbSmall + 'ly')
}
if (verbSmall.length < 3) {
    console.log(verbSmall)
}

