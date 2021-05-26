var gifArr = []
const search = () => {
  let inp = document.getElementById('search')
  let inpValue = inp.value.toLowerCase()

  let x = new XMLHttpRequest();

  x.open('get' , `https://api.giphy.com/v1/gifs/search?q=${inpValue}&rating=g&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)

  x.send()

  x.onload = function() {
      if(x.status != 200){
        console.log(x.status);
      }
      else{
        var listArr = JSON.parse(x.response)
        console.log(listArr)
        addGif(listArr)
        gifArr.push(listArr)
        console.log(gifArr);
      }
  }
}
var boxDiv = document.getElementById('box')
const addGif = (gif) => {
    let boxDiv = document.getElementById('box')
    let gifDiv = document.createElement('div')
    let imgGif = document.createElement('img')
    let btnDelete = document.createElement('button')
    let btnText = document.createTextNode('Delete')
    btnDelete.appendChild(btnText)
    imgGif.src = gif.data[0].images.downsized.url;
    gifDiv.appendChild(imgGif)
    gifDiv.appendChild(btnDelete)
    boxDiv.appendChild(gifDiv)

    btnDelete.addEventListener('click' , () => {
      gifDiv.style.display = 'NONE';
    })
}


const deleteAll = () => {
  boxDiv.style.display = 'NONE';
}

