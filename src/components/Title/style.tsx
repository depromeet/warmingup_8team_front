import styled from "styled-components";
import { Style } from './interface';

export const Title = styled.div`
  font-size: ${(props: Style) => props.fontSize ? `${props.fontSize}px` : '32px'};
  font-weight: ${(props: Style) => props.fontWeight ? props.fontWeight : 'bold'};
  margin-top: ${(props: Style) => `${props.marginTop}px`};
  color: ${(props: Style) => props.color ? props.color : '#5057ef'};
`;