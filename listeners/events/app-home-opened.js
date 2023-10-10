const view = require('../../user-interface/app-home/unauthorised-user-view');

const appHomeOpenedCallback = async ({ client, event }) => {
  if (event.tab !== 'home') return;
  const homeView = await view.unauthorisedUserView();
  try {
    await client.views.publish({
      user_id: event.user,
      view: homeView,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { appHomeOpenedCallback };
