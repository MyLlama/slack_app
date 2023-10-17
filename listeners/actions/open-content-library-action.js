const modal = require('../../user-interface/models/content-library-modal');

const openContentLibraryModalCallback = async ({ ack, body, client }) => {
  await ack();

  try {
    await client.views.open({
      trigger_id: body.trigger_id,
      view: modal,
    });
  } catch (error) {
    console.error('Error opening modal', error);
  }
};

module.exports = { openContentLibraryModalCallback };
