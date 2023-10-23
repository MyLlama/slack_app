const { unauthorisedUserView } = require('../../user-interface/app-home/unauthorised-user-view');
const { authorisedUserView } = require('../../user-interface/app-home/authorised-user-view');
const { getWelcomeMessage } = require('../../services/strapi/index');
const { isUserAuthorised } = require('../../services/aws/index');

const appHomeOpenedCallback = async ({ client, event, say }) => {
// Send welcome message to the user when app home is opened for the first time.
  if (event.tab == 'home' && !event.view) {
    const welcomeMessage = await getWelcomeMessage();
    say(`:wave: Hey <@${event.user}> \n \n ${welcomeMessage}`);
  }
  const isUserAuth = await isUserAuthorised(event.user);
  const homeView = isUserAuth ? await authorisedUserView() : await unauthorisedUserView();
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
