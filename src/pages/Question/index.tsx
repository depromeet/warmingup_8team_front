import React, { useEffect, useState } from 'react';
import * as styled from "./style";
import { deleteQuestionSample, updateQuestion } from "../../store/reducers/user";
import { useHistory } from "react-router-dom";
import { Button } from "components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/interface";

const Question: React.FC = _ => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const profile = useSelector((state: RootState) => state.user.profile);
  const questionSample = useSelector((state: RootState) => state.user.question_sample);
  let history = useHistory();

  useEffect(()=> {
    if (!questionSample) {
      return history.push('/chat')
    }
    setQuestion(questionSample[Math.floor(Math.random() * questionSample.length)].message)
  }, [questionSample]);

  const createQuestion = (question: string, answer: string) => {
    // if (!answer) {
    //   return alert('답변을 등록해주세요.')
    // }
    updateQuestion({
      id: question.length,
      message: question,
      answer: answer,
    });
    deleteQuestionSample(
      question
    );
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
