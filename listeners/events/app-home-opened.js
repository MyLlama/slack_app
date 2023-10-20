const view = require('../../user-interface/app-home/unauthorised-user-view');
const { appIntroCallback } = require('../messages/app-intro');

const appHomeOpenedCallback = async ({ client, event, say }) => {
  if (event.tab == 'home' && !event.view) {
    await appIntroCallback(say, event);
  }
  console.log(event.user);
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
