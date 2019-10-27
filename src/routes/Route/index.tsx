import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { RootState } from 'store/reducers/interface';
import { Props } from './interface';

const CutomRoute:React.FC<Props> = ({
  component,
  path,
  exact = false,
  loginRequired = false,
}) => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const [valid, setValid] = useState(true);
  const [redirectPath, setRedirectPath] = useState('/');

  useEffect(() => {
    if (loginRequired && !isLoggedIn) {
      setRedirectPath('/login');
      setValid(false);
    }
  }, []);

  return (
    valid ? (
      <Route
        exact={exact}
        path={path}
        component={component}
      />
    ) : (
      <Redirect to={redirectPath} />
    )
  );
};

export default CutomRoute;
