import styled from 'styled-components';

export const Question = styled.div`
  margin: auto;
  width: 924px;
  margin-top: 75px;
`;

export const H1 = styled.div`
  margin-top: 75px;
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: justify;
  color: #2b2b2b;
`;

export const Text = styled.div`
  margin-top: 12px;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2b2b2b;
  text-align: left;
`;

export const H2 = styled.div`
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2b2b2b;
  text-align: left;
  margin-top: 48px;
`;

export const Input = styled.input`
  width: calc(100% - 32px);
  height: 26px;
  border: none;
  padding: 10px 16px;
  margin-top: 17px;
  border: solid 1px #dedede;

  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2b2b2b;

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const Text2 = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #757575;
  text-align: left;
  margin-top: 5px;
  margin-bottom: 25px;
`;

export const Skip = styled.button`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #757575;
  border: none;
  cursor: pointer;
  margin-right: 38px;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 32px;
`;
