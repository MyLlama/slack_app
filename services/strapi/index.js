const { default: axios } = require('axios');
const { config } = require('dotenv');

config();

module.exports.getMasterQuote = async function getMasterQuote() {
  const masterQuote = {
    quote: '',
    author: '',
  };
  try {
    const baseUrl = process.env.STRAPI_BASE_URL;
    const url = `${baseUrl}/master-quotes?populate=*`;
    const headers = {
      Authorization: `Bearer ${process.env.SLACK_STRAPI_AUTH_TOKEN}`,
    };
    const response = await axios.get(url, { headers });
    const dataLength = response.data.data.length;
    const randomQuoteIndex = Math.floor(Math.random() * dataLength);
    if (response.status === 200) {
      masterQuote.quote = response.data.data[randomQuoteIndex].attributes.MasterQuotes;
      masterQuote.author = response.data.data[randomQuoteIndex].attributes.Author;
    }
  } catch (error) {
    console.error(`Error fetching data ${error}`);
  }
  return masterQuote;
};
