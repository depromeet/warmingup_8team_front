import React, {useState} from 'react';
import * as styled from "./style";
import {useHistory} from "react-router";
import {Button} from "../../components";

const CustomQuestion:React.FC = _ => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  let history = useHistory();

  const createQuestion = (question: string, answer: string) => {
    // TODO 새로운 질문과 답변 등록하기
    history.push('/custom-question')
  };

  return (
    <styled.Wrapper>
      <styled.H1>
        나에 대한 질문을 등록해보세요!
      </styled.H1>
      <styled.Text>
        가족들에게 어떤 문제를 내고 싶으신가요? 나만의 문제를 만들어보세요.
      </styled.Text>

      <styled.H2>
        Question
      </styled.H2>
      <styled.Text2>
        새로운 질문을 등록해주세요.
      </styled.Text2>
      <styled.Input
        value={question}
        onChange={e => setQuestion(e.currentTarget.value)}
      />

      <styled.H2>
        Answer
      </styled.H2>
      <styled.Text2>
        만든 질문에 대한 답변을 입력해주세요.
      </styled.Text2>
      <styled.Input
        value={answer}
        onChange={e => setAnswer(e.currentTarget.value)}
      />


      <Button
        text={'질문 등록'}
        width={470}
        height={75}
        color={'white'}
        background={'#5057ef'}
        margin={'77px 0 15px'}
        borderRadius={37.5}
        fontSize={20}
        onClick={() => createQuestion(question, answer)}
      />
    </styled.Wrapper>
  )
};

export default CustomQuestion;
