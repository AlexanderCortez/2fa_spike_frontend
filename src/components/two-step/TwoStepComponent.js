import React, { Component } from 'react';
import styled from 'styled-components';
import { Steps } from './Steps';

export class TwoStepComponent extends Component {
  handleUpdate = () => {
  }

  render() {
    return (
      <Wrapper>
        <p className="title">
          Two-Step Verification
        </p>
        <p>
          Setting up two-step verification is easy, just follow the steps below.
        </p>
        <p>
          Name: Alexander Cortez
        </p>
        <Steps />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  .title {
    font-weight: 500;
    font-size: 20px;
    color: #172B4D;
  }
`;
