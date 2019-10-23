import React from 'react';
import { Chat } from 'modules';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'Chat',
  decorators: [withKnobs],
}

export const DefaultChatMessage = () => (
  <Chat
    message={text('Text', '안녕하세요. 반가워요. 진짜로 반가워요 나랑 친구 먹을래요?\n\n디프만 짱짱. 미니프로젝트 흥하자.\n\n🙋‍♀️고객이 답이다 💬')}
    sender={boolean('Sender', false)}
    username={text('Username', '디프만')}
  />
)