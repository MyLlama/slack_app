const { sampleActionCallback } = require('./sample-action');
const {
  openDailyCheckinModalCallback,
} = require('./open-daily-checkin-action');
const {
  openContentLibraryModalCallback,
} = require('./open-content-library-action');

module.exports.register = (app) => {
  app.action('sample_action_id', sampleActionCallback);
  app.action('open-daily-checkin-modal', openDailyCheckinModalCallback);
  app.action('open-content-library-modal', openContentLibraryModalCallback);
};
