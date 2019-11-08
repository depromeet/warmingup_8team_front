import styled from 'styled-components';
import {StyleProps} from "./interface";

export const LinkBox = styled.div`
  font-size: 18px;
  height: 48px;
  border: solid 1px #dedede;
  background-color: #f9f9f9;
  width: ${(props: StyleProps) => `${props.width}px`};
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 50px;
  
  span {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #2b2b2b;
  }
  
  &:hover {
    text-decoration: underline;
  }
  &:active {
    border: solid 1px #5057ef;
  }
`;

export const Link = styled.img`
  margin-right: 8px;
  position: absolute;
  left: 16px;
  top: 20px;
`;

export const Copied = styled.div`
  display: ${(props: StyleProps) => props.copied ? 'block' : 'none'};
  width: 195px;
  height: 24px;
  border-radius: 2px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.12);
  background-color: #d8dcfd;
  font-size: 16px;
  color: #2b2b2b;
  vertical-align: center;
  padding: 16px 0;
  position: absolute;
  bottom: 121px;
  left: 50%;
  margin-left: -158px;
`;