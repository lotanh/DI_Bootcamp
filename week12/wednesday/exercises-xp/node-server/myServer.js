const http = require('http');

const server = http.createServer((req,res)=> {
    res.setHeader('content-type', 'text/html');
    res.write('<h1>This is my first response</h1>');
    res.write('<h1>This is my first response</h1>');
    res.end('<p>this is my third response</p>');
})

server.listen(3000)

