import styled from 'styled-components';
import { Style } from './interface';

export const Button = styled.button`
  height: ${(props: Style) => `${props.height}px`};
  color: #3C1E1E;
  background-color: #FFEB00;
  border: 0;
  border-radius: ${(props: Style) => `${props.borderRadius}px`};
  font-size: ${(props: Style) => `${props.fontSize}px`};
  font-weight: ${(props: Style) => props.bold ? 'bold' : 400};
  padding: 5px 30px;
  outline: 0;
  cursor: pointer;
`;