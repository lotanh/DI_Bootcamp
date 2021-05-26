const frm = document.getElementById('frm')

frm.addEventListener('submit', (event) => {
    let form = document.forms["test"];
    let frmData = new FormData(form);
    var data = {};
    for (let [key, value] of frmData) {
    data[key] = value;
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