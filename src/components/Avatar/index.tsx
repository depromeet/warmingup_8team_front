import React from 'react';
import { Props } from './interface';
import * as styled from './style';

const Avatar: React.FC<Props> = ({
  url = 'https://img.channel.io/200x200/bot/5531-avatar-a80e750b2649373183171185b6bd63a6',
}) => (
  <styled.Image
    url={url}
  />
);

export default Avatar;
