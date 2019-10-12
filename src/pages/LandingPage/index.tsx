import React from 'react';
import { KakaoLogin } from 'components';

const LandingPage:React.FC = _ => {

  return (
    <div>
      <h1>KKIROOK</h1>
      <div>설명</div>
      <KakaoLogin
        onSuccess={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
};

export default LandingPage;
