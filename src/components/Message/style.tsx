import styled from 'styled-components';
import { StyleProps } from './interface';

export const Wrapper = styled.div`
  margin-bottom: 3px;
  max-width: 470px;
  background-color: ${(props: StyleProps) => props.sender ? 'rgb(78, 91, 255)' : '#fff'};
  color: ${(props: StyleProps) => props.sender ? '#fff' : '#000'};
  border-top-left-radius: ${(props: StyleProps) => props.sender ? '20px' : '0px !important'};
  border-top-right-radius: ${(props: StyleProps) => !props.sender ? '20px' : '0px !important'};
  display: inline-block;
  padding: 21px 30px;
  border-radius: 20px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
`;

export const Span = styled.span`
  display: flex;
  text-align: left;
  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;