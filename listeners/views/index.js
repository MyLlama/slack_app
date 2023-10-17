const { sampleViewCallback } = require('./sample-view');
const { postDailyCheckinFeedback } = require('./daily-checkin');
const { postSurveyFeedback } = require('./survey');

module.exports.register = (app) => {
  app.view('sample_view_id', sampleViewCallback);
  app.view('postDailyCheckin', postDailyCheckinFeedback);
  app.view('postSurvey', postSurveyFeedback);
};
