const express = require("express");

const app = express();

app.get('/', (req,res) => {
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    }
    console.log(user);
    res.send(user)
})
app.listen(3000);