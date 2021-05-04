// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: add a new class to each planet).
// Finally append each div to the <section> in the HTML (presented below).
let planets = ['Earth' , 'Jupiter', 'Mars', 'Saturn' , 'Neptune', 'Uranus']
for (let i = 0; i < planets.length; i++) {
    planetName = planets[i]
    divPlanet = document.createElement('div')
    divPlanet.style.color = "white";
    divPlanet.classList.add('planet' , planetName)
    let planetTxt = document.createTextNode(planetName);
    divPlanet.appendChild(planetTxt);
    let section = document.getElementsByClassName("listPlanets")[0];
    section.appendChild(divPlanet) 
}
