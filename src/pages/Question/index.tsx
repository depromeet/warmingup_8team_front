import React, {useState} from 'react';
import * as styled from "./style";
import {Button} from "../../components";
import { useHistory } from "react-router-dom";

const Question:React.FC = _ => {
  const [answer, setAnswer] = useState('');
  let history = useHistory();

  return (
    <styled.Question>
      <styled.H1>
        질문 등록하기
      </styled.H1>
      <styled.Text>
        가족, 친척들과 함께 이야기할 새로운 채팅방을 만들어보세요!
      </styled.Text>

      {/*TODO: 서버에서 질문 리스트 받아오기*/}
      <styled.H2>
        내가 가장 좋아하는 숫자는?
      </styled.H2>
      <styled.Text2>
        (1~99사이에서 선택해 주세요.)
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
      />

    </styled.Question>
  );
};

export default Question;
