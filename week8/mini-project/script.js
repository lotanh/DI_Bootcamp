const btn = document.getElementById('btn')
let currentWeather =[]

// getting the info of the weather from the user input 

const checkWeather = () => {

    let x = new XMLHttpRequest();

    let cityName = document.getElementById('inp').value

    cityName = cityName.toLowerCase()

    console.log(cityName)

    x.open('get' ,`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`)
    
    x.send()
    
    x.onload = function() {
        if(x.status != 200){
            console.log(x.status);
        }
        else{
            var weatherData = JSON.parse(x.response)
            console.log(weatherData)
            currentWeather.push(weatherData)
            console.log(currentWeather)
        }
    }  
}


const cityBox = (city) => {
    let div = document.createElement('div')
    let city = document.createElement('p')
    let country = document.createElement('p')
}