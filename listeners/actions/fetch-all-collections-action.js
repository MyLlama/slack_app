const { authorisedUserView } = require('../../user-interface/app-home/authorised-user-view');

const fetchAllCollectionsCallback = async ({ ack, body, client }) => {
  await ack();
  const homeView = await authorisedUserView({ showAll: true });
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
