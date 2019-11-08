import styled from "styled-components";
import { Style } from './interface';

export const Title = styled.div`
  font-size: ${(props: Style) => props.fontSize ? `${props.fontSize}px` : '16px'};
  font-weight: ${(props: Style) => props.fontWeight ? props.fontWeight : 300};
  color: ${(props: Style) => props.color ? props.color : '#2b2b2b'};
  margin: ${(props: Style) => `${props.margin}`};
`;
