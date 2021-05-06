let button = document.getElementById('lib-button')
function storyTale() {
    let noun = document.getElementById('noun').value
    let adjective = document.getElementById('adjective').value
    let person = document.getElementById('person').value
    let verb = document.getElementById('verb').value
    let place = document.getElementById('place').value
    let div = document.createElement('div')
    div.innerHTML = `${person} is at ${adjective} ${place} ${verb} his ${noun}!`
    document.body.appendChild(div)
}
button.addEventListener('click' , storyTale)