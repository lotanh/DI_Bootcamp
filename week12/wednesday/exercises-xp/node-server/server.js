const http = require('http');
const user = {
    firstName: 'John',
    lastName: 'Doe'
}
const server = http.createServer((req,res)=> {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(user));
})

server.listen(8080)