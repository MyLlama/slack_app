const { SurveyFeedback } = require('../../services/aws/index');

// eslint-disable-next-line consistent-return
const postSurveyFeedback = async ({ ack, body }) => {
  await ack({
    response_action: 'clear',
  });
  try {
    const SurveyData = Object.values(body.view.state.values).map((value) => ({
      question: Object.keys(value)[0],
      answer: Object.values(value)[0].selected_option.value,
    }));
    SurveyFeedback({ data: SurveyData, body });
    return SurveyData;
  } catch (error) {
    console.error(error);
  }
};
module.exports = { postSurveyFeedback };
