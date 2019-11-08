import styled from 'styled-components';


export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.06);
  background-color: rgba(255, 255, 255, 0.88);
  padding: 10px 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleDot = styled.img`
  margin-right: 24px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  color: #333333;
`;

export const Add = styled.img`
  cursor: pointer;
`;

export const Content = styled.div`
  flex: 1;
  padding: 40px 10px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { 
    display: none !important;
  }
`;

export const InputArea = styled.div`
  width: 98%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
`;

export const UploadButton = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 24px 0 33px;
  cursor: pointer;
`;

export const Input = styled.textarea`
  height: 28px;
  border-radius: 29px;
  border: solid 0.5px #bdbdbd;
  background-color: #ffffff;
  flex: 1;
  resize: none;
  outline: 0;
  padding: 15px 20px;
  font-size: 16px;
`;

export const Send = styled.button`
  width: 118px;
  height: 41px;
  border-radius: 29px;
  background-color: #5057ef;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  cursor: pointer;
  outline: none;

  position: absolute;
  right: 14px;
`;