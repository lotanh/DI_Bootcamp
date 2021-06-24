const main = require("./main");
const time = require('./server');

const b = 5;

const sum = b + main.largeNumber;

console.log(sum);

const http = require('http');

const server = http.createServer((req,res)=> {
    res.setHeader('content-type', 'text/html')
    // res.end(`my module is:<br>${sum}<br><h1>Hi there at the frontend</h1>`)
    res.end(`The date and the time are currently:${time.date()}`)
})

server.listen(3000);