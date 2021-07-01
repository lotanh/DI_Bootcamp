const exp = require('express');
const bp = require('body-parser');
const dotenv = require('dotenv');
const Parser = require('rss-parser');
const cors = require('cors');

const app = exp();

app.use( cors() );
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json());
app.use('/',exp.static(__dirname+'/public'))

dotenv.config();

const rss = async () => {
    const parser = new Parser();
    const feed = await parser.parseURL('https://www.thefactsite.com/feed/');
    return feed.items;
}
app.get('/', (req, res) => {
    res.send('index.html');
    console.log('Home page');
})
app.get('/rss',(req,res)=>{
    rss()
    .then(posts=>{
      res.send(posts)
    })
    .catch(err => {
      console.log(err);
    })
})

app.listen(5000);



