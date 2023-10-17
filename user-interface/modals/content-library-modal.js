const { getActivityCollection } = require('../../services/strapi/index');

const baseUrl = process.env.STRAPI_BASE_URL;

async function getContentLibraryModal(body) {
  const collections = await getActivityCollection();
  try {
    // Extract the collection id from action id
    const collectionId = body.actions[0].action_id.replace('open-content-library-modal-', '');
    console.log(collectionId);
    // Find the selected collection based on collectionId
    const selectedCollection = collections.find((collection) => collection.id == collectionId);
    console.log(selectedCollection.attributes.activities);
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
        type: 'video',
        title: {
          type: 'plain_text',
          text: `*${activity.title}*`,
          emoji: true,
        },
        title_url: 'https://www.youtube.com/embed/RRxQQxiM7AA?feature=oembed&autoplay=1',
        video_url: 'https://www.youtube.com/embed/RRxQQxiM7AA?feature=oembed&autoplay=1',
        alt_text: 'How to use Slack?',
        thumbnail_url: `${baseUrl}${selectedCollection.attributes.thumbnail.data.attributes.url}`,
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
      console.log('view', view);
      return view;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
  return [];
}

module.exports = getContentLibraryModal;
