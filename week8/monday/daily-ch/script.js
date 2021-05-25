const frm = document.getElementById('frm')

frm.addEventListener('submit', (event) => {
    let form = document.forms["test"];
    let fd = new FormData(form);
    let data = {};
    for (let [key, prop] of fd) {
    data[key] = prop;
    }
    data = JSON.stringify(data);
    createDiv(data)
    event.preventDefault()             
})

const createDiv = (names) => {
    const cont = document.getElementById('container')
    let div = document.createElement('div')
    div.innerText = names
    cont.appendChild(div)
}

