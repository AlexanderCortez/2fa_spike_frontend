import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Sidebar } from './sidebar/SideBar';
import Navbar from './navbar/Navbar';

export const MainWrapper = (props) => {
  const { children, history } = props;
  return (
    <Wrapper>
      <Sidebar />
      <BodyWrapper>
        <Navbar
          history={history}
        />
        <Body>
          {children}
        </Body>
      </BodyWrapper>
    </Wrapper>
  );
};

MainWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

const Wrapper = styled.div`
  min-height: 100vh;
`;

const BodyWrapper = styled.div`
  margin-left: 225px;
`;

const Body = styled.div`
  padding: 0 30px;
`;
