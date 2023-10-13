const { getdailyCheckinQuestions } = require('../../services/strapi/index');

async function dailyCheckinModal(username) {
  const dailyCheckinQuestions = await getdailyCheckinQuestions();
  const questions = dailyCheckinQuestions.map((dailyCheckinQuestion) => ({
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
            text: dailyCheckinQuestion.options[0],
            emoji: true,
          },
          value: '5',
        },
        {
          text: {
            type: 'plain_text',
            text: dailyCheckinQuestion.options[1],
            emoji: true,
          },
          value: '4',
        },
        {
          text: {
            type: 'plain_text',
            text: dailyCheckinQuestion.options[2],
            emoji: true,
          },
          value: '3',
        },
        {
          text: {
            type: 'plain_text',
            text: dailyCheckinQuestion.options[3],
            emoji: true,
          },
          value: '2',
        },
        {
          text: {
            type: 'plain_text',
            text: dailyCheckinQuestion.options[4],
            emoji: true,
          },
          value: '1',
        },
      ],
      action_id: dailyCheckinQuestion.question,
    },
    label: {
      type: 'plain_text',
      text: dailyCheckinQuestion.question,
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
    callback_id: 'dailyCheckin',
  };
}
module.exports = { dailyCheckinModal };
