const loginModal = require('../../user-interface/modals/login-modal');

const loginModalCallback = async ({ ack, body, client }) => {
  await ack();
  const view = await loginModal(body);
  try {
    await client.views.open({
      trigger_id: body.trigger_id,
      view,
    });
  } catch (error) {
    console.error('Error opening modal', error);
  }
};

module.exports = { loginModalCallback };
