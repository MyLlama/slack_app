const loginModal = require('../../user-interface/modals/login-modal');

const openLoginModalCallback = async ({ ack, body, client }) => {
  await ack();

  try {
    await client.views.open({
      trigger_id: body.trigger_id,
      view: loginModal,
    });
  } catch (error) {
    console.error('Error opening modal', error);
  }
};

module.exports = { openLoginModalCallback };
