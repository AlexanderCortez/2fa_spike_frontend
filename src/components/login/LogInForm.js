import React from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';

export const LoginForm = ({
  handleLogin,
}) => (
  <Form
    style={{ minWidth: '400px' }}
    name="normal_login"
    className="login-form"
    onFinish={handleLogin}
  >
    <Form.Item
      name="email"
      rules={[
        {
          required: true,
          message: 'Please type your Email',
        },
        {
          type: 'email',
          message: 'The input is not valid E-mail',
        },
      ]}
    >
      <Input
        autoFocus
        placeholder="Email"
      />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Please type your Password',
        },
      ]}
    >
      <Input
        type="password"
        placeholder="Password"
      />
    </Form.Item>

    <Form.Item>
      <Button
        type="primary"
        htmlType="submit"
      >
        Log in
      </Button>
    </Form.Item>
    Or <a href="/signup">register now!</a>
  </Form>
);

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};
