import React, { useState, useEffect } from 'react';
import { isAuthenticated } from '../../services/auth';
import { Redirect, Route } from 'react-router-dom';
import { IPrivateRoute } from './interfaces';
import api from '../../services/api';
import { message } from 'antd';
import UserMenu from '../userMenu';

const PrivateRoute = (props: IPrivateRoute): JSX.Element | null => {
  const [authenticated, setAuthenticated] = useState<any>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    if (isAuthenticated()) {
      api.get('/token/refresh').then((response: any) => {
        if (!isMounted) return;
        if (response && response.success) {
          setAuthenticated(true);
          setLoaded(true);
        }
        else {
          if (response && response.message) message.error(response.message);
          setAuthenticated(false);
        }
        setLoaded(true);
      });
    }
    else setLoaded(true);
    return () => { isMounted = false }
  }, [])

  if (loaded === false) return null;
  if (authenticated) return (<><UserMenu /><Route {...props} /></>)
  return <Redirect to="/login" />
}

export default PrivateRoute;
