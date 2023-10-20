const view = require('../../user-interface/app-home/unauthorised-user-view');
const { getWelcomeMessage } = require('../../services/strapi/index');

const appHomeOpenedCallback = async ({ client, event, say }) => {
// Send welcome message to the user when app home is opened for the first time.
  if (event.tab == 'home' && !event.view) {
    const welcomeMessage = await getWelcomeMessage();
    say(`:wave: Hey <@${event.user}> \n \n ${welcomeMessage}`);
  }

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
