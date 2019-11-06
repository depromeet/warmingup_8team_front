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
        채팅방 생성이 완료되었습니다!
      </styled.Title>
      <styled.Text>
        가족, 친적들에게 초대 링크를 공유해보세요!<br/>
        (아래 박스를 클릭하면 링크가 자동으로 복사됩니다.)
      </styled.Text>
      <ShareLink
        link={`${window.location.origin}/${chatroom.url}`}
        width={640}
      />

      <Button
        text={'채팅 시작하기'}
        bold={true}
        width={168}
        height={51}
        color={'white'}
        background={'#5057ef'}
        margin={'77px 0 48px'}
        onClick={() => history.push('/chat')}
        borderRadius={30}
        fontSize={18}
      />
      <br />

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
