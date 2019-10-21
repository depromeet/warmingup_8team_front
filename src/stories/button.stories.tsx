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
    borderRadius={number('Border Radius', 4)}
    fontSize={number('Font Size', 16)}
    height={number('Height', 48)}
    onSuccess={() => {}}
    onFailure={() => {}}
  >
    {text('Text', '카카오톡으로 시작하기')}
  </KakaoLogin>
);
