const { sampleViewCallback } = require('./sample-view');
const { postDailychechinFeedback } = require('./daily-checkins');

module.exports.register = (app) => {
  app.view('sample_view_id', sampleViewCallback);
  app.view('dailyCheckin', postDailychechinFeedback);
};
