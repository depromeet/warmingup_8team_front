import React from 'react';
import { Props } from './interface';
import * as styled from './style';

const ImageMessage: React.FC<Props> = ({
  url,
}) => {
  return (
    <styled.Wrapper
      url={url}
    />
  );
};

export default ImageMessage;
