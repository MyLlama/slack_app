const { default: axios } = require('axios');
const { config } = require('dotenv');

config();

module.exports.getMasterQuote = async function getMasterQuote() {
  const masterQuote = {
    quote: '',
    author: '',
  };
  try {
    const apiEndPoint = 'http://13.235.49.69:1337/api/master-quotes?populate=*';
    const headers = {
      Authorization: `Bearer ${process.env.SLACK_STRAPI_AUTH_TOKEN}`,
    };
    const response = await axios.get(apiEndPoint, { headers });
    const dataLength = response.data.data.length;
    const randomQuoteIndex = Math.floor(Math.random() * dataLength);
    if (response.status === 200) {
      masterQuote.quote =
        response.data.data[randomQuoteIndex].attributes.MasterQuotes;
      masterQuote.author =
        response.data.data[randomQuoteIndex].attributes.Author;
    }
  } catch (error) {
    console.error(`Error fetching data ${error}`);
  }
  return masterQuote;
};
