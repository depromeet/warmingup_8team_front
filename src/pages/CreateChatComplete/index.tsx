import React from 'react';
import { Button, ShareLink } from 'components';
import * as styled from "./style";
import { useHistory } from "react-router-dom";
import { RootState } from 'store/reducers/interface';
import { useSelector } from 'react-redux';

const CreateChatComplete: React.FC = _ => {
  const chatroom = useSelector((state: RootState) => state.user.chatroom);

  let history = useHistory();
  return (
    <div>
      <styled.Title>
        끼룩챗 만들기가 완료되었습니다.
      </styled.Title>
      <styled.Text>
        가족, 친적들에게 초대 링크를 공유해보세요!<br/>
        (아래 링크를 클릭하면 링크가 복사됩니다.)
      </styled.Text>
      <ShareLink
        link={`${window.location.origin}/?key=${chatroom.url}`}
        width={640}
      />

      <Button
        text={'채팅 시작하기'}
        bold={true}
        width={175}
        height={55}
        color={'white'}
        background={'#5057ef'}
        margin={'72px 0 24px'}
        onClick={() => history.push('/chat')}
        borderRadius={30}
        fontSize={18}
        hover={'#3a40d4'}
      />
      <br />

      <styled.Button
        margin={'0 60px 419px 0'}
      >
        일정 등록할래요
      </styled.Button>

      <styled.Button
        onClick={() => history.push('/question')}
      >
        질문 등록할래요
      </styled.Button>

    </div>
  );
};

export default CreateChatComplete;
