import React, { Component } from 'react';
import styled from 'styled-components';
import { SignUpForm } from './SignUpForm';

export class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <h1>Register Account</h1>
        <div className="content">
          <SignUpForm />
        </div>
      </Wrapper>
    );
  }
}

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
