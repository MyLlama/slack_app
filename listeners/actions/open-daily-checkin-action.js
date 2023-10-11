const modal = require('../../user-interface/models/daily-checkin-modal');

const openDailyCheckinModalCallback = async ({ ack, body, client }) => {
  await ack();
  const dailyCheckinModal = await modal.dailyCheckinModal();
  try {
    await client.views.open({
      trigger_id: body.trigger_id,
      view: dailyCheckinModal,
    });
  } catch (error) {
    console.error('error', error);
  }
};
module.exports = { openDailyCheckinModalCallback };
