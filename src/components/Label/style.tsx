import styled from "styled-components";
import { Style } from './interface';

export const Label = styled.span`
  font-size: ${(props: Style) => props.fontSize ? `${props.fontSize}px` : '18px'};
  color: ${(props: Style) => props.color ? props.color : '#2b2b2b'};
`;