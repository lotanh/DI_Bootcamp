const express = require("express");

const app = express();

app.use('/',express.static(__dirname+'/public'))
app.get('/index.html', (req,res) => {
    res.setHeader('content-type', 'text/html');
});
app.listen(4000);