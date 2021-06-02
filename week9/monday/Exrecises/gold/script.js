const urls = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4'
]

let requesters = urls.map(url => fetch(url))

Promise.all(requesters)
    .then(responses => console.log(responses))
    .catch(err => {
    console.log(err)
})