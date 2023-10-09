const unauthorisedUserView = {
  type: 'home',
  blocks: [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: 'Happy Wednesday!',
        emoji: true,
      },
    },
    {
      type: 'context',
      elements: [
        {
          type: 'plain_text',
          text: ':wave: Hey, how do you feel today? Take a 30 sec check-in !',
          emoji: true,
        },
      ],
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: ':Memo: Check-in',
            emoji: true,
          },
          value: 'click_me_123',
          action_id: 'actionId-0',
        },
      ],
    },
  ],
};

module.exports = unauthorisedUserView;
