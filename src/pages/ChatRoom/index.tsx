import React, { useState, useEffect } from 'react';
import View from './view';
import axios from 'utils/axios';
import io from 'socket.io-client';

const ChatRoom: React.FC = _ => {
  const [title, setTitle] = useState('우리집');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState<any>(null);
  const [input, setInput] = useState('');

  useEffect(() => {
    const s = io('http://localhost:5000');
    setSocket(s);

    s.on('connect', function() {
      console.log('서버와 연결');
    }); 
    getMessages();
  }, []);

  const getMessages = async () => {
    const res = await axios.get('/chatroom');
  };

  const onSend = () => {
    const s = socket;
    s.emit('message', { message: input });
  };

  return (
    <View
      title={title}
      messages={messages}
      onSend={onSend}
      input={input}
      setInput={setInput}
    />
  );
}

export default ChatRoom;
