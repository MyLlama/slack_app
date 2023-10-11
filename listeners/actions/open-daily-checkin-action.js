const modal = require('../../user-interface/models/daily-checkin-modal');

const openDailyCheckinModalCallback = async ({ ack, body, client }) => {
  await ack();

  try {
    await client.views.open({
      trigger_id: body.trigger_id,
      view: modal,
    });
  } catch (error) {
    console.error('error', error);
  }
};
module.exports = { openDailyCheckinModalCallback };
