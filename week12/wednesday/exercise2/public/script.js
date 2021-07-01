fetch('http://localhost:4000/public/index.html')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return data
    })
    .then(returnData => {
        document.body.innerHTML = JSON.stringify(returnData)
    }).catch (e => console.log(e));