import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import Login from './pages/login';
import Info from './pages/info';
import PrivateRoute from './components/privateRoute';
import './App.css';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

function App() {
  return (
    <ConfigProvider locale={ptBR}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Info} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/info" component={Info} />
        </Switch>
      </Router>
    </ConfigProvider>
  );
}

export default App;
