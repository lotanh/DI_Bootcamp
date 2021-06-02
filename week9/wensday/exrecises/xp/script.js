// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);
// 1
const showAPI = async () => {
    try {
        let result = await fetch("https://swapi.dev/api/starships/9/")
        return await result.json();
 
    } catch (err) {
       console.log(err) 
    }
}

showAPI()
    .then(data => {
        console.log(data)
})

// 2

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// calling
// resolved
