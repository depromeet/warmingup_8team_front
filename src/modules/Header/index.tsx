import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { RootState } from 'store/reducers/interface';
import { logout } from 'store/reducers/user';
import logo from '../../img/kkirook-logo.svg'
import * as styled from './style';

const Header: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <styled.Header>
      <styled.HeaderBox>
      <img src={logo} alt={'logo'}/>
      <styled.HeaderText>
        KKIROOK CHAT
      </styled.HeaderText>

      <styled.Menu>
        {
          isLoggedIn ? (
            <styled.MenuItem onClick={() => history.push('/list')}>
              채팅방 리스트
            </styled.MenuItem>
          ) : null
        }
        {
          isLoggedIn ? (
            <styled.MenuItem>
              질문 설정
            </styled.MenuItem>
          ) : null
        }
        {
          isLoggedIn ? (
            <styled.MenuItem onClick={() => dispatch(logout())}>
              로그아웃
            </styled.MenuItem>
          ) : null
        }
      </styled.Menu>
      </styled.HeaderBox>
    </styled.Header>
  );
};

export default Header;
