// /Exercise 1 : Change The Navbar
let div = document.querySelector("div");
div.setAttribute("id", "socialNetworkNavigation");
let ul = div.firstElementChild;
let li = document.createElement('li');
li.textContent = 'Logout';
let divNew = document.createElement('div');
divNew.appendChild(li);
ul.appendChild(divNew);

