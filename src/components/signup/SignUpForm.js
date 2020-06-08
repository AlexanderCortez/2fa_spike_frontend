import React from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';

export const SignUpForm = ({
  handleSignUp,
  loading,
}) => (
  <Form
    style={{ minWidth: '400px' }}
    className="login-form"
    onFinish={handleSignUp}
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
        {
          min: 6,
          message: 'The Password must have at least 6 characters',
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
        loading={loading}
        type="primary"
        htmlType="submit"
      >
        Register
      </Button>
    </Form.Item>
    Or <a href="/signin">Sign In now!</a>
  </Form>
);


SignUpForm.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

SignUpForm.defaultProps = {
  loading: false,
};
