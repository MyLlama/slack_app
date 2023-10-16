const { getSurveyQuestions } = require('../../services/strapi/index');

async function getSurveyModal(username) {
  const surveyQuestions = await getSurveyQuestions();
  const questions = surveyQuestions.Survey.map((surveyQuestion) => {
    const options = surveyQuestion.options.map((surveyOption) => ({
      text: {
        type: 'plain_text',
        text: surveyOption,
        emoji: true,
      },
      value: surveyOption,
    }));
    return {
      type: 'input',
      element: {
        type: 'static_select',
        placeholder: {
          type: 'plain_text',
          text: 'I feel..',
          emoji: true,
        },
        options,
        action_id: surveyQuestion.question,
      },
      label: {
        type: 'plain_text',
        text: surveyQuestion.question,
        emoji: true,
      },
    };
  });
  return {
    title: {
      type: 'plain_text',
      text: surveyQuestions.title,
    },
    submit: {
      type: 'plain_text',
      text: 'Submit',
    },
    blocks: [
      {
        type: 'context',
        elements: [
          {
            type: 'plain_text',
            text: `:wave: Hey <@${username}>!`,
            emoji: true,
          },
        ],
      },
      ...questions,
    ],
    type: 'modal',
    callback_id: 'postSurvey',
  };
}

module.exports = getSurveyModal;
