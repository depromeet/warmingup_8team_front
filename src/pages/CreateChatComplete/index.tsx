import React from 'react';
import { Button } from 'components';
import * as styled from "./style";
import {useHistory} from "react-router-dom";

const LandingPage:React.FC = _ => {
  let history = useHistory();

  let chatUniqueValue = '{chatUniqueValue}';
  return (
    <div>
      <styled.Title>
        채팅방 생성이 완료되었습니다.
      </styled.Title>
      <styled.Text>
        초대 링크를 공유해보세요!
      </styled.Text>
      <styled.LinkBox>
        (-) http://www.url-kkirookchat.com/{chatUniqueValue}
      </styled.LinkBox>

      <Button
        text={'채팅방으로 이동'}
        bold={true}
        width={484}
        height={56}
        color={'white'}
        background={'#4a4a4a'}
        margin={'77px 0 15px'}
        onClick={() => history.push('/chat')}
      />
      <br/>

      <Button
        text={'일정 등록'}
        bold={true}
        width={177}
        height={56}
      />
      <Button
        text={'질문 등록'}
        bold={true}
        width={177}
        height={56}
        margin={'0 0 0 77px'}
      />
    </div>
  );
};

export default LandingPage;
