const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

let newArr = []
gameInfo.forEach((item, index, array) => {
  newArr.push(item.username + "!")
})


let score = []
gameInfo.forEach((item, index, array) => {
  score.push(item.score)
})
console.log(score)

console.log(score[0]+ score[1] + score[2] + score[3])

