const { default: axios } = require('axios');
const { config } = require('dotenv');

config();

const baseUrl = process.env.STRAPI_BASE_URL;

async function getMasterQuote() {
  try {
    const url = `${baseUrl}/master-quotes?populate=*`;
    const headers = {
      Authorization: `Bearer ${process.env.SLACK_STRAPI_AUTH_TOKEN}`,
    };
    const response = await axios.get(url, { headers });
    const dataLength = response.data.data.length;
    const randomQuoteIndex = Math.floor(Math.random() * dataLength);
    if (response.status === 200) {
      const masterQuote = response.data.data[randomQuoteIndex].attributes;
      return masterQuote;
    }
    return [];
  } catch (error) {
    console.error(`Error fetching data ${error}`);
    return [];
  }
}

async function getdailyCheckinQuestions() {
  try {
    const url = `${baseUrl}/daily-checkins?populate=*`;
    const headers = {
      Authorization: `Bearer ${process.env.SLACK_STRAPI_AUTH_TOKEN}`,
    };
    const response = await axios.get(url, { headers });
    if (response.status === 200) {
      const dailyCheckins = response.data.data[0].attributes.DailyCheckins;
      return dailyCheckins;
    }
    return [];
  } catch (error) {
    console.error(`Error fetching data ${error}`);
    return [];
  }
}

module.exports = {
  getMasterQuote,
  getdailyCheckinQuestions,
};
