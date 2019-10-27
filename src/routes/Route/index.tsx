import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Props } from './interface';

const CutomRoute:React.FC<Props> = ({
  component,
  path,
  exact = false,
  loginRequired = false,
}) => {
  useEffect(() => {
  }, []);

  return (
    <Route
      exact={exact}
      path={path}
      component={component}
    />
  );
};

export default CutomRoute;
