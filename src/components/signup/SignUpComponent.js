import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SignUpForm } from './SignUpForm';
import { openNotificationWithIcon } from '../global/ui/Notification';

export class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  changeLoadingStatus = (loading) => {
    this.setState({ loading });
  }

  handleSignUp = (data) => {
    const { signUp, history } = this.props;
    const { loading } = this.state;
    if (!loading) {
      this.changeLoadingStatus(true);
      signUp(data)
        .then(() => {
          this.changeLoadingStatus(false);
          openNotificationWithIcon(
            'success',
            'Create Account',
            'Account created successfully!',
          );
          history.push('/signin');
        })
        .catch((err) => {
          openNotificationWithIcon(
            'error',
            'Create Account',
            err.message || 'Error to sign up',
          );
          this.changeLoadingStatus(false);
        });
    }
  }

  render() {
    const { loading } = this.state;
    return (
      <Wrapper>
        <h1>Register Account</h1>
        <div className="content">
          <SignUpForm
            loading={loading}
            handleSignUp={this.handleSignUp}
          />
        </div>
      </Wrapper>
    );
  }
}

SignUpComponent.propTypes = {
  signUp: PropTypes.func.isRequired,
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
