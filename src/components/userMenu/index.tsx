import React from 'react';
import { message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { removeToken } from '../../services/auth';
import './style.css';


/**
 * Component for the top navigation menu.
 */
const UserMenu = (): JSX.Element => {
  const history = useHistory();

  const logout = () => {
    removeToken();
    message.success('Logout realizado com sucesso');
    history.push('/login');
  }

  return (
    <div className="topMenu">
      <button onClick={logout}>Sair</button>
      <span><UserOutlined /></span>
    </div>
  );
}

export default UserMenu;
