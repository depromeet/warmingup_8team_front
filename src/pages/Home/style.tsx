import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 20%;
  width: 80%;
`;

export const Image = styled.img`
  width: 100%
  position: absolute;
  left: 0;
  z-index: -1;
  margin-top: 20%;
`;

export const Top = styled.div`
  height: 80%;
  width: 100%;
  background-color: #f3f4f6;
  z-index: -2;
  position: absolute;
  top: 0;
`;

export const Title = styled.div`
  font-size: 32px;
  text-align: left;
  margin: 220px 0 12px;
`;

export const Content = styled.div`
  text-align: left;
  margin: 0 0 64px;
`;

export const Bottom = styled.div`
  background-color: #b7cff7;
  height: 30%;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: -3;
`;

export const Footer = styled.div`
  height: 381px;
`;
