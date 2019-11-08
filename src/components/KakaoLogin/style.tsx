import styled from 'styled-components';

export const Button = styled.button`
  width: 269px;
  height: 51px;
  border-radius: 29.5px;
  border: solid 1px #ffe118;
  background-color: #ffe118;
  font-weight: bold;
  font-size: 18px;
  color: #381e1f;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  outline: 0;
  padding: 12px;
  
  &:hover {
    background-color: #ffd518
  }
`;

export const Icon = styled.img`
  width: 23px;
  height: 23px;
  margin-right: 10px;
`;