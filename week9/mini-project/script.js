let x = Math.floor(Math.random() * 20)
const btn = document.getElementById('btn')
const loader = document.getElementById('loader')
const cont = document.getElementById('container')
const getData = () => {
    loader.style.display = 'block'
    fetch(`https://swapi.dev/api/people/${x}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(Response => {
        if(Response.ok) {
            return Response.json();
        }else{
            cont.innerText = 'Oh No! That person isnt available.'
            console.log('error')
        }
        
    }).then(data => {
        if (data.detail == 'Not Found') {
            console.log(data.detail)
            cont.innerText = 'Oh no! That person isnt available'
        }else {
            createDiv(data)
            loader.style.display = 'none'
        }
    }).catch(err => {
        console.log(err);
    })

}
btn.addEventListener('click' , () => {
    if (x < 30) {
        loader.style.display = 'block'
        getData()
        x = Math.floor(Math.random() * 20)
    }else {
        x = 1
    }
})

const createDiv = async (characters) => {
    try {
        cont.innerHTML = "";
    
        // create elements
        let div = document.createElement('div');
        div.classList.add('Character');
        let name = document.createElement('p');
        let height = document.createElement('p');
        let gender = document.createElement('p');
        let birthYear = document.createElement('p');
        let homeWorld = document.createElement('p');
        // adding value
        name.innerText = `Name: ${characters.name}`
        height.innerText = `Height: ${characters.height}`
        gender.innerText = `gender: ${characters.gender}`
        birthYear.innerText = `Birth year: ${characters.birth_year}`
        homeWorld.innerText = `Home World: ${characters.homeworld}`
        // appending
        div.appendChild(name)
        div.appendChild(height)
        div.appendChild(gender)
        div.appendChild(birthYear)
        div.appendChild(homeWorld)
        cont.appendChild(div)

    } catch (error) {
        console.log(error)
    }

}