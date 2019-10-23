import React, {useState} from 'react';
import {Button, Header} from 'components';

const CreateChat:React.FC = _ => {
  const [chatName, setChatName] = useState('');

  const onChangeChatName = (e: React.FormEvent<HTMLInputElement>) => {
    setChatName(e.currentTarget.value);
  };

  return (
    <div>
      <Header/>
    </div>
  );
};

export default CreateChat;
