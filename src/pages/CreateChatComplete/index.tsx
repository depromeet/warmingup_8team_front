import React from 'react';
import {Button, ShareLink} from 'components';
import * as styled from "./style";
import {useHistory} from "react-router-dom";

const CreateChatComplete:React.FC = _ => {
  let history = useHistory();

  return (
    <div>
      <styled.Title>
        채팅방 생성이 완료되었습니다.
      </styled.Title>
      <styled.Text>
        초대 링크를 공유해보세요!
      </styled.Text>
      <ShareLink
        link={'http://www.url-kkirookchat.com/{chatUniqueValue}'}
        width={640}
      />

      <Button
        text={'채팅 시작하기'}
        bold={true}
        width={470}
        height={75}
        color={'white'}
        background={'#5057ef'}
        margin={'77px 0 15px'}
        onClick={() => history.push('/chat')}
        borderRadius={37.5}
        fontSize={20}
      />
      <br/>

      <styled.Button
        margin={'0 60px 0 0'}
      >
        일정 등록하기
      </styled.Button>

      <styled.Button
        onClick={() => history.push('/question')}
      >
        질문 등록하기
      </styled.Button>

    </div>
  );
};

export default CreateChatComplete;
