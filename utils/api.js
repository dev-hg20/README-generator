const axios = require("axios");

const api = {
  getUser(username) {
    return axios.get(`https://api.github.com/users/${username}`);
  }
};

// avatar_url
// email

module.exports = api;

//map gets a return and creates an array of the return.

// init => getUser => axios
