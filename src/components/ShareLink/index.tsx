import React from 'react';
import * as styled from './style';
import {Link} from "../../assets";
import {Props} from "./interface";

const ShareLink: React.FC<Props> = ({
  link
}) => {

  const copy = (link: string) => {
    let textarea = document.createElement('textarea');
    textarea.value = link;

    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 9999);

    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('복사되었습니다.')
  };

  return (
    <styled.LinkBox onClick={() => copy(link)}>
      <styled.Link src={Link} alt={'링크'}/>
      <span id={'link'}>
        {link}
      </span>
    </styled.LinkBox>
  );
};

export default ShareLink;
