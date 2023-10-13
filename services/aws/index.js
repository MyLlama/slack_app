const AWS = require('aws-sdk');
require('dotenv').config();

const awsConfig = {
  region: 'ap-south-1',
  endpoint: process.env.AWS_DYNAMO_DB_ENDPOINT_URL,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
};
AWS.config.update(awsConfig);

const docClient = new AWS.DynamoDB.DocumentClient();
const timestamp = Math.floor(Date.now() / 1000);

async function dailyCheckinFeedback(params) {
  const checkinFeedback = params.data.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));
  const payload = {
    TableName: 'DailyCheckin',
    Item: {
      id: params.body.user.id + timestamp,
      user_id: params.body.user.id,
      timestamp,
      checkinFeedback,
    },
  };

  docClient.put(payload, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Daily checkins feedback posted successfully !!');
    }
  });
}

module.exports = { dailyCheckinFeedback };
