const { sampleViewCallback } = require('./sample-view');
const { postDailyCheckinFeedback } = require('./daily-checkin');
const { postSurveyFeedback } = require('./survey');
const { openContentLibraryModalCallback } = require('../actions/open-content-library-action');

module.exports.register = (app) => {
  app.view('sample_view_id', sampleViewCallback);
  app.view('postDailyCheckin', postDailyCheckinFeedback);
  app.view('postSurvey', postSurveyFeedback);
  app.view('open-content-library-modal', openContentLibraryModalCallback);
};
