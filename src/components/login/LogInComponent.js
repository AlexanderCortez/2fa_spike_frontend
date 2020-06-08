import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LoginForm } from './LogInForm';
import { openNotificationWithIcon } from '../global/ui/Notification';
import { TwoStepAuthModal } from './TwoStepAuthModal';

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twoStepModalShow: false,
      accessToken: '',
      loading: false,
    };
  }

  componentDidMount() {
    const { logged, history } = this.props;
    if (logged === true) {
      history.push('/');
    }
  }

  openTwoStepVerificationModal = () => {
    this.setState({
      twoStepModalShow: true,
    });
  }

  closeTwoStepVerificationModal = () => {
    this.setState({
      twoStepModalShow: false,
    });
  }

  showSignInSuccessNotification = () => {
    openNotificationWithIcon(
      'success',
      'Login',
      'Signed in successfully',
    );
  }

  changeLoadingStatus = (loading) => {
    this.setState({ loading });
  }

  handleLogin = (data) => {
    const { loading } = this.state;
    const { signIn, history, setAsLogged } = this.props;
    if (!loading) {
      this.changeLoadingStatus(true);
      signIn(data)
        .then((response) => {
          const { user, accessToken } = response;
          if (user.twoAuthEnabled) {
            this.setState({ accessToken });
            this.openTwoStepVerificationModal();
          } else {
            this.showSignInSuccessNotification();
            setAsLogged(accessToken);
            history.push('/');
          }
          this.changeLoadingStatus(false);
        })
        .catch(() => {
          openNotificationWithIcon(
            'error',
            'Login',
            'Invalid credentials',
          );
          this.changeLoadingStatus(false);
        });
    }
  }

  handleTwoStepVerification = (data) => {
    const { validateTwoStepToken, history, setAsLogged } = this.props;
    const { accessToken, loading } = this.state;
    if (!loading) {
      this.changeLoadingStatus(true);
      validateTwoStepToken(data.token, accessToken)
        .then(() => {
          openNotificationWithIcon(
            'success',
            'Two-Step Verification',
            'Token Validated',
          );
          this.changeLoadingStatus(false);
          setAsLogged(accessToken);
          history.push('/');
        })
        .catch((err) => {
          openNotificationWithIcon(
            'error',
            'Two-Step Verification',
            err.message || 'Error to validate Token',
          );
          this.changeLoadingStatus(false);
        });
    }
  }

  render() {
    const { twoStepModalShow, loading } = this.state;
    return (
      <Wrapper>
        <h1>Sign In</h1>
        <div className="content">
          <LoginForm
            handleLogin={this.handleLogin}
          />
        </div>
        <TwoStepAuthModal
          loading={loading}
          handleOk={this.handleTwoStepVerification}
          visible={twoStepModalShow}
          handleCancel={this.closeTwoStepVerificationModal}
        />
      </Wrapper>
    );
  }
}

LoginComponent.propTypes = {
  signIn: PropTypes.func.isRequired,
  validateTwoStepToken: PropTypes.func.isRequired,
  setAsLogged: PropTypes.func.isRequired,
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
