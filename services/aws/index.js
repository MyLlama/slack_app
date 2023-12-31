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

async function dailyCheckinFeedback(params) {
  const checkinFeedback = params.data.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));
  const payload = {
    TableName: 'DailyCheckin',
    Item: {
      id: params.body.user.id + Math.floor(Date.now() / 1000),
      user_id: params.body.user.id,
      timestamp: Math.floor(Date.now() / 1000),
      checkinFeedback,
    },
  };

  docClient.put(payload, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Daily check-in feedback has been posted successfully !!');
    }
  });
}

async function surveyFeedback(params) {
  const feedback = params.data.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));
  const payload = {
    TableName: 'Surveys',
    Item: {
      id: params.body.user.id + Math.floor(Date.now() / 1000),
      user_id: params.body.user.id,
      timestamp: Math.floor(Date.now() / 1000),
      feedback,
    },
  };

  docClient.put(payload, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Survey feedback has been posted successfully !!');
    }
  });
}

module.exports = { dailyCheckinFeedback, surveyFeedback };
