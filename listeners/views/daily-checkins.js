const { dailyCheckinsFeedback } = require('../../services/aws/index');

// eslint-disable-next-line consistent-return
const postDailychechinFeedback = async ({ ack, body }) => {
  await ack({
    response_action: 'clear',
  });
  console.log(body);
  try {
    const feedbackData = Object.values(body.view.state.values).map((value) => ({
      question: Object.keys(value)[0],
      answer: Object.values(value)[0].selected_option.value,
    }));
    dailyCheckinsFeedback({ data: feedbackData, body });
    return feedbackData;
  } catch (error) {
    console.error(error);
  }
};
module.exports = { postDailychechinFeedback };
