const contentLibraryModal = {
  type: 'modal',
  callback_id: 'contentLibrary',
  title: {
    type: 'plain_text',
    text: 'Office Friendly Breaks',
    emoji: true,
  },
  submit: {
    type: 'plain_text',
    text: 'Submit',
    emoji: true,
  },
  close: {
    type: 'plain_text',
    text: 'Cancel',
    emoji: true,
  },
  blocks: [
    {
      type: 'image',
      image_url:
        'https://i1.wp.com/thetempest.co/wp-content/uploads/2017/08/The-wise-words-of-Michael-Scott-Imgur-2.jpg?w=1024&ssl=1',
      alt_text: 'inspiration',
    },
    {
      type: 'section',
      block_id: 'sectionBlockOnlyMrkdwn',
      text: {
        type: 'mrkdwn',
        text: '*4 min stress relief*\nhttps://www.youtube.com/watch?v=wr4N-SdekqY',
      },
    },
  ],
};

module.exports = contentLibraryModal;
