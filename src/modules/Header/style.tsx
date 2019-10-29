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

export const HeaderText = styled.div`
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1px;
  color: #5057ef;
`;

export const Menu = styled.div`

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
    margin-right: 24px;
  }
`;