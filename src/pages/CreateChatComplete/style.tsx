import styled from 'styled-components';
import {Style} from "./interface";

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  margin-top: 308px;
  color: #5057ef;
`;

export const Text = styled.div`
  margin: 16px 0 62px;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #2b2b2b;
`;

export const LinkBox = styled.div`
  font-size: 18px;
  width: 640px;
  height: 35px;
  margin: auto;
  padding-top: 7px;
  border: solid 0.5px #9b9b9b;
`;

export const Link = styled.img`
  margin-right: 8px;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #757575;

  border: none;
  margin: ${(props: Style) => props.margin ? props.margin : ''};
  cursor: pointer;
`;