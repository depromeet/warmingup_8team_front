import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers/interface';
import io from 'socket.io-client';
import axios from 'utils/axios';
import View from './view';

const socket = io('http://localhost:5000');

const ChatRoom: React.FC = _ => {
  const [title, setTitle] = useState('우리집');
  const [url, setUrl] = useState('');
  const [messageList, setMessages] = useState<any>([]);
  const [input, setInput] = useState('');

  const userId = useSelector((state: RootState) => state.user.profile.id);
  const chatContent = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    getMessages();

    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    socket.on('message', (payload: any) => {
      let previousMessages: Array<any> = [...messageList];
      previousMessages.push(payload);
      setMessages(previousMessages);
      scrollToChatBottom();
    });
    scrollToChatBottom();
  }, [messageList]);

  const scrollToChatBottom = () => {
    const element = chatContent.current;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  };

  const getMessages = async () => {
    const res = await axios.get('/chatroom');
    const { data } = res;
    const { messages, url } = data;
    setUrl(url);
    setMessages(messages);
  };

  const onChange = (e: any) => {
    setInput(e.target.value);
  };

  const onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      onSend();
      setInput('');
      e.preventDefault();
    }

    if (e.keyCode == 13 && e.shiftKey) {
      setInput(`${input}\n`);
    }
  };

  const onSend = () => {
    if (input.length > 0) {
      const s = socket;
      s.emit('message', { message: input });
    }
  };

  return (
    <View
      title={title}
      messages={messageList}
      onSend={onSend}
      input={input}
      onChange={onChange}
      onKeyDown={onKeyDown}
      userId={userId}
      chatContent={chatContent}
    />
  );
};

export default ChatRoom;
