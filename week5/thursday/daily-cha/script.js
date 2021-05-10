let box = document.querySelector('.box')

for (let i = 0; i <=48; i++) {
    let newDiv = document.createElement('div')
    newDiv.id = i
    newDiv.style.width = "70px"
    newDiv.style.height = "70px"
    newDiv.style.border = "1px solid white"
    newDiv.style.backgroundColor = "black"
    for (let i = 0; i <= 6; i++) {
        newDiv.style.textContent = i
        newDiv.style.backgroundColor = "white"   
    }
    box.appendChild(newDiv)   
}
