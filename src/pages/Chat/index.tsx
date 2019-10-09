import React, { useEffect } from 'react';

const Chat:React.FC = _ => {
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000/ws');

    socket.onopen = () => {
      console.log('Connected');
    }

    socket.onmessage = event => {
      const message = JSON.parse(event.data);
      console.log(message);
    }

    socket.onclose = () => {
      console.log('Disconnected');
    }
  }, []);

  return (
    <div>
      <h1>채팅방</h1>
    </div>
  );
};

export default Chat;
