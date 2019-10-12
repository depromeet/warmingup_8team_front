import React from 'react';
import KakaoLogin from 'components/KakaoLogin';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const KakaoLoginButton = () => (
  <KakaoLogin
    bold={boolean('Font Bold', true)}
    borderRadius={number('Border Radius', 25)}
    fontSize={number('Font Size', 14)}
    height={number('Height', 50)}
    onSuccess={() => {}}
    onFailure={() => {}}
  >
    {text('Text', '카카오 로그인')}
  </KakaoLogin>
);
