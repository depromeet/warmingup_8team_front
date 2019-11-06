import styled from 'styled-components';
import { Props, StyleProps } from './interface';

export const LinkBox = styled.div`
  font-size: 18px;
  height: 48px;
  border: solid 1px #dedede;
  background-color: #f9f9f9;
  width: 580px;
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
`;

export const Link = styled.img`
  margin-right: 8px;
  position: absolute;
  left: 16px;
  top: 20px;
`;