const { sampleActionCallback } = require('./sample-action');

const { openContentLibraryModalCallback } = require('./open-content-library-action');
const { openDailyCheckinModalCallback } = require('./open-daily-checkin-action');
const { openSurveyModalCallback } = require('./open-survey-action');

module.exports.register = (app) => {
  app.action('sample_action_id', sampleActionCallback);
  app.action('open-daily-checkin-modal', openDailyCheckinModalCallback);
  app.action(/open-content-library-modal-[0-9]/, openContentLibraryModalCallback);
  app.action('open-survey-modal', openSurveyModalCallback);
};
