import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers/interface';
import io from 'socket.io-client';
import axios from 'utils/axios';
import View from './view';

const socket = io('http://localhost:5000');

const ChatRoom: React.FC = _ => {
  const [title, setTitle] = useState('우리집');
  const [messageList, setMessages] = useState<any>([]);
  const [input, setInput] = useState('');

  const userId = useSelector((state: RootState) => state.user.profile.id);

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
    });
  }, [messageList]);

  const addMessage = (message: any) => {
    console.log(messageList);
    // let previousMessages: Array<any> = [...messages];
    // previousMessages.push(message);
    // setMessages(previousMessages);
  };

  const getMessages = async () => {
    const res = await axios.get('/chatroom');
    const { data } = res;
    const { messages, url } = data;
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
    />
  );
}

export default ChatRoom;
