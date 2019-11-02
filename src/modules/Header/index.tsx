import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { RootState } from 'store/reducers/interface';
import { Logo } from 'assets';
import { logout } from 'store/reducers/user';
import * as styled from './style';
import axios from 'utils/axios';

const Header: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const profile = useSelector((state: RootState) => state.user.profile);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async () => {
    await axios.post('/logout');
    dispatch(logout());
    history.push('/');
  };

  return (
    <styled.Header>
      <styled.HeaderBox>
      <styled.Logo src={Logo} alt={'logo'}/>
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
            <styled.MenuItem onClick={() => onLogout()}>
              {
                profile.profile_url ? (
                  <styled.Profile src={profile.profile_url} alt={'프로필 이미지'}/>
                  )
                  : <styled.Profile src={"defaultProfile"} alt={'프로필 이미지'}/>
              }
              {profile.name}
            </styled.MenuItem>
          ) : null
        }
      </styled.Menu>
      </styled.HeaderBox>
    </styled.Header>
  );
};

export default Header;
