/* eslint-disable no-sequences */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
const { getActivityCollection } = require('../../services/strapi/index');

const baseUrl = process.env.STRAPI_BASE_URL;


async function activityCollectionView() {
  const activityCollections = await getActivityCollection();
  // eslint-disable-next-line arrow-body-style
  const activities = activityCollections.map((activityCollection) => {
    const imageEndPoint = activityCollection.attributes.thumbnail.data.attributes.url;
    const collectionTitle = activityCollection.attributes.title;
    const collectionDescription = activityCollection.attributes.description;
    // const collectionId = activityCollection.attributes.activities[index].id;


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
    // eslint-disable-next-line comma-dangle
    },];
  });
  return activities;
}

module.exports = { activityCollectionView };
