import React, {useState} from 'react';
import * as styled from "./style";

const Question:React.FC = _ => {
  const [answer, setAnswer] = useState('');

  return (
    <styled.Question>
      <styled.H1>
        새로운 채팅방 생성하기
      </styled.H1>
      <styled.Text>
        가족, 친척들과 함께 이야기할 새로운 채팅방을 만들어보세요!
      </styled.Text>

      {/*TODO: 서버에서 질문 리스트 받아오기*/}
      <styled.H2>
        내가 가장 좋아하는 숫자는?
      </styled.H2>

      <styled.Input
        value={answer}
        onChange={e => setAnswer(e.currentTarget.value)}
      />

    </styled.Question>
  );
};

export default Question;
