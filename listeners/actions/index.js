const { sampleActionCallback } = require('./sample-action');
const { OpenDailyCheckinModalCallback } = require('./open-daily-checkin-action');

module.exports.register = (app) => {
  app.action('sample_action_id', sampleActionCallback);
  app.action('open-Daily-Checkin-modal-action-id', OpenDailyCheckinModalCallback);
};
