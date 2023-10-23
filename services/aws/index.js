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

async function postLoginCredentials(userid, token) {
  const payload = {
    TableName: 'UserCredentials',
    Item: {
      id: userid + Math.floor(Date.now() / 1000),
      user_id: userid,
      token,
      timestamp: Math.floor(Date.now() / 1000),
    },
  };

  docClient.put(payload, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Login Successful');
    }
  });
}

async function isUserAuthorised() {
  const params = {
    TableName: 'UserCredentials',
    IndexName: 'user_id-index',
    KeyConditionExpression: 'user_id = :v_title',
    ExpressionAttributeValues: {
      ':v_title': 'U05C2SR91FW',
    },
  };
  try {
    const resp = await docClient.query(params).promise();
    return resp.Count;
  } catch (err) {
    console.error(err);
    return 0;
  }
}

module.exports = { dailyCheckinFeedback, surveyFeedback, postLoginCredentials, isUserAuthorised };
