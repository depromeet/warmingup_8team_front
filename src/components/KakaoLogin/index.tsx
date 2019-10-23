import React, { useEffect } from 'react';
import { Props } from './interface';
import * as styled from './style';

const KakaoLogin:React.FC<Props> = ({
  bold = true,
  borderRadius = 4,
  fontSize = 16,
  height = 48,
  width = 199,
  onSuccess,
  onFailure,
  children = "카카오톡으로 시작하기",
  kakaoKey = '',
}) => {
  useEffect(() => {
    ((d: Document, s: string, id: string, cb: () => void) => {
      const targetElement: (HTMLElement | null) = d.getElementById(id);
      if (!targetElement) {
        const collection: HTMLCollection = d.getElementsByTagName(s);
        const el= collection[0];
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
        success: (response: object) => {
          window.Kakao.API.request({
            url: '/v2/user/me',
            success: (profile: object) => {
              const result: object = { response, profile };
              onSuccess(result);
            },
            fail: (error: any) => {
              onFailure(error);
            },
          });
        },
        fail: onFailure,
      });
    }
  };

  return (
    <styled.Button
      bold={bold}
      borderRadius={borderRadius}
      fontSize={fontSize}
      height={height}
      width={width}
      onClick={() => onLogin()}
    >
      {children}
    </styled.Button>
  );
};

export default KakaoLogin;
