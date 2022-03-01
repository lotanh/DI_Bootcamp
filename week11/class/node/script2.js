const axios = require('axios');

const getUsers = async (name) => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    let show = mdir
    return await res.data;
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  getUsers
}