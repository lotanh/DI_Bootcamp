const exp = require('express');
const cors = require('cors');
const knex = require('knex'); 

const db = knex({
    client:'pg',
    connection: {
        host: '127.0.0.1',
        port: '5432',
        user: 'postgres',
        password: '18181515',
        database: 'dvdrental'
})