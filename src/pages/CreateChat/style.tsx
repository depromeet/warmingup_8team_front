import styled from 'styled-components';
import {Style} from "./interface";

export const CreateChat = styled.div`
  margin: auto;
  width: 924px;
`;
export const H1 = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 75px;
  text-align: left;
  color: #5057ef;
`;

export const Description = styled.div`
  font-size: 14px;
  margin-top: 8px;
  text-align: left;
`;

export const H2 = styled.div`
  font-size: 18px;
  margin-top: 48px;
  text-align: left;
`;

export const NameInput = styled.input`
  width: 894px;
  height: 48px;
  border: none;
  padding-left: 30px;
  margin-top: 17px;
  border: solid 0.5px #9b9b9b;
`;

export const Error = styled.div`
  font-size: 14px;
  color: #d0021b;
  text-align: left;
  margin-top: 12px;
`;

export const Span = styled.span`
  font-size: 14px;
  text-align: left
  margin-left: 6px;
  color: #757575;
`;

export const Image = styled.div`
  width: 924px;
  height: 338px;
  background-color: #f5f5f5;
  margin-top: 17px;
  background-image:  url(${(props: Style) => props.backgroundImage});
  background-position:center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const ImageBox = styled.div`
  width: 924px;
  height: 338px;
  background-color: #f9f9f9;
  margin-top: 17px;
  border: solid 0.5px #9b9b9b;
`;

export const ImageBoxText = styled.div`
  font-size: 13px;
  font-weight: normal;
  height: 48px;
  padding-top: 73px;
  color: #333333;
`;

export const Or = styled.div`
  font-size: 16px;
  color: #bdbdbd;
  padding: 48px 0 52px 0;
`;

export const FileInput = styled.input`
  display: none;
`;

export const Upload = styled.button`
  height: 50px;
  width: 153px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
  border-radius: 33px;
  border: none;
  color: #757575;
  margin: ${(props: Style) => props.margin ? `${props.margin}px` : ''};
`;
