import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reducers/interface';
// import io from 'socket.io-client';
import axios from 'utils/axios';
import { setMessage, setMessageList } from 'store/reducers/chat';
import View from './view';
import { useSocket } from 'utils/socket';
// const socket = io(host);

const ChatRoom: React.FC = _ => {
  const [title, setTitle] = useState('우리집');
  const [url, setUrl] = useState('');
  const [input, setInput] = useState('');

  const userId = useSelector((state: RootState) => state.user.profile.id);
  const messages = useSelector((state: RootState) => state.chat.messages);
  const chatContent = useRef<null | HTMLDivElement>(null);

  const dispatch = useDispatch();

  const socket = useSocket("message", (payload: any) => dispatch(setMessage(payload)));

  useEffect(() => {
    getMessages();

    // socket.on('message', (payload: any) => {
    //   dispatch(setMessage(payload));
    //   scrollToChatBottom();
    // });

    // return () => {
    //   socket.close();
    // };
  }, []);

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
    dispatch(setMessageList(messages));
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

    if (e.keyCode === 13 && e.shiftKey) {
      setInput(`${input}\n`);
    }
  };

  const onSend = () => {
    if (input.length > 0) {
      // const s = socket;
      socket.emit('message', { message: input });
    }
  };

  return (
    <View
      title={title}
      messages={messages}
      onSend={onSend}
      input={input}
      onChange={onChange}
      onKeyDown={onKeyDown}
      userId={userId}
      chatContent={chatContent}
      chatKey={url}
    />
  );
};

export default ChatRoom;
