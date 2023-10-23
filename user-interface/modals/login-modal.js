module.exports = {
  type: 'modal',
  callback_id: 'login',
  title: {
    type: 'plain_text',
    text: 'Login',
    emoji: true,
  },
  submit: {
    type: 'plain_text',
    text: 'Submit',
    emoji: true,
  },
  close: {
    type: 'plain_text',
    text: 'Cancel',
    emoji: true,
  },
  blocks: [
    {
      type: 'input',
      element: {
        type: 'plain_text_input',
        action_id: 'username',
        placeholder: {
          type: 'plain_text',
          text: 'Enter username',
          emoji: true,
        },
      },
      label: {
        type: 'plain_text',
        text: 'Username',
        emoji: true,
      },
    },
    {
      type: 'input',
      element: {
        type: 'plain_text_input',
        action_id: 'password',
        placeholder: {
          type: 'plain_text',
          text: 'Enter password',
          emoji: true,
        },
      },
      label: {
        type: 'plain_text',
        text: 'Password',
        emoji: true,
      },
    },
  ],
};
