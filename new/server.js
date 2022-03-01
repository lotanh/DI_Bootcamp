const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host:'127.0.0.1',
        port:'5432',
        user:'postgres',
        password: '18181515',
        database: 'dvdrental'
    }
})
db('country')
// .where({country_id:110})
// .insert(
//     [
//         {country: 'new web js'},
//         {country: 'new newnew web js'}
//     ]
// )
.where({country_id:100})
.del()
.returning('*')
.then(res => {
    console.log(res);
})
.catch(e => {
    console.log(e);
})
