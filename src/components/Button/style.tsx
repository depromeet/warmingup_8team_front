import styled from 'styled-components';
import { Style } from './interface';

export const Button = styled.button`
  width: ${(props: Style) => `${props.width}px`};
  height: ${(props: Style) => `${props.height}px`};
  border-radius: ${(props: Style) => props.borderRadius ? `${props.borderRadius}px` : '4px'};
  font-size: ${(props: Style) => props.fontSize ? `${props.fontSize}px` : '16px'};
  font-weight: ${(props: Style) => props.bold ? 'bold' : 400};
  margin: ${(props: Style) => props.margin};
  border: solid 1px #5057ef;
  cursor: ${(props: Style) => props.cursor ? props.cursor : 'pointer'};
  color: ${(props: Style) => props.color};
  background: ${(props: Style) => props.background ? props.background : 'white'};
  display: inline;
`;