import React from 'react';
import { Form, Input, Button } from 'antd';

export const SignUpForm = () => (
  <Form
    style={{ minWidth: '400px' }}
    name="normal_login"
    className="login-form"
  >
    <Form.Item
      name="name"
      rules={[
        {
          required: true,
          message: 'Please type your Name',
        },
      ]}
    >
      <Input
        autoFocus
        placeholder="Name"
      />
    </Form.Item>
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
        Register
      </Button>
    </Form.Item>
    Or <a href="/signin">Sign In now!</a>
  </Form>
);
