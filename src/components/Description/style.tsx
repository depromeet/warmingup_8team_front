import styled from "styled-components";
import { Style } from './interface';

export const Description = styled.span`
  margin-left: ${(props: Style) => `${props.marginLeft}px`};
  font-size: ${(props: Style) => props.fontSize ? `${props.fontSize}px` : '14px'};
  color: #929292;
`;