const { sampleCommandCallback } = require('./sample-command');
const { getMyllamaCallback } = require('./get-myllama');

module.exports.register = (app) => {
  app.command('/sample-command', sampleCommandCallback);
  app.command('/getmyllama', getMyllamaCallback);
};
