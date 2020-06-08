import React, { Component } from 'react';
import styled from 'styled-components';
import { LoginForm } from './LoginForm';

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <h1>Sign In</h1>
        <div className="content">
          <LoginForm />
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
