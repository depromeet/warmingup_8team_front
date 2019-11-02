import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Modal = styled.div`
  width: 960px;
  height: 456px;
  border-radius: 10px;
  margin: 15% auto;
  padding: 20px;
  width: 50%;
  background: white;
`;

export const Close = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  margin-top: -8px;

  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const H1 = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 75px;
  text-align: left;
  color: #5057ef;
`;

export const Text = styled.div`
  font-size: 14px;
  margin-top: 8px;
  text-align: left;
`;
