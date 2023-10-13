const { sampleViewCallback } = require('./sample-view');
const { postDailyCheckin } = require('./daily-checkins');

module.exports.register = (app) => {
  app.view('sample_view_id', sampleViewCallback);
  app.view('dailyCheckin', postDailyCheckin);
};
