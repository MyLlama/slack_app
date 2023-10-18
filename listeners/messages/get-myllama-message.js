const { getActivityCollections } = require('../../services/strapi/index');

const getMyllamaMessage = async (username) => {
  const activities = await getActivityCollections({ showAll: true });
  const activityButtons = activities.map((activity) => {
    const activityButtonTitle = activity.attributes.title;
    const activityId = activity.id;
    return {
      type: 'button',
      text: {
        type: 'plain_text',
        text: activityButtonTitle,
      },
      action_id: `open-content-library-modal-${activityId}`,
    };
  });
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
        text: 'This is a plain text section block.',
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
module.exports = { getMyllamaMessage };
