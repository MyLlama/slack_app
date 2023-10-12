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

async function dailyCheckinsFeedback(params) {
  const input = {
    id: params.body.user.id + Math.random().toString(),
    User_id: params.body.user.id,
    Timestamp: Math.floor(Date.now() / 1000),
    Checkins: { },
  };

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < params.data.length; i++) {
    const key = `Question_${i + 1}`;
    input.Checkins[key] = {
      Question: params.data[i].question,
      Answer: params.data[i].answer,
    };
  }
  const payload = {
    TableName: 'DailyCheckin',
    Item: input,
  };
  docClient.put(payload, (err) => {
    if (err) {
      console.log(`users::save::error - ${err}`);
    } else {
      console.log('users::save::success');
    }
  });
}

module.exports = { dailyCheckinsFeedback };
