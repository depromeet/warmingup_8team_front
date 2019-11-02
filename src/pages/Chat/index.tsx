import React, { useState, useEffect } from 'react';

const Chat:React.FC = _ => {
  const [messages] = useState([]);

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
      {
        messages.map((message, idx) => {
          return (
            <div>{message}</div>
          );
        })
      }
      <textarea></textarea>
    </div>
  );
};

export default Chat;
