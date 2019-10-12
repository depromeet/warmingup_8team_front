import React, { useEffect } from 'react';
import { Props, Kakao } from './interface';
import * as styled from './style';

const KakaoLogin:React.FC<Props> = ({
  bold=true,
  borderRadius=25,
  fontSize=14,
  height=50,
  onSuccess,
  onFailure,
  children,
}) => {
  useEffect(() => {
    const kakaoKey: string = '';
    ((d: Document, s: string, id: string, cb: () => void) => {
      const targetElement: (HTMLElement | null) = d.getElementById(id);
      if (!targetElement) {
        const collection: HTMLCollection = d.getElementsByTagName(s);
        const el= collection[0];
        const fjs = el;

        const script = document.createElement(s) as HTMLScriptElement;
        script.id = id;
        script.src = '//developers.kakao.com/sdk/js/kakao.min.js';
        script.onload = cb;
        
        fjs.parentNode!.insertBefore(script, fjs);
      }
    })(document, 'script', 'kakao-sdk', () => {
      Kakao.init(kakaoKey);
    });
  }, []);

  const onLogin = () => {
    if (Kakao) {
      Kakao.Auth.login({
        throughTalk: false,
        success: (response: object) => {
          Kakao.API.request({
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
  }

  return (
    <styled.Button
      bold={bold}
      borderRadius={borderRadius}
      fontSize={fontSize}
      height={height}
      onClick={() => onLogin()}
    >
      {children}
    </styled.Button>
  );
};

export default KakaoLogin;
