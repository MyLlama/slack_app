const appIntroCallback = async (say, event) => {
  const messageBlocks = {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'plain_text',
          text: `:wave: Hey <@${event.user}>!`,
          emoji: true,
        },
      },
      {
        type: 'section',
        text: {
          type: 'plain_text',
          text: "We are here to support you and your team stay healthy, motivated and close to each other with mini breaks, journeys and team activities. Here's what you can do:",
          emoji: true,
        },
      },
      {
        type: 'rich_text',
        elements: [
          {
            type: 'rich_text_list',
            style: 'bullet',
            elements: [
              {
                type: 'rich_text_section',
                elements: [
                  {
                    type: 'text',
                    text: 'Find a recharging break whenever you feel stressed, tired or feel physical tensions',
                  },
                ],
              },
              {
                type: 'rich_text_section',
                elements: [
                  {
                    type: 'text',
                    text: 'Join live sessions, alone or with your team Enroll in short journeys to improve your well-being in 5min/day.',
                  },
                ],
              },
              {
                type: 'rich_text_section',
                elements: [
                  {
                    type: 'text',
                    text: 'Send some fun and connecting ice-breakers and questions.',
                  },
                ],
              },
              {
                type: 'rich_text_section',
                elements: [
                  {
                    type: 'text',
                    text: 'Get matched with a colleague for a non-work related conversation (if activated).',
                  },
                ],
              },
              {
                type: 'rich_text_section',
                elements: [
                  {
                    type: 'text',
                    text: 'Get on a team journey to practice yoga or fitness together',
                  },
                ],
              },
              {
                type: 'rich_text_section',
                elements: [
                  {
                    type: 'text',
                    text: 'Monitor your own mental, physical and social wellbeing over time.',
                  },
                ],
              },
              {
                type: 'rich_text_section',
                elements: [
                  {
                    type: 'text',
                    text: 'Set reminders in Slack or in your calendar to stay on track even on a busy day.',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'section',
        text: {
          type: 'plain_text',
          text: 'We wish you a wonderful time !!:man-gesturing-ok::skin-tone-2:',
          emoji: true,
        },
      },
    ],
  };
  say(messageBlocks);
};
module.exports = { appIntroCallback };
