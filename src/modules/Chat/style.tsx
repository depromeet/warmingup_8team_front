import styled from 'styled-components';
import { StyleProps } from './interface';

export const Wrapper = styled.div`
  animation: 0.25s ease-in-out 0s 1 normal none running flHiOf;
  margin-top: 16px;
  display: flex;
  justify-content: ${(props: StyleProps) => props.sender ? 'flex-end' : 'flex-start'};
`;

export const AvatarContainer = styled.div`
  width: 85px;
  padding-left: 24px;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props: StyleProps) => !props.sender ? 'flex-start' : 'flex-end'};
`;

export const MessageHeader = styled.div`
  display: flex;
  -webkit-box-align: center;
  justify-content: ${(props: StyleProps) => !props.sender ? 'flex-start' : 'flex-end'};
  align-items: center;
  font-size: 12px;
  color: rgb(81, 99, 120);
  margin: ${(props: StyleProps) => !props.sender ? '4px 20% 11px 0px' : '4px 4px 11px 0px'};
`;

export const User = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4a4a4a;
`;

export const Time = styled.div`
  margin-left: ${(props: StyleProps) => props.sender ? 0 : '10px'};
  margin-right: ${(props: StyleProps) => !props.sender ? 0 : '10px'};
  font-size: 13px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4a4a4a;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;