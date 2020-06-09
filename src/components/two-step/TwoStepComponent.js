import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Steps } from './Steps';
import { openNotificationWithIcon } from '../global/ui/Notification';

export class TwoStepComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    const { generateQR, currentUser } = this.props;
    if (!currentUser.twoAuthEnabled) {
      generateQR();
    }
  }

  changeLoadingStatus = (loading) => {
    this.setState({
      loading,
    });
  }

  handleActivation = (data) => {
    const { verificationToken } = data;
    const { activateTwoStep, signOut, history } = this.props;
    activateTwoStep(verificationToken)
      .then(() => {
        this.changeLoadingStatus(false);
        openNotificationWithIcon(
          'success',
          'Enable Two-Step',
          'Activation successfully, please re-login',
        );
        signOut(history);
      })
      .catch((err) => {
        openNotificationWithIcon(
          'error',
          'Enable Two-Step',
          err.message || 'Error to activate two-step',
        );
        this.changeLoadingStatus(false);
      });
  }

  handleDeactivation = () => {
    const { deactivateTwoStep } = this.props;
    deactivateTwoStep()
      .then(() => {
        this.changeLoadingStatus(false);
        openNotificationWithIcon(
          'success',
          'Disable Two-Step',
          'Deactivation successfully',
        );
      })
      .catch((err) => {
        openNotificationWithIcon(
          'error',
          'Disable Two-Step',
          err.message || 'Error to disable two-step',
        );
        this.changeLoadingStatus(false);
      });
  }

  renderSteps = () => {
    const { loading } = this.state;
    const { qrImage, currentUser, secretKey } = this.props;
    if (!currentUser.twoAuthEnabled) {
      return (
        <Steps
          userEmail={currentUser.email}
          secretKey={secretKey}
          loading={loading}
          handleActivation={this.handleActivation}
          qrImage={qrImage}
        />
      );
    }
    return (
      <Button
        loading={loading}
        onClick={this.handleDeactivation}
        type="primary"
      >
        Disable two-step verification
      </Button>
    );
  }

  render() {
    const { currentUser } = this.props;
    return (
      <Wrapper>
        <p className="title">
          Two-Step Verification
        </p>
        <p>
          Setting up two-step verification is easy, just follow the steps below.
        </p>
        <p>
          Name: {currentUser.name || ''}
        </p>
        {this.renderSteps()}
      </Wrapper>
    );
  }
}

TwoStepComponent.propTypes = {
  generateQR: PropTypes.func.isRequired,
  qrImage: PropTypes.string.isRequired,
  secretKey: PropTypes.string.isRequired,
  activateTwoStep: PropTypes.func.isRequired,
  deactivateTwoStep: PropTypes.func.isRequired,
  currentUser: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  signOut: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  .title {
    font-weight: 500;
    font-size: 20px;
    color: #172B4D;
  }
`;
