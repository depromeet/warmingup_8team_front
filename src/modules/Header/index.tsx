import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { RootState } from 'store/reducers/interface';
import { Logo, Profile } from 'assets';
import { Link } from 'react-router-dom';
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
        <Link to='/'>
          <styled.Logo src={Logo} alt={'logo'}/>
          <styled.HeaderText>
            KKIROOK CHAT
          </styled.HeaderText>
        </Link>

        <styled.Menu>
          {
            isLoggedIn ? (
              <React.Fragment>
                <styled.MenuItem onClick={() => history.push('/chat')}>
                  채팅방 리스트
                </styled.MenuItem>
                <styled.MenuItem onClick={() => history.push('/question')}>
                  질문 설정
                </styled.MenuItem>
              </React.Fragment>
            ) : null
          }
          {
            isLoggedIn ? (
              <styled.User onClick={() => onLogout()}>
                {
                  profile.profile_url ? (
                    <styled.Profile src={profile.profile_url} alt={'프로필 이미지'}/>
                    )
                    : <styled.Profile src={"defaultProfile"} alt={'프로필 이미지'}/>
                }
                {profile.name}
              </styled.User>
            ) : (
              <styled.NonUser>
                <styled.DefaultAvatar src={Profile} />
                로그인
              </styled.NonUser>
            )
          }
        </styled.Menu>
      </styled.HeaderBox>
    </styled.Header>
  );
};

export default Header;
