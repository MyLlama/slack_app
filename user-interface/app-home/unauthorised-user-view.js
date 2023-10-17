const { getCurrentDay } = require('../../utilities');
const { getMasterQuote } = require('../../services/strapi/index');
const { activityCollectionView } = require('../activity-collection/index');

async function unauthorisedUserView() {
  const day = getCurrentDay();
  const quote = await getMasterQuote();
  let activityCollection = await activityCollectionView();
  activityCollection = activityCollection.flat(1);

  return {
    type: 'home',
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: 'Mindful Moment',
          emoji: true,
        },
      },
      {
        type: 'section',
        block_id: 'sectionBlockOnlyPlainText',
        text: {
          type: 'plain_text',
          text: `"${quote.quote}" - ${quote.author}`,
          emoji: true,
        },
      },
      {
        type: 'divider',
      },
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `Happy ${day}!`,
          emoji: true,
        },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'plain_text',
            text: ':wave: Hey, how do you feel today? Take a 30 sec check-in !',
            emoji: true,
          },
        ],
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: ':Memo: Check-in',
              emoji: true,
            },
            action_id: 'open-daily-checkin-modal',
          },
        ],
      },
      {
        type: 'divider',
      },
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: ':mag_right: Collections',
          emoji: true,
        },
      },
      {
        type: 'divider',
      },
      ...activityCollection,
    ],
  };
}
module.exports = { unauthorisedUserView };
