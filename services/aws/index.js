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
    Checkins: {
      Question_1: {
        Question: params.data[0].question,
        Answer: params.data[0].answer,
      },
      Question_2: {
        Question: params.data[1].question,
        Answer: params.data[1].answer,
      },
      Question_3: {
        Question: params.data[2].question,
        Answer: params.data[2].answer,
      },
    },
  };
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
