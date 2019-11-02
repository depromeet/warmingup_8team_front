import React, { useEffect } from 'react';
import { Props, KakaoResponse } from './type';
import * as styled from './style';

const KakaoLogin: React.FC<Props> = ({
  borderRadius = 30,
  fontSize = 18,
  height = 60,
  width = 266,
  onSuccess,
  onFailure,
  kakaoKey = '4755b34fc859498f582ca9aab1facf37',
}) => {
  useEffect(() => {
    ((d: Document, s: string, id: string, cb: () => void) => {
      const targetElement: (HTMLElement | null) = d.getElementById(id);
      if (!targetElement) {
        const collection: HTMLCollection = d.getElementsByTagName(s);
        const el = collection[0];
        const fjs = el;

        const script = document.createElement(s) as HTMLScriptElement;
        script.id = id;
        script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
        script.async = true;
        script.defer = true;
        script.onload = cb;
        fjs.parentNode!.insertBefore(script, fjs);
      }
    })(document, 'script', 'kakao-sdk', () => {
      if (window.hasOwnProperty('Kakao')) {
        window.Kakao.init(kakaoKey);
      }
    });
  }, []);

  const onLogin = () => {
    if (window.hasOwnProperty('Kakao')) {
      window.Kakao.Auth.login({
        throughTalk: false,
        success: (response: KakaoResponse) => {
          onSuccess(response);
        },
        fail: onFailure,
      });
    }
  };

  return (
    <styled.Button
      onClick={() => onLogin()}
    >
      <styled.Icon src={''} />
      카카오톡으로 시작하기
    </styled.Button>
  );
};

export default KakaoLogin;
