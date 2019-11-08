import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: block;
`;

export const ModalImage = styled.img`
  border-radius: 10px 10px 0 0;
`;

export const Modal = styled.div`
  width: 960px;
  height: 456px;
  border-radius: 10px;
  margin: 15% auto;
  width: 50%;
  background: white;
`;

export const Close = styled.div`
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  right: 27%;
  position: absolute;
  margin-top: 24px;

  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  padding: 36px 40px;
`;

export const H1 = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  color: #5057ef;
`;

export const Text = styled.div`
  font-size: 14px;
  margin: 8px 0 30px 0;
  text-align: left;
`;