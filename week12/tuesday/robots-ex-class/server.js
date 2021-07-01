const exp = require('express');
const axios = require('axios')

const app = exp();

app.use('/',exp.static(__dirname+'/public'))

const getRobots = async() => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return await res.data
  } catch (e) {
    console.log(e);
  }
}

app.get('/robots',(req,res)=>{
  getRobots()
  .then(data => {
    res.send(data)
  })
  .catch(err=>{
    res.send({message:err})
  })

})
app.listen(3000)
