let userStar = prompt("Write five words separeted by commas");
let userArray = userStar.split(',');

let longestWord = userArray[0].length;
for(let i=1; i <= userArray.length - 1; i++){
    if(longestWord < userArray[i].length - 1){
        longestWord = userArray[i].length - 1;
    }
}
let stars = "" 
for(let i = 0; i < longestWord +4; i++){
    stars += '*';
}
console.log(stars);

for(let i = 0; i < userArray.length; i++){
    console.log('* ' + userArray[i] + ' *')
}
console.log(stars);
