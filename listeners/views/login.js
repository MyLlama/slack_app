const { login } = require('../../services/openEdx/index');
const { postLoginCredentials } = require('../../services/aws/index');
const { authorisedUserView } = require('../../user-interface/app-home/authorised-user-view');

// eslint-disable-next-line consistent-return
const setLoginCredentials = async ({ ack, body, client }) => {
  await ack({
    response_action: 'clear',
  });
  try {
    const username = Object.values(body.view.state.values)[0].username.value;
    const password = Object.values(body.view.state.values)[1].password.value;
    const response = await login(username, password);
    if (response.access_token) {
      postLoginCredentials(body.user.id, response.access_token);
      const homeView = await authorisedUserView();
      await client.views.publish({
        user_id: body.user.id,
        view: homeView,
      });
    }
    return response;
  } catch (error) {
    console.error(error);
  }
};
module.exports = { setLoginCredentials };
