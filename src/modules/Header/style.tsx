import styled from "styled-components";

export const Header = styled.div`
  position: absolute;
  width: 100%;
  height: 70px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderBox = styled.div`
  width: 960px;
  height: 70px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  vertical-align: top;
  cursor: pointer;
`;

export const HeaderText = styled.span`
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1px;
  color: #5057ef;
  vertical-align: super;
  margin-left: 9px;
`;

export const Menu = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuItem = styled.span`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;

  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: sub;
  margin-right: 8px;
`;

export const User = styled.div`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4a4a4a;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NonUser = styled.div`
  width: 85px;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4a4a4a;
`;

export const DefaultAvatar = styled.img`
  margin-right: 8px;
`;