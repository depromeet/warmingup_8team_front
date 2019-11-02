import React, { useEffect } from 'react';
import { Props, KakaoResponse } from './interface';
import axios from 'axios';
import kakaoLoginBtn from '../../img/login-kakao.svg'

const KakaoLogin: React.FC<Props> = ({
  bold = true,
  borderRadius = 4,
  fontSize = 16,
  height = 48,
  width = 199,
  onSuccess,
  onFailure,
  children = "카카오톡으로 시작하기",
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
    <img
      src={kakaoLoginBtn}
      alt={'카카오톡으로 시작하기'}
      onClick={() => onLogin()}
    />
  );
};

export default KakaoLogin;
