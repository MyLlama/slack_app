const { sampleViewCallback } = require('./sample-view');
const { openDailyCheckinModalCallback } = require('../actions/open-daily-checkin-action');
const { openContentLibraryModalCallback } = require('../actions/open-content-library-action');

module.exports.register = (app) => {
  app.view('sample_view_id', sampleViewCallback);
  app.view('dailyCheckin', openDailyCheckinModalCallback);
  app.view('open-content-library-modal', openContentLibraryModalCallback);
};
