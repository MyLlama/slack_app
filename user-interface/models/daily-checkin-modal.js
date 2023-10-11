const { getdailyCheckinQuestions } = require('../../services/strapi/index');

async function dailyCheckinModal(username) {
  const dailyCheckinQuestions = await getdailyCheckinQuestions();
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
      {
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
                text: dailyCheckinQuestions[0].options[0],
                emoji: true,
              },
              value: 'value-0',
            },
            {
              text: {
                type: 'plain_text',
                text: dailyCheckinQuestions[0].options[1],
                emoji: true,
              },
              value: 'value-1',
            },
            {
              text: {
                type: 'plain_text',
                text: dailyCheckinQuestions[0].options[2],
                emoji: true,
              },
              value: 'value-2',
            },
            {
              text: {
                type: 'plain_text',
                text: dailyCheckinQuestions[0].options[3],
                emoji: true,
              },
              value: 'value-3',
            },
            {
              text: {
                type: 'plain_text',
                text: dailyCheckinQuestions[0].options[4],
                emoji: true,
              },
              value: 'value-4',
            },
          ],
          action_id: 'multi_static_select-action',
        },
        label: {
          type: 'plain_text',
          text: dailyCheckinQuestions[0].question,
          emoji: true,
        },
      },
      {
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
                text: dailyCheckinQuestions[1].options[0],
                emoji: true,
              },
              value: 'value-0',
            },
            {
              text: {
                type: 'plain_text',
                text: dailyCheckinQuestions[1].options[1],
                emoji: true,
              },
              value: 'value-1',
            },
            {
              text: {
                type: 'plain_text',
                text: dailyCheckinQuestions[1].options[2],
                emoji: true,
              },
              value: 'value-2',
            },
            {
              text: {
                type: 'plain_text',
                text: dailyCheckinQuestions[1].options[3],
                emoji: true,
              },
              value: 'value-3',
            },
            {
              text: {
                type: 'plain_text',
                text: dailyCheckinQuestions[1].options[4],
                emoji: true,
              },
              value: 'value-4',
            },
          ],
          action_id: 'multi_static_select-action',
        },
        label: {
          type: 'plain_text',
          text: dailyCheckinQuestions[1].question,
          emoji: true,
        },
      },
      {
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
                text: dailyCheckinQuestions[2].options[0],
                emoji: true,
              },
              value: 'value-0',
            },
            {
              text: {
                type: 'plain_text',
                text: dailyCheckinQuestions[2].options[1],
                emoji: true,
              },
              value: 'value-1',
            },
            {
              text: {
                type: 'plain_text',
                text: dailyCheckinQuestions[2].options[2],
                emoji: true,
              },
              value: 'value-2',
            },
            {
              text: {
                type: 'plain_text',
                text: dailyCheckinQuestions[2].options[3],
                emoji: true,
              },
              value: 'value-3',
            },
            {
              text: {
                type: 'plain_text',
                text: dailyCheckinQuestions[2].options[4],
                emoji: true,
              },
              value: 'value-4',
            },
          ],
          action_id: 'multi_static_select-action',
        },
        label: {
          type: 'plain_text',
          text: dailyCheckinQuestions[2].question,
          emoji: true,
        },
      },
    ],
    type: 'modal',
    callback_id: 'dailyCheckin',
  };
}
module.exports = { dailyCheckinModal };
