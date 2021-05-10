const btn = document.getElementById('btn')
// const inputValue = document.getElementById('myText').value
const ul = document.getElementById('test-list')


btn.addEventListener('click', (event) => {
    var input = document.querySelector('#text');
    var list = document.querySelector('#tests-list'); 
    var newTest = document.createElement('li');
    newTest.classList.add('test')
    if (input.value == "") {
        alert('Please write a test!')
    }
    else {
        let testText = document.createTextNode(input.value); 
        newTest.appendChild(testText);
        list.appendChild(newTest); 
        input.value = ""; 
        event.preventDefault()
    }
})


