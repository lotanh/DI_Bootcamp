// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
// 1
let text = ""
for (let i = 0; i < 6; i++) {
    text += "*"
    console.log(text);
}
// 2
for (let i = 0; i < 6; i++) {
    let text = ""
    for (let j = 0; j <= i; j++) {
        text+= "*"
        
    }
    console.log(text)
}