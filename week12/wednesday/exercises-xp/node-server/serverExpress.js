const express = require('express');

const app = express();
app.get(('/'), (req,res) => {
    res.send('<h1>This is HTML tag</h1>')
})
app.get('/', (req,res) => {
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    }
    res.send(user)
})
app.listen(3000);
