const { getMyllamaMessage } = require('../messages/get-myllama-message');

const getMyllamaCallback = async ({ ack, body, client }) => {
  await ack();
  const blocks = await getMyllamaMessage(body.user_name);
  try {
    client.chat.postMessage({
      channel: body.user_id,
      blocks,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getMyllamaCallback };
