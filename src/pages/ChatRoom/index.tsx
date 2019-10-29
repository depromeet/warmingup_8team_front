import React, { useState } from 'react';
import View from './view';


const ChatRoom: React.FC = _ => {
  const [title, setTitle] = useState('우리집');
  const [messages, setMessages] = useState([{
    message: '하.. 오늘 중간고사였는데 완전 망했어요ㅠㅠ 아니 무슨 문제를 그렇게 어렵게 내는지 풀다가 도중에 나올뻔했네ㅎㅎ',
    timestamp: '오후 8:11',
    username: '은솔이',
    userId: 123,
    profileImage: null,
    image: null,
    sender: false,
  }, {
    message: '아빠는 오늘 워크샵 어땠어요?',
    timestamp: '오후 8:11',
    username: '은솔이',
    userId: 123,
    profileImage: null,
    image: null,
    sender: false,
  }, {
    message: '괜찮아, 다음 시험은 분명 더 잘 볼거야! ',
    timestamp: '오후 8:11',
    username: '은솔이',
    userId: 123,
    profileImage: null,
    image: null,
    sender: true,
  }, {
    message: '오늘 워크샵 레크레이션에서 아빠 부서가 1등을 했어. 레스토랑 상품권을 받았는데, 다음에 놀러오면 같이 가자',
    timestamp: '오후 8:11',
    username: '은솔이',
    userId: 123,
    profileImage: null,
    image: null,
    sender: true,
  }, {
    message: null,
    timestamp: '오후 8:11',
    username: '은솔이',
    userId: 123,
    profileImage: null,
    image: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/bodybuilding-meal-plan-1296x728-feature.jpg?w=1155&h=1528',
    sender: true,
  }, {
    message: '오..... 워크샵 최고',
    timestamp: '오후 8:16',
    username: '승찬이',
    userId: 124,
    profileImage: null,
    image: null,
    sender: false,
  }]);

  return (
    <View
      title={title}
      messages={messages}
    />
  );
}

export default ChatRoom;
