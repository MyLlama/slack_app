const { sampleActionCallback } = require('./sample-action');
const { openDailyCheckinModalCallback } = require('./open-daily-checkin-action');

module.exports.register = (app) => {
  app.action('sample_action_id', sampleActionCallback);
  app.action('open-daily-checkin-modal', openDailyCheckinModalCallback);
};
