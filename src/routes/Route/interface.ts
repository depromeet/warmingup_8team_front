import React from 'react';

export interface Props {
  component: React.FC
  path: string,
  exact?: boolean,
  loginRequired?: boolean,
};
