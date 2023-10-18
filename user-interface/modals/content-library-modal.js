const { getActivityCollection } = require('../../services/strapi/index');

const baseUrl = process.env.STRAPI_BASE_URL;

async function getContentLibraryModal(body) {
  // Extract the collection id from action id
  const collectionId = body.actions[0].action_id.replace('open-content-library-modal-', '');
  try {
    // get the selected collection based on collectionId
    const selectedCollection = await getActivityCollection(collectionId);
    if (selectedCollection) {
      // Use map to create an array of modals for each activity
      const activities = selectedCollection.attributes.activities.map((activity) => [{
        type: 'section',
        text: {
          type: 'plain_text',
          text: `${activity.title}\n${activity.description}`,
          emoji: true,
        },
      },
      {
        type: 'image',
        image_url: `${baseUrl}${selectedCollection.attributes.thumbnail.data.attributes.url}`,
        alt_text: 'inspiration',
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Play Video',
            },
            url: `${baseUrl}${activity.video.data.attributes.url}`,
            action_id: 'button_1_click',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Share',
            },
            url: 'https://www.example.com/button2-link',
            action_id: 'button_2_click',
          },
        ],
      },
      ]);

      const view = {
        type: 'modal',
        callback_id: 'contentLibrary',
        title: {
          type: 'plain_text',
          text: `${selectedCollection.attributes.title}`,
          emoji: true,
        },
        close: {
          type: 'plain_text',
          text: 'Cancel',
          emoji: true,
        },
        blocks: activities.flat(1),
      };
      return view;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
  return [];
}

module.exports = getContentLibraryModal;
