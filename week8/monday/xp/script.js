// Exercise 3 : JSON Mario
let marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        browser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
}
// question 1
// To access nested fields, we need to concatenate the field names with a dot as separator.
const marioSTR = JSON.stringify(marioGame)
console.log(marioSTR)

// question 2 
const prettyMarioStr = JSON.stringify(marioGame, null, 4) 
console.log(marioSTR)
console.log(prettyMarioStr)

