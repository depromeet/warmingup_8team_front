import React from 'react';
import * as styled from './style';
import {ShareLink} from "../../components";

const Modal:React.FC = _ => {
  return (
    <styled.Background>
      <styled.Modal>
        <styled.Close>X</styled.Close>
        <styled.H1>
          구성원 초대하기
        </styled.H1>
        <styled.Text>
          링크를 복사하여 친척들에게 공유해보세요!
        </styled.Text>

        <ShareLink
          link={'http://www.url-kkirookchat.com/{chatUniqueValue}'}
          width={880}
        />
      </styled.Modal>
    </styled.Background>
  );
};

export default Modal;