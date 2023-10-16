const { dailyCheckinFeedback } = require('../../services/aws/index');

// eslint-disable-next-line consistent-return
const postDailyCheckinFeedback = async ({ ack, body }) => {
  await ack({
    response_action: 'clear',
  });
  try {
    const feedbackData = Object.values(body.view.state.values).map((value) => ({
      question: Object.keys(value)[0],
      answer: Object.values(value)[0].selected_option.value,
    }));
    dailyCheckinFeedback({ data: feedbackData, body });
    return feedbackData;
  } catch (error) {
    console.error(error);
  }
};
module.exports = { postDailyCheckinFeedback };
