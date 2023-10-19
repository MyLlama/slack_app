const { getActivityCollectionsMessage } = require('../messages/get-activity-collections');

const getMyllamaCallback = async ({ ack, body, client }) => {
  await ack();
  const blocks = await getActivityCollectionsMessage(body.user_name);
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
