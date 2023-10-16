const { getSurveyQuestions } = require('../../services/strapi/index');

async function getSurveyModal(username) {
  const SurveyQuestions = await getSurveyQuestions();
  const questions = SurveyQuestions.map((SurveyQuestion) => ({
    type: 'input',
    element: {
      type: 'static_select',
      placeholder: {
        type: 'plain_text',
        text: 'I feel..',
        emoji: true,
      },
      options: [
        {
          text: {
            type: 'plain_text',
            text: 'good',
            emoji: true,
          },
          value: SurveyQuestion.options[0],
        },
        {
          text: {
            type: 'plain_text',
            text: 'better',
            emoji: true,
          },
          value: SurveyQuestion.options[1],
        },
        {
          text: {
            type: 'plain_text',
            text: 'best',
            emoji: true,
          },
          value: SurveyQuestion.options[2],
        },
        {
          text: {
            type: 'plain_text',
            text: 'wonderfull',
            emoji: true,
          },
          value: SurveyQuestion.options[3],
        },
        {
          text: {
            type: 'plain_text',
            text: 'Excieting',
            emoji: true,
          },
          value: SurveyQuestion.options[4],
        },
      ],
      action_id: SurveyQuestion.question,
    },
    label: {
      type: 'plain_text',
      text: SurveyQuestion.question,
      emoji: true,
    },
  }));

  return {
    title: {
      type: 'plain_text',
      text: 'Workplace check-in',
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
