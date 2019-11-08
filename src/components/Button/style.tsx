import styled from 'styled-components';
import { Style } from './interface';

export const Button = styled.button`
  width: ${(props: Style) => `${props.width}px`};
  height: ${(props: Style) => `${props.height}px`};
  border-radius: ${(props: Style) => props.borderRadius ? `${props.borderRadius}px` : '4px'};
  font-size: ${(props: Style) => props.fontSize ? `${props.fontSize}px` : '16px'};
  font-weight: ${(props: Style) => props.bold ? 'bold' : 400};
  margin: ${(props: Style) => props.margin};
  cursor: ${(props: Style) => props.cursor ? props.cursor : 'pointer'};
  color: ${(props: Style) => props.color};
  background: ${(props: Style) => props.background}
  display: inline;
  &:hover {
    background: ${(props: Style) => props.hover};
  }
  &:active {
    background: ${(props: Style) => props.active};
  }
`;
