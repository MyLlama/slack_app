const getSurveyModal = require('../../user-interface/models/survey-modal');

const openSurveyModalCallback = async ({ ack, body, client }) => {
  await ack();
  const SurveyModal = await getSurveyModal(body.user.name);
  try {
    await client.views.open({
      trigger_id: body.trigger_id,
      view: SurveyModal,
    });
  } catch (error) {
    console.error('error', error);
  }
};
module.exports = { openSurveyModalCallback };
