let article = document.getElementById("art")
let header = document.querySelector('.h2')
let header3 = document.querySelector('.h3') 
let btn = document.getElementById("btn")

article.lastElementChild.remove()
header.addEventListener('click', () => {
    header.style.backgroundColor = "blue"
    header.style.fontSize = Math.floor((Math.random() * 10))+"px";
})
header3.addEventListener('click', () => {
    header3.style.display = 'none'
})
btn.addEventListener('click', () => {
    article.style.fontStyle = 'bold'
})
