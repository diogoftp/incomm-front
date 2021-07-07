import React from 'react';
import { message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { removeToken } from '../../services/auth';
import { useHistory } from 'react-router-dom';
import './style.css';

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
