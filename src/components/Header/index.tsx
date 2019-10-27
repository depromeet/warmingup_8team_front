import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as styled from './style';
import { RootState } from 'store/reducers/interface';
import { logout } from 'store/reducers/user';

const Input: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <styled.Header>
      <styled.HeaderText>
        KKIROOK CHAT
      </styled.HeaderText>

      <styled.Menu>
        {
          isLoggedIn ? (
            <styled.MenuItem onClick={() => onLogout()}>
              로그아웃
            </styled.MenuItem>
          ) : null
        }
      </styled.Menu>
    </styled.Header>
  );
};

export default Input;
