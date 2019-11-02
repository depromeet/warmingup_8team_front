import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 64px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderBox = styled.div`
  width: 960px;
  margin: auto;
`;

export const Logo = styled.img`
  vertical-align: top;
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
  float: right;
`;

export const MenuItem = styled.span`
  font-size: 16px;
  cursor: pointer;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4a4a4a;

  &:not(:last-child) {
    margin-right: 57px;
  }
`;

export const Profile = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  border-radius: 50%;
  vertical-align: sub;
  margin-right: 5px;
`;