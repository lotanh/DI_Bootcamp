// In the HTML above change the name “Pete” to “Richard”.
// Change each first name of the two <ul>'s to your name.
// At the end of each <ul> add a <li> that says “Hey students”.
// Delete the name Sarah from the second <ul>.
// Bonus
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.
let ul = document.querySelector('ul');
let last = ul.lastElementChild
let first = ul.firstElementChild
last.innerHTML = "Richard"
ul.firstElementChild.innerHTML = "Lotan"
ul.lastElementChild.innerHTML = "Lotan"
// let newLi = Document.createElement("LI");
// let text = document.createTextNode("Hello student");
let allUl = document.getElementsByClassName('list')
let allUlArray = Array.from(allUl)
let ul2 = allUlArray[1]
let newLi = document.createElement('li')
newLi.innerHTML = '<p>Hello students<p>'
ul.appendChild(newLi);
let newLi2 = document.createElement('li')
newLi2.innerHTML = '<p>Hello students<p>'
ul2.appendChild(newLi2);
ul2.removeChild(ul2.childNodes[2]);