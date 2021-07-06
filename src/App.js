import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Info from './pages/info';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path="/info" component={Info} />
      </Switch>
    </Router>
  );
}

export default App;
