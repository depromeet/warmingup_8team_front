import React from 'react';
import * as styled from './style';
import { Props } from './type';
import {Button, ShareLink} from "../../components";

const Modal:React.FC<Props> = ({
  chatKey,
  isShowing,
  hide
}) => {
  const url = window.location.origin;

  return isShowing ?(
      <styled.Background>
        <styled.Modal>
          <styled.Close
            onClick={() => hide()}
          >X</styled.Close>
          <styled.H1>
            구성원 초대하기
          </styled.H1>
          <styled.Text>
            링크를 복사하여 친척들에게 공유해보세요!
          </styled.Text>

          <ShareLink
            link={`${url}/?key=${chatKey}`}
          />

          <Button
            text={'창닫기'}
            background={'#5057ef'}
            color={'white'}
            width={214}
            height={52}
            borderRadius={25.5}
            margin={'49px 0'}
            onClick={() => hide()}
          />
        </styled.Modal>
      </styled.Background>
  ) : null;
};

export default Modal;