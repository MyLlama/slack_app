const view = require('../../user-interface/app-home/unauthorised-user-view');

const appHomeOpenedCallback = async ({ client, event }) => {
  // Ignore the `app_home_opened` event for anything but the Home tab
  if (event.tab !== 'home') return;

  try {
    await client.views.publish({
      user_id: event.user,
      view,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { appHomeOpenedCallback };
