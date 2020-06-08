import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LoginForm } from './LogInForm';
import { openNotificationWithIcon } from '../global/ui/Notification';

export class LoginComponent extends Component {
  componentDidMount() {
    const { logged, history } = this.props;
    if (logged === true) {
      history.push('/');
    }
  }

  handleLogin = (data) => {
    const { signIn, history } = this.props;
    signIn(data)
      .then(() => {
        openNotificationWithIcon(
          'success',
          'Login',
          'Signed in successfully',
        );
        history.push('/');
      })
      .catch(() => {
        openNotificationWithIcon(
          'error',
          'Login',
          'Invalid credentials',
        );
      });
  }

  render() {
    return (
      <Wrapper>
        <h1>Sign In</h1>
        <div className="content">
          <LoginForm
            handleLogin={this.handleLogin}
          />
        </div>
      </Wrapper>
    );
  }
}

LoginComponent.propTypes = {
  signIn: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const Wrapper = styled.div`
  h1 {
    text-align: center;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  width: 100%;
  min-height: 100vh;
  padding-top: 40px;
`;
