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
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
