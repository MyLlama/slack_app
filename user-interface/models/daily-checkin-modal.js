const { getdailyCheckinQuestions } = require('../../services/strapi/index');

async function dailyCheckinModal(username) {
  const dailyCheckinQuestions = await getdailyCheckinQuestions();
  const questions = dailyCheckinQuestions.map((dailyCheckinQuestion) => {
    return {
      type: 'input',
      element: {
        type: 'multi_static_select',
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
            value: 'value-0',
          },
          {
            text: {
              type: 'plain_text',
              text: dailyCheckinQuestion.options[1],
              emoji: true,
            },
            value: 'value-1',
          },
          {
            text: {
              type: 'plain_text',
              text: dailyCheckinQuestion.options[2],
              emoji: true,
            },
            value: 'value-2',
          },
          {
            text: {
              type: 'plain_text',
              text: dailyCheckinQuestion.options[3],
              emoji: true,
            },
            value: 'value-3',
          },
          {
            text: {
              type: 'plain_text',
              text: dailyCheckinQuestion.options[4],
              emoji: true,
            },
            value: 'value-4',
          },
        ],
        action_id: 'multi_static_select-action',
      },
      label: {
        type: 'plain_text',
        text: dailyCheckinQuestion.question,
        emoji: true,
      },
    };
  });
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
