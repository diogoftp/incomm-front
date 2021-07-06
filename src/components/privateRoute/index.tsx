import { isAuthenticated } from '../../services/auth';
import { Redirect, Route } from 'react-router-dom';

interface IPrivateRoute {
  path: string,
  component: any,
  exact?: boolean
}

const PrivateRoute = (props: IPrivateRoute): JSX.Element => {
  if (isAuthenticated()) return <Route {...props} />
  return <Redirect to="/login" />
}

export default PrivateRoute;
