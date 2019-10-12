import React from 'react';
import KakaoLogin from 'react-kakao-login';
import kakaoLoginConfig from '../../config/kakaologin';
import styled from "styled-components";

const StyledKakaoLogin = styled(KakaoLogin)`
  display: inline-block;
  padding: 0;
  width: 222px;
  height: 49px;
  line-height: 49px;
  color: #3C1E1E;
  background-color: #FFEB00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  text-align: center;
`;
const success = (response: any) => {
  console.log(response);
};
const failure = (error: any) => {
  console.log(error);
};

const Login:React.FC = () => {
  return (
    <div className={'login'}>
      <StyledKakaoLogin
        jsKey={kakaoLoginConfig}
        onSuccess={success}
        onFailure={failure}
      />
    </div>
  );
};

export default Login;