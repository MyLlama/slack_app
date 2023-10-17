const { getDailyCheckinQuestions } = require('../../services/strapi/index');

async function getDailyCheckinModal(username) {
  const dailyCheckinQuestions = await getDailyCheckinQuestions();
  const questions = dailyCheckinQuestions.map((dailyCheckinQuestion) => {
    const options = Object.keys(dailyCheckinQuestion.options).map((option) => ({
      text: {
        type: 'plain_text',
        text: option,
        emoji: true,
      },
      value: `${dailyCheckinQuestion.options[option]}`,
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
        action_id: dailyCheckinQuestion.question,
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
    callback_id: 'postDailyCheckin',
  };
}

module.exports = getDailyCheckinModal;
