const { sampleViewCallback } = require('./sample-view');
const { OpenDailyCheckinModalCallback } = require('../actions/open-daily-checkin-action');

module.exports.register = (app) => {
  app.view('sample_view_id', sampleViewCallback);
  app.view('dailyCheckin', OpenDailyCheckinModalCallback);
};
