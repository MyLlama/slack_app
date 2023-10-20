async function loginModal() {
  return {
    type: 'modal',
    title: {
      type: 'plain_text',
      text: 'Login to LLama',
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
          action_id: 'plain_text_input-action',
          placeholder: {
            type: 'plain_text',
            text: 'Please Enter Your Username',
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
          action_id: 'plain_text_input-action',
          placeholder: {
            type: 'plain_text',
            text: 'Please Enter Your Password',
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
}

module.exports = loginModal;
