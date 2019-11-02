import React from 'react';
import * as styled from './style';
import {Link} from "../../assets";
import {Props} from "./interface";

const ShareLink: React.FC<Props> = ({
  link,
  width
}) => {
  return (
    <styled.LinkBox>
      <styled.Link src={Link} alt={'링크'}/>
      {link}
    </styled.LinkBox>
  );
};

export default ShareLink;
