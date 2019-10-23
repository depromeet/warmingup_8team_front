import styled from 'styled-components';
import { StyleProps } from './interface';

export const Wrapper = styled.div`
  margin-bottom: 3px;
  max-width: 230px;
  background-color: ${(props: StyleProps) => props.sender ? 'rgb(78, 91, 255)' : 'rgba(238, 241, 244)'};
  color: ${(props: StyleProps) => props.sender ? '#fff' : 'rgb(43, 47, 53)'};
  border-top-left-radius: ${(props: StyleProps) => props.sender ? '15px' : '3px !important'};
  border-top-right-radius: ${(props: StyleProps) => !props.sender ? '15px' : '3px !important'};
  display: inline-block;
  padding: 10px 12px;
  border-radius: 15px;
`;

export const Span = styled.span`
  text-align: left;
  font-size: 14px;
  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: break-word;
`;