import React from 'react';
import * as styled from './style';
import { Props } from './interface';

const Input: React.FC<Props> = ({
  placeholder = '',
  disabled = false,
  readonly = false,
  value = '',
  type = 'text',
  onChange = () => {},
}) => {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <styled.Wrapper>
      <styled.Input
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        value={value}
        type={type}
        onChange={onChangeInput}
      />
    </styled.Wrapper>
  );
};

export default Input;
