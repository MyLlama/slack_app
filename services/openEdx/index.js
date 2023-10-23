const axios = require('axios');
require('dotenv').config();

async function login(username, password) {
  const url = 'https://edx.myllama.co/oauth2/access_token';
  try {
    const response = await axios.post(url, null, {
      params: {
        username,
        password,
        grant_type: 'password',
        client_id: process.env.OPEN_EDX_CLIENT_ID,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
}

module.exports = {
  login,
};
