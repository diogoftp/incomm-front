import React from 'react';
import { Row, Col, Form, Input, Button, Divider, message } from 'antd';
import { CreditCardOutlined, LockOutlined } from '@ant-design/icons';
import api from '../../services/api';
import { setToken } from '../../services/auth';

const Login = (props: any): JSX.Element => {
  const onFinish = (values: { card_number: string, password: string }) => {
    api.post('/login', values).then((response: any) => {
      if (response && response.success) {
        setToken(response.data.token);
        props.history.push('/');
        message.success(response.message);
      }
      else {
        if (response && response.message) message.warning(response.message);
      }
    });
  }

  const validateInput = (event: React.KeyboardEvent, regex: string) => {
    const allowedChars = new RegExp(regex);
    let pressedKey = event.key;
    if (!allowedChars.test(pressedKey)) {
      event.preventDefault();
      return false;
    }
  }

  return (
    <div className="main-container">
      <div className="container">
        <Row>
          <Col span={24}>
            <Divider>Login</Divider>
          </Col>
          <Col span={24}>
            <Form
              name="login"
              onFinish={onFinish}
            >
              <Form.Item name="card_number">
                <Input
                  size="large"
                  addonBefore={<CreditCardOutlined />}
                  placeholder="Número do cartão"
                  maxLength={16}
                  onKeyPress={(event) => validateInput(event, "[0-9]")}
                />
              </Form.Item>
              <Form.Item
                name="password"
              >
                <Input
                  size="large"
                  addonBefore={<LockOutlined />}
                  type="password"
                  placeholder="Senha"
                  maxLength={6}
                  onKeyPress={(event) => validateInput(event, "[0-9a-zA-Z]")}
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
