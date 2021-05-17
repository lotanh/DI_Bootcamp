// Exercise 1 : Change The Article

let lastP = document.querySelectorAll('p')[3];
// console.log(lastP);
lastP.remove();

let h2 = document.querySelector('h2');
// console.log(h2);
h2.addEventListener('click', function () {
    h2.style.backgroundColor = 'red';
});



function h2Result() {
    let h1Selector = document.querySelector('h1');
    // console.log(h1Selector)
    h1Selector.addEventListener('click', function () {
        h1Selector.style.fontSize = Math.floor((Math.random() * 100) + 1) + "px";
    })
}

h2Result();


function h3Result() {
    let h3Selector = document.querySelector('h3');
    // console.log(h3Selector);
    h3Selector.addEventListener('click', function () {
        h3Selector.style.display = 'none';
    })
}

h3Result();

let boldButton = document.getElementById('bold-button');
// console.log(boldButton);

let allParagraphs = document.querySelectorAll('p');
// console.log(allParagraphs);


boldButton.addEventListener('click', function () {
    allParagraphs[0].style.fontWeight = "bold"
});



let submitButton = document.getElementById('submit');
// console.log(submitButton);
let firstName = document.getElementById('fname');
// console.log(firstName);
let lastName = document.getElementById('lname');
// console.log(lastName);


function submitValues() {
    submitButton.addEventListener('click', function () {
        event.preventDefault()
        console.log(firstName.value);
        console.log(lastName.value);
    })
}

submitValues ();




// Exercise 2 : Change The Article

getBold_items()
for (let i = 0; i < bold.length; i++) {
    bold[i].addEventListener("mouseover", highlight);
    bold[i].addEventListener("mouseout", return_normal);
}



function highlight(){
    for (let i = 0; i < bold.length; i++) {
     bold[i].setAttribute("style", "color: blue;")      
    }                 
 }


function return_normal(){
    for (let i = 0; i < bold.length; i++) {
    bold[i].setAttribute("style", "color: black;")      
   } 
}



var bold
function getBold_items(){
    bold = document.querySelectorAll("strong")
    // console.log(bold)
}



// Exercise 3 : Volume Of A Sphere


let form = document.forms[0]
form.addEventListener("submit", calc)
function calc() {       
event.preventDefault()
let rad = document.getElementsByName("radius")[0].value;
let vol = document.getElementsByName("volume")[0].value;
let h1 = document.createElement("h1")   
h1.innerHTML = 3/4*vol*rad;
form.appendChild(h1)
console.log(rad)
}



// Exercise 4 : Event Listeners

    let p = document.getElementById('exercise4');
                
    p.addEventListener("mouseover", f1);
    p.addEventListener("click", f2);
    p.addEventListener("mouseout", f3);
    function f1() {
        this.style.backgroundColor = "yellow"
    }
    function f2() {
        this.style.color = "orange"
    }
    function f3() {
        this.setAttribute("style", "text-align: center;");
    }