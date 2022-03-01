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
app.use((cors))

app.get('/')