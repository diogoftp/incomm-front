import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Info from './pages/info';
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Info} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/info" component={Info} />
      </Switch>
    </Router>
  );
}

export default App;
