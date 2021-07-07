import { isAuthenticated } from '../../services/auth';
import { Redirect, Route } from 'react-router-dom';
import { IPrivateRoute } from './interfaces';

const PrivateRoute = (props: IPrivateRoute): JSX.Element => {
  if (isAuthenticated()) return <Route {...props} />
  return <Redirect to="/login" />
}

export default PrivateRoute;
