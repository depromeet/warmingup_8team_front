import styled from 'styled-components';
import {Style} from "./interface";

export const Title = styled.div`
  font-size: 26px;
  font-weight: bold;
  margin-top: 308px;
  color: #5057ef;
`;

export const Text = styled.div`
  margin: 16px 0 62px;
  color: #333333;
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
  font-size: 18px;
  color: #4a4a4a;
  border: none;
  margin: ${(props: Style) => props.margin ? props.margin : ''};
  cursor: pointer;
`;