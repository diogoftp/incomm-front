import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Divider, message, Tooltip } from 'antd';
import { CreditCardOutlined, LockOutlined } from '@ant-design/icons';
import api from '../../services/api';
import { setToken } from '../../services/auth';
import './style.css';

const Login = (props: any): JSX.Element => {
  const [cardTooltipVisible, setCardTooltipVisible] = useState<boolean>(false);
  const [passwordTooltipVisible, setPasswordTooltipVisible] = useState<boolean>(false);

  const onFinish = (values: { card_number: string, password: string }) => {
    api.post('/login', values).then((response: any) => {
      if (response && response.success) {
        setToken(response.data.token);
        props.history.push('/');
        message.success(response.message);
      }
      else {
        if (response && response.message) message.error(response.message);
      }
    });
  }

  const validateInput = (event: React.KeyboardEvent, regex: string, target: string) => {
    const allowedChars = new RegExp(regex);
    let pressedKey = event.key;
    if (!allowedChars.test(pressedKey)) {
      if (target === 'card') {
        if (!cardTooltipVisible) {
          setCardTooltipVisible(true);
          setTimeout(function () { setCardTooltipVisible(false); }, 1000);
        }
      }
      else if (target === 'password') {
        if (!passwordTooltipVisible) {
          setPasswordTooltipVisible(true);
          setTimeout(function () { setPasswordTooltipVisible(false); }, 1000);
        }
      }
      event.preventDefault();
      return false;
    }
  }

  return (
    <div className="login-container-wrapper">
      <div className="login-container">
        <Row>
          <Col span={24}>
            <Divider>Login</Divider>
          </Col>
          <Col span={24}>
            <Form
              name="login"
              onFinish={onFinish}
            >
              <Form.Item
                name="card_number"
                rules={[
                  {
                    required: true,
                    message: 'Esse campo é obrigatório'
                  },
                  {
                    min: 16,
                    max: 16,
                    message: 'Esse campo deve conter exatamente 16 números',
                    validateTrigger: 'onSubmit'
                  }
                ]}
              >
                <Input
                  size="large"
                  addonBefore={<Tooltip title="Apenas números são permitidos" visible={cardTooltipVisible}><CreditCardOutlined /></Tooltip>}
                  placeholder="Número do cartão"
                  maxLength={16}
                  onKeyPress={(event) => validateInput(event, '[0-9]', 'card')}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Esse campo é obrigatório'
                  },
                  {
                    min: 6,
                    max: 6,
                    message: 'Esse campo deve conter exatamente 6 letras ou números',
                    validateTrigger: 'onSubmit'
                  }
                ]}
              >
                <Input
                  size="large"
                  addonBefore={<Tooltip title="Apenas números e letras são permitidos" visible={passwordTooltipVisible}><LockOutlined /></Tooltip>}
                  type="password"
                  placeholder="Senha"
                  maxLength={6}
                  onKeyPress={(event) => validateInput(event, '[0-9a-zA-Z]', 'password')}
                />
              </Form.Item>
              <div className="login-btn">
                <Button
                  type="primary"
                  htmlType="submit"
                >
                  Login
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Login;
