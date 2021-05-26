// 1
let x = new XMLHttpRequest();
x.open('GET','https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

x.send();

x.onload = function() {
    if(x.status != 200){
      console.log(x.status);
    }
    else{
      var listArr = JSON.parse(x.response)
      console.log(listArr.data)
    }
}
x.onerror = function(){
console.log('error');
}
x.onprogress = function(event){
console.log(event.loaded, event.total);
}


// 2 

let y = new XMLHttpRequest();


y.open('GET','https://api.giphy.com/v1/gifs/search?api_key=6FWRNXMBWZPPWKYVnN9kcDAd9xjiue1x&q=sun&limit=10&offset=2&rating=g&lang=en')
y.send();

y.onload = function() {
    let sunArr = JSON.parse(y.response).data
    console.log(sunArr)
}