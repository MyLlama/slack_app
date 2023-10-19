const { getActivityCollections } = require('../../services/strapi/index');

const getActivityCollectionsMessage = async (username) => {
  const activities = await getActivityCollections({ showAll: true });
  const activityButtons = activities.map((activity) => ({
    type: 'button',
    text: {
      type: 'plain_text',
      text: activity.attributes.title,
    },
    action_id: `open-content-library-modal-${activity.id}`,
  }));
  return [
    {
      type: 'section',
      text: {
        type: 'plain_text',
        text: `:wave: Hey <@${username}>!`,
        emoji: true,
      },
    },
    {
      type: 'section',
      text: {
        type: 'plain_text',
        text: 'What do you want to focus on today?',
        emoji: true,
      },
    },
    {
      type: 'actions',
      elements: [
        ...activityButtons,
      ],
    },
  ];
};
module.exports = { getActivityCollectionsMessage };
