import styled from 'styled-components';
import {Style} from "./interface";

export const CreateChat = styled.div`
  margin: auto;
  width: 924px;
  text-align: left;
`;

export const NameInput = styled.input`
  width: 894px;
  height: 48px;
  padding-left: 30px;
  margin-top: 17px;
  border: ${(props: Style) => props.error ? 'solid 1px #d0021b;' : 'solid 1px #dedede'};
`;

export const Error = styled.div`
  font-size: 14px;
  color: #d0021b;
  text-align: left;
  margin-top: 12px;
`;

export const Wrapper = styled.div`
  margin: 22px 0 12px;
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
  text-align: center;
`;

export const ImageBox = styled.div`
  width: 924px;
  height: 338px;
  background-color: #f9f9f9;
  margin-top: 17px;
  border: ${(props: Style) => props.error ? 'solid 1px #d0021b;' : 'solid 1px #dedede'};
  text-align: center;
`;

export const ImageBoxText = styled.div`
  font-size: 13px;
  height: 48px;
  padding-top: 73px;
  color: #2b2b2b;
`;

export const Or = styled.div`
  font-size: 16px;
  color: #bdbdbd;
  padding: 24px 0 28px 0;
`;

export const FileInput = styled.input`
  display: none;
`;

export const Upload = styled.button`
  color: #757575;
  margin-top: ${(props: Style) => props.margin ? `${props.margin}px` : ''};
  width: 155px;
  height: 40px;
  border-radius: 30px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);
  border: solid 1px #dedede;
  cursor: pointer;
`;
