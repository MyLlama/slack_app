const contentLibraryModal = require('../../user-interface/modals/content-library-modal');

const openContentLibraryModalCallback = async ({ ack, body, client }) => {
  await ack();
  const view = await contentLibraryModal(body);
  try {
    await client.views.open({
      trigger_id: body.trigger_id,
      view,
    });
  } catch (error) {
    console.error('Error opening modal', error);
  }
};

module.exports = { openContentLibraryModalCallback };
