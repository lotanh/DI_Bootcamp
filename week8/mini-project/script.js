const btn = document.getElementById('btn')
let currentWeather =[]

// getting the info of the weather from the user input 

const checkWeather = () => {
    let userInput = document.getElementById('inp').value;

    if (userInput == '') {
        alert('Please write a city!')

    } else {
        userInput = userInput.toLowerCase();
        console.log(userInput);
    
        let x = new XMLHttpRequest();
    
        x.open('get' ,`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`);
        
        x.send();
        
        x.onload = function() {
            if(x.status != 200){
                console.log(x.status);
            }
            else{
                userInput.value = ""
                var weatherData = JSON.parse(x.response)
                console.log(weatherData)
                currentWeather.push(weatherData)
                // console.log(currentWeather)
                createCityCard(weatherData)
            }
        }  
    } 
}


const createCityCard = (city) => {

    // creating element

    let container = document.getElementById('container')
    let div = document.createElement('div')
    div.classList.add('city-div')
    let cityName = document.createElement('p')
    cityName.classList.add('city-p')
    let icon = document.createElement('img')
    icon.classList.add('weather-icon')
    let temp = document.createElement('p')
    temp.classList.add('temp')
    let tempStatus = document.createElement('p')
    let deleteCity = document.createElement('button')
    deleteCity.classList.add('delete')

    // adding value to them

    cityName.innerText = `${city.name}, ${city.sys.country}`
    let iconWeather = city.weather[0].icon
    icon.src = `http://openweathermap.org/img/wn/${iconWeather}@2x.png`
    // console.log(icon)
    let tempK = city.main.temp
    let tempC = Math.round(tempK - 273.15)
    temp.innerText = tempC + "°"
    tempStatus.innerText = city.weather[0].description
    deleteCity.innerText = 'X'


    // appending them

    div.appendChild(cityName)
    div.appendChild(icon)
    div.appendChild(temp)
    div.appendChild(tempStatus)
    div.appendChild(deleteCity)
    container.appendChild(div)

    // delete div

    deleteCity.addEventListener('click', () => {
        div.style.display = 'NONE'
    })
}

