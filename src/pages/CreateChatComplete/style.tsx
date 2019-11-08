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
  margin: 16px 0 24px;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #2b2b2b;
`;

export const Button = styled.button`
  font-size: 16px;
  color: #757575;
  border: none;
  margin: ${(props: Style) => props.margin ? props.margin : ''};
  cursor: pointer;
  width: 155px;
  height: 48px;
  
  &:hover {
    border-radius: 24px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.16);
  }
`;