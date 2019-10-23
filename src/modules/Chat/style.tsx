import styled from 'styled-components';
import { StyleProps } from './interface';

export const Wrapper = styled.div`
  animation: 0.25s ease-in-out 0s 1 normal none running flHiOf;
  margin-top: 13px;
  display: flex;
`;

export const AvatarContainer = styled.div`
  width: 40px;
  padding-left: 10px;
`;

export const MessageContainer = styled.div`
  overflow: hidden;
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
  margin: ${(props: StyleProps) => !props.sender ? '4px 20% 4px 0px' : '4px 4px 4px 0px'};
`;

export const User = styled.div`
  font-size: 13px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 0 1 auto;
  overflow: hidden;
`;

export const Time = styled.div`
  margin-left: 7px;
  font-size: 11px;
  color: rgb(152, 167, 179);
`;