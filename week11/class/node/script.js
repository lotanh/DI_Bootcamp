const users = require('./modules/script2.js');

users.getUsers()
.then(data => {
  console.log(data);
})
.catch(e =>{
  console.log(e);
})