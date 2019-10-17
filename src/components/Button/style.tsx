import styled from 'styled-components';
import { Style } from './interface';

export const Button = styled.button`
  width: ${(props: Style) => `${props.width}px`};
  height: ${(props: Style) => `${props.height}px`};
  border-radius: ${(props: Style) => `${props.borderRadius}px`};
  font-size: ${(props: Style) => `${props.fontSize}px`};
  font-weight: ${(props: Style) => props.bold ? 'bold' : 400};
  margin: ${(props: Style) => props.margin};
  border: 0;
  cursor: pointer;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.24);
  background-color: #ffffff;
  color: #000000;
`;