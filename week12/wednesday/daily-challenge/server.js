const exp = require('express');

const app = exp();

const bp = require('body-parser')

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use('/',exp.static(__dirname+'/public'))

app.get('/', (req, res) => {
    res.send('index.html');
    console.log('Home page');
})
app.get('/pic', (req, res) => {
    res.send('<img src="https://i.pinimg.com/originals/78/54/dc/7854dccccc6f6abb22aea0fc7426df42.jpg">');
    console.log('picture');
})
app.post('/formData', function (req, res) {
    console.log(req.body);
      res.send(req.body.email + ' sent you a message: ' + req.body.message);
});
app.get('/aboutMe/:hobby',(req,res)=>{
    console.log(req.params);
    if (typeof req.params.hobby === 'string' || req.params.hobby instanceof String){
    res.send(req.params.hobby);
    }
    else {
      res.sendStatus(404);
    }
  })






app.listen(3000);

