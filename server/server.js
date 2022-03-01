const exp = require('express');
const cors = require('cors');
const knex = require('knex');

const db = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '18181515',
      database : 'dvdrental'
    }
});

const app = exp();
app.use(cors());

app.get('/countries', (req,res) => {
    getCountries()
    .then(result => {
    //     const filter = result.filter(item => {return item.country == 'Israel'
    // ;});
        console.log(result);
        res.send(result)
    })
    .catch(err => {
        res.send({message:err.message})
    })
})

app.get('/cities/:country_id', (req, res) => {
    const id = req.params.country_id;
    getCities(id)
        .then(result => {
            res.send(result)
        }).catch(err => {
            res.send({message:err.message})
        })
})
const getCountries = () => {
    return db('country')
        .select('country_id', 'country')
            .orderBy('country')
}

const getCities = (id) => {
    return db('city')
    .select('city_id', 'city')
    .where({country_id:id})
    .orderBy('city')
}

app.listen(5000);