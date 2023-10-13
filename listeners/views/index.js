const { sampleViewCallback } = require('./sample-view');
const { postDailyCheckinFeedback } = require('./daily-checkins');

module.exports.register = (app) => {
  app.view('sample_view_id', sampleViewCallback);
  app.view('postDailyCheckin', postDailyCheckinFeedback);
};
