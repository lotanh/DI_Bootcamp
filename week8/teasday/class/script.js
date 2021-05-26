const btn = document.getElementById('btn')

const showRobot = () => {

    let x = new XMLHttpRequest();
    x.open('GET','https://jsonplaceholder.typicode.com/users');
    x.send();

    x.onload = function() {
        if(x.status != 200){
          console.log(x.status);
        }
        else{
          var robotArr = JSON.parse(x.response)
          createDiv(robotArr)
          
        }
    }
    x.onerror = function(){
    console.log('error');
    }
    x.onprogress = function(event){
    console.log(event.loaded, event.total);
    }
      

}


const createDiv = (arr) => {
    const cont = document.getElementById('container')
    arr.forEach((item) => {
        let bigDiv = document.createElement('div')
        let img = document.createElement('img')
        img.src = `https://robohash.org/${item.id}?size=200x200`
        let nameRobot = document.createElement('p')
        let email = document.createElement('p')
        nameRobot.innerText = item.name
        email.innerText = item.email
        bigDiv.appendChild(img)
        bigDiv.appendChild(nameRobot)
        bigDiv.appendChild(email)
        cont.appendChild(bigDiv)
    })
}

