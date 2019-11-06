import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import * as styled from "./style";
import { Button } from "components";
import axios from 'utils/axios';

const Question:React.FC = _ => {
  const [questions, setQuestion] = useState([]); 
  const [newQuestion, setNewQuestion] = useState('');
  let history = useHistory();

  useEffect(() => {
    const getQuestion = async () => {
      const res = await axios.get('/question');
      const { data } = res;
      setQuestion(data.questions);
    };

    getQuestion();
  }, []);

  const createNewQuestion = () => {

  };

  return (
    <styled.Question>
      <styled.H1>
        질문 등록하기
      </styled.H1>
      <styled.Text>
        가족, 친척들과 함께 이야기할 새로운 채팅방을 만들어보세요!
      </styled.Text>

      {
        questions.map((q: any, i: number) => {
          return (
            <React.Fragment>
              <styled.H2>{q.message}</styled.H2>
              <styled.Text2>{q.description}</styled.Text2>
            </React.Fragment>
          );
        })
      }

      <styled.Input
        value={newQuestion}
        onChange={e => setNewQuestion(e.currentTarget.value)}
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
        onClick={() => createNewQuestion()}
      />

    </styled.Question>
  );
};

export default Question;
