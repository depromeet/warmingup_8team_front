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
`;

export const Description = styled.div`
  font-size: 16px;
  margin-top: 8px;
  text-align: left;
`;

export const H2 = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 48px;
  text-align: left;
`;

export const NameInput = styled.input`
  width: 894px;
  height: 48px;
  background-color: #f5f5f5;
  border: none;
  padding-left: 30px;
  margin-top: 17px;
`;

export const Error = styled.div`
  font-size: 14px;
  color: #d0021b;
  text-align: left;
  margin-top: 12px;
`;


export const IconDescription = styled.span`
  font-size: 14px;
  text-align: left
  font-weight: normal;
  margin-left: 6px;
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
  background-color: #f5f5f5;
  margin-top: 17px;
`;

export const IconBoxDescription = styled.div`
  font-size: 16px;
  font-weight: normal;
  height: 48px;
  padding-top: 73px;
`;

export const Or = styled.div`
  font-size: 16px;
  color: #bdbdbd;
  padding: 48px 0 52px 0;
`;

export const FileInput = styled.input`
  display: none;
`;

