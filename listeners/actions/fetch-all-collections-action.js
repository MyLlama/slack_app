const view = require('../../user-interface/app-home/unauthorised-user-view');

const fetchAllCollectionsCallback = async ({ ack, body, client }) => {
  await ack();
  const homeView = await view.unauthorisedUserView({ showAll: true });
  try {
    await client.views.update({
      view_id: body.view.id,
      view: homeView,
    });
  } catch (error) {
    console.error('Error opening modal', error);
  }
};

module.exports = { fetchAllCollectionsCallback };
