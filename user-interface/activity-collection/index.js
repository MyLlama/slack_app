const { getActivityCollections } = require('../../services/strapi/index');

const baseUrl = process.env.STRAPI_BASE_URL;

async function getActivityCollectionView() {
  const activityCollections = await getActivityCollections();
  const activities = activityCollections.map((activityCollection) => {
    const imageEndPoint = activityCollection.attributes.thumbnail.data.attributes.url;
    const collectionTitle = activityCollection.attributes.title;
    const collectionDescription = activityCollection.attributes.description;

    return [{
      type: 'section',
      block_id: `id: ${activityCollection.id}`,
      text: {
        type: 'mrkdwn',
        text: `*${collectionTitle}*\n${collectionDescription}`,
      },
      accessory: {
        type: 'image',
        image_url: baseUrl + imageEndPoint,
        alt_text: 'thumbnail',
      },
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Open Collection',
            emoji: true,
          },
          // Using an unique identifier to select a unique modal
          action_id: `open-content-library-modal-${activityCollection.id}`,
        },
      ],
    },
    {
      type: 'divider',
    }];
  });
  return activities;
}

module.exports = { getActivityCollectionView };
