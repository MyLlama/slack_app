const QuestionsModal = {
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
          text: ':wave: Hey Krishan Sharma!',
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
              text: ':smile:',
              emoji: true,
            },
            value: 'value-0',
          },
          {
            text: {
              type: 'plain_text',
              text: ':grinning:',
              emoji: true,
            },
            value: 'value-1',
          },
          {
            text: {
              type: 'plain_text',
              text: ':slightly_smiling_face:',
              emoji: true,
            },
            value: 'value-2',
          },
          {
            text: {
              type: 'plain_text',
              text: ':confused:',
              emoji: true,
            },
            value: 'value-3',
          },
          {
            text: {
              type: 'plain_text',
              text: ':slightly_frowning_face:',
              emoji: true,
            },
            value: 'value-4',
          },
        ],
        action_id: 'multi_static_select-action',
      },
      label: {
        type: 'plain_text',
        text: ':muscle:How are you feeling physically today ?',
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
              text: ':smile:',
              emoji: true,
            },
            value: 'value-0',
          },
          {
            text: {
              type: 'plain_text',
              text: ':grinning:',
              emoji: true,
            },
            value: 'value-1',
          },
          {
            text: {
              type: 'plain_text',
              text: ':slightly_smiling_face:',
              emoji: true,
            },
            value: 'value-2',
          },
          {
            text: {
              type: 'plain_text',
              text: ':confused:',
              emoji: true,
            },
            value: 'value-3',
          },
          {
            text: {
              type: 'plain_text',
              text: ':slightly_frowning_face:',
              emoji: true,
            },
            value: 'value-4',
          },
        ],
        action_id: 'multi_static_select-action',
      },
      label: {
        type: 'plain_text',
        text: ':zap:How are you feeling Mentally today ?',
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
              text: ':smile:',
              emoji: true,
            },
            value: 'value-0',
          },
          {
            text: {
              type: 'plain_text',
              text: ':grinning:',
              emoji: true,
            },
            value: 'value-1',
          },
          {
            text: {
              type: 'plain_text',
              text: ':slightly_smiling_face:',
              emoji: true,
            },
            value: 'value-2',
          },
          {
            text: {
              type: 'plain_text',
              text: ':confused:',
              emoji: true,
            },
            value: 'value-3',
          },
          {
            text: {
              type: 'plain_text',
              text: ':slightly_frowning_face:',
              emoji: true,
            },
            value: 'value-4',
          },
        ],
        action_id: 'multi_static_select-action',
      },
      label: {
        type: 'plain_text',
        text: ':busts_in_silhouette:How Socially connected do you feel today?',
        emoji: true,
      },
    },
  ],
  type: 'modal',
  callback_id: 'dailyCheckin',
};

module.exports = QuestionsModal;
