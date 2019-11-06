import React, {useEffect, useState} from 'react';
import * as styled from "./style";
import {Button} from "../../components";
import { useHistory } from "react-router-dom";

const Question:React.FC = _ => {
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');
  const [answer, setAnswer] = useState('');
  let history = useHistory();

  useEffect(() => {
    // TODO: 서버에서 질문,설명 받아오기
    setQuestion('내가 가장 좋아하는 숫자는?');
    setDescription('(1~99사이에서 선택해 주세요.)');
  });

  const createQuestion = (question: string, answer: string) => {
    // TODO 질문, 답변 전송
    history.push('/chat')
  };

  return (
    <styled.Question>
      <styled.H1>
        질문 등록하기
      </styled.H1>
      <styled.Text>
        가족, 친척들과 함께 이야기할 새로운 채팅방을 만들어보세요!
      </styled.Text>

      <styled.H2>
        {question}
      </styled.H2>
      <styled.Text2>
        {description}
      </styled.Text2>
      <styled.Input
        value={answer}
        onChange={e => setAnswer(e.currentTarget.value)}
      />

      <Button
        text={'+  질문 추가하기'}
        width={221}
        height={60}
        borderRadius={30}
        color={'#5057ef'}
        onClick={() => history.push('/custom-question')}
      />

      <styled.Skip
        onClick={() => history.push('/chat')}
      >
        질문 건너뛰기
      </styled.Skip>
      <Button
        text={'질문 등록'}
        background={'#5057ef'}
        color={'white'}
        width={228}
        height={60}
        borderRadius={30}
        onClick={() => createQuestion(question, answer)}
      />

    </styled.Question>
  );
};

export default Question;
